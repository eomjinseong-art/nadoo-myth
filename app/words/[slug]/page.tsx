import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PersonRefList, SourceList, StoryRefList } from "@/components/Refs";
import { wordBySlug, words } from "@/data/words";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { StatusBadge } from "../StatusBadge";

export function generateStaticParams() {
  return words.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = wordBySlug.get(slug);
  if (!w) return {};
  return pageMetadata({ title: `${w.word}(${w.en})의 어원`, description: `${w.lead} ${w.body[0] ?? ""}`, path: `/words/${w.slug}`, type: "article" });
}

export default async function WordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = wordBySlug.get(slug);
  if (!w) notFound();
  const path = `/words/${w.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "신화 속 단어", path: "/words" },
            { name: w.word, path },
          ]),
          articleLd({ headline: `${w.word}의 어원`, description: w.lead, path }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/words", label: "신화 속 단어" }, { label: w.word }]} />
      <header className="mt-4">
        <StatusBadge status={w.status} />
        <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{w.word}</h1>
        <p className="mt-1 text-gold">{w.en}</p>
        <p className="mt-3 text-lg leading-8 text-muted">{w.lead}</p>
      </header>
      <div className="prose-myth mt-6">
        {w.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <dl className="mt-8 grid gap-x-6 gap-y-3 rounded-md border border-line bg-card p-4 text-sm sm:grid-cols-[7rem_1fr]">
        <dt className="text-muted">관련 인물</dt>
        <dd><PersonRefList refs={w.origin} empty="특정 인물 없음" /></dd>
        {w.stories?.length ? (
          <>
            <dt className="text-muted">관련 이야기</dt>
            <dd><StoryRefList refs={w.stories} /></dd>
          </>
        ) : null}
      </dl>
      <SourceList sources={w.sources} title="근거" />
    </article>
  );
}
