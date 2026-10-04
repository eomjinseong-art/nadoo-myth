import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClaimList, TagLegend } from "@/components/ClaimList";
import { JsonLd } from "@/components/JsonLd";
import { godPairs, pairBySlug } from "@/data/gvr";
import { personBySlug } from "@/data/people";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return godPairs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pairBySlug.get(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.greekKo} vs ${p.romanKo}(${p.romanLatin}) 비교`,
    description: `${p.lead} 이름, 성격, 숭배 방식, 신전, 축제, 로마식 시각 차이를 그리스어·라틴어 문헌과 고고학 근거로 비교합니다.`,
    path: `/greece-vs-rome/${p.slug}`,
    type: "article",
  });
}

export default async function PairPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pairBySlug.get(slug);
  if (!p) notFound();
  const person = personBySlug.get(p.greekSlug);
  const path = `/greece-vs-rome/${p.slug}`;
  const idx = godPairs.findIndex((x) => x.slug === p.slug);
  const prev = godPairs[idx - 1];
  const next = godPairs[idx + 1];
  return (
    <article className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "그리스 vs 로마", path: "/greece-vs-rome" },
            { name: `${p.greekKo} vs ${p.romanKo}`, path },
          ]),
          articleLd({ headline: `${p.greekKo} vs ${p.romanKo}`, description: p.lead, path, about: [p.greekKo, p.romanLatin] }),
        ])}
      />
      <Breadcrumbs
        items={[{ href: "/", label: "홈" }, { href: "/greece-vs-rome", label: "그리스 vs 로마" }, { label: `${p.greekKo} vs ${p.romanKo}` }]}
      />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-gold">GREECE vs ROME</p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">
          <span className="text-navy">{p.greekKo}</span> <span className="text-muted">vs</span>{" "}
          <span className="text-rome">{p.romanKo}</span>
        </h1>
        <p className="mt-1 text-sm text-muted">
          {person ? <span lang="grc">{person.greek}</span> : null} · {p.romanLatin}
        </p>
        <p className="mt-3 text-lg leading-8 text-ink">{p.lead}</p>
      </header>
      <div className="mt-4"><TagLegend /></div>

      <div className="mt-6 overflow-x-auto rounded-md border border-line bg-card">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="bg-marble text-left text-xs">
              <th className="w-28 px-3 py-2 text-muted">항목</th>
              <th className="px-3 py-2 text-navy">그리스 · {p.greekKo}</th>
              <th className="px-3 py-2 text-rome">로마 · {p.romanKo}</th>
            </tr>
          </thead>
          <tbody>
            {p.rows.map((row) => (
              <tr key={row.label} className="border-t border-line align-top">
                <th scope="row" className="px-3 py-3 text-left font-serif text-sm text-ink">{row.label}</th>
                <td className="px-3 py-3"><ClaimList claims={row.greek} /></td>
                <td className="px-3 py-3"><ClaimList claims={row.roman} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8 rounded-md border border-rome/30 bg-rome/5 p-5">
        <h2 className="font-serif text-xl text-rome">로마는 무엇이 달랐나</h2>
        <div className="mt-3"><ClaimList claims={p.difference} /></div>
      </section>

      {p.disputed?.length ? (
        <section className="mt-6 rounded-md border border-gold/40 bg-gold/5 p-5">
          <h2 className="font-serif text-xl text-gold">학설이 갈려요</h2>
          <div className="mt-3"><ClaimList claims={p.disputed} /></div>
        </section>
      ) : null}

      <p className="mt-8 text-sm">
        {person ? (
          <Link href={`/gods/${person.slug}`} className="text-navy underline underline-offset-4 hover:text-gold">
            {person.ko} 인물 페이지 →
          </Link>
        ) : null}
        <span className="mx-2 text-line">|</span>
        <Link href="/greece-vs-rome/history" className="text-navy underline underline-offset-4 hover:text-gold">어떻게 합쳐졌을까 →</Link>
      </p>
      <nav className="mt-8 flex justify-between gap-4 border-t border-line pt-4 text-sm">
        {prev ? <Link href={`/greece-vs-rome/${prev.slug}`} className="text-navy hover:text-gold">← {prev.greekKo} vs {prev.romanKo}</Link> : <span />}
        {next ? <Link href={`/greece-vs-rome/${next.slug}`} className="text-navy hover:text-gold">{next.greekKo} vs {next.romanKo} →</Link> : <span />}
      </nav>
    </article>
  );
}
