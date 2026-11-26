import Link from "next/link";
import { adHubPath, adImage, adPath } from "@/app/data/ad-landings";
import { vinfastAdModels, vinfastModelImage, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import links from "./business-links.module.css";
import { services, servicePath } from "@/app/data/services";
import { SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";

export const metadata = pageMetadata({
  path: "/business/",
  title: "Car Sales, Workshops and Fleet Services | DT Car Philippines",
  description: "Explore VinFast sales, used-car appraisals, workshop bookings, Green GSM driver and rental programs, fleet installations and charging site proposals.",
});


const items=[{n:"01",t:"VinFast Vehicle Sales",p:"Official VinFast product consultation, vehicle sales coordination, customer handover and a direct connection to after-sales support.",i:"/images/story-showroom.jpeg",href:"/business/vinfast-test-drive/",link:"Explore VinFast sales"},{n:"02",t:"Pre-Owned Vehicles",p:"Multi-brand vehicle sourcing, inspection, valuation, buying and selling through DT Car's specialist sales channels.",i:"/images/used-car.jpeg",href:"/business/used-cars-manila/",link:"Explore used-car buying"},{n:"03",t:"Authorized Workshops",p:"A network of 12 service workshops supporting inspection, maintenance, repair and technical after-sales work.",i:"/images/235993FA-122C-4900-BD39-EAC455381A5A.jpeg",href:"/business/vinfast-workshop-service/",link:"Explore workshop services"},{n:"04",t:"Fleet Solutions",p:"Vehicle supply, rental, driver recruitment and operational support for large-scale mobility fleets.",i:"/images/gsm-fleet.jpeg",href:"/news/gsm-10000-vehicle-technology-rollout",link:"Explore fleet solutions"},{n:"05",t:"Project Execution",p:"Software, SIM, dash cam, taxi meter and sticker installation supported by coordinated field operations.",i:"/images/xentromall.jpeg",href:"/projects",link:"See completed projects"},{n:"06",t:"Charging Infrastructure",p:"Site search, evaluation, partner coordination and construction support for V-Green charging stations.",i:"/images/vgreen-site.jpeg",href:"/business/vgreen-charging-site-proposal/",link:"Explore charging infrastructure"}];
const usedCars=["used-car-toyota.jpeg","used-car-lexus.jpeg","used-car-ford.jpeg","used-car-bmw.jpeg","used-car-honda.jpeg","used-car-ford-territory.jpeg"];

const customerServices = [
  {slug:"sell-your-car", title:"Sell your used car", label:"Thu mua xe cũ"},
  {slug:"used-cars", title:"Buy a used car", label:"Bán xe cũ"},
  {slug:"hoc-lai-xe", title:"Học lái xe", label:"Driving lessons in Vietnamese"},
  {slug:"tu-van-bang-lai", title:"Tư vấn bằng lái", label:"Licence guidance in Vietnamese"},
  {slug:"tour-philippines", title:"Tour Philippines", label:"Private travel · Tiếng Việt"},
];
const vinfastDescriptions: Record<string,string> = {
  "limo-green":"7-seat EV · Fleet and private use",
  "mpv-7":"7-seat EV · Family use",
  vf3:"Compact 4-seat EV",
};
function CustomerServices(){
  return <section className={links.features} id="customer-services" aria-labelledby="customer-services-title">
    <div className={links.head}><div><h2 id="customer-services-title">Customer services</h2><p>Go straight to the vehicle or service you need.</p></div><Link href={adHubPath} className={links.all}>View the full directory →</Link></div>
    <h3 className={links.group}>Explore VinFast models</h3>
    <div className={links.modelGrid}>{vinfastAdModels.map(model=><Link key={model.slug} href={vinfastModelPath(model.slug)} className={links.model}>
      <img src={vinfastModelImage(model.slug,model.photos[0].key)} alt="" width={88} height={53} loading="lazy"/>
      <span><strong>{model.name}</strong><small>{vinfastDescriptions[model.slug]}</small></span><span className={links.arrow} aria-hidden="true">→</span>
    </Link>)}</div>
    <h3 className={links.group}>Used cars, driving and travel</h3>
    <div className={links.serviceGrid}>{customerServices.map(service=><Link key={service.slug} href={adPath(service.slug)} className={links.service}>
      <img src={adImage(service.slug)} alt="" width={88} height={53} loading="lazy"/>
      <span><strong>{service.title}</strong><small>{service.label}</small></span><span className={links.arrow} aria-hidden="true">→</span>
    </Link>)}</div>
  </section>;
}

export default function BusinessPage(){return <SubPage><header className={links.hero}><p className="eyebrow light">DT CAR PHILIPPINES · BUSINESS</p><h1>Car sales, workshops and fleet services</h1><p>Find a vehicle, sell your car, book an enquiry or explore our business services.</p><a className={links.jump} href="#customer-services">See customer services <span aria-hidden="true">↓</span></a></header><CustomerServices/><section className="serviceDirectory"><h2>More business services</h2><ul>{services.map((service) => <li key={service.slug}><a href={servicePath(service.slug)}>{service.name} →</a></li>)}</ul></section><section className="serviceList">{items.map(x=><article key={x.n}><div className="servicePhoto" style={{backgroundImage:`url('${x.i}')`}}/><div><span>{x.n}</span><h2>{x.t}</h2><p>{x.p}</p><a href={x.href}>{x.link} →</a></div></article>)}</section><section className="usedGallery"><div><p className="eyebrow">USED-CAR SOURCING</p><h2>All brands. Carefully inspected.</h2><p>DT Car connects customers to its specialist sales pages for current stock, quotations and direct conversations in the appropriate language.</p></div><div className="usedGalleryGrid">{usedCars.map((x,i)=><figure key={x} style={{backgroundImage:`url('/images/${x}')`}} aria-label={`Illustrative DT Car used vehicle ${i+1}`}/>)}</div></section></SubPage>}
