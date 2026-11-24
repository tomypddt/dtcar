import type { ReactNode } from "react";
import { SiteDocument } from "@/app/components/SiteDocument";
import { siteMetadata } from "@/app/data/site";

export const metadata = siteMetadata;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteDocument language="zh-Hans">{children}</SiteDocument>;
}
