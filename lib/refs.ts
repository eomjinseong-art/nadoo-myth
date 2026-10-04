import { personBySlug } from "@/data/people";
import { storyBySlug } from "@/data/stories";

export function personName(ref: string) {
  return personBySlug.get(ref)?.ko ?? ref;
}

export function storyTitle(ref: string) {
  return storyBySlug.get(ref)?.title ?? ref;
}
