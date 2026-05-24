"use client";

import { useId } from "react";

/*
  8-spoke spider web logo — 120×120 viewBox
  Cross-threads are true circular arcs (real spider web geometry).
  The draw-in animation loops forever on an 8-second cycle.

  Center: (60, 60)
  Spokes: 8 × 45° starting from top
  Rings:  r = 9, 18, 27, 36, 45

  Spoke outer endpoints (r=45, sin45°=cos45°=0.7071):
    k0 (0°)   → (60,    15)
    k1 (45°)  → (91.8,  28.2)
    k2 (90°)  → (105,   60)
    k3 (135°) → (91.8,  91.8)
    k4 (180°) → (60,   105)
    k5 (225°) → (28.2,  91.8)
    k6 (270°) → (15,    60)
    k7 (315°) → (28.2,  28.2)
*/

export default function LogoHero({ size }: { size?: number | string }) {
  const uid = useId().replace(/:/g, "x");
  const dotGlowId = `lhdg-${uid}`;
  const svgSize = size ?? "100%";

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id={dotGlowId} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        @keyframes lh-draw {
          0%   { stroke-dashoffset: 300; }
          22%  { stroke-dashoffset: 0; }
          68%  { stroke-dashoffset: 0; }
          70%  { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 300; }
        }
        @keyframes lh-pulse {
          0%, 100% { opacity: 0.65; }
          50%       { opacity: 1.00; }
        }
        @keyframes lh-pulse-c {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1.00; }
        }
        .lh-s {
          stroke: #0e9e8a; stroke-width: 1.0; stroke-linecap: round;
          stroke-dasharray: 300; stroke-dashoffset: 300;
          animation: lh-draw 8s linear infinite;
        }
        .lh-r {
          stroke: #0e9e8a; stroke-linecap: round; fill: none;
          stroke-dasharray: 300; stroke-dashoffset: 300;
          animation: lh-draw 8s linear infinite;
        }
        .lh-dot  { fill: #1a6b4a; animation: lh-pulse   2.8s ease-in-out infinite; }
        .lh-dotm { fill: #1a6b4a; opacity: 0.55; animation: lh-pulse 2.8s ease-in-out infinite; }
        .lh-dotc { fill: #1a6b4a; animation: lh-pulse-c 2.8s ease-in-out infinite; }
      `}</style>

      {/* ── 8 spokes: center (60,60) → outer ring (r=45) ── */}
      <line x1="60" y1="60" x2="60"  y2="15"  className="lh-s" style={{animationDelay:"0s"}}    />
      <line x1="60" y1="60" x2="91.8" y2="28.2" className="lh-s" style={{animationDelay:"0.1s"}}  />
      <line x1="60" y1="60" x2="105" y2="60"  className="lh-s" style={{animationDelay:"0.2s"}}  />
      <line x1="60" y1="60" x2="91.8" y2="91.8" className="lh-s" style={{animationDelay:"0.3s"}}  />
      <line x1="60" y1="60" x2="60"  y2="105" className="lh-s" style={{animationDelay:"0.4s"}}  />
      <line x1="60" y1="60" x2="28.2" y2="91.8" className="lh-s" style={{animationDelay:"0.5s"}}  />
      <line x1="60" y1="60" x2="15"  y2="60"  className="lh-s" style={{animationDelay:"0.6s"}}  />
      <line x1="60" y1="60" x2="28.2" y2="28.2" className="lh-s" style={{animationDelay:"0.7s"}}  />

      {/*
        ── Ring 1 — r=9 (innermost) ──
        Nodes: (60,51) (66.4,53.6) (69,60) (66.4,66.4) (60,69) (53.6,66.4) (51,60) (53.6,53.6)
        Each arc spans 45° of a circle of radius 9 centered at (60,60), swept clockwise.
      */}
      <path
        d="M 60 51
           A 9 9 0 0 1 66.4 53.6 A 9 9 0 0 1 69 60
           A 9 9 0 0 1 66.4 66.4 A 9 9 0 0 1 60 69
           A 9 9 0 0 1 53.6 66.4 A 9 9 0 0 1 51 60
           A 9 9 0 0 1 53.6 53.6 A 9 9 0 0 1 60 51"
        className="lh-r" strokeWidth="0.85"
        style={{animationDelay:"1.0s"}}
      />

      {/*
        ── Ring 2 — r=18 ──
        Nodes: (60,42) (72.7,47.3) (78,60) (72.7,72.7) (60,78) (47.3,72.7) (42,60) (47.3,47.3)
      */}
      <path
        d="M 60 42
           A 18 18 0 0 1 72.7 47.3 A 18 18 0 0 1 78 60
           A 18 18 0 0 1 72.7 72.7 A 18 18 0 0 1 60 78
           A 18 18 0 0 1 47.3 72.7 A 18 18 0 0 1 42 60
           A 18 18 0 0 1 47.3 47.3 A 18 18 0 0 1 60 42"
        className="lh-r" strokeWidth="0.95"
        style={{animationDelay:"1.35s"}}
      />

      {/*
        ── Ring 3 — r=27 ──
        Nodes: (60,33) (79.1,40.9) (87,60) (79.1,79.1) (60,87) (40.9,79.1) (33,60) (40.9,40.9)
      */}
      <path
        d="M 60 33
           A 27 27 0 0 1 79.1 40.9 A 27 27 0 0 1 87 60
           A 27 27 0 0 1 79.1 79.1 A 27 27 0 0 1 60 87
           A 27 27 0 0 1 40.9 79.1 A 27 27 0 0 1 33 60
           A 27 27 0 0 1 40.9 40.9 A 27 27 0 0 1 60 33"
        className="lh-r" strokeWidth="1.05"
        style={{animationDelay:"1.7s"}}
      />

      {/*
        ── Ring 4 — r=36 ──
        Nodes: (60,24) (85.5,34.5) (96,60) (85.5,85.5) (60,96) (34.5,85.5) (24,60) (34.5,34.5)
      */}
      <path
        d="M 60 24
           A 36 36 0 0 1 85.5 34.5 A 36 36 0 0 1 96 60
           A 36 36 0 0 1 85.5 85.5 A 36 36 0 0 1 60 96
           A 36 36 0 0 1 34.5 85.5 A 36 36 0 0 1 24 60
           A 36 36 0 0 1 34.5 34.5 A 36 36 0 0 1 60 24"
        className="lh-r" strokeWidth="1.1"
        style={{animationDelay:"2.05s"}}
      />

      {/*
        ── Ring 5 — r=45 (outermost) ──
        Nodes: (60,15) (91.8,28.2) (105,60) (91.8,91.8) (60,105) (28.2,91.8) (15,60) (28.2,28.2)
      */}
      <path
        d="M 60 15
           A 45 45 0 0 1 91.8 28.2 A 45 45 0 0 1 105 60
           A 45 45 0 0 1 91.8 91.8 A 45 45 0 0 1 60 105
           A 45 45 0 0 1 28.2 91.8 A 45 45 0 0 1 15 60
           A 45 45 0 0 1 28.2 28.2 A 45 45 0 0 1 60 15"
        className="lh-r" strokeWidth="1.15"
        style={{animationDelay:"2.4s"}}
      />

      {/* ── Dots ── */}

      {/* r=9 intersections — tiny, very subtle */}
      <g>
        {([
          [60,51],[66.4,53.6],[69,60],[66.4,66.4],
          [60,69],[53.6,66.4],[51,60],[53.6,53.6],
        ] as [number,number][]).map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.0" className="lh-dotm"
            style={{animationDelay:`${i*0.25}s`}} />
        ))}
      </g>

      {/* r=18 intersections */}
      <g>
        {([
          [60,42],[72.7,47.3],[78,60],[72.7,72.7],
          [60,78],[47.3,72.7],[42,60],[47.3,47.3],
        ] as [number,number][]).map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.4" className="lh-dotm"
            style={{animationDelay:`${i*0.25+0.2}s`}} />
        ))}
      </g>

      {/* r=27 intersections */}
      <g>
        {([
          [60,33],[79.1,40.9],[87,60],[79.1,79.1],
          [60,87],[40.9,79.1],[33,60],[40.9,40.9],
        ] as [number,number][]).map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.7" className="lh-dotm"
            style={{animationDelay:`${i*0.25+0.4}s`}} />
        ))}
      </g>

      {/* r=36 intersections */}
      <g filter={`url(#${dotGlowId})`}>
        {([
          [60,24],[85.5,34.5],[96,60],[85.5,85.5],
          [60,96],[34.5,85.5],[24,60],[34.5,34.5],
        ] as [number,number][]).map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.2" className="lh-dot"
            style={{animationDelay:`${i*0.3+0.5}s`}} />
        ))}
      </g>

      {/* r=45 intersections — outermost, most prominent, glowing */}
      <g filter={`url(#${dotGlowId})`}>
        {([
          [60,15],[91.8,28.2],[105,60],[91.8,91.8],
          [60,105],[28.2,91.8],[15,60],[28.2,28.2],
        ] as [number,number][]).map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.0" className="lh-dot"
            style={{animationDelay:`${i*0.35+0.6}s`}} />
        ))}
      </g>

      {/* Center — largest glow */}
      <g filter={`url(#${dotGlowId})`}>
        <circle cx="60" cy="60" r="3.8" className="lh-dotc" />
      </g>
    </svg>
  );
}
