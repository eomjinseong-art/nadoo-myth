import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const midas: Episode = {
  slug: "midas",
  title: "미다스의 손",
  order: 8,
  minutes: 5,
  storySlug: "midas",
  cover: "midas-touch",
  summary: {
    who: "프리기아 왕 미다스, 디오니소스, 그리고 음악을 심판한 아폴론.",
    what: "손이 닿는 것이 모두 황금이 되는 소원을 빌었다가, 빵과 포도주까지 굳자 강에서 씻어 냅니다.",
    so: "나중에 판의 피리를 편들자 당나귀 귀가 생기고, 갈대가 그 비밀을 속삭입니다.",
  },
  footnote:
    "황금 손과 당나귀 귀는 오비디우스 『변신 이야기』 11권에 이어집니다. ‘임금님 귀는 당나귀 귀’는 『삼국유사』 경문왕 설화와도 닮았지만, 둘이 직접 옮겨 갔다는 증거는 없습니다.",
  moral: "원하는 것이 전부 되면, 저녁도 사라집니다.",
  phrases: [
    {
      term: "미다스의 손",
      explain: "무엇이든 돈으로 바꾸는 재주, 또는 그 재주 때문에 오히려 곤란해지는 일을 말합니다.",
      links: [
        { href: "/words/midas-touch", label: "단어: 미다스의 손" },
        { href: "/gods/midas", label: "미다스" },
      ],
    },
    {
      term: "팍톨로스",
      explain: "미다스가 황금을 씻어 냈다는 강입니다. 그 뒤로 사금이 났다고 전합니다.",
      links: [{ href: "/stories/midas", label: "이야기: 미다스의 황금 손과 당나귀 귀" }],
    },
  ],
  quiz: [
    {
      id: "wish",
      kind: "choice",
      prompt: "미다스가 디오니소스에게 빈 것은?",
      choices: ["닿는 것이 황금이 되게", "영원히 젊게", "트로이를 이기게", "날개를 갖게"],
      answer: 0,
      explain: "실레노스를 잘 대접한 보답으로 소원을 하나 받았고, 그는 황금 손을 골랐습니다.",
    },
    {
      id: "wash",
      kind: "ox",
      prompt: "소원을 거둘 때는 팍톨로스강에서 몸을 씻으라는 말을 듣는다.",
      answer: 1,
      explain: "디오니소스가 강의 샘에서 씻으라고 합니다. 강에 사금이 남았다는 말이 뒤따릅니다.",
    },
    {
      id: "ears",
      kind: "ox",
      prompt: "당나귀 귀는 황금 소원을 빈 디오니소스가 바로 붙인 벌이다.",
      answer: 0,
      explain: "귀는 그 다음 이야기입니다. 판과 아폴론의 음악 겨루기에서 미다스가 판을 편들어서입니다.",
    },
  ],
  characters: ["midas", "dionysos", "pan", "apollo"],
  related: [
    { href: "/stories/midas", label: "이야기: 미다스" },
    { href: "/gods/dionysos", label: "디오니소스" },
  ],
  chat: [
    { id: "dionysos", name: "디오니소스", text: "소원은 저녁 메뉴까지 포함이야.", pose: "sly" },
    { id: "midas", name: "미다스", text: "빵이 반짝이면 식사는 끝이죠.", pose: "oops" },
    { id: "silenos", name: "실레노스", text: "술 깨서 보니 왕이었네. 고마워.", pose: "sleepy" },
    { id: "pan", name: "판", text: "피리 한 표, 감사합니다.", pose: "happy" },
    { id: "apollo", name: "아폴론", text: "귀를 바꿨을 뿐, 음악은 그대로야.", pose: "proud" },
    { id: "hermes", name: "헤르메스", text: "갈대는 비밀을 배송해요. 무료로.", pose: "sly" },
  ],
  sources: [{ work: "오비디우스 『변신 이야기』", ref: "11권 85–193행" }],
  panels: [
    {
      id: "midas-feast",
      bg: "palace",
      alt: "궁전 잔치. 졸린 실레노스를 미다스가 부축하고, 디오니소스가 웃는다.",
      cast: [
        { id: "midas", pose: "offer", x: 100, y: feet, scale: 0.85 },
        { id: "silenos", pose: "sleepy", x: 190, y: feet, scale: 0.8 },
        { id: "dionysos", pose: "happy", x: 290, y: feet, scale: 0.8 },
      ],
      bubbles: [
        { type: "narration", text: "길을 잃은 실레노스를 미다스가 극진히 대접해 디오니소스에게 돌려보냅니다." },
        { type: "speech", speaker: "디오니소스", text: "소원 하나. 신중히.", align: "end" },
      ],
    },
    {
      id: "midas-wish",
      bg: "palace",
      alt: "미다스가 자기 손을 펴 보이고, 디오니소스가 듣는다.",
      cast: [
        { id: "midas", pose: "proud", x: 130, y: feet, scale: 1 },
        { id: "dionysos", pose: "sly", x: 270, y: feet, scale: 0.9 },
      ],
      bubbles: [
        { type: "speech", speaker: "미다스", text: "닿는 것은 모두 황금으로.", align: "start" },
        { type: "speech", speaker: "디오니소스", text: "저녁에 다시 말해요.", align: "end" },
      ],
    },
    {
      id: "midas-touch",
      bg: "meadow",
      alt: "미다스가 나뭇가지를 만지자 가지 끝이 금빛이 된다.",
      sfx: "반짝",
      cast: [{ id: "midas", pose: "surprised", x: 140, y: feet, scale: 1.05 }],
      props: [{ kind: "fennel", x: 250, y: 340, scale: 1.4 }],
      bubbles: [
        { type: "narration", text: "가지가 금이 됩니다. 돌도 금입니다. 처음에는 신기합니다." },
        { type: "speech", speaker: "미다스", text: "왕국이 빛나겠군!", align: "start" },
      ],
    },
    {
      id: "midas-bread",
      bg: "palace",
      alt: "식탁. 빵과 잔이 금으로 굳고, 미다스가 슬퍼한다.",
      cast: [{ id: "midas", pose: "sad", x: 140, y: feet, scale: 1 }],
      props: [
        { kind: "gold-bread", x: 240, y: 360, scale: 1.4 },
        { kind: "wine", x: 300, y: 340, scale: 1.1 },
      ],
      bubbles: [
        { type: "narration", text: "빵을 집으면 빵이, 잔에 입술을 대면 포도주가 굳습니다." },
        { type: "speech", speaker: "미다스", text: "배고픈 황금은 처음이야.", align: "start" },
      ],
    },
    {
      id: "midas-please",
      bg: "palace",
      alt: "미다스가 디오니소스에게 빌고, 디오니소스가 강 쪽을 가리킨다.",
      cast: [
        { id: "midas", pose: "oops", x: 120, y: feet, scale: 0.95 },
        { id: "dionysos", pose: "point", x: 260, y: feet, scale: 0.95 },
      ],
      bubbles: [
        { type: "speech", speaker: "미다스", text: "소원, 반납할게요.", align: "start" },
        { type: "speech", speaker: "디오니소스", text: "팍톨로스 샘에서 씻어.", align: "end" },
      ],
    },
    {
      id: "midas-river",
      bg: "river",
      alt: "강. 미다스가 물속에 손을 담그고, 금빛이 물결로 흘러간다.",
      cast: [{ id: "midas", pose: "happy", x: 150, y: 400, scale: 1 }],
      bubbles: [
        { type: "narration", text: "손에서 황금이 강으로 흘러갑니다. 그 강에서 사금이 났다고 합니다." },
        { type: "speech", speaker: "미다스", text: "빵이 다시 빵이면 좋겠어.", align: "start" },
      ],
    },
    {
      id: "midas-music",
      bg: "meadow",
      alt: "들판. 판이 피리를 불고, 아폴론이 리라를 들고, 미다스가 판 쪽을 가리킨다.",
      cast: [
        { id: "pan", pose: "happy", x: 80, y: feet, scale: 0.75 },
        { id: "apollo", pose: "proud", x: 200, y: feet, scale: 0.85 },
        { id: "midas", pose: "point", x: 310, y: feet, scale: 0.7 },
      ],
      bubbles: [
        { type: "narration", text: "나중에 판과 아폴론이 음악을 겨룹니다. 심판은 아폴론인데, 미다스만 피리를 밉니다." },
        { type: "speech", speaker: "미다스", text: "피리 쪽이 더 신나잖아요.", align: "end" },
      ],
    },
    {
      id: "midas-ears",
      bg: "palace",
      alt: "미다스의 왕관 위로 당나귀 귀가 솟아 있고, 아폴론이 팔짱을 낀 듯 서 있다.",
      cast: [
        { id: "apollo", pose: "sly", x: 110, y: feet, scale: 0.9 },
        { id: "midas", pose: "surprised", x: 250, y: feet, scale: 1, look: "ears" },
      ],
      bubbles: [
        { type: "narration", text: "아폴론이 말합니다. 음악을 못 알아듣는 귀라고. 귀가 길어집니다." },
        { type: "speech", speaker: "미다스", text: "두건! 두건 어디 있어!", align: "end" },
      ],
    },
    {
      id: "midas-barber",
      bg: "meadow",
      alt: "이발사가 땅에 판 구덩이에 입을 대고 속삭인다. 미다스는 두건을 쓰고 멀리 있다.",
      cast: [
        { id: "villager", pose: "sneak", x: 140, y: feet, scale: 0.9 },
        { id: "midas", pose: "worried", x: 280, y: feet, scale: 0.7, look: "ears" },
      ],
      bubbles: [
        { type: "narration", text: "이발사만 비밀을 압니다. 참지 못해 구덩이에 속삭이고 흙을 덮습니다." },
        { type: "speech", speaker: "이발사", text: "임금님 귀는… 여기까지만.", align: "start" },
      ],
    },
    {
      id: "midas-reeds",
      bg: "river",
      alt: "구덩이 자리에 갈대가 자라고, 바람에 흔들린다.",
      sfx: "소근",
      cast: [],
      props: [{ kind: "reeds", x: 180, y: 360, scale: 2.2 }],
      bubbles: [
        { type: "narration", text: "그 자리에 난 갈대가 바람만 불면 같은 말을 속삭입니다." },
        { type: "speech", speaker: "갈대", text: "임금님 귀는 당나귀 귀.", align: "start" },
      ],
    },
  ],
};
