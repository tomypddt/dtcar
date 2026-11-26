import LegacyProductLink from "@/app/components/LegacyProductLink";
import { vinfastAdModels, vinfastModelPath } from "@/app/data/vinfast-ad-models";
import { origin } from "@/app/data/site";
type Props = {params:Promise<{model:string}>};
export const dynamicParams=false;
export const generateStaticParams=()=>vinfastAdModels.map(({slug})=>({model:slug}));
export async function generateMetadata({params}:Props){return {title:"Products / Services | DT Car Philippines",robots:{index:false,follow:true},alternates:{canonical:origin+vinfastModelPath((await params).model)}};}
export default async function LegacyVinfastModel({params}:Props){return <LegacyProductLink destination={vinfastModelPath((await params).model)}/>;}
