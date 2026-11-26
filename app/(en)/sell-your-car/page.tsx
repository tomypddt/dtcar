import Link from 'next/link';
import { PageHero, SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";

export const metadata = pageMetadata({
  path: "/sell-your-car/",
  title: "Sell Your Car in Metro Manila | DT Car Philippines",
  description: "Send your model, year, mileage and photos to DT Car for an initial review. Arrange a local inspection and discuss an offer for your car.",
});

const messenger = "https://m.me/61596445001029?ref=sell_car_landing";
const email = "mailto:management@dtcar.ph?subject=" + encodeURIComponent("Car appraisal | Sell Your Car page") +
  "&body=" + encodeURIComponent("I'd like to sell my car.\nModel and year: \nMileage: \nCity: \nCondition: \nAsking price (optional): \nPhotos attached: ");

export default function SellYourCar() {
  return (
    <SubPage>
      <PageHero label="DT CAR PHILIPPINES" title="Sell your car in Metro Manila"
        text="Start with the car you have. Send the year, model, mileage, city and a few photos for an initial appraisal."
        image="/images/web/used-car.webp" />
      <section className="contactPage">
        <div>
          <h2>Ask for an appraisal</h2>
          <p>Message the used-car team in English or Filipino. Photos of the exterior, interior and odometer help us review the condition before arranging an inspection.</p>
        </div>
        <div className="contactChannels">
          <a href={messenger}><div><h3>Send photos on Messenger</h3><p>DT Car – We Buy Cars</p></div><span aria-hidden="true">→</span></a>
          <a href={email}><div><h3>Email your car details</h3><p>Open a message with the details to fill in.</p></div><span aria-hidden="true">→</span></a>
        </div>
        <aside><strong>What happens next?</strong><p>Our team reviews your details and discusses a time and place to see the car. The final offer depends on its condition and records. You can review the offer before deciding to sell.</p><Link href="/products-services/sell-your-car/">See the purchase and bank settlement process →</Link></aside>
      </section>
    </SubPage>
  );
}
