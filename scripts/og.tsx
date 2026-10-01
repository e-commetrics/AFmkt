/**
 * Open Graph images (1200×630) for every page in both languages.
 *
 *   bun run og
 *
 * Rendered with next/og (Satori) and the brand fonts in assets/fonts,
 * written to public/og/{locale}/{key}.jpg. Re-run after changing titles.
 */
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MONOGRAM_VIEWBOX, monogramParts } from "../src/components/brand/monogram-geometry";
import { getDictionary } from "../src/content/dictionaries";
import { serviceIds, services, type PhotoKey } from "../src/content/services";
import type { Locale } from "../src/lib/i18n";
import type { OgKey } from "../src/lib/seo";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;
const INK = "#070807";
const VOLT = "#BDF23F";

const font = (file: string) => readFile(path.join(ROOT, "assets/fonts", file));
const fonts = [
  { name: "Display", data: await font("Archivo-Expanded-ExtraBold.ttf"), weight: 800 as const, style: "normal" as const },
  { name: "Wide", data: await font("Archivo-Expanded-Medium.ttf"), weight: 500 as const, style: "normal" as const },
  { name: "Text", data: await font("Archivo-Medium.ttf"), weight: 500 as const, style: "normal" as const },
  { name: "Serif", data: await font("InstrumentSerif-Italic.ttf"), weight: 400 as const, style: "italic" as const },
  { name: "Mono", data: await font("IBMPlexMono-Medium.ttf"), weight: 500 as const, style: "normal" as const },
];

const photoFiles: Record<PhotoKey, { file: string; crop?: sharp.Region; position?: string }> = {
  arena: { file: "grand-coliseo-staff.jpg", crop: { left: 0, top: 0, width: 1440, height: 790 } },
  staff: { file: "grand-coliseo-staff.jpg", crop: { left: 160, top: 760, width: 1120, height: 919 } },
  staffWide: { file: "grand-coliseo-staff.jpg", crop: { left: 0, top: 700, width: 1440, height: 780 } },
  press: { file: "adrian-fernandez-rueda-de-prensa.jpg", crop: { left: 300, top: 120, width: 1200, height: 1500 } },
  portrait: { file: "adrian-fernandez-retrato.jpg" },
};

/** Monochrome, darkened photo for the right-hand panel, as a data URI. */
async function panel(key: PhotoKey) {
  const p = photoFiles[key];
  let img = sharp(path.join(ROOT, "assets/photos", p.file));
  if (p.crop) img = img.extract(p.crop);
  const buf = await img
    .resize(480, H, { fit: "cover", position: "centre" })
    .grayscale()
    .linear(0.82, -6)
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function Monogram({ size, color = VOLT, cut = INK }: { size: number; color?: string; cut?: string }) {
  const { width, height } = MONOGRAM_VIEWBOX;
  const stroke = { stroke: cut, strokeWidth: 8, paintOrder: "stroke" } as const;
  return (
    <svg width={size} height={(size * height) / width} viewBox={`-4 -4 ${width + 8} ${height + 8}`} fill={color}>
      <polygon points={monogramParts.f} />
      <polygon points={monogramParts.fall} {...stroke} />
      <polygon points={monogramParts.rise} {...stroke} />
    </svg>
  );
}

/** "*accent*" markup → plain and italic-serif segments. */
function Title({ text, size }: { text: string; size: number }) {
  const parts = text.split("*").filter(Boolean);
  const accentFirst = text.startsWith("*");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", columnGap: size * 0.28, lineHeight: 1 }}>
      {parts.flatMap((part, i) => {
        const accent = accentFirst ? i % 2 === 0 : i % 2 === 1;
        return part
          .trim()
          .split(/\s+/)
          .map((word, j) => (
            <span
              key={`${i}-${j}`}
              style={
                accent
                  ? { fontFamily: "Serif", fontStyle: "italic", fontSize: size * 1.12, color: VOLT, letterSpacing: "-0.01em" }
                  : { fontFamily: "Display", fontSize: size, color: "#fff", letterSpacing: "-0.04em" }
              }
            >
              {word}
            </span>
          ));
      })}
    </div>
  );
}

