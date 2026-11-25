export function galleryPreview(src: string) {
  const match = /^\/images\/([^/]+\.jpe?g)$/i.exec(src);
  return match ? "/images/gallery/" + match[1] + ".webp" : src;
}
