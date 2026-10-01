import Link from "@/components/ui/intent-link";
import { PageTransition } from "@/components/layout/page-transition";
import { PageHero } from "@/components/sections/page-hero";
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
      <PageHero
        crumbs={[{ name: t.common.home, href: href("home", locale) }, { name: p.title }]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={p.eyebrow}
        title={p.title}
        size="md"
        intro={<p className="mono-label">{p.updated}</p>}
      />

      <section className="theme-paper section-y-sm">
        <div className="container-af grid gap-12 lg:grid-cols-12">
          <nav aria-label={p.tocLabel} className="hidden lg:col-span-4 lg:block">
            <ol className="sticky top-[calc(var(--header-h)+2rem)] space-y-2.5 text-sm text-fg-muted">
              {p.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`} className="link-draw hover:text-fg">
                    <span className="mono-label mr-2 text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="prose-af max-w-3xl lg:col-span-7 lg:col-start-6">
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
              <Link href={href("contact", locale)}>{t.nav.contact}</Link> ·{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbGraph([
          { name: t.common.home, path: href("home", locale) },
          { name: p.title, path: href("privacy", locale) },
        ])}
      />
    </PageTransition>
  );
}
