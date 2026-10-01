import { Accent } from "@/components/ui/accent";
import { Photo } from "@/components/ui/photo";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

/** Full-bleed photo moment: proof of AF's own uniformed staff. */
export function StaffBand({ locale }: { locale: Locale }) {
  const b = getDictionary(locale).home.staffBand;

  return (
    <section aria-labelledby="staff-title" className="theme-dark relative pt-20 lg:pt-24">
      <div className="container-af grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6" data-reveal>
            {b.eyebrow}
          </p>
          <h2 id="staff-title" className="font-display text-display-lg text-white" data-reveal>
            <Accent text={b.title} />
          </h2>
        </div>
        <p className="lead lg:col-span-4 lg:col-start-9" data-reveal>
          {b.body}
        </p>
      </div>

      <figure className="relative">
        <div data-reveal="clip">
          <div className="duotone grain relative h-[62svh] min-h-[22rem] overflow-hidden lg:h-[78svh]">
            <Photo
              name="staffWide"
              alt={b.alt}
              sizes="100vw"
              className="parallax absolute inset-0"
              position="50% 35%"
            />
          </div>
        </div>
        <figcaption className="container-af mono-label flex justify-between gap-6 py-5 text-fg-subtle">
          <span>{b.caption}</span>
          <span aria-hidden="true">AF / STAFF</span>
        </figcaption>
      </figure>
    </section>
  );
}
