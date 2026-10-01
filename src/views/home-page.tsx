import { pending } from "@/content/pending";
import { AboutTeaser } from "@/components/home/about-teaser";
import { CaseStudies } from "@/components/home/case-studies";
import { Difference } from "@/components/home/difference";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ServicesSection } from "@/components/home/services-section";
import { StaffBand } from "@/components/home/staff-band";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { ValueProp } from "@/components/home/value-prop";
import { PageTransition } from "@/components/layout/page-transition";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { faqGraph, pageMetadata, pagePaths } from "@/lib/seo";

export function homeMetadata(locale: Locale) {
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    title: t.meta.defaultTitle,
    description: t.meta.description,
    paths: pagePaths("home"),
    og: "home",
    absoluteTitle: true,
  });
}

/**
 * Narrative order: promise → proof → problem → offer → difference →
 * evidence → method → results → voices → people → objections → action.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <PageTransition>
      <Hero locale={locale} />
      <TrustBand locale={locale} />
      <ValueProp locale={locale} />
      <ServicesSection locale={locale} />
      <Difference locale={locale} />
      <StaffBand locale={locale} />
      <Process locale={locale} />
      {!pending.caseStudies && <CaseStudies locale={locale} />}
      {!pending.testimonials && <Testimonials locale={locale} />}
      <AboutTeaser locale={locale} />
      <FaqSection locale={locale} />
      <FinalCta locale={locale} />
      <JsonLd data={faqGraph(t.home.faq.items)} />
    </PageTransition>
  );
}
