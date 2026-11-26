import { SubPage } from "@/app/components/Subpage";
import { guides } from "@/app/data/guides";
import { guideLabels } from "@/app/data/guide-labels";
import { pageMetadata } from "@/app/data/site";
import { GuideDirectory } from "./GuideDirectory";
import "./guides.css";

export const metadata = pageMetadata({
  path:"/guides/",
  title:"Car, EV and Driver Guides in the Philippines | DT Car",
  description:"Find a used car, request an appraisal or a VinFast quote, book Philippine travel, or explore Vietnamese driving lessons and licence assistance."
});

export default function GuidesPage() {
  const cards = guides.map(({slug,title,description,category,service,lang,photo,photoWidth,photoCredit})=>({
    slug,title,description,category,service,lang,photoWidth,originalCover:!photoCredit,image:photo ?? "/images/guides/"+slug+".svg",read:guideLabels(lang).read
  }));
  return <SubPage><section className="knowledgeHub">
    <header className="knowledgeHead"><p className="eyebrow">DT CAR FIELD GUIDE</p>
      <h1>Car, EV and driver guides in the Philippines</h1>
      <a className="toolLink" href="/tools/ev-cost-calculator/">Try the EV energy cost calculator →</a>
    </header><GuideDirectory cards={cards}/>
  </section></SubPage>;
}
