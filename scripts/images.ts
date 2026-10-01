/**
 * Responsive image pipeline for the static export.
 *
 *   bun run images
 *
 * Reads the originals in `assets/photos/`, writes AVIF + WebP renditions to
 * `public/images/` and a manifest (sizes, srcsets, blur placeholder) to
 * `src/lib/images.generated.json`. Commit both outputs: the regular build
 * does not need sharp, which keeps `bun run build` simple on any machine.
 *
 * To add a photo: drop it in `assets/photos/`, add an entry below, run the script.
 */
import sharp from "sharp";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "assets/photos");
const OUT = path.join(ROOT, "public/images");
const MANIFEST = path.join(ROOT, "src/lib/images.generated.json");

interface Variant {
  key: string;
  file: string;
  crop?: { left: number; top: number; width: number; height: number };
  widths: number[];
}

const variants: Variant[] = [
  // Venue fully set up before doors open (top of the Grand Coliseo photo).
  {
    key: "arena",
    file: "grand-coliseo-staff.jpg",
    crop: { left: 0, top: 0, width: 1440, height: 790 },
    widths: [640, 960, 1440],
  },
  // Two AF staff members on site, full frame.
  { key: "staff", file: "grand-coliseo-staff.jpg", widths: [480, 800, 1200] },
  // Same photo, landscape band around the uniforms.
  {
    key: "staffWide",
    file: "grand-coliseo-staff.jpg",
    crop: { left: 0, top: 700, width: 1440, height: 780 },
    widths: [640, 960, 1440],
  },
  { key: "press", file: "adrian-fernandez-rueda-de-prensa.jpg", widths: [480, 800, 1200, 1600] },
  { key: "portrait", file: "adrian-fernandez-retrato.jpg", widths: [160, 480, 960] },
];

interface Entry {
  width: number;
  height: number;
  placeholder: string;
  avif: string;
  webp: string;
  src: string;
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const manifest: Record<string, Entry> = {};

for (const v of variants) {
  const base = () => {
    const img = sharp(path.join(SRC, v.file)).rotate();
    return v.crop ? img.extract(v.crop) : img;
  };
  const meta = await base().toBuffer({ resolveWithObject: true });
  const { width, height } = meta.info;
  const slug = v.key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

  const avif: string[] = [];
  const webp: string[] = [];
  for (const w of v.widths.filter((w) => w <= width)) {
    const resized = () => base().resize({ width: w, withoutEnlargement: true });
    const name = `${slug}-${w}`;
    await resized().avif({ quality: 52, effort: 6 }).toFile(path.join(OUT, `${name}.avif`));
    await resized().webp({ quality: 76, effort: 6 }).toFile(path.join(OUT, `${name}.webp`));
    avif.push(`/images/${name}.avif ${w}w`);
    webp.push(`/images/${name}.webp ${w}w`);
  }

  const tiny = await base().resize({ width: 24 }).webp({ quality: 40 }).toBuffer();
  const mid = v.widths.filter((w) => w <= width);
  manifest[v.key] = {
    width,
    height,
    placeholder: `data:image/webp;base64,${tiny.toString("base64")}`,
    avif: avif.join(", "),
    webp: webp.join(", "),
    src: `/images/${slug}-${mid[Math.min(1, mid.length - 1)]}.webp`,
  };
  console.log(`✓ ${v.key} ${width}×${height} → ${mid.join(", ")}`);
}

await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Manifest → ${path.relative(ROOT, MANIFEST)}`);
