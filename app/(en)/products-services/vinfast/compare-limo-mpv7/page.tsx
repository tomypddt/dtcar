import Link from "next/link";
import { SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";
import { chargingTerms, compareLimoMpvPath, modelMessenger, peso, priceSource, vinfastAdModels, vinfastHub, vinfastModelImage, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import layout from "../../landing.module.css";
import styles from "../model.module.css";

const choices=vinfastAdModels.filter(m=>m.slug==="limo-green"||m.slug==="mpv-7");
export const metadata=pageMetadata({path:compareLimoMpvPath,title:"VinFast Limo Green vs VF MPV 7 Philippines | DT Car",description:"Compare both seven-seat VinFast EVs in the Philippines: price, battery, range, passenger space, use and questions to ask before a test drive.",image:vinfastModelImage("limo-green","road")});

export default function LimoMpvComparison(){
 return <SubPage><article className={layout.wrap}>
  <nav className={layout.crumb} aria-label="Breadcrumb"><Link href={vinfastHub}>VinFast models</Link><span>/</span><span aria-current="page">Limo Green vs VF MPV 7</span></nav>
  <header className={layout.directoryIntro}><p className={layout.kicker}>DT CAR PHILIPPINES · MODEL COMPARISON</p><h1>Limo Green vs VF MPV 7</h1><p>Both are seven-seat electric MPVs. Limo Green has the lower Philippine starting price. Start with it for passenger or fleet work; compare MPV 7 if family cabin features and flexible cargo space matter most.</p></header>
  <div className={layout.directoryGrid}>{choices.map(m=><Link className={layout.card} key={m.slug} href={vinfastModelPath(m.slug)}><img src={vinfastModelImage(m.slug,m.photos[0].key)} alt={m.photos[0].caption} width={1200} height={720}/><div><h2>{m.name}</h2><span>See the full model page →</span></div></Link>)}</div>
  <section className={layout.section}><h2>Price and key specs, side by side</h2><div className={styles.tableWrap}><table className={styles.variantTable}><caption>Philippines · manufacturer figures</caption><thead><tr><th scope="col">What to compare</th>{choices.map(m=><th scope="col" key={m.slug}>{m.name}</th>)}</tr></thead><tbody>
   <tr><th scope="row">With battery subscription</th>{choices.map(m=><td key={m.slug}>From {peso(m.withPlan)}</td>)}</tr>
   <tr><th scope="row">Battery included</th>{choices.map(m=><td key={m.slug}>From {peso(m.withBattery)}</td>)}</tr>
   <tr><th scope="row">Seats</th><td>7</td><td>7</td></tr>
   <tr><th scope="row">Battery and motor</th><td>60.13 kWh; 150 kW / 280 Nm</td><td>60.13 kWh; 150 kW / 280 Nm</td></tr>
   <tr><th scope="row">Range / DC charging</th><td>Up to 450 km NEDC; ~30 min 10%–70%</td><td>Up to 450 km NEDC; ~30 min 10%–70%</td></tr>
  </tbody></table></div>
  <p className={styles.note}>The VF MPV 7 costs ₱140,000 more at the published starting subscription price, or ₱119,000 more with the battery included. Subscription is a recurring charge, not part of the displayed prices. <a href={priceSource}>VinFast Philippines price list</a>. Actual range and charging vary.</p></section>
  <section className={layout.section}><h2>How to choose</h2><div className={layout.options}>
   <div><h3>Consider Limo Green for passenger work</h3><p>Bring a typical route, daily kilometres and luggage needs. Ask about commercial-use warranty, charging and the subscription contract for your expected mileage.</p></div>
   <div><h3>Consider MPV 7 for family travel</h3><p>Check third-row access, rear ventilation, child-seat mounting and luggage fit. Ask to see the actual seat layout and the equipment included in your unit.</p></div>
   <div><h3>Compare two written quotes</h3><p>Use the same ownership option, then check included accessories, subscription fees, delivery, stock and warranty. {chargingTerms}</p></div>
  </div></section>
  <section className={layout.section}><h2>Ask for a quote by model</h2><div className={styles.related}>{choices.map(m=><a href={modelMessenger(m)} key={m.slug} data-enquiry-service={m.campaign}>Message DT Car about {m.name} ↗</a>)}</div></section>
  <p className={styles.note}>Specifications: <a href="https://platform.greengsm.ph/limo_green">Limo Green Philippine model sheet</a> · <a href="https://vinfastauto.us/investor-relations/news/vinfast-officially-launches-vf-mpv-7-in-the-philippines">VF MPV 7 Philippine launch</a>.</p>
 </article></SubPage>;
}
