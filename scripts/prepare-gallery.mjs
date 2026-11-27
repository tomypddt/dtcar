import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { articleImages, articles, travel } from "../app/data/stories.ts";
import { createGuideGraphics, createGuideDetails } from "./guide-graphics.mjs";

const directory = "public/images";
const destination = join(directory, "gallery");
await mkdir(destination, { recursive: true });
const sources = new Set([...travel, ...articles.map(article => article.hero), ...articles.flatMap(articleImages)]);
for (const src of sources) {
  const match = /^\/images\/([^/]+\.jpe?g)$/i.exec(src);
  if (!match) continue;
  const name = match[1];
  await sharp(join(directory, name))
    .rotate()
    .resize({ width: 1100, height: 1400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join(destination, name + ".webp"));
}

const artDirectory = "assets/article-art";
for (const name of await readdir(artDirectory)) {
  if (!name.endsWith(".svg") && !name.endsWith(".png")) continue;
  const slug = name.slice(0, -4);
  await sharp(join(artDirectory, name))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(join(directory, "editorial", slug + "-brief.webp"));
}

const guideMedia = JSON.parse(await readFile("app/data/guide-media.json", "utf8"));
const guideFiles = ["enquiry-guides", "buyer-questions", "customer-guides", "sales-guides", "practical-guides", "field-guides", "guide-expansion-v", "guide-expansion-b", "guide-expansion-s", "guide-expansion-h", "guide-expansion-l", "guide-expansion-t"];
const guideArticles = (await Promise.all(guideFiles.map(async name =>
  JSON.parse(await readFile(`app/data/${name}.json`, "utf8"))
))).flat();
const coverDirectory = join(destination, "guide-covers");
await createGuideGraphics(guideArticles, guideMedia, coverDirectory);
const detailArt = JSON.parse(await readFile("app/data/guide-expansion-art.json", "utf8"));
await createGuideDetails(guideArticles, detailArt, join(destination, "guide-details"));

const cardDirectory = join(destination, "guide-cards");
await mkdir(cardDirectory, { recursive: true });
const guideSlugs = new Set([...Object.keys(guideMedia), ...guideArticles.map(guide => guide.slug)]);
for (const slug of guideSlugs) {
  const cover = guideMedia[slug];
  const source = cover ? join("public", cover.src.slice(1)) : join(coverDirectory, slug + ".webp");
  for (const width of [480, 800].filter(width => width < (cover?.width ?? 1200))) {
    await sharp(source)
      .resize({ width })
      .webp({ quality: 78 })
      .toFile(join(cardDirectory, slug + "-" + width + ".webp"));
  }
}

const adsDirectory = join(directory, "ads");
const previewDirectory = join(destination, "ads");
for (const name of await readdir(adsDirectory, { recursive: true })) {
  if (!name.endsWith(".webp")) continue;
  const original = await readFile(join(adsDirectory, name));
  const preview = await sharp(original).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 }).toBuffer();
  const target = join(previewDirectory, name);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, preview.length < original.length ? preview : original);
}
await sharp(join(directory, "dtcar-logo.png")).resize({ width: 280 }).webp({ quality: 86 }).toFile(join(destination, "dtcar-logo.webp"));
