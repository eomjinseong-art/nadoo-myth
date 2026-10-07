import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Portrait } from "@/components/Portrait";
import { CATEGORY_LABEL, CATEGORY_ORDER, people } from "@/data/people";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "신과 인물 · 올림포스 12신부터 괴물까지",
  description: `그리스·로마 신화의 신과 인물 ${people.length}명. 올림포스 12신, 티탄, 헤라클레스·페르세우스 같은 영웅, 님프, 메두사·미노타우로스 같은 괴물의 그리스어·로마 이름, 상징, 가족관계, 원전 근거.`,
  path: "/gods",
});

export default function GodsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([{ name: "홈", path: "/" }, { name: "신과 인물", path: "/gods" }]),
          itemListLd("신과 인물", "/gods", people.map((p) => ({ name: p.ko, path: `/gods/${p.slug}` }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "신과 인물" }]} />
      <PageHead
        kicker="GODS & HEROES"
        title="신과 인물"
        lead={`모두 ${people.length}명. 이름을 누르면 그리스어 이름, 로마 이름, 상징물, 가족관계, 등장하는 이야기와 원전 근거를 볼 수 있습니다. 카드의 그림은 그 상징을 모아 그린 초상 삽화입니다.`}
      />
      <nav className="mt-6 flex flex-wrap gap-2 text-sm">
        {CATEGORY_ORDER.map((cat) => (
          <a key={cat} href={`#${cat}`} className="rounded-full border border-line bg-card px-3 py-1 hover:border-gold hover:text-gold">
            {CATEGORY_LABEL[cat]} ({people.filter((p) => p.category === cat).length})
          </a>
        ))}
      </nav>
      {CATEGORY_ORDER.map((cat) => {
        const list = people.filter((p) => p.category === cat);
        return (
          <section key={cat} id={cat} className="mt-10 scroll-mt-28">
            <h2 className="font-serif text-2xl text-ink">{CATEGORY_LABEL[cat]}</h2>
            {cat === "olympian" ? (
              <p className="mt-1 text-sm text-muted">12신 목록은 지역마다 달라 헤스티아와 디오니소스를 함께 실었습니다.</p>
            ) : null}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <Link key={p.slug} href={`/gods/${p.slug}`} className="flex gap-3 rounded-md border border-line bg-card p-3 hover:border-gold">
                  {p.portrait ? (
                    <Portrait
                      src={p.portrait}
                      alt={p.portraitAlt ?? `${p.ko} 초상`}
                      sizes="84px"
                      className="h-28 w-[5.25rem] shrink-0 rounded-md bg-marble object-cover"
                    />
                  ) : null}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="font-serif text-lg text-ink">{p.ko}</span>
                      <span className="text-sm text-gold">{p.greek}</span>
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {p.rom}
                      {p.roman ? ` · 로마: ${p.roman.split(" (")[0]}` : ""}
                    </span>
                    <span className="mt-2 line-clamp-3 block text-sm leading-6 text-ink/80">{p.role}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
