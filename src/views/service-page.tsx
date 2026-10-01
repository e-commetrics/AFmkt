import Link from "@/components/ui/intent-link";
import type { CSSProperties } from "react";
import { ServiceMotif } from "@/components/brand/service-motif";
import { PageTransition } from "@/components/layout/page-transition";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/accent";
import { ButtonLink } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import { ArrowRight, Check } from "@/components/ui/icons";
import { Photo } from "@/components/ui/photo";
import { getDictionary } from "@/content/dictionaries";
import { serviceIds, services, type ServiceId } from "@/content/services";
import { homeAnchor, href, serviceHref, type Locale } from "@/lib/i18n";
import { breadcrumbGraph, faqGraph, pageMetadata, serviceGraph, servicePaths } from "@/lib/seo";

export function serviceMetadata(id: ServiceId, locale: Locale) {
  const s = getDictionary(locale).services[id];
  return pageMetadata({
    locale,
    title: s.seo.title,
    description: s.seo.description,
    paths: servicePaths(id),
    og: `service-${id}`,
  });
}

/** Contact URL with the service preselected in the brief form. */
export function contactForService(id: ServiceId, locale: Locale) {
  return `${href("contact", locale)}?${locale === "es" ? "servicio" : "service"}=${id}`;
}

export function ServicePage({ id, locale }: { id: ServiceId; locale: Locale }) {
  const t = getDictionary(locale);
  const meta = services[id];
  const s = t.services[id];
  const labels = t.servicePage;
  const total = String(serviceIds.length).padStart(2, "0");
  const proof = t.home.work.cases.find((c) => c.service === id) ?? t.home.work.cases.find((c) => c.photo === meta.photo);
  const crumbs = [
    { name: t.common.home, href: href("home", locale) },
    { name: t.nav.services, href: href("services", locale) },
    { name: s.navName },
  ];
  const includedId = locale === "es" ? "incluye" : "included";

  return (
    <PageTransition>
      <PageHero
        crumbs={crumbs}
        crumbLabel={t.common.breadcrumb}
        eyebrow={`${meta.number} / ${total} · ${t.pillars[meta.pillar].name}`}
        title={s.name}
        size="md"
        intro={s.what}
        aside={
          <div className="relative mx-auto aspect-square max-w-md rounded-[var(--radius-xl)] border border-line bg-ink-900/80 p-10 backdrop-blur lg:max-w-none">
            <span className="mono-label absolute left-5 top-5 text-fg-subtle">{meta.number}</span>
            <span className="mono-label absolute bottom-5 right-5 text-volt">AF / {t.pillars[meta.pillar].name}</span>
            <ServiceMotif id={id} className="is-in size-full" />
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contactForService(id, locale)} size="lg">
            {labels.ctaButton}
          </ButtonLink>
          <ButtonLink href={`#${includedId}`} variant="secondary" size="lg" icon="none">
            {labels.includedEyebrow}
          </ButtonLink>
        </div>
      </PageHero>

      {/* Why it matters → what you get */}
      <section aria-labelledby="why-title" className="theme-paper section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6" data-reveal>
              {labels.whyLabel}
            </p>
            <h2 id="why-title" className="font-accent text-[clamp(2rem,1.3rem+2.8vw,3.9rem)] leading-[1.05]" data-reveal>
              {s.why}
            </h2>
          </div>
          <div className="lg:col-span-5" data-reveal style={{ "--d": 120 } as CSSProperties}>
            <div className="theme-dark card p-8 sm:p-10">
              <p className="mono-label flex items-center gap-3 text-volt">
                <Check className="size-4" strokeWidth={2.4} />
                {labels.resultLabel}
              </p>
              <p className="mt-5 font-display text-title text-white">{s.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id={includedId} aria-labelledby="included-title" className="theme-dark section-y">
        <div className="container-af">
          <p className="eyebrow mb-6" data-reveal>
            {labels.includedEyebrow}
          </p>
          <h2 id="included-title" className="font-display text-display-md text-white" data-reveal>
            <Accent text={labels.includedTitle} />
          </h2>
          <ol className="mt-14 grid border-t border-line sm:grid-cols-2 lg:mt-20">
            {s.deliverables.map((d, i) => (
              <li
                key={d}
                data-reveal
                style={{ "--d": (i % 2) * 80 } as CSSProperties}
                className="flex items-baseline gap-6 border-b border-line py-6 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
              >
                <span className="mono-label text-volt">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-title text-white">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Audiences */}
      <section aria-labelledby="audience-title" className="theme-night section-y">
        <div className="container-af">
          <p className="eyebrow mb-6" data-reveal>
            {labels.audienceEyebrow}
          </p>
          <h2 id="audience-title" className="font-display text-display-md text-white" data-reveal>
            <Accent text={labels.audienceTitle} />
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
            {(
              [
                [labels.business, s.audiences.business],
                [labels.artists, s.audiences.artists],
              ] as const
            ).map(([title, body], i) => (
              <div key={title} className="card p-8 sm:p-10" data-reveal style={{ "--d": i * 100 } as CSSProperties}>
                <p className="mono-label text-volt">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-display-sm text-white">{title}</h3>
                <p className="mt-4 text-lead text-fg-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof from a real project */}
      {meta.photo && proof && (
        <section aria-labelledby="proof-title" className="theme-dark section-y border-t border-line">
          <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <figure className="group lg:col-span-6" data-reveal>
              <div className="duotone relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Photo
                  name={meta.photo}
                  alt={meta.photo === proof.photo ? proof.alt : t.home.staffBand.alt}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="absolute inset-0"
                  position={meta.photo === "staff" ? "50% 70%" : "50% 40%"}
                />
              </div>
              <figcaption className="mono-label mt-4 flex justify-between gap-4 text-fg-subtle">
                <span>{proof.client}</span>
                <span>{proof.location}</span>
              </figcaption>
            </figure>
            <div className="lg:col-span-6">
              <p className="eyebrow mb-6" data-reveal>
                {labels.proofEyebrow}
              </p>
              <h2 id="proof-title" className="font-display text-display-sm text-white" data-reveal>
                {proof.title}
              </h2>
              <p className="lead mt-6" data-reveal>
                {proof.solution}
              </p>
              <Link href={homeAnchor(t.anchors.work, locale)} className="link-arrow mt-8" data-reveal>
                {t.home.work.eyebrow}: {proof.client}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Objections specific to this service */}
      <section aria-labelledby="service-faq-title" className="theme-paper section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6" data-reveal>
              {labels.faqEyebrow}
            </p>
            <h2 id="service-faq-title" className="font-display text-display-md" data-reveal>
              <Accent text={labels.faqTitle} />
            </h2>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <FaqList items={s.faq} name={`faq-${id}`} />
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section aria-labelledby="related-title" className="theme-dark section-y">
        <div className="container-af">
          <p className="eyebrow mb-6" data-reveal>
            {labels.relatedEyebrow}
          </p>
          <h2 id="related-title" className="font-display text-display-md text-white" data-reveal>
            <Accent text={labels.relatedTitle} />
          </h2>
          <ul className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">
            {meta.related.map((rid, i) => (
              <li key={rid} data-reveal style={{ "--d": i * 90 } as CSSProperties}>
                <Link
                  href={serviceHref(rid, locale)}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-6 transition-colors duration-500 hover:border-volt/50 sm:p-8"
                >
                  <div className="mb-8 size-24 rounded-[var(--radius-md)] border border-line bg-canvas p-3">
                    <ServiceMotif id={rid} className="size-full" />
                  </div>
                  <p className="mono-label text-fg-subtle">
                    <span className="text-volt">{services[rid].number}</span> · {t.pillars[services[rid].pillar].name}
                  </p>
                  <h3 className="mt-3 font-display text-title text-white">{t.services[rid].name}</h3>
                  <p className="mt-3 flex-1 text-fg-muted">{t.services[rid].short}</p>
                  <span className="link-arrow mt-6">
                    {t.common.exploreService}
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        locale={locale}
        title={labels.ctaTitle}
        body={labels.ctaBody}
        ctaLabel={labels.ctaButton}
        contactHref={contactForService(id, locale)}
      />

      <JsonLd data={serviceGraph(id, locale)} />
      <JsonLd
        data={breadcrumbGraph([
          { name: t.common.home, path: href("home", locale) },
          { name: t.nav.services, path: href("services", locale) },
          { name: s.navName, path: serviceHref(id, locale) },
        ])}
      />
      <JsonLd data={faqGraph(s.faq)} />
    </PageTransition>
  );
}
