import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TagLegend } from "@/components/ClaimList";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { godPairs, romanDeities } from "@/data/gvr";
import { RomeStoriesCallout } from "@/components/RomeStoriesCallout";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "그리스 vs 로마 · 제우스와 유피테르는 같은 신일까",
  description: `그리스 신과 로마 신 ${godPairs.length}쌍의 이름, 성격, 숭배 방식, 신전, 축제, 로마식 시각 차이를 비교하고, 야누스·라레스·베스타 신녀 같은 로마 고유의 신, 에트루리아와 그리스 식민지를 거쳐 신들이 합쳐진 과정을 출처 유형과 함께 정리했습니다.`,
  path: "/greece-vs-rome",
});

export default function GvrPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([{ name: "홈", path: "/" }, { name: "그리스 vs 로마", path: "/greece-vs-rome" }]),
          itemListLd(
            "그리스 vs 로마 비교",
            "/greece-vs-rome",
            godPairs.map((p) => ({ name: `${p.greekKo} vs ${p.romanKo}`, path: `/greece-vs-rome/${p.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "그리스 vs 로마" }]} />
      <PageHead
        kicker="GREECE vs ROME"
        title="그리스 vs 로마"
        lead="흔히 '로마 신 = 그리스 신의 다른 이름'이라고 하지만, 실제로는 원래 따로 있던 로마·이탈리아의 신에게 그리스 신화가 덧입혀진 경우가 대부분입니다. 숭배 방식, 신전, 축제, 그리고 신을 바라보는 시각이 어떻게 달랐는지 비교합니다."
      />
      <div className="mt-5 rounded-md border border-line bg-card p-4">
        <TagLegend />
        <p className="mt-2 text-xs leading-6 text-muted">
          모든 서술에 출처 유형을 붙였습니다. 학자들 사이에 의견이 갈리는 부분은 &lsquo;학설이 갈려요&rsquo; 상자에 따로 모았습니다.
        </p>
      </div>

      <RomeStoriesCallout body="왕정·공화정·제정, 전쟁, 클레오파트라처럼 실제로 이어진 로마의 역사는 로마이야기에 있습니다. 폴리스와 전쟁의 그리스, 파라오의 이집트도 같은 나두 역사·신화에서 읽습니다." />

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">신 짝 비교 ({godPairs.length})</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line bg-card">
          <table className="w-full min-w-[36rem] text-sm">
            <thead className="bg-marble text-left text-xs text-muted">
              <tr>
                <th className="px-3 py-2">그리스</th>
                <th className="px-3 py-2">로마</th>
                <th className="px-3 py-2">한 줄 차이</th>
              </tr>
            </thead>
            <tbody>
              {godPairs.map((p) => (
                <tr key={p.slug} className="border-t border-line align-top hover:bg-gold/5">
                  <td className="px-3 py-2 font-serif text-navy">
                    <Link href={`/greece-vs-rome/${p.slug}`} className="hover:text-gold">{p.greekKo}</Link>
                  </td>
                  <td className="px-3 py-2 font-serif text-rome">
                    <Link href={`/greece-vs-rome/${p.slug}`} className="hover:text-gold">
                      {p.romanKo} <span className="text-xs text-muted">{p.romanLatin}</span>
                    </Link>
                  </td>
                  <td className="px-3 py-2 leading-6 text-ink/80">{p.lead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">로마에만 있던 신들</h2>
        <p className="mt-1 text-sm text-muted">그리스 신화에 딱 맞는 짝이 없는, 로마의 집과 국가를 지킨 신들입니다.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {romanDeities.map((r) => (
            <Link key={r.slug} href={`/greece-vs-rome/roman/${r.slug}`} className="rounded-md border border-line bg-card p-4 hover:border-rome">
              <p className="font-serif text-lg text-rome">{r.ko}</p>
              <p className="text-xs text-muted">{r.latin}</p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{r.role}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-md border border-gold/40 bg-gold/5 p-5">
        <h2 className="font-serif text-2xl text-ink">어떻게 합쳐졌을까</h2>
        <p className="mt-2 text-sm leading-7 text-ink">
          에트루리아의 티니아·우니·멘르바, 남부 이탈리아의 그리스 식민 도시, 카피톨리누스 3신, &lsquo;로마식 해석(interpretatio romana)&rsquo;, 그리고 기원전 8세기부터 오비디우스까지의 연표.
        </p>
        <Link href="/greece-vs-rome/history" className="mt-3 inline-block text-sm text-gold underline underline-offset-4">
          합쳐진 과정 보기 →
        </Link>
      </section>
    </div>
  );
}
