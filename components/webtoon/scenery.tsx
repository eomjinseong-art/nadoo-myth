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

function Forest({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-forest`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5e4f6" />
          <stop offset="45%" stopColor="#d7ecb8" />
          <stop offset="100%" stopColor="#8fb56e" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-forest)`} />
      {[[40, 250], [110, 220], [250, 230], [320, 260]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 6} y={y} width="12" height="150" fill="#6b5344" />
          <circle cx={x} cy={y} r="36" fill="#5f8f4e" />
          <circle cx={x - 16} cy={y + 10} r="22" fill="#7ea86a" />
        </g>
      ))}
      <ellipse cx="180" cy="470" rx="200" ry="40" fill="#7ea35a" />
    </g>
  );
}

function Night({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-night`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2744" />
          <stop offset="70%" stopColor="#31486a" />
          <stop offset="100%" stopColor="#6a5a48" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-night)`} />
      <circle cx="78" cy="70" r="18" fill="#f6e7c1" />
      {[[40, 40], [120, 90], [180, 36], [240, 80], [300, 48], [330, 110]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#fff6d4" />
      ))}
      <path d="M20 300 H80 V250 H140 V300 H220 V230 H300 V300 H340 V460 H20 Z" fill="#2a2438" />
      <rect y="430" width="360" height="50" fill="#3a3228" />
    </g>
  );
}

function Labyrinth({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-maze`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e7c4" />
          <stop offset="100%" stopColor="#e7d3a8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-maze)`} />
      <g stroke="#c4a574" strokeWidth="10" fill="none">
        <path d="M20 40 H340 V200 H60 V120 H260 V160" />
        <path d="M20 240 H200 V320 H80 V400 H340" />
        <path d="M240 240 H340 V400" />
      </g>
      <rect y="440" width="360" height="40" fill="#e2cfa4" />
    </g>
  );
}

function River({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-river`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7ecf6" />
          <stop offset="55%" stopColor="#c5e4c0" />
          <stop offset="100%" stopColor="#7eb4d8" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-river)`} />
      <path d="M0 300 Q80 260 160 310 T360 280 V480 H0 Z" fill="#7eb4d8" />
      <path d="M0 330 Q100 300 180 340 T360 320" fill="none" stroke="#f7f4ee" strokeWidth="3" opacity="0.7" />
      <ellipse cx="70" cy="250" rx="40" ry="16" fill="#9fc57e" />
      <ellipse cx="300" cy="240" rx="50" ry="18" fill="#b7d39a" />
    </g>
  );
}

