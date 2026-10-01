# AF Marketing — website

Bilingual website for **AF Marketing**, an event and marketing agency based in Tijuana, Baja California.
_Tu evento, en buenas manos._

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Bun
- **Output:** static export (`output: 'export'`) to `/out`, uploaded to **afmarketing.mx**
- **Languages:** Spanish at `/` (primary), English at `/en/`, with localized URLs and `hreflang`

---

## Draft content (PENDING)

These items are drafts shown on the site until the real content arrives. They are marked
`PENDING` in `src/content/dictionaries/{es,en}.ts`. To hide any of them temporarily, set its
flag to `true` in `src/content/pending.ts`.

| What | Where |
|---|---|
| Case studies: real client list and metrics | `home.work.cases` |
| Testimonials | `home.testimonials.items` |
| Founding story and Adrián's quote | `aboutPage.story`, `home.about.quote` |

Still to add in `src/content/site.ts`: social profile URLs (empty = hidden).

---

## Run locally

```bash
bun install
cp .env.example .env      # then fill in the values
bun run dev               # http://localhost:3000
```

| Script | What it does |
|---|---|
| `bun run dev` | Development server |
| `bun run build` | Static export to `/out` |
| `bun run start` | Serves `/out` locally to preview the production build |
| `bun run lint` / `bun run typecheck` | ESLint / TypeScript |
| `bun run images` | Re-generates responsive AVIF/WebP images from `assets/photos/` |
| `bun run icons` | Re-generates favicons and app icons from the vector monogram |
| `bun run og` | Re-generates the Open Graph images (`public/og/`) after changing titles |
| `bun run assets` | All three of the above |
| `bun run release` | Builds and saves `release/afmarketing-site.zip` |

Generated assets (`public/images`, `public/og`, `public/icons`, `src/app/*icon*`) are committed,
so a normal build never needs `sharp` or network access beyond Google Fonts.

### Environment variables

All variables are **public** (embedded in the HTML). Never put secrets here.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Defaults to `https://afmarketing.mx`. Used for canonical URLs, `hreflang`, Open Graph and `sitemap.xml`. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | No | JSON form backend (e.g. Formspree). If empty, the contact form opens WhatsApp or the email app with the brief pre-filled. |

---

## Build and upload

```bash
bun run build
```

The complete site is written to `/out`. Upload **everything inside `/out`** to the web root of
`afmarketing.mx`, including the hidden `.htaccess` file (compression, caching, security headers
and the branded 404 for Apache servers).

A ready-to-upload copy of the latest build is kept in `release/afmarketing-site.zip`.
To refresh it after changes: `bun run release`.

### After the first upload

- Add the site to **Google Search Console** and submit `https://afmarketing.mx/sitemap.xml`.
- Create or update the **Google Business Profile** (Tijuana) with the same name, email, phone and website.
- Share a page on WhatsApp to confirm the preview image appears.

---

## Editing content

| What | File |
|---|---|
| All copy, both languages (same structure, type-checked) | `src/content/dictionaries/es.ts`, `en.ts` |
| Email, WhatsApp, socials, location, service area | `src/content/site.ts` |
| Service URLs, numbering, pillars, related services | `src/content/services.ts` |
| Page URLs per language | `src/lib/i18n.ts` |

Copy markup: `*text*` renders in the italic serif accent (the brand's "en buenas manos" voice); `\n` is a line break.

**Adding a photo:** put the original in `assets/photos/`, add an entry in `scripts/images.ts`, run
`bun run images`, then use `<Photo name="..." />`.

---

## Site map

| Spanish | English |
|---|---|
| `/` | `/en/` |
| `/servicios/` | `/en/services/` |
| `/servicios/organizacion-de-eventos/` | `/en/services/event-planning-production/` |
| `/servicios/activaciones-de-marca/` | `/en/services/brand-activations/` |
| `/servicios/logistica-y-operacion/` | `/en/services/logistics-operations/` |
| `/servicios/relaciones-publicas-y-medios/` | `/en/services/pr-media-relations/` |
| `/servicios/marketing-digital/` | `/en/services/digital-marketing/` |
| `/servicios/patrocinios/` | `/en/services/sponsorship-management/` |
| `/servicios/estudio-creativo/` | `/en/services/creative-studio/` |
| `/nosotros/` | `/en/about/` |
| `/contacto/` | `/en/contact/` |
| `/aviso-de-privacidad/` | `/en/privacy/` |

Each language has its own root layout (`src/app/(es)` and `src/app/(en)/en`), so `<html lang>` is correct in the
static HTML. Pages are thin wrappers around shared views in `src/views/`.

---

## Design system

Derived from the brand poster and the AF monogram.

- **Color** (`src/app/globals.css`): ink `#070807` (near-black), volt `#BDF23F` (poster lime), paper `#F3F2EC`,
  greens `#6CC000` / `#3F8A00` / `#2C6100`. Only brand colors exist as utilities.
- **Section themes:** `theme-dark`, `theme-night`, `theme-paper`, `theme-volt` swap semantic tokens
  (`text-fg`, `text-fg-muted`, `border-line`, `bg-surface`, `text-accent`…), so every component adapts to its section.
- **Type:** Archivo at 125% width for headlines (`font-display`), Archivo for text, Instrument Serif italic
  for accents (`display-accent`), IBM Plex Mono for labels (`eyebrow`, `mono-label`). Fluid scale:
  `text-display-xl/lg/md/sm`, `text-title`, `text-lead`, `text-body`, `text-small`, `text-micro`.
- **Components:** `ButtonLink` (primary / secondary / ghost, sm / md / lg), `Section`, `SectionHeader`, `PageHero`,
  `Photo` (responsive AVIF/WebP + blur placeholder), `FaqList` (native `<details>`), `Monogram` / `Logo`,
  `ServiceMotif` (line illustrations per service), chips, cards, form fields.
- **Motion:** scroll reveals (`data-reveal`, IntersectionObserver), CSS-only hero entrance, view transitions
  between pages, all disabled under `prefers-reduced-motion`. Content stays visible without JavaScript.

## Quality checks done

- Lighthouse-style mobile run (4× CPU, slow 4G): CLS 0, LCP = first paint on content pages.
- axe-core: no WCAG 2.2 AA violations on the audited pages.
- Keyboard: skip link, visible focus, focus-trapped mobile menu (Escape closes), accessible forms with inline errors.
- SEO: per-page titles and descriptions, canonical + `hreflang`, Open Graph images per page and language,
  JSON-LD (`ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`), `sitemap.xml`, `robots.txt`, web manifest.
