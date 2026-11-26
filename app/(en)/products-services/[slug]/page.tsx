import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath, adImage, adLandings, adMessenger, adPath, type AdLanding } from "@/app/data/ad-landings";
import { compareLimoMpvPath, peso, vinfastAdModels, vinfastModelImage, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import { pageMetadata } from "@/app/data/site";
import styles from "../landing.module.css";
import modelStyle from "../vinfast/model.module.css";
import CampaignDetails from "../components/CampaignDetails";
import TourCampaign from "../components/TourCampaign";
import { serviceCampaignDetails } from "@/app/data/service-campaign-details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => adLandings.map(({ slug }) => ({ slug }));

function getPage(slug: string) {
  return adLandings.find((page) => page.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const page = getPage((await params).slug);
  return pageMetadata({
    path: adPath(page.slug), title: page.title + " | DT Car Philippines",
    description: page.summary, image: adImage(page.slug), locale: page.lang === "vi" ? "vi_VN" : "en_PH",
  });
}

function MessageLink({ page }: { page: AdLanding }) {
  return <a className={styles.button} href={adMessenger(page)} target="_blank" rel="noopener noreferrer" data-enquiry-service={page.campaign}>{page.action}<span aria-hidden="true"> ↗</span></a>;
}

export default async function AdLandingPage({ params }: Props) {
  const page = getPage((await params).slug);
  const vi = page.lang === "vi";
  const extra = serviceCampaignDetails[page.slug];
  return <SubPage><article lang={page.lang} className={styles.wrap}>
    <nav aria-label={vi ? "Đường dẫn" : "Breadcrumb"} className={styles.crumb}><Link href={adHubPath}>{vi ? "Sản phẩm / Dịch vụ" : "Products / Services"}</Link><span>/</span><span aria-current="page">{page.label}</span></nav>
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.kicker}>{page.area}</p>
        <h1>{page.title}</h1><p className={styles.lead}>{extra?.focus ?? page.summary}</p>
        {page.slug === "vinfast" ? <a className={styles.button} href="#vinfast-models">See VinFast models ↓</a> : <MessageLink page={page}/>}<p className={styles.hint}>{page.slug === "vinfast" ? "Model photos, prices and offers below" : vi ? "Mở Messenger của đội tư vấn" : "Opens Messenger for the service team"}</p>
      </div>
      <figure className={page.slug === "sell-your-car" ? styles.heroPhoto + " " + styles.portrait : styles.heroPhoto}><img src={adImage(page.slug)} alt={page.imageAlt} width={page.slug === "sell-your-car" ? 512 : 1200} height={page.slug === "sell-your-car" ? 640 : 720} fetchPriority="high"/><figcaption>{page.imageNote}</figcaption></figure>
    </header>
    {page.slug === "vinfast" && <section className={styles.section} id="vinfast-models" style={{scrollMarginTop: "100px"}}>
      <h2>Choose your VinFast model</h2>
      <div className={styles.directoryGrid}>{vinfastAdModels.map((model) => <Link key={model.slug} href={vinfastModelPath(model.slug)} className={styles.card}>
        <img src={vinfastModelImage(model.slug,model.photos[0].key)} alt={model.photos[0].caption} width={1200} height={720} loading="lazy"/>
        <div><p className={styles.kicker}>{model.segment}</p><h2>{model.name}</h2><p>From {peso(model.withPlan)} with battery subscription</p><span>Photos, prices and offers →</span></div>
      </Link>)}</div></section>}
    {page.slug === "vinfast" && <section className={styles.section}><h2>VinFast price and seating at a glance</h2>
      <div className={modelStyle.tableWrap}><table className={modelStyle.variantTable}><caption>Philippines starting prices, by battery option</caption><thead><tr><th scope="col">Model</th><th scope="col">With battery subscription</th><th scope="col">Battery included</th><th scope="col">Seating</th></tr></thead><tbody>{vinfastAdModels.map(m=><tr key={m.slug}><th scope="row"><Link href={vinfastModelPath(m.slug)}>{m.name}</Link></th><td>{peso(m.withPlan)}</td><td>{peso(m.withBattery)}</td><td>{m.seats}</td></tr>)}</tbody></table></div>
      <p className={modelStyle.note}>Starting prices; an ongoing battery subscription fee applies to that option. For VF 6 and VF 7, these rows show the Eco starting price. Open each model for more details.</p>
      <p className={styles.more}><Link href={compareLimoMpvPath}>Compare Limo Green and VF MPV 7 →</Link></p>
    </section>}
    {page.slug === "tour-philippines" ? <TourCampaign page={page}/> : extra ? <CampaignDetails page={page}/> : <>
    <section className={styles.section}>
      <h2>{vi ? "Đội tư vấn có thể hỗ trợ gì?" : "What can we help you with?"}</h2>
      <div className={styles.options}>{page.options.map(([title, copy], index) => <div key={title}><span className={styles.kicker}>0{index+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
    </section>
    <section className={styles.panel}><div>
      <h2>{vi ? "Gửi gì trong tin nhắn đầu tiên?" : "What should I include in my first message?"}</h2>
      <ul>{page.brief.map((item) => <li key={item}>{item}</li>)}</ul>
    </div><div><MessageLink page={page}/><Link className={styles.more} href={page.details.href}>{page.details.label} →</Link></div></section></>}
    <section className={styles.section}><h2>{vi ? "Câu hỏi thường gặp" : "Frequently asked questions"}</h2>
      <div className={styles.faq}>{page.questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
    {extra && <p className={styles.more}><Link href={page.details.href}>{page.details.label} →</Link></p>}
  </article></SubPage>;
}
