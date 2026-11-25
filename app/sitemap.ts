import type { MetadataRoute } from "next";
import { services, servicePath } from "./data/services";
import { origin } from "./data/site";
import { guides, guidePath } from "./data/guides";
import { articles } from "./data/stories";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/about/", "/business/", "/projects/", "/news/", "/travel/", "/contact/", "/sell-your-car/", "/vi/", "/vi/hoc-lai-xe-philippines/", "/vi/tu-van-bang-lai-philippines/", "/zh/", "/guides/", "/editorial-policy/", "/privacy/", "/tools/ev-cost-calculator/",
    ...guides.map((guide) => guidePath(guide.slug)),
    ...services.map((service) => servicePath(service.slug)),
    ...articles.map((article) => "/news/" + article.slug + "/"),
  ];
  return paths.map((path) => ({ url: origin + path, ...(guides.some(g => guidePath(g.slug) === path) ? {lastModified: "2026-11-25"} : {}) }));
}
