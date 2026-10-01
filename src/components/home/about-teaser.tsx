import { pending } from "@/content/pending";
import type { CSSProperties } from "react";
import { Accent } from "@/components/ui/accent";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { getDictionary } from "@/content/dictionaries";
import { href, type Locale } from "@/lib/i18n";

export function AboutTeaser({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = t.home.about;

  return (
    <section id={t.anchors.about} aria-labelledby="about-title" className="theme-dark section-y relative overflow-hidden">
      <div className="container-af grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <figure className="group relative lg:col-span-5" data-reveal>
          <div className="duotone relative aspect-square overflow-hidden rounded-[var(--radius-lg)]">
            <Photo
              name="portrait"
              alt={a.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="absolute inset-0"
              position="50% 30%"
            />
          </div>
          <figcaption className="mono-label mt-4 flex items-center justify-between text-fg-subtle">
            <span>{a.figCaption}</span>
            <span className="text-volt">AF</span>
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <p className="eyebrow mb-6" data-reveal>
            {a.eyebrow}
          </p>
          <h2 id="about-title" className="font-display text-display-lg text-white" data-reveal>
            <Accent text={a.title} />
          </h2>
          <p className="lead mt-8 max-w-2xl" data-reveal>
            {a.body}
          </p>

          {!pending.foundingStory && (
          <blockquote className="mt-10 border-l-2 border-volt pl-6" data-reveal style={{ "--d": 100 } as CSSProperties}>
            <p className="font-accent text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] leading-tight text-white">“{a.quote}”</p>
            <footer className="mono-label mt-4 text-fg-subtle">{a.quoteBy}</footer>
          </blockquote>
          )}

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line" data-reveal>
            {a.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse justify-end gap-1 bg-canvas p-5">
                <dt className="text-small text-fg-muted">{f.label}</dt>
                <dd className="font-display text-title text-white">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10" data-reveal>
            <ButtonLink href={href("about", locale)} variant="secondary">
              {a.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
