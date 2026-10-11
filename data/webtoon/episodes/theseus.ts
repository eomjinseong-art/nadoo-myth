import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const theseus: Episode = {
  slug: "theseus",
  title: "테세우스와 미노타우로스",
  order: 4,
  minutes: 5,
  storySlug: "theseus-minotaur",
  cover: "theseus-thread",
  summary: {
    who: "아테네의 테세우스, 크레타의 아리아드네, 미궁의 미노타우로스.",
    what: "아리아드네가 준 실을 풀며 미궁에 들어가 괴물을 이기고 실을 따라 나옵니다.",
    so: "돌아온 배의 돛이 여전히 검어, 아버지 아이게우스는 바다로 떨어집니다. 그 순간은 그리지 않았습니다.",
  },
  footnote:
    "아리아드네를 낙소스에 둔 이유(잊음, 디오니소스의 요구, 아테나의 명령)와 제물을 바친 주기, 아이게우스가 몸을 던진 장소는 자료마다 다릅니다. 에게해 이름이 그에게서 왔다는 말은 고대 전승이지만 어원은 확실하지 않습니다. 실타래는 다이달로스의 꾀로도 전합니다.",
  moral: "들어가는 실과, 돌아오는 돛. 둘 다 미리 약속한 것입니다.",
  phrases: [
    {
      term: "아리아드네의 실",
      explain: "복잡한 곳에서 빠져나올 단서를 실에 비깁니다. 입구에 끝을 묶고 들어가라는 꾀입니다.",
      links: [
        { href: "/gods/ariadne", label: "아리아드네" },
        { href: "/stories/theseus-minotaur", label: "이야기: 테세우스와 미노타우로스" },
      ],
    },
    {
      term: "미노타우로스",
      explain: "소의 머리와 사람의 몸을 가진 미궁의 괴물입니다. 이 편에서는 쓰러지는 순간을 구름으로 가렸습니다.",
      links: [{ href: "/gods/minotauros", label: "미노타우로스" }],
    },
  ],
  quiz: [
    {
      id: "thread",
      kind: "choice",
      prompt: "테세우스가 미궁에서 길을 찾은 방법은?",
      choices: ["실타래를 풀며 들어가 따라 나옴", "거울 방패", "황금 사과", "날개"],
      answer: 0,
      explain: "아리아드네가 실을 줍니다. 꾀를 다이달로스가 일러 주었다는 말도 있습니다.",
    },
    {
      id: "sail",
      kind: "ox",
      prompt: "테세우스는 약속대로 돌아올 때 검은 돛을 흰 돛으로 바꿨다.",
      answer: 0,
      explain: "흰 돛으로 바꾸기를 잊습니다. 검은 돛을 본 아이게우스는 아들이 죽은 줄 압니다.",
    },
    {
      id: "naxos",
      kind: "ox",
      prompt: "아리아드네는 낙소스에 남고, 훗날 디오니소스의 아내가 되었다는 전승이 있다.",
      answer: 1,
      explain: "버린 이유는 판본마다 다르고, 디오니소스와 만난다는 결은 여러 자료에 있습니다.",
    },
  ],
  characters: ["theseus", "ariadne", "minotauros", "daidalos", "dionysos", "poseidon"],
  related: [
    { href: "/in-media#titian-bacchus-ariadne", label: "명화: 티치아노 「바쿠스와 아리아드네」" },
    { href: "/stories/icarus", label: "다음 이야기: 다이달로스와 이카로스" },
  ],
  chat: [
    { id: "ariadne", name: "아리아드네", text: "실 끝은 문에 묶어 두세요.", pose: "offer" },
    { id: "theseus", name: "테세우스", text: "실은 기억했는데, 돛을.", pose: "oops" },
    { id: "minotauros", name: "미노타우로스", text: "펑 효과 감사합니다. 미궁은 조용해요.", pose: "sleepy" },
    { id: "daidalos", name: "다이달로스", text: "길이 복잡하면 실이 지도예요.", pose: "proud" },
    { id: "dionysos", name: "디오니소스", text: "낙소스의 아침은 내가 맞이할게.", pose: "happy" },
    { id: "aegeus", name: "아이게우스", text: "흰 돛이라고 했는데. 바다는 내 이름을 가져갔어.", pose: "sad" },
    { id: "poseidon", name: "포세이돈", text: "아버지 이야기는 자료가 두 갈래야. 오늘은 아이게우스.", pose: "sly" },
  ],
  sources: [
    { work: "플루타르코스 『테세우스전』", ref: "15–22장" },
    { work: "아폴로도로스 『에피토메』", ref: "1권 7–11절" },
    { work: "오비디우스 『변신 이야기』", ref: "8권 152–182행" },
  ],
  panels: [
    {
      id: "theseus-sail",
      bg: "sea",
      alt: "검은 돛의 배. 부두의 아이게우스와 배 위의 테세우스가 약속한다.",
      cast: [
        { id: "aegeus", pose: "worried", x: 90, y: feet, scale: 0.9 },
        { id: "theseus", pose: "proud", x: 240, y: 400, scale: 0.85 },
      ],
      props: [{ kind: "sail", x: 300, y: 250, scale: 1.3 }],
      bubbles: [
        { type: "narration", text: "아테네는 청년과 처녀를 크레타 미궁에 보냅니다. 테세우스가 그 배에 오릅니다." },
        { type: "speech", speaker: "테세우스", text: "살면 흰 돛으로 바꿀게요.", align: "end" },
      ],
    },
    {
      id: "theseus-thread",
      bg: "palace",
      alt: "궁전. 아리아드네가 실타래를 테세우스에게 건넨다.",
      cast: [
        { id: "ariadne", pose: "offer", x: 120, y: feet, scale: 0.95 },
        { id: "theseus", pose: "curious", x: 260, y: feet, scale: 0.95 },
      ],
      props: [{ kind: "thread", x: 190, y: 340, scale: 1.3, front: true }],
      bubbles: [
        { type: "narration", text: "공주 아리아드네가 실을 줍니다. 다이달로스가 일러 준 길입니다." },
        { type: "speech", speaker: "아리아드네", text: "끝은 문에. 손에서 놓지 마요.", align: "start" },
      ],
    },
    {
      id: "theseus-maze",
      bg: "labyrinth",
      alt: "미궁 복도. 테세우스가 빨간 실을 풀며 걸어간다.",
      cast: [{ id: "theseus", pose: "sneak", x: 160, y: feet, scale: 0.95 }],
      props: [{ kind: "thread", x: 80, y: 360, scale: 1.2 }],
      bubbles: [
        { type: "narration", text: "라비린토스. 벽은 비슷하고, 실만 다릅니다." },
        { type: "speech", speaker: "테세우스", text: "돌아가도 이 선이면 돼.", align: "start" },
      ],
    },
    {
      id: "theseus-meet",
      bg: "labyrinth",
      alt: "미궁 끝. 소머리의 미노타우로스와 테세우스가 마주 본다.",
      cast: [
        { id: "theseus", pose: "shield", x: 100, y: feet, scale: 0.9 },
        { id: "minotauros", pose: "angry", x: 250, y: feet, scale: 1 },
      ],
      bubbles: [
        { type: "narration", text: "미궁 깊숙한 곳에 미노타우로스가 있습니다." },
        { type: "speech", speaker: "테세우스", text: "오늘은 제물이 아니야.", align: "start" },
      ],
    },
    {
      id: "theseus-poof",
      bg: "labyrinth",
      alt: "미노타우로스가 어지러운 표정을 하고, 사이에 하얀 펑 구름이 있다. 상처는 없다.",
      sfx: "펑",
      cast: [
        { id: "theseus", pose: "oops", x: 100, y: feet, scale: 0.9 },
        { id: "minotauros", pose: "surprised", x: 270, y: feet, scale: 0.9 },
      ],
      props: [{ kind: "poof", x: 180, y: 340, scale: 1 }],
      bubbles: [
        { type: "narration", text: "쓰러뜨리는 순간은 구름 뒤입니다. 실은 아직 손에 있습니다." },
        { type: "speech", speaker: "테세우스", text: "이제 실을 감아.", align: "start" },
      ],
    },
    {
      id: "theseus-out",
      bg: "shore",
      alt: "미궁 밖 해변. 아리아드네가 실 끝을 잡고, 테세우스가 나온다.",
      cast: [
        { id: "ariadne", pose: "happy", x: 110, y: feet, scale: 0.95 },
        { id: "theseus", pose: "happy", x: 240, y: feet, scale: 0.95 },
      ],
      props: [{ kind: "thread", x: 170, y: 380, scale: 1 }],
      bubbles: [
        { type: "narration", text: "실이 출구가 됩니다. 둘은 배에 오릅니다." },
        { type: "speech", speaker: "아리아드네", text: "문이 아직 같은 문이에요.", align: "start" },
      ],
    },
    {
      id: "theseus-naxos",
      bg: "shore",
      alt: "섬. 아리아드네가 잠들고, 디오니소스가 다가오고, 멀리 배가 떠난다.",
      cast: [
        { id: "ariadne", pose: "sleepy", x: 130, y: feet, scale: 0.9 },
        { id: "dionysos", pose: "offer", x: 250, y: feet, scale: 0.85 },
      ],
      props: [{ kind: "sail", x: 70, y: 230, scale: 0.8 }],
      bubbles: [
        { type: "narration", text: "낙소스. 잠든 아리아드네를 배가 두고 갑니다. 디오니소스가 그 아침을 맞습니다." },
        { type: "speech", speaker: "디오니소스", text: "여긴 내가 지킬게.", align: "end" },
      ],
    },
    {
      id: "theseus-forget",
      bg: "sea",
      alt: "아테네가 가까운 바다. 돛은 여전히 검고, 테세우스가 잊은 얼굴이다.",
      cast: [{ id: "theseus", pose: "idle", x: 150, y: 390, scale: 0.95 }],
      props: [{ kind: "sail", x: 260, y: 240, scale: 1.4 }],
      bubbles: [
        { type: "narration", text: "고향이 보입니다. 흰 돛은 창고에 있습니다." },
        { type: "speech", speaker: "테세우스", text: "실은 기억했는데.", align: "start" },
      ],
    },
    {
      id: "theseus-cliff",
      bg: "shore",
      alt: "절벽. 아이게우스가 검은 돛을 보고 놀란다. 떨어지는 모습은 없다.",
      cast: [{ id: "aegeus", pose: "surprised", x: 160, y: 360, scale: 0.9 }],
      props: [{ kind: "sail", x: 280, y: 280, scale: 0.9 }],
      bubbles: [
        { type: "narration", text: "절벽의 왕이 검은 돛을 봅니다. 그가 바다로 가는 순간은 그리지 않습니다." },
        { type: "speech", speaker: "아이게우스", text: "약속이 검은색이야.", align: "start" },
      ],
    },
    {
      id: "theseus-sea",
      bg: "sea",
      alt: "넓은 바다. 테세우스가 빈 절벽 쪽을 슬프게 본다.",
      cast: [{ id: "theseus", pose: "sad", x: 160, y: 390, scale: 1 }],
      bubbles: [
        { type: "narration", text: "그 바다를 아이게우스의 바다, 에게해라 부르는 이야기가 있습니다." },
        { type: "speech", speaker: "테세우스", text: "돛 하나면 됐는데.", align: "start" },
      ],
    },
  ],
};
