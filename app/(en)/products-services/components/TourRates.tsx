import Link from "next/link";
import {tourPath} from "@/app/data/tour-catalogue";
import {formatTourRate, startingRateFor, tourRateTerms, tourStartingRates} from "@/app/data/dt-tour-starting-rates";
import styles from "./tour-rates.module.css";

export function TourRates({enquiryHref}:{enquiryHref:string}) {
 return <section className={styles.rates} lang="vi" id="gia-tour">
  <h2>Giá tour khởi điểm</h2>
  <p>{tourRateTerms}</p>
  <dl className={styles.grid}>{tourStartingRates.map(row=><div key={row.label}>
   <dt>{row.slug?<Link href={tourPath(row.slug)}>{row.label}</Link>:row.label}</dt>
   <dd>Từ {formatTourRate(row.amount)}</dd>
  </div>)}</dl>
  <a className={styles.enquiry} href={enquiryHref} target="_blank" rel="noopener noreferrer">Hỏi giá cho nhóm mình ↗</a>
 </section>;
}

export function TourStartingPrice({slug}:{slug:string}) {
 const rate=startingRateFor(slug);
 if(!rate) return null;
 return <div className={styles.single}>
  <p><strong>Từ {formatTourRate(rate.amount)}</strong></p>
  <p>{tourRateTerms}</p>
 </div>;
}
