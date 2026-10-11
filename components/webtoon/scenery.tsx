import type { BgName, PropKind } from "@/data/webtoon/types";

const INK = "#3a3228";

function CloudShape({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke="#eadfc8" strokeWidth="1">
      <ellipse cx="0" cy="8" rx="34" ry="14" />
      <ellipse cx="-20" cy="2" rx="16" ry="12" />
      <ellipse cx="18" cy="0" rx="18" ry="13" />
    </g>
  );
}

function Olympus({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7eb4d8" />
          <stop offset="55%" stopColor="#f6e7c1" />
          <stop offset="100%" stopColor="#f4e2b4" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-sky)`} />
      <circle cx="292" cy="64" r="26" fill="#fff6d4" />
      <CloudShape x={78} y={110} />
      <CloudShape x={240} y={150} s={0.75} />
      <rect x="22" y="300" width="16" height="160" fill="#f7f4ee" opacity="0.45" />
      <rect x="322" y="270" width="16" height="190" fill="#f7f4ee" opacity="0.45" />
      <ellipse cx="80" cy="455" rx="100" ry="36" fill="#fff" />
      <ellipse cx="200" cy="470" rx="150" ry="40" fill="#fff" />
      <ellipse cx="300" cy="458" rx="90" ry="32" fill="#fff" />
    </g>
  );
}

function Forge({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-forge`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3028" />
          <stop offset="100%" stopColor="#2a1c18" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-forge)`} />
      <circle cx="180" cy="300" r="90" fill="#e07a32" opacity="0.28" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={16 + i * 56} y="360" width="48" height="22" fill="#6a4034" stroke="#3a241c" />
      ))}
      <rect y="420" width="360" height="60" fill="#3a241c" />
    </g>
  );
}

function Meadow({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-meadow`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5e4f6" />
          <stop offset="62%" stopColor="#e7f4ea" />
          <stop offset="100%" stopColor="#d7ecb8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-meadow)`} />
      <circle cx="300" cy="70" r="28" fill="#fff3c4" />
      <ellipse cx="90" cy="430" rx="140" ry="70" fill="#b7d39a" />
      <ellipse cx="260" cy="450" rx="170" ry="80" fill="#9fc57e" />
      <ellipse cx="180" cy="480" rx="200" ry="50" fill="#8fb56e" />
      {[[40, 400], [80, 420], [300, 390], [330, 430], [150, 410]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y} V${y - 14}`} stroke="#3f8f4e" strokeWidth="1.4" />
          <circle cx={x - 3} cy={y - 16} r="3" fill="#e56b8a" />
          <circle cx={x + 3} cy={y - 14} r="2.4" fill="#f2d36a" />
        </g>
      ))}
    </g>
  );
}

function Palace({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-palace`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d5e7f4" />
          <stop offset="45%" stopColor="#f7f1e6" />
          <stop offset="100%" stopColor="#e7dcc8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-palace)`} />
      {[28, 166, 304].map((x) => (
        <g key={x}>
          <rect x={x} y="150" width="28" height="250" fill="#f7f4ee" stroke="#e6dfd0" />
          <path d={`M${x - 8} 150 H${x + 36} L${x + 14} 128 Z`} fill="#f0d36a" stroke={INK} strokeWidth="1" />
        </g>
      ))}
      <rect y="400" width="360" height="80" fill="#efe4d2" />
      <path d="M0 400 H360" stroke="#e6c36a" strokeWidth="3" />
    </g>
  );
}

function Chamber({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-bronze`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#c4924e" />
          <stop offset="100%" stopColor="#6a4524" />
        </radialGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-bronze)`} />
      <rect x="150" y="36" width="60" height="18" rx="4" fill="#f6e7b0" opacity="0.85" />
      <rect y="400" width="360" height="80" fill="#5c3a22" />
    </g>
  );
}

