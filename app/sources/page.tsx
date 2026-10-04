import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TagLegend } from "@/components/ClaimList";
import { PageHead } from "@/components/PageHead";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "원전과 참고 자료",
  description: "나두신화가 근거로 삼은 그리스·로마 원전(호메로스, 헤시오도스, 아폴로도로스, 오비디우스, 베르길리우스, 리비우스, 키케로, 바로)과 고고학 자료, 표기 원칙을 정리했습니다.",
  path: "/sources",
});

const GREEK = [
  ["호메로스", "『일리아스』, 『오디세이아』 (기원전 8~7세기 무렵)", "트로이 전쟁과 오디세우스의 귀향. 가장 오래된 그리스 문헌."],
  ["헤시오도스", "『신통기』, 『일과 날』", "세상의 시작과 신들의 계보, 프로메테우스와 판도라."],
  ["『호메로스 찬가』", "데메테르, 헤르메스, 아프로디테 찬가 등", "신마다 따로 지어진 찬가. 저자는 여럿."],
  ["비극 작가", "아이스킬로스, 소포클레스, 에우리피데스", "프로메테우스, 오이디푸스, 메데이아 등."],
  ["핀다로스", "『송가』", "경기 우승자를 기린 노래 속 영웅 신화."],
  ["로도스의 아폴로니오스", "『아르고나우티카』", "이아손과 아르고호 원정."],
  ["아폴로도로스(위작)", "『비블리오테케(신화집)』 (1~2세기)", "그리스 신화를 체계적으로 요약한 책."],
  ["파우사니아스", "『그리스 안내기』 (2세기)", "신전, 지역 전승, 제의를 직접 보고 기록."],
  ["플루타르코스·디오니시오스", "『영웅전』, 『로마 고대사』", "그리스어로 쓴 로마 이야기."],
];
const ROMAN = [
  ["베르길리우스", "『아이네이스』 (기원전 19년 무렵)", "트로이의 아이네이아스가 로마의 조상이 되는 이야기."],
  ["오비디우스", "『변신 이야기』, 『축제력(파스티)』", "그리스 신화를 라틴어로 집대성, 로마 축제력 해설."],
  ["리비우스", "『로마사(건국 이래)』", "신전 봉헌, 새 신 도입 같은 종교사 기록."],
  ["키케로", "『신들의 본성에 관하여』", "로마 지식인의 신 이해, 여러 '유피테르' 구분."],
  ["바로", "『라틴어에 관하여』 등", "라틴 신 이름의 어원과 로마 종교(일부만 남음)."],
  ["히기누스", "『이야기집』, 『천문학』", "별자리와 신화 요약."],
];
const ARCH = [
  ["신전 유적", "카피톨리누스 신전 기단, 포룸의 베스타 신전, 파이스툼의 그리스 신전 등"],
  ["비문", "라피스 사트리카누스, 피르기 금판, 바카날리아 원로원 결의 청동판 등"],
  ["동전", "공화정·제정기 동전에 새겨진 야누스, 유노 모네타, 베누스 등"],
  ["거울·도기", "에트루리아 청동 거울의 신 이름(티니아, 우니, 멘르바), 그리스 도기 그림"],
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "원전과 참고 자료" }]} />
      <PageHead kicker="SOURCES" title="원전과 참고 자료" lead="신화는 하나의 정답이 없는 이야기 모음입니다. 나두신화는 가능한 한 고대 원전을 근거로 적고, 판본이 다르면 '이야기마다 달라요'로 표시했습니다." />
      <section className="mt-8">
        <h2 className="font-serif text-xl text-navy">그리스어 문헌</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {GREEK.map(([a, w, d]) => (
            <li key={a}><strong className="text-ink">{a}</strong> {w} — <span className="text-muted">{d}</span></li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl text-rome">라틴어 문헌</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {ROMAN.map(([a, w, d]) => (
            <li key={a}><strong className="text-ink">{a}</strong> {w} — <span className="text-muted">{d}</span></li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">고고학 자료</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {ARCH.map(([a, d]) => (
            <li key={a}><strong className="text-ink">{a}</strong> — <span className="text-muted">{d}</span></li>
          ))}
        </ul>
      </section>
      <section className="mt-8 rounded-md border border-line bg-card p-4">
        <h2 className="font-serif text-base text-ink">그리스 vs 로마 메뉴의 출처 표시</h2>
        <div className="mt-2"><TagLegend /></div>
      </section>
      <section className="mt-8 text-sm leading-7 text-muted">
        <h2 className="font-serif text-base text-ink">표기 원칙</h2>
        <p>인물 이름은 그리스어 발음을 기준으로 적고(예: 헤라클레스, 오디세우스), 로마 이름은 라틴어 발음으로 따로 적었습니다(예: 유피테르, 베누스). 널리 굳은 표기는 함께 밝혔습니다. 행·권 번호는 일반적인 원전 편집본 기준이며 번역본에 따라 조금 다를 수 있습니다.</p>
        <p className="mt-2">오류를 발견하면 알려 주세요. 원전과 대조해 고치겠습니다.</p>
      </section>
    </div>
  );
}
