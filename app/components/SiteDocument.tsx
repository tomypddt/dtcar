import Analytics from "./Analytics";
import ContactEvents from "./ContactEvents";
import type { ReactNode } from "react";
import "@/app/globals.css";

export function SiteDocument({ language, children }: { language: string; children: ReactNode }) {
  return <html lang={language}><body>{children}<Analytics/><ContactEvents/></body></html>;
}
