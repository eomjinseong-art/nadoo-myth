import { storiesA } from "./stories-a";
import { storiesB } from "./stories-b";

export const stories = [...storiesA, ...storiesB].sort((a, b) => a.order - b.order);
export const storyBySlug = new Map(stories.map((s) => [s.slug, s]));
