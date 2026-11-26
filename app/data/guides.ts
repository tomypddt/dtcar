import buyerQuestions from "./buyer-questions.json";
import customerGuides from "./customer-guides.json";
import salesGuides from "./sales-guides.json";
import media from "./guide-media.json";
import practicalGuides from "./practical-guides.json";
import fieldGuides from "./field-guides.json";

type InlinePhoto = { src: string; alt: string; source: string; width?: number; height?: number };
export type Guide = { photoWidth?: number; photoHeight?: number; photoKind?: string; inlinePhoto?: InlinePhoto; enquiry?: string; photoAlt?: string; photoSource?: string; photo?: string; slug: string; title: string; description: string; category: string; service: string; summary: string; sections: { heading: string; paragraphs: string[] }[]; checklist: string[]; references: { label: string; href: string }[]; lang: string; related: string[]; date: string };
const content: Guide[] = [
  ...buyerQuestions,
  ...customerGuides,
  ...salesGuides,
  ...practicalGuides,
  ...fieldGuides,
  {
    "slug": "vinfast-vf3-price-philippines",
    "title": "VinFast VF 3 Price in the Philippines: What to Compare",
    "description": "Compare VF 3 starting prices, battery options and quote details before arranging a VinFast test drive with DT Car.",
    "category": "VINFAST",
    "service": "vinfast-test-drive",
    "summary": "The VinFast Philippine price list shows the VF 3 from ₱590,000 with a battery subscription and ₱745,000 without a battery subscription, checked on 25 November 2026. Compare the recurring battery fee and the written quotation alongside the upfront price.",
    "sections": [
      {
        "heading": "Use your planned ownership period",
        "paragraphs": [
          "For a three-year comparison, put 36 months of subscription charges beside the purchase price. If the contract uses mileage bands, calculate a typical month and a higher-mileage month separately. Add confirmed one-off charges to each option and request the end-of-contract terms before treating the totals as comparable."
        ]
      },
      {
        "heading": "Two prices, two ownership arrangements",
        "paragraphs": [
          "The difference between the two published starting prices is ₱155,000. This is an upfront difference, not a calculation of lifetime savings. A subscription introduces a recurring charge, so a fair comparison needs the fee that applies to your mileage and the period you expect to keep the vehicle.",
          "Ask for both quotations using the same variant, colour and delivery location. List registration, insurance, accessories and any other charges separately. If an offer includes a promotion, request its eligibility rules and expiry date on the quote."
        ]
      },
      {
        "heading": "A useful first-car test drive",
        "paragraphs": [
          "VinFast describes the VF 3 as a four-seat vehicle. Try the seating arrangement with the people who normally travel with you. Check rear-seat access, room for bags and how the car fits your parking space before deciding on price alone.",
          "Use the appointment to practise the controls you will use daily. Ask the adviser to demonstrate charging, the display and how to contact the service team. If your normal route includes tight parking, bring the dimensions of your space and ask to discuss access."
        ]
      },
      {
        "heading": "What to confirm before reserving",
        "paragraphs": [
          "A listed price does not establish that your preferred unit is in stock. Ask which vehicle can be allocated, the expected handover window and what happens if that window changes. Obtain the reservation and refund terms in writing before making a payment.",
          "For a financed purchase, compare the full repayment schedule and fees in the lender’s quotation. A low monthly figure cannot be compared fairly when down payments or repayment periods differ. DT Car can start with your location and model preference and coordinate the next enquiry."
        ]
      },
      {
        "heading": "Make the enquiry easy to answer",
        "paragraphs": [
          "Send the model, city, preferred colour and whether you want subscription and non-subscription quotations. Mention your usual monthly distance if you know it. You can estimate this from the odometer difference over a typical month rather than guessing from a single workday."
        ]
      }
    ],
    "checklist": [
      "Ask for both battery arrangements in writing.",
      "Itemize vehicle price and other charges.",
      "Confirm demo location and appointment.",
      "Check unit availability and reservation terms."
    ],
    "references": [
      {
        "label": "VinFast Philippines official price list",
        "href": "https://vinfastauto.ph/en/price-list"
      },
      {
        "label": "Official VF 3 model information",
        "href": "https://shop.vinfastauto.ph/vf3"
      }
    ],
    "lang": "en-PH",
    "related": [
      "vinfast-vf5-price-philippines",
      "vinfast-battery-subscription-comparison",
      "ev-charging-philippines-cost",
      "vinfast-vf3-vs-vf5",
      "vinfast-price-list-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "vinfast-vf5-price-philippines",
    "title": "VinFast VF 5 Plus Price in the Philippines: Buyer Checklist",
    "description": "Check VF 5 Plus starting prices and prepare a practical family test drive, charging plan and written quotation.",
    "category": "VINFAST",
    "service": "vinfast-test-drive",
    "summary": "VinFast’s Philippine list shows the VF 5 Plus from ₱949,000 with a battery subscription or ₱1,099,000 without one, checked on 25 November 2026. The ₱150,000 upfront difference should be considered alongside recurring fees and your intended use.",
    "sections": [
      {
        "heading": "Compare offers for the same model year and variant",
        "paragraphs": [
          "If two sales sheets both say VF 5, ask each seller to confirm the variant, model year, battery arrangement and what the quoted amount covers. Put any discount on its own line with its expiry date. Keep an unconfirmed credit or trade-in estimate out of the amount you plan to pay at handover."
        ]
      },
      {
        "heading": "Compare the same quotation scope",
        "paragraphs": [
          "Request two written quotes with identical assumptions for registration, insurance, accessories and delivery. Ask which fees are included in each total and which will be paid separately. Keep a dated copy so you can compare the final order with the original proposal.",
          "If you are considering financing, ask the lender for the down payment, instalments, total amount payable and fees. Eligibility is subject to the lender’s assessment; the vehicle price itself is not an approval or a financing offer."
        ]
      },
      {
        "heading": "Test the five-seat layout with your routine",
        "paragraphs": [
          "The official VF 5 model page lists five seats. During a test drive, check the seating position, rear-seat comfort and room for the items your household actually carries. Bring measurements for bulky items rather than judging luggage space from a photo.",
          "Think through weekday and weekend use separately. A short solo commute and a family trip can place different demands on passenger space, charging stops and parking. Record your impressions immediately after the drive while they are easy to compare."
        ]
      },
      {
        "heading": "Plan where the car will charge",
        "paragraphs": [
          "Identify a charging location near home or work and a second option along your normal route. Confirm access hours and the charging terms that apply to your account. A nearby map marker alone does not confirm that a charger will be available when you arrive.",
          "For home charging, ask a qualified installer to assess the electrical supply and proposed installation. Keep installation cost separate from vehicle cost in your budget. Discuss property permission before commissioning work in a rented home or condominium."
        ]
      },
      {
        "heading": "Ask for an availability check",
        "paragraphs": [
          "Send DT Car your city, preferred model and appointment dates. The team can coordinate a current quotation and test-drive enquiry. Before travelling, confirm the meeting address and the specific demonstration vehicle.",
          "At reservation, request the allocated variant, colour, expected delivery window, payment recipient and written terms. Keep quotation, receipt and handover records together for later reference."
        ]
      }
    ],
    "checklist": [
      "Compare matching subscription and non-subscription quotes.",
      "Check seating and luggage needs in person.",
      "Identify primary and backup charging locations.",
      "Confirm allocation and payment terms."
    ],
    "references": [
      {
        "label": "VinFast Philippines official price list",
        "href": "https://vinfastauto.ph/en/price-list"
      },
      {
        "label": "Official VF 5 model information",
        "href": "https://vinfastauto.ph/en/vf5"
      }
    ],
    "lang": "en-PH",
    "related": [
      "vinfast-vf3-price-philippines",
      "vinfast-battery-subscription-comparison",
      "vinfast-service-appointment-checklist",
      "vinfast-vf3-vs-vf5",
      "vinfast-price-list-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "vinfast-battery-subscription-comparison",
    "title": "VinFast Battery Subscription or Battery Included?",
    "description": "A practical way to compare upfront price, monthly battery fees, mileage and ownership assumptions for a Philippine VinFast purchase.",
    "category": "OWNERSHIP",
    "service": "vinfast-test-drive",
    "summary": "Compare battery options over the same ownership period and distance. Use the upfront difference, the current subscription quotation and any different contract costs. A lower purchase price alone does not tell you which option will cost less.",
    "sections": [
      {
        "heading": "Build a like-for-like comparison",
        "paragraphs": [
          "Write the two vehicle totals on separate lines. Under the subscription option, add the quoted recurring fee and any mileage conditions. Under both options, list costs that may differ: servicing terms, insurance treatment, transfer conditions and any end-of-contract obligations.",
          "Use the same number of months for both options. The simple comparison is the upfront price plus recurring charges across that period. This is a budgeting exercise, not a resale prediction, and it should not assume that a future buyer will pay a particular price."
        ]
      },
      {
        "heading": "Use your actual distance",
        "paragraphs": [
          "Estimate monthly driving from recent odometer readings or a route diary. Include weekends and personal trips, not just the journey to work. For a business vehicle, include repositioning and other non-revenue trips.",
          "Ask what happens when your distance crosses a subscription band, whether charges are recalculated and how changes are communicated. Use the contract that applies to your order rather than a screenshot of an old promotion."
        ]
      },
      {
        "heading": "Questions beyond the monthly fee",
        "paragraphs": [
          "Clarify responsibility for battery servicing, the conditions for any replacement entitlement and the process when selling or transferring the vehicle. Request the full terms instead of relying on a short advertising line.",
          "Also check what happens when you drive less, pause use or sell earlier than planned. These situations can matter more than a small monthly difference. Keep the written answer with your quotation."
        ]
      },
      {
        "heading": "Separate charging from battery subscription",
        "paragraphs": [
          "A battery subscription and a charging bill are different budget items. A promotion may reduce one without changing the other. Verify your own charging entitlement in the applicable agreement or app.",
          "Use our EV cost calculator for an energy-cost scenario, then add your quoted battery fee and other ownership costs separately. Its sample inputs are editable and are not a VinFast consumption claim."
        ]
      }
    ],
    "checklist": [
      "Choose a comparison period.",
      "Use actual monthly distance.",
      "Request the current fee schedule.",
      "Check transfer and early-exit terms.",
      "Budget charging separately."
    ],
    "references": [
      {
        "label": "VinFast Philippines official price list",
        "href": "https://vinfastauto.ph/en/price-list"
      }
    ],
    "lang": "en-PH",
    "related": [
      "vinfast-vf3-price-philippines",
      "vinfast-vf5-price-philippines",
      "ev-charging-philippines-cost",
      "electric-vs-gasoline-car-cost"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "car-appraisal-photos-manila",
    "title": "Car Appraisal Photos: A Checklist for Manila Sellers",
    "description": "Prepare clear vehicle photos, mileage and condition details for a used-car appraisal with DT Car in Metro Manila.",
    "category": "USED CARS",
    "service": "sell-my-car-manila",
    "summary": "For an initial car appraisal, send clear exterior and cabin photos, a readable odometer photo, the exact model and variant, the model year and the car’s city. Include damage and known issues so the initial discussion reflects the actual vehicle.",
    "sections": [
      {
        "heading": "Photographing a repaired panel",
        "paragraphs": [
          "Take one photo of the whole side of the car and a second showing the repaired area in daylight. If you have an earlier image or invoice, note its date and cover personal details before sharing it. Explain what was repaired and whether an inspection or estimate is outstanding."
        ]
      },
      {
        "heading": "Start with a clear exterior set",
        "paragraphs": [
          "Park in a well-lit place where it is safe to walk around the car. Photograph the front, rear, left and right sides, then add front and rear three-quarter views. Keep the full vehicle inside the frame and avoid filters that change its appearance.",
          "Photograph scratches or dents twice: one wider view that shows their position and one close-up that shows the condition. If lighting hides a mark, take another angle. A complete view helps reduce avoidable questions before inspection."
        ]
      },
      {
        "heading": "Show mileage, cabin and useful details",
        "paragraphs": [
          "With the vehicle safely parked, photograph the odometer clearly. Add the front and rear seating, dashboard and luggage area. Include the variant badge if you are unsure which version you own.",
          "List available service records, number of keys and recent repairs. Mention warning messages or equipment that does not work normally. Do not describe a repair as completed unless you have checked what was actually done."
        ]
      },
      {
        "heading": "Keep the initial message focused",
        "paragraphs": [
          "Your first enquiry does not need a public photograph of your ID, signature, home address or complete registration documents. Keep those documents available for the agreed inspection and ask the team which details are required through the appropriate private channel.",
          "Send the city where the car can be inspected and your preferred times. If you have an asking price, include it with the vehicle details. The appraiser can then distinguish your target price from a condition-based offer."
        ]
      },
      {
        "heading": "Photos support an estimate, not a final offer",
        "paragraphs": [
          "Two cars of the same age may differ in mileage, equipment, maintenance history and repairs. A photo set helps identify what needs checking, but the team still needs to assess the vehicle and records before confirming its offer.",
          "Before handing over the vehicle, agree the payment method, handover timing and responsibilities in writing. Keep the final agreement and receipt together. Ask the team about the applicable transfer process for your circumstances."
        ]
      }
    ],
    "checklist": [
      "Six exterior views, without filters.",
      "Odometer and dashboard while parked.",
      "Cabin, luggage space and variant badge.",
      "Wide and close-up photos of damage.",
      "Model, year, mileage, city and availability."
    ],
    "references": [],
    "lang": "en-PH",
    "related": [
      "used-car-inspection-checklist",
      "ban-xe-cu-manila",
      "car-trade-in-philippines",
      "used-car-valuation-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "used-car-inspection-checklist",
    "title": "Used-Car Inspection: What to Prepare Before an Appraisal",
    "description": "Prepare your car, records and questions for an appraisal appointment in Metro Manila without hiding its actual condition.",
    "category": "USED CARS",
    "service": "sell-my-car-manila",
    "summary": "Before a used-car appraisal, confirm the meeting details, make the vehicle accessible and gather the keys and available service records. Tell the appraiser about known faults and previous repairs so the appointment can focus on the right checks.",
    "sections": [
      {
        "heading": "Confirm the vehicle and appointment",
        "paragraphs": [
          "Send the exact model, variant, year, transmission and odometer reading before the visit. If a listing or old photo shows a different specification, correct it in the message so both sides discuss the same car.",
          "Confirm the location, contact person and access arrangements. If the vehicle cannot be driven, say so before the appointment. The team needs that information to decide what inspection can be arranged."
        ]
      },
      {
        "heading": "Prepare records without making assumptions",
        "paragraphs": [
          "Gather maintenance invoices, available repair records and the keys. Organize documents chronologically where practical. A simple record of what was done and when is more useful than a claim that the car is in perfect condition.",
          "Explain whether you are the registered owner or acting for someone else. Ask what documentation the buyer needs to establish authority and complete the transaction. If there are financing or ownership issues, disclose them early and confirm the applicable process with the relevant institution."
        ]
      },
      {
        "heading": "Let the condition speak for itself",
        "paragraphs": [
          "Remove personal belongings so the cabin and luggage area can be checked. Clean enough to make the condition visible, but avoid cosmetic changes intended to hide damage. Point out any intermittent issue and describe when it happens.",
          "Ask which findings affect the offer and whether the estimate includes any work or costs discussed. If more checks are needed, request a clear next step rather than treating an initial conversation as a final commitment."
        ]
      },
      {
        "heading": "Review the offer and handover",
        "paragraphs": [
          "Compare offers on the full transaction, including payment timing, inspection conditions and who handles each agreed step. A higher headline number may have different conditions attached.",
          "Keep a written record of the agreed vehicle, price, payment arrangement and handover. Do not rely on a screenshot of a pending payment as proof that funds have cleared. Confirm receipt through your own bank or payment provider."
        ]
      }
    ],
    "checklist": [
      "Appointment and access confirmed.",
      "Keys and service records ready.",
      "Known repairs and faults disclosed.",
      "Ownership or representative status explained.",
      "Offer and handover terms recorded."
    ],
    "references": [],
    "lang": "en-PH",
    "related": [
      "car-appraisal-photos-manila",
      "ban-xe-cu-manila",
      "buy-used-car-manila",
      "new-vs-used-car-philippines",
      "used-car-valuation-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "green-gsm-driver-application-guide",
    "title": "Green GSM Driver Application: Prepare for the Next Step",
    "description": "A practical guide to Green GSM driver enquiries, professional licence requirements and appointment preparation in the Philippines.",
    "category": "DRIVER GUIDE",
    "service": "green-gsm-driver-application",
    "summary": "To start a Green GSM driver enquiry through DT Car, send your city, professional driver’s licence status, driving experience and availability. Green GSM’s published requirements include a valid Philippine professional licence and an interview and driving assessment.",
    "sections": [
      {
        "heading": "Choose recruitment or rental first",
        "paragraphs": [
          "Applying to drive a Green GSM taxi and applying to rent an electric vehicle are separate enquiries. Tell the team which arrangement you want. This avoids sending a recruitment applicant to a rental registration form or discussing the wrong terms.",
          "If you are unsure, ask about the working arrangement, responsibilities and costs before choosing. DT Car assists with coordination; Green GSM confirms assessment and onboarding for its program."
        ]
      },
      {
        "heading": "Prepare your first enquiry",
        "paragraphs": [
          "Start with your city or municipality and the area where you want to work. State whether your professional licence is current and when you can attend an appointment. Describe your relevant driving experience briefly.",
          "Ask for the current document list for your intake. Keep identity documents in the appropriate private application channel rather than posting them in public comments. Request confirmation of who will receive them and why."
        ]
      },
      {
        "heading": "Check the appointment before travelling",
        "paragraphs": [
          "The official Green GSM recruitment page publishes locations and application information. Availability and instructions can depend on the intake, so confirm the depot, contact person, time and documents directly before making the trip.",
          "Write down the agreed address and allow time to find the entrance. If you cannot attend, tell the recruitment contact so the next step can be rearranged. Do not assume an enquiry message means an interview slot has already been reserved."
        ]
      },
      {
        "heading": "Ask how the offer works",
        "paragraphs": [
          "Request the working terms, assessment stages and any incentive conditions in writing. Clarify whether advertised amounts are gross, conditional or dependent on location. Avoid making a budget from a maximum advertising figure alone.",
          "After assessment, keep the team’s instructions and ask what remains outstanding. A completed enquiry is not the same as confirmed onboarding. Follow up with your application details through the same official contact."
        ]
      }
    ],
    "checklist": [
      "Choose recruitment rather than rental.",
      "Send city, licence status and experience.",
      "Get the current document list.",
      "Confirm the depot and appointment.",
      "Read the applicable working terms."
    ],
    "references": [
      {
        "label": "Green GSM official driver requirements",
        "href": "https://www.greengsm.ph/en/driver-car"
      }
    ],
    "lang": "en-PH",
    "related": [
      "green-gsm-rental-guide-filipino"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "green-gsm-rental-guide-filipino",
    "title": "Green GSM EV rental: pansamantalang nakahinto",
    "description": "Alamin ang status ng Green GSM rental at kung saan magtatanong tungkol sa dati nang booking.",
    "category": "GABAY SA RENTAL",
    "service": "green-gsm-rental-pasada",
    "summary": "Simula sa update ng 25 Nobyembre 2026, pansamantalang nakahinto ang Green GSM rental hanggang sa susunod na abiso. Walang bagong registration o deposito. Wala pang kumpirmadong petsa ng muling pagbubukas.",
    "sections": [
      {
        "heading": "Kung balak mo pa lang mag-apply",
        "paragraphs": [
          "Hintayin ang opisyal na anunsyo bago magparehistro o magbayad. Magkaibang programa ang EV rental at ang pag-aaplay bilang taxi driver."
        ]
      },
      {
        "heading": "Kung may dati ka nang booking",
        "paragraphs": [
          "Itago ang confirmation, resibo at booking reference. Sa pribadong channel, magtanong sa team na nakalagay sa confirmation tungkol sa status at mga tuntunin ng iyong booking. Huwag ilagay ang ID o detalye ng bayad sa public comments."
        ]
      }
    ],
    "checklist": [
      "Itago ang confirmation at resibo.",
      "Ihanda ang reference ng dati mong booking.",
      "Hintayin ang opisyal na abiso."
    ],
    "references": [
      {
        "label": "Status ng Green GSM rental sa DT Car",
        "href": "/business/green-gsm-rental-pasada/"
      }
    ],
    "lang": "fil-PH",
    "related": [
      "green-gsm-driver-application-guide"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "vinfast-service-appointment-checklist",
    "title": "VinFast Service Appointment: What to Send Before Booking",
    "description": "Prepare model, mileage, service history and symptoms so DT Car can coordinate an appropriate workshop enquiry.",
    "category": "AFTERSALES",
    "service": "vinfast-workshop-service",
    "summary": "Send your VinFast model, year, mileage, city and the work or symptom you want checked. A photo of the dashboard taken while safely parked and the last service record can help the receiving team understand the enquiry before arranging a visit.",
    "sections": [
      {
        "heading": "Give the workshop a useful description",
        "paragraphs": [
          "For routine maintenance, state the last service date and odometer reading. If you do not have the record, say that rather than estimating a service history. Ask the receiving workshop which schedule applies to your exact vehicle.",
          "For an intermittent symptom, describe when it occurs: at startup, during charging, at a particular speed or after a specific event. Include the wording of any warning message. A symptom report helps triage the appointment; it is not a remote diagnosis."
        ]
      },
      {
        "heading": "Confirm whether the vehicle can travel",
        "paragraphs": [
          "Tell the team if the vehicle cannot be driven or charging cannot be completed. If you are uncertain whether it is safe to drive, contact qualified service or roadside support for instructions before attempting the trip.",
          "Do not open high-voltage components or attempt electrical repairs to prepare for an appointment. VinFast’s maintenance guidance directs specialist work to qualified technicians. A workshop can decide which checks are appropriate after receiving the details."
        ]
      },
      {
        "heading": "Ask for the scope and estimate",
        "paragraphs": [
          "Confirm the workshop address, arrival time, expected inspection process and whether a quotation will follow diagnosis. Ask which charges apply to assessment, parts and labour and how any additional work will be approved.",
          "If downtime matters, explain your available window. For fleet vehicles, list unit references and symptoms separately so the team can plan capacity. Do not assume a part is in stock until the workshop confirms it."
        ]
      },
      {
        "heading": "Keep a service record after the visit",
        "paragraphs": [
          "Request a record of the checks and work completed, the next steps and any follow-up date. Keep it with the invoice and previous maintenance history. If the symptom returns, quote that job record when contacting the workshop.",
          "Warranty treatment depends on the vehicle, history, diagnosis and applicable terms. DT Car can coordinate the enquiry; the receiving service provider needs to assess a specific claim."
        ]
      }
    ],
    "checklist": [
      "Model, year, mileage and city.",
      "Last service date and record if available.",
      "Exact symptom and when it occurs.",
      "Dashboard photo taken while parked.",
      "Appointment, estimate and approval process."
    ],
    "references": [
      {
        "label": "VinFast official maintenance guidance",
        "href": "https://vinfastauto.ph/en/does-an-electric-car-need-maintenance-heres-what-to-know"
      }
    ],
    "lang": "en-PH",
    "related": [
      "ev-charging-philippines-cost"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "ev-charging-philippines-cost",
    "title": "EV Charging Costs in the Philippines: Plan Your Budget",
    "description": "Understand charging bills, promotional eligibility and a simple energy-cost calculation before planning EV ownership.",
    "category": "EV CHARGING",
    "service": "vinfast-test-drive",
    "summary": "Estimate charging cost from energy billed in kWh multiplied by the applicable peso-per-kWh rate. Then check promotions, parking and any overstay fees separately. The station and your account entitlement determine the actual bill.",
    "sections": [
      {
        "heading": "A recent V-Green pricing update",
        "paragraphs": [
          "VinFast’s announcement dated 20 November 2026 describes a phased introduction of charging payments at selected V-Green stations, starting 11 November. It lists ₱17/kWh including VAT for AC and DC charging where payment is active. Existing free-charging promotions remain subject to the customer’s entitlement.",
          "The announcement also describes DC overstay charges after a ten-minute grace period once charging stops. Check the current tariff and your app before a session; do not assume that a charging promotion removes every possible fee."
        ]
      },
      {
        "heading": "Calculate an energy-only scenario",
        "paragraphs": [
          "For example, 20 kWh billed at an assumed ₱17/kWh is ₱340 before any other applicable charges or promotion. This illustrates the arithmetic, not a guaranteed cost for a particular vehicle or journey.",
          "For a monthly estimate, multiply distance by your measured electricity use per kilometre and the applicable rate. Metered charging energy may differ from dashboard consumption, so billing records provide a stronger input once you have them."
        ]
      },
      {
        "heading": "Include the practical charging plan",
        "paragraphs": [
          "Identify where you can charge at the times you normally drive, and keep a backup option. Consider travel to the station, waiting time, access rules and parking fees. An inexpensive tariff is less useful if the location does not fit your schedule.",
          "For home charging, request an assessment and installation quote from a qualified professional. Permission, supply capacity and the proposed cable route should be checked for your property before installation is agreed."
        ]
      },
      {
        "heading": "Compare energy and ownership separately",
        "paragraphs": [
          "Our calculator compares editable energy-cost scenarios for an EV and a petrol vehicle. It does not include purchase price, battery subscription, insurance, maintenance, parking or finance. Add those items to your own budget when comparing total ownership.",
          "When asking DT Car for a vehicle quotation, mention your charging plan and usual distance. That helps frame the battery-option discussion around how you will actually use the car."
        ]
      }
    ],
    "checklist": [
      "Check the station’s current tariff.",
      "Confirm your own promotional entitlement.",
      "Allow for parking and overstay conditions.",
      "Use billed kWh when available.",
      "Keep a backup charging location."
    ],
    "references": [
      {
        "label": "VinFast: V-Green charging payments, 20 November 2026",
        "href": "https://vinfastauto.ph/en/introducing-charging-payments-on-the-v-green-network"
      }
    ],
    "lang": "en-PH",
    "related": [
      "vinfast-battery-subscription-comparison",
      "charging-site-proposal-checklist",
      "electric-vs-gasoline-car-cost",
      "ev-home-charging-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "charging-site-proposal-checklist",
    "title": "Can Your Property Host EV Charging? Site Proposal Checklist",
    "description": "Prepare access, parking, electrical supply and site photos for an initial V-Green charging-location enquiry with DT Car.",
    "category": "PROPERTY & CHARGING",
    "service": "vgreen-charging-site-proposal",
    "summary": "An initial charging-site proposal should identify the property, authorized contact, available parking area, access and known electrical supply. A map pin and labelled photos help DT Car screen the location before arranging a technical visit.",
    "sections": [
      {
        "heading": "Why DT Car may ask for a second look at the land",
        "paragraphs": [
          "DT Car’s Quality Car Manila team asks about flooding, drainage and ground movement when it evaluates a proposed site. If water reached the parking area during a storm, mark where it collected on a site photo. Show the access road too. A dry bay is of limited use if drivers cannot reach it during heavy rain.",
          "Sketch the area vehicles can actually use. Show where a car enters, turns, charges and exits, and leave room for emergency access. Note any available information about three-phase supply so an engineer can check capacity with the utility. Owners or brokers should identify who can authorise the proposed lease and disclose any conflicting claims before a survey is scheduled."
        ]
      },
      {
        "heading": "Show how vehicles enter, park and leave",
        "paragraphs": [
          "Provide a map pin and photographs from the road to the proposed bays. Label the entrance and exit, describe any access restrictions and show nearby structures that could affect vehicle movement. Include the hours when drivers can enter the site.",
          "Mark the proposed charging area on a simple sketch. Record dimensions and the number of bays you are offering. Distinguish space that is available exclusively from parking that must remain shared with other users."
        ]
      },
      {
        "heading": "Collect electrical information safely",
        "paragraphs": [
          "If available, provide the existing supply details, main breaker rating and a photograph of the closed electrical panel. Ask a qualified site representative for information that requires access to electrical equipment. Do not open a live panel or estimate cable capacity yourself.",
          "Describe the approximate route from the supply point to the proposed equipment area, including walls, roads and underground sections. An engineer must assess capacity, protection and installation requirements; a photograph alone cannot establish suitability."
        ]
      },
      {
        "heading": "Explain site conditions and authority",
        "paragraphs": [
          "State whether you are the owner or an authorized representative, and who can arrange inspection access. Include the proposed commercial terms and when the area could become available. Keep ownership documents for the appropriate private review channel.",
          "Mention known flooding, drainage concerns and the relative level of the bays and nearby road. These details help the technical team decide what to examine on site. A candid first description is more useful than calling a property ideal without evidence."
        ]
      },
      {
        "heading": "Separate screening from approval",
        "paragraphs": [
          "Initial screening is a way to decide whether a more detailed review is useful. It is not a lease commitment, construction approval or promise of rental income. Commercial and technical reviews need their own confirmed terms.",
          "Prepare one proposal per location, even when several properties have the same owner. Use a clear site name on every photo and sketch so files from different addresses are not mixed."
        ]
      }
    ],
    "checklist": [
      "Map pin and authorized contact.",
      "Entrance, exit and proposed-bay photos.",
      "Dimensions, bay count and access hours.",
      "Known supply and proposed cable route.",
      "Flood history and availability."
    ],
    "references": [{"label":"DT Car – Quality Car Manila, publisher of the site evaluation explainer","href":"https://www.facebook.com/profile.php?id=61550266324189"},
      {
        "label": "DT Car site-selection brief",
        "href": "/news/vgreen-land-space-charging-battery-swapping-philippines/"
      }
    ],
    "lang": "en-PH",
    "related": [
      "ev-charging-philippines-cost",
      "ev-home-charging-philippines"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "ban-xe-cu-manila",
    "title": "Bán Xe Cũ Ở Manila: Chuẩn Bị Gì Để Định Giá?",
    "description": "Hướng dẫn gửi thông tin, ảnh xe và đặt lịch kiểm tra với DT Car bằng tiếng Việt tại Metro Manila.",
    "category": "XE CŨ · TIẾNG VIỆT",
    "service": "sell-my-car-manila",
    "summary": "Để bắt đầu định giá xe tại Manila, bạn gửi DT Car hãng xe, mẫu và phiên bản, năm sản xuất, số km, ảnh hiện trạng và khu vực đang để xe. Đội ngũ sẽ trao đổi lịch kiểm tra trước khi xác nhận đề nghị mua cho chiếc xe cụ thể.",
    "sections": [
      {
        "heading": "Gửi đủ thông tin ngay từ đầu",
        "paragraphs": [
          "Ghi rõ phiên bản, hộp số và số km hiện tại. Nếu chưa biết phiên bản, chụp thêm tem hoặc tên phiên bản trên xe để đội tư vấn đối chiếu. Nêu mức giá mong muốn nếu bạn đã có dự kiến.",
          "Thông báo các lỗi đang gặp, sửa chữa đáng chú ý và lịch bảo dưỡng có thể cung cấp. Không cần mô tả xe hoàn hảo; thông tin đúng giúp hai bên chuẩn bị cho buổi kiểm tra thực tế."
        ]
      },
      {
        "heading": "Ảnh nào giúp định giá sơ bộ?",
        "paragraphs": [
          "Chụp đầu xe, đuôi xe, hai bên và hai góc chéo trong điều kiện đủ sáng. Thêm ảnh nội thất, khoang hành lý và đồng hồ km khi xe đang đỗ an toàn. Chụp cả vị trí rộng và cận cảnh của vết trầy hoặc hư hỏng.",
          "Giữ nguyên màu và hiện trạng, không dùng bộ lọc làm mất dấu vết. Không đăng công khai ảnh giấy tờ có chữ ký, địa chỉ nhà hoặc thông tin nhận dạng cá nhân. Đội tư vấn sẽ hướng dẫn kênh phù hợp khi cần kiểm tra hồ sơ."
        ]
      },
      {
        "heading": "Hẹn kiểm tra và trao đổi đề nghị mua",
        "paragraphs": [
          "Gửi thành phố hoặc khu vực xe có thể kiểm tra cùng thời gian thuận tiện. Chờ xác nhận điểm hẹn và người phụ trách trước khi di chuyển. Nếu xe không thể chạy, báo rõ ngay khi đặt lịch.",
          "Giá trao đổi qua ảnh là cơ sở thảo luận ban đầu. Phiên bản, lịch sử sử dụng và tình trạng thực tế có thể ảnh hưởng đến đề nghị cuối cùng. Yêu cầu làm rõ các điều kiện đi kèm trước khi đồng ý."
        ]
      },
      {
        "heading": "Chốt bàn giao rõ ràng",
        "paragraphs": [
          "Thống nhất bằng văn bản giá, cách thanh toán, thời điểm bàn giao và công việc mỗi bên phụ trách. Kiểm tra tiền nhận qua ngân hàng hoặc nhà cung cấp thanh toán của bạn; không chỉ dựa vào ảnh chụp giao dịch.",
          "Bạn có thể liên hệ kênh tiếng Việt của DT Car từ trang danh bạ liên hệ. Nội dung này hướng dẫn chuẩn bị định giá, không thay thế việc kiểm tra hồ sơ và thủ tục áp dụng cho từng giao dịch."
        ]
      }
    ],
    "checklist": [
      "Mẫu xe, phiên bản, năm và số km.",
      "Ảnh ngoại thất, nội thất và hiện trạng lỗi.",
      "Khu vực xe đang đỗ và thời gian hẹn.",
      "Lịch bảo dưỡng nếu có.",
      "Điều kiện giá, thanh toán và bàn giao."
    ],
    "references": [],
    "lang": "vi",
    "related": [
      "car-appraisal-photos-manila",
      "used-car-inspection-checklist"
    ],
    "date": "2026-11-25"
  },
  {
    "slug": "fleet-dashcam-meter-installation",
    "title": "Fleet Dashcam and Meter Installation: Plan a Rollout",
    "description": "Prepare vehicle lists, approved scope, installation scheduling and acceptance records for a fleet equipment project.",
    "category": "FLEET OPERATIONS",
    "service": "fleet-installation",
    "summary": "A fleet installation brief should identify the vehicle models, quantity, approved equipment scope, work location, access windows and acceptance criteria. These details let DT Car discuss staffing, material readiness and a realistic rollout schedule.",
    "sections": [
      {
        "heading": "Define one scope per vehicle group",
        "paragraphs": [
          "Separate the vehicles by model and equipment configuration. List whether each group needs stickers, SIM-enabled dashcam setup, meter work or another agreed task. Distinguish equipment supply from installation labour and configuration.",
          "Record which partner approves equipment and placement. If different vehicle groups have different requirements, provide separate drawings or approved reference photos. Do not assume that a successful installation on one model transfers unchanged to another."
        ]
      },
      {
        "heading": "Plan the work around access",
        "paragraphs": [
          "Provide the site address, parking layout, key-control procedure and available work windows. Explain how vehicles will be identified and moved through the work area. Searching for vehicles and obtaining keys can affect the schedule as much as the installation itself.",
          "Confirm what power, connectivity, sheltered space and storage are available. Agree responsibility for materials before the work starts, including how shortages, damaged items or changes will be recorded."
        ]
      },
      {
        "heading": "Define the evidence for acceptance",
        "paragraphs": [
          "Agree a checklist for each vehicle and the photographs required at completion. Use a consistent vehicle reference so the record can be matched to the unit without mixing it with another vehicle’s work.",
          "For connected equipment, agree what functional checks are included and who provides any required accounts or SIM activation. Keep passwords and customer data out of public progress photos. Acceptance should be based on the approved scope, not on an assumed test that nobody agreed to perform."
        ]
      },
      {
        "heading": "Close out exceptions as well as completed work",
        "paragraphs": [
          "Maintain a separate list of units awaiting materials, access or rework. Each exception needs a reason, responsible contact and next action. This makes the handover useful to the fleet operator after the installation team leaves.",
          "Ask for a quotation that states quantity, scope, tax treatment, exclusions, warranty terms and acceptance process. DT Car can review the brief and discuss a suitable site survey or rollout plan; a generic article is not a fixed-price project offer."
        ]
      }
    ],
    "checklist": [
      "Vehicle model mix and quantity.",
      "Approved equipment and placement scope.",
      "Site access and work windows.",
      "Material and activation responsibilities.",
      "Per-vehicle acceptance and exception records."
    ],
    "references": [
      {
        "label": "DT Car fleet installation project",
        "href": "/news/gsm-10000-vehicle-technology-rollout/"
      },
      {
        "label": "Xentro Mall project",
        "href": "/news/xentro-mall-fleet-installation/"
      }
    ],
    "lang": "en-PH",
    "related": [],
    "date": "2026-11-25"
  },
  {
    "slug": "buy-used-car-manila",
    "title": "Buying a Used Car in Manila: Build a Better Shortlist",
    "description": "Compare used cars in Manila by condition, running costs and viewing arrangements. Prepare a clear buying brief before contacting DT Car.",
    "category": "USED CARS",
    "service": "used-cars-manila",
    "summary": "Start a used-car search with your total budget, passenger needs and normal route. Shortlist specific vehicles only after confirming their exact variant, current availability and condition. A low advertised price alone is not enough to compare two cars.",
    "sections": [
      {
        "heading": "Set a budget that leaves room after purchase",
        "paragraphs": [
          "Write down the amount available for the vehicle separately from the amount you can reserve for inspection, insurance, registration-related expenses and immediate maintenance. Get quotations for these items instead of assuming a fixed percentage covers every vehicle. If buying the car uses all of your available funds, an otherwise ordinary repair can disrupt your transport plan.",
          "Compare the cost of keeping the car as well as acquiring it. Ask a workshop about the maintenance likely to fall due on the specific example you are considering. The useful question is what this car needs next, supported by records and inspection, rather than whether the model has a general reputation for reliability."
        ]
      },
      {
        "heading": "Turn your routine into three non-negotiables",
        "paragraphs": [
          "List how many people normally travel, the largest item you regularly carry and where the vehicle must park. Then add your transmission preference and the routes you expect to drive. A buyer carrying bulky equipment has a different shortlist from someone driving alone through tight city parking.",
          "Keep cosmetic preferences separate from essential requirements. Colour may be flexible while passenger access or garage clearance is not. Send measurements for a narrow entrance or bulky load so the sales team can help you rule out unsuitable options before arranging several viewings."
        ]
      },
      {
        "heading": "Compare actual units, not model names",
        "paragraphs": [
          "For each candidate, record the year, exact variant, odometer reading, asking price, service records available and the date availability was confirmed. Ask for recent photos of the actual vehicle. A previous delivery photo or an example image does not confirm present stock.",
          "Two vehicles with the same badge may differ in equipment, history and near-term repairs. Keep unresolved items in a separate column: a missing record is a question to investigate, not evidence that the car is either good or bad. Use an independent inspection to resolve condition questions before committing."
        ]
      },
      {
        "heading": "Make one viewing answer the important questions",
        "paragraphs": [
          "Confirm the meeting place, the specific vehicle and whether inspection and a test drive can be arranged. Bring your shortlist and ask to review the vehicle records with the seller. If someone else is attending for you, agree what they should check and what they are authorised to decide.",
          "DT Car can discuss used-car sourcing from your budget, model preferences and location. Ask the team which vehicles are currently available and arrange a viewing by appointment. This guide is a buying framework, not a live inventory or a promise that a particular model is in stock."
        ]
      }
    ],
    "checklist": [
      "Set vehicle and after-purchase budgets.",
      "List essential space and route needs.",
      "Confirm the exact unit is available.",
      "Arrange inspection before committing."
    ],
    "related": [
      "used-car-inspection-checklist",
      "new-vs-used-car-philippines",
      "car-trade-in-philippines"
    ],
    "references": [],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "car-trade-in-philippines",
    "title": "Car Trade-In in the Philippines: Compare the Full Deal",
    "description": "Understand trade-in quotations, the cash difference and handover timing before replacing your car in the Philippines.",
    "category": "USED CARS",
    "service": "sell-my-car-manila",
    "summary": "A trade-in comparison needs two separate figures: the offer for your existing car and the complete price of its replacement. Compare the cash difference and every condition together. A larger trade-in allowance is not automatically a better overall deal.",
    "sections": [
      {
        "heading": "Compare the amount you actually pay",
        "paragraphs": [
          "Suppose one quote prices the replacement at ₱900,000 and offers ₱350,000 for your car. The difference is ₱550,000. A second quote prices the replacement at ₱870,000 and offers ₱330,000. Its difference is ₱540,000. Compare fees, loan settlement and handover dates before choosing. These are illustrative figures, not DT Car offers."
        ]
      },
      {
        "heading": "Separate the two transactions on paper",
        "paragraphs": [
          "Ask for the replacement vehicle price before trade-in, the appraised value of your current car and the additional charges. Keep any discount visible as its own line. This makes it easier to see whether an attractive allowance is offset by a higher replacement price or by fees elsewhere.",
          "For example, a hypothetical replacement priced at ₱900,000 with a ₱400,000 allowance leaves ₱500,000 before other charges. Another priced at ₱860,000 with a ₱380,000 allowance leaves ₱480,000. The second has a smaller allowance but a lower cash difference. These are arithmetic examples, not DT Car offers."
        ]
      },
      {
        "heading": "Make the appraisal conditions explicit",
        "paragraphs": [
          "Provide the exact variant, year, mileage and known condition of your existing car. Include maintenance records, previous repairs and modifications. Photos help start the discussion, but an inspection may change an initial indication. Ask what still needs to be checked and when the offer becomes firm.",
          "Request the period for which the offer is valid and the circumstances that can change it. If you continue using the car while waiting for a replacement, discuss mileage and condition expectations. This helps both sides avoid disagreeing about a vehicle that has changed between appraisal and handover."
        ]
      },
      {
        "heading": "Match the handover dates",
        "paragraphs": [
          "Confirm whether the replacement vehicle is available, reserved or still awaiting allocation. Ask when you must release your existing car and when you can collect the replacement. Include any interim transport cost in your comparison if the dates do not align.",
          "If there is outstanding finance, tell the parties at the start and request the lender’s current settlement instructions. Ask who coordinates the remaining balance and document release. Do not treat a verbal allowance as confirmation that a loan or ownership-record issue has been settled."
        ]
      },
      {
        "heading": "Ask DT Car for an appraisal and replacement enquiry",
        "paragraphs": [
          "Send the current car’s details together with the replacement model or vehicle type you want. Include your location and target changeover date. DT Car can assess the appraisal enquiry and discuss replacement sourcing; the team must confirm whether a combined trade-in arrangement is available for your case.",
          "Before accepting, compare the final written totals, payment instructions, vehicle descriptions and handover conditions. Keep separate records for what you are selling and what you are buying, even when the transactions are coordinated in one appointment."
        ]
      }
    ],
    "checklist": [
      "Separate appraisal and replacement prices.",
      "Compare the total cash difference.",
      "Confirm conditions and offer validity.",
      "Align both vehicle handover dates."
    ],
    "related": [
      "car-appraisal-photos-manila",
      "used-car-valuation-philippines",
      "buy-used-car-manila"
    ],
    "references": [],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "new-vs-used-car-philippines",
    "title": "New vs Used Car: A Practical Philippine Buying Guide",
    "description": "Compare new and used cars using actual quotations, ownership costs, condition and delivery timing rather than purchase price alone.",
    "category": "OWNERSHIP",
    "service": "used-cars-manila",
    "summary": "Choose between a new and used car by comparing two actual vehicles against the same needs and ownership period. Purchase price, condition, warranty terms, near-term maintenance and delivery timing all matter. Neither choice is automatically better for every buyer.",
    "sections": [
      {
        "heading": "Start with comparable vehicles",
        "paragraphs": [
          "Set the passenger space, parking fit and intended use before comparing prices. A new small car and a used larger SUV may cost a similar amount but solve different transport problems. Decide whether the extra space is essential and whether the larger vehicle fits your normal parking and driving routine.",
          "Use exact variants and dated quotations. Record what is included, which costs remain outside the price and whether the offered vehicle can actually be delivered when you need it. Avoid comparing an advertised starting price with an all-inclusive quotation as though they cover the same items."
        ]
      },
      {
        "heading": "Budget for the first year, not just collection day",
        "paragraphs": [
          "Create separate lines for purchase, insurance, registration-related expenses, energy or fuel, scheduled servicing and any repairs identified before purchase. For a used car, ask an independent inspector which items need attention immediately and which can reasonably be planned later.",
          "For a new vehicle, request the maintenance schedule and the warranty terms for the exact model. For a used vehicle, verify any remaining warranty with the relevant provider. A seller’s statement that a car is still under warranty does not establish what is covered or whether particular conditions have been met."
        ]
      },
      {
        "heading": "Consider how much uncertainty you can absorb",
        "paragraphs": [
          "A lower purchase price may leave more cash available for maintenance, but the condition of the actual used vehicle is crucial. Recent records and a thorough inspection help you judge it. A newer purchase may offer a different support arrangement, yet it still needs scheduled care and a realistic delivery plan.",
          "Think about the practical cost of downtime. If this is the only household vehicle, ask how you would manage school runs or work during repairs. If another vehicle is available, your tolerance for waiting may be different. Make that assumption explicit instead of treating every buyer’s situation as the same."
        ]
      },
      {
        "heading": "Use a simple decision sheet",
        "paragraphs": [
          "Give each candidate a row for seating, parking, all-in purchase cost, first-year spending, documented condition, warranty and availability. Mark information you do not have as unknown. Obtain the missing quote or inspection result before declaring one option cheaper.",
          "Ask DT Car about current used-car options or a VinFast quotation, depending on your shortlist. Keep the actual offers side by side and choose the vehicle that meets your requirements within a budget you can sustain. Future resale values remain uncertain and should not be presented as guaranteed returns."
        ]
      }
    ],
    "checklist": [
      "Compare vehicles meeting the same needs.",
      "Estimate first-year costs separately.",
      "Verify condition and warranty terms.",
      "Confirm a realistic delivery date."
    ],
    "related": [
      "buy-used-car-manila",
      "used-car-inspection-checklist",
      "electric-vs-gasoline-car-cost"
    ],
    "references": [],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "used-car-valuation-philippines",
    "title": "Used-Car Valuation: Why Offers Can Differ",
    "description": "Understand how variant, condition, records and selling arrangements affect a used-car appraisal in the Philippines.",
    "category": "USED CARS",
    "service": "sell-my-car-manila",
    "summary": "A used-car valuation depends on the specific vehicle and the conditions of the offer. Advertised asking prices can provide context, but they do not prove completed sale prices. Compare cars of the same variant and ask what an appraiser has included or deducted.",
    "sections": [
      {
        "heading": "Identify the vehicle precisely",
        "paragraphs": [
          "Start with the make, model, year, exact variant, transmission and odometer reading. Include the car’s location and any modifications. Small differences in equipment or specification can make an apparently similar online listing a weak comparison.",
          "Separate confirmed information from assumptions. If you are unsure of a variant, provide the relevant vehicle details privately to the appraiser rather than choosing the highest-priced version online. Keep registration documents available for review without posting personal details publicly."
        ]
      },
      {
        "heading": "Use listings as a range, not a price guarantee",
        "paragraphs": [
          "Compare several recent listings for genuinely similar vehicles and record their dates. Remove examples that differ substantially in year, specification or condition. An old listing can remain visible after circumstances change, and a seller’s asking price may differ from the final agreed amount.",
          "A useful comparison sheet contains the asking price, mileage, stated condition and unresolved questions for each example. Avoid averaging unlike vehicles simply to produce one precise number. A realistic range with clear assumptions is more useful than an unsupported valuation presented to the last peso."
        ]
      },
      {
        "heading": "Ask how condition affects the offer",
        "paragraphs": [
          "Present service records, repair history and known faults before the appraisal. Ask which observations are affecting the estimate and whether any items require further checking. A written explanation makes it easier to compare offers and to understand a revision after inspection.",
          "Do not assume that spending money on cosmetic work will increase the offer by the same amount. Discuss significant work with the appraiser first and obtain repair quotations where needed. Describing existing damage accurately is more useful than hiding it in photos or editing it out."
        ]
      },
      {
        "heading": "Compare payment and handover conditions",
        "paragraphs": [
          "Two offers may have different inspection conditions, payment timing and collection arrangements. Confirm who is buying, when the amount becomes final and what must happen before handover. The highest headline number is difficult to evaluate if its conditions are unclear.",
          "For a DT Car appraisal enquiry, send the identifying details, recent unedited photos, location and your preferred timing. Include an asking price if you have one. The team can review the information and discuss an inspection; an initial photo assessment is not a guaranteed purchase offer."
        ]
      }
    ],
    "checklist": [
      "Identify the exact variant and mileage.",
      "Compare similar, recent listings.",
      "Disclose condition and available records.",
      "Check payment and handover conditions."
    ],
    "related": [
      "car-appraisal-photos-manila",
      "car-trade-in-philippines",
      "used-car-inspection-checklist"
    ],
    "references": [],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "vinfast-vf3-vs-vf5",
    "title": "VinFast VF 3 vs VF 5: Which Fits Your Routine?",
    "description": "Compare the VF 3 and VF 5 by seating, quotation scope, parking and charging needs before arranging a Philippine test drive.",
    "category": "VINFAST",
    "service": "vinfast-test-drive",
    "summary": "The VF 3 offers four seats, while the VF 5 is listed with five. Start with the people and luggage you carry, then compare parking fit, charging compatibility and complete quotations. A test drive should resolve everyday-use questions, not just confirm a preferred colour.",
    "sections": [
      {
        "heading": "Passenger needs come before price",
        "paragraphs": [
          "If five people need to travel together, a four-seat layout does not meet that requirement. If your usual journey is solo or as a couple, compare how both models fit your parking space and how easily passengers enter and leave. Try the seating arrangement with the people who will actually use it.",
          "Bring measurements for items you often carry, such as luggage or work equipment. Check the available arrangement with the required passenger seats in use. A demonstration with seats folded may not represent how you will travel most days."
        ]
      },
      {
        "heading": "Keep the battery arrangement consistent",
        "paragraphs": [
          "VinFast’s published Philippine price list offers both subscription and non-subscription pricing for these models. Compare the same battery arrangement across the two cars, then request the applicable recurring fee if considering a subscription. Otherwise, the apparent model-price gap can mix two different ownership structures.",
          "Use the model-specific price guides linked below for the published starting figures. Ask for a dated written quote covering the exact variant, additional charges and any promotion. Current availability and the final order terms need confirmation with the sales team."
        ]
      },
      {
        "heading": "Ask for a charging demonstration for each model",
        "paragraphs": [
          "Confirm the charging connection, supported equipment and the procedure for the exact Philippine vehicle offered. Do not assume two electric models accept identical home or public charging equipment. Ask the adviser to demonstrate the charging interface and explain which compatible locations can serve your routine.",
          "Bring your usual weekday distance and a typical longer journey to the discussion. Identify a primary charging option and a backup before choosing. A charger’s advertised maximum power does not, by itself, establish the charging speed of either vehicle."
        ]
      },
      {
        "heading": "Record the same observations on both drives",
        "paragraphs": [
          "Use one scorecard for visibility, seat comfort, passenger access, parking, luggage and ease of using the controls. Take notes immediately after each drive. If a route or manoeuvre is important to you, discuss whether it can safely be included in the appointment.",
          "Tell DT Car you are comparing both models and confirm which demonstration units are available before travelling. Request the meeting point and appointment time in advance. Choose after resolving your must-have requirements; this comparison does not declare a universal winner or claim firsthand road-test results."
        ]
      }
    ],
    "checklist": [
      "Confirm whether four or five seats fit.",
      "Compare the same battery arrangement.",
      "Check model-specific charging support.",
      "Use one scorecard for both drives."
    ],
    "related": [
      "vinfast-vf3-price-philippines",
      "vinfast-vf5-price-philippines",
      "ev-home-charging-philippines"
    ],
    "references": [
      {
        "label": "VinFast VF 3 official model page",
        "href": "https://shop.vinfastauto.ph/vf3"
      },
      {
        "label": "VinFast VF 5 official model page",
        "href": "https://vinfastauto.ph/en/vf5"
      },
      {
        "label": "VinFast Philippines price list",
        "href": "https://vinfastauto.ph/en/price-list"
      }
    ],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "electric-vs-gasoline-car-cost",
    "title": "Electric vs Gasoline Car: Compare Monthly Energy Costs",
    "description": "Use your distance, efficiency and actual charging or fuel rates to compare EV and gasoline energy costs in the Philippines.",
    "category": "OWNERSHIP",
    "service": "vinfast-test-drive",
    "summary": "Compare monthly energy costs using the same distance: EV cost equals kilometres ÷ 100 × kWh per 100 km × price per kWh. Gasoline cost uses litres per 100 km and price per litre instead. This estimates energy spending, not total ownership cost.",
    "sections": [
      {
        "heading": "Use a typical month of driving",
        "paragraphs": [
          "Record the odometer at the start and end of a representative period. Include regular errands and weekend trips, not just the commute. If your work pattern changes, run a lower-distance and a higher-distance scenario instead of assuming one month represents every month.",
          "Use efficiency measurements that reflect your route where possible. Traffic, load and driving conditions can affect consumption. Label manufacturer test figures and personal estimates clearly so a projected result is not mistaken for a bill you have already achieved."
        ]
      },
      {
        "heading": "Work through an illustrative example",
        "paragraphs": [
          "At 1,000 km per month, an assumed EV consumption of 15 kWh per 100 km uses 150 kWh. At an assumed ₱17 per kWh, the energy cost is ₱2,550. A gasoline vehicle using an assumed 7 litres per 100 km at ₱60 per litre costs ₱4,200 for the same distance.",
          "The difference is ₱1,650 in this example. These inputs illustrate the calculation; they are not a measured comparison of particular models or a guarantee of savings. Replace each value with your own consumption and applicable rates in the DT Car calculator."
        ]
      },
      {
        "heading": "Account for how you actually charge",
        "paragraphs": [
          "For a mix of home and public charging, calculate the energy bought at each rate separately. If half of 150 kWh is billed at an illustrative ₱12 and half at ₱20, the cost is ₱900 plus ₱1,500, or ₱2,400. The two rates in this example are hypothetical, not current tariff quotations.",
          "Use billed energy where available, because energy delivered into the vehicle and energy drawn from the supply can differ. Add parking or other session charges separately. If a free-charging promotion applies, record its eligibility and duration rather than assuming it covers every charger indefinitely."
        ]
      },
      {
        "heading": "Keep total ownership cost in a second calculation",
        "paragraphs": [
          "Energy savings alone do not establish which vehicle is cheaper to own. Add purchase-price differences, battery subscription charges where applicable, insurance, installation, maintenance and other recurring expenses. If comparing financing, use the lender’s actual quotation rather than an advertised monthly figure without its conditions.",
          "The calculator linked on this page lets you change the distance, efficiency and energy prices. Use it to explore a range of outcomes, then request a model quotation and charging assessment. Keep future resale assumptions visible because they can change the result substantially."
        ]
      }
    ],
    "checklist": [
      "Use the same monthly distance.",
      "Enter realistic consumption and rates.",
      "Include each charging location used.",
      "Keep ownership costs separate."
    ],
    "related": [
      "ev-charging-philippines-cost",
      "vinfast-battery-subscription-comparison",
      "new-vs-used-car-philippines"
    ],
    "references": [],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "ev-home-charging-philippines",
    "title": "Home EV Charging in the Philippines: Before You Buy",
    "description": "Prepare a home or condominium charging enquiry with vehicle compatibility, parking permission and a professional electrical assessment.",
    "category": "EV CHARGING",
    "service": "vinfast-test-drive",
    "summary": "Check your exact vehicle’s charging compatibility and arrange a professional electrical assessment before buying a home charger. For rented or shared parking, establish permission and billing arrangements first. A nearby socket does not establish that a suitable charging installation is possible.",
    "sections": [
      {
        "heading": "Confirm the vehicle before choosing equipment",
        "paragraphs": [
          "Ask the vehicle provider which charging equipment is compatible with the exact model and market specification. Record the connector, supported charging type and relevant charging limits. Do not buy a charger solely because it is advertised for electric vehicles or because another model uses it.",
          "Bring the manufacturer’s documentation to the installer. Ask for an explanation of the proposed equipment, how it will work with your car and who provides support. Keep vehicle and charger quotations separate so you can see whether installation and commissioning are included."
        ]
      },
      {
        "heading": "Have the supply assessed professionally",
        "paragraphs": [
          "Meralco’s home-charging guidance recommends a licensed electrical practitioner assess available capacity, the installation location and required work. Its process also covers applying for additional service capacity when needed and having the charger installed and tested before use.",
          "Prepare your vehicle details, parking photos and a description of the property for the assessment. Ask the practitioner what other information is required. Do not open electrical equipment yourself to obtain photos, or treat a generic online wiring example as a design for your property."
        ]
      },
      {
        "heading": "Resolve shared-parking arrangements early",
        "paragraphs": [
          "For a condominium or rented property, ask the owner or building administrator whether the proposed charger and cable route can be approved. Discuss which parking space is involved, who can use it, how electricity will be measured and who pays for ongoing support or repairs.",
          "Request the building’s own process and required documents before committing to equipment. An assigned parking space does not by itself answer every question about electrical work in shared areas. Keep approval, installation scope and billing arrangements together so everyone is working from the same proposal."
        ]
      },
      {
        "heading": "Plan for days when home charging is unavailable",
        "paragraphs": [
          "Identify a compatible public option along your normal route and check its access conditions. If installation will follow vehicle delivery, plan the interim charging routine before accepting the handover date. This avoids relying on equipment that has not yet been approved or commissioned.",
          "Tell DT Car your intended model and whether you park at home, in a condominium or elsewhere. The sales discussion can include model-specific charging questions. Electrical suitability and installation scope still require an assessment by the appropriate professional; this guide is a preparation checklist, not an installation specification."
        ]
      }
    ],
    "checklist": [
      "Confirm exact vehicle compatibility.",
      "Arrange a licensed electrical assessment.",
      "Resolve parking permission and billing.",
      "Identify a compatible backup charger."
    ],
    "related": [
      "vinfast-vf3-vs-vf5",
      "ev-charging-philippines-cost",
      "charging-site-proposal-checklist"
    ],
    "references": [
      {
        "label": "Meralco home charging installation guide",
        "href": "https://www.meralco.com.ph/residential/energy-solutions/electric-vehicles/home-charging"
      },
      {
        "label": "Meralco electric-vehicle planning guidance",
        "href": "https://www.meralco.com.ph/residential/bright-ideas/new-technology/electric-vehicles"
      }
    ],
    "lang": "en-PH",
    "date": "2026-11-25"
  },
  {
    "slug": "vinfast-price-list-philippines",
    "title": "VinFast Philippines Price List: Compare Model Quotes",
    "description": "Read VinFast Philippine starting prices for selected models and compare battery arrangements, inclusions and availability.",
    "category": "VINFAST",
    "service": "vinfast-test-drive",
    "summary": "VinFast publishes separate Philippine starting prices with and without battery subscription. Use the official list to shortlist models, then obtain a dated quotation with the exact variant, recurring fees and other charges. Published prices do not confirm stock or delivery timing.",
    "sections": [
      {
        "heading": "Selected published starting prices",
        "paragraphs": [
          "Checked on 25 November 2026, the official list gives VF 3 from ₱590,000 with subscription or ₱745,000 without; VF 5 Plus from ₱949,000 or ₱1,099,000; VF 6 Eco from ₱1,249,000 or ₱1,499,000; and VF 6 Plus from ₱1,409,000 or ₱1,699,000.",
          "The same list gives VF 7 Eco from ₱1,430,000 with subscription or ₱1,760,000 without; VF 7 Plus from ₱1,550,000 or ₱2,380,000; and Limo Green from ₱1,099,000 or ₱1,399,000. These are selected entries, not an exhaustive market-wide electric-car price list. Follow the official source below for updates."
        ]
      },
      {
        "heading": "Compare one battery arrangement at a time",
        "paragraphs": [
          "Build a shortlist using either subscription or non-subscription prices consistently. Then compare the two arrangements for the model you prefer. A lower initial payment under a subscription does not establish a lower total cost over the period you plan to keep the car.",
          "Request the applicable subscription fee, any usage-related terms and the responsibilities stated in the contract. Use your expected distance and ownership period to compare scenarios. Do not fill in an unknown recurring charge from a different model’s offer."
        ]
      },
      {
        "heading": "Ask what the quotation includes",
        "paragraphs": [
          "Request a breakdown of the vehicle price, registration, insurance, accessories, delivery and any other charges. Ask whether a promotion changes the total or adds a benefit with separate conditions. Keep the quote date and validity period visible when comparing several offers.",
          "A starting price is not an approval for financing. If using finance, compare the down payment, payment schedule, fees and total payable from the actual lender quotation. Keep those costs separate from the vehicle’s published starting price."
        ]
      },
      {
        "heading": "Shortlist by use before making a reservation",
        "paragraphs": [
          "Write down passenger needs, parking dimensions, routine distance and available charging options. Choose models that fit those requirements before deciding between trims. The best-priced car for your situation is one that meets your practical needs without relying on equipment or access you do not have.",
          "Send DT Car your preferred models, city and target purchase timing. Ask for current quotations and which demonstration units can be arranged. Before making a reservation, confirm the allocated vehicle or order status, payment recipient, written terms and expected handover process."
        ]
      }
    ],
    "checklist": [
      "Use dated, model-specific prices.",
      "Compare like-for-like battery terms.",
      "Request an itemised final quotation.",
      "Confirm availability before reserving."
    ],
    "related": [
      "vinfast-vf3-price-philippines",
      "vinfast-vf5-price-philippines",
      "vinfast-vf3-vs-vf5"
    ],
    "references": [
      {
        "label": "VinFast Philippines official price list",
        "href": "https://vinfastauto.ph/en/price-list"
      }
    ],
    "lang": "en-PH",
    "date": "2026-11-25"
  }
];
const covers: Record<string, { src: string; alt?: string; source?: string; kind?: string; width?: number; height?: number; inlinePhoto?: InlinePhoto }> = media;
export const guides: Guide[] = content.map(guide => {
  const cover = covers[guide.slug];
  return cover ? { ...guide, photo: cover.src, photoAlt: cover.alt, photoSource: cover.source, photoKind: cover.kind, photoWidth: cover.width, photoHeight: cover.height, inlinePhoto: cover.inlinePhoto } : guide;
});
export const guidePath = (slug: string) => `/guides/${slug}/`;
