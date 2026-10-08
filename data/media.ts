import type { ElsewhereLink } from "./types";

export type Film = {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: string;
  kind: "영화" | "애니메이션" | "드라마";
  maker: string;
  myth: string;
  people: string[];
  stories: string[];
  note: string;
  /** actor in the movie checklist site */
  checklist?: string;
  /** Same film on a sister site. */
  elsewhere?: ElsewhereLink[];
};

export const films: Film[] = [
  {
    slug: "percy-jackson-2010",
    titleKo: "퍼시 잭슨과 번개 도둑",
    titleEn: "Percy Jackson & the Olympians: The Lightning Thief",
    year: "2010",
    kind: "영화",
    maker: "감독 크리스 콜럼버스 · 원작 릭 라이어던 소설",
    myth: "현대 미국에 사는 포세이돈의 아들이 사라진 제우스의 번개를 찾아 나섭니다.",
    people: ["poseidon", "zeus", "hades", "medousa", "persephone", "perseus"],
    stories: ["perseus", "titanomachy"],
    note: "주인공 이름 '퍼시'는 페르세우스에서 따왔습니다. 메두사, 하데스의 저승, 케르베로스 등 신화 요소를 현대식으로 비틀었습니다. 속편 『퍼시 잭슨과 괴물의 바다』(2013)는 『오디세이아』와 황금 양털 모티프를 씁니다. 2023년부터 디즈니+ 드라마로 다시 만들어졌습니다.",
  },
  {
    slug: "troy-2004",
    titleKo: "트로이",
    titleEn: "Troy",
    year: "2004",
    kind: "영화",
    maker: "감독 볼프강 페테르젠",
    myth: "『일리아스』를 바탕으로 트로이 전쟁을 신들의 개입 없이 인간의 전쟁으로 그렸습니다.",
    people: ["achilleus", "hektor", "paris", "helene", "agamemnon", "odysseus", "aineias", "thetis"],
    stories: ["trojan-war", "trojan-horse"],
    note: "원전과 다른 점: 10년 전쟁이 몇 주로 압축되고, 메넬라오스와 아가멤논이 트로이에서 죽는 등 결말이 다릅니다. 『일리아스』에는 없는 목마 장면도 넣었습니다.",
    elsewhere: [
      { href: "https://greece-stories.vercel.app/movies#troy", label: "그리스이야기 영화 『트로이』" },
      { href: "https://iliad-stories.vercel.app", label: "일리아스이야기에서 원전 읽기" },
    ],
  },
  {
    slug: "clash-of-the-titans-2010",
    titleKo: "타이탄",
    titleEn: "Clash of the Titans",
    year: "2010",
    kind: "영화",
    maker: "감독 루이 르테리에 · 1981년 영화의 리메이크",
    myth: "페르세우스가 메두사의 머리를 얻어 안드로메다를 구하는 이야기를 크게 각색했습니다.",
    people: ["perseus", "zeus", "hades", "medousa", "andromeda", "pegasos"],
    stories: ["perseus"],
    note: "제우스 역은 리암 니슨입니다. 바다 괴물 '크라켄'은 그리스 신화가 아니라 북유럽 전설의 괴물로, 1981년판부터 들어간 영화적 창작입니다(원전에서는 케토스).",
    checklist: "리암 니슨",
  },
  {
    slug: "wrath-of-the-titans-2012",
    titleKo: "타이탄의 분노",
    titleEn: "Wrath of the Titans",
    year: "2012",
    kind: "영화",
    maker: "감독 조너선 리브스만",
    myth: "크로노스가 타르타로스에서 풀려나려 하자 페르세우스가 신들을 돕습니다.",
    people: ["perseus", "zeus", "hades", "kronos", "ares", "hephaistos", "minotauros", "chimaira"],
    stories: ["titanomachy", "theseus-minotaur"],
    note: "티탄 전쟁, 미궁, 키메라 등 여러 신화를 한데 섞은 창작 줄거리입니다. 제우스 역은 리암 니슨입니다.",
    checklist: "리암 니슨",
  },
  {
    slug: "hercules-1997",
    titleKo: "헤라클레스",
    titleEn: "Hercules",
    year: "1997",
    kind: "애니메이션",
    maker: "디즈니 · 감독 론 클레먼츠, 존 머스커",
    myth: "아기 때 하데스의 음모로 인간이 된 헤라클레스가 진정한 영웅이 되어 올림포스로 돌아가려 합니다.",
    people: ["herakles", "zeus", "hera", "hades", "muses", "pegasos", "hydra"],
    stories: ["herakles-labors"],
    note: "원전과 크게 다릅니다. 원전에서 헤라클레스는 제우스와 인간 알크메네의 아들이고 그를 괴롭힌 것은 헤라입니다. 영화에서 헤라는 다정한 어머니, 악당은 하데스입니다. 무사이를 가스펠 합창단으로 그린 연출이 유명합니다.",
  },
  {
    slug: "hercules-2014",
    titleKo: "허큘리스",
    titleEn: "Hercules",
    year: "2014",
    kind: "영화",
    maker: "감독 브렛 래트너 · 그래픽노블 원작",
    myth: "12과업을 마친 뒤 용병이 된 헤라클레스가 '신의 아들'이라는 전설과 현실 사이에서 싸웁니다.",
    people: ["herakles", "hydra", "kerberos"],
    stories: ["herakles-labors"],
    note: "12과업을 '부풀려진 소문'으로 다루는 현실주의 각색입니다. 주연은 드웨인 존슨입니다.",
    checklist: "드웨인 존슨",
  },
  {
    slug: "immortals-2011",
    titleKo: "신들의 전쟁",
    titleEn: "Immortals",
    year: "2011",
    kind: "영화",
    maker: "감독 타셈 싱",
    myth: "테세우스가 티탄을 풀어놓으려는 왕에게 맞섭니다.",
    people: ["theseus", "zeus", "athena", "poseidon", "minotauros"],
    stories: ["theseus-minotaur", "titanomachy"],
    note: "테세우스·미노타우로스·티탄 전쟁을 섞은 창작 줄거리입니다. 원전과는 거리가 멉니다.",
  },
  {
    slug: "the-odyssey-2026",
    titleKo: "오디세이",
    titleEn: "The Odyssey",
    year: "2026",
    kind: "영화",
    maker: "감독 크리스토퍼 놀런",
    myth: "호메로스 『오디세이아』를 영화로 옮겼습니다. 트로이 전쟁 뒤 오디세우스의 귀향을 따라갑니다.",
    people: ["odysseus", "penelope", "telemachos", "athena", "kirke", "kalypso", "polyphemos"],
    stories: ["odyssey"],
    note: "맷 데이먼이 오디세우스를 맡았고 톰 홀랜드, 앤 해서웨이, 젠데이아 등이 출연했으며 2026년 7월 개봉했습니다. 배역과 각색 범위는 공식 정보를 기준으로 확인하세요.",
    elsewhere: [
      { href: "https://greece-stories.vercel.app/movies#odyssey-2026", label: "그리스이야기 영화 『오디세이』" },
    ],
  },
  {
    slug: "jason-and-the-argonauts-1963",
    titleKo: "아르고 황금 대탐험 (Jason and the Argonauts)",
    titleEn: "Jason and the Argonauts",
    year: "1963",
    kind: "영화",
    maker: "감독 돈 채피 · 특수효과 레이 해리하우젠",
    myth: "이아손과 아르고호 원정대가 황금 양털을 찾아 떠납니다.",
    people: ["iason", "medeia", "hera", "zeus", "herakles", "hydra"],
    stories: ["argonauts"],
    note: "해리하우젠의 스톱모션으로 만든 해골 병사 전투 장면은 영화사에 남은 명장면입니다. 청동 거인 탈로스도 등장합니다. 국내 제목은 자료마다 달라 영문 제목을 함께 적었습니다.",
  },
  {
    slug: "o-brother-2000",
    titleKo: "오 형제여 어디 있는가",
    titleEn: "O Brother, Where Art Thou?",
    year: "2000",
    kind: "영화",
    maker: "감독 코엔 형제",
    myth: "1930년대 미국 남부를 무대로 『오디세이아』를 느슨하게 옮긴 코미디입니다.",
    people: ["odysseus", "penelope", "polyphemos", "seirenes"],
    stories: ["odyssey"],
    note: "주인공 이름이 율리시스(오디세우스의 라틴식 이름)이고, 외눈 거인과 세이렌을 떠올리게 하는 인물들이 나옵니다.",
    elsewhere: [
      { href: "https://greece-stories.vercel.app/movies#o-brother", label: "그리스이야기 영화 『오 형제여 어디 있는가』" },
    ],
  },
  {
    slug: "wonder-woman-2017",
    titleKo: "원더 우먼",
    titleEn: "Wonder Woman",
    year: "2017",
    kind: "영화",
    maker: "감독 패티 젠킨스 · DC 코믹스 원작",
    myth: "아마존 전사의 섬에서 자란 공주가 전쟁의 신 아레스를 쫓습니다.",
    people: ["ares", "zeus"],
    stories: [],
    note: "아마존족과 아레스는 그리스 신화에서 왔지만, 주인공 다이애나와 줄거리는 만화 원작의 창작입니다. 이름 '다이애나'는 로마 여신 디아나(아르테미스)에서 왔습니다.",
  },
  {
    slug: "kaos-2024",
    titleKo: "카오스",
    titleEn: "KAOS",
    year: "2024",
    kind: "드라마",
    maker: "넷플릭스 · 각본 찰리 코벨",
    myth: "현대적으로 비튼 올림포스에서 몰락을 두려워하는 제우스와 오르페우스·에우리디케 등 인간들의 이야기를 엮었습니다.",
    people: ["zeus", "hera", "orpheus", "eurydike", "hades", "persephone", "prometheus"],
    stories: ["orpheus-eurydice", "prometheus"],
    note: "제우스 역은 제프 골드블럼입니다. 신화 인물을 과감하게 재해석한 블랙코미디입니다.",
  },
  {
    slug: "blood-of-zeus-2020",
    titleKo: "블러드 오브 제우스",
    titleEn: "Blood of Zeus",
    year: "2020",
    kind: "애니메이션",
    maker: "넷플릭스 · 파울리 형제",
    myth: "제우스의 숨겨진 인간 아들이 거인족과 맞서는 창작 이야기입니다.",
    people: ["zeus", "hera", "hermes", "kronos"],
    stories: ["titanomachy"],
    note: "기간토마키아(신과 거인의 전쟁) 모티프를 바탕으로 한 오리지널 줄거리입니다.",
  },
];

