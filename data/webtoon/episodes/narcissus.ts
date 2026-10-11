import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const narcissus: Episode = {
  slug: "narcissus",
  title: "나르키소스",
  order: 7,
  minutes: 4,
  storySlug: "echo-narcissus",
  cover: "narcissus-pond",
  summary: {
    who: "말끝만 남은 님프 에코와, 자기 얼굴을 처음 본 나르키소스.",
    what: "헤라의 벌로 에코는 따라 말할 수밖에 없고, 나르키소스는 샘에 비친 얼굴을 사랑합니다.",
    so: "에코는 목소리가 되고, 그가 누운 자리에는 수선화가 핍니다.",
  },
  footnote:
    "두 이야기를 한 편으로 엮은 것은 오비디우스로 보입니다. 파우사니아스는 죽은 쌍둥이 누이를 그리워해 샘을 봤다는 판본을 전하며, 물에 비친 자신을 못 알아보는 설정이 이상하다고 덧붙입니다.",
  moral: "따라 하는 마음과, 거울만 보는 마음. 둘 다 밖으로 나가지 못합니다.",
  phrases: [
    {
      term: "나르시시즘",
      explain: "자기 자신에게만 빠지는 마음을 가리킬 때 그의 이름이 남았습니다. 꽃 이름 수선화(나르키소스)도 같은 이야기에서 옵니다.",
      links: [
        { href: "/words/narcissism", label: "단어: 나르시시즘" },
        { href: "/gods/narkissos", label: "나르키소스" },
      ],
    },
    {
      term: "에코",
      explain: "메아리입니다. 에코는 남의 말끝만 되풀이하게 된 뒤, 몸보다 소리가 오래 남습니다.",
      links: [
        { href: "/words/echo", label: "단어: 에코" },
        { href: "/gods/echo", label: "에코" },
      ],
    },
  ],
  quiz: [
    {
      id: "echo-punish",
      kind: "choice",
      prompt: "에코가 말끝만 되풀이하게 된 이유는?",
      choices: ["헤라의 수다를 붙잡은 벌", "나르키소스가 저주함", "샘물이 마법임", "아폴론의 음악 겨루기"],
      answer: 0,
      explain: "제우스가 님프들과 있는 동안 에코가 헤라를 수다로 붙잡았고, 들킨 뒤 말끝을 잃습니다.",
    },
    {
      id: "flower",
      kind: "ox",
      prompt: "나르키소스가 있던 자리에 피었다고 하는 꽃은 수선화다.",
      answer: 1,
      explain: "오비디우스는 가운데가 노랗고 꽃잎이 흰 꽃을 전합니다. 그 이름이 나르키소스입니다.",
    },
    {
      id: "one-version",
      kind: "ox",
      prompt: "에코와 나르키소스를 한 이야기로 묶은 것은 옛날부터 모든 그리스 자료가 같다.",
      answer: 0,
      explain: "묶음은 오비디우스 쪽이 유명하고, 파우사니아스는 다른 이유를 적습니다.",
    },
  ],
  characters: ["echo", "narkissos", "hera", "nemesis"],
  related: [
    { href: "/stories/echo-narcissus", label: "이야기: 에코와 나르키소스" },
    { href: "/in-media#waterhouse-echo-narcissus", label: "명화: 워터하우스 「에코와 나르키소스」" },
    { href: "/words/nemesis", label: "단어: 네메시스" },
  ],
  chat: [
    { id: "hera", name: "헤라", text: "수다로 나를 붙잡다니.", pose: "angry" },
    { id: "echo", name: "에코", text: "붙잡다니.", pose: "sad" },
    { id: "narkissos", name: "나르키소스", text: "물에 누가 있어? 나랑 닮았는데.", pose: "curious" },
    { id: "nemesis", name: "네메시스", text: "거절한 만큼, 응답이 없게.", pose: "idle" },
    { id: "zeus", name: "제우스", text: "님프 이야기는 내가 먼저 조용히 할게.", pose: "oops" },
    { id: "aphrodite", name: "아프로디테", text: "사랑인데 상대가 거울이면 곤란해.", pose: "sly" },
  ],
  sources: [
    { work: "오비디우스 『변신 이야기』", ref: "3권 339–510행" },
    { work: "파우사니아스 『그리스 안내기』", ref: "9권 31장 7–9절" },
  ],
  panels: [
    {
      id: "narcissus-chatter",
      bg: "forest",
      alt: "숲. 에코가 열심히 말하고, 헤라가 귀를 기울이다 눈을 가늘게 뜬다.",
      cast: [
        { id: "echo", pose: "wave", x: 110, y: feet, scale: 0.95 },
        { id: "hera", pose: "sly", x: 250, y: feet, scale: 0.95 },
      ],
      bubbles: [
        { type: "narration", text: "에코는 말이 많았습니다. 헤라가 제우스를 찾는 동안, 그 말을 붙잡습니다." },
        { type: "speech", speaker: "에코", text: "그것보다 이 숲 이야기, 그리고…", align: "start" },
      ],
    },
    {
      id: "narcissus-curse",
      bg: "forest",
      alt: "헤라가 손가락으로 가리키고, 에코가 입을 가린다.",
      cast: [
        { id: "hera", pose: "point", x: 120, y: feet, scale: 1 },
        { id: "echo", pose: "surprised", x: 260, y: feet, scale: 0.9 },
      ],
      bubbles: [
        { type: "narration", text: "들킨 헤라가 벌합니다. 이제 남의 말끝만 되풀이하라고." },
        { type: "speech", speaker: "헤라", text: "끝만 가져가.", align: "start" },
        { type: "speech", speaker: "에코", text: "가져가.", align: "end" },
      ],
    },
    {
      id: "narcissus-meet",
      bg: "forest",
      alt: "사냥하는 나르키소스를 나무 뒤에서 에코가 바라본다.",
      cast: [
        { id: "narkissos", pose: "curious", x: 200, y: feet, scale: 1 },
        { id: "echo", pose: "sneak", x: 80, y: feet, scale: 0.8 },
      ],
      bubbles: [
        { type: "narration", text: "숲의 청년 나르키소스. 에코는 먼저 말을 걸 수 없습니다." },
        { type: "speech", speaker: "나르키소스", text: "여기 누구 있니?", align: "end" },
      ],
    },
    {
      id: "narcissus-repeat",
      bg: "forest",
      alt: "에코가 두 팔을 벌리고, 나르키소스가 한 걸음 물러선다.",
      cast: [
        { id: "echo", pose: "offer", x: 110, y: feet, scale: 0.95 },
        { id: "narkissos", pose: "surprised", x: 260, y: feet, scale: 0.95 },
      ],
      bubbles: [
        { type: "speech", speaker: "에코", text: "있니!", align: "start" },
        { type: "speech", speaker: "나르키소스", text: "가까이 오지 마.", align: "end" },
        { type: "speech", speaker: "에코", text: "오지 마.", align: "start" },
      ],
    },
    {
      id: "narcissus-fade",
      bg: "forest",
      alt: "작게 남은 에코가 숲 한쪽에 있고, 나르키소스는 등을 돌린다.",
      cast: [
        { id: "echo", pose: "sad", x: 80, y: 390, scale: 0.55 },
        { id: "narkissos", pose: "idle", x: 230, y: feet, scale: 1 },
      ],
      bubbles: [
        { type: "narration", text: "상심한 에코는 몸이 얇아져 목소리가 됩니다. 바위가 말끝을 보관합니다." },
        { type: "speech", speaker: "에코", text: "…마.", align: "start" },
      ],
    },
    {
      id: "narcissus-prayer",
      bg: "forest",
      alt: "네메시스가 숲 위에 서고, 작은 기도하는 이가 아래 있다.",
      cast: [
        { id: "nemesis", pose: "idle", x: 180, y: 280, scale: 0.85, ground: false },
        { id: "villager", pose: "sad", x: 120, y: feet, scale: 0.7 },
      ],
      props: [{ kind: "cloud", x: 180, y: 310, scale: 0.7 }],
      bubbles: [
        { type: "narration", text: "거절당한 이가 빕니다. 그도 사랑하게 하되, 응답은 없게." },
        { type: "speech", speaker: "네메시스", text: "응보는 조용히 도착해.", align: "end" },
      ],
    },
    {
      id: "narcissus-pond",
      bg: "forest",
      alt: "맑은 샘. 나르키소스가 물에 비친 얼굴을 보고 놀란다.",
      cast: [{ id: "narkissos", pose: "curious", x: 150, y: 400, scale: 1 }],
      props: [{ kind: "pond", x: 210, y: 400, scale: 1.3, front: true }],
      bubbles: [
        { type: "narration", text: "물을 마시려다 얼굴을 봅니다. 이렇게 가까운 사람은 처음입니다." },
        { type: "speech", speaker: "나르키소스", text: "손만 뻗으면 되는데.", align: "start" },
      ],
    },
    {
      id: "narcissus-know",
      bg: "forest",
      alt: "나르키소스가 슬픈 얼굴로 샘을 내려다본다. 물결이 얼굴을 흐린다.",
      cast: [{ id: "narkissos", pose: "sad", x: 140, y: 390, scale: 1 }],
      props: [{ kind: "pond", x: 240, y: 410, scale: 1.15 }],
      bubbles: [
        { type: "narration", text: "물이 흔들리면 얼굴도 흩어집니다. 그제야 압니다. 저것은 나." },
        { type: "speech", speaker: "나르키소스", text: "내가 나를 붙잡을 수는 없구나.", align: "start" },
      ],
    },
    {
      id: "narcissus-flower",
      bg: "meadow",
      alt: "샘가에 흰 꽃잎과 노란 가운데의 수선화가 피어 있다.",
      cast: [],
      props: [
        { kind: "pond", x: 140, y: 400, scale: 1.1 },
        { kind: "narcissus", x: 240, y: 360, scale: 1.8 },
      ],
      bubbles: [
        { type: "narration", text: "그가 머물던 자리에 수선화가 핍니다. 에코의 말끝은 아직 숲에 있습니다." },
        { type: "speech", speaker: "에코", text: "없구나.", align: "end" },
      ],
    },
  ],
};
