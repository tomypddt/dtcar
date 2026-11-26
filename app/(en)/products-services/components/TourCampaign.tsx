import TourPricing from "./TourPricing";
import {pesos} from "@/app/data/dt-tour-prices";
import Link from "next/link";
import { adMessenger, type AdLanding } from "@/app/data/ad-landings";
import { tours, tourPath } from "@/app/data/tour-catalogue";
import CopyEnquiry from "./CopyEnquiry";
import styles from "./campaign-details.module.css";
import layout from "../landing.module.css";

export default function TourCampaign({page}:{page:AdLanding}){
 return <>
  <section className={layout.section} id="lich-trinh"><h2>Các tour Philippines của DT Tour</h2><p className={styles.stockNote}>Chọn tuyến để xem lịch mẫu hoặc các trải nghiệm có thể sắp xếp. DT Tour báo giá theo ngày đi, điểm đón và số người, không mặc định giá hoặc lịch cố định.</p>
  <div className={layout.directoryGrid}>{tours.map(t=><Link className={layout.card} href={tourPath(t.slug)} key={t.slug}>
   {t.photo&&<img src={t.photo.src} alt={t.photo.caption} width={1200} height={720} loading="lazy"/>}
   <div><p className={layout.kicker}>{t.duration}</p><h3>{t.name}</h3><p>{t.summary}</p>{t.rates&&<p className={layout.cardPrice}><strong>Tham khảo từ {pesos(Math.min(...t.rates))}</strong> · đoàn {t.rates.indexOf(Math.min(...t.rates))===2?15:t.rates.indexOf(Math.min(...t.rates))===1?8:4} khách</p>}<span>Xem chương trình →</span></div></Link>)}</div></section>
  <TourPricing/>
  <section className={styles.conversion}><div><p className={layout.kicker}>NHẮN DT TOUR</p><h2>Chưa chắc nên đi đâu?</h2><a className={layout.button} href={adMessenger(page)} target="_blank" rel="noopener noreferrer" data-enquiry-service={page.campaign}>Nhờ DT Tour tư vấn tuyến ↗</a><p className={styles.cross}><a href="https://www.facebook.com/dulichphilippinesdttour">Xem Page Du lịch Philippines – DT Tour ↗</a></p></div><CopyEnquiry vi text="Chào DT Tour, nhóm mình có __ người, muốn đi Philippines ngày __, xuất phát từ __. Mình thích __ và có khoảng __ ngày. Cho mình xin tuyến phù hợp, lịch trình PDF và báo giá theo đoàn nhé."/></section>
 </>;
}
