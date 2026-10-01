/**
 * Language-independent service registry: ids, URL slugs, grouping and
 * cross-links. Copy for each service lives in the dictionaries.
 */
export const serviceIds = [
  "events",
  "activations",
  "logistics",
  "pr",
  "digital",
  "sponsorship",
  "creative",
] as const;

export type ServiceId = (typeof serviceIds)[number];
export type PillarId = "produce" | "amplify" | "connect";
export type PhotoKey = "arena" | "staff" | "staffWide" | "press" | "portrait";

export interface ServiceMeta {
  id: ServiceId;
  number: string;
  pillar: PillarId;
  slug: { es: string; en: string };
  related: ServiceId[];
  photo?: PhotoKey;
}

export const services: Record<ServiceId, ServiceMeta> = {
  events: {
    id: "events",
    number: "01",
    pillar: "produce",
    slug: { es: "organizacion-de-eventos", en: "event-planning-production" },
    related: ["logistics", "pr", "sponsorship"],
    photo: "arena",
  },
  activations: {
    id: "activations",
    number: "02",
    pillar: "connect",
    slug: { es: "activaciones-de-marca", en: "brand-activations" },
    related: ["digital", "creative", "sponsorship"],
  },
  logistics: {
    id: "logistics",
    number: "03",
    pillar: "produce",
    slug: { es: "logistica-y-operacion", en: "logistics-operations" },
    related: ["events", "activations", "pr"],
    photo: "staff",
  },
  pr: {
    id: "pr",
    number: "04",
    pillar: "amplify",
    slug: { es: "relaciones-publicas-y-medios", en: "pr-media-relations" },
    related: ["digital", "creative", "events"],
    photo: "press",
  },
  digital: {
    id: "digital",
    number: "05",
    pillar: "amplify",
    slug: { es: "marketing-digital", en: "digital-marketing" },
    related: ["creative", "pr", "activations"],
  },
  sponsorship: {
    id: "sponsorship",
    number: "06",
    pillar: "connect",
    slug: { es: "patrocinios", en: "sponsorship-management" },
    related: ["activations", "events", "digital"],
  },
  creative: {
    id: "creative",
    number: "07",
    pillar: "amplify",
    slug: { es: "estudio-creativo", en: "creative-studio" },
    related: ["digital", "pr", "events"],
  },
};

export const pillarIds: PillarId[] = ["produce", "amplify", "connect"];

export function servicesInPillar(pillar: PillarId): ServiceMeta[] {
  return serviceIds.map((id) => services[id]).filter((s) => s.pillar === pillar);
}

export function serviceBySlug(slug: string, locale: "es" | "en"): ServiceMeta | undefined {
  return serviceIds.map((id) => services[id]).find((s) => s.slug[locale] === slug);
}
