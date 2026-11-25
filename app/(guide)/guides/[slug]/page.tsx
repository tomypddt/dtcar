import { guideAlternates } from "@/app/data/guide-alternates";
import { guideLabels, guideLocale } from "@/app/data/guide-labels";
import {guideSearchTitles} from "@/app/data/search-titles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { JsonLd } from "@/app/components/JsonLd";
import { guides, guidePath } from "@/app/data/guides";
import { services, servicePath } from "@/app/data/services";
import { brand, organization, origin, pageMetadata } from "@/app/data/site";
import "@/app/(en)/business/[slug]/service.css";
import "@/app/(en)/guides/guides.css";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => guides.map(({slug}) => ({slug}));
const getGuide = (slug: string) => guides.find(g => g.slug === slug) ?? notFound();
export async function generateMetadata({params}: Props) {
 const g = getGuide((await params).slug);
 return pageMetadata({path: guidePath(g.slug), title: guideSearchTitles[g.slug] ?? g.title + " | DT Car", description:g.description, languages:guideAlternates(g.slug), image:g.photo ?? `/images/guides/${g.slug}.png`, published:g.date, locale:guideLocale(g.lang)});
}
export default async function GuidePage({params}: Props) {
 const g=getGuide((await params).slug), service=services.find(s=>s.slug===g.service), url=origin+guidePath(g.slug);
 const filipinoDriverApplication = g.lang === "fil-PH" && g.service === "green-gsm-driver-application";
 const isTravel = g.service === "travel";
 const isCalculator = g.service === "ev-cost-calculator";
 const labels = guideLabels(g.lang);
 const formattedDate = new Intl.DateTimeFormat(g.lang, {day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(g.date));
 const languageContacts: Record<string,string> = {vi:"https://m.me/dtcarphil","zh-Hans":"https://m.me/61552426496371",ko:"https://m.me/61581792126050"};
 const languageContact = languageContacts[g.lang];
 const action = isTravel ? {href:"/travel/",label:labels.travel}
   : isCalculator ? {href:"/tools/ev-cost-calculator/",label:labels.calculator}
   : languageContact ? {href:languageContact,label:labels.message}
   : g.lang === "fil-PH" ? {href:servicePath(g.service),label:filipinoDriverApplication ? "Makipag-ugnayan tungkol sa driver application" : g.service === "green-gsm-rental-pasada" ? "Tingnan ang rental guide" : labels.continue}
   : service?.action ?? {href:"/contact/",label:labels.message};
 const actionText = g.lang === "en-PH" ? (isTravel ? "Send your route, travel date and group size to DT Tour." : isCalculator ? "Use your local rate and expected driving distance." : service?.summary) : undefined;
 const related = guides.filter(other => g.related.includes(other.slug) || other.related.includes(g.slug));
 return <SubPage><JsonLd data={{"@graph":[{"@type":"Article","@id":url+'#article',headline:g.title,description:g.description,mainEntityOfPage:url,url,datePublished:g.date,dateModified:g.date,inLanguage:g.lang,image:[origin+(g.photo ?? `/images/guides/${g.slug}.png`)],author:{"@type":"Organization",name:brand,url:origin+'/about/'},publisher:organization},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Home',item:origin+'/'},{"@type":"ListItem",position:2,name:'Guides',item:origin+'/guides/'},{"@type":"ListItem",position:3,name:g.title,item:url}]}]}}/>
 <article className="serviceGuide knowledgeArticle" lang={g.lang}>
 <nav className="guideCrumbs" aria-label="Breadcrumb"><Link href="/">{labels.home}</Link><span>/</span><Link href="/guides/">{labels.guides}</Link><span>/</span><span>{g.category}</span></nav>
 <header className="knowledgeHead"><p className="eyebrow">{g.category}</p><h1>{g.title}</h1><p>{g.description}</p><small>DT Car Philippines · <time dateTime={g.date}>{formattedDate}</time></small></header>
 <div className="guideLayout"><div className="guideContent">
 <aside className="answerBox"><strong>{labels.quick}</strong><p>{g.summary}</p></aside>
 <nav className="articleContents" aria-label="On this page"><strong>{labels.contents}</strong><ol>{g.sections.map((s,i)=><li key={s.heading}><a href={'#section-'+i}>{s.heading}</a></li>)}</ol></nav>
 <figure className="checklistGraphic"><img src={g.photo ?? `/images/guides/${g.slug}.svg`} width="1200" height="630" lang={g.photoAlt ? 'en' : undefined} alt={g.photo ? (g.photoAlt ?? '') : g.lang==='vi'?'Danh sách chuẩn bị được trình bày đầy đủ bên dưới':g.lang==='fil-PH'?'Checklist na nakasulat din sa ibaba':'Preparation checklist, also listed in full below'} />{g.photoSource && <figcaption><a href={g.photoSource}>DT Car · Facebook</a></figcaption>}</figure>
 {g.sections.map((s,i)=><section id={'section-'+i} key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}
 <section className="takeaway"><h2>{labels.checklist}</h2><ul>{g.checklist.map(c=><li key={c}>{c}</li>)}</ul></section>
 {g.references.length>0&&<section className="sourceList"><h2>{labels.sources}</h2><ul>{g.references.map(r=><li key={r.href}><a href={r.href}>{r.label}</a></li>)}</ul><p>{labels.checked} · {formattedDate}</p></section>}
 <section><h2>{labels.next}</h2>{actionText && <p>{actionText}</p>}<a className="guideAction" href={action.href}>{action.label} →</a></section>
 </div><aside className="guideAside"><h2>{labels.services}</h2><ul>{service&&<li><Link href={servicePath(service.slug)}>{service.name}</Link></li>}<li><Link href="/contact/">{labels.contact}</Link></li><li><Link href="/tools/ev-cost-calculator/">{labels.calculator}</Link></li><li><Link href="/guides/">{labels.guides}</Link></li></ul>{related.length>0&&<div><strong>{labels.related}</strong>{related.map(r=><Link key={r.slug} href={guidePath(r.slug)}>{r.title}</Link>)}</div>}<div><strong>{labels.about}</strong><p>DT Car Philippines · <Link href="/editorial-policy/">{labels.policy}</Link></p></div></aside></div>
 </article></SubPage>
}
