import "../../globals.css";
import { LocaleShell, rootMetadata, rootViewport } from "@/components/layout/locale-shell";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
