import LegacyProductLink from "@/app/components/LegacyProductLink";
import { adHubPath } from "@/app/data/ad-landings";
import { origin } from "@/app/data/site";
export const metadata = { title:"Products / Services | DT Car Philippines", robots:{index:false,follow:true}, alternates:{canonical:origin+adHubPath}};
export default function LegacyProductDirectory(){return <LegacyProductLink destination={adHubPath}/>;}
