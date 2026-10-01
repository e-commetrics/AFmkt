import { pending } from "@/content/pending";
import type { CSSProperties } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { CoverageMap } from "@/components/sections/coverage-map";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/accent";
import { Photo } from "@/components/ui/photo";
import { getDictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";
import { absolute, breadcrumbGraph, pageMetadata, pagePaths } from "@/lib/seo";

export function aboutMetadata(locale: Locale) {
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.aboutPage.seo.title,
    description: t.aboutPage.seo.description,
    paths: pagePaths("about"),
    og: "about",
  });
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = t.aboutPage;
  const crumbs = [{ name: t.common.home, href: href("home", locale) }, { name: t.nav.about }];

  return (
    <PageTransition>
      <PageHero
        crumbs={crumbs}
        crumbLabel={t.common.breadcrumb}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        intro={a.hero.intro}
        aside={
          <figure className="group">
            <div className="duotone relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
              <Photo
                name="portrait"
                alt={t.home.about.alt}
                sizes="(min-width: 1024px) 38vw, 100vw"
                priority
                className="absolute inset-0"
                position="45% 30%"
              />
            </div>
            <figcaption className="mono-label mt-4 flex justify-between text-fg-subtle">
              <span>{t.home.about.figCaption}</span>
              <span>{site.founder}</span>
            </figcaption>
          </figure>
        }
      />

      {/* Founding story (hidden until the real story is confirmed) */}
      {!pending.foundingStory && (
      <section aria-labelledby="story-title" className="theme-paper section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6" data-reveal>
              {a.story.eyebrow}
            </p>
            <h2 id="story-title" className="font-display text-display-md" data-reveal>
              <Accent text={a.story.title} />
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="prose-af text-lead" data-reveal>
              {a.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-line pt-6" data-reveal>
              <p className="font-accent text-[2.2rem] leading-none text-fg">{site.founder}</p>
              <p className="mono-label mt-3 text-fg-subtle">{a.story.signatureRole}</p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Principles */}
      <section aria-labelledby="principles-title" className="theme-dark section-y">
        <div className="container-af">
          <p className="eyebrow mb-6" data-reveal>
            {a.principles.eyebrow}
          </p>
          <h2 id="principles-title" className="font-display text-display-md text-white" data-reveal>
            <Accent text={a.principles.title} />
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {a.principles.items.map((p, i) => (
              <li key={p.title} className="bg-canvas p-8" data-reveal style={{ "--d": i * 90 } as CSSProperties}>
                <p className="font-display text-display-sm text-volt">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-10 text-title font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-fg-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team on the ground */}
      <section aria-labelledby="team-title" className="theme-night section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <figure className="group lg:col-span-5" data-reveal>
            <div className="duotone relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
              <Photo
                name="staff"
                alt={t.home.staffBand.alt}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="absolute inset-0"
                position="50% 72%"
              />
            </div>
            <figcaption className="mono-label mt-4 text-fg-subtle">{t.home.staffBand.caption}</figcaption>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6" data-reveal>
              {a.team.eyebrow}
            </p>
            <h2 id="team-title" className="font-display text-display-md text-white" data-reveal>
              <Accent text={a.team.title} />
            </h2>
            <p className="lead mt-8" data-reveal>
              {a.team.body}
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section aria-labelledby="coverage-title" className="theme-dark section-y border-t border-line">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6" data-reveal>
              {a.coverage.eyebrow}
            </p>
            <h2 id="coverage-title" className="font-display text-display-md text-white" data-reveal>
              <Accent text={a.coverage.title} />
            </h2>
            <p className="lead mt-8" data-reveal>
              {a.coverage.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" data-reveal>
              {site.areaServed.map((city) => (
                <li key={city} className="chip">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block lg:col-span-7" data-reveal>
            <div className="card p-4 sm:p-8">
              <CoverageMap label={a.coverage.mapLabel} baseLabel={a.coverage.base} borderLabel={a.coverage.border} />
            </div>
          </div>
        </div>
      </section>

      {/* Media */}
      <section aria-labelledby="press-title" className="theme-paper section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6" data-reveal>
              {a.press.eyebrow}
            </p>
            <h2 id="press-title" className="font-display text-display-md" data-reveal>
              <Accent text={a.press.title} />
            </h2>
            <p className="lead mt-8" data-reveal>
              {a.press.body}
            </p>
          </div>
          <figure className="group lg:col-span-5 lg:col-start-8" data-reveal>
            <div className="duotone relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
              <Photo
                name="press"
                alt={a.press.alt}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="absolute inset-0"
                position="50% 40%"
              />
            </div>
          </figure>
        </div>
      </section>

      <FinalCta locale={locale} title={a.cta.title} body={a.cta.body} />

      <JsonLd data={breadcrumbGraph([
        { name: t.common.home, path: href("home", locale) },
        { name: t.nav.about, path: href("about", locale) },
      ])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: a.seo.title,
          url: absolute(href("about", locale)),
          about: { "@id": `${absolute("/")}#organization` },
        }}
      />
    </PageTransition>
  );
}
