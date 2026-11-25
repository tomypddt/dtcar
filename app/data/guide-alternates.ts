import { origin } from "./site";
import { guides, guidePath } from "./guides";

const topics = [
  ["vinfast-vf3-price-philippines","vinfast-vf3-magkano-filipino"],
  ["green-gsm-driver-application-guide","paano-mag-apply-green-gsm-taxi-driver"],
  ["vinfast-test-drive-metro-manila","lai-thu-vinfast-pasay-tieng-viet"],
  ["selling-a-car-before-leaving-philippines","ban-xe-cu-truoc-khi-ve-viet-nam"],
  ["used-car-viewing-from-another-city","kiem-tra-xe-cu-tu-xa-manila"],
  ["car-trade-in-philippines","manila-trade-in-korean","paano-ikumpara-trade-in-kotse"],
  ["ban-xe-cu-manila","manila-maiche-zhongwen-yugu","manila-used-car-korean-appraisal","paano-magpa-appraise-ng-kotse"],
  ["manila-business-meetings-driver","dat-xe-dua-don-doan-cong-tac-manila"],
  ["vinfast-battery-subscription-comparison","feilvbin-vinfast-dianchi-baojia"],
  ["vinfast-service-appointment-checklist","hen-xuong-vinfast-manila-tieng-viet"]
];

export function guideAlternates(slug: string) {
  const group = topics.find(members => members.includes(slug));
  if (!group) return undefined;
  const languages: Record<string,string> = {};
  for (const guide of guides.filter(item => group.includes(item.slug))) {
    languages[guide.lang] = origin + guidePath(guide.slug);
  }
  return languages;
}
