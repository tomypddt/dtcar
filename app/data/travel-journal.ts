import content from "./travel-journal-content.json";
import guideMedia from "./guide-media.json";

export const journalPath = (slug:string) => "/travel/" + slug + "/";
export const dtTourPage = "https://www.facebook.com/dulichphilippinesdttour/";
export const journalGroups = ["Chọn chuyến đi","Cebu","Bohol","Palawan","Boracay","Manila và Luzon"] as const;
type Group = typeof journalGroups[number];
export type JournalEntry = {
  slug:string; group:Group; title:string; deck:string;
  sections:readonly [string,string][];
  origin?:string; image?:string; tour?:string;
};
export const mediaFor = (article:JournalEntry) => article.image
  ? (guideMedia as Record<string,{src:string;alt:string;source?:string}>)[article.image]
  : undefined;

export const journal:JournalEntry[] = content.map(entry=>{
  const group=journalGroups.find(label=>label===entry.group);
  if(!group)throw new Error("Invalid Travel Journal category: "+entry.slug);
  const sections=entry.sections.map(([heading, body]):[string,string]=>{
    if(!heading||!body)throw new Error("Incomplete Travel Journal section: "+entry.slug);
    return [heading,body];
  });
  return {...entry,group,sections};
});
