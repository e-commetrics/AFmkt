import { Plus } from "./icons";

/** Native <details> accordion: zero JS, animated where the browser supports it. */
export function FaqList({ items, name }: { items: { q: string; a: string }[]; name: string }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} name={name} className="faq-item border-b border-line">
          <summary className="flex items-center justify-between gap-6 py-6 text-left text-[1.125rem] font-semibold leading-snug tracking-tight transition-colors hover:text-accent sm:text-title">
            <span>{item.q}</span>
            <span className="faq-icon grid size-10 shrink-0 place-items-center rounded-full border border-line-strong">
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 text-fg-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
