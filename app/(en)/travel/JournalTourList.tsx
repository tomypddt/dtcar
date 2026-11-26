import Link from "next/link";
import type {ReactNode} from "react";
import {tours,tourPath} from "@/app/data/tour-catalogue";
import styles from "./journal.module.css";
export default function JournalTourList({children}:{children:ReactNode}){
 const featured=tours.filter(t=>["south-cebu","boracay-3n2d","el-nido-3n2d","coron-3n2d","tagaytay-trong-ngay","subic-du-thuyen"].includes(t.slug));
 return <section className={styles.wrap} lang="vi"><header className={styles.intro}><h2>Lịch trình DT Tour</h2><p>Ảnh thật, chương trình và tài liệu tải xuống theo từng tuyến.</p></header>
 <div className={styles.grid}>{featured.map(t=><Link className={styles.card} href={tourPath(t.slug)} key={t.slug}>{t.photo&&<img src={t.photo.src} alt={t.photo.caption} loading="lazy" width={800} height={530}/>}<div><h4>{t.heading}</h4><span>Xem lịch trình và ảnh →</span></div></Link>)}</div>{children}</section>;
}
