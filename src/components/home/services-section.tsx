import Link from "@/components/ui/intent-link";
import type { CSSProperties } from "react";
import { ServiceMotif } from "@/components/brand/service-motif";
import { SectionHeader } from "@/components/ui/section";
import { ArrowRight } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { serviceIds, services } from "@/content/services";
import { href, serviceHref, type Locale } from "@/lib/i18n";
import { ServicesToc } from "./services-toc";

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.home.services;
  const total = String(serviceIds.length).padStart(2, "0");

  return (
    <section id={t.anchors.services} aria-labelledby="services-title" className="theme-dark section-y relative">
      <div className="container-af">
        <SectionHeader id="services-title" eyebrow={s.eyebrow} title={s.title} intro={s.intro} align="split" />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)] space-y-10 pr-6">
              <ServicesToc
                label={s.indexLabel}
                items={serviceIds.map((id) => ({ id, number: services[id].number, name: t.services[id].navName }))}
              />
              <div className="rounded-[var(--radius-md)] border border-line bg-surface p-6">
                <p className="font-semibold text-white">{s.help.title}</p>
                <p className="mt-2 text-small text-fg-muted">{s.help.body}</p>
                <Link href={href("contact", locale)} className="link-arrow mt-5 text-small">
                  {s.help.cta}
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {serviceIds.map((id, i) => {
              const meta = services[id];
              const copy = t.services[id];
              return (
                <article
                  key={id}
                  id={`svc-${id}`}
                  aria-labelledby={`svc-${id}-title`}
                  className={`group relative grid gap-8 py-12 lg:py-16 ${i > 0 ? "border-t border-line" : "lg:pt-0"}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div data-reveal>
                      <p className="mono-label text-fg-subtle">
                        <span className="text-volt">{meta.number}</span> / {total} · {t.pillars[meta.pillar].name}
                      </p>
                      <h3 id={`svc-${id}-title`} className="mt-4 max-w-[18ch] font-display text-display-sm text-white">
                        {copy.name}
                      </h3>
                      <p className="mt-4 max-w-xl text-lead text-ink-200">{copy.short}</p>
                    </div>
                    <div
                      className="size-24 shrink-0 rounded-[var(--radius-md)] border border-line bg-ink-900 p-3 transition-colors duration-500 group-hover:border-volt/50 sm:size-32 lg:size-36"
                      data-reveal
                      style={{ "--d": 150 } as CSSProperties}
                    >
                      <ServiceMotif id={id} className="size-full" />
                    </div>
                  </div>

                  <dl className="grid gap-6 sm:grid-cols-2" data-reveal style={{ "--d": 100 } as CSSProperties}>
                    <div className="border-t border-line pt-4">
                      <dt className="mono-label text-fg-subtle">{s.labels.why}</dt>
                      <dd className="mt-2 text-fg-muted">{copy.why}</dd>
                    </div>
                    <div className="border-t border-volt/40 pt-4">
                      <dt className="mono-label text-volt">{s.labels.result}</dt>
                      <dd className="mt-2 text-white">{copy.result}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center justify-between gap-5" data-reveal style={{ "--d": 160 } as CSSProperties}>
                    <ul className="flex flex-wrap gap-2" aria-label={t.servicePage.includedEyebrow}>
                      {copy.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="chip">
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link href={serviceHref(id, locale)} className="link-arrow">
                      {t.common.exploreService}
                      <span className="sr-only">: {copy.name}</span>
                      <ArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}

            <div className="mt-4 border-t border-line pt-10 lg:hidden">
              <p className="font-semibold text-white">{s.help.title}</p>
              <p className="mt-2 text-fg-muted">{s.help.body}</p>
              <Link href={href("contact", locale)} className="link-arrow mt-4">
                {s.help.cta}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
