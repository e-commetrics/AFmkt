# AF Marketing — website

Bilingual website for **AF Marketing**, an event and marketing agency based in Tijuana, Baja California.
_Tu evento, en buenas manos._

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Bun
- **Output:** static export (`output: 'export'`) → deployed to **cPanel** from the `/out` folder
- **Languages:** Spanish at `/` (primary), English at `/en/`, with localized URLs and `hreflang`

---

## Before launch: content to verify

The design is complete, but some proof content is **realistic placeholder copy** written so the
layout could be designed and reviewed. Replace or confirm every item below before going live.
Search the code for `PLACEHOLDER` to find them.

| What | Where | Status |
|---|---|---|
| Stats: +150 events, +10 years, +60 media | `home.trust.stats` in `src/content/dictionaries/{es,en}.ts` | **Placeholder** |
| Case study metrics (attendees, staff, media, mentions) | `home.work.cases[].metrics` | **Placeholder** |
| Testimonials (Mariana T., Luis R., Daniela M.) | `home.testimonials.items` | **Placeholder — use real, approved quotes** |
| Founder quote and founding story | `home.about.quote`, `aboutPage.story` | **Confirm with Adrián** |
| Permission to name Grand Coliseo and Barón Balché as projects | `home.work.cases` | **Confirm with both clients** |
| Response time (24 business hours), proposal in 48–72 h, CFDI invoices, bilingual service, coverage cities, budget ranges in the form | dictionaries | **Confirm** |
| WhatsApp number and social profiles | `src/content/site.ts` (empty = hidden) | **Add** |
| Business email (`afmarketing123@gmail.com`, from the poster) | `src/content/site.ts` | A domain address builds more trust |
| Privacy notice (Aviso de privacidad) | `privacyPage` in the dictionaries | **Legal review** |
| Base city: Tijuana (inferred from the photos) | `src/content/site.ts` | **Confirm** |

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

Generated assets (`public/images`, `public/og`, `public/icons`, `src/app/*icon*`) are committed,
so a normal build never needs `sharp` or network access beyond Google Fonts.

### Environment variables

All variables are **public** (embedded in the HTML). Never put secrets here.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes, for production | Domain without trailing slash, e.g. `https://www.afmarketing.mx`. Used for canonical URLs, `hreflang`, Open Graph and `sitemap.xml`. The build prints a warning if it is missing. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | No | JSON form backend (e.g. Formspree). If empty, the contact form opens WhatsApp or the email app with the brief pre-filled. |

---

## Deploy (static → cPanel)

This project is configured as **static** (`output: 'export'` in `next.config.ts`), so it goes to cPanel.

1. Check `.env` has the production `NEXT_PUBLIC_SITE_URL` (values are baked in at build time).
2. Build:
   ```bash
   bun run build
   ```
3. Open `/out` and compress **everything inside it** (not the folder itself) into a `.zip`.
   Include the hidden **`.htaccess`** file: macOS Finder hides it (press `Cmd + Shift + .` to show it),
   or from a terminal run `cd out && zip -r ../site.zip .`
4. In cPanel → **File Manager**, back up the current files in the target folder.
5. Upload the `.zip` to the folder assigned to the site and **Extract** it, so `index.html` sits directly in that folder.
6. Open the live site and check: home, `/servicios/`, a service page, `/en/`, `/contacto/`, and a missing URL (branded 404).

### What `.htaccess` does

`public/.htaccess` is copied into `/out` on every build. It enables gzip compression, long-term caching for
hashed `/_next/static` files, correct MIME types for AVIF/WebP, basic security headers, and the branded 404.
**HTTPS redirect:** once SSL is active, uncomment the HTTPS block in `.htaccess` (or use cPanel →
Domains → *Force HTTPS Redirect*), then enable the HSTS line.

### After the first deploy

- Add the site to **Google Search Console** and submit `https://YOUR-DOMAIN/sitemap.xml`.
- Create or update the **Google Business Profile** (Tijuana) with the same name, email and website.
- Share a page on WhatsApp or LinkedIn to confirm the preview image (Open Graph) appears.

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
