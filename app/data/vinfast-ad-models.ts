export const vinfastHub = "/products-services/vinfast/";
export const compareLimoMpvPath = vinfastHub + "compare-limo-mpv7/";
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
  priceRef?: string; priceRefLabel?: string; variants?: {name:string; withPlan:number; withBattery:number; note:string}[];
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
    photos: [{key:"road",caption:"Limo Green, front three-quarter view",credit:vinfast},{key:"sunset",caption:"Limo Green exterior profile",credit:vinfast},{key:"dash",caption:"Limo Green dashboard and front cabin",credit:vinfast},{key:"rear",caption:"Limo Green, rear three-quarter view",credit:vinfast},{key:"lisa-coast",caption:"Lisa Dong beside a white VinFast Limo Green on the coast",credit:"Lisa Dong – DT Car Facebook"}],
    sources: [["Limo Green Philippine technical figures","https://platform.greengsm.ph/limo_green"],["Lisa Dong with Limo Green","https://www.facebook.com/61572413993211/posts/122191975460747133/"],["VinFast Limo Green brochure (illustrations, Vietnam edition)","https://static-cms-prod.vinfastauto.com/brochure/11112026/11112026-Brochure-Limo-Green.pdf"]],
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
  {
    slug:"vf5",campaign:"dtcar_vinfast_vf5",name:"VF 5 Plus",
    headline:"VinFast VF 5 Plus: the five-seat EV for city life",
    segment:"Subcompact electric SUV · VF 5 Plus",
    summary:"A compact SUV for commuting, small families and easy parking. Compare the upfront cost of a battery subscription with the price of a vehicle that includes the battery.",
    withPlan:949000,withBattery:1099000,
    fee:"VinFast’s January 2026 Philippine schedule listed ₱1,950/month up to 2,000 km and ₱2,900/month above that. Confirm the current contract before ordering.",
    seats:"5 seats",range:"326 km NEDC",charging:"<33 min DC",
    specs:[["Seats and luggage","5 seats; 260 L cargo capacity with seats up"],["Motor","Single electric motor, up to 100 kW (135 hp)"],["Manufacturer range","326 km (NEDC)"],["DC charging","10% to 70% in under 33 minutes in ideal conditions"],["Dimensions","3,967 × 1,723 × 1,579 mm"],["Cabin","8-inch touchscreen; Apple CarPlay and Android Auto"],["Airbags","Six, according to the Philippine product page"]],
    benefits:[["Test the car around the city","Check the parking footprint, mirrors and sightlines. Bring the stroller or bags you actually carry."],["Estimate your monthly mileage","A higher mileage band may change the subscription bill. Compare the full ownership cost on the same route."],["Check how you will charge","Confirm overnight parking and whether a suitable home or authorized public charger fits your routine."]],
    offers:[["V-Green charging",chargingTerms],["Request an itemized quote","Ask for the exact colour, stock, included charger or accessories, dealer promotion validity and estimated delivery. No stock-specific discount is included in these list prices."]],
    faq:[["Which version is shown?","This page covers the Philippine VF 5 Plus. The exact colour, options and included equipment should be listed in the written quote."],["Is 326 km a real-world guarantee?","No. That is the manufacturer’s NEDC test figure. Driving speed, climate, passengers and charging conditions change the result."]],
    photos:[{key:"front",caption:"White VF 5 in the showroom",credit:local},{key:"road",caption:"VF 5 in a second exterior view",credit:vinfast},{key:"cabin",caption:"VF 5 front cabin and dashboard",credit:vinfast},{key:"seats",caption:"Overhead view of the VF 5 cabin and seats",credit:vinfast}],
    sources:[["VF 5 Philippine product page and imagery","https://vinfastauto.ph/en/vf5"],["DT Car VF 5 showroom image","https://www.facebook.com/photo.php?fbid=122371518482008877"],["Philippine battery subscription schedule","https://vinfastauto.us/investor-relations/news/vinfast-updates-battery-subscription-policy-in-the-philippines-reducing-ev"]],
  },
  {
    slug:"vf6",campaign:"dtcar_vinfast_vf6",name:"VF 6",
    headline:"VinFast VF 6: compare the Eco and Plus electric SUVs",
    segment:"Compact electric SUV · Eco and Plus",
    summary:"Choose the VF 6 configuration that fits your commute and family. See both Philippine price pairs, then ask for the trim’s exact features and test-drive availability.",
    withPlan:1249000,withBattery:1499000,
    fee:"VinFast’s January 2026 Philippine schedule listed ₱2,350/month for both trims. Confirm current terms.",
    variants:[{name:"VF 6 Eco",withPlan:1249000,withBattery:1499000,note:"130 kW / 250 Nm. Manufacturer lists up to 480 km NEDC for the model."},{name:"VF 6 Plus",withPlan:1409000,withBattery:1699000,note:"150 kW / 310 Nm. The Philippine specification page lists eight airbags for Plus."}],
    seats:"5 seats",range:"Up to 480 km NEDC",charging:"≈25 min DC",
    specs:[["Seats","Five"],["Eco motor","130 kW / 250 Nm"],["Plus motor","150 kW / 310 Nm"],["Manufacturer range","Up to 480 km NEDC for the model; check the exact trim"],["Charging","About 25 minutes DC from 10% to 70%"],["Dimensions","4,241 × 1,834 × 1,580 mm; 2,730 mm wheelbase"],["Infotainment","12.9-inch display; ask which additional cabin features are included"],["Vehicle warranty at Philippine launch","7 years or 160,000 km, whichever comes first; terms apply"]],
    benefits:[["Compare like-for-like","Ask for Eco and Plus quotes with the same battery arrangement and note what is included on each trim."],["Check cabin features in person","Test seat comfort, access to controls and manoeuvrability with the car you are considering."],["Plan around your weekly distance","Use your actual trips and available charging time rather than the manufacturer test range alone."]],
    offers:[["V-Green charging",chargingTerms],["Current dealer offers","Request a dated quotation for your exact trim and colour. Ask which inclusions, if any, end on a specific date."]],
    faq:[["Is the headline price for the Plus?","No. It starts at the Eco subscription price. Both trims and both battery arrangements are shown in the table."],["Are the features in the gallery included on every trim?","Not necessarily. Manufacturer images illustrate the model. Ask the DT Car team for the equipment list of the exact trim."]],
    photos:[{key:"front",caption:"VF 6 exterior view",credit:vinfast},{key:"road",caption:"VF 6 in an outdoor setting",credit:vinfast},{key:"cabin",caption:"VF 6 dashboard and front cabin",credit:vinfast},{key:"seats",caption:"VF 6 cabin seating detail",credit:vinfast}],
    sources:[["VF 6 Philippine product page and imagery","https://vinfastauto.ph/en/vf6"],["Philippine launch and powertrain details","https://vinfastauto.us/investor-relations/news/vinfast-launches-vf-6-b-suv-and-introduces-free-ev-charging-program-in-the"],["Battery subscription schedule","https://vinfastauto.us/investor-relations/news/vinfast-updates-battery-subscription-policy-in-the-philippines-reducing-ev"]],
  },
  {
    slug:"vf7",campaign:"dtcar_vinfast_vf7",name:"VF 7",
    headline:"VinFast VF 7: compare Eco and dual-motor Plus",
    segment:"Five-seat electric SUV · Eco and Plus",
    summary:"Choose between the single-motor Eco and the dual-motor AWD Plus. Check the difference in price, equipment and range before arranging a viewing.",
    withPlan:1430000,withBattery:1760000,
    fee:"VinFast’s January 2026 Philippine schedule listed ₱2,650/month for Eco and ₱3,350/month for Plus. Confirm current terms.",
    variants:[{name:"VF 7 Eco",withPlan:1430000,withBattery:1760000,note:"Single motor; 430 km NEDC according to the Philippine specification."},{name:"VF 7 Plus",withPlan:1550000,withBattery:2380000,note:"AWD with dual motors; 496 km NEDC; manufacturer specifies about 28 min DC from 10% to 70%."}],
    seats:"5 seats",range:"430–496 km NEDC",charging:"≈28 min DC (Plus)",
    specs:[["Eco powertrain","Single motor, about 130 kW (174 hp), 250 Nm"],["Plus powertrain","Dual-motor AWD, 260 kW, 500 Nm"],["Battery capacity","Eco: 59.6 kWh; Plus: 75.3 kWh (Philippine launch)"],["Manufacturer range","Eco 430 km; Plus 496 km (NEDC)"],["0–100 km/h","Eco 10–11 s; Plus 5.8 s (Philippine product page)"],["DC charge time","Plus: about 28 minutes from 10% to 70%; confirm Eco figure separately"],["Wheelbase","2,840 mm"],["Plus features","Ask to demonstrate driver assistance and the 360° camera on the exact Plus unit"]],
    benefits:[["Ask for exact trim","Compare operating needs, traction, power and standard equipment on a dated written quote."],["Check the low roofline","Sit in the rear row with the front seat set for your usual driver and look at visibility before choosing."],["Try your typical route","Test low-speed driving and parking. Ask which charging time and battery apply to the unit you drove."]],
    offers:[["V-Green charging",chargingTerms],["Current colour and model-year offers","Ask whether any published or dealer offer actually applies to the specific trim and model year. Price, stock and discounts are not guaranteed here."]],
    faq:[["Is every VF 7 all-wheel drive?","No. The Philippine launch describes the Eco/base with one motor and the Plus with dual motors and AWD."],["Which range should I use?","Compare 430 km Eco and 496 km Plus from the Philippine specifications, both NEDC test figures. Plan around your route and real charging access."]],
    photos:[{key:"front",caption:"VF 7 from the rear three-quarter angle",credit:vinfast},{key:"road",caption:"VF 7 flush exterior door handle",credit:vinfast},{key:"cabin",caption:"VF 7 cabin detail",credit:vinfast},{key:"seats",caption:"VF 7 touchscreen and controls",credit:vinfast},{key:"lisa-front",caption:"Lisa Dong with the VinFast VF 7",credit:"DT Car Quality Car Manila Facebook"},{key:"lisa-at-car",caption:"Lisa Dong beside the VF 7, alternate angle",credit:"DT Car Quality Car Manila Facebook"}],
    sources:[["VF 7 Philippine specifications and imagery","https://vinfastauto.ph/en/vf7"],["Lisa Dong × VF 7, DT Car photo post","https://www.facebook.com/61550266324189/posts/122363330480008877/"],["Philippine VF 7 launch and trim specifications","https://vinfastauto.us/investor-relations/news/vinfast-officially-launches-vf-7-for-sale-in-the-philippines"],["Battery subscription schedule","https://vinfastauto.us/investor-relations/news/vinfast-updates-battery-subscription-policy-in-the-philippines-reducing-ev"]],
  },
  {
    slug:"vf8",campaign:"dtcar_vinfast_vf8",name:"All-New VF 8",
    headline:"All-New VinFast VF 8: the Philippine five-seat electric SUV",
    segment:"November 2026 Philippine launch · Five seats",
    summary:"This is the new Philippine VF 8: front-wheel drive, a 60.13 kWh battery and a 12.9-inch display. Compare both starting prices and confirm availability for your delivery area.",
    withPlan:1548000,withBattery:1799000,
    fee:"Ask for the recurring monthly subscription fee and contract terms in the written quote. It is separate from the vehicle price.",
    priceRef:"https://vinfastauto.ph/en/press-release/vinfast-launches-the-all-new-vf8-in-the-philippines",priceRefLabel:"VinFast Philippines November 2026 launch prices",
    seats:"5 seats",range:"480 km NEDC",charging:"<30 min DC",
    specs:[["Seats","Five"],["Motor and drivetrain","170 kW / 330 Nm; front-wheel drive"],["Battery","60.13 kWh"],["Manufacturer range","480 km (NEDC)"],["DC charge time","10% to 70% in under 30 minutes in ideal conditions"],["Dimensions","4,701 × 1,872 × 1,670 mm; 2,840 mm wheelbase"],["Cabin","12.9-inch central touchscreen, separate driver information display"],["Warranty at Philippine launch","Vehicle 7 years / 160,000 km; HV battery 10 years / 200,000 km, whichever comes first; terms apply"]],
    benefits:[["Ask for the new Philippine model","Confirm the model year, drivetrain and stock. Older international VF 8 specifications do not describe this local version."],["Check family comfort","Try the rear seats, boot, climate controls and the vehicle’s dimensions at your usual parking area."],["Check the route before a long trip","Plan charging stops based on the range you expect with passengers and on the chargers you can actually use."]],
    offers:[["V-Green charging",chargingTerms],["November early-booking offer","The manufacturer’s first-1,000 early-booking offer ended on 5 November 2026. It is not included here. Ask DT Car for a dated quote and any newer applicable offer."]],
    faq:[["Is this the older AWD VF 8?","No. This is the All-New VF 8 launched in the Philippines on 10 November 2026, with front-wheel drive."],["Where can I check for a test-drive slot?","Message DT Car with your location and preferred date. Wait for the exact vehicle and venue to be confirmed."]],
    photos:[{key:"front",caption:"All-New VF 8 front three-quarter view",credit:vinfast},{key:"road",caption:"All-New VF 8 on a coastal road",credit:vinfast},{key:"cabin",caption:"All-New VF 8 interior and dashboard",credit:vinfast},{key:"seats",caption:"All-New VF 8 rear seats",credit:vinfast}],
    sources:[["Philippine VF 8 product page and imagery","https://vinfastauto.ph/en/vf8"],["Philippine launch, specs and price","https://vinfastauto.ph/en/press-release/vinfast-launches-the-all-new-vf8-in-the-philippines"],["Dated early-booking announcement","https://vinfastauto.us/investor-relations/news/vinfast-opens-early-bookings-for-the-all-new-vf-8-in-the-philippines"]],
  },
  {
    slug:"vf9",campaign:"dtcar_vinfast_vf9",name:"VF 9 Plus",
    headline:"VinFast VF 9 Plus: a three-row premium electric SUV",
    segment:"Premium electric SUV · VF 9 Plus",
    summary:"Explore the three-row VF 9 Plus, then compare the Philippines list prices and check the exact seat configuration, features and availability with the DT Car team.",
    withPlan:3845000,withBattery:5390000,
    fee:"VinFast’s January 2026 Philippine schedule lists ₱3,840/month. Confirm current contract terms in your written quote.",
    seats:"Three rows",range:"602 km WLTP",charging:"≈35 min DC",
    specs:[["Seating","Three rows; verify the exact seat configuration on the unit"],["Motor","Two electric motors, 300 kW combined"],["Manufacturer range","602 km (WLTP) on the Philippine model page"],["DC charge time","Product specification chart lists about 35 minutes from 10% to 70% in ideal conditions"],["0–100 km/h","6.8 seconds, manufacturer figure"],["Dimensions","5,119 × 2,065 × 1,694 mm; 3,148 mm wheelbase"],["Luggage space","212 L with seats up"],["Infotainment","15.6-inch touchscreen"]],
    benefits:[["Verify seats and boot together","Check the exact second-row configuration and bring your typical luggage if you plan to use all three rows."],["Check building access","Measure the parking bay, access ramp and clearance using the actual vehicle’s dimensions."],["Compare complete ownership quotes","Ask for vehicle price, battery fee if applicable, charger setup, warranty conditions and any delivery or optional costs in writing."]],
    offers:[["V-Green charging",chargingTerms],["Stock and quote","Request the specific version, interior configuration and current stock or order lead time. The starting prices do not include a presumed dealer discount."]],
    faq:[["Are the figures for every overseas VF 9 version?","No. These are figures published on VinFast’s Philippine product page. Confirm the seat layout and equipment for your unit."],["Can I compare 602 km directly with an NEDC number?","No. WLTP and NEDC are different test cycles. Compare like-for-like tests and allow for real-world conditions."]],
    photos:[{key:"front",caption:"VF 9 exterior in blue",credit:vinfast},{key:"road",caption:"VF 9 exterior from a second angle",credit:vinfast},{key:"cabin",caption:"VF 9 interior example",credit:vinfast},{key:"seats",caption:"VF 9 rear passenger controls",credit:vinfast},{key:"lisa-cover",caption:"Lisa Dong in front of the VinFast VF 9",credit:"DT Car Facebook reel cover"}],
    sources:[["VF 9 Philippine product page and imagery","https://vinfastauto.ph/en/vf9"],["Lisa Dong × VF 9 original Facebook reel","https://www.facebook.com/reel/2200267907224327/"],["Philippine battery subscription schedule","https://vinfastauto.us/investor-relations/news/vinfast-updates-battery-subscription-policy-in-the-philippines-reducing-ev"]],
  },
];
