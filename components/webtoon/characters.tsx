import type { CharId, FigStyle, Look, Pose } from "@/data/webtoon/types";

const INK = "#3a3228";

type Mood =
  | "calm"
  | "happy"
  | "angry"
  | "sad"
  | "surprised"
  | "sly"
  | "worried"
  | "curious"
  | "oops"
  | "sleepy"
  | "proud"
  | "glance";

type HairStyle = "curls" | "long" | "short" | "bun" | "snakes";

type Spec = {
  skin: string;
  blush: string;
  hair: string;
  hairStyle: HairStyle;
  beard?: "full" | "short";
  robe: string;
  trim: string;
  hem: "long" | "short";
  wide?: boolean;
  cape?: string;
  crown?: boolean;
  helmet?: boolean;
  petasos?: boolean;
  flowers?: boolean;
  wings?: boolean;
  sandals?: boolean;
  apron?: string;
  soot?: boolean;
  elder?: boolean;
  bolt?: boolean;
  feather?: boolean;
  flame?: boolean;
  hammer?: boolean;
  caduceus?: boolean;
  rose?: boolean;
  shield?: boolean;
  owl?: boolean;
  spear?: boolean;
  heroKit?: boolean;
};

const HUMAN = { footX: 80, footY: 178, head: "36 8 88 96" };

export const CHAR_FRAME: Record<CharId, { footX: number; footY: number; head: string }> = {
  zeus: HUMAN,
  hera: HUMAN,
  prometheus: HUMAN,
  epimetheus: HUMAN,
  pandora: HUMAN,
  hephaistos: HUMAN,
  hermes: HUMAN,
  athena: HUMAN,
  aphrodite: HUMAN,
  perseus: HUMAN,
  danae: HUMAN,
  polydectes: HUMAN,
  medusa: HUMAN,
  andromeda: HUMAN,
  acrisius: HUMAN,
  villager: HUMAN,
  graeae: { footX: 162, footY: 139, head: "26 4 76 80" },
  pegasus: { footX: 108, footY: 134, head: "16 6 70 62" },
};

const SPECS: Record<Exclude<CharId, "pegasus" | "graeae">, Spec> = {
  zeus: { skin: "#f3c7a6", blush: "#ef9b96", hair: "#f7f4ee", hairStyle: "curls", beard: "full", robe: "#5c3d8a", trim: "#f0d36a", hem: "long", crown: true, bolt: true },
  hera: { skin: "#f3c7a6", blush: "#ef9b96", hair: "#3a2430", hairStyle: "bun", robe: "#1e7a6d", trim: "#f0d36a", hem: "long", crown: true, feather: true },
  prometheus: { skin: "#f0c3a0", blush: "#ef9b96", hair: "#8a3e22", hairStyle: "short", beard: "short", robe: "#c46b3a", trim: "#f0d36a", hem: "short", flame: true },
  epimetheus: { skin: "#f6d0b0", blush: "#ef9b96", hair: "#e0b15a", hairStyle: "short", robe: "#f0d2a4", trim: "#e6c36a", hem: "short", wide: true },
  pandora: { skin: "#f6d0b4", blush: "#ef9b96", hair: "#3a2a32", hairStyle: "long", robe: "#fbf6ee", trim: "#e6c36a", hem: "long", flowers: true },
  hephaistos: { skin: "#e8b892", blush: "#e7a090", hair: "#4a3428", hairStyle: "short", beard: "short", robe: "#6b5344", trim: "#c4a574", hem: "short", apron: "#c4a574", hammer: true, soot: true, wide: true },
  hermes: { skin: "#f3c7a6", blush: "#ef9b96", hair: "#c47a3a", hairStyle: "short", robe: "#f4e4c4", trim: "#2f6f8f", hem: "short", petasos: true, caduceus: true, sandals: true, cape: "#2f6f8f" },
  athena: { skin: "#f3c7a6", blush: "#ef9b96", hair: "#6a4a2a", hairStyle: "bun", robe: "#f7f4ee", trim: "#e6c36a", hem: "long", helmet: true, shield: true, owl: true, spear: true },
  aphrodite: { skin: "#f6d0b4", blush: "#ef9b96", hair: "#e0b15a", hairStyle: "long", robe: "#f3b4c8", trim: "#f0d36a", hem: "long", rose: true },
  perseus: { skin: "#f0c3a0", blush: "#ef9b96", hair: "#5a3828", hairStyle: "short", robe: "#3d6b8a", trim: "#e6c36a", hem: "short", heroKit: true },
  danae: { skin: "#f6d0b4", blush: "#ef9b96", hair: "#6a4030", hairStyle: "long", robe: "#c9b4e0", trim: "#e6c36a", hem: "long" },
  polydectes: { skin: "#e8b892", blush: "#e7a090", hair: "#2b2620", hairStyle: "short", beard: "short", robe: "#7a2430", trim: "#f0d36a", hem: "long", crown: true },
  medusa: { skin: "#d5e4b4", blush: "#e7b8b0", hair: "#6f9a48", hairStyle: "snakes", robe: "#efe6c8", trim: "#e6c36a", hem: "long", wings: true },
  andromeda: { skin: "#8d5a3c", blush: "#d4897a", hair: "#2a1c16", hairStyle: "long", robe: "#f7f3ea", trim: "#e6c36a", hem: "long" },
  acrisius: { skin: "#e8c0a4", blush: "#e7a090", hair: "#f4f1ea", hairStyle: "short", beard: "full", robe: "#4d5966", trim: "#e6c36a", hem: "long", crown: true },
  villager: { skin: "#f0c3a0", blush: "#ef9b96", hair: "#5a4030", hairStyle: "short", robe: "#6e8b5a", trim: "#c4a574", hem: "short" },
};

