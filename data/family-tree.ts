/**
 * 가족관계도 (Family Tree).
 *
 * 헤시오도스 『신통기』를 기본 줄기로 합니다. 판본이 갈리는 부모는
 * `variantParent()`로 잇고, 칸의 `note`에 다른 전승을 적습니다.
 *
 * 인물을 더할 때
 * 1. `SEEDS`에 id, 한국어 이름, 로마 이름, band, col, y를 넣습니다.
 * 2. 같은 가로줄에서는 col 차이를 1.2 이상으로 둡니다.
 * 3. 바로 위에 올린 사람은 `parent()` 또는 `spouse()`로 잇습니다.
 * 4. `/gods/[slug]` 페이지가 있으면 slug를 넣으면 초상과 링크가 붙습니다.
 */

export type BandId = "primordial" | "titan" | "olympian" | "zeus-children" | "hero";
export type LinkKind = "parent" | "spouse" | "variant-parent";

export type TreeSeed = {
  id: string;
  ko: string;
  roman: string;
  greek?: string;
  band: BandId;
  /** Horizontal slot inside the band. Same-row gap should stay ≥ 1.2. */
  col: number;
  /** Absolute top of the card, in pixels. */
  y: number;
  slug?: string;
  guestTag?: string;
  summary: string;
  note?: string;
  badge?: boolean;
  aliases?: string[];
};

export type TreeLink = { from: string; to: string; kind: LinkKind };

type BandMeta = {
  id: BandId;
  ko: string;
  en: string;
  hint: string;
  color: string;
  soft: string;
};

export const BAND_META: BandMeta[] = [
  {
    id: "primordial",
    ko: "태초",
    en: "Primordial",
    hint: "세상보다 먼저 있던 존재입니다. 헤시오도스는 카오스가 가이아를 낳았다고 말하지 않습니다.",
    color: "#3e4d7a",
    soft: "#e7edf7",
  },
  {
    id: "titan",
    ko: "티탄",
    en: "Titans",
    hint: "가이아와 우라노스의 열두 티탄과, 그 다음 세대입니다.",
    color: "#8a5a24",
    soft: "#fbf3e6",
  },
  {
    id: "olympian",
    ko: "올림포스",
    en: "Olympians",
    hint: "크로노스와 레아의 여섯 자녀입니다. 아프로디테는 우라노스에게서 났습니다.",
    color: "#1f3b57",
    soft: "#e6eef5",
  },
  {
    id: "zeus-children",
    ko: "제우스의 자녀",
    en: "Children of Zeus",
    hint: "마이아·세멜레·암피트리테는 자식 바로 위에 있습니다. 다른 어머니는 윗세대에 있고, 칸을 누르면 선으로 이어집니다. 트리톤은 포세이돈의 아들입니다.",
    color: "#7a3454",
    soft: "#f8eef2",
  },
  {
    id: "hero",
    ko: "영웅",
    en: "Heroes",
    hint: "인간 부모와 영웅입니다. 아이네이아스는 아프로디테의 아들입니다.",
    color: "#2d6844",
    soft: "#e8f4ee",
  },
];

export const DISPUTES = [
  {
    id: "aphrodite",
    title: "아프로디테의 출생",
    main: "헤시오도스 『신통기』 188–206행. 우라노스의 잘린 몸에서 바다로 떨어진 거품에서 태어납니다. 어머니는 없습니다.",
    other: "호메로스 『일리아스』 5권 370–372행. 제우스와 디오네의 딸입니다.",
  },
  {
    id: "hephaistos",
    title: "헤파이스토스의 출생",
    main: "헤시오도스 『신통기』 927–929행. 헤라가 제우스 없이 혼자 낳습니다.",
    other: "아폴로도로스 『비블리오테케』 1권 3장 5절은, 호메로스가 제우스와 헤라의 아들로 적는다고 정리합니다.",
  },
  {
    id: "eros",
    title: "에로스",
    main: "헤시오도스 『신통기』 120행 근처. 카오스·가이아·타르타로스와 함께 태초부터 있는 신입니다.",
    other: "후대, 특히 로마의 쿠피도(Cupid)는 아프로디테(베누스)의 아들입니다. 아버지로 아레스를 드는 전승도 있습니다.",
  },
  {
    id: "theseus",
    title: "테세우스의 아버지",
    main: "어머니 아이트라와 아테네 왕 아이게우스의 아들로 보통 이야기합니다.",
    other: "플루타르코스 『테세우스전』은 같은 밤 포세이돈과도 맺어졌다는 전승을 함께 전합니다.",
  },
] as const;

export const NAME_NOTES = [
  {
    title: "테튀스와 테티스",
    body: "이 가계도의 테튀스(Tethys)는 오케아노스의 아내인 티탄입니다. 아킬레우스의 어머니 테티스(Thetis)와는 다른 신입니다.",
  },
  {
    title: "칸의 순서",
    body: "헤시오도스가 적은 크로노스 자녀의 출생 순서는 헤스티아, 데메테르, 헤라, 하데스, 포세이돈, 제우스입니다. 그림에서는 부부끼리 이웃하도록 칸을 옮겼습니다.",
  },
] as const;

const COL = 116;
const NODE_W = 108;
const NODE_H = 88;
const PAD = 28;

