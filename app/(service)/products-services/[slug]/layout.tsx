import type { ReactNode } from "react";
import { SiteDocument } from "@/app/components/SiteDocument";
import { siteMetadata } from "@/app/data/site";

export const metadata = siteMetadata;

import { adLandings } from "@/app/data/ad-landings";

export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{slug:string}> }) {
  const {slug} = await params;
  const language = adLandings.find(page => page.slug === slug)?.lang ?? "en";
  return <SiteDocument language={language}>{children}</SiteDocument>;
}
