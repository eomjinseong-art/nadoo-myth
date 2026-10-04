import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PersonRefList, SourceList, Variants } from "@/components/Refs";
import { films, paintings } from "@/data/media";
import { stories, storyBySlug } from "@/data/stories";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = storyBySlug.get(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: `${s.lead} ${s.body[0] ?? ""}`, path: `/stories/${s.slug}`, type: "article" });
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = storyBySlug.get(slug);
  if (!s) notFound();
  const idx = stories.findIndex((x) => x.slug === s.slug);
  const prev = stories[idx - 1];
  const next = stories[idx + 1];
  const path = `/stories/${s.slug}`;
  const relPaintings = paintings.filter((p) => p.stories.includes(s.slug));
  const relFilms = films.filter((f) => f.stories.includes(s.slug));
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "이야기", path: "/stories" },
            { name: s.title, path },
          ]),
          articleLd({ headline: s.title, description: s.lead, path }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/stories", label: "이야기" }, { label: s.title }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-gold">
          {s.order} · {s.era}
        </p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{s.title}</h1>
        <p className="mt-3 text-lg leading-8 text-muted">{s.lead}</p>
      </header>
      <div className="prose-myth mt-6">
        {s.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <section className="mt-8 rounded-md border border-line bg-card p-4 text-sm">
        <h2 className="font-serif text-base text-ink">등장인물</h2>
        <p className="mt-2">
          <PersonRefList refs={s.characters} />
        </p>
      </section>
      <Variants items={s.variants} />
      {relPaintings.length || relFilms.length ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-ink">작품 속 이 이야기</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {relPaintings.map((p) => (
              <li key={p.slug}>
                <Link href={`/in-media#${p.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                  명화: {p.artist} 「{p.titleKo}」
                </Link>
              </li>
            ))}
            {relFilms.map((f) => (
              <li key={f.slug}>
                <Link href={`/in-media#${f.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                  {f.kind}: 「{f.titleKo}」({f.year})
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <SourceList sources={s.sources} />
      <nav className="mt-10 flex justify-between gap-4 border-t border-line pt-4 text-sm">
        {prev ? (
          <Link href={`/stories/${prev.slug}`} className="text-navy hover:text-gold">← {prev.title}</Link>
        ) : <span />}
        {next ? (
          <Link href={`/stories/${next.slug}`} className="text-right text-navy hover:text-gold">{next.title} →</Link>
        ) : <span />}
      </nav>
    </article>
  );
}
