const campaigns = new Set([
  "dtcar_vinfast",
  "dtcar_vinfast_limo_green",
  "dtcar_vinfast_mpv7",
  "dtcar_vinfast_vf3",
  "dtcar_vinfast_vf5",
  "dtcar_vinfast_vf6",
  "dtcar_vinfast_vf7",
  "dtcar_vinfast_vf8",
  "dtcar_vinfast_vf9",
  "dtcar_sell_your_car",
  "dtcar_used_cars",
  "dtcar_driving",
  "dtcar_licence",
  "dtcar_tours",
]);

export function analyticsPageLocation(location: Pick<Location, "origin" | "pathname" | "search">) {
  const page = new URL(location.pathname, location.origin);
  const tags = new URLSearchParams(location.search);
  const campaign = tags.get("utm_campaign") ?? "";
  const arm = tags.get("utm_content");

  // Only our published campaign labels belong in analytics. Never copy arbitrary URL data.
  if (tags.get("utm_source") === "chatgpt" && tags.get("utm_medium") === "cpc"
      && campaigns.has(campaign) && (arm === "web" || arm === "page")) {
    page.searchParams.set("utm_source", "chatgpt");
    page.searchParams.set("utm_medium", "cpc");
    page.searchParams.set("utm_campaign", campaign);
    page.searchParams.set("utm_content", arm);
  }
  return page.href;
}
