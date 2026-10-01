"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Stage-light effect for the hero: on fine pointers, the spotlight follows
 * the cursor (CSS variables, no re-renders). Elsewhere it drifts via CSS.
 */
export function Spotlight({ children, className = "", labelledBy }: { children: ReactNode; className?: string; labelledBy?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      el.style.setProperty("--sx", `${x}%`);
      el.style.setProperty("--sy", `${y}%`);
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x = ((e.clientX - rect.left) / rect.width) * 100;
      y = ((e.clientY - rect.top) / rect.height) * 100;
      el.classList.add("is-tracking");
      if (!frame) frame = requestAnimationFrame(apply);
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} aria-labelledby={labelledBy} className={`spotlight ${className}`}>
      {children}
    </section>
  );
}
