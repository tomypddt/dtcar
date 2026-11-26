import type { MetadataRoute } from "next";
import { services, servicePath } from "./data/services";
import { origin } from "./data/site";
import { guides, guidePath } from "./data/guides";
import { adHubPath, adLandings, adPath } from "./data/ad-landings";
import { compareLimoMpvPath, vinfastAdModels, vinfastModelPath } from "./data/vinfast-ad-models";
import { tours, tourPath } from "./data/tour-catalogue";
import { journal, journalPath } from "./data/travel-journal";
import { articles } from "./data/stories";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/about/", "/business/", "/projects/", "/news/", "/travel/", "/contact/", "/sell-your-car/", "/vi/", "/vi/hoc-lai-xe-philippines/", "/vi/tu-van-bang-lai-philippines/", "/zh/", "/guides/", "/editorial-policy/", "/privacy/", "/tools/ev-cost-calculator/",
    ...guides.map((guide) => guidePath(guide.slug)),
    adHubPath, ...adLandings.map((page) => adPath(page.slug)),
    compareLimoMpvPath, ...vinfastAdModels.map((model) => vinfastModelPath(model.slug)),
    ...tours.map(t=>tourPath(t.slug)), ...journal.map(p=>journalPath(p.slug)),
    ...services.map((service) => servicePath(service.slug)),
    ...articles.map((article) => "/news/" + article.slug + "/"),
  ];
  const guideDates = new Map(guides.map(guide => [guidePath(guide.slug), guide.updated ?? guide.date]));
  return paths.map(path => ({ url: origin + path, lastModified: guideDates.get(path) }));
}
