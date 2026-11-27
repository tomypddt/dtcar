import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const width = 1200;
const height = 800;

const themes = {
  "used-cars-manila": ["#17313a", "#6be1ce", "M8 43h48l-4-11-9-5H21l-8 5-5 11Zm4 0v10m40-10v10M21 47h22M19 37h26"],
  "sell-my-car-manila": ["#31313c", "#f5b58b", "M11 30 28 13h24v24L35 54 11 30Zm29-7h3m-24 9 15 15"],
  "vinfast-test-drive": ["#1c2b4a", "#9dc2ff", "M36 8 16 35h15l-4 21 21-28H34l2-20Z"],
  travel: ["#193c40", "#a7e1c1", "M10 48c10-16 6-31 19-21s7 24 25-3M15 20h.1M48 46h.1M24 18l-9 2 1 9m30 11 2 6 8-2"],
  "driving-lessons": ["#362d45", "#e8b7f9", "M53 32a21 21 0 1 1-42 0 21 21 0 0 1 42 0ZM11 32h42M32 32v21m-7-21 7 8 7-8"],
  licence: ["#343a4b", "#c0cef7", "M11 19h42v32H11Zm9 22h6m7 0h12m-12-8h12m-24 0h5m-5-7h5"],
  "vinfast-workshop-service": ["#263a38", "#b8e5a2", "m17 50 21-21 1-12 8-5 7 8-3 10-11 4-20 21-8-2-1-5 3-5 3 7Z"],
  "vgreen-charging-site-proposal": ["#213d34", "#abe193", "M13 18h38v34H13Zm10 0v34m18-34v34m-13-26h8l-4 6h5l-8 12 2-8h-5l2-10Z"],
  "fleet-installation": ["#303043", "#f3c28e", "M11 19h42v31H11Zm0 10h42M19 36h5m8 0h5m8 0h2m-28 7h5m8 0h5m8 0h2"],
  brand: ["#382a31", "#ffc1cd", "M12 17h40v34H12Zm0 8h40m-31 9h22m-22 8h14"],
};

function escape(text) {
  return text.replace(/[<>&"']/g, character => (
    { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[character]
  ));
}

function textLayer(text, color, size, maxWidth, maxHeight, bold = false) {
  return sharp({
    text: {
      text: `<span foreground="${color}">${escape(text)}</span>`,
      font: `DejaVu Sans ${bold ? "Bold " : ""}${size}`,
      width: maxWidth,
      height: maxHeight,
      rgba: true,
    },
  }).png().toBuffer();
}

async function artwork(guide, logo) {
  const [background, accent, pictogram] = themes[guide.service] ?? themes.brand;
  const highlight = guide.checklist?.length
    ? guide.checklist.slice(0, 2).join(" • ")
    : guide.summary;
  const label = { vi: "ĐIỂM CẦN KIỂM TRA", "fil-PH": "MGA DAPAT SURIIN", "zh-Hans": "核对要点", ko: "확인할 사항" }[guide.lang] ?? "WHAT TO CHECK";
  const isComparison = /\b(compare|versus|two|matching|difference)\b|so sánh|đối chiếu|\bhai\b/i.test(guide.title);
  const panel = isComparison
    ? '<path d="M38 479H1152L1105 740H38z" fill="#fff"/>'
    : '<rect x="54" y="479" width="809" height="261" rx="14" fill="#fff"/>';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="1200" height="800" fill="${background}"/>
    <path d="M949 0h251v800H880l55-277z" fill="${accent}" opacity=".11"/>
    <circle cx="1020" cy="365" r="93" fill="${background}" stroke="${accent}" stroke-width="2"/>
    <path d="${pictogram}" transform="translate(956 301) scale(2)" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="54" y="47" width="188" height="69" rx="10" fill="#fff"/>
    <rect x="54" y="181" width="54" height="6" rx="3" fill="${accent}"/>
    ${panel}
  </svg>`;
  const [title, caption, details] = await Promise.all([
    textLayer(guide.title, "#fff", 54, 822, 190, true),
    textLayer(label, background, 19, 620, 25, true),
    textLayer(highlight, background, 29, isComparison ? 970 : 744, 147),
  ]);
  return sharp(Buffer.from(svg)).composite([
    { input: logo, left: 72, top: 59 },
    { input: title, left: 54, top: 214 },
    { input: caption, left: 82, top: 514 },
    { input: details, left: 82, top: 559 },
  ]);
}

export async function createGuideGraphics(guides, media, directory) {
  await mkdir(directory, { recursive: true });
  const logo = await sharp(await readFile("public/images/dtcar-logo.png"))
    .resize({ width: 152 }).png().toBuffer();

  for (const guide of guides) {
    if (media[guide.slug]) continue;
    const cover = join(directory, guide.slug + ".webp");
    await (await artwork(guide, logo))
      .webp({ quality: 86 })
      .toFile(cover);
  }
}

export async function createGuideDetails(guides, specifications, directory) {
  await mkdir(directory, { recursive: true });
  const logo = await sharp(await readFile("public/images/dtcar-logo.png"))
    .resize({ width: 152 }).png().toBuffer();
  for (const guide of guides) {
    const spec = specifications[guide.slug];
    if (!spec) continue;
    const [background, accent, pictogram] = themes[guide.service] ?? themes.brand;
    const labels = guide.lang === "vi"
      ? ["TÌNH HUỐNG", "VIỆC CẦN CHUẨN BỊ"]
      : ["WORKED EXAMPLE", "WHAT TO PREPARE"];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="1200" height="800" fill="#f5f6f4"/>
      <path d="M0 0H1200V204H0Z" fill="${background}"/>
      <path d="M1006 0H1200V204H960Z" fill="${accent}" opacity=".21"/>
      <rect x="67" y="45" width="188" height="69" rx="10" fill="#fff"/>
      <path d="${pictogram}" transform="translate(1040 40) scale(1.5)" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="67" y="252" width="1066" height="208" rx="18" fill="#fff"/>
      <rect x="67" y="490" width="1066" height="240" rx="18" fill="${accent}"/>
    </svg>`;
    const layers = await Promise.all([
      textLayer(spec.title, "#fff", 49, 900, 64, true),
      textLayer(labels[0], background, 23, 890, 41, true),
      textLayer(spec.scenario, background, 34, 960, 113),
      textLayer(labels[1], background, 23, 890, 41, true),
      textLayer(spec.action, background, 34, 960, 146),
    ]);
    const [title, contextLabel, scenario, actionLabel, action] = layers;
    await sharp(Buffer.from(svg)).composite([
      {input:logo,left:85,top:57}, {input:title,left:67,top:126},
      {input:contextLabel,left:105,top:282}, {input:scenario,left:105,top:329},
      {input:actionLabel,left:105,top:520}, {input:action,left:105,top:566},
    ]).webp({quality:84}).toFile(join(directory, guide.slug+".webp"));
  }
}
