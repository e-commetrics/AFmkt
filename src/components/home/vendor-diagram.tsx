"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Mode = "before" | "after";

interface DiagramProps {
  labels: {
    label: string;
    toggleLabel: string;
    before: { label: string; caption: string };
    after: { label: string; caption: string };
    you: string;
    vendors: string[];
  };
}

const W = 600;
const H = 440;
const HUB = { x: 372, y: 220 };
const YOU_AFTER = { x: 78, y: 220 };
const YOU_BEFORE = { x: 300, y: 222 };
const RING = 152;

// Deliberately messy positions for the "separate vendors" scenario.
const SCATTER = [
  { x: 118, y: 86 },
  { x: 452, y: 64 },
  { x: 528, y: 236 },
  { x: 440, y: 378 },
  { x: 168, y: 368 },
  { x: 86, y: 232 },
  { x: 296, y: 58 },
];
const TANGLES: [number, number][] = [
  [0, 2],
  [1, 4],
  [3, 5],
  [6, 3],
  [0, 6],
];

const ringPoint = (i: number, n: number) => {
  const a = (-90 + (360 / n) * i) * (Math.PI / 180);
  return { x: +(HUB.x + RING * Math.cos(a)).toFixed(1), y: +(HUB.y + RING * Math.sin(a)).toFixed(1) };
};

/**
 * Interactive comparison for the value proposition: seven vendors tangled
 * around "you", then reorganized around a single AF hub.
 */
export function VendorDiagram({ labels }: DiagramProps) {
  const [mode, setMode] = useState<Mode>("before");
  const touched = useRef(false);
  const root = useRef<HTMLDivElement>(null);

  // Plays the reorganization once, when the diagram scrolls into view.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          if (!touched.current) setMode("after");
        }, reduced ? 0 : 1100);
      },
      { threshold: 0.55 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const choose = (next: Mode) => {
    touched.current = true;
    setMode(next);
  };

  const after = mode === "after";
  const n = labels.vendors.length;
  const you = after ? YOU_AFTER : YOU_BEFORE;
  const caption = after ? labels.after.caption : labels.before.caption;

  return (
    <div ref={root} className="theme-dark card overflow-hidden p-3 sm:p-6" data-mode={mode}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label={labels.toggleLabel} className="flex w-full rounded-full border border-line p-1 sm:inline-flex sm:w-auto">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => choose(m)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium leading-tight transition-colors duration-300 sm:flex-none ${
                mode === m ? "bg-volt text-ink-950" : "text-ink-300 hover:text-white"
              }`}
            >
              {labels[m].label}
            </button>
          ))}
        </div>
        <span className="mono-label hidden text-fg-subtle sm:inline">{after ? "1 × AF" : `${n} × ?`}</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="vendor-diagram mt-4 w-full" role="img" aria-label={`${labels.label}. ${caption}`}>
        {/* Before: every vendor talks to you, and to each other. */}
        <g className="vd-lines vd-lines-before" opacity={after ? 0 : 1}>
          {SCATTER.map((p, i) => (
            <line key={`b${i}`} x1={p.x} y1={p.y} x2={YOU_BEFORE.x} y2={YOU_BEFORE.y} className="vd-tangle" />
          ))}
          {TANGLES.map(([a, b]) => (
            <line
              key={`t${a}${b}`}
              x1={SCATTER[a].x}
              y1={SCATTER[a].y}
              x2={SCATTER[b].x}
              y2={SCATTER[b].y}
              className="vd-tangle vd-tangle-faint"
            />
          ))}
        </g>

        {/* After: vendors orbit a single hub; you hold one line. */}
        <g className="vd-lines vd-lines-after" opacity={after ? 1 : 0}>
          <circle cx={HUB.x} cy={HUB.y} r={RING} className="vd-orbit" />
          {labels.vendors.map((_, i) => {
            const p = ringPoint(i, n);
            return (
              <line
                key={`a${i}`}
                x1={HUB.x}
                y1={HUB.y}
                x2={p.x}
                y2={p.y}
                pathLength={1}
                className="vd-spoke"
                style={{ "--d": 500 + i * 60 } as CSSProperties}
              />
            );
          })}
          <line
            x1={YOU_AFTER.x}
            y1={YOU_AFTER.y}
            x2={HUB.x}
            y2={HUB.y}
            pathLength={1}
            className="vd-main"
            style={{ "--d": 450 } as CSSProperties}
          />
        </g>

        {/* Hub */}
        <g className="vd-hub" style={{ transform: `translate(${HUB.x}px, ${HUB.y}px) scale(${after ? 1 : 0})` }}>
          <circle r={50} className="vd-hub-pulse" />
          <circle r={40} fill="var(--color-volt)" />
          <text y={7} textAnchor="middle" className="vd-hub-text">
            AF
          </text>
        </g>

        {/* Vendors */}
        {labels.vendors.map((name, i) => {
          const p = after ? ringPoint(i, n) : SCATTER[i];
          const w = Math.max(72, name.length * 9.6 + 34);
          return (
            <g
              key={name}
              className="vd-node"
              style={{ transform: `translate(${p.x}px, ${p.y}px)`, transitionDelay: `${after ? 120 + i * 40 : i * 30}ms` }}
            >
              <rect x={-w / 2} y={-19} width={w} height={38} rx={19} className={after ? "vd-pill vd-pill-on" : "vd-pill"} />
              <text y={5.5} textAnchor="middle" className="vd-label">
                {name}
              </text>
            </g>
          );
        })}

        {/* You */}
        <g className="vd-node" style={{ transform: `translate(${you.x}px, ${you.y}px)` }}>
          <circle r={34} className={after ? "vd-you vd-you-calm" : "vd-you"} />
          <text y={6} textAnchor="middle" className="vd-you-text">
            {labels.you}
          </text>
        </g>
      </svg>

      <p aria-live="polite" className="mono-label mt-2 text-center text-ink-300">
        {caption}
      </p>
    </div>
  );
}
