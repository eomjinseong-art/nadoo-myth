import Link from "next/link";
import { personBySlug } from "@/data/people";
import { storyBySlug } from "@/data/stories";
import type { Source } from "@/data/types";

export function PersonRef({ refKey }: { refKey: string }) {
  const p = personBySlug.get(refKey);
  if (!p) return <span className="text-ink">{refKey}</span>;
  return (
    <Link href={`/gods/${p.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
      {p.ko}
    </Link>
  );
}

export function PersonRefList({ refs, empty = "—" }: { refs: string[]; empty?: string }) {
  if (!refs.length) return <span className="text-muted">{empty}</span>;
  return (
    <span className="leading-7">
      {refs.map((r, i) => (
        <span key={`${r}-${i}`}>
          {i > 0 ? <span className="text-muted">, </span> : null}
          <PersonRef refKey={r} />
        </span>
      ))}
    </span>
  );
}

export function StoryRefList({ refs }: { refs: string[] }) {
  const items = refs.map((r) => storyBySlug.get(r)).filter((s) => !!s);
  if (!items.length) return <span className="text-muted">—</span>;
  return (
    <ul className="space-y-1">
      {items.map((s) => (
        <li key={s!.slug}>
          <Link href={`/stories/${s!.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
            {s!.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SourceList({ sources, title = "원전 근거" }: { sources: Source[]; title?: string }) {
  return (
    <section className="mt-8 rounded-md border border-line bg-card p-4">
      <h2 className="font-serif text-base text-ink">{title}</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
        {sources.map((s, i) => (
          <li key={i}>
            <span className="text-ink">{s.work}</span>
            {s.ref ? <span> · {s.ref}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Variants({ items }: { items?: string[] }) {
  if (!items || !items.length) return null;
  return (
    <aside className="mt-6 rounded-md border border-gold/40 bg-gold/5 p-4">
      <h2 className="font-serif text-base text-gold">이야기마다 달라요</h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-ink">
        {items.map((v, i) => (
          <li key={i}>{v.replace(/^이야기마다 달라요:\s*/, "")}</li>
        ))}
      </ul>
    </aside>
  );
}
