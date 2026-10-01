/**
 * Vector redraw of the AF monogram, traced from the original logo.
 *
 * The mark is one folded ribbon: it rises as the "/" of the A, folds at the
 * apex, falls as the "\", folds again at the base and rises as the F stem.
 * Units: stroke width 46, height 230 (5 strokes).
 */
export const MONOGRAM_VIEWBOX = { width: 266, height: 230 } as const;

/** Painted back to front. The "fall" and "rise" carry a thin cut line. */
export const monogramParts = {
  /** F: stem with both arms, at the back. */
  f: "153,0 266,0 266,46 199,46 199,92 249,92 249,138 199,138 199,230 153,230",
  /** "\" — behind the "/" at the apex, in front of the stem at the base. */
  fall: "78,0 124,0 199,230 153,230",
  /** "/" — the rising leg of the A, in front at the apex. */
  rise: "0,230 46,230 124,0 78,0",
} as const;

/** Static SVG markup for scripts (favicon, OG images). */
export function monogramSvg({
  color = "#BDF23F",
  gap = "#070807",
  size = 266,
  cut = 7,
}: { color?: string; gap?: string; size?: number; cut?: number } = {}): string {
  const { width, height } = MONOGRAM_VIEWBOX;
  const p = monogramParts;
  const stroke = `stroke="${gap}" stroke-width="${cut}" paint-order="stroke" stroke-linejoin="miter"`;
  const pad = Math.ceil(cut / 2) + 1;
  const vw = width + pad * 2;
  const vh = height + pad * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${vw} ${vh}" width="${size}" height="${Math.round((size * vh) / vw)}" fill="${color}"><polygon points="${p.f}"/><polygon points="${p.fall}" ${stroke}/><polygon points="${p.rise}" ${stroke}/></svg>`;
}
