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

/** 일리아스 사이트. 병렬로 만들어지고 있어, 머지 전에는 404일 수 있습니다. */
export const ILIAD_NAME = "일리아스이야기";
export const ILIAD_URL = "https://iliad-stories.vercel.app";

/**
 * Origins a link checker must treat as allowed even when they 404.
 * iliad-stories is built in parallel and goes live before this PR merges.
 */
export const LINK_CHECK_ALLOW_404_ORIGINS = [ILIAD_URL] as const;

export function linkCheckAllows404(href: string) {
  return LINK_CHECK_ALLOW_404_ORIGINS.some((origin) => href === origin || href.startsWith(`${origin}/`));
}

export const SISTER_SITES = [
  {
    name: ILIAD_NAME,
    en: "The Iliad",
    href: ILIAD_URL,
    blurb: "트로이 전쟁 10년째의 51일을 『일리아스』 원전으로 읽습니다.",
    note: "일리아스의 51일. 트로이 전쟁 10년째.",
  },
  {
    name: "그리스이야기",
    en: "Greece",
    href: "https://greece-stories.vercel.app",
    blurb: "미케네에서 헬레니즘까지, 폴리스와 전쟁을 짧은 한국어로 읽습니다.",
    note: "폴리스와 전쟁, 미케네에서 헬레니즘.",
  },
  {
    name: ROME_STORIES_NAME,
    en: "Rome",
    href: ROME_STORIES_URL,
    blurb: "로마의 탄생·전쟁·클레오파트라·관련 영화를 짧은 한국어로 읽습니다.",
    note: "쉬운 로마 역사. 탄생·전쟁·클레오파트라·관련 영화.",
  },
  {
    name: "이집트이야기",
    en: "Egypt",
    href: "https://egypt-stories.vercel.app",
    blurb: "선왕조에서 클레오파트라까지, 파라오와 나일강을 짧은 한국어로 읽습니다.",
    note: "파라오와 나일강, 선왕조에서 클레오파트라.",
  },
  {
    name: "페르시아이야기",
    en: "Persia",
    href: "https://persia-stories.vercel.app",
    blurb: "키루스부터 알렉산드로스까지, 아케메네스 제국을 짧은 한국어로 읽습니다.",
    note: "아케메네스 제국. 키루스부터 페르세폴리스.",
  },
  {
    name: "더 초즌 · 성경",
    en: "The Chosen · Bible",
    href: "https://the-chosen-korean.vercel.app",
    blurb: "성경 이야기와 더 초즌을 쉬운 한국어로 함께 읽습니다.",
    note: "성경과 더 초즌. 쉬운 한국어.",
  },
  {
    name: "철학이야기",
    en: "Philosophy",
    href: "https://philosophy-stories.vercel.app",
    blurb: "소크라테스부터 동아시아 사상까지, 철학자를 짧은 한국어로 읽습니다.",
    note: "서양·동아시아 철학을 짧게.",
  },
  {
    name: "대한민국이야기",
    en: "Korea",
    href: "https://korea-stories.vercel.app",
    blurb: "고조선부터 조선까지, 왕조와 인물을 짧은 한국어로 읽습니다.",
    note: "고조선부터 조선. 왕조와 인물.",
  },
  {
    name: "나두연표",
    en: "Timeline",
    href: "https://nadoo-timeline.vercel.app",
    blurb: "세계사와 한반도를 같은 해에 나란히 놓은 비교 연표로 읽습니다.",
    note: "세계사 vs 한반도, 같은 해 무슨 일이?",
  },
  {
    name: "나두 허브",
    en: "Nadoo Hub",
    href: "https://tinalinkeom.vercel.app",
    blurb: "나두의 역사·신화·성경 사이트를 한곳에서 찾습니다.",
    note: "나두 사이트를 한곳에서.",
  },
] as const;

/** 다른 가족관계도. 이 사이트(나두신화)는 빠집니다. */
export const OTHER_FAMILY_TREES = [
  { name: "로마이야기", en: "Rome", href: "https://rome-stories.vercel.app/family-tree" },
  { name: "그리스이야기", en: "Greece", href: "https://greece-stories.vercel.app/family-tree" },
  { name: "이집트이야기", en: "Egypt", href: "https://egypt-stories.vercel.app/family-tree" },
  { name: "페르시아이야기", en: "Persia", href: "https://persia-stories.vercel.app/family-tree" },
  { name: "대한민국이야기", en: "Korea", href: "https://korea-stories.vercel.app/family-tree" },
  { name: "더 초즌 · 성경", en: "The Chosen · Bible", href: "https://the-chosen-korean.vercel.app/family-tree" },
] as const;

/** 다른 사이트의 영화. 이 사이트(작품 속 신화)는 빠집니다. */
export const OTHER_SITE_FILMS = [
  { name: "로마이야기", en: "Rome", href: "https://rome-stories.vercel.app/movies" },
  { name: "그리스이야기", en: "Greece", href: "https://greece-stories.vercel.app/movies" },
  { name: "이집트이야기", en: "Egypt", href: "https://egypt-stories.vercel.app/movies" },
  { name: "페르시아이야기", en: "Persia", href: "https://persia-stories.vercel.app/movies" },
  { name: "대한민국이야기", en: "Korea", href: "https://korea-stories.vercel.app/films" },
  { name: "철학이야기", en: "Philosophy", href: "https://philosophy-stories.vercel.app/films" },
  { name: "더 초즌 · 성경", en: "The Chosen · Bible", href: "https://the-chosen-korean.vercel.app/together" },
] as const;

export const NAV = [
  { href: "/gods", label: "신과 인물" },
  { href: "/stories", label: "이야기" },
  { href: "/family-tree", label: "가족관계도", en: "Family Tree" },
  { href: "/words", label: "신화 속 단어" },
  { href: "/in-media", label: "작품 속 신화" },
  { href: "/greece-vs-rome", label: "그리스 vs 로마" },
] as const;
