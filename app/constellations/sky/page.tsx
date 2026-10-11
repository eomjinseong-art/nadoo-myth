import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SkyMap } from "@/components/SkyMap";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { seasons } from "@/lib/starchart/sky";

export const metadata = pageMetadata({
  title: "계절별 하늘 지도",
  description: "한국 중부(북위 약 37°)에서 저녁 9시에 보는 봄·여름·가을·겨울 하늘. 신화 별자리가 서로 어디에 있는지 누르고 성도로 갑니다.",
  path: "/constellations/sky",
});

export default function SkyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "별자리", path: "/constellations" },
            { name: "계절별 하늘 지도", path: "/constellations/sky" },
          ]),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/constellations", label: "별자리" },
          { label: "계절별 하늘 지도" },
        ]}
      />
      <PageHead
        kicker="EVENING SKY"
        title="계절별 하늘 지도"
        lead="서울 기준(북위 37.5°, 동경 127°) 저녁 9시에 하늘을 올려다본 그림입니다. 원의 위가 북쪽, 왼쪽이 동쪽입니다. 이름을 누르면 그 별자리 성도로 갑니다."
      />
      <p className="mt-3 text-xs leading-6 text-muted">
        지평선 위에 떠 있는 이 사이트의 별자리만 이어 그렸습니다. 4등보다 밝은 별을 점으로 찍었고, 북극성은 길잡이로 따로 적었습니다. 같은 시각이라도 남쪽 해안은 남쪽 별이 조금 더 높이 뜹니다.
      </p>
      <div className="mt-8 space-y-10">
        {seasons.map((season) => (
          <section key={season.id}>
            <h2 className="font-serif text-2xl text-ink">
              {season.ko}{" "}
              <span className="text-sm font-normal text-muted">{season.when} · 저녁 9시</span>
            </h2>
            <p className="mt-1 text-sm leading-7 text-muted">{season.blurb}</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-line">
              <SkyMap season={season} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
