import Link from "next/link";
import { PageTransition } from "@/components/layout/page-transition";
import { Breadcrumbs } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";
import { breadcrumbGraph, pageMetadata, pagePaths } from "@/lib/seo";

export function privacyMetadata(locale: Locale) {
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.privacyPage.seo.title,
    description: t.privacyPage.seo.description,
    paths: pagePaths("privacy"),
    og: "home",
  });
}

const withEmail = (text: string) => {
  const [before, after] = text.split("{email}");
  return after === undefined ? (
    text
  ) : (
    <>
      {before}
      <a href={`mailto:${site.email}`}>{site.email}</a>
      {after}
    </>
  );
};

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.privacyPage;

  return (
    <PageTransition>
      <section aria-labelledby="page-title" className="theme-paper pb-24 pt-[calc(var(--header-h)+2.5rem)] lg:pb-32 lg:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="container-af grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <div className="[&_a:hover]:text-fg [&_[aria-current]]:text-fg">
                <Breadcrumbs
                  label={t.common.breadcrumb}
                  items={[{ name: t.common.home, href: href("home", locale) }, { name: p.title }]}
                />
              </div>
              <p className="eyebrow mt-10">{p.eyebrow}</p>
              <h1 id="page-title" className="mt-6 font-display text-display-md">
                {p.title}
              </h1>
              <p className="mono-label mt-6 text-fg-subtle">{p.updated}</p>
              <nav aria-label={p.title} className="mt-10 hidden lg:block">
                <ol className="space-y-2 text-sm text-fg-muted">
                  {p.sections.map((s, i) => (
                    <li key={s.heading}>
                      <a href={`#s${i + 1}`} className="link-draw hover:text-fg">
                        {String(i + 1).padStart(2, "0")} · {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
          <div className="prose-af max-w-3xl text-[1.0625rem] lg:col-span-7 lg:col-start-6">
            <p className="text-lead text-fg">{p.intro}</p>
            {p.sections.map((s, i) => (
              <div key={s.heading} id={`s${i + 1}`}>
                <h2>
                  <span className="mono-label mr-3 align-middle text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.body.map((para) => (
                  <p key={para}>{withEmail(para)}</p>
                ))}
              </div>
            ))}
            <p className="!mt-14 border-t border-line pt-8">
              <Link href={href("contact", locale)}>{t.nav.contact}</Link> · <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbGraph([
        { name: t.common.home, path: href("home", locale) },
        { name: p.title, path: href("privacy", locale) },
      ])} />
    </PageTransition>
  );
}
