import Link from "next/link";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath, adImage, adLandings, adPath } from "@/app/data/ad-landings";
import { pageMetadata } from "@/app/data/site";
import styles from "./landing.module.css";

export const metadata = pageMetadata({
  path: adHubPath, title: "Customer Enquiries | DT Car Philippines",
  description: "Find the right DT Car team for VinFast, used cars, vehicle appraisals, Vietnamese driving and licence guidance, and private Philippines tours.",
  image: adImage("vinfast"),
});

export default function AdLandingDirectory() {
  return <SubPage><div className={styles.wrap}>
    <nav aria-label="Breadcrumb" className={styles.crumb}><Link href="/business/">Business</Link><span>/</span><span>Customer enquiries</span></nav>
    <header className={styles.directoryIntro}><p className={styles.kicker}>DT CAR PHILIPPINES</p><h1>What can we help you with?</h1><p>Choose a service for details and the right team to message. <span lang="vi">Có tư vấn bằng tiếng Việt.</span></p></header>
    <div className={styles.directoryGrid}>{adLandings.map((page) =>
      <Link className={styles.card} key={page.slug} href={adPath(page.slug)} lang={page.lang}>
        <img src={adImage(page.slug)} alt="" width={1200} height={720} loading="lazy" decoding="async"/>
        <div><p className={styles.kicker}>{page.area}</p><h2>{page.label}</h2><span>{page.lang === "vi" ? "Tìm hiểu và liên hệ" : "View service and contact"} →</span></div>
      </Link>
    )}</div>
  </div></SubPage>;
}
