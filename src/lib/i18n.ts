import { serviceIds, services, type ServiceId } from "@/content/services";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** BCP 47 tags for <html lang> and hreflang. */
export const languageTag: Record<Locale, string> = { es: "es-MX", en: "en" };
export const ogLocale: Record<Locale, string> = { es: "es_MX", en: "en_US" };

export type PageKey = "home" | "services" | "about" | "contact" | "privacy";

/** Localized URLs. Spanish lives at the root, English under /en/. */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { es: "/", en: "/en/" },
  services: { es: "/servicios/", en: "/en/services/" },
  about: { es: "/nosotros/", en: "/en/about/" },
  contact: { es: "/contacto/", en: "/en/contact/" },
  privacy: { es: "/aviso-de-privacidad/", en: "/en/privacy/" },
};

export function href(page: PageKey, locale: Locale): string {
  return routes[page][locale];
}

export function serviceHref(id: ServiceId, locale: Locale): string {
  return `${routes.services[locale]}${services[id].slug[locale]}/`;
}

/** `#hash` links into the home page from any page. */
export function homeAnchor(anchor: string, locale: Locale): string {
  return `${routes.home[locale]}#${anchor}`;
}

/** Every pair of equivalent paths, used by the language switch and hreflang. */
const pathPairs: Array<Record<Locale, string>> = [
  ...Object.values(routes),
  ...serviceIds.map((id) => ({ es: serviceHref(id, "es"), en: serviceHref(id, "en") })),
];

export function alternatePath(pathname: string, target: Locale): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const pair of pathPairs) {
    if (pair.es === path || pair.en === path) return pair[target];
  }
  return routes.home[target];
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}
