import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const pandora: Episode = {
  slug: "pandora",
  title: "판도라의 상자",
  order: 1,
  minutes: 4,
  storySlug: "pandora",
  cover: "pandora-open",
  summary: {
    who: "불을 돌려준 프로메테우스, 그 동생 에피메테우스, 신들이 만든 판도라.",
    what: "제우스가 ‘불의 값’으로 판도라를 보내고, 그녀는 큰 항아리 뚜껑을 엽니다.",
    so: "질병과 고생이 세상에 퍼지고, 항아리 안에는 엘피스(희망)만 남습니다.",
  },
  footnote:
    "헤시오도스의 그릇은 큰 항아리(피토스)입니다. ‘상자’는 16세기 에라스뮈스가 라틴어로 작은 상자(픽시스)라고 옮긴 뒤 굳은 말입니다. 안에 남은 엘피스를 희망으로 읽는 견해와, 아직 나가지 않은 기대(헛된 기대일 수도 있는 것)로 읽는 견해가 함께 있습니다.",
  moral: "뚜껑은 열릴 수 있습니다. 그래도 항아리 안에는 엘피스가 남아 있습니다.",
  phrases: [
    {
      term: "판도라의 상자",
      explain: "손대지 말 일을 건드려 문제가 쏟아질 때 쓰는 말입니다. 원전의 그릇은 큰 항아리 피토스이고, 상자는 후대에 굳은 말입니다.",
      links: [{ href: "/words/pandoras-box", label: "단어: 판도라의 상자" }],
    },
    {
      term: "에피메테우스",
      explain: "그리스어로 ‘나중에 생각하는 자’입니다. 형 프로메테우스는 ‘미리 생각하는 자’. 경고를 듣고도 한 박자 늦게 깨닫는 이름이 그대로 이야기입니다.",
      links: [
        { href: "/gods/epimetheus", label: "에피메테우스" },
        { href: "/gods/prometheus", label: "프로메테우스" },
      ],
    },
    {
      term: "엘피스",
      explain: "항아리에 남은 것입니다. 희망으로 읽는 견해와, 아직 밖으로 나오지 않은 기대로 읽는 견해가 있습니다.",
      links: [{ href: "/stories/pandora", label: "이야기: 판도라의 항아리" }],
    },
  ],
  quiz: [
    {
      id: "pithos",
      kind: "ox",
      prompt: "헤시오도스가 적은 판도라의 그릇은 작은 상자다.",
      answer: 0,
      explain: "원전은 큰 저장 항아리 피토스입니다. ‘상자’는 16세기 에라스뮈스가 라틴어 픽시스로 옮기면서 퍼졌습니다.",
    },
    {
      id: "name",
      kind: "choice",
      prompt: "판도라라는 이름에 가장 가까운 뜻은?",
      choices: ["모든 선물을 받은 이", "불을 훔친 이", "나중에 생각하는 이", "희망을 가둔 이"],
      answer: 0,
      explain: "판(pan, 모두)과 도라(dōra, 선물)입니다. ‘나중에 생각하는 이’는 에피메테우스입니다.",
    },
    {
      id: "elpis",
      kind: "ox",
      prompt: "뚜껑을 다시 닫았을 때 항아리에 남은 것은 엘피스뿐이다.",
      answer: 1,
      explain: "헤시오도스 『일과 날』의 이야기입니다. 그 엘피스가 위로인지, 아직 나가지 않은 기대인지는 해석이 갈립니다.",
    },
  ],
  characters: ["zeus", "hera", "prometheus", "epimetheus", "pandora", "hephaistos", "hermes", "athena", "aphrodite"],
  related: [
    { href: "/stories/prometheus", label: "앞 이야기: 프로메테우스의 불" },
    { href: "/in-media#waterhouse-pandora", label: "명화: 워터하우스 「판도라」" },
  ],
  chat: [
    { id: "zeus", name: "제우스", text: "불 값은 받았지.", pose: "proud" },
    { id: "prometheus", name: "프로메테우스", text: "동생아. 내가 말했잖아.", pose: "worried" },
    { id: "epimetheus", name: "에피메테우스", text: "이름값이네요. 나중에 생각하는 자.", pose: "oops" },
    { id: "hera", name: "헤라", text: "근데 그거 상자 아니야. 피토스.", pose: "sly" },
    { id: "hermes", name: "헤르메스", text: "에라스뮈스가 상자로 옮겨서 퍼진 거예요.", pose: "sly" },
    { id: "athena", name: "아테나", text: "엘피스가 남은 게 위로일지, 아직 안 나온 기대일지.", pose: "proud" },
    { id: "pandora", name: "판도라", text: "그 논쟁, 뚜껑으로 정하는 건 아니죠?", pose: "curious" },
    { id: "hephaistos", name: "헤파이스토스", text: "열지 마. 내가 만든 뚜껑이야.", pose: "happy" },
  ],
  sources: [
    { work: "헤시오도스 『일과 날』", ref: "47–105행" },
    { work: "헤시오도스 『신통기』", ref: "570–612행" },
  ],
  panels: [
    {
      id: "pandora-price",
      bg: "olympus",
      alt: "구름 위 올림포스. 제우스가 번개를 쥐고 화나 있고, 헤라가 곁에서 손을 흔든다.",
      sfx: "쾅!",
      cast: [
        { id: "zeus", pose: "angry", x: 145, y: feet, scale: 1.12 },
        { id: "hera", pose: "wave", x: 292, y: 430, scale: 0.78, flip: true },
      ],
      bubbles: [
        { type: "narration", text: "프로메테우스가 인간에게 불을 돌려준 뒤, 제우스가 그 값을 매깁니다." },
        { type: "speech", speaker: "제우스", text: "좋아. 아주 예쁜 선물을 보내지.", align: "start" },
        { type: "speech", speaker: "헤라", text: "예쁜 선물이 제일 맵지.", align: "end" },
      ],
    },
    {
      id: "pandora-clay",
      bg: "forge",
      alt: "대장간. 헤파이스토스가 망치를 들고, 흙빛 판도라가 막 빚어져 서 있다.",
      cast: [
        { id: "hephaistos", pose: "craft", x: 118, y: feet, scale: 1.02 },
        { id: "pandora", pose: "curious", x: 255, y: feet, scale: 1, style: "clay" },
      ],
      props: [{ kind: "anvil", x: 168, y: 430, scale: 1.1 }],
      bubbles: [
        { type: "narration", text: "헤파이스토스가 흙과 물로 처녀를 빚습니다." },
        { type: "speech", speaker: "헤파이스토스", text: "숨은 고르게. 구우면 금이 가니까.", align: "start" },
      ],
    },
    {
      id: "pandora-gifts",
      bg: "palace",
      alt: "신전 기둥 사이. 아테나, 아프로디테, 헤르메스가 판도라 곁에 선물을 얹는다.",
      cast: [
        { id: "athena", pose: "offer", x: 68, y: feet, scale: 0.7 },
        { id: "aphrodite", pose: "happy", x: 145, y: 442, scale: 0.7 },
        { id: "hermes", pose: "sly", x: 308, y: feet, scale: 0.68 },
        { id: "pandora", pose: "curious", x: 214, y: feet, scale: 0.86 },
      ],
      bubbles: [
        { type: "narration", text: "옷과 길쌈, 매력, 달콤한 말. 모두(pan)의 선물(dōra), 그래서 판도라." },
        { type: "speech", speaker: "헤르메스", text: "거절하기 어렵게요.", align: "end" },
      ],
    },
    {
      id: "pandora-warning",
      bg: "meadow",
      alt: "언덕 위 프로메테우스가 경고하고, 아래에서는 헤르메스가 판도라를 에피메테우스에게 데려간다.",
      cast: [
        { id: "prometheus", pose: "point", x: 78, y: 300, scale: 0.72, ground: false },
        { id: "hermes", pose: "sly", x: 250, y: 400, scale: 0.62 },
        { id: "pandora", pose: "idle", x: 188, y: feet, scale: 0.78 },
        { id: "epimetheus", pose: "oops", x: 300, y: feet, scale: 0.82 },
      ],
      props: [{ kind: "cloud", x: 78, y: 318, scale: 0.55 }],
      bubbles: [
        { type: "narration", text: "헤르메스가 판도라를 동생에게 데려갑니다. 형은 이미 경고했습니다." },
        { type: "speech", speaker: "프로메테우스", text: "제우스 선물은 받지 마!", align: "start" },
        { type: "speech", speaker: "에피메테우스", text: "형은 미리, 나는 나중에.", align: "end" },
      ],
    },
    {
      id: "pandora-welcome",
      bg: "meadow",
      alt: "에피메테우스가 웃으며 판도라를 맞이하고, 곁에 큰 항아리가 있다.",
      cast: [
        { id: "epimetheus", pose: "happy", x: 110, y: feet, scale: 1.02 },
        { id: "pandora", pose: "happy", x: 210, y: feet, scale: 1.02 },
      ],
      props: [{ kind: "pithos", x: 300, y: 390, scale: 0.72 }],
      bubbles: [
        { type: "narration", text: "에피메테우스는 경고를 잊고 판도라를 아내로 맞습니다." },
        { type: "speech", speaker: "에피메테우스", text: "왔는데 문을 닫을 순 없잖아.", align: "start" },
        { type: "speech", speaker: "판도라", text: "항아리도 같이 왔어요.", align: "end" },
      ],
    },
    {
      id: "pandora-curious",
      bg: "meadow",
      alt: "판도라가 닫힌 큰 항아리 앞에 서서 뚜껑을 바라본다.",
      cast: [{ id: "pandora", pose: "curious", x: 130, y: feet, scale: 1.12 }],
      props: [{ kind: "pithos", x: 250, y: 378, scale: 1 }],
      bubbles: [
        { type: "narration", text: "그때까지 인간은 질병도 고생도 몰랐습니다." },
        { type: "speech", speaker: "판도라", text: "뚜껑만 잠깐. 안이 궁금하거든.", align: "start" },
      ],
    },
    {
      id: "pandora-open",
      bg: "meadow",
      alt: "판도라가 항아리 뚜껑을 열자 작은 연기 인형들이 하늘로 흩어진다.",
      sfx: "파앗!",
      cast: [{ id: "pandora", pose: "open", x: 108, y: feet, scale: 1.08 }],
      props: [
        { kind: "pithos-open", x: 242, y: 378, scale: 1.05 },
        { kind: "evils", x: 250, y: 230, scale: 1.15, front: true },
      ],
      bubbles: [
        { type: "narration", text: "질병과 노동과 근심이 세상으로 흩어집니다." },
        { type: "speech", speaker: "판도라", text: "앗, 닫아!", align: "start" },
      ],
    },
    {
      id: "pandora-hope",
      bg: "meadow",
      alt: "뚜껑이 다시 닫힌 항아리 위에 작은 금빛 별, 엘피스가 남아 있다.",
      sfx: "톡",
      cast: [{ id: "pandora", pose: "surprised", x: 125, y: feet, scale: 1.08 }],
      props: [
        { kind: "pithos", x: 255, y: 384, scale: 0.95 },
        { kind: "hope", x: 255, y: 250, scale: 1.15, front: true },
      ],
      bubbles: [
        { type: "narration", text: "뚜껑을 닫자 안에 남은 것은 엘피스. 희망, 혹은 기대." },
        { type: "speech", speaker: "판도라", text: "너만은 여기 있구나.", align: "start" },
      ],
    },
    {
      id: "pandora-world",
      bg: "meadow",
      alt: "들판의 두 사람이 지쳐 있고, 구름 위 제우스가 내려다본다.",
      cast: [
        { id: "villager", pose: "worried", x: 95, y: feet, scale: 0.9 },
        { id: "villager", pose: "sad", x: 175, y: feet, scale: 0.82, variant: 1 },
        { id: "zeus", pose: "proud", x: 292, y: 292, scale: 0.62, ground: false },
      ],
      props: [{ kind: "cloud", x: 292, y: 318, scale: 0.85 }],
      bubbles: [
        { type: "narration", text: "재앙은 소리 없이 사람들 사이를 떠돌게 되었습니다." },
        { type: "speech", speaker: "사람", text: "어제까지는 가볍더니.", align: "start" },
        { type: "speech", speaker: "제우스", text: "불의 값이다.", align: "end" },
      ],
    },
    {
      id: "pandora-late",
      bg: "meadow",
      alt: "에피메테우스가 뒤늦게 깨닫고, 판도라가 희망의 빛이 남은 항아리 곁에 서 있다.",
      cast: [
        { id: "epimetheus", pose: "oops", x: 112, y: feet, scale: 1.02 },
        { id: "pandora", pose: "happy", x: 220, y: feet, scale: 1.02 },
      ],
      props: [
        { kind: "pithos", x: 305, y: 400, scale: 0.62 },
        { kind: "hope", x: 305, y: 300, scale: 0.7, front: true },
      ],
      bubbles: [
        { type: "narration", text: "늦게 깨달은 동생. 그래도 엘피스는 항아리에 남아 있습니다." },
        { type: "speech", speaker: "에피메테우스", text: "형 말이 맞았어. 한 박자 늦었지.", align: "start" },
        { type: "speech", speaker: "판도라", text: "늦은 생각도 생각은 생각이니까.", align: "end" },
      ],
    },
  ],
};
