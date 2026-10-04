import { monsters, nymphs } from "./people-creatures";
import { gods } from "./people-gods";
import { mortals } from "./people-mortals";
import { heroes, otherGods } from "./people-others";
import type { Person, PersonCategory } from "./types";

export const people: Person[] = [...gods, ...otherGods, ...heroes, ...mortals, ...nymphs, ...monsters];

export const personBySlug = new Map(people.map((p) => [p.slug, p]));

export const CATEGORY_LABEL: Record<PersonCategory, string> = {
  primordial: "태초의 신",
  titan: "티탄",
  olympian: "올림포스 신",
  god: "그 밖의 신",
  hero: "영웅",
  mortal: "인간",
  nymph: "님프",
  monster: "괴물·신비한 존재",
};

export const CATEGORY_ORDER: PersonCategory[] = [
  "olympian",
  "primordial",
  "titan",
  "god",
  "hero",
  "mortal",
  "nymph",
  "monster",
];
