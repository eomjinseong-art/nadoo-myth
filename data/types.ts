export type Source = { work: string; ref?: string };

export type PersonCategory =
  | "primordial"
  | "titan"
  | "olympian"
  | "god"
  | "hero"
  | "mortal"
  | "nymph"
  | "monster";

export type Person = {
  slug: string;
  ko: string;
  greek: string;
  /** Greek name in Latin letters */
  rom: string;
  /** Roman / Latin name, if any */
  roman?: string;
  category: PersonCategory;
  role: string;
  symbols: string[];
  /** slugs (linked if a page exists) or plain text */
  parents: string[];
  spouses: string[];
  children: string[];
  stories: string[];
  intro: string;
  /** "이야기마다 달라요" notes */
  variants?: string[];
  sources: Source[];
  /** slug of /greece-vs-rome/[slug] comparison page */
  compare?: string;
  /** Illustrated portrait, e.g. /portraits/zeus.webp */
  portrait?: string;
  /** Short Korean alt text for the portrait */
  portraitAlt?: string;
};

export type Story = {
  slug: string;
  title: string;
  order: number;
  era: string;
  lead: string;
  body: string[];
  characters: string[];
  variants?: string[];
  sources: Source[];
};

export type Word = {
  slug: string;
  word: string;
  en: string;
  /** person slugs */
  origin: string[];
  /** "확실" solid, "논쟁" disputed, "간접" indirect / common noun first */
  status: "solid" | "disputed" | "indirect" | "myth-not-origin";
  lead: string;
  body: string[];
  stories?: string[];
  sources: Source[];
};
