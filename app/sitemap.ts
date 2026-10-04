import type { MetadataRoute } from "next";
import { godPairs, romanDeities } from "@/data/gvr";
import { people } from "@/data/people";
import { stories } from "@/data/stories";
import { words } from "@/data/words";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/gods",
    "/stories",
    "/family-tree",
    "/words",
    "/in-media",
    "/greece-vs-rome",
    "/greece-vs-rome/history",
    "/sources",
    ...people.map((p) => `/gods/${p.slug}`),
    ...stories.map((s) => `/stories/${s.slug}`),
    ...words.map((w) => `/words/${w.slug}`),
    ...godPairs.map((p) => `/greece-vs-rome/${p.slug}`),
    ...romanDeities.map((r) => `/greece-vs-rome/roman/${r.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
