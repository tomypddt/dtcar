import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { adHubPath } from "@/app/data/ad-landings";
import { chargingSource, modelMessenger, peso, priceSource, pricesChecked, promotionSource, vinfastAdModels, vinfastHub, vinfastModelImage, vinfastModelPath, type VinfastAdModel } from "@/app/data/vinfast-ad-models";
import { pageMetadata } from "@/app/data/site";
import layout from "../../landing.module.css";
import styles from "../model.module.css";

type Props = { params: Promise<{ model: string }> };
export const dynamicParams = false;
export function generateStaticParams(){return vinfastAdModels.map(({slug})=>({model:slug}));}
function getModel(slug: string){return vinfastAdModels.find((model)=>model.slug===slug) ?? notFound();}
export async function generateMetadata({params}:Props){
  const model=getModel((await params).model);
  return pageMetadata({path:vinfastModelPath(model.slug),title:`VinFast ${model.name} Price, Specs & Offers | DT Car Philippines`,description:`From ${peso(model.withPlan)} with battery subscription or ${peso(model.withBattery)} with battery included. See photos, Philippine specs and ask DT Car for a quote.`,image:vinfastModelImage(model.slug,model.photos[0].key)});
}

function Quote({model}:{model:VinfastAdModel}){
  return <a className={layout.button} href={modelMessenger(model)} target="_blank" rel="noopener noreferrer" data-enquiry-service={model.campaign}>Get a {model.name} quote <span aria-hidden="true">↗</span></a>;
}

export default async function ModelPage({params}:Props){
  const model=getModel((await params).model);
  const [hero,...gallery]=model.photos;
  const heroPath=vinfastModelImage(model.slug,hero.key);
  return <SubPage><article className={layout.wrap} lang="en-PH">
    <nav className={layout.crumb} aria-label="Breadcrumb"><Link href={adHubPath}>Customer enquiries</Link><span>/</span><Link href={vinfastHub}>VinFast</Link><span>/</span><span aria-current="page">{model.name}</span></nav>
    <header className={layout.hero}><div>
      <p className={layout.kicker}>{model.segment}</p><h1>{model.headline}</h1><p className={layout.lead}>{model.summary}</p>
      <div className={styles.quickPrice}><strong>From {peso(model.withPlan)}</strong><span>With battery subscription. Recurring fee separate.</span></div>
      <Quote model={model}/>
    </div><figure className={layout.heroPhoto}><img src={heroPath} alt={hero.caption} width={1200} height={720} fetchPriority="high"/><figcaption>{hero.credit} · Photo is not confirmation of current stock.</figcaption></figure></header>
    <section className={styles.stats} aria-label="At a glance">{[[model.seats,"Seating"],[model.range,"Manufacturer test range"],[model.charging,"10% to 70% in ideal conditions"]].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className={layout.section}><h2>Philippines price and battery options</h2>
      <div className={styles.priceGrid}><div><h3>With battery subscription</h3><strong>{peso(model.withPlan)}</strong><p>{model.fee}</p></div><div><h3>Battery included</h3><strong>{peso(model.withBattery)}</strong><p>Vehicle purchase includes the battery, with no separate battery subscription. Ask for the final written amount, optional items and inclusions.</p></div></div>
      <p className={styles.note}>Starting suggested retail prices · Checked {pricesChecked}. <a href={priceSource}>VinFast Philippines price list</a>. Price, available colour, stock and delivery are confirmed on quotation.</p>
    </section>
    <section className={layout.section} aria-label="Model photo gallery"><h2>See the {model.name} up close</h2><div className={styles.gallery}>{gallery.map((photo)=><figure key={photo.key}><a href={vinfastModelImage(model.slug,photo.key)}><img src={vinfastModelImage(model.slug,photo.key)} loading="lazy" decoding="async" alt={photo.caption} width={960} height={576}/></a><figcaption>{photo.caption}<small>{photo.credit} · Example vehicle</small></figcaption></figure>)}</div></section>
    <section className={layout.section} id="offers"><h2>Charging benefits and offers</h2><div className={styles.offers}>{model.offers.map(([title,copy])=><div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div><p className={styles.note}><a href={promotionSource}>VinFast PH promotions</a> · <a href={chargingSource}>Current V-Green charging guidance</a></p></section>
    <section className={layout.section}><h2>Specifications at a glance</h2><dl className={styles.specGrid}>{model.specs.map(([name,value])=><div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl><p className={styles.note}>NEDC is a standardized test, not a real-world guarantee. Actual range and charging time vary with load, route, speed, climate, battery and charger.</p></section>
    <section className={layout.section}><h2>What to check at your viewing</h2><div className={layout.options}>{model.benefits.map(([title,copy])=><div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
    <section className={layout.panel}><div><h2>Ask for a written quote or test drive</h2><p>Send your city, preferred colour, purchase option and target date. The team will confirm stock, total price and next steps.</p></div><Quote model={model}/></section>
    <section className={layout.section}><h2>Frequently asked questions</h2><div className={layout.faq}>{model.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className={layout.section}><h2>Compare other models</h2><div className={styles.related}>{vinfastAdModels.filter(m=>m.slug!==model.slug).map(m=><Link key={m.slug} href={vinfastModelPath(m.slug)}>{m.name} · From {peso(m.withPlan)} →</Link>)}</div><details className={styles.sources}><summary>Sources and photo credits</summary><ul>{model.sources.map(([name,href])=><li key={href}><a href={href}>{name}</a></li>)}</ul><p>Images are supplied by VinFast or from the DT Car photo library. Colours, equipment and availability can vary.</p></details></section>
  </article></SubPage>;
}
