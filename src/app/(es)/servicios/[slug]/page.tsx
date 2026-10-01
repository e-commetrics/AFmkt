import { notFound } from "next/navigation";
import { serviceBySlug, serviceIds, services } from "@/content/services";
import { ServicePage, serviceMetadata } from "@/views/service-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceIds.map((id) => ({ slug: services[id].slug.es }));
}

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug, "es");
  return service ? serviceMetadata(service.id, "es") : {};
}

export default async function Page({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug, "es");
  if (!service) notFound();
  return <ServicePage id={service.id} locale="es" />;
}