interface Card {
  eyebrow: string;
  title: string;
  footer: string;
  photo?: PhotoKey;
  size?: number;
}

async function render(card: Card) {
  const photo = card.photo ? await panel(card.photo) : null;
  const res = new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", background: INK, position: "relative" }}>
        {/* Right panel: photo or oversized monogram */}
        <div style={{ position: "absolute", right: 0, top: 0, width: 480, height: H, display: "flex", overflow: "hidden", background: "#0c0d0b" }}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>, not a page
            <img src={photo} width={480} height={H} style={{ objectFit: "cover" }} alt="" />
          ) : (
            <div style={{ display: "flex", position: "absolute", right: -90, top: 70 }}>
              <Monogram size={560} color="#171915" cut="#0c0d0b" />
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              backgroundImage: `linear-gradient(90deg, ${INK} 0%, rgba(7,8,7,0.55) 30%, rgba(7,8,7,0) 70%), radial-gradient(circle at 80% 15%, rgba(189,242,63,0.28), rgba(189,242,63,0) 55%)`,
            }}
          />
        </div>

        {/* Volt slash, from the poster's diagonal accents */}
        <div
          style={{
            position: "absolute",
            left: 700,
            top: -40,
            width: 26,
            height: 720,
            background: VOLT,
            transform: "rotate(18deg)",
            opacity: 0.9,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 64px", width: 820, height: H }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Monogram size={64} />
            <span style={{ fontFamily: "Wide", fontSize: 20, letterSpacing: "0.32em", color: "#fff" }}>MARKETING</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <span style={{ fontFamily: "Mono", fontSize: 18, letterSpacing: "0.16em", color: VOLT, textTransform: "uppercase" }}>
              {card.eyebrow}
            </span>
            <Title text={card.title} size={card.size ?? 70} />
          </div>

          <span style={{ fontFamily: "Text", fontSize: 21, lineHeight: 1.35, color: "#a9aea1", maxWidth: 540 }}>{card.footer}</span>
        </div>
      </div>
    ),
    { width: W, height: H, fonts },
  );
  const png = Buffer.from(await res.arrayBuffer());
  return sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
}

const plain = (s: string) => s.replaceAll("*", "");

for (const locale of ["es", "en"] as Locale[]) {
  const t = getDictionary(locale);
  const footer = `${t.home.hero.eyebrow} · ${t.footer.location}`;
  const cards: Record<OgKey, Card> = {
    home: {
      eyebrow: `${t.home.hero.location} · ${t.home.hero.coordinates}`,
      title: `${t.home.hero.titleLine1} *${t.home.hero.titleLine2}*`,
      footer: plain(t.home.services.title),
      photo: "arena",
      size: 84,
    },
    services: { eyebrow: t.servicesPage.eyebrow, title: t.servicesPage.title, footer, photo: "arena" },
    about: { eyebrow: t.aboutPage.hero.eyebrow, title: t.aboutPage.hero.title, footer, photo: "portrait" },
    contact: { eyebrow: t.contactPage.eyebrow, title: t.contactPage.title, footer: t.home.finalCta.reassurance.join(" · "), photo: "staff" },
    ...Object.fromEntries(
      serviceIds.map((id) => [
        `service-${id}`,
        {
          eyebrow: `${services[id].number} / 07 · ${t.pillars[services[id].pillar].name}`,
          title: t.services[id].name,
          footer: t.services[id].short,
          photo: services[id].photo,
          size: t.services[id].name.length > 26 ? 58 : 66,
        } satisfies Card,
      ]),
    ),
  } as Record<OgKey, Card>;

  const dir = path.join(ROOT, "public/og", locale);
  await mkdir(dir, { recursive: true });
  for (const [key, card] of Object.entries(cards)) {
    await writeFile(path.join(dir, `${key}.jpg`), await render(card));
    console.log(`✓ og/${locale}/${key}.jpg`);
  }
}