const SEEDS: TreeSeed[] = [
  { id: "chaos", ko: "카오스", roman: "Chaos", greek: "Χάος", band: "primordial", col: 1.15, y: 70, slug: "chaos", summary: "헤시오도스가 맨 먼저 이름을 적는 빈 틈입니다. 가이아와 타르타로스, 에로스를 낳았다고는 하지 않습니다.", aliases: ["chaos", "카오스"] },
  { id: "gaia", ko: "가이아", roman: "Terra", greek: "Γαῖα", band: "primordial", col: 3.5, y: 70, slug: "gaia", summary: "땅입니다. 우라노스와 폰토스를 혼자 낳고, 우라노스와 함께 티탄 열두 명을 두었습니다.", aliases: ["terra", "가이아", "테라"] },
  { id: "tartaros", ko: "타르타로스", roman: "Tartarus", greek: "Τάρταρος", band: "primordial", col: 5, y: 70, slug: "tartaros", summary: "지하의 깊은 심연입니다. 태초에 가이아와 나란히 나타납니다.", aliases: ["tartarus", "타르타로스"] },
  { id: "eros", ko: "에로스", roman: "Cupid", greek: "Ἔρως", band: "primordial", col: 7.4, y: 70, slug: "eros", badge: true, summary: "태초부터 있던 사랑의 신입니다. 로마에서는 쿠피도, 영어로는 큐피드라고 부릅니다.", note: "후대에는 아프로디테의 아들로, 아버지로 아레스를 드는 전승도 있습니다.", aliases: ["cupid", "amor", "큐피드", "쿠피드", "에로스"] },
  { id: "erebos", ko: "에레보스", roman: "Erebus", greek: "Ἔρεβος", band: "primordial", col: 0.5, y: 186, summary: "어둠입니다. 헤시오도스는 카오스에게서 닉스와 함께 생겨났다고 적습니다.", aliases: ["erebus", "에레보스"] },
  { id: "nyx", ko: "닉스", roman: "Nox", greek: "Νύξ", band: "primordial", col: 1.8, y: 186, slug: "nyx", summary: "밤입니다. 카오스에게서 나왔고, 에레보스와 짝이 됩니다.", aliases: ["nox", "닉스", "녹스"] },
  { id: "ouranos", ko: "우라노스", roman: "Caelus", greek: "Οὐρανός", band: "primordial", col: 3.5, y: 186, slug: "ouranos", summary: "하늘입니다. 가이아가 혼자 낳은 뒤 가이아의 남편이 되어 티탄들의 아버지가 됩니다.", aliases: ["uranus", "caelus", "우라누스", "우라노스"] },
  { id: "pontus", ko: "폰토스", roman: "Pontus", greek: "Πόντος", band: "primordial", col: 6.2, y: 186, summary: "바다입니다. 가이아가 우라노스처럼 짝 없이 낳았습니다.", aliases: ["pontus", "폰토스", "폰투스"] },

  { id: "okeanos", ko: "오케아노스", roman: "Oceanus", greek: "Ὠκεανός", band: "titan", col: 0, y: 390, slug: "okeanos", summary: "세상을 한 바퀴 도는 강이자 티탄입니다. 테튀스와 함께 메티스와 클리메네의 아버지입니다.", aliases: ["oceanus", "오케아노스"] },
  { id: "tethys", ko: "테튀스", roman: "Tethys", greek: "Τηθύς", band: "titan", col: 1.2, y: 390, summary: "오케아노스의 아내인 티탄입니다. 아킬레우스의 어머니 테티스와는 다른 신입니다.", aliases: ["tethys", "테튀스", "테티스"] },
  { id: "coeus", ko: "코이오스", roman: "Coeus", greek: "Κοῖος", band: "titan", col: 2.6, y: 390, summary: "티탄입니다. 포이베와 함께 레토의 아버지입니다. 딸로 아스테리아도 전합니다.", aliases: ["coeus", "코이오스"] },
  { id: "phoebe", ko: "포이베", roman: "Phoebe", greek: "Φοίβη", band: "titan", col: 3.8, y: 390, summary: "티탄 포이베입니다. 코이오스와 레토의 어머니입니다.", aliases: ["phoebe", "포이베"] },
  { id: "hyperion", ko: "히페리온", roman: "Hyperion", greek: "Ὑπερίων", band: "titan", col: 5.2, y: 390, summary: "빛의 티탄입니다. 테이아와 함께 헬리오스, 셀레네, 에오스의 아버지입니다.", aliases: ["hyperion", "히페리온"] },
  { id: "theia", ko: "테이아", roman: "Theia", greek: "Θεία", band: "titan", col: 7.6, y: 390, summary: "티탄입니다. 히페리온과 해·달·새벽의 어머니입니다.", aliases: ["theia", "테이아"] },
  { id: "iapetos", ko: "이아페토스", roman: "Iapetus", greek: "Ἰαπετός", band: "titan", col: 9, y: 390, slug: "iapetos", summary: "티탄입니다. 클리메네와 아틀라스, 프로메테우스의 아버지입니다.", aliases: ["iapetus", "이아페토스"] },
  { id: "clymene", ko: "클리메네", roman: "Clymene", greek: "Κλυμένη", band: "titan", col: 10.2, y: 390, guestTag: "오케아니스", summary: "오케아노스의 딸입니다. 이아페토스의 아내이고, 아들로 에피메테우스와 메노이티오스도 전합니다.", aliases: ["clymene", "클리메네"] },
  { id: "kronos", ko: "크로노스", roman: "Saturn", greek: "Κρόνος", band: "titan", col: 11.6, y: 390, slug: "kronos", summary: "티탄의 막내입니다. 레아와 헤스티아, 데메테르, 헤라, 하데스, 포세이돈, 제우스를 두었습니다.", aliases: ["saturn", "cronus", "cronos", "사턴", "새턴", "사투르누스", "크로노스"] },
  { id: "rhea", ko: "레아", roman: "Ops", greek: "Ῥέα", band: "titan", col: 12.8, y: 390, slug: "rhea", summary: "티탄입니다. 크로노스의 아내이고 올림포스 여섯 형제의 어머니입니다.", aliases: ["ops", "레아", "옵스"] },
  { id: "crius", ko: "크리오스", roman: "Crius", greek: "Κρεῖος", band: "titan", col: 14.2, y: 390, summary: "열두 티탄 중 한 명입니다. 에우리비아와 아스트라이오스 등의 아버지로도 전하지만, 이 그림에는 그 자녀를 넣지 않았습니다.", aliases: ["crius", "크리오스", "크리우스"] },
  { id: "themis", ko: "테미스", roman: "Themis", greek: "Θέμις", band: "titan", col: 15.4, y: 390, slug: "themis", summary: "질서와 법의 티탄입니다. 제우스와 호라이(계절), 모이라이(운명)를 두었다는 전승이 있습니다.", aliases: ["themis", "테미스"] },
  { id: "mnemosyne", ko: "므네모시네", roman: "Mnemosyne", greek: "Μνημοσύνη", band: "titan", col: 16.6, y: 390, slug: "mnemosyne", summary: "기억의 티탄입니다. 제우스와 아홉 무사이의 어머니입니다.", aliases: ["mnemosyne", "므네모시네", "모네타"] },

  { id: "metis", ko: "메티스", roman: "Metis", greek: "Μῆτις", band: "titan", col: 0.6, y: 506, slug: "metis", summary: "오케아노스와 테튀스의 딸, 지혜의 여신입니다. 제우스가 삼킨 뒤 아테나가 그의 머리에서 태어납니다.", aliases: ["metis", "메티스"] },
  { id: "leto", ko: "레토", roman: "Latona", greek: "Λητώ", band: "titan", col: 3.2, y: 506, slug: "leto", summary: "코이오스와 포이베의 딸입니다. 제우스와 아폴론, 아르테미스를 낳습니다.", aliases: ["latona", "레토", "라토나"] },
  { id: "helios", ko: "헬리오스", roman: "Sol", greek: "Ἥλιος", band: "titan", col: 5.2, y: 506, slug: "helios", summary: "태양입니다. 히페리온과 테이아의 아들입니다.", aliases: ["sol", "헬리오스", "솔"] },
  { id: "selene", ko: "셀레네", roman: "Luna", greek: "Σελήνη", band: "titan", col: 6.4, y: 506, summary: "달입니다. 히페리온과 테이아의 딸입니다.", aliases: ["luna", "셀레네", "루나"] },
  { id: "eos", ko: "에오스", roman: "Aurora", greek: "Ἠώς", band: "titan", col: 7.6, y: 506, summary: "새벽입니다. 히페리온과 테이아의 딸입니다.", aliases: ["aurora", "에오스", "아우로라", "오로라"] },
  { id: "atlas", ko: "아틀라스", roman: "Atlas", greek: "Ἄτλας", band: "titan", col: 9, y: 506, slug: "atlas", summary: "이아페토스와 클리메네의 아들입니다. 하늘을 떠받치고, 딸로 마이아가 있습니다.", aliases: ["atlas", "아틀라스"] },
  { id: "prometheus", ko: "프로메테우스", roman: "Prometheus", greek: "Προμηθεύς", band: "titan", col: 10.2, y: 506, slug: "prometheus", summary: "이아페토스와 클리메네의 아들입니다. 인간에게 불을 가져다 준 티탄으로 전합니다.", aliases: ["prometheus", "프로메테우스"] },

  { id: "aphrodite", ko: "아프로디테", roman: "Venus", greek: "Ἀφροδίτη", band: "olympian", col: 0, y: 700, slug: "aphrodite", badge: true, summary: "바다 거품에서 난 사랑의 여신입니다. 헤파이스토스의 아내이고, 아레스·안키세스와도 맺어집니다.", note: "헤시오도스에서는 우라노스의 바다 거품에서 태어납니다. 호메로스에서는 제우스와 디오네의 딸입니다.", aliases: ["venus", "비너스", "베누스", "아프로디테"] },
  { id: "dione", ko: "디오네", roman: "Dione", greek: "Διώνη", band: "olympian", col: 1.15, y: 700, guestTag: "다른 전승", summary: "호메로스 『일리아스』에서 아프로디테의 어머니로 나오는 여신입니다. 오케아노스의 딸로도 전합니다.", aliases: ["dione", "디오네"] },
  { id: "hestia", ko: "헤스티아", roman: "Vesta", greek: "Ἑστία", band: "olympian", col: 2.6, y: 700, slug: "hestia", summary: "크로노스와 레아의 맏딸, 화로의 여신입니다. 결혼하지 않고 자녀도 없습니다.", aliases: ["vesta", "헤스티아", "베스타"] },
  { id: "hades", ko: "하데스", roman: "Pluto", greek: "ᾍδης", band: "olympian", col: 3.8, y: 700, slug: "hades", summary: "크로노스와 레아의 아들로 지하 세계를 다스립니다. 페르세포네의 남편입니다.", aliases: ["pluto", "하데스", "플루토"] },
  { id: "demeter", ko: "데메테르", roman: "Ceres", greek: "Δημήτηρ", band: "olympian", col: 5, y: 700, slug: "demeter", summary: "곡물의 여신입니다. 제우스와 페르세포네의 어머니입니다.", aliases: ["ceres", "데메테르", "케레스"] },
  { id: "hera", ko: "헤라", roman: "Juno", greek: "Ἥρα", band: "olympian", col: 6.2, y: 700, slug: "hera", summary: "제우스의 아내이자 누이입니다. 아레스, 헤베, 에일레이티이아의 어머니이고, 헤파이스토스를 혼자 낳았다는 것이 신통기의 이야기입니다.", aliases: ["juno", "헤라", "주노", "유노"] },
  { id: "zeus", ko: "제우스", roman: "Jupiter", greek: "Ζεύς", band: "olympian", col: 7.4, y: 700, slug: "zeus", summary: "크로노스와 레아의 막내입니다. 이 가계도에는 『신통기』에 나오는 주요 배우자와 자녀를 넣었습니다.", aliases: ["jupiter", "iuppiter", "zeus", "주피터", "쥬피터", "유피테르", "제우스"] },
  { id: "poseidon", ko: "포세이돈", roman: "Neptune", greek: "Ποσειδῶν", band: "olympian", col: 8.6, y: 700, slug: "poseidon", summary: "바다의 신입니다. 암피트리테와 트리톤을 두고, 테세우스의 아버지로도 전합니다.", aliases: ["neptune", "포세이돈", "넵튠", "넵투누스"] },

  { id: "maia", ko: "마이아", roman: "Maia", greek: "Μαῖα", band: "zeus-children", col: 3.7, y: 900, guestTag: "플레이아데스", summary: "아틀라스의 딸입니다. 어머니로 플레이오네를 함께 드는 전승이 있고, 제우스와 헤르메스를 낳습니다.", aliases: ["maia", "마이아"] },
  { id: "semele", ko: "세멜레", roman: "Semele", greek: "Σεμέλη", band: "zeus-children", col: 5, y: 900, guestTag: "인간", summary: "테베의 공주입니다. 제우스의 아이를 가진 채 죽었고, 디오니소스는 제우스의 넓적다리에서 태어납니다.", aliases: ["semele", "세멜레"] },
  { id: "amphitrite", ko: "암피트리테", roman: "Amphitrite", greek: "Ἀμφιτρίτη", band: "zeus-children", col: 14.1, y: 900, guestTag: "님프", summary: "바다의 님프이자 포세이돈의 아내입니다. 트리톤의 어머니입니다.", aliases: ["amphitrite", "암피트리테"] },

  { id: "athena", ko: "아테나", roman: "Minerva", greek: "Ἀθήνη", band: "zeus-children", col: 0, y: 1016, slug: "athena", summary: "제우스와 메티스의 딸입니다. 제우스가 메티스를 삼킨 뒤 머리에서 무장한 채로 태어납니다.", aliases: ["minerva", "athena", "아테나", "미네르바"] },
  { id: "apollo", ko: "아폴론", roman: "Apollo", greek: "Ἀπόλλων", band: "zeus-children", col: 1.2, y: 1016, slug: "apollo", summary: "제우스와 레토의 아들입니다. 아르테미스와 쌍둥이입니다.", aliases: ["apollo", "아폴론", "아폴로"] },
  { id: "artemis", ko: "아르테미스", roman: "Diana", greek: "Ἄρτεμις", band: "zeus-children", col: 2.4, y: 1016, slug: "artemis", summary: "제우스와 레토의 딸입니다. 아폴론과 쌍둥이입니다.", aliases: ["diana", "artemis", "아르테미스", "디아나", "다이애나"] },
  { id: "hermes", ko: "헤르메스", roman: "Mercury", greek: "Ἑρμῆς", band: "zeus-children", col: 3.7, y: 1016, slug: "hermes", summary: "제우스와 마이아의 아들입니다. 신들의 전령입니다.", aliases: ["mercury", "hermes", "헤르메스", "머큐리", "메르쿠리"] },
  { id: "dionysos", ko: "디오니소스", roman: "Bacchus", greek: "Διόνυσος", band: "zeus-children", col: 5, y: 1016, slug: "dionysos", summary: "제우스와 인간 세멜레의 아들입니다. 어머니는 번개에 죽고, 제우스가 넓적다리에서 낳습니다.", aliases: ["bacchus", "dionysus", "디오니소스", "바쿠스", "디오니서스"] },
  { id: "persephone", ko: "페르세포네", roman: "Proserpina", greek: "Περσεφόνη", band: "zeus-children", col: 6.3, y: 1016, slug: "persephone", summary: "제우스와 데메테르의 딸입니다. 하데스의 아내가 되어 저승의 여왕이 됩니다.", aliases: ["proserpina", "페르세포네", "프로세르피나"] },
  { id: "ares", ko: "아레스", roman: "Mars", greek: "Ἄρης", band: "zeus-children", col: 7.6, y: 1016, slug: "ares", summary: "제우스와 헤라의 아들, 전쟁의 신입니다. 아프로디테와 맺어집니다.", aliases: ["mars", "ares", "아레스", "마르스"] },
  { id: "hebe", ko: "헤베", roman: "Juventas", greek: "Ἥβη", band: "zeus-children", col: 8.9, y: 1016, summary: "제우스와 헤라의 딸, 청춘의 여신입니다. 헤라클레스가 신이 된 뒤의 아내로도 전합니다.", aliases: ["juventas", "hebe", "헤베"] },
  { id: "eileithyia", ko: "에일레이티이아", roman: "Lucina", greek: "Εἰλείθυια", band: "zeus-children", col: 10.2, y: 1016, summary: "제우스와 헤라의 딸, 출산을 돕는 여신입니다.", aliases: ["lucina", "eileithyia", "ilithyia", "에일레이티이아", "에일레이티아"] },
  { id: "hephaistos", ko: "헤파이스토스", roman: "Vulcan", greek: "Ἥφαιστος", band: "zeus-children", col: 11.5, y: 1016, slug: "hephaistos", badge: true, summary: "대장간과 불의 신입니다. 아프로디테의 남편으로 전합니다.", note: "헤시오도스 『신통기』에서는 헤라가 혼자 낳습니다. 호메로스 전통에서는 제우스와 헤라의 아들입니다.", aliases: ["vulcan", "hephaestus", "헤파이스토스", "불칸", "벌컨"] },
  { id: "muses", ko: "무사이", roman: "Muses", greek: "Μοῦσαι", band: "zeus-children", col: 12.8, y: 1016, slug: "muses", summary: "제우스와 므네모시네의 아홉 딸입니다. 시와 음악과 학문의 여신들입니다.", aliases: ["muses", "musae", "뮤즈", "무사", "무사이"] },
  { id: "triton", ko: "트리톤", roman: "Triton", greek: "Τρίτων", band: "zeus-children", col: 14.1, y: 1016, summary: "포세이돈과 암피트리테의 아들입니다. 나팔 고둥을 부는 바다의 신으로 그려집니다.", aliases: ["triton", "트리톤"] },

  { id: "anchises", ko: "안키세스", roman: "Anchises", greek: "Ἀγχίσης", band: "hero", col: 0, y: 1230, guestTag: "인간", summary: "트로이의 왕족입니다. 아프로디테와 아이네이아스의 아버지입니다.", aliases: ["anchises", "안키세스"] },
  { id: "alcmene", ko: "알크메네", roman: "Alcmena", greek: "Ἀλκμήνη", band: "hero", col: 2.4, y: 1230, guestTag: "인간", summary: "헤라클레스의 인간 어머니입니다. 남편 암피트리온도 인간 아버지로 이야기합니다.", aliases: ["alcmene", "alcmena", "알크메네"] },
  { id: "danae", ko: "다나에", roman: "Danae", greek: "Δανάη", band: "hero", col: 3.8, y: 1230, slug: "danae", guestTag: "인간", summary: "아르고스의 공주입니다. 제우스가 황금 비가 되어 찾아왔고, 페르세우스를 낳습니다.", aliases: ["danae", "다나에"] },
  { id: "aegeus", ko: "아이게우스", roman: "Aegeus", greek: "Αἰγεύς", band: "hero", col: 5.4, y: 1230, guestTag: "인간", summary: "아테네의 왕입니다. 테세우스의 아버지로 보통 이야기하는 사람입니다.", aliases: ["aegeus", "아이게우스"] },
  { id: "aethra", ko: "아이트라", roman: "Aethra", greek: "Αἴθρα", band: "hero", col: 6.8, y: 1230, guestTag: "인간", summary: "트로이젠의 공주이고 테세우스의 어머니입니다.", aliases: ["aethra", "아이트라"] },

  { id: "aineias", ko: "아이네이아스", roman: "Aeneas", greek: "Αἰνείας", band: "hero", col: 0, y: 1346, slug: "aineias", summary: "아프로디테와 안키세스의 아들입니다. 로마 건국 이야기의 조상으로 이어집니다.", aliases: ["aeneas", "아이네이아스", "아이네아스", "에네아스"] },
  { id: "herakles", ko: "헤라클레스", roman: "Hercules", greek: "Ἡρακλῆς", band: "hero", col: 2.4, y: 1346, slug: "herakles", summary: "제우스와 알크메네의 아들입니다. 열두 과업으로 유명한 영웅이고, 죽은 뒤 헤베와 결혼했다는 전승이 있습니다.", aliases: ["hercules", "herakles", "헤라클레스", "헤르쿨레스", "허큘리스"] },
  { id: "perseus", ko: "페르세우스", roman: "Perseus", greek: "Περσεύς", band: "hero", col: 3.8, y: 1346, slug: "perseus", summary: "제우스와 다나에의 아들입니다. 메두사를 물리친 영웅으로 전합니다.", aliases: ["perseus", "페르세우스"] },
  { id: "theseus", ko: "테세우스", roman: "Theseus", greek: "Θησεύς", band: "hero", col: 6.1, y: 1346, slug: "theseus", badge: true, summary: "아테네의 영웅입니다. 미노타우로스를 죽인 이야기로 유명합니다.", note: "아버지는 보통 아이게우스입니다. 포세이돈이 아버지라는 전승도 함께 있습니다.", aliases: ["theseus", "테세우스"] },
];

