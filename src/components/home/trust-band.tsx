import type { CSSProperties } from "react";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

// 2×2 grid on small screens, one row on large screens.
const cellBorders = [
  "",
  "border-l pl-6 sm:pl-10",
  "border-t lg:border-t-0 lg:border-l lg:pl-10",
  "border-t border-l pl-6 sm:pl-10 lg:border-t-0",
];

export function TrustBand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.trust;

  return (
    <section aria-label={t.label} className="theme-dark relative border-t border-line">
      <div className="container-af">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={{ "--d": i * 90 } as CSSProperties}
              className={`flex flex-col-reverse justify-end gap-3 border-line py-10 pr-4 lg:py-14 ${cellBorders[i]}`}
            >
              <dt className="max-w-[16rem] text-small text-fg-muted">{stat.label}</dt>
              <dd className="font-display text-[clamp(2.75rem,1.6rem+4.4vw,5rem)] leading-none text-white">
                {stat.prefix && <span className="text-volt">{stat.prefix}</span>}
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-line py-7">
        <p className="sr-only">
          {t.marqueeLabel}: {t.marquee.join(", ")}
        </p>
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-track">
              {t.marquee.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="whitespace-nowrap px-7 font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-none text-ink-300">
                    {item}
                  </span>
                  <span className="block h-6 w-3 bg-volt [clip-path:polygon(35%_0,100%_0,65%_100%,0_100%)]" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
