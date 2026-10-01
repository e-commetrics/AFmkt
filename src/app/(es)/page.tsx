import { HomePage, homeMetadata } from "@/views/home-page";

export const metadata = homeMetadata("es");

export default function Page() {
  return <HomePage locale="es" />;
}
