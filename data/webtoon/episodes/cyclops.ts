import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const cyclops: Episode = {
  slug: "cyclops",
  title: "오디세우스와 키클롭스",
  order: 10,
  minutes: 5,
  storySlug: "odyssey",
  cover: "cyclops-name",
  summary: {
    who: "귀향 중인 오디세우스와, 외눈 거인 폴리페모스.",
    what: "동굴에 갇힌 오디세우스는 이름을 ‘아무도’라고 속이고, 양을 타고 빠져나옵니다.",
    so: "탈출 뒤 진짜 이름을 외친 탓에 포세이돈의 분노를 삽니다. 눈을 상하게 하는 순간은 구름으로 가렸습니다.",
  },
  footnote:
    "이 밤은 『오디세이아』 9권입니다. 『일리아스』의 오디세우스는 아직 집에 가지 않습니다. 일리아스이야기의 ‘오디세우스의 귀향’ 칸이 그 경계를 적어 둡니다. 눈을 해치는 방법은 이야기마다 잔인함이 다른데, 여기서는 결과만 말로 남깁니다.",
  moral: "빠져나온 뒤에는, 이름까지 조용히 합니다.",
  phrases: [
    {
      term: "아무도 아닙니다",
      explain: "오디세우스가 댄 이름은 우티스, ‘아무도’입니다. 거인이 도움을 청해도 이웃은 ‘아무도 해치지 않았다’고 듣습니다.",
      links: [
        { href: "/gods/odysseus", label: "오디세우스" },
        { href: "/gods/polyphemos", label: "폴리페모스" },
      ],
    },
    {
      term: "오디세이아",
      explain: "집으로 가는 긴 길을 말할 때 쓰는 단어가 이 귀향에서 왔습니다. 키클롭스는 그 길의 앞부분입니다.",
      links: [
        { href: "/words/odyssey", label: "단어: 오디세이" },
        { href: "/stories/odyssey", label: "이야기: 오디세이아" },
        { href: "https://iliad-stories.vercel.app/scope#odyssey", label: "일리아스이야기 · 귀향은 다른 시" },
      ],
    },
  ],
  quiz: [
    {
      id: "book",
      kind: "choice",
      prompt: "폴리페모스 동굴은 어느 이야기의 장면인가?",
      choices: ["『오디세이아』", "『일리아스』 22권", "『신통기』", "판도라의 항아리"],
      answer: 0,
      explain: "귀향의 모험은 『오디세이아』 9권입니다. 『일리아스』는 그 전에 끝납니다.",
    },
    {
      id: "name",
      kind: "ox",
      prompt: "오디세우스는 동굴 안에서 처음부터 자기 이름을 밝혔다.",
      answer: 0,
      explain: "안에서는 ‘아무도’였고, 배 위에서 진짜 이름을 외칩니다. 그 자랑이 화가 됩니다.",
    },
    {
      id: "father",
      kind: "choice",
      prompt: "이름을 듣고 바다에서 분노하는 폴리페모스의 아버지는?",
      choices: ["포세이돈", "제우스", "하데스", "아폴론"],
      answer: 0,
      explain: "포세이돈은 그의 아버지로 전해지고, 그 뒤 오디세우스의 항해는 더 길어집니다.",
    },
  ],
  characters: ["odysseus", "polyphemos", "poseidon"],
  related: [
    { href: "/in-media#the-odyssey-2026", label: "영화: 「오디세이」 (2026)" },
    { href: "https://iliad-stories.vercel.app/heroes/odysseus", label: "일리아스이야기 · 오디세우스" },
    { href: "https://iliad-stories.vercel.app/scope#odyssey", label: "일리아스이야기 · 귀향은 다른 시" },
  ],
  chat: [
    { id: "odysseus", name: "오디세우스", text: "이름은 배에서 참을 걸.", pose: "oops" },
    { id: "polyphemos", name: "폴리페모스", text: "아무도가 해쳤대. 이웃이 안 왔어.", pose: "angry" },
    { id: "poseidon", name: "포세이돈", text: "아들 이름 듣고 파도를 키웠지.", pose: "angry" },
    { id: "athena", name: "아테나", text: "꾀는 좋았고, 마무리가 시끄러웠어요.", pose: "sly" },
    { id: "zeus", name: "제우스", text: "이 동굴은 내 51일이 아니야.", pose: "idle" },
    { id: "hermes", name: "헤르메스", text: "양 밑이 제일 빠른 문이라니.", pose: "happy" },
  ],
  sources: [
    { work: "호메로스 『오디세이아』", ref: "9권 105–566행" },
  ],
  panels: [
    {
      id: "cyclops-cave",
      bg: "cave",
      alt: "동굴. 양들 사이에 잠긴 듯한 폴리페모스가 있고, 오디세우스가 입구에서 살핀다.",
      cast: [
        { id: "odysseus", pose: "sneak", x: 90, y: feet, scale: 0.85 },
        { id: "polyphemos", pose: "sleepy", x: 240, y: 430, scale: 0.85 },
      ],
      props: [{ kind: "sheep", x: 160, y: 400, scale: 0.9 }],
      bubbles: [
        { type: "narration", text: "양 떼의 동굴. 주인은 외눈이 하나인 폴리페모스입니다." },
        { type: "speech", speaker: "오디세우스", text: "치즈는 있는데, 문이 크네.", align: "start" },
      ],
    },
    {
      id: "cyclops-door",
      bg: "cave",
      alt: "폴리페모스가 입구를 막고, 오디세우스가 걱정한다.",
      cast: [
        { id: "polyphemos", pose: "angry", x: 130, y: 420, scale: 0.9 },
        { id: "odysseus", pose: "worried", x: 280, y: feet, scale: 0.75 },
      ],
      bubbles: [
        { type: "narration", text: "바위가 문을 막습니다. 손님 대접은 없습니다." },
        { type: "speech", speaker: "폴리페모스", text: "너는 누구야.", align: "start" },
      ],
    },
    {
      id: "cyclops-name",
      bg: "cave",
      alt: "오디세우스가 태연하게 이름을 속이고, 거인이 고개를 기울인다.",
      cast: [
        { id: "odysseus", pose: "sly", x: 110, y: feet, scale: 0.9 },
        { id: "polyphemos", pose: "curious", x: 250, y: 420, scale: 0.85 },
      ],
      bubbles: [
        { type: "narration", text: "오디세우스는 이름을 우티스, 곧 ‘아무도’라고 댑니다." },
        { type: "speech", speaker: "오디세우스", text: "아무도입니다. 손님이에요.", align: "start" },
      ],
    },
    {
      id: "cyclops-wine",
      bg: "cave",
      alt: "오디세우스가 포도주 잔을 건네고, 폴리페모스가 졸린 얼굴이 된다.",
      cast: [
        { id: "odysseus", pose: "offer", x: 110, y: feet, scale: 0.88 },
        { id: "polyphemos", pose: "sleepy", x: 250, y: 420, scale: 0.88 },
      ],
      props: [{ kind: "wine", x: 180, y: 340, scale: 1.3, front: true }],
      bubbles: [
        { type: "narration", text: "강한 포도주가 먼저 일을 합니다." },
        { type: "speech", speaker: "폴리페모스", text: "아무도… 좋은 술이야.", align: "end" },
      ],
    },
    {
      id: "cyclops-poof",
      bg: "cave",
      alt: "폴리페모스 얼굴 앞에 하얀 펑 구름이 있고, 오디세우스는 양 뒤에 있다. 상처는 없다.",
      sfx: "펑",
      cast: [
        { id: "polyphemos", pose: "surprised", x: 220, y: 420, scale: 0.9 },
        { id: "odysseus", pose: "sneak", x: 90, y: feet, scale: 0.75 },
      ],
      props: [{ kind: "poof", x: 200, y: 300, scale: 1 }],
      bubbles: [
        { type: "narration", text: "눈이 상하는 순간은 구름 뒤입니다. 거인은 도움을 청합니다." },
        { type: "speech", speaker: "폴리페모스", text: "아무도가 나를 해쳤어!", align: "end" },
      ],
    },
    {
      id: "cyclops-sheep",
      bg: "cave",
      alt: "아침. 양이 앞을 가리고, 그 아래 오디세우스가 매달려 나간다. 거인은 위를 더듬는다.",
      cast: [
        { id: "polyphemos", pose: "worried", x: 250, y: 400, scale: 0.8 },
        { id: "odysseus", pose: "sneak", x: 130, y: 430, scale: 0.7 },
      ],
      props: [{ kind: "sheep", x: 140, y: 360, scale: 1.35, front: true }],
      bubbles: [
        { type: "narration", text: "아침 양 떼. 거인은 등의 양만 더듬고, 배는 지나칩니다." },
        { type: "speech", speaker: "오디세우스", text: "양아, 천천히. 문은 저기.", align: "start" },
      ],
    },
    {
      id: "cyclops-ship",
      bg: "sea",
      alt: "바다의 배. 오디세우스와 부하가 노를 저으며 안도한다.",
      cast: [
        { id: "odysseus", pose: "happy", x: 140, y: 400, scale: 0.85 },
        { id: "villager", pose: "happy", x: 240, y: 410, scale: 0.7, variant: 2 },
      ],
      props: [{ kind: "sail", x: 300, y: 250, scale: 1.1 }],
      bubbles: [
        { type: "narration", text: "배가 떨어집니다. 여기까지는 조용한 승리입니다." },
        { type: "speech", speaker: "부하", text: "이름만 삼키면 돼요.", align: "end" },
      ],
    },
    {
      id: "cyclops-shout",
      bg: "sea",
      alt: "배 위의 오디세우스가 손을 흔들며 외치고, 절벽의 폴리페모스가 듣는다.",
      sfx: "야!",
      cast: [
        { id: "odysseus", pose: "wave", x: 110, y: 400, scale: 0.85 },
        { id: "polyphemos", pose: "angry", x: 270, y: 300, scale: 0.62, ground: false },
      ],
      bubbles: [
        { type: "narration", text: "오디세우스가 참지 못합니다. 진짜 이름을 바위에 던지듯 외칩니다." },
        { type: "speech", speaker: "오디세우스", text: "나는 오디세우스다!", align: "start" },
      ],
    },
    {
      id: "cyclops-poseidon",
      bg: "sea",
      alt: "파도 위 포세이돈이 삼지창을 들고 화나 있고, 멀리 작은 배가 있다.",
      cast: [
        { id: "poseidon", pose: "angry", x: 140, y: feet, scale: 1.05 },
        { id: "odysseus", pose: "worried", x: 300, y: 360, scale: 0.55 },
      ],
      bubbles: [
        { type: "narration", text: "폴리페모스가 아버지 포세이돈에게 빕니다. 바다가 답을 합니다." },
        { type: "speech", speaker: "포세이돈", text: "그 이름, 파도가 기억하지.", align: "start" },
      ],
    },
    {
      id: "cyclops-wave",
      bg: "sea",
      alt: "높은 파도 앞에서 오디세우스가 돛대를 붙든다.",
      sfx: "출렁",
      cast: [{ id: "odysseus", pose: "oops", x: 160, y: 390, scale: 0.95 }],
      props: [{ kind: "sail", x: 250, y: 280, scale: 1.2 }],
      bubbles: [
        { type: "narration", text: "귀향은 여기서 끝나지 않습니다. 이름은 이미 바다에 있습니다." },
        { type: "speech", speaker: "오디세우스", text: "자랑은 육지에서 할 걸.", align: "start" },
      ],
    },
  ],
};
