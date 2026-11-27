import Home from "@/app/components/Home";
import { JsonLd } from "@/app/components/JsonLd";
import { articles } from "@/app/data/stories";
import { brand, organization, origin, pageMetadata } from "@/app/data/site";

export const metadata = pageMetadata({
  path: "/",
  title: "DT Car Philippines | VinFast, Used Cars & Fleet Services",
  description: "Explore VinFast models, buy or sell a used car, book a private Philippine tour, or ask DT Car in Metro Manila about driving lessons and licence assistance.",
});

export default function HomePage() {
  const stories = [...articles]
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 4)
    .map((article) => ({ date: article.category, title: article.title, image: article.hero, href: "/news/" + article.slug + "/" }));

  return <>
    <JsonLd data={{ "@graph": [
      organization,
      { "@type": "WebSite", "@id": origin + "/#website", name: brand, url: origin + "/", publisher: { "@id": organization["@id"] } },
    ] }} />
    <Home stories={stories} />
  </>;
}
