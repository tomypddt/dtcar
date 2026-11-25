import {guideSearchTitles} from "@/app/data/search-titles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { JsonLd } from "@/app/components/JsonLd";
import { guides, guidePath } from "@/app/data/guides";
import { services, servicePath } from "@/app/data/services";
import { brand, organization, origin, pageMetadata } from "@/app/data/site";
import "../../business/[slug]/service.css";
import "../guides.css";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => guides.map(({slug}) => ({slug}));
const getGuide = (slug: string) => guides.find(g => g.slug === slug) ?? notFound();
export async function generateMetadata({params}: Props) {
 const g = getGuide((await params).slug);
 return pageMetadata({path: guidePath(g.slug), title: guideSearchTitles[g.slug] ?? g.title + " | DT Car", description:g.description, image:g.photo ?? `/images/guides/${g.slug}.png`, published:g.date, locale:g.lang === 'vi' ? 'vi_VN' : g.lang === 'fil-PH' ? 'fil_PH' : 'en_PH'});
}
export default async function GuidePage({params}: Props) {
 const g=getGuide((await params).slug), service=services.find(s=>s.slug===g.service), url=origin+guidePath(g.slug);
 const filipinoDriverApplication = g.lang === "fil-PH" && g.service === "green-gsm-driver-application";
 const isTravel = g.service === "travel";
 const isCalculator = g.service === "ev-cost-calculator";
 const action = isTravel
   ? {href:"/travel/", label:g.lang === "vi" ? "Hỏi giá qua DT Tour" : "Request a private transport quote"}
   : isCalculator ? {href:"/tools/ev-cost-calculator/", label:"Estimate your EV energy cost"}
   : g.lang === "vi" ? {href:"https://m.me/dtcarphil", label:"Liên hệ đội tiếng Việt"}
   : g.lang === "fil-PH" ? {href:servicePath(g.service), label:filipinoDriverApplication ? "Makipag-ugnayan tungkol sa driver application" : "Tingnan ang rental guide"}
   : service?.action ?? {href:"/contact/",label:"Contact DT Car"};
 const actionText = isTravel
   ? (g.lang === "vi" ? "Gửi DT Tour ngày đi, địa điểm đón và số khách để hỏi xe phù hợp." : "Send DT Tour your travel date, group size, pickup and drop-off for a route-specific quotation.")
   : isCalculator ? "Use your distance, consumption and local rate to estimate the energy portion of your budget."
   : filipinoDriverApplication ? "Para makausap ang DT Car, buksan ang recruitment page at piliin ang contact ng driver recruitment team." : service?.summary;
 const related = guides.filter(other => g.related.includes(other.slug) || other.related.includes(g.slug));
 return <SubPage><JsonLd data={{"@graph":[{"@type":"Article","@id":url+'#article',headline:g.title,description:g.description,mainEntityOfPage:url,url,datePublished:g.date,dateModified:g.date,inLanguage:g.lang,image:[origin+(g.photo ?? `/images/guides/${g.slug}.png`)],author:{"@type":"Organization",name:brand,url:origin+'/about/'},publisher:organization},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Home',item:origin+'/'},{"@type":"ListItem",position:2,name:'Guides',item:origin+'/guides/'},{"@type":"ListItem",position:3,name:g.title,item:url}]}]}}/>
 <article className="serviceGuide knowledgeArticle" lang={g.lang}>
 <nav className="guideCrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides/">Guides</Link><span>/</span><span>{g.category}</span></nav>
 <header className="knowledgeHead"><p className="eyebrow">{g.category}</p><h1>{g.title}</h1><p>{g.description}</p><small>DT Car Philippines · <time dateTime={g.date}>{new Intl.DateTimeFormat('en-GB', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(g.date))}</time></small></header>
 <div className="guideLayout"><div className="guideContent">
 <aside className="answerBox"><strong>{g.lang==='vi'?'Trả lời nhanh':g.lang==='fil-PH'?'Maikling sagot':'Quick answer'}</strong><p>{g.summary}</p></aside>
 <nav className="articleContents" aria-label="On this page"><strong>{g.lang==='vi'?'Trong bài này':g.lang==='fil-PH'?'Sa gabay na ito':'On this page'}</strong><ol>{g.sections.map((s,i)=><li key={s.heading}><a href={'#section-'+i}>{s.heading}</a></li>)}</ol></nav>
 <figure className="checklistGraphic"><img src={g.photo ?? `/images/guides/${g.slug}.svg`} width="1200" height="630" alt={g.photo ? '' : g.lang==='vi'?'Danh sách chuẩn bị được trình bày đầy đủ bên dưới':g.lang==='fil-PH'?'Checklist na nakasulat din sa ibaba':'Preparation checklist, also listed in full below'} />{g.photo === "/images/web/used-car.webp" && <figcaption>DT Car used-car archive photo.</figcaption>}</figure>
 {g.sections.map((s,i)=><section id={'section-'+i} key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}
 <section className="takeaway"><h2>{g.lang==='vi'?'Danh sách cần chuẩn bị':g.lang==='fil-PH'?'Checklist bago magpatuloy':'Your preparation checklist'}</h2><ul>{g.checklist.map(c=><li key={c}>{c}</li>)}</ul></section>
 {g.references.length>0&&<section className="sourceList"><h2>{g.lang==='vi'?'Nguồn và thông tin liên quan':g.lang==='fil-PH'?'Mga sanggunian':'Sources and further reading'}</h2><ul>{g.references.map(r=><li key={r.href}><a href={r.href}>{r.label}</a></li>)}</ul><p>Information checked {new Intl.DateTimeFormat('en-GB', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(g.date))}. Confirm current terms before booking or paying.</p></section>}
 <section><h2>{g.lang==='vi'?'Trao đổi với DT Car':g.lang==='fil-PH'?'Kausapin ang DT Car':'Take the next step'}</h2><p>{actionText}</p><a className="guideAction" href={action.href}>{action.label} →</a></section>
 </div><aside className="guideAside"><h2>DT Car services</h2><ul>{service&&<li><Link href={servicePath(service.slug)}>{service.name}</Link></li>}<li><Link href="/contact/">Contact and language options</Link></li><li><Link href="/tools/ev-cost-calculator/">EV energy cost calculator</Link></li><li><Link href="/guides/">All practical guides</Link></li></ul>{related.length>0&&<div><strong>Related guides</strong>{related.map(r=><Link key={r.slug} href={guidePath(r.slug)}>{r.title}</Link>)}</div>}<div><strong>About these guides</strong><p>Prepared by DT Car Philippines. Manufacturer terms are linked where applicable. <Link href="/editorial-policy/">Read our editorial policy.</Link></p></div></aside></div>
 </article></SubPage>
}
