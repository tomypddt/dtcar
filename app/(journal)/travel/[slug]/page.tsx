import TourPhotoCredit from "@/app/(en)/products-services/components/TourPhotoCredit";
import {journalMedia} from "@/app/data/dt-tour-media";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { JsonLd } from "@/app/components/JsonLd";
import { origin, organization, pageMetadata } from "@/app/data/site";
import { dtTourPage, journal, journalPath } from "@/app/data/travel-journal";
import { tourPath, tourRoot } from "@/app/data/tour-catalogue";
import styles from "@/app/(en)/travel/journal.module.css";

type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return journal.map(x=>({slug:x.slug}));}
const find=(slug:string)=>journal.find(x=>x.slug===slug)??notFound();
export async function generateMetadata({params}:Props){const p=find((await params).slug);return pageMetadata({path:journalPath(p.slug),title:p.title+" | DT Tour",description:p.deck,locale:"vi_VN",image:journalMedia(p)[0]?.src});}
export default async function JournalArticle({params}:Props){
 const p=find((await params).slug);const [photo,...gallery]=journalMedia(p);
 const inline=gallery.length>=3?gallery[0]:null;
 const remaining=inline?gallery.slice(1):gallery;
 return <SubPage><JsonLd data={{"@type":"Article",headline:p.title,description:p.deck,mainEntityOfPage:origin+journalPath(p.slug),inLanguage:"vi",publisher:organization,...(photo ? {image:origin+photo.src} : {})}}/><article className={styles.article} lang="vi">
  <nav aria-label="Đường dẫn" className={styles.crumb}><Link href="/travel/#dt-tour-journal">Travel</Link><span aria-hidden="true"> / </span><span>{p.group}</span></nav>
  <header><p className={styles.eyebrow}>DT TOUR · {p.group}</p><h1>{p.title}</h1><p className={styles.deck}>{p.deck}</p></header>
  {photo&&<figure className={styles.photo}><img src={photo.src} alt={photo.caption} width={1200} height={800} fetchPriority="high"/><figcaption><TourPhotoCredit photo={photo}/></figcaption></figure>}
  {p.sections.map(([h,body],i)=><Fragment key={h}><section className={styles.paragraph}><h2>{h}</h2><p>{body}</p></section>{i===0&&inline&&<figure className={styles.photo}><a href={inline.src}><img src={inline.src} alt={inline.caption} width={1200} height={800} loading="lazy" decoding="async"/></a><figcaption><TourPhotoCredit photo={inline}/></figcaption></figure>}</Fragment>)}
  {remaining.length>0&&<section className={styles.paragraph}><h2>Ảnh hành trình và điểm đến</h2><div className={styles.articleGallery}>{remaining.map(p=><figure key={p.src}><a href={p.src}><img src={p.src} alt={p.caption} loading="lazy" decoding="async" width={800} height={530}/></a><figcaption><TourPhotoCredit photo={p}/></figcaption></figure>)}</div></section>}
  <p className={styles.credit}>Tham khảo: <a href={p.origin??dtTourPage}>{p.origin?"Bài gốc trên Page DT Tour":"Page Du lịch Philippines – DT Tour"} ↗</a></p>
  <section className={styles.contact}><h2>Lên lịch theo nhóm bạn</h2><p>Nhắn DT Tour ngày dự kiến, số khách và điểm đón để kiểm tra lịch và báo giá.</p><a className={styles.action} href={"https://m.me/dulichphilippinesdttour?ref="+encodeURIComponent(p.slug)} data-enquiry-service="dtcar_tours" target="_blank" rel="noopener noreferrer">Nhắn DT Tour ↗</a><Link className={styles.route} href={p.tour?tourPath(p.tour):tourRoot}>Xem chương trình tour →</Link></section>
  <section className={styles.paragraph}><h2>Cùng chủ đề</h2><ul>{journal.filter(x=>x.group===p.group&&x.slug!==p.slug).slice(0,4).map(x=><li key={x.slug}><Link href={journalPath(x.slug)}>{x.title} →</Link></li>)}</ul></section>
 </article></SubPage>;
}
