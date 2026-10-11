import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { EpisodeCard } from "@/components/webtoon/Extras";
import { storyBySlug } from "@/data/stories";
import { episodes, planned } from "@/data/webtoon";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "웹툰 · 그림으로 읽는 그리스 신화",
  description:
    "판도라의 상자와 페르세우스와 메두사를 세로로 읽는 파일럿 웹툰. 3줄 요약, 이야기에서 나온 말, 교훈, 세 문제 퀴즈.",
  path: "/webtoon",
});

export default function WebtoonIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "웹툰", path: "/webtoon" },
          ]),
          itemListLd(
            "웹툰",
            "/webtoon",
            episodes.map((episode) => ({ name: episode.title, path: `/webtoon/${episode.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "웹툰" }]} />
      <PageHead
        kicker="WEBTOON"
        title="웹툰"
        lead="그리스 신화를 세로로 넘기며 읽습니다. 대사는 짧게, 원전과 다른 곳은 편 아래에서 짚습니다."
      />
      <p className="mt-4 rounded-md border border-gold/40 bg-gold/5 px-3 py-2 text-sm leading-6 text-ink">
        그림체를 먼저 보는 파일럿입니다. 지금은 두 편만 그렸고, 그림은 이 페이지 안에서 직접 그린 것입니다.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.slug} episode={episode} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">다음에 그릴 이야기</h2>
        <p className="mt-1 text-sm text-muted">편은 아직 없습니다. 글 이야기는 먼저 읽을 수 있습니다.</p>
        <ul className="mt-4 space-y-2">
          {planned.map((item) => {
            const story = storyBySlug.get(item.storySlug);
            return (
              <li key={item.storySlug} className="flex flex-wrap items-baseline justify-between gap-2 rounded-md border border-line bg-card px-4 py-3">
                <span className="font-serif text-ink">{item.title}</span>
                <span className="text-xs text-muted">준비 중</span>
                {story ? (
                  <Link href={`/stories/${story.slug}`} className="w-full text-sm text-navy underline decoration-line underline-offset-4 hover:text-gold sm:w-auto">
                    이야기 읽기: {story.title}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
