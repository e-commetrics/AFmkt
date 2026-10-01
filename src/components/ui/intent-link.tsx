"use client";

import Link from "next/link";
import { useState, type ComponentProps } from "react";

/**
 * <Link> that prefetches on intent (hover, focus or touch) instead of on
 * entering the viewport. Keeps navigation instant while sparing mobile data:
 * long pages no longer download every linked route up front.
 */
export default function IntentLink({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof Link>) {
  const [active, setActive] = useState(false);
  const arm = () => setActive(true);
  return (
    <Link
      {...props}
      prefetch={active ? (prefetch ?? null) : false}
      onMouseEnter={(e) => {
        arm();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        arm();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        arm();
        onTouchStart?.(e);
      }}
    />
  );
}
