import "../globals.css";
import { LocaleShell, rootMetadata, rootViewport } from "@/components/layout/locale-shell";

export const metadata = rootMetadata("es");
export const viewport = rootViewport;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="es">{children}</LocaleShell>;
}
