import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MiniStarChart } from "@/components/MiniStarChart";
import { PageHead } from "@/components/PageHead";
import { constellations } from "@/data/constellations";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "별자리 성도",
  description: "페르세우스, 안드로메다, 오리온, 큰곰 등 그리스 신화 별자리의 실제 별 위치와 막대 그림, 한국에서 찾는 법.",
  path: "/constellations",
});

export default function ConstellationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "작품 속 신화", path: "/in-media" },
            { name: "별자리", path: "/constellations" },
          ]),
          itemListLd(
            "별자리 성도",
            "/constellations",
            constellations.map((item) => ({ name: item.ko, path: `/constellations/${item.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/in-media", label: "작품 속 신화" }, { label: "별자리" }]} />
      <PageHead
        kicker="CONSTELLATIONS"
        title="별자리"
        lead="별의 실제 위치와 이어 붙인 선으로, 그 이름이 왜 그 모습인지 볼 수 있게 그렸습니다. 이름을 누르면 성도와 찾는 법이 나옵니다."
      />
      <p className="mt-4">
        <Link href="/constellations/sky" className="text-sm text-navy underline decoration-line underline-offset-4 hover:text-gold">
          계절별 하늘 지도 — 한국에서 저녁 9시의 하늘
        </Link>
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {constellations.map((item) => (
          <Link key={item.slug} href={`/constellations/${item.slug}`} className="overflow-hidden rounded-md border border-line bg-card hover:border-gold">
            <MiniStarChart slug={item.slug} />
            <span className="block p-3">
              <span className="block font-serif text-lg text-navy">
                {item.ko} <span className="text-xs text-muted">{item.latin}</span>
              </span>
              <span className="mt-1 block text-xs text-muted">{item.season}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
