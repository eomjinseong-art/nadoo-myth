import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { WORD_STATUS_LABEL, words } from "@/data/words";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { StatusBadge } from "./StatusBadge";

export const metadata = pageMetadata({
  title: "신화 속 단어 · 나르시시즘부터 나이키까지",
  description: `나르시시즘, 아킬레스건, 판도라의 상자, 패닉, 멘토, 에코, 시리얼, 오케아노스와 오션까지 신화에서 온 단어 ${words.length}개. 어원이 확실한 것과 논쟁 중인 것을 구분했습니다.`,
  path: "/words",
});

export default function WordsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([{ name: "홈", path: "/" }, { name: "신화 속 단어", path: "/words" }]),
          itemListLd("신화 속 단어", "/words", words.map((w) => ({ name: w.word, path: `/words/${w.slug}` }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "신화 속 단어" }]} />
      <PageHead
        kicker="WORDS"
        title="신화 속 단어"
        lead="일상에서 쓰는 말 가운데 신화에서 온 것들입니다. 흔히 퍼진 설명 가운데 근거가 약한 것도 있어 어원 상태를 함께 표시했습니다."
      />
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
        {(Object.keys(WORD_STATUS_LABEL) as (keyof typeof WORD_STATUS_LABEL)[]).map((k) => (
          <StatusBadge key={k} status={k} />
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {words.map((w) => (
          <Link key={w.slug} href={`/words/${w.slug}`} className="rounded-md border border-line bg-card p-4 hover:border-gold">
            <div className="flex items-start justify-between gap-2">
              <span className="font-serif text-lg text-ink">{w.word}</span>
              <StatusBadge status={w.status} />
            </div>
            <p className="text-xs text-muted">{w.en}</p>
            <p className="mt-2 text-sm leading-6 text-ink/80">{w.lead}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
