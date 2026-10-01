import { pending } from "@/content/pending";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";
import { JsonLd } from "@/components/seo/json-ld";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { getDictionary } from "@/content/dictionaries";
import { pillarIds, servicesInPillar } from "@/content/services";
import { site, whatsappHref } from "@/content/site";
import { homeAnchor, href, languageTag, serviceHref, type Locale } from "@/lib/i18n";
import { organizationGraph, SITE_URL } from "@/lib/seo";
import { SiteFooter } from "./site-footer";
import { SiteHeader, type HeaderProps } from "./site-header";
import { WhatsAppFloat } from "./whatsapp-float";

export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.defaultTitle, template: t.meta.titleTemplate },
    description: t.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    category: "business",
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    other: {
      "geo.region": "MX-BCN",
      "geo.placename": site.location.city,
      "geo.position": `${site.location.latitude};${site.location.longitude}`,
      ICBM: `${site.location.latitude}, ${site.location.longitude}`,
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: "#070807",
  colorScheme: "dark",
};

/** <html> for one language: fonts, header, footer, reveal motion, org schema. */
export function LocaleShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);

  const header: HeaderProps = {
    locale,
    labels: {
      services: t.nav.services,
      work: pending.caseStudies ? t.footer.agencyLinks.process : t.nav.work,
      about: t.nav.about,
      contact: t.nav.contact,
      mainLabel: t.nav.mainLabel,
      servicesMenu: t.nav.servicesMenu,
      viewAll: t.nav.viewAll,
      primaryCta: t.common.primaryCta,
      openMenu: t.common.openMenu,
      closeMenu: t.common.closeMenu,
      menu: t.common.menu,
      switchLocale: t.common.switchLocale,
      switchLocaleLabel: t.common.switchLocaleLabel,
      home: t.common.home,
    },
    links: {
      home: href("home", locale),
      services: href("services", locale),
      work: homeAnchor(pending.caseStudies ? t.anchors.process : t.anchors.work, locale),
      about: href("about", locale),
      contact: href("contact", locale),
    },
    pillars: pillarIds.map((p) => ({
      id: p,
      name: t.pillars[p].name,
      tagline: t.pillars[p].tagline,
      items: servicesInPillar(p).map((s) => ({
        id: s.id,
        number: s.number,
        name: t.services[s.id].navName,
        short: t.services[s.id].short,
        href: serviceHref(s.id, locale),
      })),
    })),
    contact: {
      email: site.email,
      whatsappHref: whatsappHref(t.common.whatsappMessage),
      whatsappLabel: t.common.whatsappCta,
    },
  };

  return (
    <html lang={languageTag[locale]} className={fontVariables} suppressHydrationWarning>
      {/* App Router root layouts render <head> directly; the rule targets the Pages Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Enables reveal-on-scroll styles only when JavaScript runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-volt px-5 py-3 font-semibold text-ink-950 transition-transform focus:translate-y-0"
        >
          {t.common.skipToContent}
        </a>
        <SiteHeader {...header} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        {header.contact.whatsappHref && (
          <WhatsAppFloat href={header.contact.whatsappHref} label={`${t.common.whatsappCta} ${t.common.newTab}`} />
        )}
        <RevealObserver />
        <JsonLd data={organizationGraph(locale)} />
      </body>
    </html>
  );
}
