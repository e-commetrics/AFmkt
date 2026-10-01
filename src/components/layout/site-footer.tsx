import { pending } from "@/content/pending";
import Link from "@/components/ui/intent-link";
import { Logo } from "@/components/brand/monogram";
import { ArrowUpRight, Mail, MapPin, socialIcons, WhatsApp } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { serviceIds } from "@/content/services";
import { formatPhone, site, socialLinks, whatsappHref, emailFor } from "@/content/site";
import { homeAnchor, href, languageTag, serviceHref, type Locale } from "@/lib/i18n";
import { LocaleLink } from "./locale-link";
import { LocalTime } from "./local-time";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const wa = whatsappHref(t.common.whatsappMessage);
  const other: Locale = locale === "es" ? "en" : "es";
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="theme-dark relative overflow-hidden border-t border-line">
      <div className="container-af">
        <div className="grid gap-12 pt-16 sm:grid-cols-2 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-4">
            <Link href={href("home", locale)} aria-label={`AF Marketing — ${t.common.home}`} className="inline-block">
              <Logo />
            </Link>
            <p className="mt-6 max-w-xs text-fg-muted">
              {t.home.hero.eyebrow}. {locale === "es" ? "Tu evento, en buenas manos." : "Your event, in expert hands."}
            </p>
            <p className="mono-label mt-8 flex items-center gap-3 text-fg-subtle">
              <span className="size-1.5 rounded-full bg-volt [animation:pulse-dot_2.4s_ease-in-out_infinite]" aria-hidden="true" />
              {t.footer.localTime} · {site.location.city} <LocalTime timeZone={site.location.timeZone} locale={languageTag[locale]} />
            </p>
          </div>

          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className="mono-label mb-5 text-fg-subtle">
              {t.footer.servicesTitle}
            </h2>
            <ul className="space-y-2.5">
              {serviceIds.map((id) => (
                <li key={id}>
                  <Link href={serviceHref(id, locale)} className="link-draw text-fg-muted hover:text-white">
                    {t.services[id].navName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-agency" className="lg:col-span-2">
            <h2 id="footer-agency" className="mono-label mb-5 text-fg-subtle">
              {t.footer.agencyTitle}
            </h2>
            <ul className="space-y-2.5">
              {[
                [href("about", locale), t.footer.agencyLinks.about],
                ...(pending.caseStudies ? [] : [[homeAnchor(t.anchors.work, locale), t.footer.agencyLinks.work]]),
                [homeAnchor(t.anchors.process, locale), t.footer.agencyLinks.process],
                [homeAnchor(t.anchors.faq, locale), t.footer.agencyLinks.faq],
                [href("contact", locale), t.footer.agencyLinks.contact],
              ].map(([link, label]) => (
                <li key={link}>
                  <Link href={link} className="link-draw text-fg-muted hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="mono-label mb-5 text-fg-subtle">{t.footer.contactTitle}</h2>
            <ul className="space-y-3 text-fg-muted">
              <li>
                <a href={`mailto:${emailFor(locale)}`} className="inline-flex items-center gap-3 break-all hover:text-white">
                  <Mail className="size-4 shrink-0 text-volt" />
                  {emailFor(locale)}
                </a>
              </li>
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-white">
                    <WhatsApp className="size-4 shrink-0 text-volt" />
                    {formatPhone(site.whatsapp)}
                  </a>
                </li>
              )}
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-volt" />
                {t.footer.location}
              </li>
            </ul>
            {socialLinks.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {socialLinks.map(([key, label, url]) => {
                  const Icon = socialIcons[key];
                  return (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} ${t.common.newTab}`}
                        className="grid size-11 place-items-center rounded-full border border-line-strong text-ink-200 transition-colors hover:border-volt hover:text-volt"
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line py-8 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} AF Marketing. {t.footer.rights}{" "}
            <span className="whitespace-nowrap">
              Powered by{" "}
              <a href="https://ecommetrica.com" target="_blank" rel="noopener" className="link-draw text-fg-muted hover:text-white">
                ecommetrica.com
              </a>
            </span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href={href("privacy", locale)} className="link-draw hover:text-white">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <LocaleLink
                target={other}
                label={t.common.switchLocaleLabel}
                className="inline-flex items-center gap-1 hover:text-white"
              >
                {t.common.switchLocale}
                <ArrowUpRight className="size-3.5" />
              </LocaleLink>
            </li>
            <li>{t.footer.madeIn}</li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark, fitted edge to edge with textLength. */}
      <svg aria-hidden="true" viewBox="0 0 1000 118" className="pointer-events-none -mb-[1.2%] block w-full select-none">
        <text
          x="0"
          y="112"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="fill-ink-850 font-display"
          style={{ fontSize: 150 }}
        >
          AF MARKETING
        </text>
      </svg>
    </footer>
  );
}