export type Painting = {
  slug: string;
  titleKo: string;
  titleOrig: string;
  artist: string;
  year: string;
  place?: string;
  people: string[];
  stories: string[];
  desc: string;
  w: number;
  h: number;
  commons: string;
  license: string;
  attributionNote?: string;
};

export const paintings: Painting[] = [
  { slug: "botticelli-venus", titleKo: "비너스의 탄생", titleOrig: "La nascita di Venere", artist: "산드로 보티첼리", year: "1484–1486년 무렵", place: "피렌체 우피치 미술관", people: ["aphrodite"], stories: ["ouranos-kronos"], desc: "바다 거품에서 태어난 아프로디테(베누스)가 조개를 타고 키프로스 해안에 닿는 장면. 왼쪽은 서풍 제피로스, 오른쪽은 옷을 건네는 계절의 여신(호라)으로 봅니다. 헤시오도스가 전한 '거품 속 탄생'을 르네상스식으로 그렸습니다.", w: 960, h: 603, commons: "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg", license: "Public domain" },
  { slug: "goya-saturn", titleKo: "아들을 잡아먹는 사투르누스", titleOrig: "Saturno devorando a su hijo", artist: "프란시스코 고야", year: "1819–1823년 무렵", place: "마드리드 프라도 미술관", people: ["kronos"], stories: ["ouranos-kronos"], desc: "자식을 삼킨 크로노스(로마 이름 사투르누스)를 광기 어린 모습으로 그린 '검은 그림' 연작 가운데 하나. 고야가 자기 집 벽에 그렸던 것을 뒤에 캔버스로 옮겼습니다. 원전에서는 통째로 삼키지만 고야는 뜯어 먹는 모습으로 바꿨습니다.", w: 960, h: 1763, commons: "https://commons.wikimedia.org/wiki/File:Francisco_de_Goya,_Saturno_devorando_a_su_hijo_(1819-1823).jpg", license: "Public domain" },
  { slug: "caravaggio-medusa", titleKo: "메두사", titleOrig: "Medusa", artist: "카라바조", year: "1597–1598년 무렵", place: "피렌체 우피치 미술관", people: ["medousa", "perseus", "athena"], stories: ["perseus"], desc: "둥근 의식용 방패에 그린 메두사의 잘린 머리. 비명을 지르는 순간을 붙잡았습니다. 메두사의 머리를 방패에 단 아테나의 아이기스를 떠올리게 합니다.", w: 960, h: 961, commons: "https://commons.wikimedia.org/wiki/File:Caravaggio_-_Medusa_Uffizi_-_High_quality.jpg", license: "CC0 (원작은 퍼블릭 도메인)" },
  { slug: "titian-bacchus-ariadne", titleKo: "바쿠스와 아리아드네", titleOrig: "Bacco e Arianna", artist: "티치아노", year: "1520–1523년", place: "런던 내셔널 갤러리", people: ["dionysos", "ariadne", "theseus"], stories: ["theseus-minotaur"], desc: "낙소스섬에 홀로 남겨진 아리아드네 앞에 바쿠스(디오니소스)가 표범 수레에서 뛰어내리는 순간. 왼쪽 위 하늘에는 그녀의 왕관이 별자리(북쪽왕관자리)가 된 모습이 그려져 있습니다. 오비디우스와 카툴루스의 묘사를 바탕으로 했습니다.", w: 960, h: 869, commons: "https://commons.wikimedia.org/wiki/File:Titian_-_Bacchus_and_Ariadne_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "waterhouse-echo-narcissus", titleKo: "에코와 나르키소스", titleOrig: "Echo and Narcissus", artist: "존 윌리엄 워터하우스", year: "1903년", place: "리버풀 워커 아트 갤러리", people: ["echo", "narkissos"], stories: ["echo-narcissus"], desc: "물에 비친 자기 얼굴에 빠진 나르키소스와, 그를 바라보기만 하는 에코. 앞쪽에 수선화가 피어 있습니다.", w: 960, h: 548, commons: "https://commons.wikimedia.org/wiki/File:John_William_Waterhouse_-_Echo_and_Narcissus_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "draper-ulysses-sirens", titleKo: "율리시스와 세이렌", titleOrig: "Ulysses and the Sirens", artist: "허버트 제임스 드레이퍼", year: "1909년", place: "영국 헐 페렌스 미술관", people: ["odysseus", "seirenes"], stories: ["odyssey"], desc: "돛대에 묶인 오디세우스(율리시스)와 배 위로 기어오르는 세이렌들. 드레이퍼는 세이렌을 인어 모습으로 그렸는데, 이는 고대의 '새 모습' 세이렌과 다른 근대적 이미지입니다.", w: 960, h: 806, commons: "https://commons.wikimedia.org/wiki/File:Herbert_James_Draper,_Ulysses_and_the_Sirens,_1909.jpg", license: "Public domain" },
  { slug: "bruegel-icarus", titleKo: "이카로스의 추락이 있는 풍경", titleOrig: "Landschap met de val van Icarus", artist: "피터르 브뤼헐(1세) 원작을 따른 그림", year: "1560년대 무렵(추정)", place: "브뤼셀 벨기에 왕립미술관", people: ["ikaros", "daidalos"], stories: ["icarus"], desc: "밭 가는 농부와 양치기, 배가 평화롭게 그려진 풍경 오른쪽 아래 구석에 바다에 빠진 이카로스의 다리만 보입니다. 세상이 한 소년의 비극에 무심하다는 해석으로 유명하며, W. H. 오든의 시 「미술관」의 소재가 되었습니다.", w: 960, h: 626, commons: "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels,_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg", license: "Public domain", attributionNote: "브뤼헐이 직접 그렸는지는 논쟁 중이며, 잃어버린 원작을 베낀 그림으로 보는 견해가 많습니다." },
  { slug: "rubens-prometheus", titleKo: "결박된 프로메테우스", titleOrig: "Prometheus Bound", artist: "페테르 파울 루벤스 · 프란스 스니더르스(독수리)", year: "1611–1618년 무렵", place: "필라델피아 미술관", people: ["prometheus", "zeus"], stories: ["prometheus"], desc: "바위에 묶인 프로메테우스의 간을 독수리가 쪼는 장면. 몸은 루벤스가, 독수리는 동물 화가 스니더르스가 그렸습니다. 왼쪽 아래에 그가 훔친 불이 보입니다.", w: 960, h: 1106, commons: "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens,_Flemish_(active_Italy,_Antwerp,_and_England)_-_Prometheus_Bound_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "waterhouse-pandora", titleKo: "판도라", titleOrig: "Pandora", artist: "존 윌리엄 워터하우스", year: "1896년", place: "개인 소장", people: ["pandora"], stories: ["pandora"], desc: "숲속에서 화려한 상자를 살짝 여는 판도라. 원전의 큰 항아리 대신 근대에 굳은 '상자' 이미지를 따랐습니다.", w: 960, h: 1639, commons: "https://commons.wikimedia.org/wiki/File:John_William_Waterhouse_-_Pandora,_1896.jpg", license: "Public domain" },
  { slug: "velazquez-arachne", titleKo: "실 잣는 여인들 (아라크네의 우화)", titleOrig: "Las hilanderas (La fábula de Aracne)", artist: "디에고 벨라스케스", year: "1655–1660년 무렵", place: "마드리드 프라도 미술관", people: ["arachne", "athena"], stories: ["arachne"], desc: "앞쪽에는 평범한 직물 공방의 여인들이, 뒤쪽 밝은 방에는 투구를 쓴 아테나(미네르바)와 아라크네가 태피스트리 앞에 서 있습니다. 일상과 신화를 한 화면에 겹쳐 놓은 그림입니다.", w: 960, h: 733, commons: "https://commons.wikimedia.org/wiki/File:Vel%C3%A1zquez,_Diego_-_The_Fable_of_Arachne_(Las_Hilanderas)_-_c._1657.jpg", license: "Public domain" },
  { slug: "rubens-judgement-paris", titleKo: "파리스의 심판", titleOrig: "The Judgement of Paris", artist: "페테르 파울 루벤스", year: "1632–1635년 무렵", place: "런던 내셔널 갤러리", people: ["paris", "aphrodite", "hera", "athena", "hermes"], stories: ["judgment-of-paris"], desc: "목동 파리스가 황금 사과를 들고 세 여신을 바라보는 장면. 공작은 헤라를, 올빼미와 방패는 아테나를, 에로스는 아프로디테를 알려 줍니다. 옆에서 헤르메스가 지켜봅니다.", w: 960, h: 711, commons: "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_The_Judgement_of_Paris_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "leighton-persephone", titleKo: "페르세포네의 귀환", titleOrig: "The Return of Persephone", artist: "프레더릭 레이턴", year: "1891년", place: "리즈 미술관", people: ["persephone", "demeter", "hermes"], stories: ["persephone"], desc: "헤르메스가 저승에서 페르세포네를 데리고 올라오고, 햇빛 속의 데메테르가 두 팔을 벌려 딸을 맞이합니다.", w: 960, h: 1273, commons: "https://commons.wikimedia.org/wiki/File:Frederic_Leighton_-_The_Return_of_Persephone_(1891).jpg", license: "Public domain" },
  { slug: "draper-lament-icarus", titleKo: "이카로스를 위한 애도", titleOrig: "The Lament for Icarus", artist: "허버트 제임스 드레이퍼", year: "1898년", place: "런던 테이트 브리튼", people: ["ikaros"], stories: ["icarus"], desc: "바닷가 바위에 쓰러진 이카로스를 님프들이 둘러싸고 슬퍼합니다. 원전에서는 바다에 빠졌지만, 그림은 커다란 날개를 단 아름다운 시신으로 낭만적으로 표현했습니다.", w: 960, h: 1136, commons: "https://commons.wikimedia.org/wiki/File:Herbert_Draper_-_The_Lament_for_Icarus_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "waterhouse-circe", titleKo: "율리시스에게 잔을 건네는 키르케", titleOrig: "Circe Offering the Cup to Ulysses", artist: "존 윌리엄 워터하우스", year: "1891년", place: "올덤 갤러리", people: ["kirke", "odysseus"], stories: ["odyssey"], desc: "키르케가 마법의 잔을 내밀고, 뒤쪽 거울에는 다가오는 오디세우스가 비칩니다. 발밑에는 돼지로 변한 부하가 엎드려 있습니다.", w: 800, h: 1344, commons: "https://commons.wikimedia.org/wiki/File:Circe_Offering_the_Cup_to_Odysseus.jpg", license: "Public domain" },
  { slug: "burne-jones-rock-of-doom", titleKo: "운명의 바위 (페르세우스 연작)", titleOrig: "The Rock of Doom", artist: "에드워드 번존스", year: "1885–1888년", people: ["perseus", "andromeda"], stories: ["perseus"], desc: "날개 달린 샌들을 신은 페르세우스가 바위에 묶인 안드로메다를 처음 만나는 장면. 번존스가 페르세우스 이야기를 여러 장면으로 나누어 그린 연작 가운데 하나입니다.", w: 547, h: 700, commons: "https://commons.wikimedia.org/wiki/File:The_Rock_of_Doom_1885-1888_Edward_Burne-Jones.jpg", license: "Public domain" },
  { slug: "titian-diana-actaeon", titleKo: "디아나와 악타이온", titleOrig: "Diana e Atteone", artist: "티치아노", year: "1556–1559년", place: "에든버러 스코틀랜드 국립미술관·런던 내셔널 갤러리 공동 소장", people: ["artemis"], stories: [], desc: "사냥꾼 악타이온이 목욕하던 디아나(아르테미스)와 님프들을 우연히 보게 된 순간. 이 뒤 그는 사슴으로 변해 자기 사냥개들에게 물려 죽습니다(오비디우스 『변신 이야기』 3권).", w: 960, h: 880, commons: "https://commons.wikimedia.org/wiki/File:Titian_-_Diana_and_Actaeon_-_Google_Art_Project.jpg", license: "Public domain" },
  { slug: "waterhouse-hylas", titleKo: "힐라스와 님프들", titleOrig: "Hylas and the Nymphs", artist: "존 윌리엄 워터하우스", year: "1896년", place: "맨체스터 미술관", people: ["herakles"], stories: ["argonauts"], desc: "아르고호 원정 중 물을 길러 간 헤라클레스의 젊은 동료 힐라스를 샘의 님프들이 물속으로 끌어들이는 장면. 이 일로 헤라클레스는 원정대를 떠나게 됩니다(아폴로니오스 『아르고나우티카』 1권).", w: 960, h: 595, commons: "https://commons.wikimedia.org/wiki/File:Waterhouse_Hylas_and_the_Nymphs_Manchester_Art_Gallery_1896.15.jpg", license: "Public domain" },
];

export type Constellation = { ko: string; latin: string; people: string[]; story: string; source: string };

export const constellations: Constellation[] = [
  { ko: "페르세우스자리", latin: "Perseus", people: ["perseus"], story: "메두사의 머리를 든 영웅. 머리 부분의 변광성 알골은 '악마의 별'이라는 아랍어 이름으로, 메두사의 눈으로 여겨졌습니다.", source: "아라토스 『천문 현상』; 위(僞) 에라토스테네스 『별자리 변신』" },
  { ko: "안드로메다자리", latin: "Andromeda", people: ["andromeda"], story: "쇠사슬에 묶인 공주. 이 별자리 안에 맨눈으로 보이는 가장 먼 천체인 안드로메다은하가 있습니다.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "카시오페이아자리", latin: "Cassiopeia", people: ["andromeda"], story: "딸의 미모를 자랑하다 벌을 받은 왕비. 의자에 앉은 채 하늘을 돌아 때로 거꾸로 매달린 모습이 된다고 했습니다. W자 모양으로 유명합니다.", source: "히기누스 『천문학』" },
  { ko: "케페우스자리", latin: "Cepheus", people: ["andromeda"], story: "안드로메다의 아버지인 에티오피아 왕.", source: "아라토스 『천문 현상』" },
  { ko: "고래자리", latin: "Cetus", people: ["perseus", "andromeda"], story: "안드로메다를 노린 바다 괴물 케토스. 이름은 '고래'지만 원래는 바다 괴물입니다.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "페가수스자리", latin: "Pegasus", people: ["pegasos", "bellerophon"], story: "메두사의 피에서 태어난 천마. 네 별이 이루는 '페가수스 사각형'이 가을 밤하늘의 길잡이입니다.", source: "아라토스 『천문 현상』" },
  { ko: "헤르쿨레스자리", latin: "Hercules", people: ["herakles"], story: "무릎을 꿇은 영웅. 고대에는 '무릎 꿇은 자(엔고나신)'라고만 불렸고, 헤라클레스와의 연결은 후대 해석입니다.", source: "아라토스 『천문 현상』; 히기누스 『천문학』" },
  { ko: "사자자리", latin: "Leo", people: ["herakles"], story: "헤라클레스가 첫 과업에서 물리친 네메아의 사자.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "게자리", latin: "Cancer", people: ["herakles", "hydra", "hera"], story: "히드라와 싸우는 헤라클레스의 발을 물었다가 밟혀 죽은 게. 헤라가 그 공을 기려 하늘에 올렸다고 합니다.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "바다뱀자리", latin: "Hydra", people: ["hydra"], story: "가장 큰 별자리. 레르나의 히드라로 해석되기도 하고, 아폴론의 까마귀 이야기 속 물뱀으로도 전합니다.", source: "히기누스 『천문학』" },
  { ko: "큰곰자리", latin: "Ursa Major", people: ["zeus", "artemis", "hera"], story: "제우스의 사랑을 받은 님프 칼리스토가 곰으로 변한 모습이라는 이야기가 유명합니다. 누가 그녀를 곰으로 바꿨는지(헤라, 아르테미스, 제우스)는 판본마다 다릅니다.", source: "오비디우스 『변신 이야기』 2권 401–530행; 위 에라토스테네스" },
  { ko: "거문고자리", latin: "Lyra", people: ["orpheus", "hermes", "apollo"], story: "헤르메스가 만들어 아폴론에게 준 리라가 오르페우스에게 전해졌고, 그가 죽은 뒤 무사이의 청으로 하늘에 올랐다고 합니다. 밝은 별 베가(직녀성)가 있습니다.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "쌍둥이자리", latin: "Gemini", people: ["helene", "zeus"], story: "헬레네의 형제인 카스토르와 폴리데우케스(폴룩스). 하나는 죽고 하나는 불사의 몸이었는데, 형제가 죽음을 나눠 갖기를 원해 함께 하늘에 올랐다고 합니다.", source: "핀다로스 『네메아 송가』 10번; 히기누스" },
  { ko: "오리온자리", latin: "Orion", people: ["artemis", "apollo"], story: "거인 사냥꾼 오리온. 아르테미스와 얽힌 죽음의 이야기는 판본이 아주 많습니다.", source: "호메로스 『오디세이아』 5권 121–124행; 위 에라토스테네스" },
  { ko: "전갈자리", latin: "Scorpius", people: ["artemis"], story: "오리온을 죽인 전갈. 그래서 오리온은 전갈이 뜨면 서쪽으로 진다고 이야기됩니다.", source: "위 에라토스테네스 『별자리 변신』" },
  { ko: "북쪽왕관자리", latin: "Corona Borealis", people: ["ariadne", "dionysos"], story: "디오니소스가 아리아드네에게 준 결혼 왕관.", source: "오비디우스 『변신 이야기』 8권 176–182행" },
  { ko: "궁수자리 · 센타우루스자리", latin: "Sagittarius · Centaurus", people: ["cheiron"], story: "둘 다 지혜로운 켄타우로스 케이론으로 해석하는 전승이 있지만, 고대 작가마다 어느 별자리가 케이론인지 다르게 말합니다.", source: "위 에라토스테네스; 히기누스 『천문학』" },
];
