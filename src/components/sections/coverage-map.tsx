import type { CSSProperties } from "react";

/**
 * Stylized coverage map. Real coordinates, equirectangular projection
 * corrected for latitude (~32.5° N), so distances read true to scale.
 */
const BOUNDS = { west: -117.25, east: -115.3, north: 32.85, south: 31.75 };
const SX = 410; // px per degree of longitude
const SY = SX * (111 / 94); // px per degree of latitude at this latitude
const W = (BOUNDS.east - BOUNDS.west) * SX;
const H = (BOUNDS.north - BOUNDS.south) * SY;

const project = (lat: number, lon: number) =>
  [+((lon - BOUNDS.west) * SX).toFixed(1), +((BOUNDS.north - lat) * SY).toFixed(1)] as const;

const CITIES = [
  { name: "Tijuana", lat: 32.5149, lon: -117.0382, base: true, anchor: "start" as const, dx: 18, dy: 7 },
  { name: "San Diego", lat: 32.7157, lon: -117.1611, anchor: "start" as const, dx: 12, dy: -8 },
  { name: "Rosarito", lat: 32.3661, lon: -117.0618, anchor: "start" as const, dx: 12, dy: 5 },
  { name: "Tecate", lat: 32.565, lon: -116.627, anchor: "start" as const, dx: 12, dy: 18 },
  { name: "Mexicali", lat: 32.6245, lon: -115.4523, anchor: "end" as const, dx: -12, dy: 22 },
  { name: "Valle de Guadalupe", lat: 32.0904, lon: -116.5726, anchor: "start" as const, dx: 12, dy: 5 },
  { name: "Ensenada", lat: 31.8667, lon: -116.5964, anchor: "start" as const, dx: 12, dy: 5 },
];

const COAST: [number, number][] = [
  [32.85, -117.27],
  [32.75, -117.24],
  [32.62, -117.15],
  [32.53, -117.12],
  [32.35, -117.08],
  [32.25, -117.03],
  [32.09, -116.88],
  [31.89, -116.7],
  [31.85, -116.62],
  [31.75, -116.65],
];

// The western US–Mexico border is a straight line from the Pacific to the Colorado River.
const BORDER: [number, number][] = [
  [32.5343, -117.1236],
  [32.6742, -115.3],
];

export function CoverageMap({ label, baseLabel, borderLabel }: { label: string; baseLabel: string; borderLabel: string }) {
  const [tx, ty] = project(CITIES[0].lat, CITIES[0].lon);
  const coast = COAST.map(([lat, lon]) => project(lat, lon).join(",")).join(" ");
  const [b1, b2] = BORDER.map(([lat, lon]) => project(lat, lon));

  return (
    <svg viewBox={`-20 -10 ${W + 40} ${H + 20}`} role="img" aria-label={label} className="coverage-map h-auto w-full">
      <defs>
        <pattern id="sea" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="var(--color-ink-600)" />
        </pattern>
      </defs>
      {/* Pacific */}
      <polygon points={`-20,-10 ${coast} -20,${H + 10}`} fill="url(#sea)" opacity="0.6" />
      <polyline points={coast} fill="none" stroke="var(--color-ink-500)" strokeWidth="1.5" />
      {/* Border */}
      <line x1={b1[0]} y1={b1[1]} x2={b2[0]} y2={b2[1]} stroke="var(--color-ink-400)" strokeWidth="1.25" strokeDasharray="6 6" />
      <text x={b2[0] - 6} y={b2[1] - 12} textAnchor="end" className="coverage-small">
        {borderLabel}
      </text>

      {/* Routes from the Tijuana base */}
      {CITIES.slice(1).map((c, i) => {
        const [x, y] = project(c.lat, c.lon);
        return (
          <line
            key={c.name}
            x1={tx}
            y1={ty}
            x2={x}
            y2={y}
            pathLength={1}
            className="coverage-route"
            style={{ "--d": 200 + i * 120 } as CSSProperties}
          />
        );
      })}

      {CITIES.map((c) => {
        const [x, y] = project(c.lat, c.lon);
        return (
          <g key={c.name} transform={`translate(${x} ${y})`}>
            {c.base && <circle r="22" className="coverage-pulse" />}
            <circle r={c.base ? 8 : 5} fill={c.base ? "var(--color-volt)" : "var(--color-ink-100)"} />
            <text x={c.dx} y={c.dy} textAnchor={c.anchor} className={c.base ? "coverage-label coverage-base" : "coverage-label"}>
              {c.name}
            </text>
            {c.base && (
              <text x={c.dx} y={c.dy + 24} className="coverage-small coverage-base-tag">
                {baseLabel.toUpperCase()}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
