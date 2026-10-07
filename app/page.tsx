import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Portrait } from "@/components/Portrait";
import { godPairs } from "@/data/gvr";
import { people } from "@/data/people";
import { stories } from "@/data/stories";
import { words } from "@/data/words";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({ title: "홈", description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

const MENUS = [
  { href: "/gods", title: "신과 인물", desc: "올림포스 신, 티탄, 영웅, 님프, 괴물. 그리스어·로마 이름과 가족관계까지." },
  { href: "/stories", title: "이야기", desc: "카오스에서 오디세이아까지, 대략의 시간 순서로 읽는 신화." },
  { href: "/family-tree", title: "족보", desc: "카오스부터 영웅까지 한눈에 보는 신들의 가계도." },
  { href: "/words", title: "신화 속 단어", desc: "나르시시즘, 패닉, 나이키, 시리얼… 어원을 정확하게." },
  { href: "/in-media", title: "작품 속 신화", desc: "영화, 명화, 별자리 속에 숨은 신화." },
  { href: "/greece-vs-rome", title: "그리스 vs 로마", desc: "제우스와 유피테르는 같은 신일까? 숭배와 신전, 축제로 비교." },
];

export default function Home() {
  const olympians = people.filter((p) => p.category === "olympian");
  const counts = { people: people.length, stories: stories.length, words: words.length, pairs: godPairs.length };
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-gold">NADOO MYTHOLOGY</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">나두신화</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-gold">{BRAND_LINE}</p>
        <form action="/search" className="mx-auto mt-6 flex max-w-md gap-2" role="search">
          <input
            name="q"
            type="search"
            placeholder="이름 검색: 아테나, Athena, Ἀθηνᾶ, Minerva"
            aria-label="신화 검색"
            className="min-w-0 flex-1 rounded-full border border-line bg-card px-4 py-2 text-sm outline-none focus:border-gold"
          />
          <button className="rounded-full bg-navy px-4 py-2 text-sm text-white hover:bg-gold">검색</button>
        </form>
        <p className="mt-4 text-xs text-muted">
          인물 {counts.people} · 이야기 {counts.stories} · 단어 {counts.words} · 그리스·로마 비교 {counts.pairs}쌍
        </p>
      </section>

      <div className="meander opacity-50" aria-hidden />

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MENUS.map((m, i) => (
          <Link key={m.href} href={m.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-gold hover:shadow-sm">
            <p className="font-serif text-xs text-gold">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-1 font-serif text-xl text-ink group-hover:text-gold">{m.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{m.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-ink">올림포스의 신들</h2>
        <p className="mt-1 text-sm text-muted">초상 삽화 · 한국어 이름 · 그리스어 · 로마 이름</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {olympians.map((p) => (
            <Link key={p.slug} href={`/gods/${p.slug}`} className="overflow-hidden rounded-md border border-line bg-card hover:border-gold">
              {p.portrait ? (
                <Portrait
                  src={p.portrait}
                  alt={p.portraitAlt ?? `${p.ko} 초상`}
                  sizes="(min-width: 1024px) 180px, 45vw"
                  className="aspect-[3/4] w-full bg-marble object-cover"
                />
              ) : null}
              <span className="block p-3">
                <span className="block font-serif text-lg text-ink">{p.ko}</span>
                <span className="block text-sm text-gold">{p.greek}</span>
                <span className="mt-1 block text-xs text-muted">{p.roman?.split(" (")[0] ?? p.rom}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">처음 읽는다면</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {stories.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/stories/${s.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                  {s.order}. {s.title}
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/stories" className="mt-3 inline-block text-sm text-gold">이야기 전체 보기 →</Link>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">이 단어도 신화에서?</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {words.slice(0, 16).map((w) => (
              <Link key={w.slug} href={`/words/${w.slug}`} className="rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-gold hover:text-gold">
                {w.word}
              </Link>
            ))}
          </div>
          <Link href="/words" className="mt-3 inline-block text-sm text-gold">단어 전체 보기 →</Link>
        </div>
      </section>
    </div>
  );
}
