from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import parse_qs,urlsplit,unquote
import hashlib,json,xml.etree.ElementTree as ET
root=Path('out');errors=[]
class Page(HTMLParser):
 def __init__(self):super().__init__();self.h1=0;self.links=[];self.canon=[];self.ids=[];self.ld=[];self.inld=False;self.buffer='';self.title='';self.intitle=False;self.figure=None;self.guide_images=[];self.guide_sources=[];self.og_images=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='h1':self.h1+=1
  if t=='title':self.intitle=True
  if 'id'in a:self.ids.append(a['id'])
  if t=='a' and 'href'in a:self.links.append(a['href'])
  if t=='img' and 'src'in a:self.links.append(a['src'])
  if t=='figure':
   self.figure=next((role for role in ('leadVisual','supportingVisual') if role in a.get('class','').split()),None)
  if t=='img' and self.figure:
   self.guide_images.append((self.figure,a))
   self.links.extend(src.strip().split()[0] for src in a.get('srcset','').split(',') if src.strip())
  if t=='a' and self.figure and 'href' in a:self.guide_sources.append(a['href'])
  if t=='meta' and a.get('property')=='og:image':self.og_images.append(a.get('content'))
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a['href'])
  if t=='script' and a.get('type')=='application/ld+json':self.inld=True;self.buffer=''
 def handle_data(self,s):
  if self.inld:self.buffer+=s
  if self.intitle:self.title+=s
 def handle_endtag(self,t):
  if t=='title':self.intitle=False
  if t=='figure':self.figure=None
  if t=='script' and self.inld:self.ld.append(json.loads(self.buffer));self.inld=False
urls=[e.text for e in ET.parse(root/'sitemap.xml').findall('.//{*}loc')]
seen={}
guide_assets={}
guide_sources={}
guides_checked=0
for url in urls:
 path=urlsplit(url).path;f=root/path.lstrip('/')/'index.html';p=Page();p.feed(f.read_text())
 if p.h1!=1:errors.append((path,'H1 count',p.h1))
 if p.canon!=[url]:errors.append((path,'canonical',p.canon))
 if p.title in seen:errors.append((path,'duplicate title',seen[p.title]))
 seen[p.title]=path
 if len(p.ids)!=len(set(p.ids)):errors.append((path,'duplicate IDs'))
 for link in p.links:
  u=urlsplit(link)
  if u.netloc or u.scheme or not link.startswith('/'):continue
  dest=root/unquote(u.path).lstrip('/')
  if not dest.is_file() and not (dest/'index.html').is_file():errors.append((path,'missing target',link))
 if path.startswith('/guides/') and path!='/guides/':
  guides_checked+=1
  lead=[image for role,image in p.guide_images if role=='leadVisual']
  if len(lead)!=1:
   errors.append((path,'guide must have exactly one cover'))
   continue
  image_url='https://'+urlsplit(url).netloc+lead[0].get('src','')
  articles=[item for graph in p.ld for item in graph.get('@graph',[]) if item.get('@type')=='Article']
  if p.og_images!=[image_url] or len(articles)!=1 or articles[0].get('image')!=[image_url]:
   errors.append((path,'guide image metadata differs from cover'))
  for role,image in p.guide_images:
   src=image.get('src','')
   dest=root/src.lstrip('/')
   if not src.startswith('/images/') or not dest.is_file() or not image.get('alt','').strip():
    errors.append((path,'invalid guide image or missing alt text',src))
    continue
   digest=hashlib.sha256(dest.read_bytes()).hexdigest()
   if digest in guide_assets:errors.append((path,'repeated guide image',src,guide_assets[digest]))
   guide_assets[digest]=(path,role)
  for source in p.guide_sources:
   u=urlsplit(source)
   if u.hostname not in ('facebook.com','www.facebook.com'):continue
   for photo_id in parse_qs(u.query).get('fbid',[]):
    if photo_id in guide_sources:errors.append((path,'reused Facebook photo',guide_sources[photo_id]))
    guide_sources[photo_id]=path
print(json.dumps({'sitemap_urls':len(urls),'unique_titles':len(seen),'guides_checked':guides_checked,'unique_guide_images':len(guide_assets),'errors':errors},indent=2))
raise SystemExit(bool(errors))
