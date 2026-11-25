"use client";

import { useState } from "react";

type Card = {slug:string; title:string; description:string; category:string; lang:string; image:string; read:string};
const languages: Record<string,string> = {"en-PH":"English","fil-PH":"Filipino",vi:"Tiếng Việt","zh-Hans":"中文",ko:"한국어"};
const topicId = (name:string) => name.toLowerCase().replace(/[^a-z]+/g,"-");
function searchable(value:string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d");
}
export function GuideDirectory({cards}:{cards:Card[]}) {
  const [language,setLanguage] = useState("");
  const [query,setQuery] = useState("");
  const search = searchable(query.trim());
  const filtered = cards.filter(card =>
    (!language || card.lang === language) &&
    (!search || searchable([card.title,card.description,card.category].join(" ")).includes(search))
  );
  const topics = Array.from(new Set(filtered.map(card=>card.category))).sort();
  return <>
    <div className="directoryFilters">
      <label>Search guides<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Model, service or question" /></label>
      <label>Language<select value={language} onChange={event=>setLanguage(event.target.value)}>
        <option value="">All languages</option>
        {Object.entries(languages).map(([code,name])=><option key={code} value={code}>{name}</option>)}
      </select></label>
    </div>
    <p role="status">{filtered.length} {filtered.length===1?"guide":"guides"}{filtered.length===0?" · Try a shorter search or another language.":""}</p>
    <nav className="topicLinks" aria-label="Guide topics">{topics.map(topic=><a key={topic} href={"#"+topicId(topic)}>{topic}</a>)}</nav>
    {topics.map(topic=><section key={topic} id={topicId(topic)} className="directoryTopic"><h2>{topic}</h2>
      <div className="knowledgeGrid">{filtered.filter(card=>card.category===topic).map(card=><article key={card.slug} lang={card.lang}>
        <a href={"/guides/"+card.slug+"/"} tabIndex={-1} aria-hidden="true"><img src={card.image} srcSet={card.image.startsWith("/images/editorial/") ? [480, 800].map(width => "/images/gallery/guide-cards/" + card.slug + "-" + width + ".webp " + width + "w").join(", ") : undefined} sizes="(max-width: 600px) 94vw, (max-width: 900px) 46vw, 31vw" alt="" width="1200" height="630" loading="lazy"/></a>
        <div><h3><a href={"/guides/"+card.slug+"/"}>{card.title}</a></h3><p>{card.description}</p><a className="readLink" href={"/guides/"+card.slug+"/"}>{card.read} →</a></div>
      </article>)}</div></section>)}
  </>;
}
