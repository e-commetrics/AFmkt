import Link from "@/components/ui/intent-link";
import type { CSSProperties } from "react";
import { Accent } from "@/components/ui/accent";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { Photo } from "@/components/ui/photo";
import { SectionHeader } from "@/components/ui/section";
import { getDictionary } from "@/content/dictionaries";
import { href, serviceHref, type Locale } from "@/lib/i18n";

export function CaseStudies({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const w = t.home.work;

  return (
    <section id={t.anchors.work} aria-labelledby="work-title" className="theme-night section-y relative">
      <div className="container-af">
        <SectionHeader id="work-title" eyebrow={w.eyebrow} title={w.title} intro={w.intro} align="split" />

        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
          {w.cases.map((c, i) => {
            const flip = i % 2 === 1;
            const portrait = c.photo === "press";
            return (
              <article
                key={c.client}
                aria-labelledby={`case-${i}-title`}
                className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
              >
                <figure
                  className={`group ${portrait ? "lg:col-span-5" : "lg:col-span-7"} ${flip ? "lg:order-2" : ""}`}
                  data-reveal
                >
                  <div
                    className={`duotone relative overflow-hidden rounded-[var(--radius-lg)] ${
                      portrait ? "aspect-[4/5]" : "aspect-[5/4] lg:aspect-[4/3]"
                    }`}
                  >
                    <Photo
                      name={c.photo}
                      alt={c.alt}
                      sizes={portrait ? "(min-width: 1024px) 38vw, 100vw" : "(min-width: 1024px) 55vw, 100vw"}
                      className="absolute inset-0"
                      position={portrait ? "50% 35%" : "50% 45%"}
                    />
                    <span className="mono-label absolute left-4 top-4 z-10 rounded-full bg-ink-950/75 px-3 py-1.5 text-white backdrop-blur">
                      {c.category}
                    </span>
                  </div>
                  <figcaption className="mono-label mt-4 flex flex-col gap-1 text-fg-subtle sm:flex-row sm:justify-between sm:gap-4">
                    <span>{c.client}</span>
                    <span>{c.location}</span>
                  </figcaption>
                </figure>

                <div className={portrait ? "lg:col-span-7" : "lg:col-span-5"}>
                  <p className="mono-label text-volt" data-reveal>
                    {String(i + 1).padStart(2, "0")} — {c.client}
                  </p>
                  <h3 id={`case-${i}-title`} className="mt-4 font-display text-display-sm text-white" data-reveal>
                    {c.title}
                  </h3>

                  <dl className="mt-8 grid gap-6 sm:grid-cols-2" data-reveal style={{ "--d": 100 } as CSSProperties}>
                    <div>
                      <dt className="mono-label text-fg-subtle">{w.labels.challenge}</dt>
                      <dd className="mt-2 text-fg-muted">{c.challenge}</dd>
                    </div>
                    <div>
                      <dt className="mono-label text-fg-subtle">{w.labels.solution}</dt>
                      <dd className="mt-2 text-fg-muted">{c.solution}</dd>
                    </div>
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={w.labels.scope} data-reveal>
                    {c.scope.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 border-t border-line pt-8" data-reveal style={{ "--d": 150 } as CSSProperties}>
                    <h4 className="sr-only">{w.labels.results}</h4>
                    <dl className="grid grid-cols-3 gap-5">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="flex min-w-0 flex-col-reverse justify-end gap-2">
                          <dt className="text-small leading-snug text-fg-muted">{m.label}</dt>
                          <dd className="font-display text-[clamp(1.5rem,1.1rem+1.3vw,2.1rem)] leading-none text-white">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <Link href={serviceHref(c.service, locale)} className="link-arrow mt-8" data-reveal>
                    {w.labels.viewService}: {t.services[c.service].navName}
                    <ArrowRight />
                  </Link>
                </div>
              </article>
            );
          })}

          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)] border border-volt/40 p-8 sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:p-16"
            data-reveal
          >
            <div className="max-w-2xl">
              <p className="font-display text-display-md text-white">
                <Accent text={w.next.title} />
              </p>
              <p className="lead mt-5">{w.next.body}</p>
            </div>
            <ButtonLink href={href("contact", locale)} size="lg" className="mt-8 lg:mt-0">
              {t.common.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
