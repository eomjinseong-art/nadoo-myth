import { films, paintings } from "@/data/media";
import { personBySlug } from "@/data/people";
import { storyBySlug } from "@/data/stories";
import { words } from "@/data/words";
import { cyclops } from "@/data/webtoon/episodes/cyclops";
import { herakles } from "@/data/webtoon/episodes/herakles";
import { icarus } from "@/data/webtoon/episodes/icarus";
import { midas } from "@/data/webtoon/episodes/midas";
import { narcissus } from "@/data/webtoon/episodes/narcissus";
import { pandora } from "@/data/webtoon/episodes/pandora";
import { perseus } from "@/data/webtoon/episodes/perseus";
import { prometheus } from "@/data/webtoon/episodes/prometheus";
import { theseus } from "@/data/webtoon/episodes/theseus";
import { trojanHorse } from "@/data/webtoon/episodes/trojan-horse";
import type { Episode, PlannedEpisode } from "@/data/webtoon/types";

/**
 * 새 웹툰은 episodes/ 에 파일을 만들고 이 배열에 넣습니다.
 * 새 인물이 필요하면 components/webtoon/characters.tsx 에 SVG를 추가합니다.
 * 읽는 순서는 신화의 앞뒤입니다. 헤라클레스만 열두 과업이라 16컷까지 허용합니다.
 */
export const episodes: Episode[] = [
  prometheus,
  pandora,
  perseus,
  theseus,
  icarus,
  herakles,
  narcissus,
  midas,
  trojanHorse,
  cyclops,
].sort((a, b) => a.order - b.order);

export const planned: PlannedEpisode[] = [];

/** 일리아스이야기의 실재 앵커만. 목마와 귀향은 그 시의 본문이 아닙니다. */
const ILIAD_HREFS = new Set([
  "https://iliad-stories.vercel.app/scope#horse",
  "https://iliad-stories.vercel.app/scope#odyssey",
  "https://iliad-stories.vercel.app/heroes/odysseus",
]);

export function episodeBySlug(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}

const mediaIds = new Set([...films, ...paintings].map((item) => item.slug));
const wordSlugs = new Set(words.map((word) => word.slug));

function assertHref(href: string, label: string) {
  if (ILIAD_HREFS.has(href)) return;
  if (href.startsWith("/gods/")) {
    const slug = href.slice("/gods/".length);
    if (!personBySlug.get(slug)) throw new Error(`웹툰 링크 인물 없음 (${label}): ${href}`);
    return;
  }
  if (href.startsWith("/stories/")) {
    const slug = href.slice("/stories/".length);
    if (!storyBySlug.get(slug)) throw new Error(`웹툰 링크 이야기 없음 (${label}): ${href}`);
    return;
  }
  if (href.startsWith("/words/")) {
    const slug = href.slice("/words/".length);
    if (!wordSlugs.has(slug)) throw new Error(`웹툰 링크 단어 없음 (${label}): ${href}`);
    return;
  }
  if (href.startsWith("/in-media#")) {
    const id = href.slice("/in-media#".length);
    if (!mediaIds.has(id)) throw new Error(`웹툰 링크 작품 앵커 없음 (${label}): ${href}`);
    return;
  }
  throw new Error(`웹툰 링크는 이 사이트의 실재 경로만 허용합니다 (${label}): ${href}`);
}

const panelIds = new Set<string>();
const slugs = new Set<string>();

for (const episode of episodes) {
  if (slugs.has(episode.slug)) throw new Error(`웹툰 slug 중복: ${episode.slug}`);
  slugs.add(episode.slug);
  const panelMax = episode.slug === "herakles" ? 16 : 12;
  if (episode.panels.length < 8 || episode.panels.length > panelMax) {
    throw new Error(`${episode.slug} 패널 수는 8–${panelMax}이어야 합니다`);
  }
  if (episode.quiz.length !== 3) throw new Error(`${episode.slug} 퀴즈는 3문제여야 합니다`);
  if (episode.chat.length < 5 || episode.chat.length > 8) {
    throw new Error(`${episode.slug} 단톡은 5–8줄이어야 합니다`);
  }
  if (!storyBySlug.get(episode.storySlug)) throw new Error(`웹툰 원문 이야기 없음: ${episode.storySlug}`);
  if (!episode.panels.some((panel) => panel.id === episode.cover)) {
    throw new Error(`${episode.slug} 표지 패널 없음: ${episode.cover}`);
  }
  for (const panel of episode.panels) {
    if (panelIds.has(panel.id)) throw new Error(`패널 id 중복: ${panel.id}`);
    panelIds.add(panel.id);
  }
  for (const slug of episode.characters) {
    if (!personBySlug.get(slug)) throw new Error(`${episode.slug} 인물 페이지 없음: ${slug}`);
  }
  for (const link of episode.related) assertHref(link.href, episode.slug);
  for (const phrase of episode.phrases) {
    for (const link of phrase.links ?? []) assertHref(link.href, `${episode.slug}:${phrase.term}`);
  }
  for (const question of episode.quiz) {
    if (question.kind === "ox" && question.answer !== 0 && question.answer !== 1) {
      throw new Error(`${episode.slug} OX 정답은 0 또는 1: ${question.id}`);
    }
    if (question.kind === "choice") {
      if (!question.choices || question.choices.length !== 4) throw new Error(`${episode.slug} 보기는 4개: ${question.id}`);
      if (question.answer < 0 || question.answer > 3) throw new Error(`${episode.slug} 보기 정답 범위: ${question.id}`);
    }
  }
}

for (const item of planned) {
  if (!storyBySlug.get(item.storySlug)) throw new Error(`준비 중 에피소드의 이야기 없음: ${item.storySlug}`);
}
