import Link from "next/link";
import type { CSSProperties } from "react";
import { ServiceMotif } from "@/components/brand/service-motif";
import { Process } from "@/components/home/process";
import { PageTransition } from "@/components/layout/page-transition";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { pillarIds, serviceIds, servicesInPillar } from "@/content/services";
import { href, serviceHref, type Locale } from "@/lib/i18n";
import { absolute, breadcrumbGraph, pageMetadata, pagePaths } from "@/lib/seo";

export function servicesMetadata(locale: Locale) {
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.servicesPage.seo.title,
    description: t.servicesPage.seo.description,
    paths: pagePaths("services"),
    og: "services",
  });
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const sp = t.servicesPage;
  const crumbs = [
    { name: t.common.home, href: href("home", locale) },
    { name: t.nav.services },
  ];

  return (
    <PageTransition>
      <PageHero
        crumbs={crumbs}
        crumbLabel={t.common.breadcrumb}
        eyebrow={sp.eyebrow}
        title={sp.title}
        intro={sp.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href("contact", locale)} size="lg">
            {t.common.primaryCta}
          </ButtonLink>
        </div>
      </PageHero>

      {pillarIds.map((pillar, pi) => {
        const items = servicesInPillar(pillar);
        const theme = pi % 2 === 0 ? "theme-dark" : "theme-night";
        return (
          <section
            key={pillar}
            aria-labelledby={`pillar-${pillar}`}
            className={`${theme} section-y-sm relative border-b border-line`}
          >
            <div className="container-af grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                  <p className="mono-label text-volt" data-reveal>
                    {String(pi + 1).padStart(2, "0")} / 03 · {items.length} {sp.servicesCount}
                  </p>
                  <h2 id={`pillar-${pillar}`} className="mt-4 font-display text-display-md text-white" data-reveal>
                    {t.pillars[pillar].name}
                  </h2>
                  <p className="mt-4 font-accent text-[1.6rem] leading-tight text-ink-200" data-reveal>
                    {t.pillars[pillar].tagline}
                  </p>
                </div>
              </div>

              <ul className="grid gap-4 lg:col-span-8">
                {items.map((s, i) => {
                  const copy = t.services[s.id];
                  return (
                    <li key={s.id} data-reveal style={{ "--d": i * 80 } as CSSProperties}>
                      <Link
                        href={serviceHref(s.id, locale)}
                        className="group grid gap-6 rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-colors duration-500 hover:border-volt/50 sm:grid-cols-[1fr_9rem] sm:p-8"
                      >
                        <div>
                          <p className="mono-label text-fg-subtle">
                            <span className="text-volt">{s.number}</span> / {String(serviceIds.length).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 font-display text-display-sm text-white">{copy.name}</h3>
                          <p className="mt-3 max-w-xl text-fg-muted">{copy.what}</p>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {copy.deliverables.slice(0, 4).map((d) => (
                              <li key={d} className="chip">
                                {d}
                              </li>
                            ))}
                          </ul>
                          <span className="link-arrow mt-7">
                            {t.common.exploreService}
                            <ArrowRight />
                          </span>
                        </div>
                        <div className="hidden aspect-square rounded-[var(--radius-md)] border border-line bg-canvas p-4 sm:block">
                          <ServiceMotif id={s.id} className="size-full" />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

      <Process locale={locale} />
      <FinalCta locale={locale} />

      <JsonLd data={breadcrumbGraph([
        { name: t.common.home, path: href("home", locale) },
        { name: t.nav.services, path: href("services", locale) },
      ])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.servicesPage.seo.title,
          itemListElement: serviceIds.map((id, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.services[id].name,
            url: absolute(serviceHref(id, locale)),
          })),
        }}
      />
    </PageTransition>
  );
}
