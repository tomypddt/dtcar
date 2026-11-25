import { mkdir, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { articleImages, articles, travel } from "../app/data/stories.ts";

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
const cardDirectory = join(destination, "guide-cards");
await mkdir(cardDirectory, { recursive: true });
for (const [slug, cover] of Object.entries(guideMedia)) {
  const source = join("public", cover.src.slice(1));
  for (const width of [480, 800]) {
    await sharp(source)
      .resize({ width })
      .webp({ quality: 78 })
      .toFile(join(cardDirectory, slug + "-" + width + ".webp"));
  }
}
