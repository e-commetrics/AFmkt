import type { CSSProperties } from "react";
import { SectionHeader } from "@/components/ui/section";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

export function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.home.process;

  return (
    <section id={t.anchors.process} aria-labelledby="process-title" className="theme-dark section-y relative border-t border-line">
      <div className="container-af">
        <SectionHeader id="process-title" eyebrow={p.eyebrow} title={p.title} intro={p.intro} align="split" />

        <div className="process relative mt-16 lg:mt-24" data-reveal="fade">
          <span className="process-track" aria-hidden="true">
            <span className="process-progress" />
          </span>
          <ol className="grid lg:grid-cols-5 lg:gap-8">
          {p.steps.map((step, i) => (
            <li
              key={step.name}
              className="process-step relative pb-12 pl-14 lg:pb-0 lg:pl-0 lg:pt-14"
              style={{ "--d": i * 140 } as CSSProperties}
            >
              <span className="process-dot" aria-hidden="true" />
              <p className="mono-label text-volt">
                {String(i + 1).padStart(2, "0")} <span className="text-fg-subtle">— {step.time}</span>
              </p>
              <h3 className="mt-3 font-display text-title text-white">{step.name}</h3>
              <p className="mt-3 text-fg-muted">{step.body}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
