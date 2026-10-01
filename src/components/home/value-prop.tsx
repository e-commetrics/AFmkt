import type { CSSProperties } from "react";
import { Accent } from "@/components/ui/accent";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { VendorDiagram } from "./vendor-diagram";

export function ValueProp({ locale }: { locale: Locale }) {
  const v = getDictionary(locale).home.value;

  return (
    <section aria-labelledby="value-title" className="theme-paper section-y relative">
      <div className="container-af">
        <p className="eyebrow mb-6" data-reveal>
          {v.eyebrow}
        </p>
        <h2 id="value-title" className="max-w-[22ch] font-display text-display-md" data-reveal>
          <Accent text={v.title} />
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="lead text-fg" data-reveal>
              {v.body}
            </p>
            <ol className="mt-10 border-t border-line">
              {v.points.map((point, i) => (
                <li
                  key={point.title}
                  data-reveal
                  style={{ "--d": 80 + i * 90 } as CSSProperties}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6"
                >
                  <span className="mono-label pt-1 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-title font-semibold tracking-tight">{point.title}</h3>
                    <p className="mt-2 text-fg-muted">{point.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7" data-reveal style={{ "--d": 150 } as CSSProperties}>
            <VendorDiagram labels={v.diagram} />
          </div>
        </div>
      </div>
    </section>
  );
}
