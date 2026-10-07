import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClaimList, TagLegend } from "@/components/ClaimList";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { etruscanTable, mergeSections, timeline } from "@/data/gvr-history";
import { RomeStoriesCallout } from "@/components/RomeStoriesCallout";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const path = "/greece-vs-rome/history";
const lead =
  "로마 신들은 처음부터 그리스 신과 같지 않았습니다. 에트루리아, 남부 이탈리아의 그리스 식민 도시, 카피톨리누스 3신, '로마식 해석(interpretatio romana)'을 거쳐 서서히 합쳐진 과정을 연표와 함께 정리했습니다.";

export const metadata = pageMetadata({ title: "그리스 신과 로마 신은 어떻게 합쳐졌을까", description: lead, path, type: "article" });

export default function HistoryPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "그리스 vs 로마", path: "/greece-vs-rome" },
            { name: "합쳐진 과정", path },
          ]),
          articleLd({ headline: "그리스 신과 로마 신은 어떻게 합쳐졌을까", description: lead, path }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/greece-vs-rome", label: "그리스 vs 로마" }, { label: "합쳐진 과정" }]} />
      <PageHead kicker="HOW THEY MERGED" title="어떻게 합쳐졌을까" lead={lead} />
      <div className="mt-4"><TagLegend /></div>
      <RomeStoriesCallout body="에트루리아와 로마식 해석으로 신이 이어진 뒤, 왕정에서 제정까지의 역사는 로마이야기에서 이어서 읽습니다. 그리스와 이집트의 역사도 나두 역사·신화에 모여 있습니다." />

      {mergeSections.map((s) => (
        <section key={s.title} className="mt-10">
          <h2 className="font-serif text-xl text-ink">{s.title}</h2>
          <div className="mt-3"><ClaimList claims={s.claims} /></div>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink">에트루리아 · 그리스 · 로마 이름 대조</h2>
        <p className="mt-1 text-xs text-muted">에트루리아 이름은 주로 청동 거울과 도기에 새겨진 글자로 알려졌습니다(고고학).</p>
        <div className="mt-3 overflow-x-auto rounded-md border border-line bg-card">
          <table className="w-full min-w-[34rem] text-sm">
            <thead className="bg-marble text-left text-xs text-muted">
              <tr>
                <th className="px-3 py-2">에트루리아</th>
                <th className="px-3 py-2">그리스</th>
                <th className="px-3 py-2">로마</th>
                <th className="px-3 py-2">메모</th>
              </tr>
            </thead>
            <tbody>
              {etruscanTable.map((r) => (
                <tr key={r.etruscan} className="border-t border-line">
                  <td className="px-3 py-2 text-gold">{r.etruscan}</td>
                  <td className="px-3 py-2 text-navy">{r.greek}</td>
                  <td className="px-3 py-2 text-rome">{r.roman}</td>
                  <td className="px-3 py-2 text-xs text-muted">{r.note ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink">연표</h2>
        <ol className="mt-4 border-l-2 border-gold/40 pl-5">
          {timeline.map((t) => (
            <li key={`${t.date}-${t.title}`} className="relative mb-6">
              <span className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-card" aria-hidden />
              <p className="text-xs text-gold">{t.date}</p>
              <h3 className="font-serif text-base text-ink">{t.title}</h3>
              <div className="mt-1"><ClaimList claims={t.claims} /></div>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted">로마 초기 연대(왕정·공화정 초)는 주로 리비우스 같은 후대 기록에 기대므로 전승 연대로 보아야 합니다.</p>
      </section>

      <p className="mt-8 text-sm">
        <Link href="/greece-vs-rome" className="text-gold">← 그리스 vs 로마로 돌아가기</Link>
      </p>
    </article>
  );
}
