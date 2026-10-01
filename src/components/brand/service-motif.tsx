import type { CSSProperties } from "react";
import type { ServiceId } from "@/content/services";

/**
 * One line-art illustration per discipline, drawn in brand volt on ink.
 * Paths with `data-draw` animate in when the motif (or a parent) is revealed.
 */
export function ServiceMotif({ id, className = "" }: { id: ServiceId; className?: string }) {
  const Motif = motifs[id];
  return (
    <svg
      viewBox="0 0 240 240"
      className={`motif ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <Motif />
    </svg>
  );
}

const d = (ms: number) => ({ "--d": ms }) as CSSProperties;
const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) =>
  [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))].map((n) => +n.toFixed(2)) as [number, number];

function Stage() {
  const crowd = Array.from({ length: 14 }, (_, i) => [40 + i * 12.3, i % 2 ? 212 : 205] as const);
  return (
    <>
      <path d="M36 44h168v12H36z" data-draw pathLength={1} />
      <path
        d="M36 56 48 44l12 12 12-12 12 12 12-12 12 12 12-12 12 12 12-12 12 12 12-12 12 12 12-12"
        data-draw
        pathLength={1}
        style={d(200)}
        opacity="0.6"
      />
      <path d="M42 56v120M198 56v120" data-draw pathLength={1} style={d(300)} />
      <path d="M80 66 54 176h52z" className="acc motif-beam" style={d(0)} />
      <path d="M160 66 134 176h52z" className="acc motif-beam" style={d(900)} />
      <path d="M120 66 98 176h44z" className="acc motif-beam motif-beam-strong" style={d(450)} />
      {[80, 120, 160].map((x) => (
        <circle key={x} cx={x} cy={62} r={4} className="acc-fill" stroke="none" />
      ))}
      <path d="M22 176h196M36 176v12h168v-12" data-draw pathLength={1} style={d(500)} />
      {crowd.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.4} fill="currentColor" stroke="none" opacity={0.7} />
      ))}
    </>
  );
}

function Ripples() {
  const dots = Array.from({ length: 10 }, (_, i) => pt(120, 120, 92, i * 36 - 90));
  return (
    <>
      {[24, 48, 72].map((r, i) => (
        <circle key={r} cx={120} cy={120} r={r} data-draw pathLength={1} style={d(i * 180)} opacity={0.75 - i * 0.15} />
      ))}
      <circle cx={120} cy={120} r={92} strokeDasharray="2 6" opacity={0.6} />
      <circle cx={120} cy={120} r={24} className="acc motif-ripple" />
      <circle cx={120} cy={120} r={24} className="acc motif-ripple" style={d(1400)} />
      <circle cx={120} cy={120} r={6} className="acc-fill" stroke="none" />
      {dots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 5 : 3.2}
          className={i % 3 === 0 ? "acc-fill" : ""}
          fill={i % 3 === 0 ? undefined : "currentColor"}
          stroke="none"
        />
      ))}
      <path d="M186 40l8-8M198 54h12M176 28V16" className="acc" />
    </>
  );
}

function Route() {
  const grid = [];
  for (let x = 0; x < 6; x++) for (let y = 0; y < 6; y++) grid.push([40 + x * 32, 40 + y * 32]);
  const route = "M40 40H104V104H168V168H200V200";
  return (
    <>
      {grid.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.8} fill="currentColor" stroke="none" opacity={0.65} />
      ))}
      <path d="M40 200H72V136H136V72H200" strokeDasharray="3 6" opacity={0.55} />
      <path d={route} className="acc" strokeWidth={2.25} data-draw pathLength={1} />
      <rect x={34} y={34} width={12} height={12} className="acc" strokeWidth={2} />
      <circle cx={200} cy={200} r={6} className="acc-fill" stroke="none" />
      <circle cx={200} cy={200} r={13} className="acc" opacity={0.5} />
      {[
        [104, 40],
        [104, 104],
        [168, 104],
        [168, 168],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width={8} height={8} fill="var(--canvas)" className="acc" />
      ))}
      <circle r={4.5} className="acc-fill motif-packet" stroke="none">
        <animateMotion dur="5s" repeatCount="indefinite" path={route} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
      </circle>
    </>
  );
}

function Broadcast() {
  const arcs = [46, 72, 98].map((r) => {
    const [x1, y1] = pt(78, 108, r, -50);
    const [x2, y2] = pt(78, 108, r, 50);
    return `M${x1} ${y1}A${r} ${r} 0 0 1 ${x2} ${y2}`;
  });
  const outlets = [-40, -20, 0, 20, 40].map((a) => pt(78, 108, 128, a));
  return (
    <>
      <rect x={60} y={74} width={36} height={62} rx={18} data-draw pathLength={1} />
      <path d="M67 92h22M67 102h22M67 112h22" opacity={0.6} />
      <path d="M50 110a28 28 0 0 0 56 0M78 138v34M60 172h36" data-draw pathLength={1} style={d(250)} />
      {arcs.map((a, i) => (
        <path key={a} d={a} className="acc motif-wave" strokeWidth={2} style={d(i * 280)} />
      ))}
      {outlets.map(([x, y], i) => (
        <rect
          key={i}
          x={x - 6}
          y={y - 4.5}
          width={12}
          height={9}
          rx={1.5}
          className={i % 2 === 0 ? "acc-fill" : ""}
          fill={i % 2 === 0 ? undefined : "currentColor"}
          stroke="none"
          opacity={i % 2 === 0 ? 1 : 0.7}
        />
      ))}
    </>
  );
}

function Feed() {
  const points = [
    [26, 196],
    [68, 176],
    [104, 160],
    [136, 124],
    [168, 102],
    [212, 52],
  ];
  return (
    <>
      <rect x={70} y={26} width={100} height={188} rx={18} data-draw pathLength={1} />
      <path d="M108 38h24" opacity={0.6} />
      {[54, 104, 154].map((y, i) => (
        <g key={y} opacity={0.75 - i * 0.18}>
          <rect x={82} y={y} width={76} height={42} rx={7} />
          <path d={`M90 ${y + 30}h34M90 ${y + 22}h52`} opacity={0.6} />
        </g>
      ))}
      <polyline
        points={points.map((p) => p.join(",")).join(" ")}
        className="acc"
        strokeWidth={2.25}
        data-draw
        pathLength={1}
        style={d(300)}
      />
      <path d="M196 50l16 2-4 16" className="acc" strokeWidth={2.25} />
      {points.slice(1, -1).map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={4} className="acc-fill" stroke="none" />
      ))}
    </>
  );
}

function Bond() {
  return (
    <>
      <g className="motif-link-left">
        <circle cx={94} cy={120} r={58} data-draw pathLength={1} />
        <path d="M60 120h18M69 111v18" opacity={0.7} />
      </g>
      <g className="motif-link-right">
        <circle cx={146} cy={120} r={58} className="acc" data-draw pathLength={1} style={d(250)} />
        <path d="m176 112 4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" className="acc" strokeWidth={1.25} />
      </g>
      <path d="M120 68.2A58 58 0 0 1 120 171.8A58 58 0 0 1 120 68.2Z" className="acc-fill" stroke="none" opacity={0.16} />
      <circle cx={120} cy={120} r={5} className="acc-fill" stroke="none" />
      <path d="M120 30v20M120 190v20" strokeDasharray="2 5" opacity={0.6} />
    </>
  );
}

function Aperture() {
  const blades = Array.from({ length: 6 }, (_, i) => {
    const [x1, y1] = pt(120, 120, 17, i * 60);
    const [x2, y2] = pt(120, 120, 44, i * 60 + 78);
    return `M${x1} ${y1}L${x2} ${y2}`;
  });
  const orbit = "M24 120a96 38 0 1 0 192 0a96 38 0 1 0 -192 0";
  return (
    <>
      <path d="M30 54V30h24M186 30h24v24M210 186v24h-24M54 210H30v-24" className="acc" strokeWidth={2} />
      <circle cx={120} cy={120} r={44} data-draw pathLength={1} />
      {blades.map((b, i) => (
        <path key={i} d={b} data-draw pathLength={1} style={d(200 + i * 60)} />
      ))}
      <g transform="rotate(-16 120 120)">
        <path d={orbit} strokeDasharray="2 6" opacity={0.65} />
        <g className="motif-packet">
          <g>
            <animateMotion dur="9s" repeatCount="indefinite" path={orbit} rotate="0" />
            <g transform="rotate(16)">
              <path d="M-8 -8 8 8M8 -8-8 8" className="acc" strokeWidth={1.75} />
              {[
                [-8, -8],
                [8, 8],
                [8, -8],
                [-8, 8],
              ].map(([x, y]) => (
                <circle key={`${x}${y}`} cx={x} cy={y} r={3.6} className="acc" strokeWidth={1.25} fill="var(--canvas)" />
              ))}
              <rect x={-3} y={-3} width={6} height={6} className="acc-fill" stroke="none" />
            </g>
          </g>
        </g>
      </g>
    </>
  );
}

const motifs: Record<ServiceId, () => React.JSX.Element> = {
  events: Stage,
  activations: Ripples,
  logistics: Route,
  pr: Broadcast,
  digital: Feed,
  sponsorship: Bond,
  creative: Aperture,
};