function Sea({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7eef8" />
          <stop offset="42%" stopColor="#9fd0e6" />
          <stop offset="100%" stopColor="#2f7f9e" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-sea)`} />
      <path d="M0 250 Q40 230 80 250 T160 250 T240 250 T320 250 T400 250 V480 H0 Z" fill="#3d8eb5" opacity="0.85" />
      <path d="M0 300 Q50 280 100 300 T200 300 T300 300 T400 300" fill="none" stroke="#d5f0f8" strokeWidth="3" />
      <path d="M0 340 Q60 324 120 340 T240 340 T360 340" fill="none" stroke="#eaf8fc" strokeWidth="2" />
    </g>
  );
}

function Cave({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-cave`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2340" />
          <stop offset="100%" stopColor="#16121f" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-cave)`} />
      {[30, 80, 140, 200, 250, 310].map((x, i) => (
        <polygon key={x} points={`${x},0 ${x + 14},${40 + (i % 3) * 16} ${x - 10},0`} fill="#3a3350" />
      ))}
      <circle cx="48" cy="150" r="46" fill="#e7a15a" opacity="0.22" />
      <circle cx="320" cy="180" r="36" fill="#e7a15a" opacity="0.16" />
      <ellipse cx="180" cy="500" rx="230" ry="80" fill="#1a1524" />
    </g>
  );
}

function Shore({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-shore`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d5eef8" />
          <stop offset="48%" stopColor="#8ec8e0" />
          <stop offset="100%" stopColor="#efd8b0" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-shore)`} />
      <path d="M0 280 Q50 260 100 280 T200 280 T300 280 T400 280 V360 H0 Z" fill="#3d8eb5" />
      <path d="M0 360 Q80 340 160 360 T320 360 T480 360 V480 H0 Z" fill="#efd3a4" />
      <ellipse cx="180" cy="470" rx="200" ry="40" fill="#e7c48e" />
    </g>
  );
}

function Arena({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-arena`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7e6f2" />
          <stop offset="100%" stopColor="#e7d3a8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-arena)`} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={20 + i * 66} y={210 - (i % 2) * 10} width="58" height="70" rx="4" fill="#e5d7c2" stroke="#d3c4aa" />
      ))}
      <ellipse cx="180" cy="430" rx="160" ry="70" fill="#e6c98a" />
      <ellipse cx="180" cy="430" rx="120" ry="46" fill="#efd7a4" />
    </g>
  );
}

function Sky({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-skyend`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f3b57" />
          <stop offset="55%" stopColor="#7eafd0" />
          <stop offset="100%" stopColor="#f3e2b8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-skyend)`} />
      {[[40, 40], [80, 70], [140, 36], [200, 64], [260, 30], [310, 58]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#fff6d4" />
      ))}
      <ellipse cx="70" cy="450" rx="90" ry="30" fill="#fff" />
      <ellipse cx="190" cy="468" rx="140" ry="36" fill="#fff" />
      <ellipse cx="310" cy="452" rx="80" ry="28" fill="#fff" />
    </g>
  );
}

export function Background({ name, uid }: { name: BgName; uid: string }) {
  switch (name) {
    case "olympus":
      return <Olympus uid={uid} />;
    case "forge":
      return <Forge uid={uid} />;
    case "meadow":
      return <Meadow uid={uid} />;
    case "palace":
      return <Palace uid={uid} />;
    case "chamber":
      return <Chamber uid={uid} />;
    case "sea":
      return <Sea uid={uid} />;
    case "cave":
      return <Cave uid={uid} />;
    case "shore":
      return <Shore uid={uid} />;
    case "arena":
      return <Arena uid={uid} />;
    case "sky":
      return <Sky uid={uid} />;
    default: {
      const neverBg: never = name;
      throw new Error(neverBg);
    }
  }
}

