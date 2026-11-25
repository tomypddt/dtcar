from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,xml.etree.ElementTree as ET
root=Path('out');errors=[]
class Page(HTMLParser):
 def __init__(self):super().__init__();self.h1=0;self.links=[];self.canon=[];self.ids=[];self.ld=[];self.inld=False;self.buffer='';self.title='';self.intitle=False
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='h1':self.h1+=1
  if t=='title':self.intitle=True
  if 'id'in a:self.ids.append(a['id'])
  if t=='a' and 'href'in a:self.links.append(a['href'])
  if t=='img' and 'src'in a:self.links.append(a['src'])
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a['href'])
  if t=='script' and a.get('type')=='application/ld+json':self.inld=True;self.buffer=''
 def handle_data(self,s):
  if self.inld:self.buffer+=s
  if self.intitle:self.title+=s
 def handle_endtag(self,t):
  if t=='title':self.intitle=False
  if t=='script' and self.inld:self.ld.append(json.loads(self.buffer));self.inld=False
urls=[e.text for e in ET.parse(root/'sitemap.xml').findall('.//{*}loc')]
seen={}
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
print(json.dumps({'sitemap_urls':len(urls),'unique_titles':len(seen),'errors':errors},indent=2))
raise SystemExit(bool(errors))
