import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FamilyTreeView } from "@/components/FamilyTreeView";
import { OtherFamilyTrees } from "@/components/SisterSites";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { DISPUTES, NAME_NOTES, TREE, relationsOf } from "@/data/family-tree";
import { personBySlug } from "@/data/people";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "헤시오도스 『신통기』를 기준으로 그린 그리스 신화 가족관계도. 제우스는 크로노스와 레아의 아들. 부모·배우자·자녀를 구분하고, 아프로디테와 헤파이스토스의 다른 전승을 표시합니다.";

export const metadata = pageMetadata({
  title: "가족관계도 · 그리스 신화 가계도",
  description,
  path: "/family-tree",
});

for (const node of TREE.nodes) {
  if (node.slug && !personBySlug.get(node.slug)) {
    throw new Error(`가족관계도 slug에 해당하는 인물 페이지가 없습니다: ${node.slug}`);
  }
}

const listed = TREE.nodes.filter((node) => node.href);

export default function FamilyTreePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "가족관계도", path: "/family-tree" },
          ]),
          itemListLd(
            "그리스 신화 가족관계도",
            "/family-tree",
            listed.map((node) => ({ name: `${node.ko} (${node.roman})`, path: node.href! })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "가족관계도" }]} />
      <PageHead
        kicker="FAMILY TREE"
        title="가족관계도"
        lead="헤시오도스 『신통기』를 기본으로, 누가 누구의 자녀인지 세대별로 그린 가계도입니다. 예를 들어 제우스는 크로노스와 레아의 아들이고, 아테나는 제우스와 메티스의 딸입니다. 칸을 누르면 부모·배우자·자녀·형제가 밝아집니다."
      />
      <FamilyTreeView />
      <OtherFamilyTrees />

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">글로 읽는 가족관계</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          그림과 같은 관계입니다. 이름을 누르면 가계도에서 그 인물로 이동합니다. 인물 페이지가 있는 이름은 따로 링크했습니다.
        </p>
        {TREE.bands.map((band) => (
          <section key={band.id} className="mt-8">
            <h3 className="font-serif text-xl" style={{ color: band.color }}>
              {band.ko} <span className="text-sm font-sans tracking-wide text-gold">{band.en}</span>
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted">{band.hint}</p>
            <ul className="mt-3 space-y-4">
              {band.nodeIds.map((id) => {
                const node = TREE.byId.get(id)!;
                const rel = relationsOf(id);
                return (
                  <li key={id} className="border-b border-line/80 pb-3 text-sm leading-7">
                    <a href={`/family-tree?focus=${node.id}`} className="font-serif text-base text-ink hover:text-gold">
                      {node.ko}
                    </a>
                    <span className="text-muted"> / {node.roman}</span>
                    {node.greek ? (
                      <span lang="grc" className="ml-2 text-gold">
                        {node.greek}
                      </span>
                    ) : null}
                    {node.href ? (
                      <Link href={node.href} className="ml-2 text-gold">
                        인물 페이지
                      </Link>
                    ) : null}
                    <span className="mt-0.5 block text-ink">{node.summary}</span>
                    {node.note ? <span className="mt-0.5 block text-xs leading-5 text-rome">다른 전승: {node.note}</span> : null}
                    <span className="mt-1 block text-xs leading-5 text-muted">
                      <Kin label="부모" people={rel.parents} />
                      <Kin label="다른 전승의 부모" people={rel.variantParents} />
                      <Kin label="배우자·연인" people={rel.spouses} />
                      <Kin label="자녀" people={rel.children} />
                      <Kin label="다른 전승의 자녀" people={rel.variantChildren} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">다른 전승</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          신화는 판본마다 부모가 다릅니다. 가계도의 실선은 『신통기』를 중심으로 한 대표 전승이고, 보라색 점선은 다른 전승입니다.
        </p>
        <ul className="mt-4 space-y-4">
          {DISPUTES.map((item) => (
            <li key={item.id} className="rounded-md border border-line bg-card p-4 text-sm leading-7">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-1">
                <span className="text-gold">대표 전승. </span>
                {item.main}
              </p>
              <p className="mt-1">
                <span className="text-rome">다른 전승. </span>
                {item.other}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-ink">이름을 읽을 때</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
          {NAME_NOTES.map((note) => (
            <li key={note.title}>
              <span className="text-ink">{note.title}. </span>
              {note.body}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Kin({ label, people }: { label: string; people: { id: string; ko: string }[] }) {
  if (!people.length) return null;
  return (
    <span className="mr-3 inline">
      {label}{" "}
      {people.map((person, index) => (
        <span key={person.id}>
          {index > 0 ? ", " : null}
          <a href={`/family-tree?focus=${person.id}`} className="text-navy underline decoration-line underline-offset-2 hover:text-gold">
            {person.ko}
          </a>
        </span>
      ))}
    </span>
  );
}