function Underworld({ uid }: { uid: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-under`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241c33" />
          <stop offset="100%" stopColor="#3a3050" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill={`url(#${uid}-under)`} />
      <ellipse cx="180" cy="470" rx="180" ry="50" fill="#4a4060" />
      {[40, 100, 180, 250, 320].map((x) => (
        <rect key={x} x={x} y="360" width="16" height="80" fill="#2a2438" />
      ))}
      <circle cx="300" cy="60" r="10" fill="#f0d36a" opacity="0.7" />
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
    case "forest":
      return <Forest uid={uid} />;
    case "night":
      return <Night uid={uid} />;
    case "labyrinth":
      return <Labyrinth uid={uid} />;
    case "river":
      return <River uid={uid} />;
    case "underworld":
      return <Underworld uid={uid} />;
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

function Fennel() {
  return (
    <g>
      <path d="M0 20 V-16" stroke="#7ea86a" strokeWidth="4" strokeLinecap="round" />
      <path d="M0 -16 Q-8 -28 0 -36 Q8 -28 0 -16" fill="#e07a32" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function Eagle() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="16" ry="10" fill="#6a5344" stroke={INK} strokeWidth="1.4" />
      <path d="M-8 0 Q-28 -16 -18 6" fill="#8a7058" stroke={INK} strokeWidth="1.2" />
      <path d="M8 0 Q28 -16 18 6" fill="#8a7058" stroke={INK} strokeWidth="1.2" />
      <circle cx="10" cy="-2" r="6" fill="#c4a574" stroke={INK} />
      <path d="M14 -2 L22 -4" stroke="#e6c36a" strokeWidth="1.6" />
      <circle cx="12" cy="-3" r="1" fill={INK} />
    </g>
  );
}

function Chains() {
  return (
    <g fill="none" stroke="#8a9096" strokeWidth="3">
      <ellipse cx="-16" cy="0" rx="8" ry="6" />
      <ellipse cx="0" cy="0" rx="8" ry="6" />
      <ellipse cx="16" cy="0" rx="8" ry="6" />
    </g>
  );
}

function WoodenHorse() {
  return (
    <g fill="#c4894a" stroke={INK} strokeWidth="1.8">
      <rect x="-34" y="-8" width="68" height="36" rx="4" />
      <path d="M18 -8 Q34 -36 28 -8" />
      <rect x="-28" y="28" width="6" height="16" />
      <rect x="-8" y="28" width="6" height="16" />
      <rect x="10" y="28" width="6" height="16" />
      <rect x="24" y="28" width="6" height="16" />
      <circle cx="30" cy="-24" r="3" fill="#3a3228" />
    </g>
  );
}

function Sheep() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="28" ry="16" fill="#f7f4ee" stroke={INK} strokeWidth="1.6" />
      <circle cx="22" cy="-2" r="8" fill="#f7f4ee" stroke={INK} />
      <circle cx="24" cy="-3" r="1.2" fill={INK} />
      <path d="M-16 16 V26 M-4 18 V28 M8 16 V26" stroke="#3a3228" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Wine() {
  return (
    <g>
      <path d="M-10 0 Q-12 16 0 18 Q12 16 10 0 Z" fill="#6a2a6a" stroke={INK} strokeWidth="1.4" />
      <path d="M0 18 V28" stroke={INK} strokeWidth="1.6" />
      <path d="M-8 28 H8" stroke={INK} strokeWidth="1.6" />
    </g>
  );
}

function Deer() {
  return (
    <g fill="#e0b15a" stroke={INK} strokeWidth="1.4">
      <ellipse cx="0" cy="6" rx="22" ry="12" />
      <circle cx="18" cy="-4" r="7" />
      <path d="M14 -10 L10 -22 M18 -10 L22 -22" stroke="#c4a574" fill="none" />
      <circle cx="20" cy="-5" r="1" fill={INK} stroke="none" />
    </g>
  );
}

function Boar() {
  return (
    <g fill="#c47b8a" stroke={INK} strokeWidth="1.4">
      <ellipse cx="0" cy="4" rx="24" ry="14" />
      <circle cx="20" cy="-2" r="8" />
      <path d="M24 2 L30 6" stroke="#f7f4ee" strokeWidth="2" />
      <circle cx="22" cy="-4" r="1" fill={INK} stroke="none" />
    </g>
  );
}

function Bull() {
  return (
    <g fill="#d7d0c8" stroke={INK} strokeWidth="1.4">
      <ellipse cx="0" cy="6" rx="26" ry="14" />
      <circle cx="20" cy="-2" r="9" />
      <path d="M12 -8 Q8 -18 16 -10 M24 -8 Q30 -18 22 -10" fill="#e6c98a" />
      <circle cx="23" cy="-2" r="1.2" fill={INK} stroke="none" />
    </g>
  );
}

function Mare() {
  return (
    <g fill="#8a6232" stroke={INK} strokeWidth="1.4">
      <ellipse cx="0" cy="4" rx="26" ry="12" />
      <path d="M20 0 Q34 -16 24 8" />
      <circle cx="28" cy="-8" r="1" fill={INK} stroke="none" />
      <path d="M-16 12 V22 M-4 14 V24 M10 12 V22" stroke="#3a3228" strokeWidth="3" fill="none" />
    </g>
  );
}

function Birds() {
  return (
    <g fill="none" stroke="#3a3228" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-20 0 Q-10 -8 0 0 Q10 -8 20 0" />
      <path d="M-6 -12 Q2 -18 10 -12 Q18 -18 26 -12" />
      <path d="M8 10 Q16 4 24 10 Q32 4 40 10" />
    </g>
  );
}

function Cattle() {
  return (
    <g fill="#8c2f2b" stroke={INK} strokeWidth="1.3">
      <ellipse cx="-16" cy="4" rx="16" ry="10" />
      <ellipse cx="16" cy="6" rx="16" ry="10" />
      <circle cx="-4" cy="-4" r="5" />
      <circle cx="28" cy="-2" r="5" />
    </g>
  );
}

function Apples() {
  return (
    <g>
      <circle cx="-8" cy="2" r="8" fill="#c23b4a" stroke={INK} />
      <circle cx="8" cy="0" r="8" fill="#e07a32" stroke={INK} />
      <path d="M0 -6 Q4 -14 0 -16" stroke="#3f8f4e" fill="none" strokeWidth="1.4" />
    </g>
  );
}

function Thread() {
  return (
    <g>
      <circle r="10" fill="#f7f4ee" stroke={INK} strokeWidth="1.4" />
      <path d="M8 4 Q24 10 18 28" stroke="#c23b4a" strokeWidth="1.6" fill="none" />
    </g>
  );
}

function Sail() {
  return (
    <g>
      <path d="M0 24 V-28" stroke="#6b5344" strokeWidth="3" />
      <path d="M2 -24 L28 0 L2 8 Z" fill="#1f3b57" stroke={INK} strokeWidth="1.3" />
    </g>
  );
}

function SunDisc() {
  return (
    <g>
      <circle r="16" fill="#f2d36a" stroke={INK} strokeWidth="1.4" />
      {[0, 45, 90, 135].map((deg) => (
        <path key={deg} d="M0 -20 V-28" stroke="#f0d36a" strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg})`} />
      ))}
    </g>
  );
}

function Pond() {
  return (
    <g>
      <ellipse rx="54" ry="22" fill="#7eb4d8" stroke="#1f6f8a" strokeWidth="1.6" />
      <ellipse cy="-2" rx="16" ry="8" fill="#f6d0b4" opacity="0.85" />
      <circle cx="-6" cy="-4" r="1.2" fill={INK} />
      <circle cx="2" cy="-4" r="1.2" fill={INK} />
      <path d="M-4 0 Q-2 2 0 0" stroke={INK} fill="none" />
    </g>
  );
}

function NarcissusFlower() {
  return (
    <g>
      <circle r="8" fill="#fff" stroke={INK} />
      <circle r="3" fill="#f0d36a" />
      <path d="M0 8 V22" stroke="#3f8f4e" strokeWidth="1.6" />
    </g>
  );
}

function GoldBread() {
  return (
    <g>
      <ellipse rx="16" ry="8" fill="#f0d36a" stroke={INK} strokeWidth="1.4" />
      <path d="M-8 -1 H8" stroke="#b8923a" strokeWidth="1" />
    </g>
  );
}

function Reeds() {
  return (
    <g stroke="#7ea86a" strokeWidth="2" fill="none">
      <path d="M-10 16 V-16" />
      <path d="M0 18 V-20" />
      <path d="M10 16 V-12" />
      <circle cy="-18" r="3" fill="#c5e4c0" />
    </g>
  );
}

function Splash() {
  return (
    <g fill="#d7f1f8" stroke="#1f6f8a" strokeWidth="1.4">
      <ellipse cy="8" rx="28" ry="8" />
      <path d="M-8 6 Q-4 -18 0 6 Q4 -14 8 6" />
    </g>
  );
}

function Feathers() {
  return (
    <g fill="#fbfaf6" stroke={INK} strokeWidth="1.2">
      <ellipse cx="-10" cy="0" rx="4" ry="10" transform="rotate(-20)" />
      <ellipse cx="4" cy="6" rx="3" ry="8" transform="rotate(15)" />
      <ellipse cx="14" cy="-4" rx="3" ry="9" transform="rotate(30)" />
    </g>
  );
}

function Rattle() {
  return (
    <g>
      <circle cy="-6" r="8" fill="#e6c36a" stroke={INK} strokeWidth="1.3" />
      <path d="M0 2 V16" stroke="#8a5a32" strokeWidth="2" />
    </g>
  );
}

function Belt() {
  return (
    <g>
      <rect x="-18" y="-6" width="36" height="12" rx="3" fill="#f0d36a" stroke={INK} strokeWidth="1.4" />
      <circle r="3" fill="#8c2f2b" />
    </g>
  );
}

function Pillars() {
  return (
    <g fill="#e7d3a8" stroke={INK} strokeWidth="1.3">
      <rect x="-28" y="-20" width="10" height="40" />
      <rect x="8" y="-20" width="10" height="40" />
      <rect x="-34" y="-26" width="58" height="8" />
    </g>
  );
}

function SkyOrb() {
  return (
    <g>
      <circle r="22" fill="#7eb4d8" stroke={INK} strokeWidth="1.4" />
      <circle cx="-6" cy="-4" r="6" fill="#fff" opacity="0.8" />
      <path d="M8 6 Q14 2 12 10" fill="#d7ecb8" />
    </g>
  );
}

function Torch() {
  return (
    <g>
      <rect x="-2" y="0" width="4" height="18" fill="#8a5a32" />
      <path d="M0 0 Q-6 -10 0 -16 Q6 -10 0 0" fill="#e07a32" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function Geryon() {
  return (
    <g>
      {[ -22, 0, 22 ].map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <circle cy="-8" r="10" fill="#e8b892" stroke={INK} strokeWidth="1.2" />
          <circle cx="-3" cy="-9" r="1" fill={INK} />
          <circle cx="3" cy="-9" r="1" fill={INK} />
          <path d="M-8 6 H8 V18 H-8 Z" fill="#5c6a78" stroke={INK} />
        </g>
      ))}
    </g>
  );
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
    case "fennel":
      return <Fennel />;
    case "eagle":
      return <Eagle />;
    case "chains":
      return <Chains />;
    case "wooden-horse":
      return <WoodenHorse />;
    case "sheep":
      return <Sheep />;
    case "wine":
      return <Wine />;
    case "deer":
      return <Deer />;
    case "boar":
      return <Boar />;
    case "bull":
      return <Bull />;
    case "mare":
      return <Mare />;
    case "birds":
      return <Birds />;
    case "cattle":
      return <Cattle />;
    case "apples":
      return <Apples />;
    case "thread":
      return <Thread />;
    case "sail":
      return <Sail />;
    case "sun":
      return <SunDisc />;
    case "pond":
      return <Pond />;
    case "narcissus":
      return <NarcissusFlower />;
    case "gold-bread":
      return <GoldBread />;
    case "reeds":
      return <Reeds />;
    case "splash":
      return <Splash />;
    case "feathers":
      return <Feathers />;
    case "rattle":
      return <Rattle />;
    case "belt":
      return <Belt />;
    case "pillars":
      return <Pillars />;
    case "sky-orb":
      return <SkyOrb />;
    case "torch":
      return <Torch />;
    case "geryon":
      return <Geryon />;
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
