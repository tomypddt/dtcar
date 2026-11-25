import type { ReactNode } from "react";
import { SiteDocument } from "@/app/components/SiteDocument";
import { guides } from "@/app/data/guides";
import { siteMetadata } from "@/app/data/site";

export const metadata = siteMetadata;

export default async function GuideLayout({children,params}:{children:ReactNode;params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const guide = guides.find(item => item.slug === slug);
  return <SiteDocument language={guide?.lang ?? "en-PH"}>{children}</SiteDocument>;
}
