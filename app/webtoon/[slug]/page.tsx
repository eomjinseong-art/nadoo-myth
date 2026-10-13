import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SourceList, Variants } from "@/components/Refs";
import { CharacterChips, ChatStrip, SummaryCard } from "@/components/webtoon/Extras";
import { PanelView } from "@/components/webtoon/Panel";
import { Quiz } from "@/components/webtoon/Quiz";
import { personBySlug } from "@/data/people";
import { storyBySlug } from "@/data/stories";
import { episodeBySlug, episodes } from "@/data/webtoon";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export function generateStaticParams() {
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = episodeBySlug(slug);
  if (!episode) return {};
  return pageMetadata({
    title: episode.title,
    description: `${episode.summary.who} ${episode.summary.what} ${episode.summary.so}`,
    path: `/webtoon/${episode.slug}`,
    type: "article",
  });
}

export default async function WebtoonEpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = episodeBySlug(slug);
  if (!episode) notFound();
  const story = storyBySlug.get(episode.storySlug);
  const index = episodes.findIndex((item) => item.slug === episode.slug);
  const prev = episodes[index - 1];
  const next = episodes[index + 1];
  const path = `/webtoon/${episode.slug}`;

  return (
    <article className="mx-auto max-w-md px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "웹툰", path: "/webtoon" },
            { name: episode.title, path },
          ]),
          articleLd({
            headline: episode.title,
            description: `${episode.summary.who} ${episode.summary.what}`,
            path,
            about: episode.characters.map((slug) => personBySlug.get(slug)?.ko ?? slug),
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/webtoon", label: "웹툰" }, { label: episode.title }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-gold">
          {episode.order} / {episodes.length} · 약 {episode.minutes}분 · {episode.panels.length}컷
        </p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{episode.title}</h1>
      </header>
      <SummaryCard episode={episode} />
      <ol className="mt-6 space-y-5">
        {episode.panels.map((panel, panelIndex) => (
          <li key={panel.id} id={`panel-${panel.id}`} className="scroll-mt-28">
            <p className="mb-1 text-center text-[11px] tracking-[0.2em] text-gold">
              {panelIndex + 1} / {episode.panels.length}
            </p>
            <PanelView panel={panel} />
          </li>
        ))}
      </ol>
      <Variants items={[episode.footnote]} />
      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">이 이야기에서 나온 말</h2>
        <ul className="mt-3 space-y-4">
          {episode.phrases.map((phrase) => (
            <li key={phrase.term} className="rounded-md border border-line bg-card p-4">
              <h3 className="font-serif text-lg text-ink">{phrase.term}</h3>
              <p className="mt-1 text-sm leading-7 text-muted">{phrase.explain}</p>
              {phrase.links?.length ? (
                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {phrase.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                      {link.label}
                    </Link>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-6 rounded-md border border-navy/20 bg-marble px-4 py-3 text-sm leading-7 text-ink">
        <span className="font-serif text-navy">교훈. </span>
        {episode.moral}
      </p>
      <Quiz slug={episode.slug} questions={episode.quiz} />
      <section className="mt-10">
        <h2 className="font-serif text-xl text-ink">이 편에 나온 인물</h2>
        <p className="mt-1 text-xs text-muted">이름을 누르면 인물 페이지로, 가계를 누르면 가족관계도에서 그 칸이 밝아집니다.</p>
        <CharacterChips slugs={episode.characters} />
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">이어서 읽기</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {story ? (
            <li>
              <Link href={`/stories/${story.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                이야기: {story.title}
              </Link>
            </li>
          ) : null}
          {episode.related.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <SourceList sources={episode.sources} />
      <ChatStrip episode={episode} />
      <nav className="mt-10 flex justify-between gap-4 border-t border-line pt-4 text-sm">
        {prev ? (
          <Link href={`/webtoon/${prev.slug}`} className="text-navy hover:text-gold">
            ← {prev.title}
          </Link>
        ) : (
          <Link href="/webtoon" className="text-navy hover:text-gold">
            ← 웹툰 목록
          </Link>
        )}
        {next ? (
          <Link href={`/webtoon/${next.slug}`} className="text-right text-navy hover:text-gold">
            {next.title} →
          </Link>
        ) : (
          <Link href="/webtoon" className="text-right text-navy hover:text-gold">
            목록으로 →
          </Link>
        )}
      </nav>
      <CoupangCard />
    </article>
  );
}
