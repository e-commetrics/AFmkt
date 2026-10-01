import type { CSSProperties } from "react";
import { Monogram } from "@/components/brand/monogram";
import { Accent } from "@/components/ui/accent";
import { ButtonLink } from "@/components/ui/button";
import { Check } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { whatsappHref } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";

interface FinalCtaProps {
  locale: Locale;
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Contact URL, e.g. with a preselected service. */
  contactHref?: string;
  ctaLabel?: string;
}

/** Closing conversion block in volt: one decision, low friction, risk reducers. */
export function FinalCta({ locale, eyebrow, title, body, contactHref, ctaLabel }: FinalCtaProps) {
  const t = getDictionary(locale);
  const c = t.home.finalCta;
  const wa = whatsappHref(t.common.whatsappMessage);

  return (
    <section aria-labelledby="cta-title" className="theme-volt relative isolate overflow-hidden">
      <Monogram className="pointer-events-none absolute -right-[8%] top-1/2 -z-10 h-[130%] w-auto -translate-y-1/2 text-ink-950/[0.06]" />
      <div className="container-af section-y">
        <p className="eyebrow mb-6" data-reveal>
          {eyebrow ?? c.eyebrow}
        </p>
        <h2 id="cta-title" className="max-w-[14ch] font-display text-display-xl" data-reveal>
          <Accent text={title ?? c.title} />
        </h2>
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-lead text-ink-900 lg:col-span-6" data-reveal>
            {body ?? c.body}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end" data-reveal style={{ "--d": 120 } as CSSProperties}>
            <ButtonLink href={contactHref ?? href("contact", locale)} size="lg">
              {ctaLabel ?? t.common.primaryCta}
            </ButtonLink>
            {wa && (
              <ButtonLink href={wa} variant="secondary" size="lg" icon="whatsapp">
                {t.common.whatsappCta}
              </ButtonLink>
            )}
          </div>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6" data-reveal>
          {c.reassurance.map((r) => (
            <li key={r} className="inline-flex items-center gap-2 text-small font-medium">
              <Check className="size-4" strokeWidth={2.4} />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
