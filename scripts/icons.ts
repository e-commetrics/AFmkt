/**
 * Favicons and app icons, drawn from the vector monogram.
 *
 *   bun run icons
 *
 * Writes src/app/{icon.svg,apple-icon.png,favicon.ico} (picked up by Next's
 * metadata conventions) and public/icons/* for the web manifest.
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MONOGRAM_VIEWBOX, monogramParts } from "../src/components/brand/monogram-geometry";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INK = "#070807";
const VOLT = "#BDF23F";

/** Volt monogram centred on an ink tile. `inset` is the padding ratio. */
function tile({ size, inset, radius }: { size: number; inset: number; radius: number }): string {
  const { width, height } = MONOGRAM_VIEWBOX;
  const box = size * (1 - inset * 2);
  const scale = box / Math.max(width, height);
  const x = (size - width * scale) / 2;
  const y = (size - height * scale) / 2;
  const cut = Math.max(10, 2.2 / scale);
  const p = monogramParts;
  const stroke = `stroke="${INK}" stroke-width="${cut.toFixed(2)}" paint-order="stroke" stroke-linejoin="miter"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
<rect width="${size}" height="${size}" rx="${radius}" fill="${INK}"/>
<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${scale.toFixed(4)})" fill="${VOLT}">
<polygon points="${p.f}"/><polygon points="${p.fall}" ${stroke}/><polygon points="${p.rise}" ${stroke}/>
</g></svg>`;
}

const png = (svg: string) => sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

/** ICO container holding PNG frames (supported by every current browser). */
function ico(frames: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  const dir = Buffer.alloc(16 * frames.length);
  let offset = 6 + dir.length;
  frames.forEach(({ size, data }, i) => {
    const o = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, o);
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...frames.map((f) => f.data)]);
}

const APP = path.join(ROOT, "src/app");
const PUBLIC_ICONS = path.join(ROOT, "public/icons");
await mkdir(PUBLIC_ICONS, { recursive: true });

await writeFile(path.join(APP, "icon.svg"), tile({ size: 64, inset: 0.17, radius: 14 }));
await writeFile(path.join(APP, "apple-icon.png"), await png(tile({ size: 180, inset: 0.2, radius: 0 })));
await writeFile(
  path.join(APP, "favicon.ico"),
  ico([
    { size: 16, data: await png(tile({ size: 16, inset: 0.08, radius: 3 })) },
    { size: 32, data: await png(tile({ size: 32, inset: 0.12, radius: 7 })) },
    { size: 48, data: await png(tile({ size: 48, inset: 0.14, radius: 10 })) },
  ]),
);
await writeFile(path.join(PUBLIC_ICONS, "icon-192.png"), await png(tile({ size: 192, inset: 0.18, radius: 40 })));
await writeFile(path.join(PUBLIC_ICONS, "icon-512.png"), await png(tile({ size: 512, inset: 0.18, radius: 108 })));
// Maskable: full-bleed background, mark inside the 80% safe zone.
await writeFile(path.join(PUBLIC_ICONS, "icon-maskable-512.png"), await png(tile({ size: 512, inset: 0.26, radius: 0 })));

console.log("✓ icons written");
