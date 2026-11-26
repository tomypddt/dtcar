export const vinfastHub = "/business/ads/vinfast/";
export const vinfastModelPath = (slug: string) => vinfastHub + slug + "/";
export const vinfastModelImage = (slug: string, image: string) => "/images/ads/vinfast/" + slug + "-" + image + ".webp";
export const priceSource = "https://vinfastauto.ph/en/price-list";
export const promotionSource = "https://vinfastauto.ph/en/promotion";
export const chargingSource = "https://vinfastauto.ph/en/introducing-charging-payments-on-the-v-green-network";
export const pricesChecked = "26 November 2026";
export const chargingTerms = "VinFast advertises complimentary charging until 31 March 2029 at authorized V-Green stations for eligible vehicles. Check your vehicle’s entitlement and station in the VinFast app. Where paid charging is active, fees can apply to customers without an entitlement, and DC overstay fees may still apply.";
export const peso = (amount: number) => "₱" + amount.toLocaleString("en-PH");
export const modelMessenger = (model: VinfastAdModel) => "https://m.me/61550266324189?ref=" + model.campaign + "_web";

type Pair = [string, string];
type Photo = { key: string; caption: string; credit: string };
export type VinfastAdModel = {
  slug: string; campaign: string; name: string; headline: string; segment: string; summary: string;
  withPlan: number; withBattery: number; fee: string; range: string; seats: string; charging: string;
  specs: Pair[]; benefits: Pair[]; offers: Pair[]; faq: Pair[];
  photos: Photo[]; sources: Pair[];
};
const vinfast = "VinFast product imagery";
const local = "DT Car photo library";
export const vinfastAdModels: VinfastAdModel[] = [
  {
    slug: "limo-green", campaign: "dtcar_vinfast_limo_green", name: "Limo Green",
    headline: "VinFast Limo Green: seven seats for passenger and fleet operations",
    segment: "7-seat electric MPV · Fleet or private purchase",
    summary: "Compare subscription and battery-included prices for a seven-seat EV. Ask DT Car for a quotation based on your expected daily distance, passenger load and charging plan.",
    withPlan: 1099000, withBattery: 1399000,
    fee: "The battery plan is separate from the vehicle price. Ask for the current fee, mileage bands and commercial-use terms in writing.",
    seats: "7 seats", range: "450 km NEDC", charging: "≈30 min DC",
    specs: [["Seating","7 across three rows"],["Usable battery","60.13 kWh"],["Maximum motor output","150 kW / 280 Nm"],["Drivetrain","Front-wheel drive"],["Estimated range","Up to 450 km (NEDC)"],["DC charge time","About 30 minutes from 10% to 70%"],["Wheelbase","2,840 mm"]],
    benefits: [["Plan around a working day","Share a representative route, how far you drive and where the car stops between trips. Build a charging plan around those details rather than relying on the laboratory range."],["Check passenger and luggage fit","Try third-row access and bring a suitcase to a viewing if you plan to carry passengers with luggage."],["Compare like-for-like fleet quotes","Ask for the purchase price, any recurring subscription fees, warranty terms for your intended use and the number of vehicles the dealer can confirm."]],
    offers: [["V-Green charging",chargingTerms],["Fleet or retail quotation","Ask DT Car to confirm current discounts for the unit and purchase type, including any minimum quantity, delivery area, deadline or charging conditions. No fleet discount or stock is promised on this page."]],
    faq: [["Is this a rental or driver sign-up program?","No. This page is for purchasing the Limo Green. There is no rental or driver-recruitment offer on this page."],["Is commercial registration or a franchise included?","No. Vehicle purchase does not include a franchise, permit or platform onboarding. Confirm any requirements for your intended operation separately."],["What should I send for a quotation?","Send your city, number of units, estimated monthly kilometres and whether you prefer the battery-included price or a subscription quote."]],
    photos: [{key:"road",caption:"Limo Green, front three-quarter view",credit:vinfast},{key:"sunset",caption:"Limo Green exterior profile",credit:vinfast},{key:"dash",caption:"Limo Green dashboard and front cabin",credit:vinfast},{key:"rear",caption:"Limo Green, rear three-quarter view",credit:vinfast}],
    sources: [["Limo Green Philippine technical figures","https://platform.greengsm.ph/limo_green"],["VinFast Limo Green brochure (illustrations, Vietnam edition)","https://static-cms-prod.vinfastauto.com/brochure/11112026/11112026-Brochure-Limo-Green.pdf"]],
  },
  {
    slug: "mpv-7", campaign: "dtcar_vinfast_mpv7", name: "VF MPV 7",
    headline: "VinFast VF MPV 7: a seven-seat EV for the whole family",
    segment: "7-seat electric MPV · Family and private travel",
    summary: "Take the family on the test drive. See how the three-row cabin handles a school week, weekend trips and real luggage before choosing a battery plan.",
    withPlan: 1239000, withBattery: 1518000,
    fee: "VinFast’s Philippine launch listed ₱2,700/month up to 2,000 km and ₱4,150/month above 2,000 km. Ask for the latest mileage and subscription terms before ordering.",
    seats: "7 seats", range: "450 km NEDC", charging: "≈30 min DC",
    specs: [["Seating","7; 60:40 fold-and-tumble second row"],["Battery","60.13 kWh"],["Maximum motor output","150 kW / 280 Nm"],["Estimated range","Up to 450 km (NEDC)"],["DC charge time","About 30 minutes from 10% to 70%"],["Cargo space","126 L all rows up; 607 L with row three folded; 1,245 L with rows two and three folded"],["Infotainment","10-inch display; wired Apple CarPlay and Android Auto"],["Warranty at Philippine launch","Vehicle: 7 years / 160,000 km. Battery: 10 years / 200,000 km. Whichever comes first; confirm the booklet and battery plan."]],
    benefits: [["Fit the family, then your bags","Try entry into the third row with the second row in place. Measure the boot in the exact seat arrangement you will use most."],["Useful in Manila traffic","A reversing camera and rear parking assistance help you position the car. Rear air vents and ISOFIX points are useful for families."],["Compare payments without mixing plans","Ask for side-by-side totals for the same variant, with the recurring subscription separated from vehicle financing and optional extras."]],
    offers: [["V-Green charging",chargingTerms],["First 1,000 MPV 7 customers (launch offer)","VinFast’s dated launch release listed up to 12 months of battery subscription for eligible use up to 2,000 km/month, or ₱27,200 off with battery included, through 31 May 2026 for the first 1,000 customers. It is not included in the prices shown. Ask DT Car to confirm any current or renewed offer for your unit."]],
    faq: [["Is the VF MPV 7 the same offer as the Limo Green?","No. This page quotes the family-focused VF MPV 7. The Limo Green has its own price and purchase terms."],["Can I test the boot with my stroller?","Yes, ask for a viewing and confirm the location and model first. Bring the stroller or luggage you normally use."],["Are test-drive slots, colours or delivery dates guaranteed?","No. DT Car can check availability and confirm the appointment or quote in writing."]],
    photos: [{key:"front",caption:"VF MPV 7, front three-quarter view",credit:"VinFast Philippines press imagery"},{key:"rear",caption:"VF MPV 7, rear three-quarter view",credit:"VinFast Philippines press imagery"},{key:"launch",caption:"White VF MPV 7 at the Philippine launch",credit:"VinFast Philippines press imagery"},{key:"family",caption:"White VF MPV 7 on the road",credit:vinfast},{key:"seats",caption:"VF MPV 7 rear seats; design example",credit:vinfast}],
    sources: [["Philippine launch, battery fees and warranty","https://vinfastauto.us/investor-relations/news/vinfast-officially-launches-vf-mpv-7-in-the-philippines"],["Philippine cabin and cargo details","https://vinfastauto.ph/en/what-makes-a-great-family-car-get-to-know-the-vinfast-mpv7"]],
  },
  {
    slug: "vf3", campaign: "dtcar_vinfast_vf3", name: "VF 3",
    headline: "VinFast VF 3: a compact electric car for city driving",
    segment: "4-seat electric city car · Base VF 3",
    summary: "Look at the base VF 3 for everyday trips and tight parking. Ask for a quote showing the exact trim, colour, battery arrangement and what you would pay before delivery.",
    withPlan: 590000, withBattery: 745000,
    fee: "VinFast’s Philippine battery-policy announcement listed ₱1,600/month for the VF 3. Confirm the current contract and monthly fee for your exact trim in writing.",
    seats: "4 seats", range: "≈215 km NEDC", charging: "≈36 min DC",
    specs: [["Seating","4"],["Drive","Single motor, rear-wheel drive"],["Maximum motor output","30 kW (about 40 hp) / 110 Nm"],["Estimated range","About 215 km (NEDC)"],["DC charge time","About 36 minutes from 10% to 70%"],["0–50 km/h","5.3 seconds (manufacturer figure)"]],
    benefits: [["Check the car against your daily route","Send the distance you normally drive and where you park at night. Plan a charging stop or a suitable home charging setup before buying."],["See the colour on the car itself","Ask for recent photos of the available unit and whether the selected colour or accessories change the final price."],["Compare base VF 3 with VF 3 Plus","VinFast announced the VF 3 Plus from ₱629,000 with battery subscription. It is a separate trim with features such as a reversing camera, power-folding mirrors and phone integration. Ask for its own written quote."]],
    offers: [["V-Green charging",chargingTerms],["Unit-specific discounts","The VinFast reservation site lists a production-year 2024 discount option for selected stock. Public listing is not proof that DT Car has an eligible unit. Ask the adviser to confirm the model year, availability, discount and validity in writing."]],
    faq: [["Does ₱590,000 include the battery?","No. It is the listed starting vehicle price with a separate battery subscription. VinFast lists the base VF 3 from ₱745,000 with the battery included."],["Are the pictures the exact car I will receive?","No. They show the VF 3 and selected example finishes, including a pink example. Confirm the colour and trim with DT Car."],["What should I send to ask for a test drive?","Send your city, date, preferred colour and whether you want the base VF 3 or the Plus. Wait for the team to confirm before travelling."]],
    photos: [{key:"green",caption:"VF 3 in green, front three-quarter view",credit:local},{key:"front",caption:"VF 3 from the front",credit:local},{key:"pink",caption:"Pink VF 3 example from DT Car’s photo library",credit:local},{key:"cabin",caption:"VF 3 front cabin and controls",credit:vinfast},{key:"yellow",caption:"Yellow VF 3, VinFast vehicle visual",credit:vinfast}],
    sources: [["VF 3 Philippine model page and performance","https://shop.vinfastauto.ph/vf3"],["VF 3 Philippine reservation and NEDC figure","https://shop.vinfastauto.ph/reservation?model=VF3"],["Published battery subscription fees","https://vinfastauto.us/investor-relations/news/vinfast-updates-battery-subscription-policy-in-the-philippines-reducing-ev"],["VF 3 Plus Philippine announcement","https://vinfastauto.ph/en/meet-the-new-vinfast-vf-3-plus-stylish-expressive-and-made-for-your-everyday-city-adventures"]],
  },
];
