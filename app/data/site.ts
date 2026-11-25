import type { Metadata } from "next";

export const origin = "https://dtcar.ph";
export const brand = "DT Car Philippines";
export const organizationId = origin + "/#organization";
export const defaultImage = "/images/vinfast-signing-primary.jpeg";

export const profileLanguages = {
  en: origin + "/about/",
  vi: origin + "/vi/",
  "zh-Hans": origin + "/zh/",
  "x-default": origin + "/about/",
};

export const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: brand,
  url: origin + "/",
  logo: origin + "/images/dtcar-logo.png",
  email: "management@dtcar.ph",
  telephone: ["+639498768888", "+639060185666"],
  address: { "@type": "PostalAddress", addressLocality: "Pasay", addressRegion: "Metro Manila", addressCountry: "PH" },
  sameAs: ["https://www.facebook.com/profile.php?id=61550266324189", "https://www.facebook.com/dtcarphil", "https://www.tiktok.com/@vinfastdtcar"],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(origin),
  icons: {
    icon: { url: "/dtc-favicon.svg", type: "image/svg+xml" },
    shortcut: "/dtc-favicon.svg",
    apple: "/dtcar-apple-logo.jpeg",
  },
};

type PageInfo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  locale?: string;
  languages?: Record<string, string>;
  published?: string;
};

export function pageMetadata({ path, title, description, image = defaultImage, locale = "en_PH", languages, published }: PageInfo): Metadata {
  const url = origin + path;
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      ...(published ? { type: "article", publishedTime: published } : { type: "website" }),
      siteName: brand, title, description, url, locale,
      images: [{ url: origin + image }],
    },
    twitter: { card: "summary_large_image", title, description, images: [origin + image] },
  };
}
