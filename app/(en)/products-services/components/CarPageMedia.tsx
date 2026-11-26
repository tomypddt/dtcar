import { adPreview } from "@/app/data/ad-preview";
import { lisaBuyingGallery,lisaBuyingImage,usedCarPost,usedPostImage } from "@/app/data/used-car-post";
import layout from "../landing.module.css";
import styles from "./campaign-details.module.css";
const price=(num:number)=>"₱"+num.toLocaleString("en-PH");

export function UsedCarPost(){
  return <section className={layout.section} aria-labelledby="inventory-title">
    <p className={layout.kicker}>DT CAR · QUALITY CAR MANILA</p>
    <h2 id="inventory-title">Used-car list from our <time dateTime={usedCarPost.isoDate}>{usedCarPost.date}</time> Facebook post</h2>
    <p className={styles.stockNote}><strong>Posted list, not live inventory.</strong> These were the asking prices and odometer readings in the original post. Confirm current price, availability and financing eligibility with DT Car before making an appointment.</p>
    {usedCarPost.groups.map(group=><section className={styles.stockTable} key={group.name}>
      <h3>{group.name}</h3><ul className={styles.stockGrid}>
        {group.rows.map(([model,odo,amount])=><li key={model}><strong>{model}</strong><small>{odo} as listed</small><b>{price(amount)}</b></li>)}
      </ul>
    </section>)}
    <h3 className={styles.mediaTitle}>Original photos from the Facebook post</h3>
    <div className={styles.postGallery}>{usedCarPost.photos.map(([key,caption])=><figure key={key}><a href={usedPostImage(key)}><img src={adPreview(usedPostImage(key))} alt={caption} loading="lazy" decoding="async"/></a><figcaption>{caption}</figcaption></figure>)}</div>
    <p className={styles.cross}><a href={usedCarPost.source}>View the original Quality Car Manila post and photo album ↗</a></p>
  </section>;
}

export function LisaBuyingGallery(){
  return <section className={layout.section} aria-labelledby="campaign-gallery">
    <p className={layout.kicker}>DT CAR · WE BUY CARS</p><h2 id="campaign-gallery">Lisa’s We Buy Cars campaign</h2>
    <p className={styles.note}>Original images from DT Car’s published We Buy Cars posts.</p>
    <div className={styles.postGallery}>{lisaBuyingGallery.map(({key,caption,lang,source})=><figure key={key} lang={lang}><a href={lisaBuyingImage(key)}><img src={adPreview(lisaBuyingImage(key))} alt={caption} width={512} height={640} loading="lazy" decoding="async"/></a><figcaption>{caption} · <a href={source}>Original Facebook post ↗</a></figcaption></figure>)}</div>
  </section>;
}
