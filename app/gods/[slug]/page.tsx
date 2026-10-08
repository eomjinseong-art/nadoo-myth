import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Portrait } from "@/components/Portrait";
import { PersonRefList, SourceList, StoryRefList, Variants } from "@/components/Refs";
import { pairBySlug } from "@/data/gvr";
import { CATEGORY_LABEL, people, personBySlug } from "@/data/people";
import { paintings } from "@/data/media";
import { words } from "@/data/words";
import { familyTreeHref } from "@/data/family-tree";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = personBySlug.get(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.ko} (${p.rom}${p.roman ? ` · ${p.roman.split(" (")[0]}` : ""})`,
    description: `${p.ko}(${p.greek}, ${p.rom}) — ${p.role}. ${p.intro}`,
    path: `/gods/${p.slug}`,
    type: "article",
  });
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = personBySlug.get(slug);
  if (!p) notFound();
  const pair = p.compare ? pairBySlug.get(p.compare) : undefined;
  const relatedWords = words.filter((w) => w.origin.includes(p.slug));
  const relatedPaintings = paintings.filter((pt) => pt.people.includes(p.slug));
  const path = `/gods/${p.slug}`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "신과 인물", path: "/gods" },
            { name: p.ko, path },
          ]),
          articleLd({
            headline: `${p.ko} (${p.greek})`,
            description: p.intro,
            path,
            about: [p.ko, p.rom, ...(p.roman ? [p.roman] : [])],
            image: p.portrait,
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/gods", label: "신과 인물" }, { label: p.ko }]} />
      <header className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
        {p.portrait ? (
          <figure className="mx-auto w-44 shrink-0 sm:mx-0 sm:w-52">
            <div className="overflow-hidden rounded-md border border-line bg-marble">
              <Portrait
                src={p.portrait}
                alt={p.portraitAlt ?? `${p.ko} 초상`}
                sizes="(min-width: 640px) 208px, 176px"
                priority
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-[11px] leading-4 text-muted">상징을 모아 그린 초상</figcaption>
          </figure>
        ) : null}
        <div className="min-w-0">
          <p className="text-xs tracking-[0.2em] text-gold">{CATEGORY_LABEL[p.category]}</p>
          <h1 className="mt-1 font-serif text-4xl text-ink">{p.ko}</h1>
          <p className="mt-2 text-lg text-gold">
            <span lang="grc">{p.greek}</span> <span className="text-muted">· {p.rom}</span>
          </p>
          <p className="mt-3 text-base leading-8 text-ink">{p.intro}</p>
        </div>
      </header>

      <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-md border border-line bg-card p-5 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-muted">한국어 이름</dt>
        <dd>{p.ko}</dd>
        <dt className="text-muted">그리스어 이름</dt>
        <dd>
          <span lang="grc">{p.greek}</span> ({p.rom})
        </dd>
        <dt className="text-muted">로마 이름</dt>
        <dd>{p.roman ?? <span className="text-muted">따로 없음</span>}</dd>
        <dt className="text-muted">역할</dt>
        <dd>{p.role}</dd>
        <dt className="text-muted">상징물</dt>
        <dd>{p.symbols.length ? p.symbols.join(", ") : <span className="text-muted">—</span>}</dd>
        <dt className="text-muted">부모</dt>
        <dd><PersonRefList refs={p.parents} empty="없음(태초에 생겨남)" /></dd>
        <dt className="text-muted">배우자·연인</dt>
        <dd><PersonRefList refs={p.spouses} /></dd>
        <dt className="text-muted">자녀</dt>
        <dd><PersonRefList refs={p.children} /></dd>
      </dl>

      {p.roman ? (
        <aside className="mt-6 rounded-md border border-rome/30 bg-rome/5 p-4">
          <h2 className="font-serif text-base text-rome">로마에서는</h2>
          {pair ? (
            <>
              <p className="mt-1 text-sm leading-7 text-ink">
                로마에서는 <strong>{pair.romanKo}</strong>({pair.romanLatin})라고 불렀습니다. {pair.lead}
              </p>
              <Link href={`/greece-vs-rome/${pair.slug}`} className="mt-2 inline-block text-sm text-rome underline underline-offset-4">
                {pair.greekKo} vs {pair.romanKo} 비교 보기 →
              </Link>
            </>
          ) : (
            <>
              <p className="mt-1 text-sm leading-7 text-ink">
                라틴어 문헌에서는 <strong>{p.roman}</strong>(으)로 부릅니다. 로마 신들이 그리스 신화와 어떻게 합쳐졌는지는 비교 메뉴에서 볼 수 있습니다.
              </p>
              <Link href="/greece-vs-rome" className="mt-2 inline-block text-sm text-rome underline underline-offset-4">
                그리스 vs 로마 보기 →
              </Link>
            </>
          )}
        </aside>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">주요 이야기</h2>
        <div className="mt-2 text-sm">
          <StoryRefList refs={p.stories} />
        </div>
      </section>

      <Variants items={p.variants} />

      {relatedWords.length ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-ink">이 이름에서 온 말</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {relatedWords.map((w) => (
              <Link key={w.slug} href={`/words/${w.slug}`} className="rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-gold hover:text-gold">
                {w.word}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {relatedPaintings.length ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-ink">명화 속 {p.ko}</h2>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {relatedPaintings.map((pt) => (
              <li key={pt.slug}>
                <Link href={`/in-media#${pt.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                  {pt.artist} 「{pt.titleKo}」
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <SourceList sources={p.sources} />
      <p className="mt-6 text-sm">
        <Link href={familyTreeHref(p.slug)} className="text-gold">가족관계도에서 보기 →</Link>
      </p>
    </article>
  );
}
