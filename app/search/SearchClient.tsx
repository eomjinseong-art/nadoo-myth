"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { godPairs, romanDeities } from "@/data/gvr";
import { people } from "@/data/people";
import { stories } from "@/data/stories";
import { words } from "@/data/words";

type Item = { kind: string; title: string; sub: string; href: string; hay: string };

function norm(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ς/g, "σ")
    .replace(/\s+/g, "");
}

const INDEX: Item[] = [
  ...people.map((p) => ({ kind: "인물", title: p.ko, sub: `${p.greek} · ${p.rom}${p.roman ? ` · ${p.roman}` : ""}`, href: `/gods/${p.slug}`, hay: norm([p.ko, p.greek, p.rom, p.roman ?? "", p.role, p.slug].join(" ")) })),
  ...stories.map((s) => ({ kind: "이야기", title: s.title, sub: s.lead, href: `/stories/${s.slug}`, hay: norm([s.title, s.lead, s.slug].join(" ")) })),
  ...words.map((w) => ({ kind: "단어", title: w.word, sub: w.en, href: `/words/${w.slug}`, hay: norm([w.word, w.en, w.slug].join(" ")) })),
  ...godPairs.map((g) => ({ kind: "그리스 vs 로마", title: `${g.greekKo} vs ${g.romanKo}`, sub: g.romanLatin, href: `/greece-vs-rome/${g.slug}`, hay: norm([g.greekKo, g.romanKo, g.romanLatin, g.slug].join(" ")) })),
  ...romanDeities.map((r) => ({ kind: "로마 고유의 신", title: r.ko, sub: `${r.latin} · ${r.role}`, href: `/greece-vs-rome/roman/${r.slug}`, hay: norm([r.ko, r.latin, r.role, r.slug].join(" ")) })),
];

export function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const results = useMemo(() => {
    const n = norm(q);
    if (!n) return [];
    return INDEX.filter((i) => i.hay.includes(n)).sort((a, b) => Number(norm(b.title).startsWith(n)) - Number(norm(a.title).startsWith(n)));
  }, [q]);
  return (
    <div>
      <h1 className="font-serif text-3xl text-ink">검색</h1>
      <form
        className="mt-4"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/search?q=${encodeURIComponent(q)}`);
        }}
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          aria-label="검색어"
          placeholder="제우스, Zeus, Ζεύς, Jupiter, 판도라, 패닉…"
          className="w-full rounded-full border border-line bg-card px-4 py-2 outline-none focus:border-gold"
        />
      </form>
      {q ? <p className="mt-3 text-xs text-muted">결과 {results.length}개</p> : <p className="mt-3 text-sm text-muted">한국어, 그리스어, 로마자, 라틴어 이름 모두 찾을 수 있습니다.</p>}
      <ul className="mt-3 space-y-2">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="block rounded-md border border-line bg-card p-3 hover:border-gold">
              <span className="mr-2 rounded-sm bg-marble px-1.5 py-0.5 text-[11px] text-muted">{r.kind}</span>
              <span className="font-serif text-ink">{r.title}</span>
              <p className="mt-1 line-clamp-1 text-xs text-muted">{r.sub}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
