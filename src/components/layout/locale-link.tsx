"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { alternatePath, type Locale } from "@/lib/i18n";

/**
 * Link to the current page in the other language. A plain <a>: the two
 * languages use separate root layouts, so this is a full page load anyway.
 */
export function LocaleLink({
  target,
  className,
  label,
  children,
}: {
  target: Locale;
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <a href={alternatePath(pathname, target)} hrefLang={target} lang={target} aria-label={label} className={className}>
      {children}
    </a>
  );
}
