import { PrivacyPage, privacyMetadata } from "@/views/privacy-page";

export const metadata = privacyMetadata("es");

export default function Page() {
  return <PrivacyPage locale="es" />;
}
