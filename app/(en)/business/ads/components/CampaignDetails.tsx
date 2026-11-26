import { serviceCampaignDetails } from "@/app/data/service-campaign-details";
import { adMessenger, type AdLanding } from "@/app/data/ad-landings";
import CopyEnquiry from "./CopyEnquiry";
import layout from "../landing.module.css";
import styles from "./campaign-details.module.css";

export default function CampaignDetails({page}:{page:AdLanding}){
 const detail=serviceCampaignDetails[page.slug];
 if(!detail) return null;
 const vi=page.lang==="vi";
 return <>
  <section className={layout.section}>
   <h2>{detail.blocksTitle}</h2>
   <div className={styles.cards}>{detail.blocks.map((card,i)=><article key={card.title}>
    {card.image && <img src={card.image} alt={card.imageAlt??""} width={960} height={576} loading="lazy" decoding="async"/>}
    <div><p className={layout.kicker}>0{i+1}</p><h3>{card.title}</h3><p>{card.text}</p></div>
   </article>)}</div>
   <p className={styles.note}>{detail.note}</p>
  </section>
  <section className={layout.section}><h2>{detail.stepsTitle}</h2>
   <ol className={styles.steps}>{detail.steps.map((item,i)=><li key={item.title}><span aria-hidden="true">{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
  </section>
  <section className={styles.conversion}><div>
   <p className={layout.kicker}>{vi?"NHẮN DT CAR":"MESSAGE DT CAR"}</p><h2>{vi?"Gửi nhu cầu của bạn":"Start with a message"}</h2>
   <a className={layout.button} href={adMessenger(page)} data-enquiry-service={page.campaign} target="_blank" rel="noopener noreferrer">{page.action} ↗</a>
   {detail.contacts && <ul className={styles.links}>{detail.contacts.map(link=><li key={link.label}><a href={link.href} data-enquiry-service={link.method==="phone"?page.campaign:undefined}>{link.label}</a></li>)}</ul>}
   {detail.cross && <p className={styles.cross}><a href={detail.cross.href}>{detail.cross.label} →</a></p>}
  </div><CopyEnquiry text={detail.sample} vi={vi}/></section>
  {detail.source && <section className={styles.source}><h2>{vi?"Nguồn và thông tin chính thức":"Sources and official channels"}</h2><ul className={styles.links}>{detail.source.map(link=><li key={link.href}><a href={link.href}>{link.label} ↗</a></li>)}</ul></section>}
 </>;
}
