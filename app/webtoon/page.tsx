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
    "프로메테우스의 불부터 오디세우스와 키클롭스까지, 그리스 신화를 세로로 읽는 웹툰. 3줄 요약, 이야기에서 나온 말, 교훈, 세 문제 퀴즈.",
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
        열 편을 신화의 앞뒤대로 읽습니다. 그림은 이 페이지 안에서 그린 것이고, 아픈 순간은 화면 밖에 둡니다.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.slug} episode={episode} />
        ))}
      </div>
      {planned.length ? (
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-ink">다음에 그릴 이야기</h2>
          <ul className="mt-4 space-y-2">
            {planned.map((item) => {
              const story = storyBySlug.get(item.storySlug);
              return (
                <li key={item.storySlug} className="rounded-md border border-line bg-card px-4 py-3">
                  <span className="font-serif text-ink">{item.title}</span>
                  {story ? (
                    <Link href={`/stories/${story.slug}`} className="mt-1 block text-sm text-navy underline decoration-line underline-offset-4 hover:text-gold">
                      이야기 읽기: {story.title}
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
