import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const perseus: Episode = {
  slug: "perseus",
  title: "페르세우스와 메두사",
  order: 2,
  minutes: 5,
  storySlug: "perseus",
  cover: "perseus-cave",
  summary: {
    who: "황금 비로 태어난 페르세우스, 어머니 다나에, 잠든 메두사.",
    what: "폴리덱테스의 명으로 메두사의 머리를 구하러 가고, 방패에 비친 모습만 봅니다.",
    so: "안드로메다와 어머니를 구하고, 그 얼굴은 아테나의 아이기스에 남습니다.",
  },
  footnote:
    "줄거리는 아폴로도로스 『비블리오테케』를 따랐습니다. 오비디우스는 페르세우스가 메두사의 머리로 아틀라스를 산으로 바꿨다고 하는데, 아폴로도로스에는 그 장면이 없어 이 편에는 넣지 않았습니다. 안드로메다 일화가 들어가는 순서도 자료마다 조금씩 다릅니다. 목을 베는 순간과 원반이 닿는 순간은 화면 밖으로 두었습니다.",
  moral: "무서운 얼굴은 방패에 비춰 보고, 지킬 사람부터 구합니다.",
  phrases: [
    {
      term: "메두사의 시선",
      explain: "눈을 마주치면 돌이 된다는 고르곤의 얼굴입니다. 페르세우스가 방패의 반사만 본 이유이고, 그 얼굴은 나중에 악을 막는 부적으로도 쓰입니다.",
      links: [
        { href: "/gods/medousa", label: "메두사" },
        { href: "/words/medusa-versace", label: "단어: 메두사(베르사체 로고)" },
      ],
    },
    {
      term: "아이기스 · 이지스",
      explain: "제우스와 아테나의 염소가죽 방패 또는 흉갑입니다. 메두사의 얼굴이 여기에 붙습니다. 영어 aegis가 이 말이고, 이지스함의 이름도 여기에서 왔습니다.",
      links: [{ href: "/gods/athena", label: "아테나" }],
    },
    {
      term: "페가수스",
      explain: "메두사의 목에서 태어난 날개 달린 말입니다. 나중에 벨레로폰이 타고, 밤하늘의 페가수스자리가 됩니다.",
      links: [
        { href: "/gods/pegasos", label: "페가수스" },
        { href: "/stories/bellerophon", label: "이야기: 벨레로폰과 페가수스" },
      ],
    },
  ],
  quiz: [
    {
      id: "mother",
      kind: "choice",
      prompt: "페르세우스의 어머니는 누구일까요?",
      choices: ["다나에", "헤라", "안드로메다", "메두사"],
      answer: 0,
      explain: "제우스가 황금 비가 되어 다나에에게 갔고, 페르세우스가 태어났습니다. 안드로메다는 나중에 아내가 됩니다.",
    },
    {
      id: "gaze",
      kind: "ox",
      prompt: "페르세우스는 메두사의 얼굴을 똑바로 보고 다가갔다.",
      answer: 0,
      explain: "아테나의 방패에 비친 모습만 보고 다가갔습니다. 똑바로 보면 돌이 됩니다.",
    },
    {
      id: "aegis",
      kind: "choice",
      prompt: "메두사의 얼굴이 붙는 아테나의 방패를 부르는 이름은?",
      choices: ["아이기스(이지스)", "피토스", "케리케이온", "페타소스"],
      answer: 0,
      explain: "아이기스는 제우스와 아테나의 방패입니다. 피토스는 판도라의 항아리, 케리케이온은 헤르메스의 지팡이, 페타소스는 모자입니다.",
    },
  ],
  characters: ["perseus", "danae", "zeus", "athena", "hermes", "medousa", "andromeda", "pegasos"],
  related: [
    { href: "/in-media#clash-of-the-titans-2010", label: "영화: 「타이탄」(2010)" },
    { href: "/in-media#wrath-of-the-titans-2012", label: "영화: 「타이탄의 분노」(2012)" },
    { href: "/in-media#percy-jackson-2010", label: "영화: 「퍼시 잭슨과 번개 도둑」(2010)" },
    { href: "/in-media#caravaggio-medusa", label: "명화: 카라바조 「메두사」" },
    { href: "/in-media#burne-jones-rock-of-doom", label: "명화: 번존스 「운명의 바위」" },
  ],
  chat: [
    { id: "zeus", name: "제우스", text: "황금 비, 작전치고는 괜찮지 않아?", pose: "proud" },
    { id: "hera", name: "헤라", text: "그 자랑은 이 단톡 금지.", pose: "sly" },
    { id: "athena", name: "아테나", text: "방패 보라고 한 건 나야. 잘 들었네.", pose: "proud" },
    { id: "hermes", name: "헤르메스", text: "샌들 반납일은 언제죠.", pose: "sly" },
    { id: "perseus", name: "페르세우스", text: "어머니부터요. 샌들은 그다음.", pose: "proud", look: "ready" },
    { id: "graeae", name: "그라이아이", text: "눈은 돌려받았어요. 이번엔 봐줌.", pose: "angry" },
    { id: "medusa", name: "메두사", text: "펑 효과 감사합니다. 저는 잠이나 잘게요.", pose: "sleepy" },
    { id: "pegasus", name: "페가수스", text: "히히힝. (번역: 별자리 자리 있어요?)", pose: "fly" },
  ],
  sources: [
    { work: "아폴로도로스 『비블리오테케』", ref: "2권 4장 1–4절" },
    { work: "오비디우스 『변신 이야기』", ref: "4권 604행–5권 249행" },
  ],
  panels: [
    {
      id: "perseus-rain",
      bg: "chamber",
      alt: "청동 방. 금빛 빗방울이 내리고, 다나에가 아기를 안은 채 올려다본다. 구름 위에 작은 제우스가 있다.",
      sfx: "반짝",
      cast: [
        { id: "danae", pose: "hold", x: 168, y: feet, scale: 1.12 },
        { id: "zeus", pose: "proud", x: 286, y: 230, scale: 0.55, ground: false },
      ],
      props: [
        { kind: "cloud", x: 286, y: 248, scale: 0.7 },
        { kind: "gold-rain", x: 150, y: 188, scale: 1.05 },
      ],
      bubbles: [
        { type: "narration", text: "왕은 딸을 청동 방에 가뒀습니다. 제우스는 황금 비가 되어 왔고, 페르세우스가 태어났습니다." },
        { type: "speech", speaker: "다나에", text: "비가 금빛이야.", align: "start" },
      ],
    },
    {
      id: "perseus-sea",
      bg: "sea",
      alt: "파도 위 나무 상자. 다나에가 아기를 안고 상자 안에 있다.",
      cast: [{ id: "danae", pose: "hold", x: 180, y: 392, scale: 0.92 }],
      props: [{ kind: "chest", x: 180, y: 400, scale: 1.15, front: true }],
      bubbles: [
        { type: "narration", text: "모자는 나무 상자에 담겨 바다로 떠났고, 세리포스섬에 닿았습니다." },
        { type: "speech", speaker: "다나에", text: "페르세우스, 파도만 보면 돼.", align: "start" },
      ],
    },
    {
      id: "perseus-task",
      bg: "palace",
      alt: "궁전. 폴리덱테스가 웃으며 명령하고, 젊은 페르세우스가 듣고, 다나에가 뒤에서 걱정한다.",
      cast: [
        { id: "polydectes", pose: "sly", x: 95, y: feet, scale: 1.02 },
        { id: "perseus", pose: "proud", x: 220, y: feet, scale: 0.98 },
        { id: "danae", pose: "worried", x: 312, y: 436, scale: 0.7 },
      ],
      bubbles: [
        { type: "narration", text: "폴리덱테스는 다나에를 원했습니다. 청년에게 불가능한 선물을 시킵니다." },
        { type: "speech", speaker: "폴리덱테스", text: "결혼 선물로 메두사 머리를.", align: "start" },
        { type: "speech", speaker: "페르세우스", text: "가져오겠습니다. 어머니.", align: "end" },
      ],
    },
    {
      id: "perseus-gifts",
      bg: "shore",
      alt: "바닷가. 아테나와 헤르메스가 날개 샌들과 거울 방패를 갖춘 페르세우스에게 길을 알려 준다.",
      cast: [
        { id: "athena", pose: "offer", x: 78, y: feet, scale: 0.92 },
        { id: "hermes", pose: "offer", x: 178, y: feet, scale: 0.88 },
        { id: "perseus", pose: "proud", x: 290, y: feet, scale: 0.98, look: "ready" },
      ],
      bubbles: [
        { type: "narration", text: "날개 샌들, 숨는 투구, 자루, 굽은 칼, 거울 같은 방패." },
        { type: "speech", speaker: "아테나", text: "그 얼굴은 방패로만 봐.", align: "start" },
        { type: "speech", speaker: "페르세우스", text: "눈은 청동에게 맡길게요.", align: "end" },
      ],
    },
    {
      id: "perseus-graeae",
      bg: "cave",
      alt: "동굴 바위 위에 그라이아이 세 자매가 있고, 페르세우스가 커다란 눈알을 들고 길을 묻는다.",
      cast: [
        { id: "graeae", pose: "angry", x: 228, y: 268, scale: 0.58, ground: false },
        { id: "perseus", pose: "point", x: 78, y: feet, scale: 0.86, look: "ready" },
      ],
      props: [
        { kind: "ledge", x: 228, y: 286, scale: 0.95 },
        { kind: "shared-eye", x: 158, y: 348, scale: 1.05, front: true },
      ],
      bubbles: [
        { type: "narration", text: "그라이아이 세 자매는 눈 하나와 이 하나를 돌려 썼습니다." },
        { type: "speech", speaker: "그라이아이", text: "눈 없이 길을 어떻게 알려 줘!", align: "end" },
        { type: "speech", speaker: "페르세우스", text: "알려 주시면 바로 돌려드려요.", align: "start" },
      ],
    },
    {
      id: "perseus-cave",
      bg: "cave",
      alt: "동굴에서 뱀 머리의 메두사가 잠들어 있고, 페르세우스는 거울 방패만 들여다본다.",
      sfx: "즈즈",
      cast: [
        { id: "medusa", pose: "sleepy", x: 255, y: feet, scale: 1.12 },
        { id: "perseus", pose: "shield", x: 112, y: feet, scale: 1.02, look: "ready", flip: true },
      ],
      bubbles: [
        { type: "narration", text: "고르곤은 잠들어 있었습니다. 페르세우스는 고개 대신 방패를 들었습니다." },
        { type: "speech", speaker: "페르세우스", text: "방패야, 너만 본다.", align: "start" },
      ],
    },
    {
      id: "perseus-poof",
      bg: "cave",
      alt: "화면 한쪽에 하얀 펑 구름과 자루, 날개 달린 말 페가수스가 튀어나오고 페르세우스가 놀란다. 벤 모습은 없다.",
      sfx: "펑!",
      cast: [
        { id: "perseus", pose: "surprised", x: 92, y: feet, scale: 0.96, look: "ready" },
        { id: "pegasus", pose: "fly", x: 292, y: 268, scale: 0.68, ground: false },
      ],
      props: [
        { kind: "poof", x: 188, y: 300, scale: 0.85 },
        { kind: "kibisis", x: 168, y: 392, scale: 1.05, front: true },
      ],
      bubbles: [
        { type: "narration", text: "베는 순간은 화면 밖입니다. 자루가 무거워지고, 천마가 뛰어나왔습니다." },
        { type: "speech", speaker: "페르세우스", text: "피에서… 말이?", align: "start" },
      ],
    },
    {
      id: "perseus-rock",
      bg: "shore",
      alt: "바닷가 바위에 안드로메다가 서 있고, 파도 위에 괴물의 눈만 보이며, 페르세우스가 날아온다.",
      cast: [
        { id: "andromeda", pose: "worried", x: 112, y: 424, scale: 1.02 },
        { id: "perseus", pose: "fly", x: 262, y: 300, scale: 0.72, look: "ready", ground: false },
      ],
      props: [
        { kind: "rock", x: 112, y: 455, scale: 1.25 },
        { kind: "ribbons", x: 112, y: 390, scale: 1.1 },
        { kind: "sea-eyes", x: 280, y: 400, scale: 1.05 },
      ],
      bubbles: [
        { type: "narration", text: "에티오피아. 카시오페이아의 자랑 때문에 안드로메다가 바위에 있습니다." },
        { type: "speech", speaker: "안드로메다", text: "괴물이 바다에서 나와요.", align: "start" },
        { type: "speech", speaker: "페르세우스", text: "고개는 숙여요. 자루가 볼게요.", align: "end" },
      ],
    },
    {
      id: "perseus-rocks",
      bg: "shore",
      alt: "바다 괴물 자리에는 돌무더기만 있고, 안드로메다와 페르세우스가 안도한다.",
      sfx: "돌덩",
      cast: [
        { id: "andromeda", pose: "happy", x: 115, y: feet, scale: 1.02 },
        { id: "perseus", pose: "proud", x: 240, y: feet, scale: 1, look: "ready" },
      ],
      props: [{ kind: "rocks", x: 300, y: 400, scale: 1.15, front: true }],
      bubbles: [
        { type: "narration", text: "괴물은 메두사의 시선을 맞고 돌이 됩니다." },
        { type: "speech", speaker: "안드로메다", text: "사슬이 풀렸어요.", align: "start" },
        { type: "speech", speaker: "페르세우스", text: "이제 어머니에게 가요.", align: "end" },
      ],
    },
    {
      id: "perseus-return",
      bg: "palace",
      alt: "궁전. 폴리덱테스가 놀란 표정으로 돌이 되어 있고, 페르세우스와 다나에가 무사히 마주 본다.",
      sfx: "딱딱",
      cast: [
        { id: "villager", pose: "stone", x: 48, y: feet, scale: 0.62 },
        { id: "polydectes", pose: "stone", x: 118, y: feet, scale: 0.95 },
        { id: "perseus", pose: "proud", x: 230, y: feet, scale: 0.98, look: "ready" },
        { id: "danae", pose: "happy", x: 318, y: 436, scale: 0.78 },
      ],
      bubbles: [
        { type: "narration", text: "세리포스. 왕과 그 무리는 석상이 되었고, 다나에는 무사했습니다." },
        { type: "speech", speaker: "다나에", text: "살아 돌아왔구나.", align: "end" },
        { type: "speech", speaker: "페르세우스", text: "선물은 왕이 받게 뒀어요.", align: "start" },
      ],
    },
    {
      id: "perseus-discus",
      bg: "arena",
      alt: "경기장. 원반이 허공에 있고, 페르세우스와 관중석의 아크리시오스가 서로를 알아본다. 부딪히는 순간은 그리지 않았다.",
      cast: [
        { id: "perseus", pose: "oops", x: 100, y: feet, scale: 1 },
        { id: "acrisius", pose: "surprised", x: 270, y: 430, scale: 0.92 },
      ],
      props: [{ kind: "discus", x: 180, y: 210, scale: 1.3, front: true }],
      bubbles: [
        { type: "narration", text: "훗날 원반이 관중석의 노인에게 닿습니다. 할아버지 아크리시오스였습니다." },
        { type: "speech", speaker: "페르세우스", text: "겨냥한 사람은 없었어요.", align: "start" },
        { type: "speech", speaker: "아크리시오스", text: "그 아이… 신탁이구나.", align: "end" },
      ],
    },
    {
      id: "perseus-aegis",
      bg: "sky",
      alt: "하늘. 아테나 방패에 작은 메두사 얼굴이 부적으로 붙고, 페르세우스와 안드로메다, 페가수스가 함께 있다.",
      cast: [
        { id: "athena", pose: "proud", x: 92, y: feet, scale: 1, look: "aegis" },
        { id: "perseus", pose: "happy", x: 210, y: feet, scale: 0.92, look: "ready" },
        { id: "andromeda", pose: "happy", x: 305, y: 436, scale: 0.78 },
        { id: "pegasus", pose: "fly", x: 318, y: 236, scale: 0.46, ground: false },
      ],
      bubbles: [
        { type: "narration", text: "그 얼굴은 아테나의 아이기스에 붙습니다. 이지스라는 말도 여기에서 왔습니다." },
        { type: "speech", speaker: "아테나", text: "악을 막는 표식이야.", align: "start" },
        { type: "speech", speaker: "페르세우스", text: "시선은 남고, 무서움은 여기까지.", align: "end" },
      ],
    },
  ],
};