type Arm = "down" | "up" | "point" | "offer" | "open" | "craft" | "sneak" | "shield" | "fly" | "wave";

const HANDS: Record<Arm, { l: string; lx: number; ly: number; r: string; rx: number; ry: number }> = {
  down: { l: "M58 102 Q38 124 46 146", lx: 46, ly: 146, r: "M102 102 Q122 124 114 146", rx: 114, ry: 146 },
  up: { l: "M58 102 Q40 120 48 142", lx: 48, ly: 142, r: "M102 100 Q120 72 104 52", rx: 104, ry: 52 },
  point: { l: "M58 102 Q40 120 48 142", lx: 48, ly: 142, r: "M102 104 Q130 96 156 88", rx: 156, ry: 88 },
  offer: { l: "M58 104 Q48 128 72 134", lx: 72, ly: 134, r: "M102 104 Q112 128 88 134", rx: 88, ry: 134 },
  open: { l: "M58 104 Q90 120 112 112", lx: 112, ly: 112, r: "M102 102 Q132 96 150 108", rx: 150, ry: 108 },
  craft: { l: "M58 104 Q70 130 78 140", lx: 78, ly: 140, r: "M102 104 Q96 128 88 138", rx: 88, ry: 138 },
  sneak: { l: "M58 108 Q40 130 62 148", lx: 62, ly: 148, r: "M102 108 Q120 132 100 150", rx: 100, ry: 150 },
  shield: { l: "M58 102 Q28 88 36 74", lx: 36, ly: 74, r: "M102 102 Q122 124 114 146", rx: 114, ry: 146 },
  fly: { l: "M58 102 Q24 90 18 78", lx: 18, ly: 78, r: "M102 102 Q136 90 142 78", rx: 142, ry: 78 },
  wave: { l: "M58 102 Q40 122 48 144", lx: 48, ly: 144, r: "M102 100 Q124 70 112 48", rx: 112, ry: 48 },
};

function armOf(pose: Pose): Arm {
  switch (pose) {
    case "angry":
    case "surprised":
      return "up";
    case "point":
      return "point";
    case "offer":
    case "hold":
      return "offer";
    case "open":
      return "open";
    case "craft":
      return "craft";
    case "sneak":
      return "sneak";
    case "shield":
      return "shield";
    case "fly":
      return "fly";
    case "wave":
      return "wave";
    case "idle":
    case "happy":
    case "sad":
    case "sly":
    case "worried":
    case "curious":
    case "oops":
    case "sleepy":
    case "proud":
    case "stone":
      return "down";
    default: {
      const neverPose: never = pose;
      return neverPose;
    }
  }
}

