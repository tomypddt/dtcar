import LegacyProductLink from "@/app/components/LegacyProductLink";
import { adLandings, adPath } from "@/app/data/ad-landings";
import { origin } from "@/app/data/site";
type Props = {params:Promise<{slug:string}>};
export const dynamicParams=false;
export const generateStaticParams=()=>adLandings.map(({slug})=>({slug}));
export async function generateMetadata({params}:Props){return {title:"Products / Services | DT Car Philippines",robots:{index:false,follow:true},alternates:{canonical:origin+adPath((await params).slug)}};}
export default async function LegacyProduct({params}:Props){return <LegacyProductLink destination={adPath((await params).slug)}/>;}
