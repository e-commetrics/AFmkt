"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/monogram";
import { ArrowRight, ArrowUpRight, ChevronDown, Close, Mail, Menu, WhatsApp } from "@/components/ui/icons";
import { alternatePath, type Locale } from "@/lib/i18n";

export interface HeaderService {
  id: string;
  number: string;
  name: string;
  short: string;
  href: string;
}

export interface HeaderProps {
  locale: Locale;
  labels: {
    services: string;
    work: string;
    about: string;
    contact: string;
    mainLabel: string;
    servicesMenu: string;
    viewAll: string;
    primaryCta: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    switchLocale: string;
    switchLocaleLabel: string;
    home: string;
  };
  links: { home: string; services: string; work: string; about: string; contact: string };
  pillars: { id: string; name: string; tagline: string; items: HeaderService[] }[];
  contact: { email: string; whatsappHref: string | null; whatsappLabel: string };
}

export function SiteHeader({ locale, labels, links, pillars, contact }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const megaButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close overlays whenever the route changes (adjusting state during render).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const switchHref = alternatePath(pathname, otherLocale);

  // Smart sticky: solid after a few px, hides on scroll down, returns on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - lastY) > 8) {
        const within = headerRef.current?.contains(document.activeElement) ?? false;
        setHidden(y > lastY && y > 480 && !within);
        lastY = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, make the page inert, trap focus, Escape to close.
  useEffect(() => {
    if (!menuOpen) return;
    const page = ["main", "site-footer"].map((id) => document.getElementById(id));
    page.forEach((el) => el?.setAttribute("inert", ""));
    document.documentElement.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const toggle = toggleRef.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusables = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).concat(toggle ? [toggle] : []);
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      page.forEach((el) => el?.removeAttribute("inert"));
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // Services panel: Escape or a click outside closes it.
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaButtonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [megaOpen]);

  const openMega = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);
  const closeMegaSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 160);
  }, []);

  const solid = scrolled || megaOpen || menuOpen;
  const isActive = (href: string) => href !== links.home && pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out"
      style={{
        viewTransitionName: "site-header",
        transform: hidden && !menuOpen && !megaOpen ? "translateY(-100%)" : "none",
      }}
    >
      <div
        className={`theme-dark border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid
            ? "border-line bg-ink-950/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent !bg-transparent"
        }`}
      >
        <div className="container-af flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href={links.home} className="relative z-10 -m-2 p-2" aria-label={`AF Marketing — ${labels.home}`}>
            <Logo />
          </Link>

          <nav aria-label={labels.mainLabel} className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[0.9375rem]">
              <li className="relative flex items-center" onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                <Link
                  href={links.services}
                  className={`rounded-full py-2 pl-4 pr-1 transition-colors hover:text-white ${
                    isActive(links.services) ? "text-white" : "text-ink-200"
                  }`}
                  aria-current={pathname === links.services ? "page" : undefined}
                >
                  {labels.services}
                </Link>
                <button
                  ref={megaButtonRef}
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="services-panel"
                  aria-label={labels.servicesMenu}
                  onClick={() => setMegaOpen((v) => !v)}
                  className="grid size-8 place-items-center rounded-full text-ink-300 transition-colors hover:text-white"
                >
                  <ChevronDown className={`size-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                </button>
              </li>
              {[
                [links.work, labels.work],
                [links.about, labels.about],
                [links.contact, labels.contact],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-full px-4 py-2 transition-colors hover:text-white ${
                      isActive(href) ? "text-white" : "text-ink-200"
                    }`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={labels.switchLocaleLabel}
              className="mono-label hidden rounded-full border border-line-strong px-3 py-2 text-ink-200 transition-colors hover:border-ink-200 hover:text-white sm:inline-flex"
            >
              {otherLocale.toUpperCase()}
            </a>
            <Link href={links.contact} className="btn btn-primary btn-sm hidden sm:inline-flex">
              <span>{labels.primaryCta}</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="relative z-10 -mr-2 inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-white lg:hidden"
            >
              <span className="mono-label">{menuOpen ? labels.closeMenu.split(" ")[0] : labels.menu}</span>
              <span className="sr-only">{menuOpen ? labels.closeMenu : labels.openMenu}</span>
              {menuOpen ? <Close className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop services panel */}
      <div
        id="services-panel"
        hidden={!megaOpen}
        onMouseEnter={openMega}
        onMouseLeave={closeMegaSoon}
        className="theme-dark absolute inset-x-0 top-full hidden border-b border-line bg-ink-950/95 backdrop-blur-xl lg:block"
      >
        <div className="container-af grid grid-cols-12 gap-8 py-10">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="col-span-3">
              <p className="eyebrow mb-1">{pillar.name}</p>
              <p className="mb-5 text-sm text-fg-subtle">{pillar.tagline}</p>
              <ul className="space-y-1">
                {pillar.items.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={s.href}
                      className="group -mx-3 block rounded-[var(--radius-sm)] px-3 py-2.5 transition-colors hover:bg-ink-850"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="mono-label text-fg-subtle group-hover:text-volt">{s.number}</span>
                        <span className="font-medium text-white">{s.name}</span>
                      </span>
                      <span className="mt-1 block pl-8 text-sm leading-snug text-fg-subtle">{s.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-3">
            <Link
              href={links.services}
              className="group flex h-full flex-col justify-between rounded-[var(--radius-md)] border border-line bg-ink-900 p-6 transition-colors hover:border-volt/60"
            >
              <span className="font-display text-display-sm text-white">{labels.viewAll}</span>
              <span className="mt-8 inline-flex size-12 items-center justify-center rounded-full bg-volt text-ink-950 transition-transform duration-500 group-hover:translate-x-1">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label={labels.menu}
        hidden={!menuOpen}
        className="theme-dark fixed inset-0 top-[var(--header-h)] h-[calc(100dvh-var(--header-h))] overflow-y-auto bg-ink-950 lg:hidden"
      >
        <div className="container-af flex min-h-full flex-col pb-10 pt-6">
          <nav aria-label={labels.mainLabel}>
            <ul className="divide-y divide-line border-y border-line">
              {[
                [links.services, labels.services],
                [links.work, labels.work],
                [links.about, labels.about],
                [links.contact, labels.contact],
              ].map(([href, label], i) => (
                <li key={href} className="fade-in" style={{ "--d": 60 + i * 50 } as React.CSSProperties}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-[2rem] leading-none text-white"
                  >
                    {label}
                    <ArrowRight className="size-6 text-volt" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {pillars.flatMap((p) => p.items).map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-3 py-1 text-ink-200"
                >
                  <span className="mono-label text-fg-subtle">{s.number}</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 pt-10">
            <Link
              href={links.contact}
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary btn-lg w-full"
            >
              <span>{labels.primaryCta}</span>
              <ArrowRight className="btn-icon" />
            </Link>
            {contact.whatsappHref && (
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg w-full">
                <WhatsApp className="btn-icon" />
                <span>{contact.whatsappLabel}</span>
              </a>
            )}
            <div className="flex items-center justify-between gap-4 pt-4 text-sm text-ink-300">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all">
                <Mail className="size-4 shrink-0 text-volt" />
                {contact.email}
              </a>
              <a
                href={switchHref}
                hrefLang={otherLocale}
                lang={otherLocale}
                className="mono-label inline-flex items-center gap-1 rounded-full border border-line-strong px-3 py-2 text-ink-200"
              >
                {labels.switchLocale}
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
