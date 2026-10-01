import { ServicesPage, servicesMetadata } from "@/views/services-page";

export const metadata = servicesMetadata("es");

export default function Page() {
  return <ServicesPage locale="es" />;
}
