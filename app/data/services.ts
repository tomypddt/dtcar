type Link = { label: string; href: string };
type Question = { question: string; answer: string };
type Comparison = { heading?: string; caption: string; columns: string[]; rows: string[][]; source: Link };

export type Service = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  image: string;
  action: Link;
  checklistTitle: string;
  checklist: string[];
  steps: { title: string; text: string }[];
  questions: Question[];
  references: Link[];
  stories: string[];
  related?: string;
  comparison?: Comparison;
  filipino?: string;
};

const messenger = "https://m.me/61550266324189";
const priceList = { label: "VinFast Philippines price list", href: "https://vinfastauto.ph/en/price-list" };

export const services: Service[] = [
  {
    slug: "vinfast-vf6-vf7-philippines",
    name: "VinFast VF 6 and VF 7 in the Philippines",
    title: "VinFast VF 6 vs VF 7 Philippine Prices | DT Car",
    summary: "Compare Philippine starting prices for VF 6 and VF 7 Eco and Plus. Ask DT Car for a written quote for your variant and a test-drive appointment.",
    image: "/images/web/showroom.webp",
    action: {label: "Request a VF 6 or VF 7 quotation", href: messenger},
    comparison: {
      heading: "What are the VF 6 and VF 7 starting prices?",
      caption: "VinFast Philippines list checked 25 November 2026 · amounts in PHP",
      columns: ["Variant", "With battery subscription", "Without subscription"],
      rows: [["VF 6 Eco","₱1,249,000","₱1,499,000"],["VF 6 Plus","₱1,409,000","₱1,699,000"],["VF 7 Eco","₱1,430,000","₱1,760,000"],["VF 7 Plus","₱1,550,000","₱2,380,000"]],
      source: priceList
    },
    checklistTitle: "Bring these details to your comparison",
    checklist: ["Your normal monthly distance and where the car will charge.", "Garage dimensions, usual passengers and luggage you need to fit.", "Two variants to quote on the same battery terms and a target delivery city."],
    steps: [
      {title:"Compare two actual quotations",text:"The VF 6 Plus and VF 7 Eco start only ₱21,000 apart with subscription. Without subscription their listed gap is ₱61,000. Ask for the recurring charge on each quote before deciding what the difference means for your budget."},
      {title:"Use the appointment to check fit",text:"Try the rear seats with the front seats in your usual driving position. If you carry a folded stroller or large suitcase, bring its dimensions. Ask the adviser to demonstrate the charging equipment supported by the exact variant."},
      {title:"Confirm the unit and timing",text:"Request the quoted variant, battery arrangement, included charges and allocation status in writing. Confirm which demo vehicle is available before travelling to the appointment."}
    ],
    questions:[
      {question:"How much more is a VF 6 Plus than Eco?",answer:"On the published list the difference is ₱160,000 with battery subscription or ₱200,000 without. Ask for the equipment sheet for both variants to decide which features you would actually use."},
      {question:"Which quotation should a fleet buyer request?",answer:"Specify the quantity by variant, delivery locations, expected monthly kilometres per vehicle and charging arrangements. Ask for the delivery schedule and after-sales contacts in the same proposal."}
    ],
    references:[{label:"Compare battery ownership arrangements",href:"/guides/vinfast-battery-subscription-comparison/"},{label:"Browse selected VinFast model prices",href:"/guides/vinfast-price-list-philippines/"}],
    stories:[], related:"vinfast-test-drive"
  },
  {
    slug:"electric-fleet-quotation-philippines",
    name:"Electric fleet quotations in the Philippines",
    title:"VinFast Electric Fleet Quotations Philippines | DT Car",
    summary:"Request a fleet quotation from DT Car for your Philippine operation. Include the routes, vehicle count, delivery locations and planned charging windows.",
    image:"/images/web/gsm-fleet.webp",action:{label:"Request a fleet quotation",href:"mailto:management@dtcar.ph?subject=Electric%20fleet%20quotation"},
    checklistTitle:"What an operations manager should send",
    checklist:["Number of vehicles needed per depot, passenger loads and intended use.","Typical and longest shift distances, overnight parking and available charging time.","Preferred model mix, delivery batches and target dates.","A contact responsible for accepting vehicles at each site."],
    steps:[{title:"Map a shift from departure to return",text:"Include deadhead kilometres, time spent waiting and any predictable break at a depot. Two vehicles travelling the same daily distance can need different charging plans if one returns between shifts and the other stays out."},{title:"Compare the cost per vehicle and per depot",text:"Request itemised vehicle prices, applicable battery fees and service assumptions. Keep charger installation, energy, insurance and fleet equipment in separate rows so a change to one depot can be priced without rebuilding the whole proposal."},{title:"Define a pilot and acceptance checks",text:"Pick a representative route, record actual distance and charging time, and name the person who signs each handover. Request confirmed availability in writing before setting a launch date for the whole fleet."}],
    questions:[{question:"Can we ask about dashcams or meters?",answer:"Include your model list, required equipment, intended placements and the number of units per site. DT Car can review installation as a separate scope and coordinate a project quotation."},{question:"What if our depot charging is still under review?",answer:"Send the parking layout, available charging windows and proposed fleet size. Identify which supply details remain to be assessed by a qualified electrical practitioner. Ask for a vehicle proposal that identifies those dependencies."}],
    references:[{label:"Fleet installation project enquiries",href:"/business/fleet-installation/"},{label:"Estimate energy costs with your own inputs",href:"/tools/ev-cost-calculator/"}],stories:[],related:"vinfast-test-drive"
  },
  {
    slug: "used-cars-manila",
    name: "Buy a used car in Manila",
    title: "Used Cars in Manila: Buying & Sourcing | DT Car",
    summary: "Looking for a used car in Manila? Send DT Car your budget, preferred models and location to discuss current options and a viewing by appointment.",
    image: "/images/web/used-car.webp",
    action: { label: "Ask about current used-car options", href: messenger },
    checklistTitle: "Build your buying brief",
    checklist: ["Your vehicle budget and preferred purchase timing.", "Passenger needs, transmission preference and models or body types you are considering.", "Your location, preferred language and available viewing dates.", "Any parking-size constraints or must-have equipment."],
    steps: [
      { title: "Share your requirements", text: "Start with your budget and daily use. Keep essential needs separate from preferences so the team can discuss a useful shortlist." },
      { title: "Confirm the actual vehicle", text: "Ask for the exact variant, year, mileage, recent photos and current availability. Photos from previous transactions are not a live stock list." },
      { title: "Arrange a viewing and inspection", text: "Confirm the vehicle and meeting point before travelling. Review condition, available records and the written offer before committing." }
    ],
    questions: [
      { question: "Does this page show live inventory?", answer: "No. Contact the team for current vehicles and quotations. Availability must be confirmed for the specific unit before arranging a viewing." },
      { question: "Can DT Car discuss a model that is not displayed?", answer: "Send the model, budget and timeframe as a sourcing enquiry. The team can discuss what is available; submitting a request does not guarantee a vehicle can be sourced." },
      { question: "Can I arrange an independent inspection?", answer: "Tell the sales team you would like an independent inspection and agree the arrangements for the specific vehicle before booking or paying." },
      { question: "Where can I meet the team?", answer: "DT Car currently receives customers by appointment. Confirm the meeting address and vehicle with the team before travelling; see the contact page for current meeting-location information." }
    ],
    references: [{ label: "Contact DT Car in your preferred language", href: "/contact/" }],
    stories: ["pre-owned-cars-professional-inspection"],
    related: "sell-my-car-manila"
  },
{
  "slug": "fleet-installation",
  "name": "Fleet equipment installation",
  "title": "Fleet Dashcam, Meter & Sticker Installation | DT Car",
  "summary": "Discuss a fleet installation project with DT Car in the Philippines. Send the vehicle model mix, quantity, equipment scope, site location and target work window for a project enquiry.",
  "image": "/images/web/gsm-fleet.webp",
  "action": {
    "label": "Request a fleet installation quotation",
    "href": "mailto:management@dtcar.ph?subject=Fleet%20installation%20enquiry"
  },
  "checklistTitle": "Prepare your project brief",
  "checklist": [
    "Vehicle models, quantity and equipment scope per group.",
    "Work location, site access, available space and preferred dates.",
    "Responsibility for equipment supply, configuration and acceptance."
  ],
  "steps": [
    {
      "title": "Define the scope",
      "text": "Separate equipment supply, installation and configuration. Provide approved placement references and any model-specific requirements."
    },
    {
      "title": "Plan the site work",
      "text": "Discuss materials, work windows, key access and how vehicles will move through the installation area."
    },
    {
      "title": "Agree acceptance",
      "text": "Confirm per-vehicle checks, reporting, exception handling and handover requirements in the quotation."
    }
  ],
  "questions": [
    {
      "question": "Can several types of installation be coordinated?",
      "answer": "Describe each requested task, such as stickers, SIM-enabled dashcams or taxi meters. DT Car can review the combined scope and advise on planning."
    },
    {
      "question": "Is there a standard per-vehicle price?",
      "answer": "Request a project quotation. Model mix, quantity, equipment, site conditions and the agreed work affect the scope and price."
    }
  ],
  "references": [
    {
      "label": "Fleet rollout planning guide",
      "href": "/guides/fleet-dashcam-meter-installation/"
    }
  ],
  "stories": [
    "gsm-10000-vehicle-technology-rollout",
    "xentro-mall-fleet-installation"
  ]
},
  {
    slug: "sell-my-car-manila",
    name: "Sell a used car in Metro Manila",
    title: "Sell My Car in Metro Manila | DT Car Appraisals",
    summary: "Selling a car in Metro Manila? Send DT Car the model, year, mileage, photos and location. The used-car team can review the details and discuss an inspection before making an offer.",
    image: "/images/web/used-car.webp",
    action: { label: "Send my car for appraisal", href: "https://m.me/61596445001029" },
    checklistTitle: "What to send for a first valuation",
    checklist: [
      "Make, model, variant, model year, transmission and current odometer reading.",
      "Photos of each side, the dashboard with mileage visible, the cabin and any damage you would like the appraiser to see.",
      "Your city, preferred inspection time and asking price if you have one.",
      "Mention maintenance records, repairs, modifications or known faults. Keep registration documents available for the inspection.",
    ],
    steps: [
      { title: "Send the vehicle details", text: "A photo of the exact variant badge and the odometer helps the team identify the car. Two cars of the same model year can have different equipment and mileage." },
      { title: "Arrange an inspection", text: "Discuss the meeting place and time with the appraiser. Have the keys and available service records with the car so the team can compare its condition with the photos." },
      { title: "Review the offer", text: "Ask for the offer for your specific vehicle and confirm payment and handover arrangements before agreeing to the sale." },
    ],
    questions: [
      { question: "Can I enquire from outside Metro Manila?", answer: "Include the city or municipality where the car can be inspected. DT Car will confirm whether the team can cover that location before you travel." },
      {question:"Can an agent introduce a seller to DT Car?",answer:"Yes. In November 2026 DT Car’s We Buy Cars page reported agent introductions for two Fortuner G vehicles and a Ford Territory. Ask the team to confirm the terms for your particular referral before introducing the owner, and get the owner’s permission before sharing contact details."},
      { question: "Is an estimate from photos the final price?", answer: "The photos support an initial assessment. The appraiser still needs to check the car’s condition and records before confirming an offer." },
      { question: "Can I speak with the team in another language?", answer: "DT Car has English/Filipino, Vietnamese, Chinese and Korean vehicle channels. Use the contact directory below to reach your preferred team." },
    ],
    references: [{label:"DT Car – We Buy Cars seller and agent channel",href:"https://www.facebook.com/profile.php?id=61596445001029"}, { label: "DT Car language and contact directory", href: "/contact/" }],
    stories: ["pre-owned-cars-professional-inspection"],
  },
  {
    slug: "vinfast-test-drive",
    name: "VinFast prices and test drives",
    title: "VinFast Prices & Test Drives Philippines | DT Car",
    summary: "Compare Philippine starting prices for the VinFast VF 3 and VF 5 Plus, then ask DT Car for a written quote or a test drive near you. Include your city and preferred model so the team can check availability.",
    image: "/images/web/showroom.webp",
    action: { label: "Request a VinFast test drive", href: messenger },
    comparison: {
      caption: "Philippine starting prices in pesos · checked 25 November 2026",
      columns: ["Model", "With battery subscription", "Without battery subscription"],
      rows: [["VF 3", "₱590,000", "₱745,000"], ["VF 5 Plus", "₱949,000", "₱1,099,000"]],
      source: priceList,
    },
    checklistTitle: "What to include in your request",
    checklist: ["Model or models you want to drive and your city.", "Preferred day, time and number of people attending.", "Whether you want a quote with or without a battery subscription, and any accessories you want priced separately."],
    steps: [
      { title: "Compare the two battery options", text: "The prices above come from VinFast’s Philippine list. For a subscription quote, ask for the recurring fee alongside the upfront vehicle price. Also ask for registration and other charges to be itemized." },
      { title: "Confirm the demo appointment", text: "The team checks the location, model and time. Wait for the meeting details before going to a showroom, especially if you want to try both cars on one visit." },
      { title: "Get a written quotation", text: "After the drive, request the specific variant, colour, availability, reservation terms and expected handover window in writing." },
    ],
    questions: [
      { question: "Does the published price mean a unit is available today?", answer: "Stock and demo schedules are checked separately from the price list. Give the sales team your city and preferred colour for a current availability check." },
      { question: "Can I request several vehicles for a company?", answer: "Yes. Include the model mix, estimated quantity, delivery city and target date in your enquiry so DT Car can coordinate a fleet quotation." },
    ],
    references: [{label:"VF 6 and VF 7 prices and test drives",href:"/business/vinfast-vf6-vf7-philippines/"},{label:"Request a fleet quotation",href:"/business/electric-fleet-quotation-philippines/"},{ label: "VinFast Philippines model range", href: "https://vinfastauto.ph/en" }],
    stories: ["vinfast-sales-and-customer-handover", "vinfast-delivery-emmanuelle-tiglao", "vinfast-vf3-best-selling-bev-philippines-2026", "vinfast-car-owners-event"],
    related: "vinfast-workshop-service",
  },
  {
    slug: "green-gsm-driver-application",
    name: "DT Car driver recruitment status",
    title: "Green GSM Driver Recruitment Status at DT Car Philippines",
    summary: "DT Car has closed its public driver recruitment intake. If you already have an appointment or an application reference, use the contact on your original confirmation to ask about your case.",
    image: "/images/web/gsm-fleet.webp",
    action: { label: "Read Green GSM’s official driver information", href: "https://www.greengsm.ph/en/driver-car" },
    filipino: "Sarado ang pampublikong recruitment ng DT Car. Kung may appointment ka na, gamitin ang contact sa orihinal mong kumpirmasyon.",
    checklistTitle: "Following up on an earlier application",
    checklist: ["Find the date and reference on your confirmation.", "Ask the original contact whether your appointment is still scheduled."],
    steps: [{title: "Check before travelling", text: "Confirm the depot, date and responsible team through your existing contact before making a trip."}],
    questions: [{question: "Can I submit a new application to DT Car?", answer: "The DT Car public intake is closed. Green GSM publishes its own driver information separately."}],
    references: [{ label: "Green GSM Philippines driver information", href: "https://www.greengsm.ph/en/driver-car" }],
    stories: ["green-gsm-driver-recruitment"],
    related: "green-gsm-rental-pasada",
  },
  {
    slug: "green-gsm-rental-pasada",
    name: "Green GSM rental programme status",
    title: "Green GSM Rental Pasada Is Paused | DT Car Philippines",
    summary: "Updated 25 November 2026. Green GSM has paused the rental programme until further notice. DT Car is not taking new rental registrations or deposits. A reopening date has not been confirmed.",
    image: "/images/web/limo-green.webp",
    action: { label: "Ask about an existing rental enquiry", href: messenger },
    filipino: "Pansamantalang nakahinto ang Green GSM rental. Huwag magsumite ng bagong aplikasyon o magbayad ng deposito. Wala pang kumpirmadong petsa ng pagbubukas.",
    checklistTitle: "If you already applied or paid",
    checklist: ["Keep your original booking confirmation and receipt.", "Contact the provider named on your confirmation about your individual booking.", "Use a private channel. Keep ID numbers and payment details out of public comments."],
    steps: [
      { title: "Find your reference", text: "Use the reference on your original confirmation so the team can identify the enquiry." },
      { title: "Check with the team handling the booking", text: "Ask about your specific status and any applicable terms. Keep a copy of the reply." },
    ],
    questions: [
      { question: "Can I reserve a rental vehicle now?", answer: "New rental registrations and deposits are paused. Wait for an official reopening announcement." },
      { question: "Does this update cover taxi driver recruitment?", answer: "DT Car has also closed public driver recruitment. Existing applicants can check the driver status page." },
    ],
    references: [{ label: "DT Car rental programme updates", href: "https://www.facebook.com/profile.php?id=61595874147900" }],
    stories: [],
    related: "green-gsm-driver-application",
  },
  {
    slug: "vinfast-workshop-service",
    name: "VinFast workshop and service enquiries",
    title: "VinFast Workshop & Service Enquiries | DT Car",
    summary: "Ask DT Car to coordinate a VinFast workshop visit. Send the model, mileage, your city and the work needed so the service team can check a suitable workshop and appointment.",
    image: "/images/web/workshop.webp",
    action: { label: "Ask for a workshop appointment", href: messenger },
    checklistTitle: "What the service team needs",
    checklist: ["Vehicle model, model year and current mileage.", "Your city and whether the vehicle can be brought to a workshop.", "The maintenance item or symptom, when it started, and a photo of any dashboard message taken while parked."],
    steps: [
      { title: "Describe the job", text: "For scheduled maintenance, give the last service date and mileage. For a repair, describe what you observed and any previous work on the same issue." },
      { title: "Confirm the workshop and time", text: "DT Car checks a location suited to the model and requested work. Ask for the workshop address, contact person, appointment time and records to bring." },
      { title: "Review the work order", text: "Ask the receiving workshop for the proposed scope, estimate and timing. If parts are needed, ask which work can proceed on the visit and which items require a follow-up." },
    ],
    questions: [
      { question: "Can DT Car check warranty coverage by message?", answer: "The team can direct your enquiry. The receiving workshop needs the vehicle details, history and diagnosis to assess a specific warranty claim." },
      { question: "Can I request service for several fleet vehicles?", answer: "Send the model mix, number of units, operating location and available downtime. These details let the team discuss workshop capacity and a practical schedule." },
    ],
    references: [{ label: "DT Car contact and language channels", href: "/contact/" }],
    stories: ["vinfast-authorized-workshop-network"],
    related: "vinfast-test-drive",
  },
  {
    slug: "vgreen-charging-site-proposal",
    name: "Propose a V-Green charging site",
    title: "V-Green Charging Site Proposals Philippines | DT Car",
    summary: "Landowners and authorized agents can propose a Philippine property to DT Car for V-Green screening. Metro Manila is the first priority. Send a map pin, parking layout, current photos and an owner or agent contact.",
    image: "/images/web/vgreen-site.webp",
    action: { label: "Email DT Car about a site", href: "mailto:management@dtcar.ph?subject=V-Green%20site%20proposal" },
    checklistTitle: "What to include in a site proposal",
    checklist: ["Google Maps pin, city, property type, and the name of the owner or authorized contact.", "Available parking slots and dimensions, with photos showing entry, exit and vehicle circulation.", "Available electrical supply if known, site access hours and any history of flooding.", "Proposed rent, availability for handover and whether the proposal is for EV charging or motorcycle battery swapping."],
    steps: [
      { title: "Identify the use of the space", text: "DT Car’s published site brief gives preference to roughly 4–12 parking or charging slots for an EV site. A motorcycle battery-swapping proposal uses a different footprint. Describe which use the property can support." },
      { title: "Request the submission form", text: "Send the location summary to DT Car and request the current form. The authorized contact can then provide the ownership and commercial details requested for screening." },
      { title: "Coordinate an inspection", text: "If the initial review advances, the site team can examine access, power and layout with the owner or representative. Approval and commercial terms follow a separate review." },
    ],
    questions: [
      {question:"Can a restaurant, café or hotel propose its parking area?",answer:"Yes. DT Car’s partner channel invited commercial hosts to propose sites in November 2026. Send a map pin, site photos, usable parking area, opening hours, electrical information and the contact authorised to discuss the property. Show how drivers would enter, park and leave during your busiest hour, including when delivery vehicles are present. The team reviews each site individually."},
      { question: "Can a fuel station or mall submit a site?", answer: "Yes. DT Car’s site brief also considers parking facilities, roadside lots and other commercial properties. Show how vehicles can reach and leave the proposed bays." },
      { question: "Can I submit several sites?", answer: "Prepare a separate map pin, photo set and slot count for each address. Make clear who can arrange access at each property." },
    ],
    references: [{label:"VGreen Partner Philippines site enquiries",href:"https://www.facebook.com/profile.php?id=61587987413957"}, { label: "DT Car and V-Green site selection brief", href: "/news/vgreen-land-space-charging-battery-swapping-philippines/" }],
    stories: ["vgreen-land-space-charging-battery-swapping-philippines", "vgreen-charging-network-philippines"],
  },
];

export const servicePath = (slug: string) => "/business/" + slug + "/";
