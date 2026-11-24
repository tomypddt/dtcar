import type { ReactNode } from "react";
import "@/app/globals.css";

export function SiteDocument({ language, children }: { language: string; children: ReactNode }) {
  return <html lang={language}><body>{children}</body></html>;
}
