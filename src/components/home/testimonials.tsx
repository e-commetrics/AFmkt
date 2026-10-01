import type { CSSProperties } from "react";
import { SectionHeader } from "@/components/ui/section";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .replace(/[^A-ZÁÉÍÓÚÑ]/gi, "")
    .slice(0, 2)
    .toUpperCase();

export function Testimonials({ locale }: { locale: Locale }) {
  const tm = getDictionary(locale).home.testimonials;
  const [featured, ...rest] = tm.items;

  return (
    <section aria-labelledby="testimonials-title" className="theme-paper section-y relative">
      <div className="container-af">
        <SectionHeader id="testimonials-title" eyebrow={tm.eyebrow} title={tm.title} />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <figure className="card flex flex-col justify-between p-8 sm:p-12 lg:col-span-7" data-reveal>
            <div>
              <span aria-hidden="true" className="block font-serif text-[7rem] leading-[0.6] text-forest/30">
                “
              </span>
              <blockquote className="mt-4">
                <p className="font-accent text-[clamp(1.75rem,1.2rem+2vw,2.9rem)] leading-[1.12] text-fg">
                  {featured.quote}
                </p>
              </blockquote>
            </div>
            <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
              <Avatar name={featured.name} />
              <span>
                <span className="block font-semibold">{featured.name}</span>
                <span className="text-small text-fg-muted">
                  {featured.role} · {featured.org}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="grid gap-6 lg:col-span-5 lg:gap-8">
            {rest.map((item, i) => (
              <figure
                key={item.name}
                className="card flex flex-col justify-between p-8"
                data-reveal
                style={{ "--d": 120 + i * 100 } as CSSProperties}
              >
                <blockquote>
                  <p className="text-lead leading-relaxed text-fg">“{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Avatar name={item.name} />
                  <span>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="text-small text-fg-muted">
                      {item.role} · {item.org}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-12 shrink-0 place-items-center rounded-full bg-ink-950 font-mono text-sm font-medium text-volt"
    >
      {initials(name)}
    </span>
  );
}
