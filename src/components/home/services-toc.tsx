"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  number: string;
  name: string;
}

/** Sticky index for the services list; highlights the module in view. */
export function ServicesToc({ items, label }: { items: TocItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(`svc-${item.id}`))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id.replace("svc-", ""));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label={label}>
      <p className="mono-label mb-4 text-fg-subtle">{label}</p>
      <ol className="border-l border-line">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#svc-${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`relative -ml-px flex items-baseline gap-4 border-l-2 py-2.5 pl-5 transition-colors duration-300 ${
                  on ? "border-volt text-white" : "border-transparent text-fg-subtle hover:text-ink-200"
                }`}
              >
                <span className={`mono-label ${on ? "text-volt" : ""}`}>{item.number}</span>
                <span className="text-[0.975rem]">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
