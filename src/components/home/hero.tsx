import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { getDictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";
import { Spotlight } from "./spotlight";

const delay = (ms: number) => ({ "--d": ms }) as CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = t.home.hero;

  return (
    <Spotlight labelledBy="hero-title" className="theme-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Stage: monochrome venue, lit by a moving volt spotlight. */}
      <div className="absolute inset-0 -z-10">
        <Photo
          name="arena"
          alt={h.imageAlt}
          sizes="100vw"
          priority
          className="absolute inset-0"
          imgClassName="hero-photo-base"
          position="50% 40%"
        />
        <div className="hero-spot absolute inset-0" aria-hidden="true">
          <Photo name="arena" alt="" sizes="100vw" priority className="absolute inset-0" imgClassName="hero-photo-lit" position="50% 40%" />
        </div>
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="hero-shade absolute inset-0" aria-hidden="true" />
        <div className="grain absolute inset-0" aria-hidden="true" />
      </div>

      <div className="container-af relative flex flex-1 flex-col pb-6 pt-[calc(var(--header-h)+2rem)] sm:pt-[calc(var(--header-h)+3rem)]">
        <div className="fade-in flex items-center justify-between gap-6" style={delay(150)}>
          <p className="eyebrow text-ink-200">{h.eyebrow}</p>
          <p className="mono-label hidden text-ink-300 md:block">
            {h.location} <span className="text-volt">/</span> {h.coordinates}
          </p>
        </div>

        <div className="mt-auto pt-16">
          <h1 id="hero-title" className="font-display text-display-xl text-white">
            <span className="rise-line">
              <span style={delay(0)}>{h.titleLine1}</span>
            </span>
            <span className="rise-line">
              <span style={delay(110)} className="display-accent">
                {h.titleLine2}
              </span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
            <p className="lead max-w-xl text-ink-200 lg:col-span-6">
              {h.lead}
            </p>
            <div className="fade-in flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end" style={delay(350)}>
              <ButtonLink href={href("contact", locale)} size="lg">
                {t.common.primaryCta}
              </ButtonLink>
              <ButtonLink href={`#${t.anchors.services}`} variant="secondary" size="lg" icon="none">
                {h.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div
          className="fade-in mt-12 grid items-center gap-6 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto] xl:grid-cols-3"
          style={delay(500)}
        >
          <div className="flex items-center gap-4">
            <span className="relative size-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
              <Photo name="portrait" alt="" sizes="48px" className="absolute inset-0" position="50% 30%" />
            </span>
            <p className="text-sm leading-snug">
              <span className="block font-semibold text-white">{site.founder}</span>
              <span className="text-ink-300">{h.founderRole}</span>
            </p>
          </div>
          <p className="mono-label hidden text-center text-ink-400 xl:block">{h.caption}</p>
          <p className="mono-label hidden items-center justify-end gap-3 text-ink-300 md:flex" aria-hidden="true">
            {h.scroll}
            <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-white/15" />
          </p>
        </div>
      </div>
    </Spotlight>
  );
}
