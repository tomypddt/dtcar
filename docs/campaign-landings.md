# DT Car customer enquiry landings

The directory is at `/business/ads/`. Point each website-arm ad directly at its service page rather than the directory. Website pages and new WebP files are separate from News. The launch excludes GSM Rental and driver recruitment.

| Enquiry | Website path | Campaign | Website inbox |
| --- | --- | --- | --- |
| VinFast sales | `/business/ads/vinfast/` | `dtcar_vinfast` | DT Car - Quality Car Manila |
| Used-car appraisal | `/business/ads/sell-your-car/` | `dtcar_sell_your_car` | DT Car - We Buy Cars |
| Used-car purchase | `/business/ads/used-cars/` | `dtcar_used_cars` | DT Car - Quality Car Manila |
| Driving lessons | `/business/ads/hoc-lai-xe/` | `dtcar_driving` | DT Car Xe chất Philippines |
| Driver licence guidance | `/business/ads/tu-van-bang-lai/` | `dtcar_licence` | DT Car Xe chất Philippines |
| Private Philippines tours | `/business/ads/tour-philippines/` | `dtcar_tours` | Du lịch Philippines - DT Tour |

Add `?utm_source=chatgpt&utm_medium=cpc&utm_campaign=<campaign>&utm_content=web` to each website-arm ad URL. Each primary CTA links to the corresponding Messenger inbox with a fixed service reference ending in `_web`. DT Car's existing consent-first analytics records a `dtcar_contact_click` with the enquiry service and approved UTM data for customers who opt in. A click does not prove that a message was sent, a lead qualified, or a sale was made. Compare spend and confirmed outcomes in the ad reports and inbox; page-arm posts and campaign activation are separate work.

Photos are curated from the existing DT Car website library. Vehicle photos are examples rather than current inventory promises. Driving and licence imagery is illustrative. New files are stored in `public/images/ads/`: do not overwrite shared News images when updating ad photography.

## VinFast model landing pages

| Model | Website path | Campaign |
| --- | --- | --- |
| Limo Green | `/business/ads/vinfast/limo-green/` | `dtcar_vinfast_limo_green` |
| VF MPV 7 | `/business/ads/vinfast/mpv-7/` | `dtcar_vinfast_mpv7` |
| VF 3 | `/business/ads/vinfast/vf3/` | `dtcar_vinfast_vf3` |

Use the same `utm_source=chatgpt&utm_medium=cpc&...&utm_content=web` format. Model-specific Messenger referrals and enquiries are separate. Before launching any paid creative, check manufacturer suggested prices, written dealer offers, stock, and the qualification rules for any promotion. Manage model-specific gallery images only in `public/images/ads/vinfast/`. Media is attributed on each page; MPV 7 launch images are from VinFast's Philippines press release, Limo Green renders and the MPV 7 seat image from VinFast product materials, and VF 3 mixes DT Car photos and manufacturer product imagery.
