import Link from "next/link";
import {dtTourRateBands,dtTourRateRows,dtTourRateNote,pesos} from "@/app/data/dt-tour-prices";
import {tourPath} from "@/app/data/tour-catalogue";
import css from "./campaign-details.module.css";

export default function TourPricing({rates}:{rates?:readonly [number,number,number]}){
 return <section id="bang-gia-tham-khao" className={css.rates} lang="vi">
 <h2>{rates?"Giá tham khảo theo số khách":"Bảng giá tham khảo DT Tour"}</h2><p className={css.stockNote}>{dtTourRateNote}</p>
 <div className={css.ratesScroll} tabIndex={0} role="region" aria-label="Bảng giá tham khảo theo số khách"><table>
 <thead><tr>{!rates&&<th scope="col">Chương trình</th>}{dtTourRateBands.map(num=><th key={num} scope="col">Đoàn {num} khách</th>)}</tr></thead>
 <tbody>{rates?<tr>{rates.map((p,i)=><td key={i}>{pesos(p)}</td>)}</tr>:dtTourRateRows.map(([slug,label,vals])=><tr key={label}><th scope="row">{slug?<Link href={tourPath(slug)}>{label}</Link>:label}</th>{vals.map((n,i)=><td key={i}>{pesos(n)}</td>)}</tr>)}</tbody>
 </table></div></section>;
}
