import { PageHero, SubPage } from "../components/Subpage";
import { articles } from "../data/stories";
export default function NewsPage(){return <SubPage>
  <PageHero label="DT CAR JOURNAL" title="Field stories, told properly." text="Long-form reporting from DT Car's workshops, vehicle business, fleet projects, charging infrastructure, community work and travel team." image="/images/gsm-launch.jpeg"/>
  <section className="journalIntro"><p className="eyebrow">BUSINESS EDITIONS</p><h2>One subject per story. Every photograph in its proper context.</h2><p>Each edition below is a complete article with project background, operational detail and an original multi-image gallery.</p></section>
  <section className="journalGrid">{articles.map((a,i)=><article className={i===0?"journalCard featured":"journalCard"} key={a.slug}><a className="journalThumb" href={`/news/${a.slug}`}><img src={a.hero} alt={a.title}/></a><div><small>{a.category}</small><h2><a href={`/news/${a.slug}`}>{a.title}</a></h2><p>{a.dek}</p><a className="readLink" href={`/news/${a.slug}`}>Read the full story →</a></div></article>)}</section>
 </SubPage>}
