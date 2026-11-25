import { SubPage } from "@/app/components/Subpage";
import { guides } from "@/app/data/guides";
import { guideLabels } from "@/app/data/guide-labels";
import { pageMetadata } from "@/app/data/site";
import { GuideDirectory } from "./GuideDirectory";
import "./guides.css";

export const metadata = pageMetadata({
  path:"/guides/",
  title:"Car, EV and Driver Guides in the Philippines | DT Car",
  description:"Browse Philippine guides to VinFast, used cars, EV charging, Green GSM, fleet operations and Manila private transport in five languages."
});

export default function GuidesPage() {
  const cards = guides.map(({slug,title,description,category,lang,photo})=>({
    slug,title,description,category,lang,image:photo ?? "/images/guides/"+slug+".svg",read:guideLabels(lang).read
  }));
  return <SubPage><section className="knowledgeHub">
    <header className="knowledgeHead"><p className="eyebrow">DT CAR FIELD GUIDE</p>
      <h1>Car, EV and driver guides in the Philippines</h1>
      <a className="toolLink" href="/tools/ev-cost-calculator/">Try the EV energy cost calculator →</a>
    </header><GuideDirectory cards={cards}/>
  </section></SubPage>;
}
