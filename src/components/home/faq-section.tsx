import Link from "@/components/ui/intent-link";
import { Accent } from "@/components/ui/accent";
import { FaqList } from "@/components/ui/faq-list";
import { ArrowRight } from "@/components/ui/icons";
import { getDictionary } from "@/content/dictionaries";
import { href, type Locale } from "@/lib/i18n";

export function FaqSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const f = t.home.faq;

  return (
    <section id={t.anchors.faq} aria-labelledby="faq-title" className="theme-paper section-y relative border-t border-line">
      <div className="container-af grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <p className="eyebrow mb-6" data-reveal>
              {f.eyebrow}
            </p>
            <h2 id="faq-title" className="font-display text-display-md" data-reveal>
              <Accent text={f.title} />
            </h2>
            <p className="lead mt-6" data-reveal>
              {f.intro}
            </p>
            <p className="mt-8 text-fg-muted" data-reveal>
              {f.contactPrompt}{" "}
              <Link href={href("contact", locale)} className="link-arrow">
                {f.contactLink}
                <ArrowRight />
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:col-span-8" data-reveal>
          <FaqList items={f.items} name="faq-home" />
        </div>
      </div>
    </section>
  );
}
