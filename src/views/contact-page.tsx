import type { CSSProperties } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageTransition } from "@/components/layout/page-transition";
import { Breadcrumbs } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/accent";
import { FaqList } from "@/components/ui/faq-list";
import { Mail, MapPin, socialIcons, WhatsApp } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { serviceIds } from "@/content/services";
import { formatPhone, site, socialLinks, whatsappHref } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";
import { absolute, breadcrumbGraph, pageMetadata, pagePaths } from "@/lib/seo";

export function contactMetadata(locale: Locale) {
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.contactPage.seo.title,
    description: t.contactPage.seo.description,
    paths: pagePaths("contact"),
    og: "contact",
  });
}

const delay = (ms: number) => ({ "--d": ms }) as CSSProperties;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.contactPage;
  const wa = whatsappHref(t.common.whatsappMessage);
  // The objections that matter most right before sending a brief.
  const faq = [t.home.faq.items[1], t.home.faq.items[2], t.home.faq.items[3], t.home.faq.items[4]];

  return (
    <PageTransition>
      <section aria-labelledby="page-title" className="theme-dark relative border-b border-line">
        {/* Phones: intro → form → details. Large screens: form on the right. */}
        <div className="container-af grid gap-12 pb-20 pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:pb-28 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <div className="lg:col-span-5 lg:row-start-1">
            <div>
              <Breadcrumbs
                label={t.common.breadcrumb}
                items={[{ name: t.common.home, href: href("home", locale) }, { name: t.nav.contact }]}
              />
              <p className="eyebrow fade-in mt-10" style={delay(100)}>
                {c.eyebrow}
              </p>
              <h1 id="page-title" className="mt-6 font-display text-display-md text-white">
                <span className="rise-line">
                  <span style={delay(120)}>
                    <Accent text={c.title} />
                  </span>
                </span>
              </h1>
              <p className="lead mt-8 text-ink-200">
                {c.intro}
              </p>
            </div>
          </div>

          <div className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={delay(250)}>
            <ContactForm
              labels={c.form}
              services={serviceIds.map((id) => ({ id, name: t.services[id].navName }))}
              email={site.email}
              whatsapp={site.whatsapp}
              endpoint={process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ""}
              privacyHref={href("privacy", locale)}
              locale={locale}
            />
          </div>
          <div className="lg:col-span-5 lg:row-start-2">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <div className="fade-in" style={delay(420)}>
                <h2 className="mono-label text-fg-subtle">{c.stepsTitle}</h2>
                <ol className="mt-5 space-y-4">
                  {c.steps.map((step, i) => (
                    <li key={step} className="grid grid-cols-[2.25rem_1fr] items-baseline gap-3">
                      <span className="mono-label text-volt">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-ink-200">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="fade-in mt-12 border-t border-line pt-8" style={delay(520)}>
                <h2 className="mono-label text-fg-subtle">{c.channelsTitle}</h2>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-volt transition-colors group-hover:border-volt">
                        <Mail className="size-5" />
                      </span>
                      <span>
                        <span className="mono-label block text-fg-subtle">{c.channels.email}</span>
                        <span className="break-all text-white">{site.email}</span>
                      </span>
                    </a>
                  </li>
                  {wa && (
                    <li>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-volt transition-colors group-hover:border-volt">
                          <WhatsApp className="size-5" />
                        </span>
                        <span>
                          <span className="mono-label block text-fg-subtle">{c.channels.whatsapp}</span>
                          <span className="text-white">{formatPhone(site.whatsapp)}</span>
                        </span>
                      </a>
                    </li>
                  )}
                  <li className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-volt">
                      <MapPin className="size-5" />
                    </span>
                    <span>
                      <span className="mono-label block text-fg-subtle">{c.channels.base}</span>
                      <span className="text-white">{t.footer.location}</span>
                    </span>
                  </li>
                </ul>
                {socialLinks.length > 0 && (
                  <ul className="mt-6 flex gap-2" aria-label={c.channels.social}>
                    {socialLinks.map(([key, label, url]) => {
                      const Icon = socialIcons[key];
                      return (
                        <li key={key}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${label} ${t.common.newTab}`}
                            className="grid size-11 place-items-center rounded-full border border-line-strong text-ink-200 hover:border-volt hover:text-volt"
                          >
                            <Icon className="size-5" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section aria-labelledby="contact-faq-title" className="theme-paper section-y">
        <div className="container-af grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6" data-reveal>
              {t.home.faq.eyebrow}
            </p>
            <h2 id="contact-faq-title" className="font-display text-display-md" data-reveal>
              <Accent text={t.home.faq.title} />
            </h2>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <FaqList items={faq} name="faq-contact" />
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbGraph([
        { name: t.common.home, path: href("home", locale) },
        { name: t.nav.contact, path: href("contact", locale) },
      ])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: c.seo.title,
          url: absolute(href("contact", locale)),
          about: { "@id": `${absolute("/")}#organization` },
        }}
      />
    </PageTransition>
  );
}
