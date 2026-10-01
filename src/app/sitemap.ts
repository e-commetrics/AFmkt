import type { MetadataRoute } from "next";
import { serviceIds } from "@/content/services";
import { languageTag, locales, routes, serviceHref, type Locale, type PageKey } from "@/lib/i18n";
import { absolute } from "@/lib/seo";

export const dynamic = "force-static";

const priority: Record<PageKey, number> = { home: 1, services: 0.9, contact: 0.8, about: 0.7, privacy: 0.2 };

/** Every page in both languages, each listing its translation (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pairs: { paths: Record<Locale, string>; priority: number }[] = [
    ...(Object.keys(routes) as PageKey[]).map((key) => ({ paths: routes[key], priority: priority[key] })),
    ...serviceIds.map((id) => ({ paths: { es: serviceHref(id, "es"), en: serviceHref(id, "en") }, priority: 0.8 })),
  ];

  return pairs.flatMap(({ paths, priority }) =>
    locales.map((locale) => ({
      url: absolute(paths[locale]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? priority : Math.round(priority * 90) / 100,
      alternates: {
        languages: {
          [languageTag.es]: absolute(paths.es),
          [languageTag.en]: absolute(paths.en),
          "x-default": absolute(paths.es),
        },
      },
    })),
  );
}
