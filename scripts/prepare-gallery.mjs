import { mkdir } from "node:fs/promises";
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
