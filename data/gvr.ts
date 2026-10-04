import { pairsA } from "./gvr-pairs-a";
import { pairsB } from "./gvr-pairs-b";
import { romanDeities } from "./gvr-roman";

export const godPairs = [...pairsA, ...pairsB];
export const pairBySlug = new Map(godPairs.map((p) => [p.slug, p]));
export { romanDeities };
export const romanBySlug = new Map(romanDeities.map((r) => [r.slug, r]));
