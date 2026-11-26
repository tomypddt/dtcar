import Link from "next/link";
import { journal, journalGroups, journalPath } from "@/app/data/travel-journal";
import {journalMedia} from "@/app/data/dt-tour-media";
import styles from "./journal.module.css";

export default function TravelJournal(){
 return <section id="dt-tour-journal" className={styles.wrap} lang="vi">
  <header className={styles.intro}><p className={styles.eyebrow}>DT TOUR · CẨM NANG PHILIPPINES</p><h2>Chọn điểm đến, lên lịch cùng DT Tour</h2><p>Những bài viết từ các chia sẻ và hình ảnh của Page DT Tour, sắp theo điểm đến để bạn dễ tìm.</p><p><Link href="/products-services/tour-philippines/">Xem danh sách tour và lịch trình →</Link></p></header>
  <nav aria-label="Chủ đề cẩm nang" className={styles.jump}>{journalGroups.map((group,i)=><a href={"#travel-group-"+i} key={group}>{group}</a>)}</nav>
  {journalGroups.map((group,i)=><section className={styles.topic} id={"travel-group-"+i} key={group}><h3>{group}</h3><div className={styles.grid}>{journal.filter(x=>x.group===group).map(x=>{
   const photo=journalMedia(x)[0];return <Link className={styles.card} href={journalPath(x.slug)} key={x.slug}>
    {photo&&<img src={photo.src} alt={photo.caption} width={800} height={530} decoding="async" loading="lazy"/>}
    <div><h4>{x.title}</h4><p>{x.deck}</p><span>Đọc bài →</span></div>
   </Link>;
  })}</div></section>)}
 </section>
}