function buildLinks(): TreeLink[] {
  const links: TreeLink[] = [];
  const parent = (from: string, to: string) => links.push({ from, to, kind: "parent" });
  const parents = (child: string, ...from: string[]) => from.forEach((id) => parent(id, child));
  const spouse = (a: string, b: string) => links.push({ from: a, to: b, kind: "spouse" });
  const variantParent = (from: string, to: string) => links.push({ from, to, kind: "variant-parent" });

  parent("chaos", "erebos");
  parent("chaos", "nyx");
  spouse("erebos", "nyx");
  parent("gaia", "ouranos");
  parent("gaia", "pontus");
  spouse("gaia", "ouranos");

  const titans = ["okeanos", "tethys", "coeus", "phoebe", "hyperion", "theia", "iapetos", "kronos", "rhea", "crius", "themis", "mnemosyne"];
  for (const id of titans) parents(id, "ouranos", "gaia");

  spouse("okeanos", "tethys");
  spouse("coeus", "phoebe");
  spouse("hyperion", "theia");
  spouse("iapetos", "clymene");
  spouse("kronos", "rhea");

  parents("clymene", "okeanos", "tethys");
  parents("metis", "okeanos", "tethys");
  parents("leto", "coeus", "phoebe");
  for (const id of ["helios", "selene", "eos"]) parents(id, "hyperion", "theia");
  parents("atlas", "iapetos", "clymene");
  parents("prometheus", "iapetos", "clymene");
  parent("atlas", "maia");

  for (const id of ["hestia", "hades", "demeter", "hera", "zeus", "poseidon"]) parents(id, "kronos", "rhea");

  spouse("zeus", "hera");
  spouse("zeus", "metis");
  spouse("zeus", "leto");
  spouse("zeus", "demeter");
  spouse("zeus", "mnemosyne");
  spouse("zeus", "themis");
  spouse("zeus", "semele");
  spouse("zeus", "maia");
  spouse("zeus", "alcmene");
  spouse("zeus", "danae");
  spouse("hades", "persephone");
  spouse("poseidon", "amphitrite");
  spouse("aphrodite", "hephaistos");
  spouse("aphrodite", "ares");
  spouse("aphrodite", "anchises");
  spouse("herakles", "hebe");
  spouse("aegeus", "aethra");

  parents("athena", "zeus", "metis");
  parents("apollo", "zeus", "leto");
  parents("artemis", "zeus", "leto");
  parents("ares", "zeus", "hera");
  parents("hebe", "zeus", "hera");
  parents("eileithyia", "zeus", "hera");
  parent("hera", "hephaistos");
  variantParent("zeus", "hephaistos");
  parents("hermes", "zeus", "maia");
  parents("dionysos", "zeus", "semele");
  parents("persephone", "zeus", "demeter");
  parents("muses", "zeus", "mnemosyne");
  parents("herakles", "zeus", "alcmene");
  parents("perseus", "zeus", "danae");

  parent("ouranos", "aphrodite");
  variantParent("zeus", "aphrodite");
  variantParent("dione", "aphrodite");
  variantParent("aphrodite", "eros");
  variantParent("ares", "eros");

  parents("triton", "poseidon", "amphitrite");
  parents("aineias", "aphrodite", "anchises");
  parents("theseus", "aegeus", "aethra");
  variantParent("poseidon", "theseus");

  return links;
}

