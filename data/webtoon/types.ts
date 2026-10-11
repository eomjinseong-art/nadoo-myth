import type { Source } from "@/data/types";

/** 새 인물은 이 목록과 components/webtoon/characters.tsx 양쪽에 추가합니다. */
export const CHAR_IDS = [
  "zeus",
  "hera",
  "prometheus",
  "epimetheus",
  "pandora",
  "hephaistos",
  "hermes",
  "athena",
  "aphrodite",
  "perseus",
  "danae",
  "polydectes",
  "medusa",
  "graeae",
  "andromeda",
  "pegasus",
  "acrisius",
  "villager",
  "odysseus",
  "herakles",
  "theseus",
  "ariadne",
  "daidalos",
  "ikaros",
  "narkissos",
  "echo",
  "midas",
  "dionysos",
  "apollo",
  "poseidon",
  "artemis",
  "hades",
  "helene",
  "pan",
  "atlas",
  "nemesis",
  "eurystheus",
  "silenos",
  "laocoon",
  "aegeus",
  "hippolyta",
  "iolaus",
  "helios",
  "polyphemos",
  "minotauros",
  "hydra",
  "kerberos",
] as const;

export type CharId = (typeof CHAR_IDS)[number];

export const POSES = [
  "idle",
  "angry",
  "happy",
  "sad",
  "surprised",
  "sly",
  "worried",
  "curious",
  "oops",
  "sleepy",
  "proud",
  "hold",
  "craft",
  "offer",
  "sneak",
  "shield",
  "fly",
  "stone",
  "open",
  "wave",
  "point",
] as const;

export type Pose = (typeof POSES)[number];

export type Look = "plain" | "ready" | "aegis" | "wings" | "melt" | "lion" | "ears";

export type FigStyle = "clay";

export const BG_NAMES = [
  "olympus",
  "forge",
  "meadow",
  "palace",
  "chamber",
  "sea",
  "cave",
  "shore",
  "arena",
  "sky",
  "forest",
  "night",
  "labyrinth",
  "river",
  "underworld",
] as const;

export type BgName = (typeof BG_NAMES)[number];

export const PROP_KINDS = [
  "pithos",
  "pithos-open",
  "evils",
  "hope",
  "gold-rain",
  "poof",
  "chest",
  "sea-eyes",
  "rocks",
  "discus",
  "anvil",
  "shared-eye",
  "kibisis",
  "rock",
  "ribbons",
  "cloud",
  "ledge",
  "fennel",
  "eagle",
  "chains",
  "wooden-horse",
  "sheep",
  "wine",
  "deer",
  "boar",
  "bull",
  "mare",
  "birds",
  "cattle",
  "apples",
  "thread",
  "sail",
  "sun",
  "pond",
  "narcissus",
  "gold-bread",
  "reeds",
  "splash",
  "feathers",
  "rattle",
  "belt",
  "pillars",
  "sky-orb",
  "torch",
  "geryon",
] as const;

export type PropKind = (typeof PROP_KINDS)[number];

export type CastMember = {
  id: CharId;
  pose: Pose;
  /** 발 위치. 패널 좌표계 360×480 */
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
  look?: Look;
  variant?: number;
  style?: FigStyle;
  /** 기본 true. 날아가는 인물은 false */
  ground?: boolean;
};

export type SceneProp = {
  kind: PropKind;
  /** 그림의 중심 */
  x: number;
  y: number;
  scale?: number;
  /** 인물보다 앞에 그립니다 */
  front?: boolean;
};

export type Bubble = {
  type: "narration" | "speech";
  text: string;
  speaker?: string;
  align?: "start" | "end";
};

export type Panel = {
  id: string;
  bg: BgName;
  alt: string;
  cast: CastMember[];
  props?: SceneProp[];
  bubbles?: Bubble[];
  sfx?: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  kind: "ox" | "choice";
  choices?: [string, string, string, string];
  /** ox는 1 = O, 0 = X. choice는 보기 번호 */
  answer: number;
  explain: string;
};

export type Phrase = {
  term: string;
  explain: string;
  links?: { href: string; label: string }[];
};

export type ChatLine = {
  id: CharId;
  name: string;
  text: string;
  pose?: Pose;
  look?: Look;
};

export type Episode = {
  slug: string;
  title: string;
  order: number;
  minutes: number;
  storySlug: string;
  summary: { who: string; what: string; so: string };
  /** panels[].id */
  cover: string;
  footnote: string;
  moral: string;
  phrases: Phrase[];
  quiz: QuizQuestion[];
  /** 인물 페이지가 있는 slug. 가계도 칸이 있으면 칩에서 함께 연결합니다. */
  characters: string[];
  related: { href: string; label: string }[];
  chat: ChatLine[];
  panels: Panel[];
  sources: Source[];
};

export type PlannedEpisode = {
  title: string;
  storySlug: string;
};
