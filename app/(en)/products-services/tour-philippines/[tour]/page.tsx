import {TourStartingPrice} from "../../components/TourRates";
import TourPhotoCredit from "../../components/TourPhotoCredit";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { adLandings, adMessenger } from "@/app/data/ad-landings";
import { pageMetadata } from "@/app/data/site";
import { tours, tourRoot, tourPath } from "@/app/data/tour-catalogue";
import CopyEnquiry from "../../components/CopyEnquiry";
import css from "../../components/campaign-details.module.css";
import styles from "../../landing.module.css";

type Props={params:Promise<{tour:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return tours.map(t=>({tour:t.slug}));}
function getTour(slug:string){return tours.find(t=>t.slug===slug)??notFound();}
const campaign=adLandings.find(p=>p.slug==="tour-philippines")!;
export async function generateMetadata({params}:Props){const t=getTour((await params).tour);return pageMetadata({path:tourPath(t.slug),title:t.heading+" | DT Tour Philippines",description:t.summary,locale:"vi_VN",image:t.photo?.src});}
export default async function TourDetail({params}:Props){
 const t=getTour((await params).tour);
 return <SubPage><article lang="vi" className={styles.wrap}>
  <nav className={styles.crumb} aria-label="Đường dẫn"><Link href={tourRoot}>Các tour Philippines</Link><span>/</span><span aria-current="page">{t.name}</span></nav>
  <header className={t.photo?styles.hero:styles.directoryIntro}><div>
   <p className={styles.kicker}>DT TOUR · {t.duration}</p><h1>{t.heading}</h1><p className={styles.lead}>{t.summary}</p>

   <TourStartingPrice slug={t.slug}/>
   <a className={styles.button} href={adMessenger(campaign)} target="_blank" rel="noopener noreferrer" data-enquiry-service={campaign.campaign}>Hỏi lịch và báo giá ↗</a>{t.brochure&&<a className={css.pdfLink} href={t.brochure.href} download>{t.brochure.label} (PDF) ↓</a>}
  </div>{t.photo&&<figure className={styles.heroPhoto}><img src={t.photo.src} alt={t.photo.caption} width={1200} height={720} fetchPriority="high"/><figcaption><TourPhotoCredit photo={t.photo}/></figcaption></figure>}</header>
  <section className={styles.section}><h2>{["coron","bohol"].includes(t.slug)?"Điểm và trải nghiệm để lên lịch":"Lịch trình mẫu"}</h2><p className={css.stockNote}>{t.note} Giờ bay, thời tiết và xác nhận địa phương có thể làm thay đổi chương trình.</p><ol className={css.steps}>{t.stops.map(([title,body],i)=><li key={title}><span aria-hidden="true">{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
  {t.gallery&&t.gallery.length>0&&<section className={styles.section}><h2>Hình ảnh trên tuyến</h2><div className={css.postGallery}>{t.gallery.map(photo=><figure key={photo.src}><a href={photo.src}><img src={photo.src} alt={photo.caption} width={1200} height={900} loading="lazy" decoding="async"/></a><figcaption><TourPhotoCredit photo={photo}/></figcaption></figure>)}</div></section>}
  <section className={styles.section}><h2>Báo giá cần ghi rõ những gì?</h2><div className={css.cards}>
    <article><div><h3>Xe, tàu và giờ đón</h3><p>Chốt điểm đón/trả, hành lý, số ghế, tàu riêng hay ghép, giờ xe chờ và phụ thu nếu có.</p></div></article>
    <article><div><h3>Phòng, bữa ăn và hoạt động</h3><p>Xin tên khách sạn, loại phòng, bữa ăn, vé tham quan, người hướng dẫn và thiết bị cho từng hoạt động.</p></div></article>
    <article><div><h3>Các khoản chưa bao gồm</h3><p>Hỏi rõ vé máy bay, bảo hiểm, chi tiêu cá nhân, hoạt động tự chọn, tiền cọc và điều kiện đổi hoặc hủy.</p></div></article>
  </div></section>
  <section className={css.conversion}><div><p className={styles.kicker}>NHẮN DT TOUR</p><h2>Nhận lịch và giá theo đoàn</h2><a className={styles.button} href={adMessenger(campaign)} target="_blank" rel="noopener noreferrer" data-enquiry-service={campaign.campaign}>Nhắn DT Tour ↗</a><p className={css.cross}><a href="https://www.facebook.com/dulichphilippinesdttour">Xem Page Du lịch Philippines – DT Tour ↗</a></p></div><CopyEnquiry vi text={`Chào DT Tour, mình muốn xem tour ${t.name}. Nhóm __ người, đi ngày __, khởi hành từ __. Giờ bay dự kiến __. Có trẻ em/người lớn tuổi __. Cho mình xin lịch trình PDF, giá trọn nhóm và các khoản đã/chưa bao gồm nhé.`}/></section>
  <section className={styles.section}><h2>Xem các tour khác</h2><p><Link href={tourRoot}>Về danh sách tour Philippines →</Link></p><p><Link href="/travel/#dt-tour-journal">Đọc cẩm nang Travel →</Link></p></section>
 </article></SubPage>;
}