const LINKS = buildLinks();

export type LayoutNode = TreeSeed & {
  x: number;
  y: number;
  w: number;
  h: number;
  sub: string;
  caption: string;
  href?: string;
  portrait?: string;
  keys: string[];
};

export type LayoutEdge = {
  id: string;
  d: string;
  d2?: string;
  kind: LinkKind;
  from: string;
  to: string;
  local: boolean;
  quiet: boolean;
};

export type LayoutBand = BandMeta & {
  top: number;
  height: number;
  nodeIds: string[];
};

export type FamilyTreeLayout = {
  width: number;
  height: number;
  nodeW: number;
  nodeH: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  bands: LayoutBand[];
  byId: Map<string, LayoutNode>;
};

type Box = { id: string; x: number; y: number; w: number; h: number; cx: number; cy: number };

function norm(value: string) {
  return value.toLowerCase().replace(/[\s·.'’\-()/_]/g, "");
}

function subLine(seed: TreeSeed) {
  return seed.guestTag ? `${seed.guestTag} · ${seed.roman}` : seed.roman;
}

function captionFor(id: string, byId: Map<string, TreeSeed>) {
  const names = LINKS.filter((link) => link.to === id && link.kind === "parent")
    .map((link) => byId.get(link.from)?.ko)
    .filter((name): name is string => Boolean(name));
  return names.join("·");
}

function placeNodes(): { nodes: LayoutNode[]; width: number; height: number } {
  const byBand = new Map<BandId, TreeSeed[]>();
  for (const seed of SEEDS) {
    const list = byBand.get(seed.band) ?? [];
    list.push(seed);
    byBand.set(seed.band, list);
  }
  const widths = BAND_META.map((band) => {
    const group = byBand.get(band.id) ?? [];
    const cols = group.map((seed) => seed.col);
    const min = Math.min(...cols);
    const max = Math.max(...cols);
    return { id: band.id, min, width: (max - min) * COL + NODE_W };
  });
  const contentWidth = Math.max(...widths.map((item) => item.width));
  const width = contentWidth + PAD * 2;
  const seedById = new Map(SEEDS.map((seed) => [seed.id, seed]));

  const nodes: LayoutNode[] = SEEDS.map((seed) => {
    const band = widths.find((item) => item.id === seed.band)!;
    const offset = PAD + (contentWidth - band.width) / 2;
    const keys = [seed.ko, seed.roman, seed.id, seed.slug, seed.greek, ...(seed.aliases ?? [])].filter(
      (key): key is string => Boolean(key),
    );
    return {
      ...seed,
      x: offset + (seed.col - band.min) * COL,
      w: NODE_W,
      h: NODE_H,
      sub: subLine(seed),
      caption: captionFor(seed.id, seedById),
      href: seed.slug ? `/gods/${seed.slug}` : undefined,
      portrait: seed.slug ? `/portraits/${seed.slug}.webp` : undefined,
      keys,
    };
  });
  const height = Math.max(...nodes.map((node) => node.y + node.h)) + 36;
  return { nodes, width, height };
}

function boxes(nodes: LayoutNode[]): Box[] {
  return nodes.map((node) => ({
    id: node.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    cx: node.x + node.w / 2,
    cy: node.y + node.h / 2,
  }));
}

function edgePaths(nodes: LayoutNode[]): LayoutEdge[] {
  const box = new Map(boxes(nodes).map((item) => [item.id, item]));
  return LINKS.map((link) => {
    const from = box.get(link.from)!;
    const to = box.get(link.to)!;
    const path = link.kind === "spouse" ? spousePath(from, to) : directedPath(from, to, link.kind);
    const dx = Math.abs(from.cx - to.cx);
    const dy = Math.abs(from.cy - to.cy);
    const local =
      link.kind === "spouse"
        ? dx < COL * 1.6 && dy < NODE_H * 1.4
        : dx < COL * 1.8 && dy < 220;
    return {
      id: `${link.kind}-${link.from}-${link.to}`,
      d: path.d,
      d2: path.d2,
      kind: link.kind,
      from: link.from,
      to: link.to,
      local,
      quiet: Math.hypot(dx, dy) > 560,
    };
  });
}

function directedPath(from: Box, to: Box, kind: LinkKind): { d: string; d2?: string } {
  const downward = from.cy <= to.cy;
  const x1 = from.cx;
  const y1 = downward ? from.y + from.h : from.y;
  const x2 = to.cx;
  const y2 = downward ? to.y : to.y + to.h;
  const sameRow = Math.abs(from.cy - to.cy) < 24;
  if (sameRow && kind === "variant-parent") {
    const left = Math.min(x1, x2);
    const right = Math.max(x1, x2);
    const y = Math.min(from.y, to.y);
    return { d: `M ${left} ${y} Q ${(left + right) / 2} ${y - 26}, ${right} ${y}` };
  }
  if (Math.abs(x1 - x2) < 6) return { d: `M ${x1} ${y1} V ${y2}` };
  const mid = (y1 + y2) / 2;
  return { d: `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}` };
}

function spousePath(a: Box, b: Box): { d: string; d2?: string } {
  const left = a.cx <= b.cx ? a : b;
  const right = a.cx <= b.cx ? b : a;
  const x1 = left.x + left.w;
  const x2 = right.x;
  const gap = x2 - x1;
  if (Math.abs(a.cy - b.cy) < 24 && gap < COL * 0.75) {
    const y = (left.cy + right.cy) / 2;
    return { d: `M ${x1} ${y - 2.5} H ${x2}`, d2: `M ${x1} ${y + 2.5} H ${x2}` };
  }
  if (Math.abs(a.cy - b.cy) < 24) {
    const y = left.y;
    const mid = (left.cx + right.cx) / 2;
    const lift = Math.min(34, 16 + Math.abs(right.cx - left.cx) * 0.05);
    return { d: `M ${left.cx} ${y} Q ${mid} ${y - lift}, ${right.cx} ${y}` };
  }
  const upper = a.cy <= b.cy ? a : b;
  const lower = a.cy <= b.cy ? b : a;
  const sx = upper.cx;
  const sy = upper.y + upper.h;
  const tx = lower.cx;
  const ty = lower.y;
  const mid = (sy + ty) / 2;
  const bow = sx <= tx ? 36 : -36;
  return { d: `M ${sx} ${sy} C ${sx + bow} ${mid}, ${tx + bow} ${mid}, ${tx} ${ty}` };
}

function validate(nodes: LayoutNode[]) {
  const ids = new Set<string>();
  for (const node of nodes) {
    if (ids.has(node.id)) throw new Error(`가족관계도 id 중복: ${node.id}`);
    ids.add(node.id);
  }
  for (const link of LINKS) {
    if (!ids.has(link.from) || !ids.has(link.to)) {
      throw new Error(`가족관계도 선 오류: ${link.kind} ${link.from} → ${link.to}`);
    }
  }
  const required = [
    "chaos", "gaia", "tartaros", "eros", "ouranos", "pontus", "nyx", "erebos",
    "kronos", "rhea", "okeanos", "tethys", "hyperion", "theia", "coeus", "phoebe",
    "mnemosyne", "themis", "iapetos", "crius", "leto", "prometheus", "atlas",
    "helios", "selene", "eos", "hestia", "demeter", "hera", "hades", "poseidon", "zeus",
    "athena", "apollo", "artemis", "ares", "hebe", "eileithyia", "hephaistos",
    "hermes", "dionysos", "persephone", "muses", "herakles", "perseus", "aphrodite",
    "triton", "theseus", "metis", "maia", "semele",
  ];
  for (const id of required) {
    if (!ids.has(id)) throw new Error(`가족관계도에 없는 인물: ${id}`);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (overlapX > 4 && overlapY > 4) {
        throw new Error(`가족관계도 칸이 겹칩니다: ${a.id} · ${b.id}`);
      }
      if (a.band !== b.band || overlapX < 18) continue;
      const upper = a.y <= b.y ? a : b;
      const lower = a.y <= b.y ? b : a;
      const gap = lower.y - (upper.y + upper.h);
      if (gap < 0 || gap > 72) continue;
      const related = LINKS.some(
        (link) =>
          (link.from === a.id && link.to === b.id) || (link.from === b.id && link.to === a.id),
      );
      if (!related) throw new Error(`위아래가 어긋납니다: ${upper.id} 아래 ${lower.id}`);
    }
  }
}

function buildBands(nodes: LayoutNode[]): LayoutBand[] {
  return BAND_META.map((meta) => {
    const group = nodes.filter((node) => node.band === meta.id).sort((a, b) => a.y - b.y || a.x - b.x);
    const top = Math.min(...group.map((node) => node.y)) - 52;
    const bottom = Math.max(...group.map((node) => node.y + node.h)) + 18;
    return { ...meta, top, height: bottom - top, nodeIds: group.map((node) => node.id) };
  });
}

export function layoutFamilyTree(): FamilyTreeLayout {
  const placed = placeNodes();
  validate(placed.nodes);
  const bands = buildBands(placed.nodes);
  for (let i = 1; i < bands.length; i += 1) {
    const gap = bands[i].top - (bands[i - 1].top + bands[i - 1].height);
    if (gap < 12) throw new Error(`세대 간격이 좁습니다: ${bands[i - 1].id} → ${bands[i].id}`);
  }
  return {
    width: placed.width,
    height: placed.height,
    nodeW: NODE_W,
    nodeH: NODE_H,
    nodes: placed.nodes,
    edges: edgePaths(placed.nodes),
    bands,
    byId: new Map(placed.nodes.map((node) => [node.id, node])),
  };
}

export const TREE = layoutFamilyTree();

export type RelationPerson = { id: string; ko: string; roman: string; href?: string };

function personRef(id: string): RelationPerson {
  const node = TREE.byId.get(id);
  if (!node) throw new Error(id);
  return { id: node.id, ko: node.ko, roman: node.roman, href: node.href };
}

function byX(a: RelationPerson, b: RelationPerson) {
  return (TREE.byId.get(a.id)?.x ?? 0) - (TREE.byId.get(b.id)?.x ?? 0);
}

export function relationsOf(id: string) {
  const parents = LINKS.filter((link) => link.to === id && link.kind === "parent").map((link) => personRef(link.from)).sort(byX);
  const variantParents = LINKS.filter((link) => link.to === id && link.kind === "variant-parent")
    .map((link) => personRef(link.from))
    .sort(byX);
  const children = LINKS.filter((link) => link.from === id && link.kind === "parent").map((link) => personRef(link.to)).sort(byX);
  const variantChildren = LINKS.filter((link) => link.from === id && link.kind === "variant-parent")
    .map((link) => personRef(link.to))
    .sort(byX);
  const spouses = LINKS.filter((link) => link.kind === "spouse" && (link.from === id || link.to === id))
    .map((link) => personRef(link.from === id ? link.to : link.from))
    .sort(byX);
  const parentIds = new Set(parents.map((person) => person.id));
  const siblingIds = new Set<string>();
  for (const link of LINKS) {
    if (link.kind !== "parent" || !parentIds.has(link.from) || link.to === id) continue;
    siblingIds.add(link.to);
  }
  const siblings = [...siblingIds].map((siblingId) => personRef(siblingId)).sort(byX);
  return { parents, variantParents, children, variantChildren, spouses, siblings };
}

export function searchNodes(query: string) {
  const q = norm(query);
  if (!q) return [];
  return TREE.nodes
    .map((node) => {
      const keys = node.keys.map(norm);
      const exact = keys.some((key) => key === q);
      const prefix = keys.some((key) => key.startsWith(q));
      const hit = exact || prefix || keys.some((key) => key.includes(q));
      return { node, exact, prefix, hit };
    })
    .filter((item) => item.hit)
    .sort((a, b) => Number(b.exact) - Number(a.exact) || Number(b.prefix) - Number(a.prefix) || a.node.ko.localeCompare(b.node.ko, "ko"))
    .map((item) => item.node);
}

export function exactNodeId(query: string) {
  const q = norm(query);
  if (!q) return null;
  return TREE.nodes.find((node) => node.keys.some((key) => norm(key) === q))?.id ?? null;
}

export function familyTreeHref(slug: string) {
  const node = TREE.nodes.find((item) => item.slug === slug);
  return node ? `/family-tree?focus=${node.id}` : "/family-tree";
}