function Pithos({ open }: { open?: boolean }) {
  return (
    <g>
      <path d="M-26 -70 Q-40 -30 -28 16 Q-16 42 0 46 Q16 42 28 16 Q40 -30 26 -70 Q0 -84 -26 -70" fill="#c4784a" stroke={INK} strokeWidth="2" />
      <path d="M-16 -70 L-12 -90 H12 L16 -70" fill="#a8643c" stroke={INK} strokeWidth="1.8" />
      <path d="M-20 -8 H20" stroke="#e6c36a" strokeWidth="4" />
      <path d="M-18 -8 H-10 V-16 H-2 V-8 H6 V-16 H14 V-8 H22" fill="none" stroke="#f2d36a" strokeWidth="1.8" />
      {open ? (
        <g>
          <ellipse cy="-86" rx="14" ry="5" fill="#2a211c" />
          <g transform="translate(36 -60) rotate(32)">
            <ellipse rx="16" ry="5" fill="#d7b48a" stroke={INK} strokeWidth="1.4" />
            <rect x="-3" y="-8" width="6" height="8" fill="#e6c36a" stroke={INK} strokeWidth="1" />
          </g>
        </g>
      ) : (
        <g>
          <ellipse cy="-90" rx="15" ry="5.5" fill="#d7b48a" stroke={INK} strokeWidth="1.5" />
          <rect x="-3.5" y="-100" width="7" height="10" rx="1" fill="#e6c36a" stroke={INK} strokeWidth="1" />
        </g>
      )}
    </g>
  );
}

function Evils() {
  const puffs = [
    { x: -18, y: 6, r: 16, c: "#5c5348" },
    { x: 20, y: -16, r: 14, c: "#6a5a68" },
    { x: 2, y: -40, r: 12, c: "#4e5964" },
    { x: -26, y: -28, r: 11, c: "#7a6248" },
  ];
  return (
    <g>
      {puffs.map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <circle cx={p.x} cy={p.y} r={p.r} fill={p.c} />
          <circle cx={p.x - 4} cy={p.y - 2} r="1.5" fill="#fff" />
          <circle cx={p.x + 4} cy={p.y - 2} r="1.5" fill="#fff" />
          <path d={`M${p.x - 3} ${p.y + 4} Q${p.x} ${p.y + 7} ${p.x + 3} ${p.y + 4}`} stroke="#fff" fill="none" strokeWidth="1" />
        </g>
      ))}
    </g>
  );
}

function Hope() {
  return (
    <g>
      <polygon points="0,-18 5,-6 18,-5 8,3 11,16 0,8 -11,16 -8,3 -18,-5 -5,-6" fill="#f0d36a" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
      <circle r="3.2" cy="-1" fill="#fff8df" />
      <circle cx="-1.1" cy="-1.6" r="0.5" fill={INK} />
      <circle cx="1.1" cy="-1.6" r="0.5" fill={INK} />
      <path d="M-1.2 0.6 Q0 1.8 1.2 0.6" stroke={INK} fill="none" strokeWidth="0.6" />
    </g>
  );
}

function GoldRain() {
  return (
    <g>
      {Array.from({ length: 16 }, (_, i) => {
        const x = (i % 4) * 26 - 39;
        const y = Math.floor(i / 4) * 28 - 42;
        return <ellipse key={i} cx={x} cy={y} rx="3.2" ry="7" fill="#f2d36a" stroke="#b8923a" strokeWidth="0.6" transform={`rotate(${16 + (i % 3) * 8} ${x} ${y})`} />;
      })}
    </g>
  );
}

function Poof() {
  return (
    <g fill="#fff" stroke="#e6c36a" strokeWidth="2">
      <circle r="28" />
      <circle cx="26" cy="-8" r="16" />
      <circle cx="-24" cy="-6" r="14" />
      <circle cx="8" cy="-26" r="14" />
      <circle cx="-6" cy="18" r="12" />
    </g>
  );
}

