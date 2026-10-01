import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Monogram } from "@/components/brand/monogram";
import { Accent } from "@/components/ui/accent";

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className="fade-in">
      <ol className="mono-label flex flex-wrap items-center gap-x-2 gap-y-1 text-fg-subtle">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-volt">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-200">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface PageHeroProps {
  crumbs: Crumb[];
  crumbLabel: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  /** Right-hand visual on large screens. */
  aside?: ReactNode;
  /** Content under the intro (CTAs, meta). */
  children?: ReactNode;
}

const delay = (ms: number) => ({ "--d": ms }) as CSSProperties;

/** Inner-page opening: breadcrumbs, eyebrow, H1 with the brand accent. */
export function PageHero({ crumbs, crumbLabel, eyebrow, title, intro, aside, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="theme-dark relative isolate overflow-hidden border-b border-line">
      <Monogram className="pointer-events-none absolute -right-24 -top-10 -z-10 h-[34rem] w-auto text-ink-900 [--mono-cut:var(--color-ink-950)] lg:h-[46rem]" />
      <div className="container-af grid gap-12 pb-16 pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-24 lg:pt-[calc(var(--header-h)+4.5rem)]">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <Breadcrumbs items={crumbs} label={crumbLabel} />
          <p className="eyebrow fade-in mt-10" style={delay(100)}>
            {eyebrow}
          </p>
          <h1 id="page-title" className="mt-6 font-display text-display-lg text-white">
            <span className="rise-line">
              <span style={delay(120)}>
                <Accent text={title} />
              </span>
            </span>
          </h1>
          {intro && (
            <div className="fade-in lead mt-8 max-w-2xl text-ink-200" style={delay(350)}>
              {intro}
            </div>
          )}
          {children && (
            <div className="fade-in mt-10" style={delay(500)}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="fade-in lg:col-span-5" style={delay(300)}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
