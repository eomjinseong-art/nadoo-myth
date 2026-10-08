export const SITE_NAME = "나두신화";
export const SITE_NAME_EN = "Nadoo Mythology";
export const SITE_TAGLINE = "그리스·로마 신화를 한국어로 쉽고 정확하게";
export const SITE_SUB =
  "올림포스 신들과 영웅·괴물, 주요 이야기, 가족관계도, 신화에서 온 단어, 영화·명화·별자리 속 신화, 그리스와 로마 신의 차이까지 원전 근거와 함께 정리했습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-myth.vercel.app";

export const MOVIE_CHECKLIST_URL =
  "https://movie-checklist-sigma.vercel.app/?utm_source=nadoo-myth&utm_medium=referral&utm_campaign=in-media";

/** 자매 사이트 묶음. 신화 안내 옆에서 읽는 역사. */
export const SISTER_GROUP_LABEL = "나두 역사·신화";

/** 자매 사이트. 신화가 아니라 로마의 역사(탄생·전쟁·클레오파트라·관련 영화). */
export const ROME_STORIES_NAME = "로마이야기";
export const ROME_STORIES_URL = "https://rome-stories.vercel.app";

export const SISTER_SITES = [
  {
    name: "그리스이야기",
    href: "https://greece-stories.vercel.app",
    blurb: "미케네에서 헬레니즘까지, 폴리스와 전쟁을 짧은 한국어로 읽습니다.",
    note: "폴리스와 전쟁, 미케네에서 헬레니즘.",
  },
  {
    name: ROME_STORIES_NAME,
    href: ROME_STORIES_URL,
    blurb: "로마의 탄생·전쟁·클레오파트라·관련 영화를 짧은 한국어로 읽습니다.",
    note: "쉬운 로마 역사. 탄생·전쟁·클레오파트라·관련 영화.",
  },
  {
    name: "이집트이야기",
    href: "https://egypt-stories.vercel.app",
    blurb: "선왕조에서 클레오파트라까지, 파라오와 나일강을 짧은 한국어로 읽습니다.",
    note: "파라오와 나일강, 선왕조에서 클레오파트라.",
  },
  {
    name: "나두연표",
    href: "https://nadoo-timeline.vercel.app",
    blurb: "세계사와 한반도를 같은 해에 나란히 놓은 비교 연표로 읽습니다.",
    note: "세계사 vs 한반도, 같은 해 무슨 일이?",
  },
] as const;

export const NAV = [
  { href: "/gods", label: "신과 인물" },
  { href: "/stories", label: "이야기" },
  { href: "/family-tree", label: "가족관계도", en: "Family Tree" },
  { href: "/words", label: "신화 속 단어" },
  { href: "/in-media", label: "작품 속 신화" },
  { href: "/greece-vs-rome", label: "그리스 vs 로마" },
] as const;
