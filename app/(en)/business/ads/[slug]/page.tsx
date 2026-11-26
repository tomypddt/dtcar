import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath, adImage, adLandings, adMessenger, adPath, type AdLanding } from "@/app/data/ad-landings";
import { peso, vinfastAdModels, vinfastModelImage, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import { pageMetadata } from "@/app/data/site";
import styles from "../landing.module.css";

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
  return <SubPage><article lang={page.lang} className={styles.wrap}>
    <nav aria-label={vi ? "Đường dẫn" : "Breadcrumb"} className={styles.crumb}><Link href={adHubPath}>{vi ? "Các dịch vụ" : "Customer enquiries"}</Link><span>/</span><span aria-current="page">{page.label}</span></nav>
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.kicker}>{page.area}</p>
        <h1>{page.title}</h1><p className={styles.lead}>{page.summary}</p>
        {page.slug === "vinfast" ? <a className={styles.button} href="#vinfast-models">See the three models ↓</a> : <MessageLink page={page}/>}<p className={styles.hint}>{page.slug === "vinfast" ? "Model photos, prices and offers below" : vi ? "Mở Messenger của đội tư vấn" : "Opens Messenger for the service team"}</p>
      </div>
      <figure className={styles.heroPhoto}><img src={adImage(page.slug)} alt={page.imageAlt} width={1200} height={720} fetchPriority="high"/><figcaption>{page.imageNote}</figcaption></figure>
    </header>
    {page.slug === "vinfast" && <section className={styles.section} id="vinfast-models" style={{scrollMarginTop: "100px"}}>
      <h2>Choose your VinFast model</h2>
      <div className={styles.directoryGrid}>{vinfastAdModels.map((model) => <Link key={model.slug} href={vinfastModelPath(model.slug)} className={styles.card}>
        <img src={vinfastModelImage(model.slug,model.photos[0].key)} alt={model.photos[0].caption} width={1200} height={720} loading="lazy"/>
        <div><p className={styles.kicker}>{model.segment}</p><h2>{model.name}</h2><p>From {peso(model.withPlan)} with battery subscription</p><span>Photos, prices and offers →</span></div>
      </Link>)}</div></section>}
    <section className={styles.section}>
      <h2>{vi ? "Đội tư vấn có thể hỗ trợ gì?" : "What can we help you with?"}</h2>
      <div className={styles.options}>{page.options.map(([title, copy], index) => <div key={title}><span className={styles.kicker}>0{index+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
    </section>
    <section className={styles.panel}><div>
      <h2>{vi ? "Gửi gì trong tin nhắn đầu tiên?" : "What should I include in my first message?"}</h2>
      <ul>{page.brief.map((item) => <li key={item}>{item}</li>)}</ul>
    </div><div><MessageLink page={page}/><Link className={styles.more} href={page.details.href}>{page.details.label} →</Link></div></section>
    <section className={styles.section}><h2>{vi ? "Câu hỏi thường gặp" : "Frequently asked questions"}</h2>
      <div className={styles.faq}>{page.questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
  </article></SubPage>;
}
