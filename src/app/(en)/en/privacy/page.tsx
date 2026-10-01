import { PrivacyPage, privacyMetadata } from "@/views/privacy-page";

export const metadata = privacyMetadata("en");

export default function Page() {
  return <PrivacyPage locale="en" />;
}
