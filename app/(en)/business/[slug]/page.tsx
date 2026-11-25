import {serviceSearchDescriptions} from "@/app/data/search-titles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPage } from "@/app/components/Subpage";
import { JsonLd } from "@/app/components/JsonLd";
import { services, servicePath } from "@/app/data/services";
import { brand, organization, origin, pageMetadata } from "@/app/data/site";
import { guides, guidePath } from "@/app/data/guides";
import { findArticle } from "@/app/data/stories";
import "./service.css";
import "../../guides/guides.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => services.map(({ slug }) => ({ slug }));

function getService(slug: string) {
  return services.find((service) => service.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  return pageMetadata({ path: servicePath(service.slug), title: service.title, description: serviceSearchDescriptions[service.slug] ?? service.summary, image: service.image });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  const url = origin + servicePath(service.slug);
  const related = services.find((item) => item.slug === service.related);
  const story = service.stories.length ? findArticle(service.stories[0]) : undefined;
  const comparison = service.comparison;
  const links = [...service.references, ...guides.filter(g => g.service === service.slug).map(g => ({ label: g.title, href: guidePath(g.slug) }))];
  if (story && !links.some((item) => item.href === "/news/" + story.slug + "/")) {
    links.push({ label: story.title, href: "/news/" + story.slug + "/" });
  }
  if (related) links.push({ label: related.name, href: servicePath(related.slug) });

  return <SubPage>
    <JsonLd data={{ "@graph": [
      { "@type": "Service", "@id": url + "#service", name: service.name, description: service.summary,
        url, provider: { "@type": "Organization", "@id": organization["@id"], name: brand, url: origin + "/" },
        areaServed: { "@type": "Country", name: "Philippines" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
        { "@type": "ListItem", position: 2, name: "Business", item: origin + "/business/" },
        { "@type": "ListItem", position: 3, name: service.name, item: url },
      ] },
    ] }} />
    <article className="serviceGuide">
      <nav className="guideCrumbs" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span aria-hidden="true">/</span><Link prefetch={false} href="/business/">Business</Link><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span></nav>
      <header className="guideHero">
        <div>
          <h1>{service.name}</h1>
          <p>{service.summary}</p>
          <a className="guideAction" href={service.action.href}>{service.action.label}<span aria-hidden="true"> ↗</span></a>
        </div>
        <img src={service.image} alt="" fetchPriority="high" />
      </header>
      <div className="guideLayout">
        <div className="guideContent">
          {service.filipino && <p className="guideFilipino" lang="fil">{service.filipino}</p>}
          {comparison && <section>
            <h2>How much do the VF 3 and VF 5 Plus cost?</h2>
            <div className="guideTableWrap"><table className="guideTable"><caption>{comparison.caption}</caption><thead><tr>{comparison.columns.map((value) => <th key={value} scope="col">{value}</th>)}</tr></thead>
              <tbody>{comparison.rows.map(([model, ...values]) => <tr key={model}><th scope="row">{model}</th>{values.map((value) => <td key={value}>{value}</td>)}</tr>)}</tbody>
            </table></div>
            <p className="guideSource">Source · <a href={comparison.source.href}>{comparison.source.label}</a></p>
          </section>}
          <section><h2>{service.checklistTitle}</h2><ul>{service.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>Next steps</h2><ol className="guideSteps">{service.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
          <section><h2>Common questions</h2>{service.questions.map((item) => <div className="guideAnswer" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section>
        </div>
        <aside className="guideAside"><h2>Contacts and further reading</h2>
          <ul>{links.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
          <div><strong>DT Car Philippines</strong><a href="tel:+639060185666">+63 906 018 5666</a><Link prefetch={false} href="/contact/">Contact and language options</Link></div>
        </aside>
      </div>
    </article>
  </SubPage>;
}
