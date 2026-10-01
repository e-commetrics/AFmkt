import { MONOGRAM_VIEWBOX, monogramParts } from "./monogram-geometry";

interface MonogramProps {
  className?: string;
  /** Accessible name; omit for decorative use. */
  title?: string;
}

/**
 * The AF monogram in currentColor. The fold cuts take the section's
 * background (`--mono-cut`) so the ribbon reads on any theme.
 */
export function Monogram({ className = "", title }: MonogramProps) {
  const { width, height } = MONOGRAM_VIEWBOX;
  return (
    <svg
      viewBox={`-4 -4 ${width + 8} ${height + 8}`}
      className={className}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <polygon points={monogramParts.f} />
      <polygon points={monogramParts.fall} className="monogram-cut" />
      <polygon points={monogramParts.rise} className="monogram-cut" />
    </svg>
  );
}

/** Horizontal lockup used in the header and footer: [AF] MARKETING. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram className="h-7 w-auto text-volt" />
      <span className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.3em] text-fg [font-stretch:125%]">
        Marketing
      </span>
    </span>
  );
}
