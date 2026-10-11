import Link from "next/link";
import { TREE } from "@/data/family-tree";
import { personBySlug } from "@/data/people";
import type { Episode } from "@/data/webtoon/types";
import { HeadShot } from "@/components/webtoon/characters";
import { PanelView } from "@/components/webtoon/Panel";

export function EpisodeCard({ episode, compact = false }: { episode: Episode; compact?: boolean }) {
  const cover = episode.panels.find((panel) => panel.id === episode.cover) ?? episode.panels[0];
  return (
    <Link href={`/webtoon/${episode.slug}`} className="group block overflow-hidden rounded-2xl border border-line bg-card transition hover:border-gold hover:shadow-sm">
      {compact ? (
        <div className="relative h-72 overflow-hidden bg-marble">
          <div className="absolute inset-x-0 bottom-0">
            <PanelView panel={cover} mode="cover" />
          </div>
        </div>
      ) : (
        <PanelView panel={cover} mode="cover" />
      )}
      <span className="block p-4">
        <span className="text-xs tracking-wide text-gold">
          약 {episode.minutes}분 · {episode.panels.length}컷
        </span>
        <span className="mt-1 block font-serif text-xl text-ink group-hover:text-gold">{episode.title}</span>
        {compact ? (
          <span className="mt-2 block text-sm leading-6 text-muted">{episode.summary.what}</span>
        ) : (
          <span className="mt-3 block space-y-1 text-sm leading-6">
            <span className="block"><span className="text-gold">누가 </span><span className="text-muted">{episode.summary.who}</span></span>
            <span className="block"><span className="text-gold">무엇을 </span><span className="text-muted">{episode.summary.what}</span></span>
            <span className="block"><span className="text-gold">그래서 </span><span className="text-muted">{episode.summary.so}</span></span>
          </span>
        )}
      </span>
    </Link>
  );
}

export function SummaryCard({ episode }: { episode: Episode }) {
  const rows = [
    ["누가", episode.summary.who],
    ["무엇을", episode.summary.what],
    ["그래서", episode.summary.so],
  ] as const;
  return (
    <section className="mt-5 rounded-xl border border-gold/40 bg-gold/5 p-4" aria-label="3줄 요약">
      <h2 className="font-serif text-base text-gold">3줄 요약</h2>
      <dl className="mt-2 space-y-2 text-sm leading-6">
        {rows.map(([term, text]) => (
          <div key={term} className="grid grid-cols-[3.2rem_1fr] gap-2">
            <dt className="font-semibold text-gold">{term}</dt>
            <dd className="text-ink">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CharacterChips({ slugs }: { slugs: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {slugs.map((slug) => {
        const person = personBySlug.get(slug);
        if (!person) return null;
        const node = TREE.nodes.find((item) => item.slug === slug);
        return (
          <li key={slug} className="inline-flex overflow-hidden rounded-full border border-line bg-card text-sm">
            <Link href={`/gods/${slug}`} className="px-3 py-1 text-ink hover:text-gold">
              {person.ko}
            </Link>
            {node ? (
              <Link
                href={`/family-tree?focus=${node.id}`}
                className="border-l border-line px-2 py-1 text-xs text-gold hover:bg-gold/10"
                aria-label={`${person.ko} 가족관계도에서 보기`}
              >
                가계
              </Link>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function ChatStrip({ episode }: { episode: Episode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-ink">신들 단톡방</h2>
      <p className="mt-1 text-xs text-muted">이 편을 본 신들의 뒷말. 짧은 장난이고, 원전과는 별개입니다.</p>
      <ol className="mt-4 space-y-3">
        {episode.chat.map((line) => (
          <li key={`${line.id}-${line.text}`} className="flex items-start gap-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-marble">
              <HeadShot id={line.id} pose={line.pose ?? "idle"} look={line.look ?? "plain"} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-gold">{line.name}</p>
              <p className="mt-0.5 rounded-2xl rounded-tl-sm border border-line bg-card px-3 py-2 text-sm leading-6 break-keep text-ink">{line.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
