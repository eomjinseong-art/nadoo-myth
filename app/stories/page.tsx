import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { stories } from "@/data/stories";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이야기 · 시간 순서로 읽는 그리스 로마 신화",
  description: `카오스와 세상의 시작부터 티탄 전쟁, 프로메테우스, 판도라, 페르세우스, 헤라클레스의 12과업, 트로이 전쟁, 오디세이아, 아이네이스까지 ${stories.length}편의 신화를 원전 근거와 함께.`,
  path: "/stories",
});

export default function StoriesPage() {
  const eras = Array.from(new Set(stories.map((s) => s.era)));
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([{ name: "홈", path: "/" }, { name: "이야기", path: "/stories" }]),
          itemListLd("이야기", "/stories", stories.map((s) => ({ name: s.title, path: `/stories/${s.slug}` }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "이야기" }]} />
      <PageHead
        kicker="STORIES"
        title="이야기"
        lead="신화에는 정해진 연표가 없지만, 신들의 탄생에서 영웅의 시대와 트로이 전쟁까지 대략의 순서로 늘어놓았습니다."
      />
      {eras.map((era) => (
        <section key={era} className="mt-10">
          <h2 className="font-serif text-xl text-gold">{era}</h2>
          <ol className="mt-3 space-y-3">
            {stories
              .filter((s) => s.era === era)
              .map((s) => (
                <li key={s.slug}>
                  <Link href={`/stories/${s.slug}`} className="block rounded-md border border-line bg-card p-4 hover:border-gold">
                    <span className="font-serif text-sm text-gold">{s.order}</span>{" "}
                    <span className="font-serif text-lg text-ink">{s.title}</span>
                    <p className="mt-1 text-sm leading-6 text-muted">{s.lead}</p>
                  </Link>
                </li>
              ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