function moodOf(pose: Pose): Mood {
  switch (pose) {
    case "angry":
      return "angry";
    case "happy":
    case "wave":
      return "happy";
    case "sad":
      return "sad";
    case "surprised":
    case "stone":
      return "surprised";
    case "sly":
    case "sneak":
      return "sly";
    case "worried":
      return "worried";
    case "curious":
    case "open":
      return "curious";
    case "oops":
      return "oops";
    case "sleepy":
      return "sleepy";
    case "proud":
    case "point":
    case "fly":
      return "proud";
    case "shield":
      return "glance";
    case "hold":
    case "offer":
    case "craft":
    case "idle":
      return "calm";
    default: {
      const neverPose: never = pose;
      return neverPose;
    }
  }
}

function Limb({ d, skin }: { d: string; skin: string }) {
  return (
    <g>
      <path d={d} stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d={d} stroke={skin} strokeWidth="9" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Eyes({ mood }: { mood: Mood }) {
  if (mood === "happy") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round">
        <path d="M58 62 Q66 54 74 62" />
        <path d="M86 62 Q94 54 102 62" />
      </g>
    );
  }
  if (mood === "sleepy") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2.3" strokeLinecap="round">
        <path d="M58 64 Q66 70 74 64" />
        <path d="M86 64 Q94 70 102 64" />
      </g>
    );
  }
  const wide = mood === "surprised" || mood === "curious";
  const glance = mood === "glance" ? -2.4 : mood === "sly" ? 1.6 : 0;
  return (
    <g>
      {[66, 94].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="62" rx="6.2" ry={wide ? 8 : 6.4} fill="#fff" stroke={INK} strokeWidth="1.7" />
          <circle cx={x + glance} cy="63" r="2.7" fill={INK} />
          <circle cx={x + glance + 1.2} cy="61.4" r="1" fill="#fff" />
        </g>
      ))}
    </g>
  );
}

function Brows({ mood }: { mood: Mood }) {
  if (mood === "happy" || mood === "sleepy" || mood === "calm") return null;
  if (mood === "angry") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2.3" strokeLinecap="round">
        <path d="M56 50 L74 56" />
        <path d="M104 50 L86 56" />
      </g>
    );
  }
  if (mood === "worried" || mood === "oops" || mood === "sad") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round">
        <path d="M56 56 L74 48" />
        <path d="M104 56 L86 48" />
      </g>
    );
  }
  if (mood === "surprised" || mood === "curious") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round">
        <path d="M56 48 Q66 42 76 48" />
        <path d="M84 48 Q94 42 104 48" />
      </g>
    );
  }
  if (mood === "sly") {
    return (
      <g fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round">
        <path d="M56 54 Q66 46 76 54" />
        <path d="M86 56 L104 50" />
      </g>
    );
  }
  return (
    <g fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round">
      <path d="M56 52 L74 48" />
      <path d="M104 52 L86 48" />
    </g>
  );
}

