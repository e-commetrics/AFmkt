import type { Metadata } from "next";
import { plain } from "@/components/ui/accent";
import { getDictionary } from "@/content/dictionaries";
import { serviceIds, services, type ServiceId } from "@/content/services";
import { site, emailFor } from "@/content/site";
import { languageTag, locales, ogLocale, routes, serviceHref, type Locale } from "./i18n";

/** Absolute origin used for canonical URLs, hreflang, OG and the sitemap. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://afmarketing.mx").replace(/\/+$/, "");

export const absolute = (path: string) => `${SITE_URL}${path}`;

export type OgKey = "home" | "services" | "about" | "contact" | `service-${ServiceId}`;

interface PageMetaInput {
  locale: Locale;
  title: string;
  description: string;
  /** Equivalent path in each locale (trailing slash). */
  paths: Record<Locale, string>;
  og: OgKey;
  /** Skip the "· AF Marketing" suffix (home page). */
  absoluteTitle?: boolean;
}

export function pageMetadata({ locale, title, description, paths, og, absoluteTitle }: PageMetaInput): Metadata {
  const dict = getDictionary(locale);
  const other = locales.find((l) => l !== locale)!;
  const image = {
    url: `/og/${locale}/${og}.jpg`,
    width: 1200,
    height: 630,
    alt: dict.meta.ogAlt,
  };
  const fullTitle = absoluteTitle ? title : `${title} · ${dict.meta.siteName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: {
        [languageTag.es]: paths.es,
        [languageTag.en]: paths.en,
        "x-default": paths.es,
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      url: paths[locale],
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

export function pagePaths(page: keyof typeof routes): Record<Locale, string> {
  return routes[page];
}

export function servicePaths(id: ServiceId): Record<Locale, string> {
  return { es: serviceHref(id, "es"), en: serviceHref(id, "en") };
}

/* -------------------------------------------------------------------------
   Structured data (schema.org JSON-LD)
   ------------------------------------------------------------------------- */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

export function organizationGraph(locale: Locale) {
  const dict = getDictionary(locale);
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.name,
        url: absolute("/"),
        logo: absolute("/icons/icon-512.png"),
        image: absolute(`/og/${locale}/home.jpg`),
        description: dict.meta.description,
        slogan: locale === "es" ? "Tu evento, en buenas manos." : "Your event, in expert hands.",
        email: `mailto:${emailFor(locale)}`,
        ...(site.whatsapp ? { telephone: `+${site.whatsapp}` } : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.location.latitude,
          longitude: site.location.longitude,
        },
        areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
        knowsLanguage: ["es", "en"],
        founder: { "@id": FOUNDER_ID },
        ...(sameAs.length ? { sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.nav.services,
          itemListElement: serviceIds.map((id) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: dict.services[id].name,
              url: absolute(serviceHref(id, locale)),
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: site.founder,
        jobTitle: locale === "es" ? "Fundador y director" : "Founder & Director",
        worksFor: { "@id": ORG_ID },
        image: absolute("/images/portrait-480.webp"),
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: absolute("/"),
        name: site.name,
        inLanguage: [languageTag.es, languageTag.en],
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqGraph(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceGraph(id: ServiceId, locale: Locale) {
  const dict = getDictionary(locale);
  const s = dict.services[id];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolute(serviceHref(id, locale))}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.what,
    url: absolute(serviceHref(id, locale)),
    provider: { "@id": ORG_ID },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    inLanguage: languageTag[locale],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: plain(dict.servicePage.includedTitle),
      itemListElement: s.deliverables.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    category: dict.pillars[services[id].pillar].name,
  };
}
