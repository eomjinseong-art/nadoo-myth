/** One classical portrait spec per person slug. */

function s(slug, alt, rest) {
  return { slug, alt, ...rest };
}

const P = (id, slot, scale = 1, behind = false) => [id, slot, scale, behind];

export const SPECS = [
  s("chaos", "카오스의 초상. 어둠 속 빈 틈에서 모습을 드러낸 태초의 존재.", {
    scene: "void", sky: ["#2a2140", "#1a1428"], wash: "#1a1428", skin: "pale", hair: "long", hairColor: "black",
    age: "elder", garment: "himation", garmentColor: "#241c30", crown: "veil", brow: "stern",
    props: [P("stars", "skyR", 1.1, true)],
  }),
  s("gaia", "가이아의 초상. 밀 이삭과 열매를 두른 대지의 어머니.", {
    scene: "earth", sky: ["#e7efd8", "#e7dcc8"], wash: "#5c6b3a", skin: "olive", hair: "long", hairColor: "brown",
    garmentColor: "#3e5230", crown: "wheat", jewels: true, props: [P("wheat", "staffR", 1), P("flowers", "lowL", 1)],
  }),
  s("ouranos", "우라노스의 초상. 별이 박힌 망토와 하늘의 천구.", {
    scene: "night", sky: ["#1f3b57", "#d5e3f2"], wash: "#1f3b57", skin: "pale", hair: "curls", hairColor: "white",
    beard: "full", age: "elder", garmentColor: "#1f3b57", crown: "diadem", brow: "stern",
    props: [P("globe", "midR", 1.25), P("stars", "skyL", 1, true)],
  }),
  s("nyx", "닉스의 초상. 검은 날개와 별이 흩어진 밤의 여신.", {
    scene: "night", sky: ["#1a1428", "#2a2140"], wash: "#1a1428", skin: "pale", hair: "long", hairColor: "black",
    garmentColor: "#1a1428", crown: "stars", wings: "dark", jewels: true,
    props: [P("moon", "skyR", 1.1, true)],
  }),
  s("tartaros", "타르타로스의 초상. 청동 문과 사슬이 있는 깊은 심연.", {
    scene: "underworld", sky: ["#2a2140", "#1a1428"], wash: "#2a2140", skin: "bronze", hair: "curls", hairColor: "dark",
    beard: "full", age: "elder", garmentColor: "#2a2140", crown: "helmet", helmet: "#6e5844", crest: "#2a2140", brow: "stern",
    props: [P("chain", "lowL", 1.1)],
  }),
  s("eros", "에로스의 초상. 날개와 활, 횃불을 든 젊은 신.", {
    scene: "roses", sky: ["#f8e6ea", "#f6f1e6"], wash: "#e7b7c8", skin: "fair", hair: "curls", hairColor: "honey",
    age: "youth", garmentColor: "#f4e0dc", wings: "soft", mouth: "smile",
    props: [P("bow", "staffL", 0.95), P("torch", "midR", 0.9)],
  }),
  s("kronos", "크로노스의 초상. 큰 낫과 곡식 이삭을 든 티탄의 왕.", {
    scene: "wheat", sky: ["#f3e6c8", "#e7dcc8"], wash: "#c9a54e", skin: "olive", hair: "curls", hairColor: "dark",
    beard: "full", age: "elder", garmentColor: "#3a342e", crown: "diadem", brow: "stern",
    props: [P("sickle", "midL", 1.15), P("wheat", "staffR", 0.9)],
  }),
  s("rhea", "레아의 초상. 성벽 모양 관과 사자, 강보에 싼 돌.", {
    scene: "olympus", sky: ["#f6f1e6", "#e7dcc8"], wash: "#c9a54e", skin: "olive", hair: "bun", hairColor: "brown",
    garmentColor: "#6e8a3a", crown: "mural", jewels: true,
    props: [P("lion", "lowL", 0.95), P("swaddle", "lowR", 1)],
  }),
  s("okeanos", "오케아노스의 초상. 황소 뿔과 물고기, 세상을 두른 강.", {
    scene: "sea", sky: ["#d5ebe8", "#c5ddd8"], wash: "#1f6f78", skin: "bronze", hair: "curls", hairColor: "sea",
    beard: "long", age: "elder", garmentColor: "#1f6f78", crown: "horns",
    props: [P("fish", "lowR", 1.1), P("oar", "staffL", 0.9)],
  }),
  s("themis", "테미스의 초상. 저울을 든 질서의 여신.", {
    scene: "olympus", skin: "fair", hair: "bun", hairColor: "dark", garmentColor: "#f3efe4", crown: "diadem", jewels: true,
    props: [P("scales", "midR", 1.1), P("scroll", "lowL", 0.9)],
  }),
  s("mnemosyne", "므네모시네의 초상. 기억의 두루마리를 든 티탄.", {
    scene: "grove", skin: "olive", hair: "long", hairColor: "dark", garmentColor: "#e7e2d8", jewels: true, crown: "laurel",
    props: [P("scroll", "midR", 1.15)],
  }),
  s("iapetos", "이아페토스의 초상. 흰 수염의 티탄 조상.", {
    scene: "sky", sky: ["#e4eaf2", "#f6f1e6"], wash: "#1f3b57", skin: "olive", hair: "curls", hairColor: "white",
    beard: "full", age: "elder", garmentColor: "#4a3d55", crown: "diadem", brow: "stern",
    props: [P("spear", "staffR", 1)],
  }),
  s("prometheus", "프로메테우스의 초상. 회향 줄기 속 불씨와 쇠사슬.", {
    scene: "sky", sky: ["#f8e6d8", "#f6f1e6"], wash: "#c46a45", skin: "bronze", hair: "curls", hairColor: "brown",
    beard: "short", garmentColor: "#8c2f2b", brow: "stern",
    props: [P("fennel", "staffR", 1.05), P("eagle", "skyL", 0.9, true), P("chain", "lowL", 0.85)],
  }),
  s("epimetheus", "에피메테우스의 초상. 봉인된 항아리를 든 티탄.", {
    scene: "earth", skin: "olive", hair: "short", hairColor: "brown", garmentColor: "#c4a06a",
    props: [P("jar", "midR", 1.15)],
  }),
  s("atlas", "아틀라스의 초상. 어깨 위에 올린 별의 천구.", {
    scene: "night", sky: ["#1f3b57", "#d5e3f2"], wash: "#1f3b57", skin: "bronze", hair: "curls", hairColor: "dark",
    beard: "full", age: "elder", garmentColor: "#1f3b57", brow: "stern",
    props: [P("globe", "skyR", 1.45)],
  }),
  s("helios", "헬리오스의 초상. 빛살 관과 태양 마차의 고삐.", {
    scene: "sun", sky: ["#f8e8c0", "#f6f1e6"], wash: "#e6c56a", skin: "bronze", hair: "curls", hairColor: "honey",
    garmentColor: "#e6c56a", crown: "radiate",
    props: [P("reins", "lowL", 1), P("horse", "lowR", 0.95, true)],
  }),
  s("leto", "레토의 초상. 베일을 쓰고 종려 가지를 든 어머니.", {
    scene: "grove", skin: "fair", crown: "veil", garmentColor: "#f7f4ee", jewels: true,
    props: [P("palm", "midR", 1.1)],
  }),
  s("metis", "메티스의 초상. 지혜의 올빼미와 두루마리.", {
    scene: "sea", sky: ["#d5ebe8", "#f6f1e6"], wash: "#1f6f78", skin: "olive", hair: "long", hairColor: "sea",
    garmentColor: "#7eb8c4", jewels: true, props: [P("owl", "midL", 0.85), P("scroll", "lowR", 0.9)],
  }),
  s("zeus", "제우스의 초상. 흰 수염, 번개와 독수리.", {
    scene: "sky", sky: ["#d5e3f2", "#f6f1e6"], wash: "#1f3b57", skin: "olive", hair: "curls", hairColor: "white",
    beard: "full", age: "elder", garment: "himation", garmentColor: "#1f3b57", crown: "diadem", brow: "stern",
    props: [P("eagle", "skyL", 1, true), P("lightning", "skyR", 1.15)],
  }),
  s("hera", "헤라의 초상. 왕관, 공작과 석류.", {
    scene: "sky", sky: ["#e7eef2", "#f6f1e6"], wash: "#1f6f78", skin: "fair", hair: "bun", hairColor: "dark",
    garmentColor: "#f7f4ee", crown: "diadem", jewels: true, brow: "stern",
    props: [P("peacock", "lowL", 1), P("pomegranate", "lowR", 0.95)],
  }),
  s("poseidon", "포세이돈의 초상. 삼지창과 돌고래, 바다.", {
    scene: "sea", sky: ["#d5ebe8", "#c5ddd8"], wash: "#1f6f78", skin: "bronze", hair: "curls", hairColor: "sea",
    beard: "full", garmentColor: "#1f6f78", crown: "diadem", brow: "stern",
    props: [P("trident", "staffL", 1.05), P("dolphin", "lowR", 1)],
  }),
  s("demeter", "데메테르의 초상. 밀 이삭 관과 횃불.", {
    scene: "wheat", sky: ["#f8efd0", "#f6f1e6"], wash: "#c9a54e", skin: "olive", hair: "long", hairColor: "brown",
    garmentColor: "#c9a54e", crown: "wheat", jewels: true,
    props: [P("torch", "staffR", 0.95), P("wheat", "lowL", 0.9)],
  }),
  s("hestia", "헤스티아의 초상. 베일을 쓴 화로의 여신.", {
    scene: "hearth", sky: ["#f8ece4", "#f6f1e6"], wash: "#c46a45", skin: "fair", crown: "veil", garmentColor: "#c46a45",
    props: [P("hearth", "lowR", 1.15)],
  }),
  s("athena", "아테나의 초상. 투구, 올빼미, 아이기스.", {
    scene: "olympus", skin: "olive", hair: "short", hairColor: "dark", garment: "armor", garmentColor: "#f3efe4",
    crown: "helmet", crest: "#8c2f2b", chest: "gorgoneion", brow: "stern",
    props: [P("owl", "lowL", 0.9), P("spear", "staffR", 0.95), P("olive", "skyL", 0.8, true)],
  }),
  s("apollo", "아폴론의 초상. 월계관과 리라, 활.", {
    scene: "grove", sky: ["#f8efd4", "#f6f1e6"], wash: "#e6c56a", skin: "fair", hair: "curls", hairColor: "honey",
    age: "youth", garmentColor: "#f7f4ee", crown: "laurel",
    props: [P("lyre", "lowL", 1), P("bow", "staffR", 0.85)],
  }),
  s("artemis", "아르테미스의 초상. 초승달, 활과 사슴.", {
    scene: "grove", sky: ["#e7f0e4", "#f6f1e6"], wash: "#5c6b3a", skin: "fair", hair: "tied", hairColor: "brown",
    age: "youth", garment: "hunt", garmentColor: "#3e5230", crown: "crescent",
    props: [P("bow", "staffL", 0.95), P("deer", "lowR", 1)],
  }),
  s("ares", "아레스의 초상. 투구와 창, 붉은 방패.", {
    scene: "storm", sky: ["#f0e0dc", "#f6f1e6"], wash: "#8c2f2b", skin: "bronze", hair: "short", hairColor: "black",
    beard: "short", garment: "armor", garmentColor: "#8c2f2b", crown: "helmet", crest: "#2b2620", brow: "stern",
    props: [P("spear", "staffL", 1), P("shield", "lowR", 0.85)],
  }),
  s("aphrodite", "아프로디테의 초상. 장미와 비둘기, 조개.", {
    scene: "roses", sky: ["#f8e6ea", "#f6f1e6"], wash: "#e7b7c8", skin: "fair", hair: "long", hairColor: "honey",
    garmentColor: "#e7b7c8", crown: "diadem", jewels: true, mouth: "smile",
    props: [P("roses", "lowL", 1), P("dove", "skyR", 1, true), P("shell", "lowR", 0.85)],
  }),
  s("hephaistos", "헤파이스토스의 초상. 망치와 모루, 대장간의 불.", {
    scene: "forge", sky: ["#f8e6d8", "#f6f1e6"], wash: "#e25a2a", skin: "bronze", hair: "short", hairColor: "black",
    beard: "full", garment: "smith", garmentColor: "#4e5258", brow: "stern",
    props: [P("hammer", "midR", 1), P("anvil", "lowL", 0.95)],
  }),
  s("hermes", "헤르메스의 초상. 날개 모자, 케리케이온, 날개 샌들.", {
    scene: "sky", sky: ["#f8efd4", "#f6f1e6"], wash: "#e6c56a", skin: "olive", hair: "curls", hairColor: "honey",
    age: "youth", garmentColor: "#e6c56a", crown: "petasos", mouth: "smile",
    props: [P("caduceus", "staffL", 1), P("sandals", "lowR", 0.95)],
  }),
  s("dionysos", "디오니소스의 초상. 담쟁이 관, 티르소스와 포도.", {
    scene: "grove", sky: ["#f3e6f0", "#f6f1e6"], wash: "#5c3d78", skin: "fair", hair: "long", hairColor: "vine",
    age: "youth", garmentColor: "#5c3d78", crown: "ivy", cloak: "leopard", mouth: "smile",
    props: [P("thyrsus", "staffR", 1), P("grapes", "lowL", 1)],
  }),
  s("hades", "하데스의 초상. 어두운 투구, 두 갈래 창, 케르베로스.", {
    scene: "underworld", sky: ["#2a2140", "#1a1428"], wash: "#2a2140", skin: "pale", hair: "curls", hairColor: "black",
    beard: "full", garmentColor: "#2a2140", crown: "helmet", helmet: "#2a2140", crest: "#3a3458", brow: "stern",
    props: [P("bident", "staffL", 1), P("dog", "lowR", 0.9)],
  }),
  s("persephone", "페르세포네의 초상. 석류와 봄꽃, 횃불.", {
    scene: "underworld", sky: ["#3a3458", "#f6f1e6"], wash: "#5c3d78", skin: "fair", hair: "long", hairColor: "auburn",
    age: "youth", garmentColor: "#5c3d78", jewels: true,
    props: [P("pomegranate", "lowL", 0.95), P("flowers", "lowR", 0.9), P("torch", "staffR", 0.75)],
  }),
  s("pan", "판의 초상. 염소 뿔과 팬파이프.", {
    scene: "grove", skin: "bronze", hair: "curls", hairColor: "brown", beard: "short", crown: "horns", ears: "goat",
    garmentColor: "#6e5844", mouth: "smile", props: [P("pipes", "midR", 1.15)],
  }),
  s("muses", "무사이의 초상. 리라와 두루마리, 월계관.", {
    scene: "olympus", skin: "fair", hair: "long", hairColor: "honey", age: "youth", garmentColor: "#f4efe4",
    crown: "laurel", jewels: true, props: [P("lyre", "lowL", 1), P("scroll", "lowR", 0.9), P("mask", "skyR", 0.7, true)],
  }),
  s("nike", "니케의 초상. 날개와 월계관, 종려 가지.", {
    scene: "sky", sky: ["#f8efd4", "#f6f1e6"], wash: "#c9a54e", skin: "fair", hair: "tied", hairColor: "brown",
    age: "youth", garmentColor: "#f7f4ee", crown: "laurel", wings: "soft",
    props: [P("palm", "midR", 1), P("laurel", "lowL", 0.85)],
  }),
  s("asklepios", "아스클레피오스의 초상. 뱀이 감긴 지팡이.", {
    scene: "grove", skin: "olive", hair: "curls", hairColor: "brown", beard: "full", age: "elder",
    garmentColor: "#f3efe4", crown: "laurel", props: [P("caduceus", "staffR", 1.05)],
  }),
  s("nemesis", "네메시스의 초상. 저울과 수레바퀴.", {
    scene: "storm", skin: "olive", hair: "bun", hairColor: "dark", garmentColor: "#2b2620", wings: "soft", brow: "stern", jewels: true,
    props: [P("scales", "lowL", 0.95), P("wheel", "midR", 0.9)],
  }),
  s("hypnos", "히프노스의 초상. 관자놀이의 날개와 양귀비.", {
    scene: "night", sky: ["#2a2140", "#e7e2f0"], wash: "#3a3458", skin: "pale", hair: "curls", hairColor: "dark",
    age: "youth", garmentColor: "#3a3458", crown: "poppy", templeWings: true, gaze: "down",
    props: [P("poppy", "lowR", 1.05)],
  }),
  s("kirke", "키르케의 초상. 마법의 잔과 약초, 돼지.", {
    scene: "grove", skin: "olive", hair: "long", hairColor: "auburn", garmentColor: "#5c3d78", crown: "diadem", jewels: true,
    props: [P("cup", "midR", 1), P("pig", "lowL", 0.95), P("herb", "skyL", 0.8, true)],
  }),
  s("herakles", "헤라클레스의 초상. 사자 가죽과 몽둥이.", {
    scene: "earth", skin: "bronze", hair: "short", hairColor: "brown", beard: "short", hood: "lion",
    garmentColor: "#c4a06a", brow: "stern", props: [P("club", "midR", 1.15), P("bow", "staffL", 0.75)],
  }),
  s("perseus", "페르세우스의 초상. 거울 같은 방패, 하르페, 날개 샌들.", {
    scene: "sky", sky: ["#e4eaf2", "#f6f1e6"], wash: "#1f3b57", skin: "olive", hair: "curls", hairColor: "brown",
    age: "youth", garmentColor: "#1f3b57",
    props: [P("aegis", "lowL", 0.85), P("sickle", "midR", 0.9), P("sandals", "skyR", 0.75, true)],
  }),
  s("theseus", "테세우스의 초상. 몽둥이와 실타래.", {
    scene: "labyrinth", skin: "olive", hair: "short", hairColor: "brown", age: "youth", garmentColor: "#c46a45",
    props: [P("club", "midL", 1), P("thread", "lowR", 1)],
  }),
  s("iason", "이아손의 초상. 황금 양털과 샌들.", {
    scene: "sea", sky: ["#d5ebe8", "#f6f1e6"], wash: "#c9a54e", skin: "olive", hair: "curls", hairColor: "brown",
    age: "youth", garmentColor: "#1f6f78", props: [P("fleece", "lowL", 1.15), P("sandals", "lowR", 0.85)],
  }),
  s("achilleus", "아킬레우스의 초상. 큰 방패와 창.", {
    scene: "storm", skin: "bronze", hair: "curls", hairColor: "honey", age: "youth", garment: "armor", garmentColor: "#c9a54e",
    brow: "stern", props: [P("shield", "lowL", 0.9), P("spear", "staffR", 1)],
  }),
  s("odysseus", "오디세우스의 초상. 여행자의 모자, 활과 배.", {
    scene: "sea", skin: "olive", hair: "short", hairColor: "brown", beard: "short", crown: "pilos",
    garmentColor: "#6e5844", brow: "stern", props: [P("bow", "staffL", 0.9), P("ship", "lowR", 1.05)],
  }),
  s("orpheus", "오르페우스의 초상. 리라와 월계관.", {
    scene: "grove", skin: "fair", hair: "curls", hairColor: "dark", age: "youth", garmentColor: "#f3efe4", crown: "laurel",
    props: [P("lyre", "midR", 1.15)],
  }),
  s("hektor", "헥토르의 초상. 깃털 투구와 창.", {
    scene: "olympus", skin: "olive", hair: "short", hairColor: "black", beard: "short", garment: "armor", garmentColor: "#8c2f2b",
    crown: "helmet", crest: "#c9a54e", brow: "stern", props: [P("spear", "staffR", 1), P("shield", "lowL", 0.8)],
  }),
  s("aineias", "아이네이아스의 초상. 아버지를 업고 가신상을 든 모습.", {
    scene: "storm", skin: "olive", hair: "short", hairColor: "brown", beard: "short", garment: "armor", garmentColor: "#6e5844",
    crown: "helmet", crest: "#8c2f2b", companion: "anchises", props: [P("statue", "lowL", 0.85)],
  }),
  s("bellerophon", "벨레로폰의 초상. 황금 굴레와 페가수스.", {
    scene: "sky", sky: ["#e4eaf2", "#f6f1e6"], wash: "#9ec4de", skin: "fair", hair: "curls", hairColor: "brown",
    age: "youth", garmentColor: "#f7f4ee", props: [P("horse", "lowL", 1.05, true), P("bridle", "midR", 1), P("wing", "skyR", 0.7, true)],
  }),
  s("paris", "파리스의 초상. 프리기아 모자와 황금 사과.", {
    scene: "grove", skin: "olive", hair: "curls", hairColor: "brown", age: "youth", garmentColor: "#c46a45", crown: "phrygian",
    props: [P("apple", "lowR", 1), P("bow", "staffL", 0.75)],
  }),
  s("helene", "헬레네의 초상. 백조와 베틀, 왕관.", {
    scene: "roses", skin: "fair", hair: "long", hairColor: "honey", garmentColor: "#f7f4ee", crown: "diadem", jewels: true,
    props: [P("swan", "lowL", 1), P("loom", "lowR", 0.85)],
  }),
  s("agamemnon", "아가멤논의 초상. 왕홀을 든 미케네의 왕.", {
    scene: "olympus", skin: "olive", hair: "curls", hairColor: "dark", beard: "full", garmentColor: "#8c2f2b", crown: "diadem", brow: "stern",
    props: [P("scepter", "staffR", 1)],
  }),
  s("penelope", "페넬로페의 초상. 베틀과 실타래.", {
    scene: "olympus", skin: "olive", hair: "bun", hairColor: "dark", garmentColor: "#f3efe4", jewels: true,
    props: [P("loom", "midL", 1), P("thread", "lowR", 0.9)],
  }),
  s("telemachos", "텔레마코스의 초상. 창을 든 젊은 왕자.", {
    scene: "sea", skin: "fair", hair: "short", hairColor: "brown", age: "youth", garmentColor: "#1f3b57",
    props: [P("spear", "staffR", 1)],
  }),
  s("daidalos", "다이달로스의 초상. 밀랍 날개와 미궁.", {
    scene: "labyrinth", skin: "olive", hair: "short", hairColor: "brown", beard: "short", garmentColor: "#6e5844",
    props: [P("wing", "midR", 1.1), P("maze", "lowL", 0.9)],
  }),
  s("ikaros", "이카로스의 초상. 밀랍 날개와 태양.", {
    scene: "sun", sky: ["#f8e8c0", "#f6f1e6"], wash: "#e6c56a", skin: "fair", hair: "short", hairColor: "honey",
    age: "youth", garmentColor: "#f4efe4", wings: "wax", props: [P("wing", "lowR", 0.85)],
  }),
  s("pandora", "판도라의 초상. 봉인된 큰 항아리.", {
    scene: "earth", skin: "fair", hair: "long", hairColor: "brown", age: "youth", garmentColor: "#e7dcc8", crown: "diadem", jewels: true,
    props: [P("jar", "midR", 1.2)],
  }),
  s("narkissos", "나르키소스의 초상. 수선화와 아래로 향한 시선.", {
    scene: "grove", skin: "fair", hair: "curls", hairColor: "honey", age: "youth", garmentColor: "#f7f4ee", gaze: "down",
    props: [P("narcissus", "lowR", 1.15)],
  }),
  s("arachne", "아라크네의 초상. 베틀과 거미줄.", {
    scene: "grove", skin: "olive", hair: "long", hairColor: "dark", age: "youth", garmentColor: "#c46a45",
    props: [P("loom", "midL", 1), P("web", "skyR", 0.75, true)],
  }),
  s("midas", "미다스의 초상. 당나귀 귀와 황금.", {
    scene: "wheat", sky: ["#f8efd0", "#f6f1e6"], wash: "#e6c56a", skin: "olive", hair: "curls", hairColor: "brown",
    beard: "short", garmentColor: "#e6c56a", crown: "diadem", ears: "donkey",
    props: [P("coins", "lowR", 1.05), P("roses", "lowL", 0.8)],
  }),
  s("sisyphos", "시시포스의 초상. 언덕 위의 바위.", {
    scene: "earth", skin: "bronze", hair: "short", hairColor: "dark", beard: "short", garmentColor: "#6e5844", brow: "stern",
    props: [P("boulder", "midR", 1.25)],
  }),
  s("tantalos", "탄탈로스의 초상. 손에 닿지 않는 물과 과일.", {
    scene: "underworld", skin: "pale", hair: "curls", hairColor: "white", beard: "full", age: "elder", garmentColor: "#3a342e",
    gaze: "down", props: [P("fruit", "skyR", 1.15)],
  }),
  s("pygmalion", "피그말리온의 초상. 상아 조각상과 조각가의 도구.", {
    scene: "olympus", skin: "olive", hair: "short", hairColor: "brown", beard: "short", garmentColor: "#e7e2d8",
    props: [P("statue", "midR", 1.2), P("hammer", "lowL", 0.75)],
  }),
  s("andromeda", "안드로메다의 초상. 바닷가 바위에 놓인 쇠사슬.", {
    scene: "sea", skin: "fair", hair: "long", hairColor: "dark", age: "youth", garmentColor: "#f7f4ee", jewels: true,
    props: [P("chain", "lowL", 1.05)],
  }),
  s("danae", "다나에의 초상. 쏟아지는 황금 비.", {
    scene: "olympus", sky: ["#f8efd0", "#f6f1e6"], wash: "#e6c56a", skin: "fair", hair: "long", hairColor: "honey",
    garmentColor: "#f4efe4", jewels: true, props: [P("coins", "skyR", 1, true), P("coins", "skyL", 0.7, true)],
  }),
  s("medeia", "메데이아의 초상. 약초와 가마솥.", {
    scene: "grove", skin: "olive", hair: "long", hairColor: "auburn", garmentColor: "#5c3d78", crown: "diadem", jewels: true, brow: "stern",
    props: [P("cauldron", "lowL", 1), P("herb", "midR", 1)],
  }),
  s("ariadne", "아리아드네의 초상. 실타래와 별 왕관.", {
    scene: "labyrinth", skin: "fair", hair: "long", hairColor: "brown", age: "youth", garmentColor: "#c46a45", crown: "stars", jewels: true,
    props: [P("thread", "midR", 1.15)],
  }),
  s("psyche", "프시케의 초상. 나비와 등불.", {
    scene: "night", sky: ["#e7e2f0", "#f6f1e6"], wash: "#7e9a48", skin: "fair", hair: "long", hairColor: "honey",
    age: "youth", garmentColor: "#f7f4ee", jewels: true, props: [P("butterfly", "skyR", 1.15, true), P("lamp", "lowL", 1)],
  }),
  s("phaethon", "파에톤의 초상. 태양 마차의 고삐.", {
    scene: "sun", sky: ["#f8e8c0", "#f6f1e6"], wash: "#e25a2a", skin: "fair", hair: "curls", hairColor: "honey",
    age: "youth", garmentColor: "#e6c56a", brow: "stern", props: [P("reins", "lowR", 1.1), P("horse", "lowL", 0.85, true)],
  }),
  s("europa", "에우로페의 초상. 흰 황소와 꽃바구니.", {
    scene: "sea", skin: "fair", hair: "long", hairColor: "brown", age: "youth", garmentColor: "#f7f4ee", jewels: true,
    props: [P("bull", "lowL", 1.2, true), P("basket", "lowR", 0.95)],
  }),
  s("echo", "에코의 초상. 메아리처럼 번지는 소리.", {
    scene: "cave", skin: "fair", hair: "long", hairColor: "brown", age: "youth", garmentColor: "#e7e2d8",
    props: [P("echo", "skyR", 1.2)],
  }),
  s("eurydike", "에우리디케의 초상. 베일과 저승의 꽃, 작은 뱀.", {
    scene: "underworld", skin: "pale", crown: "veil", garmentColor: "#e7e2d8",
    props: [P("flowers", "lowR", 0.9), P("serpent", "lowL", 0.85)],
  }),
  s("thetis", "테티스의 초상. 바다와 돌고래.", {
    scene: "sea", skin: "fair", hair: "long", hairColor: "sea", garmentColor: "#7eb8c4", jewels: true,
    props: [P("dolphin", "lowL", 1.05)],
  }),
  s("kalypso", "칼립소의 초상. 동굴과 베틀.", {
    scene: "cave", skin: "olive", hair: "long", hairColor: "auburn", garmentColor: "#3e5230", jewels: true,
    props: [P("loom", "midR", 1)],
  }),
  s("daphne", "다프네의 초상. 월계수 잎이 돋아난 머리.", {
    scene: "grove", skin: "fair", hair: "long", hairColor: "brown", age: "youth", garmentColor: "#f3efe4", crown: "laurel",
    props: [P("laurel", "lowR", 1)],
  }),
  s("medousa", "메두사의 초상. 뱀으로 된 머리카락.", {
    scene: "cave", skin: "pale", hair: "snakes", garmentColor: "#3e5230", brow: "stern",
    props: [P("aegis", "lowR", 0.7)],
  }),
  s("minotauros", "미노타우로스의 초상. 황소 머리와 미궁.", {
    form: "minotaur", scene: "labyrinth", sky: ["#f3e6d4", "#e7dcc8"], wash: "#c4a06a", garmentColor: "#8c2f2b",
    props: [P("maze", "skyL", 0.95, true)],
  }),
  s("hydra", "히드라의 초상. 머리가 여럿인 늪의 뱀.", {
    form: "hydra", scene: "sea", sky: ["#d5ebe8", "#c5ddd8"], wash: "#3e6b45", props: [],
  }),
  s("chimaira", "키메라의 초상. 사자, 염소, 뱀이 한몸에 있는 괴물.", {
    form: "chimera", scene: "forge", sky: ["#f8e6d8", "#f6f1e6"], wash: "#c4a06a", props: [],
  }),
  s("kerberos", "케르베로스의 초상. 머리가 셋인 저승의 개.", {
    form: "cerberus", scene: "underworld", sky: ["#2a2140", "#1a1428"], wash: "#1a1428", props: [],
  }),
  s("polyphemos", "폴리페모스의 초상. 외눈 거인과 양.", {
    form: "cyclops", scene: "cave", skin: "bronze", garmentColor: "#6e5844", brow: "stern",
    props: [P("sheep", "lowL", 1.15)],
  }),
  s("typhon", "티폰의 초상. 뱀의 머리와 폭풍의 날개.", {
    form: "typhon", scene: "storm", sky: ["#2a2140", "#d5e3f2"], wash: "#2a2140", skin: "bronze", hair: "bald",
    garmentColor: "#2a2140", brow: "stern", wings: "none", props: [P("lightning", "skyR", 0.8, true)],
  }),
  s("sphinx", "스핑크스의 초상. 여자 얼굴, 사자 몸, 날개.", {
    form: "sphinx", scene: "grove", sky: ["#f6f1e6", "#e7dcc8"], wash: "#c4a06a", props: [P("scroll", "skyR", 0.85, true)],
  }),
  s("seirenes", "세이렌의 초상. 새의 몸을 하고 노래하는 존재.", {
    form: "siren", scene: "sea", sky: ["#d5ebe8", "#f6f1e6"], wash: "#6e5a3a", props: [],
  }),
  s("skylla", "스킬라의 초상. 허리춤의 개 머리와 바다 바위.", {
    form: "scylla", scene: "sea", skin: "pale", hair: "long", hairColor: "dark", garmentColor: "#164e56", brow: "stern",
    props: [],
  }),
  s("pegasos", "페가수스의 초상. 날개 달린 흰 말.", {
    form: "pegasus", scene: "sky", sky: ["#e4eaf2", "#f6f1e6"], wash: "#9ec4de", props: [P("stars", "skyL", 0.8, true)],
  }),
  s("cheiron", "케이론의 초상. 현자의 켄타우로스, 활과 약초.", {
    form: "centaur", scene: "grove", skin: "olive", hair: "curls", hairColor: "white", beard: "full", age: "elder",
    garmentColor: "#f3efe4", crown: "laurel", props: [P("bow", "staffL", 0.85)],
  }),
];
