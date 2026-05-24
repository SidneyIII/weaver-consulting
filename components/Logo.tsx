/*
  6-spoke spider web logo — 48×48 viewBox
  Rings drawn as true circular arcs so cross-threads curve like a real web.
  The draw-in animation loops forever on a 5-second cycle.

  Center: (24, 24)
  Spokes: 6 × 60° starting from top (k=0 at top, clockwise)
  Rings:  r = 6, 12, 18
  Spoke outer endpoints (r=18):
    k0 (0°)   → (24,   6)
    k1 (60°)  → (39.6, 15)
    k2 (120°) → (39.6, 33)
    k3 (180°) → (24,  42)
    k4 (240°) → (8.4, 33)
    k5 (300°) → (8.4, 15)
*/

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        @keyframes wc-draw {
          0%   { stroke-dashoffset: 120; }
          22%  { stroke-dashoffset: 0; }
          68%  { stroke-dashoffset: 0; }
          70%  { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 120; }
        }
        @keyframes wc-pulse {
          0%, 100% { opacity: 0.65; }
          50%       { opacity: 1.00; }
        }
        @keyframes wc-pulse-c {
          0%, 100% { opacity: 0.80; }
          50%       { opacity: 1.00; }
        }
        .wc-s {
          stroke: #0e9e8a; stroke-width: 0.8; stroke-linecap: round;
          stroke-dasharray: 120; stroke-dashoffset: 120;
          animation: wc-draw 5s linear infinite;
        }
        .wc-r {
          stroke: #0e9e8a; stroke-linecap: round; fill: none;
          stroke-dasharray: 120; stroke-dashoffset: 120;
          animation: wc-draw 5s linear infinite;
        }
        .wc-dot  { fill: #1a6b4a; filter: drop-shadow(0 0 1.8px #0e9e8a); animation: wc-pulse   2.6s ease-in-out infinite; }
        .wc-dotm { fill: #1a6b4a; opacity: 0.65; animation: wc-pulse 2.6s ease-in-out infinite; }
        .wc-dotc { fill: #1a6b4a; filter: drop-shadow(0 0 2.2px #0e9e8a); animation: wc-pulse-c 2.6s ease-in-out infinite; }
      `}</style>

      {/* 6 spokes: center (24,24) → outer ring (r=18) */}
      <line x1="24" y1="24" x2="24"  y2="6"  className="wc-s" style={{animationDelay:"0s"}}   />
      <line x1="24" y1="24" x2="39.6" y2="15" className="wc-s" style={{animationDelay:"0.08s"}} />
      <line x1="24" y1="24" x2="39.6" y2="33" className="wc-s" style={{animationDelay:"0.16s"}} />
      <line x1="24" y1="24" x2="24"  y2="42" className="wc-s" style={{animationDelay:"0.24s"}} />
      <line x1="24" y1="24" x2="8.4" y2="33" className="wc-s" style={{animationDelay:"0.32s"}} />
      <line x1="24" y1="24" x2="8.4" y2="15" className="wc-s" style={{animationDelay:"0.40s"}} />

      {/*
        Ring 1 — r=6 (innermost)
        Nodes: (24,18) (29.2,21) (29.2,27) (24,30) (18.8,27) (18.8,21)
        Each arc: 60° of a circle of radius 6 centered at (24,24), sweep clockwise.
      */}
      <path
        d="M 24 18 A 6 6 0 0 1 29.2 21 A 6 6 0 0 1 29.2 27
           A 6 6 0 0 1 24 30 A 6 6 0 0 1 18.8 27
           A 6 6 0 0 1 18.8 21 A 6 6 0 0 1 24 18"
        className="wc-r" strokeWidth="0.7"
        style={{animationDelay:"0.55s"}}
      />

      {/*
        Ring 2 — r=12
        Nodes: (24,12) (34.4,18) (34.4,30) (24,36) (13.6,30) (13.6,18)
      */}
      <path
        d="M 24 12 A 12 12 0 0 1 34.4 18 A 12 12 0 0 1 34.4 30
           A 12 12 0 0 1 24 36 A 12 12 0 0 1 13.6 30
           A 12 12 0 0 1 13.6 18 A 12 12 0 0 1 24 12"
        className="wc-r" strokeWidth="0.8"
        style={{animationDelay:"0.85s"}}
      />

      {/*
        Ring 3 — r=18 (outermost)
        Nodes: (24,6) (39.6,15) (39.6,33) (24,42) (8.4,33) (8.4,15)
      */}
      <path
        d="M 24 6 A 18 18 0 0 1 39.6 15 A 18 18 0 0 1 39.6 33
           A 18 18 0 0 1 24 42 A 18 18 0 0 1 8.4 33
           A 18 18 0 0 1 8.4 15 A 18 18 0 0 1 24 6"
        className="wc-r" strokeWidth="0.9"
        style={{animationDelay:"1.15s"}}
      />

      {/* Inner ring dots (r=6) */}
      <circle cx="24"   cy="18"  r="0.85" className="wc-dotm" style={{animationDelay:"0.0s"}} />
      <circle cx="29.2" cy="21"  r="0.85" className="wc-dotm" style={{animationDelay:"0.3s"}} />
      <circle cx="29.2" cy="27"  r="0.85" className="wc-dotm" style={{animationDelay:"0.6s"}} />
      <circle cx="24"   cy="30"  r="0.85" className="wc-dotm" style={{animationDelay:"0.9s"}} />
      <circle cx="18.8" cy="27"  r="0.85" className="wc-dotm" style={{animationDelay:"1.2s"}} />
      <circle cx="18.8" cy="21"  r="0.85" className="wc-dotm" style={{animationDelay:"1.5s"}} />

      {/* Middle ring dots (r=12) */}
      <circle cx="24"   cy="12"  r="1.1"  className="wc-dotm" style={{animationDelay:"0.1s"}} />
      <circle cx="34.4" cy="18"  r="1.1"  className="wc-dotm" style={{animationDelay:"0.4s"}} />
      <circle cx="34.4" cy="30"  r="1.1"  className="wc-dotm" style={{animationDelay:"0.7s"}} />
      <circle cx="24"   cy="36"  r="1.1"  className="wc-dotm" style={{animationDelay:"1.0s"}} />
      <circle cx="13.6" cy="30"  r="1.1"  className="wc-dotm" style={{animationDelay:"1.3s"}} />
      <circle cx="13.6" cy="18"  r="1.1"  className="wc-dotm" style={{animationDelay:"1.6s"}} />

      {/* Outer ring dots (r=18) — most prominent, glowing */}
      <circle cx="24"   cy="6"   r="1.7"  className="wc-dot"  style={{animationDelay:"0.0s"}} />
      <circle cx="39.6" cy="15"  r="1.7"  className="wc-dot"  style={{animationDelay:"0.4s"}} />
      <circle cx="39.6" cy="33"  r="1.7"  className="wc-dot"  style={{animationDelay:"0.8s"}} />
      <circle cx="24"   cy="42"  r="1.7"  className="wc-dot"  style={{animationDelay:"1.2s"}} />
      <circle cx="8.4"  cy="33"  r="1.7"  className="wc-dot"  style={{animationDelay:"1.6s"}} />
      <circle cx="8.4"  cy="15"  r="1.7"  className="wc-dot"  style={{animationDelay:"2.0s"}} />

      {/* Center node */}
      <circle cx="24" cy="24" r="2.0" className="wc-dotc" />
    </svg>
  );
}
