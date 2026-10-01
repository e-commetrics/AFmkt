import type { CSSProperties } from "react";
import { Monogram } from "@/components/brand/monogram";
import { plain } from "@/components/ui/accent";
import { Check, Minus } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

/**
 * Comparison table. Explicit ARIA roles keep table semantics when the rows
 * restack as cards on small screens.
 */
export function Difference({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home.difference;

  return (
    <section aria-labelledby="difference-title" className="theme-paper section-y relative border-t border-line">
      <div className="container-af">
        <SectionHeader id="difference-title" eyebrow={d.eyebrow} title={d.title} intro={d.intro} align="split" />

        <div role="table" aria-label={plain(d.title)} className="compare mt-14 lg:mt-20" data-reveal>
          <div role="rowgroup" className="compare-head">
            <div role="row" className="compare-row">
              <span role="columnheader" className="compare-criterion mono-label">
                {d.columns.criterion}
              </span>
              <span role="columnheader" className="compare-others mono-label">
                {d.columns.others}
              </span>
              <span role="columnheader" className="compare-af">
                <Monogram className="h-5 w-auto text-volt" />
                <span className="mono-label text-white">{d.columns.af}</span>
              </span>
            </div>
          </div>
          <div role="rowgroup">
            {d.rows.map((row, i) => (
              <div role="row" key={row.criterion} className="compare-row" style={{ "--d": i * 60 } as CSSProperties}>
                <span role="rowheader" className="compare-criterion font-semibold">
                  {row.criterion}
                </span>
                <span role="cell" className="compare-others" data-label={d.columns.others}>
                  <Minus className="mt-1 size-4 shrink-0 text-ink-400" />
                  <span>{row.others}</span>
                </span>
                <span role="cell" className="compare-af" data-label={d.columns.af}>
                  <Check className="mt-1 size-4 shrink-0 text-volt" strokeWidth={2.2} />
                  <span>{row.af}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
