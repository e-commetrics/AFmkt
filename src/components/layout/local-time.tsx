"use client";

import { useMemo, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};
const serverSnapshot = () => null;

/** Live clock for Tijuana. Static HTML shows a placeholder until hydration. */
export function LocalTime({ timeZone, locale }: { timeZone: string; locale: string }) {
  const format = useMemo(
    () => new Intl.DateTimeFormat(locale, { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }),
    [timeZone, locale],
  );
  const time = useSyncExternalStore(subscribe, () => format.format(new Date()), serverSnapshot);
  return <time className="tabular-nums">{time ?? "--:--"}</time>;
}
