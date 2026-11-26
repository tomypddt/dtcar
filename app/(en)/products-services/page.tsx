import Link from "next/link";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath, adImage, adLandings, adPath } from "@/app/data/ad-landings";
import { compareLimoMpvPath, peso, vinfastAdModels, vinfastHub, vinfastModelImage, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import { pageMetadata } from "@/app/data/site";
import styles from "./landing.module.css";

export const metadata = pageMetadata({
  path: adHubPath, title: "Products / Services | DT Car Philippines",
  description: "Compare VinFast models and find the right DT Car team for used-car purchases, appraisals, driving lessons, licence guidance and Philippines tours.",
  image: adImage("vinfast"),
});

export default function ProductsServices() {
  return <SubPage><div className={styles.wrap}>
    <header className={styles.directoryIntro}><p className={styles.kicker}>DT CAR PHILIPPINES</p><h1>Products / Services</h1><p>Find a car or choose a service. Go directly to the details, prices or team that can help. <span lang="vi">Có tư vấn bằng tiếng Việt.</span></p></header>
    <nav className={styles.quickLinks} aria-label="Product and service categories"><a href="#vinfast">VinFast models</a><a href="#services">Used cars, driving and tours</a></nav>
    <section className={styles.catalogue} id="vinfast"><h2>VinFast models</h2><p><Link href={vinfastHub}>See the full model range →</Link> · <Link href={compareLimoMpvPath}>Compare Limo Green and MPV 7 →</Link></p>
    <div className={styles.directoryGrid}>{vinfastAdModels.map(model=>
      <Link className={styles.card} key={model.slug} href={vinfastModelPath(model.slug)}>
        <img src={vinfastModelImage(model.slug,model.photos[0].key)} alt={model.photos[0].caption} width={1200} height={720} loading="lazy" decoding="async"/>
        <div><p className={styles.kicker}>{model.segment}</p><h3>{model.name}</h3><p>From {peso(model.withPlan)} with battery subscription</p><span>Photos, prices and specifications →</span></div>
      </Link>
    )}</div></section>
    <section className={styles.catalogue} id="services"><h2>Used cars, driving and tours</h2>
    <div className={styles.directoryGrid}>{adLandings.filter(page=>page.slug!=="vinfast").map(page=>
      <Link className={styles.card} key={page.slug} href={adPath(page.slug)} lang={page.lang}>
        <img src={adImage(page.slug)} alt="" width={1200} height={720} loading="lazy" decoding="async"/>
        <div><p className={styles.kicker}>{page.area}</p><h3>{page.label}</h3><span>{page.lang === "vi" ? "Tìm hiểu và liên hệ" : "View service and contact"} →</span></div>
      </Link>
    )}</div></section>
  </div></SubPage>;
}