function Mouth({ mood, y }: { mood: Mood; y: number }) {
  if (mood === "surprised" || mood === "curious") {
    return <ellipse cx="80" cy={y} rx={mood === "surprised" ? 5 : 3.4} ry={mood === "surprised" ? 6 : 4.2} fill="#6a4038" stroke={INK} strokeWidth="1.2" />;
  }
  if (mood === "sly") {
    return <path d={`M70 ${y} Q82 ${y + 5} 92 ${y - 2}`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />;
  }
  if (mood === "oops") {
    return <path d={`M70 ${y} Q76 ${y + 5} 80 ${y} Q86 ${y - 3} 92 ${y + 2}`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />;
  }
  if (mood === "sleepy") {
    return <path d={`M74 ${y} H86`} stroke={INK} strokeWidth="2" strokeLinecap="round" />;
  }
  if (mood === "angry" || mood === "sad" || mood === "worried") {
    return <path d={`M68 ${y + 3} Q80 ${y - 3} 92 ${y + 3}`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />;
  }
  return <path d={`M68 ${y} Q80 ${y + 7} 92 ${y}`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />;
}

function Face({ spec, mood }: { spec: Spec; mood: Mood }) {
  return (
    <g>
      <ellipse cx="58" cy="72" rx="7" ry="3.6" fill={spec.blush} opacity="0.7" />
      <ellipse cx="102" cy="72" rx="7" ry="3.6" fill={spec.blush} opacity="0.7" />
      <Brows mood={mood} />
      <Eyes mood={mood} />
      {spec.elder ? (
        <g fill="none" stroke={INK} strokeWidth="1.1" opacity="0.45" strokeLinecap="round">
          <path d="M56 46 H72" />
          <path d="M88 46 H104" />
        </g>
      ) : null}
      {spec.soot ? <ellipse cx="104" cy="74" rx="6" ry="3.4" fill="#4a4038" opacity="0.45" /> : null}
      {spec.beard ? null : <Mouth mood={mood} y={80} />}
      {mood === "sleepy" ? <path d="M112 34 H122 L112 44 H122" fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" /> : null}
      {mood === "oops" || mood === "worried" ? <path d="M116 48 Q120 58 116 64 Q112 58 116 48" fill="#9fd4ea" stroke={INK} strokeWidth="1" /> : null}
    </g>
  );
}

function Beard({ color, kind, mood }: { color: string; kind: "full" | "short"; mood: Mood }) {
  if (kind === "short") {
    return (
      <g>
        <path d="M62 84 Q80 112 98 84 Q80 94 62 84" fill={color} stroke={INK} strokeWidth="1.8" />
        <Mouth mood={mood} y={92} />
      </g>
    );
  }
  return (
    <g>
      <path d="M56 82 Q48 112 80 122 Q112 112 104 82 Q80 98 56 82" fill={color} stroke={INK} strokeWidth="1.8" />
      <Mouth mood={mood} y={98} />
    </g>
  );
}

function HairBack({ spec }: { spec: Spec }) {
  if (spec.hairStyle === "long") {
    return (
      <g fill="none" strokeLinecap="round">
        <path d="M54 72 C32 112 38 152 56 174" stroke={INK} strokeWidth="18" />
        <path d="M54 72 C32 112 38 152 56 174" stroke={spec.hair} strokeWidth="14" />
        <path d="M106 72 C128 112 122 152 104 174" stroke={INK} strokeWidth="18" />
        <path d="M106 72 C128 112 122 152 104 174" stroke={spec.hair} strokeWidth="14" />
      </g>
    );
  }
  if (spec.hairStyle === "curls") {
    return (
      <g>
        <circle cx="80" cy="28" r="18" fill={spec.hair} stroke={INK} strokeWidth="2" />
        <circle cx="48" cy="46" r="15" fill={spec.hair} stroke={INK} strokeWidth="2" />
        <circle cx="112" cy="46" r="15" fill={spec.hair} stroke={INK} strokeWidth="2" />
      </g>
    );
  }
  return null;
}

function Snakes() {
  const spots = [
    [46, 34, -40],
    [62, 18, -12],
    [80, 12, 0],
    [100, 18, 14],
    [116, 36, 36],
    [40, 52, -70],
    [122, 54, 70],
  ];
  return (
    <g>
      {spots.map(([x, y, rot]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rot})`}>
          <path d="M0 10 C8 4 8 -4 2 -10" stroke={INK} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M0 10 C8 4 8 -4 2 -10" stroke="#7eae52" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="-12" r="4.3" fill="#d5e4b4" stroke={INK} strokeWidth="1.2" />
          <circle cx="0.6" cy="-13" r="0.7" fill={INK} />
          <circle cx="3.3" cy="-13" r="0.7" fill={INK} />
          <path d="M0.8 -10.2 Q2 -9.2 3.2 -10.2" stroke={INK} fill="none" strokeWidth="0.7" />
        </g>
      ))}
    </g>
  );
}

function HairFront({ spec }: { spec: Spec }) {
  if (spec.hairStyle === "snakes") return <Snakes />;
  if (spec.hairStyle === "curls") {
    return (
      <g>
        <circle cx="46" cy="74" r="10" fill={spec.hair} stroke={INK} strokeWidth="1.7" />
        <circle cx="114" cy="74" r="10" fill={spec.hair} stroke={INK} strokeWidth="1.7" />
      </g>
    );
  }
  const bangs = spec.hairStyle === "short"
    ? "M46 58 Q50 28 80 26 Q110 28 114 58 Q98 46 80 48 Q62 46 46 58"
    : "M48 56 Q80 34 112 56 Q98 48 80 50 Q62 48 48 56";
  return (
    <g>
      {spec.hairStyle === "bun" ? <circle cx="80" cy="24" r="13" fill={spec.hair} stroke={INK} strokeWidth="2" /> : null}
      <path d={bangs} fill={spec.hair} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </g>
  );
}

function Robe({ spec }: { spec: Spec }) {
  const d = spec.hem === "long"
    ? "M63 98 C48 116 46 148 54 172 H106 C114 148 112 116 97 98 C88 110 72 110 63 98 Z"
    : "M64 98 C52 110 50 128 58 142 H102 C110 128 108 110 96 98 C88 108 72 108 64 98 Z";
  return (
    <g transform={spec.wide ? "translate(80 130) scale(1.12 1) translate(-80 -130)" : undefined}>
      <path d={d} fill={spec.robe} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M72 112 H88" stroke={spec.trim} strokeWidth="3.2" strokeLinecap="round" />
      {spec.hem === "long" ? <path d="M60 148 H100" stroke={spec.trim} strokeWidth="2" opacity="0.85" /> : null}
      {spec.apron ? <path d="M68 114 H92 L96 156 H64 Z" fill={spec.apron} stroke={INK} strokeWidth="1.7" /> : null}
    </g>
  );
}

function Legs({ spec, fly, winged }: { spec: Spec; fly: boolean; winged: boolean }) {
  if (spec.hem === "long") {
    return (
      <g>
        <ellipse cx="68" cy="176" rx="13" ry="5.5" fill="#2b2620" />
        <ellipse cx="96" cy="176" rx="13" ry="5.5" fill="#2b2620" />
      </g>
    );
  }
  if (fly) {
    return (
      <g>
        <path d="M72 140 Q56 158 76 166" stroke={INK} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M72 140 Q56 158 76 166" stroke={spec.skin} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M90 140 Q110 156 94 168" stroke={INK} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M90 140 Q110 156 94 168" stroke={spec.skin} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
    );
  }
  const shoe = winged ? "#e6c36a" : "#2b2620";
  return (
    <g>
      <path d="M70 138 L64 168" stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M70 138 L64 168" stroke={spec.skin} strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M92 138 L98 168" stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M92 138 L98 168" stroke={spec.skin} strokeWidth="9" fill="none" strokeLinecap="round" />
      <ellipse cx="62" cy="172" rx="12" ry="5.5" fill={shoe} stroke={INK} strokeWidth="1.4" />
      <ellipse cx="100" cy="172" rx="12" ry="5.5" fill={shoe} stroke={INK} strokeWidth="1.4" />
      {winged ? (
        <g fill="#f7f4ee" stroke={INK} strokeWidth="1.1">
          <path d="M48 164 Q58 152 66 164 Q58 160 48 164" />
          <path d="M60 158 Q70 146 78 158 Q70 154 60 158" />
          <path d="M86 158 Q96 146 104 158 Q96 154 86 158" />
          <path d="M98 164 Q108 152 116 164 Q108 160 98 164" />
        </g>
      ) : null}
    </g>
  );
}

function Bolt({ x, y }: { x: number; y: number }) {
  return <path transform={`translate(${x} ${y})`} d="M2 -18 L8 -4 H3 L10 16 L-2 2 H3 L-6 -4 H-1 Z" fill="#f2d15a" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />;
}

function Feather({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 18 Q12 -6 0 -22 Q-12 -6 0 18" fill="#1e7a6d" stroke={INK} strokeWidth="1.3" />
      <path d="M0 14 V-16" stroke={INK} strokeWidth="1" />
      <circle cy="-2" r="3.2" fill="#3d6b8a" stroke={INK} strokeWidth="1" />
      <circle cy="-2" r="1.2" fill="#f0d36a" />
    </g>
  );
}

function Fennel({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 10 V-14" stroke="#6a8f4e" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M0 -14 Q-8 -26 0 -32 Q8 -26 0 -14" fill="#f2a03a" stroke={INK} strokeWidth="1.2" />
      <path d="M0 -16 Q-3 -24 0 -28 Q3 -24 0 -16" fill="#f7d35a" />
    </g>
  );
}

function Hammer({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-25)`}>
      <rect x="-2.2" y="-4" width="4.4" height="24" rx="1" fill="#8a5a32" stroke={INK} strokeWidth="1" />
      <rect x="-13" y="-14" width="26" height="11" rx="2" fill="#8a9096" stroke={INK} strokeWidth="1.3" />
    </g>
  );
}

function Caduceus({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 18 V-20" stroke="#e6c36a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M0 -2 Q-10 2 -6 12 Q-1 6 0 8" fill="none" stroke="#6f9a48" strokeWidth="2" />
      <path d="M0 -2 Q10 2 6 12 Q1 6 0 8" fill="none" stroke="#6f9a48" strokeWidth="2" />
      <path d="M-7 -16 Q0 -24 7 -16 Q0 -12 -7 -16" fill="#f7f4ee" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function Rose({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 6 V18" stroke="#3f8f4e" strokeWidth="2" />
      <circle r="5.5" fill="#e56b8a" stroke={INK} strokeWidth="1.1" />
      <circle r="2.2" fill="#f4b3c4" />
    </g>
  );
}

function Gorgoneion() {
  return (
    <g>
      <circle r="6.2" fill="#d7e3b8" stroke={INK} strokeWidth="1" />
      <circle cx="-7" cy="-1" r="2.2" fill="#6f9a48" />
      <circle cx="7" cy="-1" r="2.2" fill="#6f9a48" />
      <circle cy="-7.2" r="2.2" fill="#6f9a48" />
      <circle cx="-5" cy="-6" r="1.7" fill="#6f9a48" />
      <circle cx="5" cy="-6" r="1.7" fill="#6f9a48" />
      <path d="M-3 -1 Q-1.4 -3.2 0 -1" stroke={INK} fill="none" strokeWidth="0.8" />
      <path d="M0 -1 Q1.4 -3.2 3 -1" stroke={INK} fill="none" strokeWidth="0.8" />
      <path d="M-2 2.2 Q0 4 2 2.2" stroke={INK} fill="none" strokeWidth="0.7" />
    </g>
  );
}

function RoundShield({ x, y, kind }: { x: number; y: number; kind: "plain" | "mirror" | "aegis" }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="18" fill={kind === "mirror" ? "#d5e6ee" : "#f4e7c4"} stroke={INK} strokeWidth="2.1" />
      <circle r="12" fill={kind === "mirror" ? "#f7fcff" : "#e7c96a"} stroke={INK} strokeWidth="1.2" />
      {kind === "aegis" ? <Gorgoneion /> : null}
      {kind === "mirror" ? <path d="M-7 -1 Q0 -8 8 1" stroke="#fff" strokeWidth="2.2" fill="none" /> : null}
      {kind === "plain" ? (
        <path d="M0 -7 V7 M-5 0 H5" stroke="#8c2f2b" strokeWidth="1.6" strokeLinecap="round" />
      ) : null}
    </g>
  );
}

function Harpe({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0 Q10 6 6 16" stroke="#c5ccd2" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <rect x="-4" y="-6" width="8" height="6" rx="1" fill="#e6c36a" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function Baby({ x, y, skin }: { x: number; y: number; skin: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-14" y="2" width="30" height="18" rx="8" fill="#f7f4ee" stroke={INK} strokeWidth="1.5" />
      <circle cx="1" cy="-1" r="7.2" fill={skin} stroke={INK} strokeWidth="1.4" />
      <circle cx="-1.2" cy="-2" r="0.8" fill={INK} />
      <circle cx="3.2" cy="-2" r="0.8" fill={INK} />
      <path d="M-0.4 1.2 Q1.2 3 2.8 1.2" stroke={INK} fill="none" strokeWidth="0.8" />
    </g>
  );
}

function Owl() {
  return (
    <g transform="translate(48 96)">
      <ellipse cy="2" rx="7" ry="6" fill="#8a6a3a" stroke={INK} strokeWidth="1.2" />
      <circle cx="-2.4" r="2" fill="#fff" stroke={INK} strokeWidth="0.7" />
      <circle cx="2.4" r="2" fill="#fff" stroke={INK} strokeWidth="0.7" />
      <circle cx="-2.4" cy="0.4" r="0.8" fill={INK} />
      <circle cx="2.4" cy="0.4" r="0.8" fill={INK} />
      <path d="M-1.2 3 L0 5 L1.2 3" fill="#e6c36a" />
    </g>
  );
}

function Human({ spec, pose, look }: { spec: Spec; pose: Pose; look: Look }) {
  const arm = armOf(pose);
  const mood = moodOf(pose);
  const hands = HANDS[arm];
  const winged = Boolean(spec.sandals || (spec.heroKit && look === "ready"));
  const shieldKind = spec.shield ? (look === "aegis" ? "aegis" : "plain") : look === "ready" && spec.heroKit ? "mirror" : null;
  return (
    <g>
      {spec.spear ? (
        <g>
          <path d="M124 36 L134 158" stroke="#c4b49a" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M124 36 L118 50 L130 50 Z" fill="#d5dbe0" stroke={INK} strokeWidth="1" />
        </g>
      ) : null}
      {spec.wings ? (
        <g fill="#f7f4ee" stroke={INK} strokeWidth="1.6">
          <path d="M48 108 Q6 68 28 132 Q48 118 54 128" />
          <path d="M112 108 Q154 68 132 132 Q112 118 106 128" />
        </g>
      ) : null}
      {spec.cape ? (
        <g fill={spec.cape} stroke={INK} strokeWidth="1.5">
          <path d="M60 100 Q34 132 48 170 L74 150 Z" />
          <path d="M100 100 Q126 132 112 170 L86 150 Z" />
        </g>
      ) : null}
      {look === "ready" && spec.heroKit ? (
        <g fill="#8c2f2b" stroke={INK} strokeWidth="1.4">
          <path d="M62 100 Q40 128 52 162 L74 146 Z" />
          <path d="M98 100 Q120 128 108 162 L86 146 Z" />
        </g>
      ) : null}
      <HairBack spec={spec} />
      <Robe spec={spec} />
      <Legs spec={spec} fly={pose === "fly"} winged={winged} />
      <Limb d={hands.l} skin={spec.skin} />
      <Limb d={hands.r} skin={spec.skin} />
      <circle cx={hands.lx} cy={hands.ly} r="6" fill={spec.skin} stroke={INK} strokeWidth="1.6" />
      <circle cx={hands.rx} cy={hands.ry} r="6" fill={spec.skin} stroke={INK} strokeWidth="1.6" />
      <rect x="72" y="86" width="16" height="16" rx="6" fill={spec.skin} />
      <ellipse cx="44" cy="66" rx="5" ry="7" fill={spec.skin} stroke={INK} strokeWidth="1.4" />
      <ellipse cx="116" cy="66" rx="5" ry="7" fill={spec.skin} stroke={INK} strokeWidth="1.4" />
      <ellipse cx="80" cy="62" rx="34" ry="32" fill={spec.skin} stroke={INK} strokeWidth="2.2" />
      <Face spec={spec} mood={mood} />
      {spec.beard ? <Beard color={spec.hair} kind={spec.beard} mood={mood} /> : null}
      <HairFront spec={spec} />
      {spec.helmet ? (
        <g>
          <path d="M46 52 Q80 16 114 52 Q100 40 80 40 Q60 40 46 52" fill="#e6c36a" stroke={INK} strokeWidth="1.8" />
          <path d="M74 24 Q80 2 86 24" fill="#8c2f2b" stroke={INK} strokeWidth="1.2" />
        </g>
      ) : null}
      {spec.petasos ? (
        <g>
          <ellipse cx="80" cy="44" rx="40" ry="8" fill="#e6c98a" stroke={INK} strokeWidth="1.6" />
          <path d="M56 44 Q80 18 104 44" fill="#f0d7a0" stroke={INK} strokeWidth="1.6" />
          <path d="M40 42 Q30 32 44 30 Q38 40 40 42" fill="#f7f4ee" stroke={INK} strokeWidth="1" />
          <path d="M120 42 Q130 32 116 30 Q122 40 120 42" fill="#f7f4ee" stroke={INK} strokeWidth="1" />
        </g>
      ) : null}
      {spec.crown ? <path d="M54 38 L60 20 L70 34 L80 14 L90 34 L100 20 L106 38 Z" fill="#f0d36a" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" /> : null}
      {spec.flowers ? (
        <g>
          {[[62, 32], [80, 24], [98, 32]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="4.2" fill="#e56b8a" stroke={INK} strokeWidth="1" />
              <circle cx={x} cy={y} r="1.6" fill="#f2d36a" />
            </g>
          ))}
        </g>
      ) : null}
      {spec.owl ? <Owl /> : null}
      {spec.bolt ? <Bolt x={hands.rx} y={hands.ry} /> : null}
      {spec.feather ? <Feather x={hands.lx - 4} y={hands.ly - 8} /> : null}
      {spec.flame ? <Fennel x={hands.rx} y={hands.ry} /> : null}
      {spec.hammer ? <Hammer x={(hands.lx + hands.rx) / 2} y={(hands.ly + hands.ry) / 2 - 8} /> : null}
      {spec.caduceus ? <Caduceus x={hands.rx} y={hands.ry} /> : null}
      {spec.rose ? <Rose x={hands.rx} y={hands.ry - 6} /> : null}
      {shieldKind ? <RoundShield x={hands.lx - 2} y={hands.ly + 2} kind={shieldKind} /> : null}
      {spec.heroKit && look === "ready" ? <Harpe x={100} y={126} /> : null}
      {pose === "hold" ? <Baby x={80} y={116} skin="#f3c7a6" /> : null}
    </g>
  );
}

function graiaSpec(robe: string): Spec {
  return {
    skin: "#f0c9b4",
    blush: "#e7a8a2",
    hair: "#d5d0c8",
    hairStyle: "bun",
    robe,
    trim: "#e6c36a",
    hem: "long",
    elder: true,
  };
}

function Graeae({ pose }: { pose: Pose }) {
  const robes = ["#c9b6dc", "#b7c9b0", "#e4c2ae"];
  return (
    <g>
      {robes.map((robe, i) => (
        <g key={robe} transform={`translate(${i * 100} 0) scale(0.78)`}>
          <Human spec={graiaSpec(robe)} pose={pose} look="plain" />
        </g>
      ))}
    </g>
  );
}

function Pegasus({ pose }: { pose: Pose }) {
  const grin = pose === "surprised" ? 2 : 7;
  return (
    <g>
      <path d="M150 72 Q178 58 168 100" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M150 72 Q178 58 168 100" stroke="#f0d36a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 64 Q36 16 58 78 Q78 58 96 80" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M108 58 Q156 4 140 74 Q116 52 104 78" fill="#fff" stroke={INK} strokeWidth="2" />
      <ellipse cx="112" cy="86" rx="42" ry="24" fill="#fbfaf6" stroke={INK} strokeWidth="2.2" />
      {[
        [82, 98, 76],
        [96, 102, 94],
        [122, 102, 126],
        [136, 98, 144],
      ].map(([x1, y1, x2]) => (
        <g key={`${x1}-${x2}`}>
          <path d={`M${x1} ${y1} L${x2} 128`} stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d={`M${x1} ${y1} L${x2} 128`} stroke="#fbfaf6" strokeWidth="4.5" strokeLinecap="round" />
          <ellipse cx={x2} cy="130" rx="6" ry="3.2" fill="#2b2620" />
        </g>
      ))}
      <path d="M86 78 Q58 62 50 40" stroke={INK} strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M86 78 Q58 62 50 40" stroke="#fbfaf6" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M62 52 Q78 28 50 22" stroke="#f0d36a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="42" cy="34" rx="22" ry="18" fill="#fbfaf6" stroke={INK} strokeWidth="2.2" />
      <path d="M52 20 L60 6 L64 24" fill="#fbfaf6" stroke={INK} strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="4.2" ry="5" fill="#fff" stroke={INK} strokeWidth="1.2" />
      <circle cx="33" cy="33" r="2.1" fill={INK} />
      <circle cx="34" cy="32" r="0.8" fill="#fff" />
      <path d={`M24 42 Q32 ${42 + grin} 40 42`} fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

function resolveSpec(id: Exclude<CharId, "pegasus" | "graeae">, style?: FigStyle, variant?: number): Spec {
  const base = SPECS[id];
  if (id === "pandora" && style === "clay") {
    return { ...base, skin: "#e4c4a0", blush: "#e7b8a4", hair: "#c4a07a", robe: "#d7b48a", trim: "#c4a574", flowers: false };
  }
  if (id === "villager" && variant === 1) {
    return { ...base, robe: "#c47b5a", hair: "#3a2a22" };
  }
  return base;
}

export function Char({
  id,
  pose,
  look = "plain",
  style,
  variant,
}: {
  id: CharId;
  pose: Pose;
  look?: Look;
  style?: FigStyle;
  variant?: number;
}) {
  if (id === "pegasus") return <Pegasus pose={pose} />;
  if (id === "graeae") return <Graeae pose={pose} />;
  return <Human spec={resolveSpec(id, style, variant)} pose={pose} look={look} />;
}

export function HeadShot({ id, pose = "idle", look = "plain" }: { id: CharId; pose?: Pose; look?: Look }) {
  const frame = CHAR_FRAME[id];
  return (
    <svg viewBox={frame.head} className="h-12 w-12" aria-hidden>
      <Char id={id} pose={pose} look={look} />
    </svg>
  );
}
