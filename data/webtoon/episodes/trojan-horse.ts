import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const trojanHorse: Episode = {
  slug: "trojan-horse",
  title: "트로이 목마",
  order: 9,
  minutes: 5,
  storySlug: "trojan-horse",
  cover: "horse-night",
  summary: {
    who: "오디세우스, 아테나, 그리고 목마를 성 안으로 들인 트로이 사람들.",
    what: "속이 빈 나무 말에 병사를 숨기고, 그리스 함대는 떠난 척합니다.",
    so: "잠든 밤 성문이 열리고 트로이가 무너집니다. 라오콘의 불행은 화면 밖에 두었습니다.",
  },
  footnote:
    "목마는 『일리아스』에 없습니다. 『오디세이아』가 짧게 회상하고, 가장 긴 밤은 베르길리우스 『아이네이스』 2권에 있습니다. 라오콘을 문 뱀을 보낸 신이 아테나인지 아폴론인지도 자료마다 다릅니다. 일리아스이야기의 ‘나오는 것 · 안 나오는 것’이 그 경계를 적어 둡니다.",
  moral: "선물이 크면, 안을 먼저 물어봅니다.",
  phrases: [
    {
      term: "트로이의 목마",
      explain: "겉은 선물이고 안에는 다른 뜻이 있을 때 쓰는 말입니다. 라틴어로는 ‘그리스인이 선물을 가져와도 두려워하라’는 문장이 함께 남았습니다.",
      links: [
        { href: "/words/trojan-horse", label: "단어: 트로이 목마" },
        { href: "/stories/trojan-horse", label: "이야기: 트로이의 목마" },
      ],
    },
    {
      term: "일리아스 밖의 밤",
      explain: "호메로스의 『일리아스』는 함락 전에 끝납니다. 목마의 밤은 다른 시의 몫입니다.",
      links: [
        { href: "https://iliad-stories.vercel.app/scope#horse", label: "일리아스이야기 · 목마는 이 시 밖" },
        { href: "https://iliad-stories.vercel.app/heroes/odysseus", label: "일리아스이야기 · 오디세우스" },
      ],
    },
  ],
  quiz: [
    {
      id: "in-iliad",
      kind: "ox",
      prompt: "목마가 성으로 들어가는 밤은 『일리아스』 본문에 자세히 나온다.",
      answer: 0,
      explain: "『일리아스』는 헥토르의 장례로 끝납니다. 목마는 『오디세이아』의 회상과 『아이네이스』 쪽에 있습니다.",
    },
    {
      id: "who-plans",
      kind: "choice",
      prompt: "목마의 꾀를 낸 사람으로 이 편이 따르는 이는?",
      choices: ["오디세우스", "아킬레우스", "파리스", "헤라클레스"],
      answer: 0,
      explain: "아킬레우스는 함락 전에 죽습니다. 말은 에페이오스가 짓고, 꾀는 오디세우스 쪽 이야기입니다.",
    },
    {
      id: "sinon",
      kind: "ox",
      prompt: "일부러 남은 그리스인 시논은, 목마를 성 안에 들이면 트로이가 안전하다고 말한다.",
      answer: 1,
      explain: "『아이네이스』의 시논은 아테나에게 바친 선물이라고 거짓말을 합니다.",
    },
  ],
  characters: ["odysseus", "athena", "helene"],
  related: [
    { href: "/stories/trojan-war", label: "앞 이야기: 트로이 전쟁" },
    { href: "/in-media#troy-2004", label: "영화: 「트로이」 (2004)" },
    { href: "https://iliad-stories.vercel.app/scope#horse", label: "일리아스이야기 · 목마는 이 시 밖" },
  ],
  chat: [
    { id: "athena", name: "아테나", text: "성벽보다 호기심이 약해요.", pose: "proud" },
    { id: "odysseus", name: "오디세우스", text: "말은 비었고, 우리는 조용히.", pose: "sly" },
    { id: "laocoon", name: "라오콘", text: "창은 던졌습니다. 그다음은 화면 밖.", pose: "angry" },
    { id: "helene", name: "헬레네", text: "열 해 만에 문이 열리네요.", pose: "sad" },
    { id: "zeus", name: "제우스", text: "이 밤은 『일리아스』 목차가 아니야.", pose: "sly" },
    { id: "poseidon", name: "포세이돈", text: "뱀을 보낸 신이 나인지, 자료가 갈려요.", pose: "oops" },
  ],
  sources: [
    { work: "호메로스 『오디세이아』", ref: "4권 271–289행, 8권 492–520행" },
    { work: "베르길리우스 『아이네이스』", ref: "2권" },
    { work: "아폴로도로스 『비블리오테케』 요약", ref: "5권 14–23절" },
  ],
  panels: [
    {
      id: "horse-plan",
      bg: "shore",
      alt: "바닷가. 아테나와 오디세우스가 큰 말의 밑그림을 의논한다.",
      cast: [
        { id: "athena", pose: "point", x: 110, y: feet, scale: 0.95 },
        { id: "odysseus", pose: "sly", x: 250, y: feet, scale: 0.95 },
      ],
      bubbles: [
        { type: "narration", text: "성벽은 십 년을 버텼습니다. 오디세우스가 빈 말을 제안합니다." },
        { type: "speech", speaker: "오디세우스", text: "문은 그들 손으로 열리게.", align: "end" },
      ],
    },
    {
      id: "horse-build",
      bg: "shore",
      alt: "배 만드는 자리. 오디세우스가 가리키고, 장인이 나무 말을 세운다.",
      cast: [
        { id: "odysseus", pose: "point", x: 90, y: feet, scale: 0.9 },
        { id: "villager", pose: "craft", x: 200, y: feet, scale: 0.85 },
      ],
      props: [{ kind: "wooden-horse", x: 290, y: 360, scale: 1.35 }],
      bubbles: [
        { type: "narration", text: "에페이오스가 속을 비웁니다. 창은 들어가지 않고, 사람이 들어갑니다." },
        { type: "speech", speaker: "오디세우스", text: "발소리는 널빤지보다 작게.", align: "start" },
      ],
    },
    {
      id: "horse-inside",
      bg: "chamber",
      alt: "어두운 방처럼 보이는 말의 배 속. 오디세우스와 병사가 웅크린다.",
      cast: [
        { id: "odysseus", pose: "sneak", x: 130, y: feet, scale: 0.9 },
        { id: "villager", pose: "sneak", x: 240, y: feet, scale: 0.8, variant: 2 },
      ],
      bubbles: [
        { type: "narration", text: "정예가 안에 듭니다. 나머지는 배를 근처 섬 뒤로 물립니다." },
        { type: "speech", speaker: "병사", text: "재채기 금지.", align: "end" },
      ],
    },
    {
      id: "horse-left",
      bg: "shore",
      alt: "빈 해변에 나무 말만 있고, 멀리 돛이 사라진다.",
      cast: [],
      props: [
        { kind: "wooden-horse", x: 150, y: 360, scale: 1.4 },
        { kind: "sail", x: 290, y: 220, scale: 1.1 },
      ],
      bubbles: [
        { type: "narration", text: "해안이 조용해 보입니다. 조용한 것이 계획입니다." },
      ],
    },
    {
      id: "horse-laocoon",
      bg: "shore",
      alt: "사제 라오콘이 목마를 창으로 가리키며 경고한다.",
      cast: [{ id: "laocoon", pose: "point", x: 120, y: feet, scale: 1 }],
      props: [{ kind: "wooden-horse", x: 270, y: 340, scale: 1.2 }],
      bubbles: [
        { type: "narration", text: "사제 라오콘이 말합니다. 그리스인의 선물은 두렵다고." },
        { type: "speech", speaker: "라오콘", text: "들이기 전에 속을 보세요!", align: "start" },
      ],
    },
    {
      id: "horse-poof",
      bg: "shore",
      alt: "라오콘이 놀라고, 바다 쪽에 하얀 펑 구름만 있다. 뱀과 피해는 그리지 않았다.",
      sfx: "슈욱",
      cast: [{ id: "laocoon", pose: "surprised", x: 110, y: feet, scale: 0.95 }],
      props: [{ kind: "poof", x: 250, y: 320, scale: 1.1 }],
      bubbles: [
        { type: "narration", text: "바다에서 큰 뱀이 왔다는 밤입니다. 그 다음은 화면 밖이고, 경고는 묻힙니다." },
        { type: "speech", speaker: "라오콘", text: "내 창만 남았나…", align: "start" },
      ],
    },
    {
      id: "horse-sinon",
      bg: "palace",
      alt: "시논으로 보이는 그리스 병사가 웃으며 말하고, 트로이 사람이 듣는다.",
      cast: [
        { id: "villager", pose: "sly", x: 110, y: feet, scale: 0.95, variant: 2 },
        { id: "villager", pose: "curious", x: 250, y: feet, scale: 0.9, variant: 1 },
      ],
      bubbles: [
        { type: "narration", text: "일부러 남은 시논이 말합니다. 아테나의 선물이니 성 안에 두라고." },
        { type: "speech", speaker: "시논", text: "들이면 트로이가 지켜져요.", align: "start" },
      ],
    },
    {
      id: "horse-night",
      bg: "night",
      alt: "밤의 성. 거대한 나무 말이 문 앞에 있고 사람들이 끌어당긴다.",
      cast: [
        { id: "villager", pose: "happy", x: 80, y: feet, scale: 0.7 },
        { id: "villager", pose: "happy", x: 150, y: feet, scale: 0.7, variant: 1 },
      ],
      props: [{ kind: "wooden-horse", x: 270, y: 330, scale: 1.45 }],
      bubbles: [
        { type: "narration", text: "성벽을 조금 허물고 말을 들입니다. 잔치가 시작됩니다." },
        { type: "speech", speaker: "트로이 사람", text: "오늘 밤은 우리 거야!", align: "start" },
      ],
    },
    {
      id: "horse-open",
      bg: "night",
      alt: "밤. 오디세우스가 말에서 내려오고, 병사가 성문 쪽을 연다.",
      sfx: "끼익",
      cast: [
        { id: "odysseus", pose: "sneak", x: 140, y: feet, scale: 0.95 },
        { id: "villager", pose: "point", x: 270, y: feet, scale: 0.8, variant: 2 },
      ],
      bubbles: [
        { type: "narration", text: "잠이 깊어지자 말이 열리고, 성문이 열립니다." },
        { type: "speech", speaker: "오디세우스", text: "이제 신호를.", align: "start" },
      ],
    },
    {
      id: "horse-morning",
      bg: "shore",
      alt: "아침 해변. 헬레네가 멀리 연기를 보고, 아테나가 곁에 있다. 불타는 참상은 그리지 않았다.",
      cast: [
        { id: "helene", pose: "sad", x: 120, y: feet, scale: 0.95 },
        { id: "athena", pose: "idle", x: 260, y: feet, scale: 0.9 },
      ],
      bubbles: [
        { type: "narration", text: "함대는 돌아옵니다. 도시의 끝은 멀리 연기만으로 둡니다. 헬레네는 메넬라오스에게 돌아갑니다." },
        { type: "speech", speaker: "헬레네", text: "선물이 이렇게 크면.", align: "start" },
      ],
    },
  ],
};
