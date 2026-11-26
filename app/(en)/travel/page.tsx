import TourPricing from "../products-services/components/TourPricing";
import JournalTourList from "./JournalTourList";
import TravelJournal from "./TravelJournal";
import { travel as photos } from "@/app/data/stories";
import { galleryPreview } from "@/app/data/gallery";
import {guides, guidePath} from "@/app/data/guides";
import Link from "next/link";
import { PageHero, SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";

export const metadata = pageMetadata({
  path: "/travel/",
  title: "Manila Car Rental With Driver & Private Tours | DT Tour",
  description: "Request a Manila car with driver, airport pickup or private Philippine itinerary. Send your group size, luggage, stops and travel dates to DT Tour.",
});




export default function TravelPage(){return <SubPage>
  <PageHero label="DT TOUR · PHILIPPINES" title="Explore more of the Philippines." text="Private, flexible journeys designed with local knowledge—from heritage towns and mountain escapes to islands, waterfalls and yacht experiences." image="/images/BEBB1179-9D48-4222-B07C-FAAD69DE40F0.jpeg"/>
  <section className="detailIntro"><p className="eyebrow">TRAVEL WITH DT TOUR</p><div><h2>Real places. Thoughtful itineraries. Local support.</h2><p>DT Tour plans complete Philippines experiences for Vietnamese, Chinese and international guests. Our team coordinates itineraries, private transport, local assistance and activity reservations around the way each guest wants to travel.</p><a className="primary darkPrimary" target="_blank" rel="noreferrer" href="https://m.me/dulichphilippinesdttour">Plan a trip on Messenger</a></div></section>
  <TravelJournal/>
  <JournalTourList><TourPricing/></JournalTourList>
  <section className="detailGrid"><article><span>01</span><h3>Heritage &amp; culture</h3><p>Historic architecture, local food and flexible private-day itineraries.</p></article><article><span>02</span><h3>Nature &amp; highlands</h3><p>Waterfalls, forest pools, hot springs and cool-weather retreats.</p></article><article><span>03</span><h3>Islands &amp; the sea</h3><p>Yachts, beaches, water activities and coastal escapes planned end to end.</p></article></section>
  <section className="detailIntro"><p className="eyebrow">MANILA PRIVATE TRANSPORT</p><div>
    <h2>How do I arrange a car with a driver in Manila?</h2>
    <p>Send DT Tour your pickup date and location, passenger count, number of bags, planned stops and final drop-off. For airport transfers include the flight number and terminal if confirmed. Ask the team to confirm the meeting point, vehicle and contact details before arrival.</p>
    <h3>Airport transfer or a full day with a driver?</h3>
    <p>For a single transfer, request the price for the exact pickup and destination. If you need the driver to wait at meetings or visit several places, send the complete route and expected finish time. Ask how extra hours, tolls, parking and changes caused by a delayed flight will be handled in your quotation.</p>
    <h3>What vehicle size should I request?</h3>
    <p>State both the number of passengers and the luggage you need to carry. Four travellers with large cases can need more space than the same group on a day trip. Tell DT Tour about bulky items or access needs before the team confirms a vehicle.</p>
    <a className="primary darkPrimary" href="https://m.me/dulichphilippinesdttour">Request a transport quote</a>
  </div></section>
  <section className="detailIntro"><p className="eyebrow">PLAN YOUR JOURNEY</p><div><h2>Philippines itineraries and Manila transport guides</h2><ul>{guides.filter(guide => guide.service === "travel").map(guide => <li key={guide.slug}><Link lang={guide.lang} href={guidePath(guide.slug)}>{guide.title}</Link></li>)}</ul></div></section>
  <section className="tourGallery"><div><p className="eyebrow">REAL DT TOUR JOURNEYS</p><h2>Photographs from the places we take our guests.</h2></div><div className="tourMasonry">{photos.map((src,i)=><figure key={src}><img loading="lazy" decoding="async" src={galleryPreview(src)} alt={`DT Tour Philippines journey ${i+1}`}/></figure>)}</div></section>
  <section className="travelStoryLink"><p className="eyebrow">DT TOUR JOURNAL</p><h2>Read the full travel story.</h2><p>Discover how DT Tour connects private transport, local coordination, nature, heritage and island experiences in one flexible journey.</p><Link prefetch={false} className="primary darkPrimary" href="/news/dt-tour-philippines-curated-journeys">Read the article →</Link></section>
  <section className="cta tourCta"><p className="eyebrow light">YOUR PHILIPPINES JOURNEY</p><h2>Tell us what you want to experience.</h2><p>We will help shape the route, transport and activities around your schedule.</p><a className="primary" target="_blank" rel="noreferrer" href="https://m.me/dulichphilippinesdttour">Message DT Tour</a></section>
</SubPage>}
