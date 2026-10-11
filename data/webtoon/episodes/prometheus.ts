import type { Episode } from "@/data/webtoon/types";

const feet = 448;

export const prometheus: Episode = {
  slug: "prometheus",
  title: "프로메테우스의 불",
  order: 1,
  minutes: 4,
  storySlug: "prometheus",
  cover: "prometheus-fennel",
  summary: {
    who: "미리 생각하는 티탄 프로메테우스와, 제물을 잘못 고른 제우스.",
    what: "고기 대신 뼈를 고른 제우스가 불을 감추자, 프로메테우스는 회향 줄기에 불씨를 숨겨 인간에게 되돌립니다.",
    so: "인간은 불을 쓰고, 프로메테우스는 바위에 묶입니다. 간을 쪼는 장면은 그리지 않았고, 훗날 헤라클레스가 풀어 줍니다.",
  },
  footnote:
    "헤시오도스에는 프로메테우스가 흙으로 인간을 빚었다는 이야기가 없습니다. 그 말은 아폴로도로스와 오비디우스 같은 후대 자료에 나옵니다. 아이스킬로스 계열 비극은 그가 숫자와 글자와 의술까지 가르쳤다고 넓힙니다.",
  moral: "불은 되찾았습니다. 값은 바위에 남았습니다.",
  phrases: [
    {
      term: "프로메테우스의 불",
      explain: "감춰진 것을 몰래 되돌려 사람에게 건넬 때 쓰는 이미지입니다. 그리스어 이름은 ‘미리 생각하는 자’입니다.",
      links: [
        { href: "/gods/prometheus", label: "프로메테우스" },
        { href: "/stories/prometheus", label: "이야기: 프로메테우스의 불" },
      ],
    },
    {
      term: "메코네의 제물",
      explain: "맛있는 고기는 위장으로 감추고, 뼈는 기름으로 반짝이게 덮었습니다. 제우스가 반짝이는 쪽을 고른 뒤, 제사에서는 뼈를 태우고 고기는 사람이 먹게 됩니다.",
      links: [{ href: "/words/titan", label: "단어: 타이탄" }],
    },
  ],
  quiz: [
    {
      id: "clay-people",
      kind: "ox",
      prompt: "헤시오도스는 프로메테우스가 흙으로 인간을 빚었다고 적는다.",
      answer: 0,
      explain: "흙으로 빚었다는 말은 후대 자료에 있습니다. 헤시오도스의 중심은 제물 나누기와 불입니다.",
    },
    {
      id: "fennel",
      kind: "choice",
      prompt: "프로메테우스가 불씨를 숨긴 것은?",
      choices: ["속이 빈 회향 줄기", "판도라의 항아리", "제우스의 번개", "헤르메스의 모자"],
      answer: 0,
      explain: "헤시오도스 『신통기』와 『일과 날』은 회향 줄기(나르텍스) 속의 불씨를 말합니다.",
    },
    {
      id: "liver",
      kind: "ox",
      prompt: "바위에 묶인 그의 간은, 이야기 속에서 밤마다 다시 자란다.",
      answer: 1,
      explain: "불사의 몸이라 낮의 피해가 밤에 회복됩니다. 그 장면 자체는 이 편에서 그리지 않았습니다.",
    },
  ],
  characters: ["prometheus", "zeus", "hephaistos", "herakles"],
  related: [
    { href: "/stories/pandora", label: "다음 이야기: 판도라의 항아리" },
    { href: "/in-media#rubens-prometheus", label: "명화: 루벤스 「결박된 프로메테우스」" },
  ],
  chat: [
    { id: "zeus", name: "제우스", text: "기름이 반짝이길래 골랐지.", pose: "angry" },
    { id: "prometheus", name: "프로메테우스", text: "반짝이는 쪽이 항상 고기는 아니죠.", pose: "sly" },
    { id: "hephaistos", name: "헤파이스토스", text: "사슬은 내가 짰어요. 불씨는 내가 안 숨겼고.", pose: "oops" },
    { id: "herakles", name: "헤라클레스", text: "독수리는 화면 밖으로 보냈습니다.", pose: "proud" },
    { id: "hera", name: "헤라", text: "풀어 준 영웅, 나중에 또 보자.", pose: "sly" },
    { id: "epimetheus", name: "에피메테우스", text: "형은 미리. 나는 항아리 편에서.", pose: "oops" },
  ],
  sources: [
    { work: "헤시오도스 『신통기』", ref: "521–616행" },
    { work: "헤시오도스 『일과 날』", ref: "42–58행" },
    { work: "아폴로도로스 『비블리오테케』", ref: "1권 7장 1절, 2권 5장 11절" },
  ],
  panels: [
    {
      id: "prometheus-mecone",
      bg: "meadow",
      alt: "들판. 프로메테우스가 두 몫을 내밀고, 제우스가 기름으로 덮인 쪽을 고른다.",
      cast: [
        { id: "prometheus", pose: "offer", x: 100, y: feet, scale: 0.95 },
        { id: "zeus", pose: "proud", x: 250, y: feet, scale: 1 },
      ],
      bubbles: [
        { type: "narration", text: "메코네. 신과 인간이 제물을 나눕니다. 고기는 볼품없고, 뼈는 기름으로 반짝입니다." },
        { type: "speech", speaker: "제우스", text: "반짝이는 쪽으로 하지.", align: "end" },
      ],
    },
    {
      id: "prometheus-anger",
      bg: "olympus",
      alt: "올림포스. 제우스가 번개를 쥐고 화나 있고, 프로메테우스가 걱정한다.",
      sfx: "쾅!",
      cast: [
        { id: "zeus", pose: "angry", x: 128, y: feet, scale: 1.05 },
        { id: "prometheus", pose: "worried", x: 270, y: feet, scale: 0.88 },
      ],
      bubbles: [
        { type: "narration", text: "속은 제우스가 인간에게서 불을 감춥니다." },
        { type: "speech", speaker: "제우스", text: "불 없이 지내 봐.", align: "start" },
      ],
    },
    {
      id: "prometheus-cold",
      bg: "meadow",
      alt: "불이 꺼진 들판. 마을 사람이 떨고, 구름 위 제우스가 작은 불씨를 감춘다.",
      cast: [
        { id: "villager", pose: "worried", x: 120, y: feet, scale: 1 },
        { id: "zeus", pose: "sly", x: 280, y: 250, scale: 0.5, ground: false },
      ],
      props: [
        { kind: "cloud", x: 280, y: 268, scale: 0.6 },
        { kind: "fennel", x: 250, y: 200, scale: 0.8 },
      ],
      bubbles: [
        { type: "narration", text: "부엌이 식습니다. 불씨는 올림포스 쪽에 있습니다." },
        { type: "speech", speaker: "마을 사람", text: "오늘 저녁은 뭐로 익히죠?", align: "start" },
      ],
    },
    {
      id: "prometheus-fennel",
      bg: "sky",
      alt: "하늘. 프로메테우스가 불씨가 든 회향 줄기를 들고 구름 사이를 난다.",
      sfx: "타닥",
      cast: [{ id: "prometheus", pose: "fly", x: 170, y: 300, scale: 1, ground: false }],
      props: [{ kind: "fennel", x: 230, y: 250, scale: 1.3, front: true }],
      bubbles: [
        { type: "narration", text: "속이 빈 회향 줄기 안에 불씨를 숨깁니다." },
        { type: "speech", speaker: "프로메테우스", text: "줄기가 따뜻하면 성공.", align: "start" },
      ],
    },
    {
      id: "prometheus-give",
      bg: "meadow",
      alt: "들판. 프로메테우스가 마을 사람에게 작은 불씨를 건넨다.",
      cast: [
        { id: "prometheus", pose: "offer", x: 120, y: feet, scale: 1 },
        { id: "villager", pose: "surprised", x: 250, y: feet, scale: 0.95, variant: 1 },
      ],
      bubbles: [
        { type: "narration", text: "불은 다시 사람의 손이 됩니다. 요리, 대장간, 밤의 불빛." },
        { type: "speech", speaker: "프로메테우스", text: "나누되, 자랑은 작게.", align: "start" },
      ],
    },
    {
      id: "prometheus-forge",
      bg: "forge",
      alt: "대장간. 마을 사람이 망치질을 하고, 또 한 사람이 불빛을 바라본다.",
      cast: [
        { id: "villager", pose: "craft", x: 120, y: feet, scale: 0.95 },
        { id: "villager", pose: "happy", x: 250, y: feet, scale: 0.85, variant: 1 },
      ],
      props: [{ kind: "anvil", x: 180, y: 420, scale: 1 }],
      bubbles: [
        { type: "narration", text: "금속이 붉어지고, 빵이 익습니다." },
        { type: "speech", speaker: "마을 사람", text: "이거, 돌려받은 거구나.", align: "start" },
      ],
    },
    {
      id: "prometheus-chain",
      bg: "cave",
      alt: "바위. 헤파이스토스가 사슬을 두고, 프로메테우스가 묶인 채 서 있다. 상처는 없다.",
      cast: [
        { id: "hephaistos", pose: "sad", x: 100, y: feet, scale: 0.9 },
        { id: "prometheus", pose: "oops", x: 230, y: feet, scale: 0.95 },
      ],
      props: [{ kind: "chains", x: 230, y: 360, scale: 1.2, front: true }],
      bubbles: [
        { type: "narration", text: "카우카소스의 바위. 헤파이스토스가 사슬을 채웁니다." },
        { type: "speech", speaker: "헤파이스토스", text: "명령이라 잠가서, 미안해서.", align: "start" },
      ],
    },
    {
      id: "prometheus-eagle",
      bg: "cave",
      alt: "바위 옆 공중에 작은 독수리가 있고, 프로메테우스는 바위 뒤를 가리킨다. 쪼는 장면은 없다.",
      sfx: "파닥",
      cast: [{ id: "prometheus", pose: "point", x: 130, y: feet, scale: 1 }],
      props: [{ kind: "eagle", x: 270, y: 250, scale: 1.4 }],
      bubbles: [
        { type: "narration", text: "낮마다 독수리가 오고, 간은 밤에 다시 자랍니다. 그 자리는 바위 뒤입니다." },
        { type: "speech", speaker: "프로메테우스", text: "내일 또 오지. 나도 또 있고.", align: "start" },
      ],
    },
    {
      id: "prometheus-free",
      bg: "cave",
      alt: "헤라클레스가 활을 들고, 독수리는 멀어지고, 프로메테우스가 놀란다. 맞은 새는 그리지 않았다.",
      cast: [
        { id: "herakles", pose: "point", x: 110, y: feet, scale: 1 },
        { id: "prometheus", pose: "surprised", x: 250, y: feet, scale: 0.9 },
      ],
      props: [{ kind: "eagle", x: 300, y: 210, scale: 0.8 }],
      bubbles: [
        { type: "narration", text: "오랜 뒤 헤라클레스가 독수리를 쫓습니다. 화살이 닿는 순간은 화면 밖입니다." },
        { type: "speech", speaker: "헤라클레스", text: "사슬은 내가 풀게요.", align: "start" },
      ],
    },
    {
      id: "prometheus-thanks",
      bg: "meadow",
      alt: "풀밭. 풀려난 프로메테우스와 헤라클레스가 나란히 서 있다.",
      cast: [
        { id: "prometheus", pose: "happy", x: 120, y: feet, scale: 1 },
        { id: "herakles", pose: "proud", x: 250, y: feet, scale: 1 },
      ],
      props: [{ kind: "fennel", x: 180, y: 300, scale: 0.9 }],
      bubbles: [
        { type: "narration", text: "불은 사람 곁에 남고, 티탄은 바위에서 내려옵니다." },
        { type: "speech", speaker: "프로메테우스", text: "미리 생각한 값이, 늦었지만.", align: "start" },
      ],
    },
  ],
};
