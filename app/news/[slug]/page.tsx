import { SubPage } from "../../components/Subpage";
import { articleImages, articles, findArticle } from "../../data/stories";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=findArticle(slug);if(!a)return <SubPage><section className="storyDetail"><h1>Article not found</h1><a href="/news">Back to journal</a></section></SubPage>;
return <SubPage><article className="magazine"><a className="storyBack" href="/news">← All journal editions</a><header className="magHead"><p className="eyebrow">{a.category}</p><h1>{a.title}</h1><p>{a.dek}</p><small>{a.date} · DT Car Philippines</small></header><figure className="magHero"><img src={a.hero} alt={a.title}/></figure>
{a.facts&&<aside className="factStrip">{a.facts.map((f,i)=><div key={f}><strong>{String(i+1).padStart(2,"0")}</strong><span>{f}</span></div>)}</aside>}
<div className="magBody">{a.sections.map((s,i)=><section key={s.heading}><span className="sectionNo">{String(i+1).padStart(2,"0")}</span><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}</div>
<section className="photoEssay"><header><p className="eyebrow">PHOTO ESSAY</p><h2>From the DT Car archive</h2></header><div className="photoMosaic">{articleImages(a).map((src,i)=><figure key={`${src}-${i}`} className={i%7===0?"wide":i%5===0?"tall":""}><img src={src} alt={`${a.title} — photograph ${i+1}`}/><figcaption>{a.category} · {String(i+1).padStart(2,"0")}</figcaption></figure>)}</div></section>
<section className="storyContact"><div><p className="eyebrow">OFFICIAL ENGLISH CHANNEL</p><h2>Continue the conversation with DT Car.</h2></div><a href="https://www.facebook.com/profile.php?id=61550266324189" target="_blank" rel="noreferrer">View &amp; message DT Car →</a></section></article></SubPage>}
