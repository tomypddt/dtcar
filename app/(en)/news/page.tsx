import { galleryPreview } from "@/app/data/gallery";
import { PageHero, SubPage } from "@/app/components/Subpage";
import { articles } from "@/app/data/stories";
import { pageMetadata } from "@/app/data/site";

export const metadata = pageMetadata({
  path: "/news/",
  title: "DT Car News | Vehicle Handovers and Fleet Projects",
  description: "Read DT Car’s field reports from vehicle handovers, Philippine EV workshops, fleet installations, charging sites and community events.",
});

export default function NewsPage(){return <SubPage>
  <PageHero label="DT CAR JOURNAL" title="News from DT Car Philippines" text="Long-form reporting from DT Car's workshops, vehicle business, fleet projects, charging infrastructure, community work and travel team." image="/images/gsm-launch.jpeg"/>
  <section className="journalIntro"><p className="eyebrow">BUSINESS EDITIONS</p><h2>One subject per story. Every photograph in its proper context.</h2><p>Each edition below is a complete article with project background, operational detail and an original multi-image gallery.</p></section>
  <section className="journalGrid">{articles.map((a,i)=><article className={i===0?"journalCard featured":"journalCard"} key={a.slug}><a className="journalThumb" href={`/news/${a.slug}/`}><img src={galleryPreview(a.hero)} alt={a.title} loading={i === 0 ? "eager" : "lazy"}/></a><div><small>{a.category}</small><h2><a href={`/news/${a.slug}/`}>{a.title}</a></h2><p>{a.dek}</p><a className="readLink" href={`/news/${a.slug}/`}>Read the full story →</a></div></article>)}</section>
 </SubPage>}
