import "./globals.css";
import type { Metadata } from "next";
import Link from "@/components/ui/intent-link";
import { Logo } from "@/components/brand/monogram";
import { getDictionary } from "@/content/dictionaries";
import { routes } from "@/lib/i18n";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "404 · AF Marketing",
  description: "Página no encontrada · Page not found",
};

/**
 * Bilingual 404 (the visitor's language is unknown at this point).
 * Bypasses the root layouts, so it renders its own minimal chrome.
 */
export default function GlobalNotFound() {
  const es = getDictionary("es");
  const en = getDictionary("en");
  return (
    <html lang="es-MX" className={fontVariables}>
      <body className="theme-dark">
        <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
          <div className="container-af flex h-[var(--header-h)] items-center">
            <Link href={routes.home.es} aria-label="AF Marketing">
              <Logo />
            </Link>
          </div>
          <div className="container-af flex flex-1 flex-col justify-center py-16">
            <p className="mono-label text-volt">Error 404</p>
            <h1 className="mt-6 font-display text-display-lg text-white">
              Este escenario
              <br />
              <em className="display-accent">está vacío.</em>
            </h1>
            <p lang="en" className="mt-6 font-accent text-[clamp(1.5rem,1.2rem+1vw,2.2rem)] text-ink-300">
              This stage is empty.
            </p>
            <p className="lead mt-8 max-w-xl">
              La página que buscas no existe o cambió de dirección. <span lang="en">The page you are looking for doesn&apos;t exist or has moved.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={routes.home.es} className="btn btn-primary btn-lg">
                <span>Ir al inicio</span>
              </Link>
              <Link href={routes.services.es} className="btn btn-secondary btn-lg">
                <span>{es.nav.services}</span>
              </Link>
              <Link href={routes.home.en} lang="en" className="btn btn-secondary btn-lg">
                <span>English site</span>
              </Link>
              <Link href={routes.contact.en} lang="en" className="btn btn-secondary btn-lg">
                <span>{en.nav.contact}</span>
              </Link>
            </div>
          </div>
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 330"
            className="pointer-events-none absolute -bottom-[2%] right-0 -z-10 w-[92vw] select-none"
          >
            <text x="1000" y="320" textAnchor="end" className="fill-ink-900 font-display" style={{ fontSize: 400 }}>
              404
            </text>
          </svg>
        </main>
      </body>
    </html>
  );
}