function Chest() {
  return (
    <g>
      <path d="M-80 18 Q0 46 80 18" fill="none" stroke="#d7f1f8" strokeWidth="6" />
      <rect x="-40" y="-30" width="80" height="44" rx="4" fill="#a86b3c" stroke={INK} strokeWidth="2" />
      <path d="M-40 -8 H40" stroke="#e6c36a" strokeWidth="3" />
      <rect x="-6" y="-16" width="12" height="10" rx="2" fill="#e6c36a" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function SeaEyes() {
  return (
    <g>
      <ellipse cy="10" rx="54" ry="18" fill="#1f6f8a" />
      <ellipse cy="18" rx="70" ry="10" fill="#174e64" opacity="0.65" />
      {[-16, 16].map((x) => (
        <g key={x}>
          <circle cx={x} cy="0" r="10" fill="#fff" stroke={INK} strokeWidth="1.4" />
          <circle cx={x + 1} cy="1" r="4" fill={INK} />
          <circle cx={x + 2.4} cy="-1" r="1.4" fill="#fff" />
        </g>
      ))}
    </g>
  );
}

function Rocks() {
  return (
    <g fill="#c8c2ba" stroke={INK} strokeWidth="1.4">
      <ellipse cx="-18" cy="8" rx="22" ry="14" />
      <ellipse cx="16" cy="10" rx="26" ry="16" />
      <ellipse cx="0" cy="-6" rx="16" ry="12" />
      <circle cx="-6" cy="-2" r="2" fill="#8a847c" stroke="none" />
      <circle cx="12" cy="2" r="2" fill="#8a847c" stroke="none" />
    </g>
  );
}

function Discus() {
  return <ellipse rx="18" ry="6" fill="#f0d36a" stroke={INK} strokeWidth="1.5" transform="rotate(-18)" />;
}

function Anvil() {
  return (
    <g>
      <path d="M-28 0 H28 L18 12 H-18 Z" fill="#7a8086" stroke={INK} strokeWidth="1.6" />
      <rect x="-7" y="12" width="14" height="18" fill="#5c5348" stroke={INK} strokeWidth="1.3" />
    </g>
  );
}

function SharedEye() {
  return (
    <g>
      <ellipse rx="20" ry="13" fill="#fff" stroke={INK} strokeWidth="2" />
      <circle r="6.5" fill="#3d6b8a" />
      <circle r="3.2" fill={INK} />
      <circle cx="2.2" cy="-2" r="1.4" fill="#fff" />
    </g>
  );
}

function Kibisis() {
  return (
    <g>
      <path d="M-14 0 Q-18 22 0 28 Q18 22 14 0 Z" fill="#8a6232" stroke={INK} strokeWidth="1.7" />
      <path d="M-8 0 Q0 -8 8 0" fill="none" stroke={INK} strokeWidth="1.6" />
      <circle cy="12" r="2" fill="#e6c36a" />
    </g>
  );
}

function Rock() {
  return <path d="M-36 16 Q-40 -10 0 -18 Q48 -8 40 18 Q10 28 -36 16" fill="#c4bbb2" stroke={INK} strokeWidth="1.6" />;
}

function Ribbons() {
  return (
    <g fill="none" stroke="#e6c36a" strokeWidth="2.2" strokeLinecap="round">
      <path d="M-20 -10 Q-8 8 -16 24" />
      <path d="M8 -16 Q20 4 10 22" />
    </g>
  );
}

function Ledge() {
  return <path d="M-90 6 Q-40 -16 10 -6 Q60 -20 100 0 L110 22 H-100 Z" fill="#3a3350" stroke="#2a2438" strokeWidth="1.5" />;
}

function Prop({ kind }: { kind: PropKind }) {
  switch (kind) {
    case "pithos":
      return <Pithos />;
    case "pithos-open":
      return <Pithos open />;
    case "evils":
      return <Evils />;
    case "hope":
      return <Hope />;
    case "gold-rain":
      return <GoldRain />;
    case "poof":
      return <Poof />;
    case "chest":
      return <Chest />;
    case "sea-eyes":
      return <SeaEyes />;
    case "rocks":
      return <Rocks />;
    case "discus":
      return <Discus />;
    case "anvil":
      return <Anvil />;
    case "shared-eye":
      return <SharedEye />;
    case "kibisis":
      return <Kibisis />;
    case "rock":
      return <Rock />;
    case "ribbons":
      return <Ribbons />;
    case "cloud":
      return <CloudShape x={0} y={0} />;
    case "ledge":
      return <Ledge />;
    default: {
      const neverProp: never = kind;
      throw new Error(neverProp);
    }
  }
}

export function ScenePropGraphic({ kind, x, y, scale = 1 }: { kind: PropKind; x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <Prop kind={kind} />
    </g>
  );
}
