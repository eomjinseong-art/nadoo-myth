import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClaimList, TagLegend } from "@/components/ClaimList";
import { JsonLd } from "@/components/JsonLd";
import { romanBySlug, romanDeities } from "@/data/gvr";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return romanDeities.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = romanBySlug.get(slug);
  if (!r) return {};
  return pageMetadata({
    title: `${r.ko}(${r.latin}) · 로마 고유의 신`,
    description: `${r.role}. ${r.lead}`,
    path: `/greece-vs-rome/roman/${r.slug}`,
    type: "article",
  });
}

export default async function RomanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = romanBySlug.get(slug);
  if (!r) notFound();
  const path = `/greece-vs-rome/roman/${r.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "그리스 vs 로마", path: "/greece-vs-rome" },
            { name: r.ko, path },
          ]),
          articleLd({ headline: `${r.ko} (${r.latin})`, description: r.lead, path, about: [r.latin] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/greece-vs-rome", label: "그리스 vs 로마" }, { label: r.ko }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-rome">로마 고유의 신</p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{r.ko}</h1>
        <p className="mt-1 text-rome">{r.latin}</p>
        <p className="mt-2 text-sm text-muted">{r.role}</p>
        <p className="mt-3 text-lg leading-8 text-ink">{r.lead}</p>
      </header>
      <div className="mt-4"><TagLegend /></div>
      <section className="mt-6 rounded-md border border-line bg-card p-5">
        <ClaimList claims={r.claims} />
      </section>
      {r.festival ? (
        <section className="mt-6 rounded-md border border-rome/30 bg-rome/5 p-4 text-sm leading-7">
          <h2 className="font-serif text-base text-rome">축제</h2>
          <p className="mt-1">{r.festival}</p>
        </section>
      ) : null}
      {r.greekNote?.length ? (
        <section className="mt-6 rounded-md border border-navy/30 bg-navy/5 p-4">
          <h2 className="font-serif text-base text-navy">그리스와 비교하면</h2>
          <div className="mt-2"><ClaimList claims={r.greekNote} /></div>
        </section>
      ) : null}
      {r.disputed?.length ? (
        <section className="mt-6 rounded-md border border-gold/40 bg-gold/5 p-4">
          <h2 className="font-serif text-base text-gold">학설이 갈려요</h2>
          <div className="mt-2"><ClaimList claims={r.disputed} /></div>
        </section>
      ) : null}
      <nav className="mt-8 flex flex-wrap gap-2 border-t border-line pt-4 text-sm">
        {romanDeities.filter((x) => x.slug !== r.slug).map((x) => (
          <Link key={x.slug} href={`/greece-vs-rome/roman/${x.slug}`} className="rounded-full border border-line bg-card px-3 py-1 hover:border-rome hover:text-rome">
            {x.ko}
          </Link>
        ))}
      </nav>
    </article>
  );
}
