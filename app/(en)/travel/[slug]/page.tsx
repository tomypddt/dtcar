import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";
import { dtTourPage, journal, journalPath, mediaFor } from "@/app/data/travel-journal";
import { tourPath, tourRoot } from "@/app/data/tour-catalogue";
import styles from "../journal.module.css";

type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return journal.map(x=>({slug:x.slug}));}
const find=(slug:string)=>journal.find(x=>x.slug===slug)??notFound();
export async function generateMetadata({params}:Props){const p=find((await params).slug);return pageMetadata({path:journalPath(p.slug),title:p.title+" | DT Tour",description:p.deck,locale:"vi_VN",image:mediaFor(p)?.src});}
export default async function JournalArticle({params}:Props){
 const p=find((await params).slug);const photo=mediaFor(p);
 return <SubPage><article className={styles.article} lang="vi">
  <nav aria-label="Đường dẫn" className={styles.crumb}><Link href="/travel/#dt-tour-journal">Travel</Link><span aria-hidden="true"> / </span><span>{p.group}</span></nav>
  <header><p className={styles.eyebrow}>DT TOUR · {p.group}</p><h1>{p.title}</h1><p className={styles.deck}>{p.deck}</p></header>
  {photo&&<figure className={styles.photo}><img src={photo.src} alt={photo.alt} width={1200} height={800} fetchPriority="high"/><figcaption><a href={photo.source??dtTourPage}>Ảnh từ Page DT Tour ↗</a></figcaption></figure>}
  {p.sections.map(([h,body])=><section className={styles.paragraph} key={h}><h2>{h}</h2><p>{body}</p></section>)}
  <p className={styles.credit}>Tham khảo: <a href={p.origin??dtTourPage}>{p.origin?"Bài gốc trên Page DT Tour":"Page Du lịch Philippines – DT Tour"} ↗</a></p>
  <section className={styles.contact}><h2>Lên lịch theo nhóm bạn</h2><p>Nhắn DT Tour ngày dự kiến, số khách và điểm đón để kiểm tra lịch và báo giá.</p><a className={styles.action} href="https://m.me/dulichphilippinesdttour" target="_blank" rel="noopener noreferrer">Nhắn DT Tour ↗</a><Link className={styles.route} href={p.tour?tourPath(p.tour):tourRoot}>Xem chương trình tour →</Link></section>
  <section className={styles.paragraph}><h2>Cùng chủ đề</h2><ul>{journal.filter(x=>x.group===p.group&&x.slug!==p.slug).slice(0,4).map(x=><li key={x.slug}><Link href={journalPath(x.slug)}>{x.title} →</Link></li>)}</ul></section>
 </article></SubPage>;
}
