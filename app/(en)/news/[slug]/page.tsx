import { galleryPreview } from "@/app/data/gallery";
import { storySearchTitles, storySearchDescriptions } from "@/app/data/search-titles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { JsonLd } from "@/app/components/JsonLd";
import { articleImages, articles, findArticle } from "@/app/data/stories";
import { services, servicePath } from "@/app/data/services";
import { brand, organization, origin, pageMetadata } from "@/app/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articles.map(({ slug }) => ({ slug }));

function getArticle(slug: string) {
  const article = findArticle(slug) ?? notFound();
  const published = new Date(article.date + " UTC").toISOString().slice(0, 10);
  return { article, published, path: "/news/" + article.slug + "/" };
}

export async function generateMetadata({ params }: Props) {
  const { article, published, path } = getArticle((await params).slug);
  return pageMetadata({ path, title: storySearchTitles[article.slug] ?? article.title, description: storySearchDescriptions[article.slug] ?? article.dek, image: article.hero, published });
}

export default async function ArticlePage({ params }: Props) {
  const { article: a, published, path } = getArticle((await params).slug);
  const service = services.find((item) => item.stories.includes(a.slug));
  const action = a.slug === "dt-tour-philippines-curated-journeys"
    ? {href:"https://m.me/dulichphilippinesdttour",label:"Plan a trip with DT Tour"}
    : service?.action ?? {href:"/contact/",label:"Choose a DT Car contact"};
  const url = origin + path;
  return <SubPage>
    <JsonLd data={{
      "@type": "Article", "@id": url + "#article", mainEntityOfPage: url, url,
      headline: a.title, description: a.dek, image: [origin + a.hero], datePublished: published,
      author: { "@type": "Organization", "@id": organization["@id"], name: brand, url: origin + "/about/" },
      publisher: organization, inLanguage: "en-PH", articleSection: a.category,
    }} />
    <JsonLd data={{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:origin+"/"},{"@type":"ListItem",position:2,name:"News",item:origin+"/news/"},{"@type":"ListItem",position:3,name:a.title,item:url}]}} />
    <article className="magazine">
      <Link prefetch={false} className="storyBack" href="/news/">← All journal editions</Link>
      <header className="magHead"><p className="eyebrow">{a.category}</p><h1>{a.title}</h1><p>{a.dek}</p><small><time dateTime={published}>{a.date}</time> · DT Car Philippines</small></header>
      <figure className="magHero"><img src={a.hero} alt={a.heroAlt ?? a.title}/>{a.heroCaption && <figcaption>{a.heroCaption}</figcaption>}</figure>
      {a.facts && <aside className="factStrip">{a.facts.map((fact, i) => <div key={fact}><strong>{String(i + 1).padStart(2, "0")}</strong><span>{fact}</span></div>)}</aside>}
      <div className="magBody">{a.sections.map((section, i) => <section key={section.heading}><span className="sectionNo">{String(i + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
      {a.source && <p className="storyServiceLink"><a href={a.source.url}>{a.source.label}</a></p>}
      {service && <p className="storyServiceLink"><a href={servicePath(service.slug)}>{service.name} →</a></p>}
      {articleImages(a).length > 0 && <section className="photoEssay"><header><p className="eyebrow">PHOTO ESSAY</p><h2>From the DT Car archive</h2></header><div className="photoMosaic">{articleImages(a).map((src, i) => <figure key={src + i} className={i % 7 === 0 ? "wide" : i % 5 === 0 ? "tall" : ""}><img src={galleryPreview(src)} alt={a.title + " — photograph " + (i + 1)} loading="lazy" decoding="async"/><figcaption>{a.category} · {String(i + 1).padStart(2, "0")}</figcaption></figure>)}</div></section>}
      <section className="storyContact"><h2>Contact DT Car</h2><a href={action.href}>{action.label} →</a></section>
    </article>
  </SubPage>;
}
