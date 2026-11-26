import Link from "next/link";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath, adImage, adPath } from "@/app/data/ad-landings";
import { compareLimoMpvPath } from "@/app/data/vinfast-ad-models";
import { pageMetadata } from "@/app/data/site";
import styles from "./landing.module.css";

export const metadata = pageMetadata({
  path: adHubPath,
  title: "Products / Services | DT Car Philippines",
  description: "Explore VinFast EVs, buy or sell a used car, and find Vietnamese-language driving lessons, licence guidance and Philippines tours.",
  image: adImage("vinfast"),
});

type CategoryPage = { slug: string; lang?: "vi"; title: string; description: string; action: string };

const categories: { id: string; title: string; pages: CategoryPage[] }[] = [
  {
    id: "vinfast", title: "Cars",
    pages: [
      { slug: "vinfast", title: "VinFast", description: "Explore the electric vehicle range, with prices, photos and individual model pages.", action: "Explore VinFast" },
      { slug: "used-cars", title: "Buy a used car", description: "Browse the latest published selection of pre-owned cars, with listed prices and mileage.", action: "See used cars" },
      { slug: "sell-your-car", title: "Sell your car", description: "See how DT Car appraises and buys used cars, and what to send for a quote.", action: "Get an appraisal" },
    ],
  },
  {
    id: "services", title: "Driving and travel",
    pages: [
      { slug: "hoc-lai-xe", lang: "vi", title: "Học lái xe", description: "Tìm hiểu các buổi học lái thực hành tại Philippines và hỏi lịch học bằng tiếng Việt.", action: "Xem dịch vụ học lái" },
      { slug: "tu-van-bang-lai", lang: "vi", title: "Tư vấn bằng lái", description: "Hỏi bằng tiếng Việt về giấy tờ và các bước làm thủ tục bằng lái tại Philippines.", action: "Xem tư vấn bằng lái" },
      { slug: "tour-philippines", lang: "vi", title: "Tour Philippines", description: "Chọn điểm đến, xem giá tham khảo, hình ảnh và lịch trình từng tour của DT Tour.", action: "Xem các tour" },
    ],
  },
];

export default function ProductsServices() {
  return <SubPage><div className={styles.wrap}>
    <header className={styles.directoryIntro}>
      <p className={styles.kicker}>DT CAR PHILIPPINES</p>
      <h1>Products / Services</h1>
      <p>Choose a category to go straight to its prices, details and contact options.</p>
    </header>
    {categories.map(group => (
      <section className={styles.catalogue} id={group.id} key={group.id} aria-labelledby={group.id + "-heading"}>
        <h2 id={group.id + "-heading"}>{group.title}</h2>
        <div className={styles.directoryGrid}>
          {group.pages.map(page => (
            <Link className={`${styles.card} ${styles.categoryCard}`} key={page.slug} href={adPath(page.slug)} lang={page.lang}>
              <img src={adImage(page.slug)} alt="" width={1200} height={720} loading="lazy" decoding="async"/>
              <div>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span>{page.action} <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
        {group.id === "vinfast" && <Link className={styles.more} href={compareLimoMpvPath}>Compare Limo Green and MPV 7 →</Link>}
      </section>
    ))}
  </div></SubPage>;
}
