import { notFound } from "next/navigation";
import { serviceBySlug, serviceIds, services } from "@/content/services";
import { ServicePage, serviceMetadata } from "@/views/service-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceIds.map((id) => ({ slug: services[id].slug.en }));
}

export async function generateMetadata({ params }: PageProps<"/en/services/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug, "en");
  return service ? serviceMetadata(service.id, "en") : {};
}

export default async function Page({ params }: PageProps<"/en/services/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug, "en");
  if (!service) notFound();
  return <ServicePage id={service.id} locale="en" />;
}
