import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const icarus: Episode = {
  slug: "icarus",
  title: "이카로스의 날개",
  order: 5,
  minutes: 4,
  storySlug: "icarus",
  cover: "icarus-high",
  summary: {
    who: "미궁을 지은 다이달로스와 아들 이카로스.",
    what: "깃털과 밀랍으로 날개를 만들어 크레타를 빠져나가며, 너무 높거나 낮게 날지 말라고 당부합니다.",
    so: "높이 오른 이카로스의 밀랍이 녹고, 그는 바다로 떨어집니다. 떨어지는 몸은 그리지 않고 물보라만 남깁니다.",
  },
  footnote:
    "날개 이야기는 오비디우스와 아폴로도로스 요약에 있습니다. 파우사니아스처럼 돛을 단 배로 달아났다고 풀어 쓴 고대 저자도 있습니다. 바다와 섬의 이름 이카리아는 이 이야기와 함께 전해집니다.",
  moral: "가운데 길이 재미없어 보여도, 밀랍은 그 높이를 기억합니다.",
  phrases: [
    {
      term: "이카로스의 날개",
      explain: "한계를 넘어 오르다 떨어지는 일을 그의 이름으로 말합니다. 밀랍과 태양은 그 비유의 재료입니다.",
      links: [
        { href: "/gods/ikaros", label: "이카로스" },
        { href: "/gods/daidalos", label: "다이달로스" },
        { href: "/stories/icarus", label: "이야기: 다이달로스와 이카로스" },
      ],
    },
  ],
  quiz: [
    {
      id: "wax",
      kind: "choice",
      prompt: "다이달로스가 깃털을 붙인 재료로 이 편이 말하는 것은?",
      choices: ["실과 밀랍", "청동 못", "아테나의 방패", "포도 덩굴"],
      answer: 0,
      explain: "작은 깃털부터 큰 깃털 순으로 놓고, 실과 밀랍으로 엮습니다.",
    },
    {
      id: "height",
      kind: "ox",
      prompt: "이카로스는 아버지가 정한 가운데 높이만 끝까지 지켰다.",
      answer: 0,
      explain: "처음에는 뒤를 따르다, 나는 기쁨에 점점 태양 쪽으로 올라갑니다.",
    },
    {
      id: "name",
      kind: "ox",
      prompt: "다이달로스는 아들을 묻은 바다와 섬에 이카로스의 이름을 붙였다고 전한다.",
      answer: 1,
      explain: "이카리아해, 이카리아섬이라는 이름이 이 전승과 연결됩니다.",
    },
  ],
  characters: ["daidalos", "ikaros"],
  related: [
    { href: "/stories/theseus-minotaur", label: "앞 이야기: 테세우스와 미노타우로스" },
    { href: "/in-media#bruegel-icarus", label: "명화: 브뤼헐 「이카로스의 추락이 있는 풍경」" },
    { href: "/in-media#draper-lament-icarus", label: "명화: 드레이퍼 「이카로스를 위한 애도」" },
  ],
  chat: [
    { id: "daidalos", name: "다이달로스", text: "가운데. 가운데라고 했어.", pose: "worried" },
    { id: "ikaros", name: "이카로스", text: "하늘이 이렇게 넓은 줄.", pose: "fly", look: "wings" },
    { id: "helios", name: "헬리오스", text: "나는 매일 그 높이로 다녀. 밀랍은 아니야.", pose: "proud" },
    { id: "theseus", name: "테세우스", text: "미궁은 내가 나왔고, 하늘은 당신 차례였군요.", pose: "oops" },
    { id: "athena", name: "아테나", text: "솜씨는 훌륭했어요. 사용 설명도.", pose: "idle" },
  ],
  sources: [
    { work: "오비디우스 『변신 이야기』", ref: "8권 183–235행" },
    { work: "아폴로도로스 『에피토메』", ref: "1권 12–13절" },
  ],
  panels: [
    {
      id: "icarus-tower",
      bg: "chamber",
      alt: "탑 안. 다이달로스가 창밖 바다를 가리키고, 이카로스가 걱정한다.",
      cast: [
        { id: "daidalos", pose: "point", x: 120, y: feet, scale: 0.95 },
        { id: "ikaros", pose: "worried", x: 250, y: feet, scale: 0.85 },
      ],
      bubbles: [
        { type: "narration", text: "미궁을 도왔다는 이유로 아버지와 아들은 크레타에 갇혔습니다. 바다와 땅은 막혀 있습니다." },
        { type: "speech", speaker: "다이달로스", text: "하늘만 출구가 비어 있어.", align: "start" },
      ],
    },
    {
      id: "icarus-craft",
      bg: "chamber",
      alt: "다이달로스가 깃털을 늘어놓고, 이카로스가 밀랍을 만진다.",
      cast: [
        { id: "daidalos", pose: "craft", x: 130, y: feet, scale: 1 },
        { id: "ikaros", pose: "curious", x: 260, y: feet, scale: 0.8 },
      ],
      props: [{ kind: "feathers", x: 200, y: 360, scale: 1.4, front: true }],
      bubbles: [
        { type: "narration", text: "작은 깃털에서 큰 깃털 순으로, 실과 밀랍으로 두 쌍을 엮습니다." },
        { type: "speech", speaker: "이카로스", text: "만지면 따뜻해. 이게 날개야?", align: "end" },
      ],
    },
    {
      id: "icarus-warn",
      bg: "shore",
      alt: "바닷가. 다이달로스가 아들의 어깨를 잡고 태양과 파도를 함께 가리킨다.",
      cast: [
        { id: "daidalos", pose: "point", x: 140, y: feet, scale: 1, look: "wings" },
        { id: "ikaros", pose: "idle", x: 270, y: feet, scale: 0.82, look: "wings" },
      ],
      props: [{ kind: "sun", x: 300, y: 200, scale: 0.8 }],
      bubbles: [
        { type: "narration", text: "너무 낮으면 물기가, 너무 높으면 햇볕이 밀랍을 녹입니다." },
        { type: "speech", speaker: "다이달로스", text: "가운데로. 내 등만 봐.", align: "start" },
      ],
    },
    {
      id: "icarus-fly",
      bg: "sky",
      alt: "하늘. 다이달로스와 이카로스가 나란히 날개를 펴고 난다.",
      cast: [
        { id: "daidalos", pose: "fly", x: 110, y: 340, scale: 0.7, look: "wings", ground: false },
        { id: "ikaros", pose: "fly", x: 230, y: 300, scale: 0.65, look: "wings", ground: false },
      ],
      bubbles: [
        { type: "narration", text: "목동과 농부가 하늘을 올려다봅니다. 두 사람은 새도 신도 아닌 채로 납니다." },
        { type: "speech", speaker: "이카로스", text: "아버지, 이쪽이 더 환해!", align: "end" },
      ],
    },
    {
      id: "icarus-high",
      bg: "sky",
      alt: "이카로스가 태양 가까이 높이 있고, 다이달로스는 아래에서 부른다.",
      cast: [
        { id: "ikaros", pose: "happy", x: 180, y: 250, scale: 0.7, look: "wings", ground: false },
        { id: "daidalos", pose: "worried", x: 100, y: 380, scale: 0.55, look: "wings", ground: false },
      ],
      props: [{ kind: "sun", x: 280, y: 160, scale: 1.1 }],
      bubbles: [
        { type: "narration", text: "기쁨이 경로를 바꿉니다. 소년은 태양 쪽으로 올라갑니다." },
        { type: "speech", speaker: "다이달로스", text: "이카로스! 내려와!", align: "start" },
      ],
    },
    {
      id: "icarus-melt",
      bg: "sky",
      alt: "이카로스의 날개에서 깃털이 빠지고 밀랍이 떨어진다. 그는 아직 공중에 있다.",
      sfx: "톡톡",
      cast: [{ id: "ikaros", pose: "surprised", x: 170, y: 280, scale: 0.8, look: "melt", ground: false }],
      props: [
        { kind: "sun", x: 300, y: 150, scale: 1 },
        { kind: "feathers", x: 120, y: 340, scale: 1.5 },
      ],
      bubbles: [
        { type: "narration", text: "밀랍이 풀리고 깃털이 흩어집니다. 맨팔이 공기를 젓습니다." },
        { type: "speech", speaker: "이카로스", text: "아버지—", align: "start" },
      ],
    },
    {
      id: "icarus-splash",
      bg: "sea",
      alt: "바다에 물보라만 있고, 하늘의 다이달로스가 아래를 본다. 몸은 그리지 않았다.",
      cast: [{ id: "daidalos", pose: "sad", x: 160, y: 240, scale: 0.6, look: "wings", ground: false }],
      props: [{ kind: "splash", x: 200, y: 400, scale: 1.6 }],
      bubbles: [
        { type: "narration", text: "바다가 그를 받습니다. 그림에는 물보라만 둡니다. 아버지는 이름을 부릅니다." },
        { type: "speech", speaker: "다이달로스", text: "이카로스!", align: "start" },
      ],
    },
    {
      id: "icarus-shore",
      bg: "shore",
      alt: "해변. 다이달로스가 깃털 하나를 들고 슬퍼한다. 날개는 접혀 있다.",
      cast: [{ id: "daidalos", pose: "sad", x: 160, y: feet, scale: 1 }],
      props: [{ kind: "feathers", x: 250, y: 360, scale: 1.2, front: true }],
      bubbles: [
        { type: "narration", text: "다이달로스는 아들을 묻습니다. 날개는 더 이상 설명서가 아닙니다." },
        { type: "speech", speaker: "다이달로스", text: "가운데라고 했는데.", align: "start" },
      ],
    },
    {
      id: "icarus-name",
      bg: "sea",
      alt: "넓은 바다와 작은 섬. 다이달로스가 멀리 날며 바다를 가리킨다.",
      cast: [{ id: "daidalos", pose: "fly", x: 120, y: 280, scale: 0.6, look: "wings", ground: false }],
      bubbles: [
        { type: "narration", text: "그 바다와 섬에 이카로스의 이름이 붙습니다. 이카리아." },
        { type: "speech", speaker: "다이달로스", text: "이름은 물 위에 남게 하자.", align: "start" },
      ],
    },
  ],
};
