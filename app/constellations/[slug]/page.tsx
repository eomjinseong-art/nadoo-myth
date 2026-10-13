import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { StarChart } from "@/components/StarChart";
import { PersonRefList } from "@/components/Refs";
import { constellationBySlug, constellations } from "@/data/constellations";
import { episodeBySlug } from "@/data/webtoon";
import { getChart } from "@/lib/starchart/chart";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export function generateStaticParams() {
  return constellations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = constellationBySlug.get(slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.ko} 성도`,
    description: `${item.ko}(${item.latin})의 별 위치와 막대 그림, 이름의 유래, 한국에서 찾는 법. ${item.why}`,
    path: `/constellations/${item.slug}`,
    type: "article",
  });
}

export default async function ConstellationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = constellationBySlug.get(slug);
  if (!item) notFound();
  const chart = getChart(item);
  const webtoon = item.webtoonSlug ? episodeBySlug(item.webtoonSlug) : undefined;
  const index = constellations.findIndex((entry) => entry.slug === item.slug);
  const prev = constellations[(index - 1 + constellations.length) % constellations.length];
  const next = constellations[(index + 1) % constellations.length];
  const path = `/constellations/${item.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "작품 속 신화", path: "/in-media" },
            { name: "별자리", path: "/constellations" },
            { name: item.ko, path },
          ]),
          articleLd({ headline: `${item.ko} 성도`, description: item.why, path }),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/in-media", label: "작품 속 신화" },
          { href: "/constellations", label: "별자리" },
          { label: item.ko },
        ]}
      />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-gold">{item.latin.toUpperCase()}</p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{item.ko}</h1>
        <p className="mt-2 text-sm text-muted">
          {item.latin} · {item.season}
        </p>
        <p className="mt-3 text-base leading-8 text-ink">{item.story}</p>
      </header>
      <StarChart chart={chart} names={item.labels.map(({ bayer, ko, latin }) => ({ bayer, ko, latin }))} />
      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">왜 이 이름일까?</h2>
        <p className="mt-2 text-sm leading-7 text-ink">{item.why}</p>
        <div className="mt-3 flex flex-col gap-1 text-sm">
          {item.storyLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
              이야기: {link.title}
            </Link>
          ))}
          {webtoon ? (
            <Link href={`/webtoon/${webtoon.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
              웹툰: {webtoon.title}
            </Link>
          ) : null}
          <Link href="/constellations/sky" className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
            계절별 하늘 지도
          </Link>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">찾는 법</h2>
        <p className="mt-1 text-xs text-muted">한국 중부(북위 약 37°, 서울 기준)에서 저녁 9시쯤. 도시 불빛에서는 3등보다 어두운 별이 잘 안 보입니다.</p>
        <p className="mt-2 text-sm leading-7 text-ink">{item.finder}</p>
      </section>
      <section className="mt-8 rounded-md border border-line bg-card p-4 text-sm">
        <p>
          <span className="text-muted">인물 </span>
          <PersonRefList refs={item.people} />
        </p>
        <p className="mt-2 text-xs text-muted">출처: {item.source}</p>
        <p className="mt-2 text-xs text-muted">
          별의 위치는 J2000 목록입니다.{" "}
          <Link href="/sources" className="underline decoration-line underline-offset-4 hover:text-gold">
            성도 자료와 라이선스
          </Link>
        </p>
      </section>
      <nav className="mt-8 flex justify-between gap-4 text-sm">
        <Link href={`/constellations/${prev.slug}`} className="text-navy hover:text-gold">
          ← {prev.ko}
        </Link>
        <Link href={`/constellations/${next.slug}`} className="text-right text-navy hover:text-gold">
          {next.ko} →
        </Link>
      </nav>
      <CoupangCard />
    </article>
  );
}
