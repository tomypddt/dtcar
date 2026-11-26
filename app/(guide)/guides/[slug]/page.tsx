import { SalesEnquiry } from "@/app/components/SalesEnquiry";
import { guideAlternates } from "@/app/data/guide-alternates";
import { guideLabels, guideLocale } from "@/app/data/guide-labels";
import {guideSearchTitles} from "@/app/data/search-titles";
import { adLandings, adPath } from "@/app/data/ad-landings";
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
function closedGuideDescription(g: typeof guides[number]) {
 return g.service.startsWith("green-gsm-") ? (g.lang === "fil-PH" ? "Sarado ang pampublikong intake ng DT Car. " : "DT Car public intake is closed. ") + g.description : g.description;
}
export async function generateMetadata({params}: Props) {
 const g = getGuide((await params).slug);
 return pageMetadata({path: guidePath(g.slug), title: guideSearchTitles[g.slug] ?? g.title + " | DT Car", description:closedGuideDescription(g), languages:guideAlternates(g.slug), image:g.photo ?? `/images/guides/${g.slug}.png`, published:g.date, locale:guideLocale(g.lang)});
}
export default async function GuidePage({params}: Props) {
 const g=getGuide((await params).slug), service=services.find(s=>s.slug===g.service), url=origin+guidePath(g.slug);
 const landingSlugs: Record<string,string> = {
   "used-cars-manila":"used-cars", "sell-my-car-manila":"sell-your-car",
   "vinfast-test-drive":"vinfast", "vinfast-vf6-vf7-philippines":"vinfast",
   travel:"tour-philippines", "driving-lessons":"hoc-lai-xe", licence:"tu-van-bang-lai"
 };
 const landing = adLandings.find(page => page.slug === landingSlugs[g.service]);
 const closed = g.service === "green-gsm-driver-application" || g.service === "green-gsm-rental-pasada";
 const status = g.lang === "fil-PH" ? "Sarado ang pampublikong recruitment at pagpaparehistro sa rental sa DT Car. Para sa naunang aplikasyon, gamitin ang contact sa iyong kumpirmasyon." : "DT Car has closed public driver recruitment and rental registrations. For an existing case, use the contact on your original confirmation.";
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
 const salesHref = isTravel ? "https://m.me/dulichphilippinesdttour" : languageContact ?? (g.service === "sell-my-car-manila" ? "https://m.me/61596445001029" : "https://m.me/61550266324189");
 const salesLabel = g.lang === "vi" ? (isTravel ? "Nhắn DT Tour để nhận lịch và báo giá" : "Nhắn DT Car bằng tiếng Việt") : g.service === "sell-my-car-manila" ? "Ask for a vehicle appraisal" : g.service === "used-cars-manila" ? "Request available used cars" : "Request a VinFast quote";
 const enquiryLink = salesHref + "?ref=" + encodeURIComponent(g.slug);
 const actionText = g.lang === "en-PH" ? (isTravel ? "Send your route, travel date and group size to DT Tour." : isCalculator ? "Use your local rate and expected driving distance." : service?.summary) : undefined;
 const direct = g.related.map(slug => guides.find(other => other.slug === slug)).filter(other => other !== undefined);
 const related = [...direct, ...guides.filter(other => other.related.includes(g.slug) && !g.related.includes(other.slug))].slice(0, 6);
 const illustrationCredit = ({vi:"Ảnh minh họa do AI tạo · DT Car", "fil-PH":"Larawang likha ng AI · DT Car", "zh-Hans":"AI 插图 · DT Car", ko:"AI 제작 일러스트 · DT Car"} as Record<string, string>)[g.lang] ?? "AI-generated illustration · DT Car";
 return <SubPage><JsonLd data={{"@graph":[{"@type":"Article","@id":url+'#article',headline:g.title,description:g.description,abstract:closed ? status : g.summary,articleSection:g.category,mainEntityOfPage:url,url,datePublished:g.date,dateModified:g.date,inLanguage:g.lang,image:[origin+(g.photo ?? `/images/guides/${g.slug}.png`)],author:{"@type":"Organization",name:brand,url:origin+'/about/'},publisher:organization},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Home',item:origin+'/'},{"@type":"ListItem",position:2,name:'Guides',item:origin+'/guides/'},{"@type":"ListItem",position:3,name:g.title,item:url}]}]}}/>
 <article className="serviceGuide knowledgeArticle" lang={g.lang}>
 <nav className="guideCrumbs" aria-label="Breadcrumb"><Link href="/">{labels.home}</Link><span>/</span><Link href="/guides/">{labels.guides}</Link><span>/</span><span>{g.category}</span></nav>
 <header className="knowledgeHead"><p className="eyebrow">{g.category}</p><h1>{g.title}</h1><p>{g.description}</p><small>DT Car Philippines · <time dateTime={g.date}>{formattedDate}</time></small></header>
 <div className="guideLayout"><div className="guideContent">
 <aside className="answerBox"><strong>{labels.quick}</strong><p>{closed ? status : g.summary}</p></aside>
 <figure className="checklistGraphic leadVisual"><img src={g.photo ?? `/images/guides/${g.slug}.svg`} fetchPriority="high" srcSet={g.photo?.startsWith("/images/editorial/") ? [480, 800].filter(width => width < (g.photoWidth ?? 1200)).map(width => `/images/gallery/guide-cards/${g.slug}-${width}.webp ${width}w`).concat(`${g.photo} ${g.photoWidth ?? 1200}w`).join(", ") : undefined} sizes="(max-width: 850px) 94vw, 780px" width={g.photoWidth ?? 1200} height={g.photoHeight ?? 630} lang={g.photoAlt ? g.lang : undefined} alt={g.photo ? (g.photoAlt ?? '') : g.lang==='vi'?'Danh sách chuẩn bị được trình bày đầy đủ bên dưới':g.lang==='fil-PH'?'Checklist na nakasulat din sa ibaba':'Preparation checklist, also listed in full below'} />{g.photoSource && <figcaption><a href={g.photoSource}>{isTravel ? "DT Tour" : "DT Car"} · Facebook</a></figcaption>}{g.photoKind === "illustration" && <figcaption>{illustrationCredit}</figcaption>}</figure>
 {!closed && g.enquiry && <SalesEnquiry initialMessage={g.enquiry} topic={g.title} vietnamese={g.lang === "vi"} team={isTravel ? "DT Tour" : "DT Car"} messenger={enquiryLink} buttonLabel={salesLabel} service={g.service} />}
 {closed && <p><strong>{g.lang === "fil-PH" ? "Makasaysayang gabay · Dating proseso bago isinara ang intake" : "Archive · The sections below describe the previous programme"}</strong></p>}
 <nav className="articleContents" aria-label="On this page"><strong>{labels.contents}</strong><ol>{g.sections.map((s,i)=><li key={s.heading}><a href={'#section-'+i}>{s.heading}</a></li>)}</ol></nav>

 {g.sections.map((s,i)=><section id={'section-'+i} key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{i === 1 && g.inlinePhoto && <figure className="checklistGraphic supportingVisual">
   <img src={g.inlinePhoto.src} alt={g.inlinePhoto.alt} width={g.inlinePhoto.width} height={g.inlinePhoto.height} loading="lazy" decoding="async" />
   <figcaption><a href={g.inlinePhoto.source}>{isTravel ? "DT Tour" : "DT Car"} · Facebook</a></figcaption>
 </figure>}</section>)}
 <section className="takeaway"><h2>{labels.checklist}</h2><ul>{g.checklist.map(c=><li key={c}>{c}</li>)}</ul></section>
 {g.references.length>0&&<section className="sourceList"><h2>{labels.sources}</h2><ul>{g.references.filter(r => !closed || !/m\.me|platform\.greengsm|facebook\.com/.test(r.href)).map(r=><li key={r.href}><a href={r.href}>{r.label}</a></li>)}</ul><p>{labels.checked} · {formattedDate}</p></section>}
 <section><h2>{labels.next}</h2>{!closed && !g.enquiry && actionText && <p>{actionText}</p>}<a className="guideAction" href={closed ? servicePath(g.service) : g.enquiry ? enquiryLink : action.href} data-enquiry-service={g.enquiry ? g.service : undefined}>{closed ? (g.lang === "fil-PH" ? "Tingnan ang kasalukuyang status" : "Check current programme status") : g.enquiry ? salesLabel : action.label} →</a></section>
 </div><aside className="guideAside"><h2>{labels.services}</h2><ul>{landing && (!isTravel || g.lang === "vi") && <li><Link href={adPath(landing.slug)} lang={landing.lang}>{landing.label}</Link></li>}{isTravel && g.lang !== "vi" && <li><Link href="/travel/">{labels.travel}</Link></li>}{service&&<li><Link href={servicePath(service.slug)}>{service.name}</Link></li>}<li><Link href="/contact/">{labels.contact}</Link></li>{(isCalculator || g.service.includes("vinfast") || g.service.includes("charging")) && <li><Link href="/tools/ev-cost-calculator/">{labels.calculator}</Link></li>}<li><Link href="/guides/">{labels.guides}</Link></li></ul>{related.length>0&&<div><strong>{labels.related}</strong>{related.map(r=><Link key={r.slug} href={guidePath(r.slug)}>{r.title}</Link>)}</div>}<div><strong>{labels.about}</strong><p>DT Car Philippines · <Link href="/editorial-policy/">{labels.policy}</Link></p></div></aside></div>
 </article></SubPage>
}
