export const SITE_NAME = "나두신화";
export const SITE_NAME_EN = "Nadoo Mythology";
export const SITE_TAGLINE = "그리스·로마 신화를 한국어로 쉽고 정확하게";
export const SITE_SUB =
  "올림포스 신들과 영웅·괴물, 주요 이야기, 족보, 신화에서 온 단어, 영화·명화·별자리 속 신화, 그리스와 로마 신의 차이까지 원전 근거와 함께 정리했습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-myth.vercel.app";

export const MOVIE_CHECKLIST_URL =
  "https://movie-checklist-sigma.vercel.app/?utm_source=nadoo-myth&utm_medium=referral&utm_campaign=in-media";

/** 자매 사이트. 신화가 아니라 로마의 역사(탄생·전쟁·클레오파트라·관련 영화). */
export const ROME_STORIES_NAME = "로마이야기";
export const ROME_STORIES_URL = "https://rome-stories.vercel.app";

export const NAV = [
  { href: "/gods", label: "신과 인물" },
  { href: "/stories", label: "이야기" },
  { href: "/family-tree", label: "족보" },
  { href: "/words", label: "신화 속 단어" },
  { href: "/in-media", label: "작품 속 신화" },
  { href: "/greece-vs-rome", label: "그리스 vs 로마" },
] as const;
