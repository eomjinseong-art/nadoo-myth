import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ElsewhereBox } from "@/components/ElsewhereBox";
import { JsonLd } from "@/components/JsonLd";
import { OtherSiteFilms } from "@/components/SisterSites";
import { PageHead } from "@/components/PageHead";
import { PersonRefList, StoryRefList } from "@/components/Refs";
import { constellations, films, paintings } from "@/data/media";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MOVIE_CHECKLIST_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "작품 속 신화 · 영화, 명화, 별자리",
  description: "퍼시 잭슨, 트로이, 타이탄, 헤라클레스, 원더우먼 같은 영화와 보티첼리 「비너스의 탄생」, 고야 「사투르누스」 같은 명화, 페르세우스자리·안드로메다자리 등 별자리 속 그리스 로마 신화를 원전과 비교합니다.",
  path: "/in-media",
});

export default function InMediaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "작품 속 신화", path: "/in-media" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "작품 속 신화" }]} />
      <PageHead kicker="IN MEDIA" title="작품 속 신화" lead="영화와 드라마, 명화, 밤하늘의 별자리에 신화가 어떻게 담겼는지, 원전과 무엇이 다른지 정리했습니다." />
      <nav className="mt-4 flex gap-2 text-sm">
        <a href="#films" className="rounded-full border border-line bg-card px-3 py-1 hover:border-gold">영화·드라마 ({films.length})</a>
        <a href="#paintings" className="rounded-full border border-line bg-card px-3 py-1 hover:border-gold">명화 ({paintings.length})</a>
        <a href="#stars" className="rounded-full border border-line bg-card px-3 py-1 hover:border-gold">별자리 ({constellations.length})</a>
      </nav>

      <section id="films" className="mt-10 scroll-mt-28">
        <h2 className="font-serif text-2xl text-ink">영화 · 드라마</h2>
        <div className="mt-4 space-y-4">
          {films.map((f) => (
            <div key={f.slug} id={f.slug} className="scroll-mt-28 rounded-md border border-line bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-lg text-ink">{f.titleKo}</h3>
                <span className="text-xs text-muted">{f.titleEn} · {f.year} · {f.kind}</span>
              </div>
              <p className="text-xs text-muted">{f.maker}</p>
              <p className="mt-2 text-sm leading-7 text-ink">{f.myth}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{f.note}</p>
              <p className="mt-2 text-xs text-muted">
                인물: <PersonRefList refs={f.people} />
              </p>
              {f.checklist ? (
                <a
                  href={MOVIE_CHECKLIST_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block rounded-full border border-gold/50 bg-gold/5 px-3 py-1 text-xs text-gold hover:bg-gold/10"
                >
                  {f.checklist} 출연작 체크리스트 보기 ↗
                </a>
              ) : null}
              {f.elsewhere?.length ? <ElsewhereBox links={f.elsewhere} /> : null}
            </div>
          ))}
        </div>
        <OtherSiteFilms />
      </section>

      <section id="paintings" className="mt-14 scroll-mt-28">
        <h2 className="font-serif text-2xl text-ink">명화</h2>
        <p className="mt-1 text-xs text-muted">이미지는 모두 위키미디어 공용의 퍼블릭 도메인(또는 CC0) 파일입니다. 각 그림 아래 원본 링크를 달았습니다.</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {paintings.map((p) => (
            <figure key={p.slug} id={p.slug} className="scroll-mt-28 overflow-hidden rounded-md border border-line bg-card">
              <Image
                src={`/paintings/${p.slug}.webp`}
                alt={`${p.artist} 「${p.titleKo}」`}
                width={p.w}
                height={p.h}
                sizes="(min-width: 640px) 480px, 100vw"
                className="h-72 w-full bg-marble object-contain"
              />
              <figcaption className="p-4">
                <h3 className="font-serif text-lg text-ink">{p.titleKo}</h3>
                <p className="text-xs text-muted">
                  {p.artist} · {p.year}
                  {p.place ? ` · ${p.place}` : ""}
                </p>
                <p className="text-xs italic text-muted">{p.titleOrig}</p>
                <p className="mt-2 text-sm leading-7 text-ink">{p.desc}</p>
                {p.attributionNote ? <p className="mt-1 text-xs text-rome">{p.attributionNote}</p> : null}
                <div className="mt-2 text-xs text-muted">
                  인물: <PersonRefList refs={p.people} />
                </div>
                {p.stories.length ? (
                  <div className="mt-1 text-xs"><StoryRefList refs={p.stories} /></div>
                ) : null}
                <a href={p.commons} target="_blank" rel="noopener" className="mt-2 inline-block text-xs text-gold underline underline-offset-4">
                  위키미디어 공용 원본 · {p.license} ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="stars" className="mt-14 scroll-mt-28">
        <h2 className="font-serif text-2xl text-ink">별자리</h2>
        <p className="mt-1 text-xs text-muted">별자리 이야기는 대부분 헬레니즘 시대 이후 정리된 것이라 판본 차이가 큽니다.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {constellations.map((s) => (
            <div key={s.latin} className="rounded-md border border-line bg-card p-4">
              <h3 className="font-serif text-lg text-navy">{s.ko} <span className="text-xs text-muted">{s.latin}</span></h3>
              <p className="mt-1 text-sm leading-7 text-ink">{s.story}</p>
              <p className="mt-1 text-xs text-muted">인물: <PersonRefList refs={s.people} /></p>
              <p className="mt-1 text-xs text-muted">출처: {s.source}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
