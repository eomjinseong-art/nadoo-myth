import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const herakles: Episode = {
  slug: "herakles",
  title: "헤라클레스의 12과업",
  order: 6,
  minutes: 7,
  storySlug: "herakles-labors",
  cover: "herakles-lion",
  summary: {
    who: "헤라의 미움을 받은 헤라클레스와, 일을 시키는 에우리스테우스.",
    what: "불가능한 열두 가지를 해내며, 사자 가죽부터 저승의 개까지 통과합니다.",
    so: "싸움의 순간은 화면 밖에 두고, 각 과업의 결과만 보여 줍니다. 열두 개로 센 이유도 자료마다 조금 다릅니다.",
  },
  footnote:
    "순서는 아폴로도로스를 따릅니다. 원래 열 개였던 일이 히드라(조카의 도움)와 아우게이아스의 외양간(대가를 받으려 함)을 인정받지 못해 열둘이 되었다는 설명도 그의 것입니다. 에우리피데스 『헤라클레스』는 과업 뒤에 광기가 옵니다. 여기서는 흔한 순서대로 광기를 앞에 두되, 그 결과는 그리지 않습니다.",
  moral: "불가능한 목록도, 한 칸씩 끝나면 길이 됩니다.",
  phrases: [
    {
      term: "헤라클레스의 과업",
      explain: "엄청나게 힘든 일을 ‘헤르쿨레스의 일’처럼 말할 때 이 열두 가지를 떠올립니다. 로마 이름은 헤르쿨레스입니다.",
      links: [
        { href: "/words/herculean", label: "단어: 허큘리언" },
        { href: "/gods/herakles", label: "헤라클레스" },
        { href: "/stories/herakles-labors", label: "이야기: 12과업" },
      ],
    },
    {
      term: "헤라클레스의 기둥",
      explain: "세상 서쪽 끝, 지브롤터 해협 양쪽에 그가 기둥을 세웠다는 이야기입니다. 게리온의 소 떼를 데려오던 길과 함께 전합니다.",
      links: [{ href: "/words/atlas", label: "단어: 아틀라스" }],
    },
  ],
  quiz: [
    {
      id: "count",
      kind: "choice",
      prompt: "아폴로도로스가 전하는 과업은 왜 열둘인가?",
      choices: [
        "열 개 중 둘은 인정받지 못해 두 개가 더해짐",
        "처음부터 열두 신전의 주문",
        "열두 달의 축제",
        "판도라의 항아리 조각",
      ],
      answer: 0,
      explain: "히드라와 외양간을 무효로 보고 두 과업을 추가했다는 설명이 아폴로도로스에 있습니다.",
    },
    {
      id: "lion",
      kind: "ox",
      prompt: "네메아의 사자는 화살이 가죽을 뚫지 못해, 그는 맨손으로 상대했다고 전한다.",
      answer: 1,
      explain: "가죽이 굳세어 목을 조릅니다. 이 편은 그 순간 대신 가죽을 걸친 뒤의 모습을 그립니다.",
    },
    {
      id: "dog",
      kind: "ox",
      prompt: "케르베로스는 하데스의 허락 없이 몰래 끌어올린 개다.",
      answer: 0,
      explain: "아폴로도로스는 하데스의 허락을 받고, 무기 없이 데려갔다가 다시 돌려보냈다고 합니다.",
    },
  ],
  characters: ["herakles", "hera", "apollo", "artemis", "athena", "atlas", "hades", "hydra", "kerberos"],
  related: [
    { href: "/in-media#hercules-1997", label: "영화: 「헤라클레스」 (1997)" },
    { href: "/in-media#hercules-2014", label: "영화: 「헤라클레스」 (2014)" },
    { href: "/stories/prometheus", label: "관련 이야기: 프로메테우스" },
  ],
  chat: [
    { id: "hera", name: "헤라", text: "목록은 내가 길게 밀었어.", pose: "sly" },
    { id: "eurystheus", name: "에우리스테우스", text: "항아리 안이 제일 안전해요.", pose: "worried" },
    { id: "herakles", name: "헤라클레스", text: "사자는 옷이 됐고, 개는 돌려줬습니다.", pose: "proud", look: "lion" },
    { id: "hydra", name: "히드라", text: "목은 잘리면 둘. 불은 반칙 같았는데.", pose: "angry" },
    { id: "atlas", name: "아틀라스", text: "하늘 잠깐이라더니 영구직이었어.", pose: "oops" },
    { id: "athena", name: "아테나", text: "딸랑이는 내가 빌려 줬어요.", pose: "happy" },
    { id: "hades", name: "하데스", text: "개는 산책 말고 반납.", pose: "idle" },
    { id: "kerberos", name: "케르베로스", text: "멍. 멍. 멍.", pose: "happy" },
  ],
  sources: [
    { work: "아폴로도로스 『비블리오테케』", ref: "2권 4장 12절–2권 7장 7절" },
    { work: "에우리피데스 『헤라클레스』" },
  ],
  panels: [
    {
      id: "herakles-madness",
      bg: "palace",
      alt: "궁전. 헤라가 작은 구름 위에서 가리키고, 헤라클레스가 이마를 짚는다. 피해는 없다.",
      cast: [
        { id: "hera", pose: "sly", x: 250, y: 260, scale: 0.62, ground: false },
        { id: "herakles", pose: "sad", x: 140, y: feet, scale: 1 },
      ],
      props: [{ kind: "cloud", x: 250, y: 290, scale: 0.6 }],
      bubbles: [
        { type: "narration", text: "헤라가 보낸 광기. 그 밤의 결과는 화면 밖입니다. 그는 깨어 신탁을 찾습니다." },
        { type: "speech", speaker: "헤라클레스", text: "무엇을 갚으면 되죠.", align: "start" },
      ],
    },
    {
      id: "herakles-oracle",
      bg: "palace",
      alt: "아폴론이 길을 가리키고, 헤라클레스가 듣는다.",
      cast: [
        { id: "apollo", pose: "point", x: 120, y: feet, scale: 0.95 },
        { id: "herakles", pose: "idle", x: 260, y: feet, scale: 0.95 },
      ],
      bubbles: [
        { type: "narration", text: "델포이. 티린스의 에우리스테우스가 시키는 일을 해내라는 신탁입니다." },
        { type: "speech", speaker: "아폴론", text: "목록이 길어요. 하나씩.", align: "start" },
      ],
    },
    {
      id: "herakles-list",
      bg: "palace",
      alt: "왕좌 대신 큰 항아리 속에 에우리스테우스가 고개를 내밀고 명령한다.",
      cast: [
        { id: "eurystheus", pose: "worried", x: 150, y: 360, scale: 0.7 },
        { id: "herakles", pose: "proud", x: 270, y: feet, scale: 0.9 },
      ],
      props: [{ kind: "pithos", x: 150, y: 400, scale: 0.85 }],
      bubbles: [
        { type: "narration", text: "왕은 용기보다 항아리를 신뢰합니다." },
        { type: "speech", speaker: "에우리스테우스", text: "첫 번째, 네메아의 사자.", align: "start" },
      ],
    },
    {
      id: "herakles-lion",
      bg: "meadow",
      alt: "헤라클레스가 사자 가죽을 두르고 서 있다. 잠든 사자가 옆에 있고 싸움은 없다.",
      cast: [{ id: "herakles", pose: "proud", x: 160, y: feet, scale: 1.05, look: "lion" }],
      bubbles: [
        { type: "narration", text: "① 화살이 튕기는 가죽. 목 조르는 순간은 그리지 않고, 가죽은 그의 옷이 됩니다." },
        { type: "speech", speaker: "헤라클레스", text: "이 옷, 다음 일에도 필요해.", align: "start" },
      ],
    },
    {
      id: "herakles-hydra",
      bg: "shore",
      alt: "늪. 귀여운 머리 여럿의 히드라, 횃불의 이올라오스, 헤라클레스. 잘린 목은 없다.",
      sfx: "지글",
      cast: [
        { id: "hydra", pose: "angry", x: 230, y: 390, scale: 0.85, ground: false },
        { id: "herakles", pose: "point", x: 90, y: feet, scale: 0.85, look: "lion" },
        { id: "iolaus", pose: "offer", x: 160, y: feet, scale: 0.65 },
      ],
      props: [{ kind: "torch", x: 175, y: 330, scale: 1.2, front: true }],
      bubbles: [
        { type: "narration", text: "② 레르나의 히드라. 목을 자르면 둘이 돋아, 조카가 잘린 자리를 불로 지집니다." },
        { type: "speech", speaker: "이올라오스", text: "불 먼저, 자랑은 나중.", align: "start" },
      ],
    },
    {
      id: "herakles-hind",
      bg: "forest",
      alt: "숲. 황금 뿔 사슴이 조용히 있고, 아르테미스와 헤라클레스가 다투지 않는다.",
      cast: [
        { id: "artemis", pose: "point", x: 100, y: feet, scale: 0.85 },
        { id: "herakles", pose: "oops", x: 250, y: feet, scale: 0.9, look: "lion" },
      ],
      props: [{ kind: "deer", x: 180, y: 390, scale: 1.2 }],
      bubbles: [
        { type: "narration", text: "③ 케리네이아의 암사슴. 일 년을 쫓아 산 채로 데려옵니다. 아르테미스의 사슴입니다." },
        { type: "speech", speaker: "아르테미스", text: "다치게 하면 내가 기억해.", align: "start" },
      ],
    },
    {
      id: "herakles-boar",
      bg: "meadow",
      alt: "에우리스테우스가 항아리에 숨고, 헤라클레스가 귀여운 멧돼지를 안고 있다.",
      cast: [
        { id: "eurystheus", pose: "surprised", x: 100, y: 370, scale: 0.6 },
        { id: "herakles", pose: "happy", x: 240, y: feet, scale: 0.95, look: "lion" },
      ],
      props: [
        { kind: "pithos", x: 100, y: 410, scale: 0.8 },
        { kind: "boar", x: 250, y: 340, scale: 1.1, front: true },
      ],
      bubbles: [
        { type: "narration", text: "④ 에리만토스의 멧돼지. 눈에 몰아 지치게 한 뒤입니다. 왕이 항아리로 들어갑니다." },
        { type: "speech", speaker: "에우리스테우스", text: "바닥에 내려놓아요!", align: "start" },
      ],
    },
    {
      id: "herakles-stables",
      bg: "river",
      alt: "강물이 외양간 쪽으로 흐르고, 헤라클레스가 흙투성이로 웃는다.",
      cast: [{ id: "herakles", pose: "happy", x: 160, y: 390, scale: 1, look: "lion" }],
      bubbles: [
        { type: "narration", text: "⑤ 아우게이아스의 외양간. 삼십 년의 더러움을 강물 둘로 하루에 씻습니다." },
        { type: "speech", speaker: "헤라클레스", text: "청소는 물길이 해요.", align: "start" },
      ],
    },
    {
      id: "herakles-birds",
      bg: "sky",
      alt: "아테나가 청동 딸랑이를 건네고, 새 떼가 날아오른다.",
      cast: [
        { id: "athena", pose: "offer", x: 110, y: feet, scale: 0.9 },
        { id: "herakles", pose: "point", x: 240, y: feet, scale: 0.9, look: "lion" },
      ],
      props: [
        { kind: "rattle", x: 170, y: 340, scale: 1.2, front: true },
        { kind: "birds", x: 200, y: 220, scale: 1.3 },
      ],
      bubbles: [
        { type: "narration", text: "⑥ 스팀팔로스의 새. 딸랑이에 놀라 날면, 활이 뒤를 맡습니다. 맞는 장면은 없습니다." },
        { type: "speech", speaker: "아테나", text: "소리 먼저.", align: "start" },
      ],
    },
    {
      id: "herakles-bull",
      bg: "shore",
      alt: "바닷가. 흰 황소와 헤라클레스가 나란히 걷는다.",
      cast: [{ id: "herakles", pose: "idle", x: 120, y: feet, scale: 0.95, look: "lion" }],
      props: [{ kind: "bull", x: 250, y: 390, scale: 1.5 }],
      bubbles: [
        { type: "narration", text: "⑦ 크레타의 황소. 미노스의 미친 소를 붙잡아 그리스로 데려옵니다." },
        { type: "speech", speaker: "헤라클레스", text: "배 멀미는 같이 하자.", align: "start" },
      ],
    },
    {
      id: "herakles-mares",
      bg: "meadow",
      alt: "초원. 헤라클레스가 말을 이끌고, 말은 차분하다.",
      cast: [{ id: "herakles", pose: "offer", x: 120, y: feet, scale: 0.95, look: "lion" }],
      props: [{ kind: "mare", x: 250, y: 390, scale: 1.4 }],
      bubbles: [
        { type: "narration", text: "⑧ 디오메데스의 말. 사람을 해치던 말은 화면 밖에서 진정되고, 고삐만 남습니다." },
        { type: "speech", speaker: "헤라클레스", text: "이제 풀만 먹자.", align: "start" },
      ],
    },
    {
      id: "herakles-belt",
      bg: "shore",
      alt: "바닷가. 히폴리테가 금빛 허리띠를 내밀고, 구름 위 헤라가 속삭인다.",
      cast: [
        { id: "hippolyta", pose: "offer", x: 120, y: feet, scale: 0.9 },
        { id: "herakles", pose: "curious", x: 250, y: feet, scale: 0.9, look: "lion" },
        { id: "hera", pose: "sly", x: 300, y: 240, scale: 0.45, ground: false },
      ],
      props: [
        { kind: "belt", x: 180, y: 340, scale: 1.3, front: true },
        { kind: "cloud", x: 300, y: 262, scale: 0.45 },
      ],
      bubbles: [
        { type: "narration", text: "⑨ 히폴리테의 허리띠. 여왕이 건넨다는 판과, 싸움이 된다는 판이 있습니다. 여기선 건넵니다." },
        { type: "speech", speaker: "히폴리테", text: "부탁이면 허리띠로 충분해.", align: "start" },
      ],
    },
    {
      id: "herakles-cattle",
      bg: "shore",
      alt: "바다 끝. 기둥 둘과 붉은 소, 어지러운 세 머리의 게리온이 멀리 있다.",
      cast: [{ id: "herakles", pose: "proud", x: 110, y: feet, scale: 0.9, look: "lion" }],
      props: [
        { kind: "pillars", x: 250, y: 300, scale: 1.2 },
        { kind: "cattle", x: 180, y: 400, scale: 1.2 },
        { kind: "geryon", x: 300, y: 230, scale: 0.7 },
      ],
      bubbles: [
        { type: "narration", text: "⑩ 게리온의 소. 몸 셋인 거인과의 싸움은 화면 밖. 서쪽 끝에 기둥이 선다는 말이 남습니다." },
        { type: "speech", speaker: "헤라클레스", text: "소는 이쪽으로.", align: "start" },
      ],
    },
    {
      id: "herakles-atlas",
      bg: "sky",
      alt: "하늘. 아틀라스가 하늘 구슬을 헤라클레스에게 넘기고, 사과를 가지러 간다.",
      cast: [
        { id: "atlas", pose: "offer", x: 110, y: feet, scale: 0.95 },
        { id: "herakles", pose: "oops", x: 250, y: feet, scale: 0.9, look: "lion" },
      ],
      props: [{ kind: "sky-orb", x: 190, y: 250, scale: 1.1 }],
      bubbles: [
        { type: "narration", text: "⑪ 헤스페리데스의 사과. 하늘을 잠깐 대신 지고, 아틀라스가 사과를 따 오게 합니다." },
        { type: "speech", speaker: "아틀라스", text: "하늘, 잠깐만 들어 줘.", align: "start" },
      ],
    },
    {
      id: "herakles-trick",
      bg: "sky",
      alt: "헤라클레스가 하늘을 이고, 사과를 든 아틀라스가 걸어가다 돌아본다.",
      cast: [
        { id: "herakles", pose: "point", x: 140, y: feet, scale: 0.95, look: "lion" },
        { id: "atlas", pose: "sly", x: 280, y: feet, scale: 0.8 },
      ],
      props: [
        { kind: "sky-orb", x: 140, y: 250, scale: 0.9 },
        { kind: "apples", x: 270, y: 330, scale: 1.2, front: true },
      ],
      bubbles: [
        { type: "narration", text: "아틀라스가 하늘을 돌려주지 않으려 합니다. 헤라클레스가 어깨 받침만 고쳐 달라고 속입니다." },
        { type: "speech", speaker: "헤라클레스", text: "받침만 고치고 다시 받을게요.", align: "start" },
      ],
    },
    {
      id: "herakles-cerberus",
      bg: "underworld",
      alt: "어두운 홀. 하데스가 고개를 끄덕이고, 머리 셋인 개가 꼬리를 흔들며, 헤라클레스는 맨손이다.",
      cast: [
        { id: "hades", pose: "idle", x: 80, y: feet, scale: 0.8 },
        { id: "kerberos", pose: "happy", x: 190, y: 400, scale: 0.85, ground: false },
        { id: "herakles", pose: "offer", x: 300, y: feet, scale: 0.75, look: "lion" },
      ],
      bubbles: [
        { type: "narration", text: "⑫ 케르베로스. 하데스의 허락, 무기 없이, 데려갔다가 다시 돌려보냅니다." },
        { type: "speech", speaker: "하데스", text: "산책은 허락. 입양은 안 돼.", align: "start" },
      ],
    },
  ],
};
