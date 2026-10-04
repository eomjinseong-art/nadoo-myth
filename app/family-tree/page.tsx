import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { personBySlug } from "@/data/people";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const lead =
  "헤시오도스 『신통기』를 중심으로 카오스에서 올림포스 신들과 영웅까지 이어지는 가계도입니다. 이름을 누르면 인물 페이지로 이동합니다. 판본에 따라 부모가 다른 경우가 많아 대표적인 계보만 선으로 이었습니다.";

export const metadata = pageMetadata({ title: "족보 · 그리스 신화 신들의 가계도", description: lead, path: "/family-tree" });

type Node = { id: string; label: string; sub?: string; href?: string; row: number; x: number; y: number };

const ROWS: string[][] = [
  ["chaos"],
  ["tartaros", "gaia", "eros", "nyx"],
  ["typhon", "ouranos", "hypnos", "nemesis"],
  ["kerberos", "hydra", "chimaira", "okeanos", "mnemosyne", "themis", "@히페리온", "@코이오스", "iapetos", "kronos", "rhea", "aphrodite"],
  ["metis", "helios", "leto", "atlas", "prometheus", "epimetheus", "pandora", "cheiron", "hestia", "demeter", "hades", "hera", "zeus", "poseidon"],
  ["kirke", "muses", "athena", "apollo", "artemis", "hermes", "persephone", "ares", "hephaistos", "dionysos", "polyphemos", "pegasos", "aineias"],
  ["@데우칼리온", "@피라", "orpheus", "asklepios", "pan", "perseus", "herakles", "helene", "theseus"],
];

const EXTRA_PARENTS: Record<string, string[]> = {
  "@히페리온": ["ouranos", "gaia"],
  "@코이오스": ["ouranos", "gaia"],
  helios: ["@히페리온"],
  leto: ["@코이오스"],
  "@데우칼리온": ["prometheus"],
  "@피라": ["epimetheus", "pandora"],
};
const DASHED_FROM_CHAOS = new Set(["tartaros", "gaia", "eros"]);

const W = 1440;
const NODE_W = 86;
const NODE_H = 40;
const ROW_H = 120;
const TOP = 30;

function build() {
  const nodes = new Map<string, Node>();
  ROWS.forEach((row, r) => {
    const gap = W / row.length;
    row.forEach((id, i) => {
      const p = id.startsWith("@") ? undefined : personBySlug.get(id);
      nodes.set(id, {
        id,
        label: p ? p.ko : id.slice(1),
        sub: p ? p.rom : "티탄",
        href: p ? `/gods/${p.slug}` : undefined,
        row: r,
        x: gap * i + gap / 2,
        y: TOP + r * ROW_H,
      });
    });
  });
  if (nodes.get("@데우칼리온")) nodes.get("@데우칼리온")!.sub = "인간";
  if (nodes.get("@피라")) nodes.get("@피라")!.sub = "인간";
  const edges: { from: Node; to: Node; dashed: boolean }[] = [];
  for (const child of nodes.values()) {
    const p = child.href ? personBySlug.get(child.id) : undefined;
    const parents = [...(p?.parents ?? []), ...(EXTRA_PARENTS[child.id] ?? [])];
    if (DASHED_FROM_CHAOS.has(child.id)) parents.push("chaos");
    for (const pid of new Set(parents)) {
      const parent = nodes.get(pid);
      if (!parent || parent.row >= child.row) continue;
      edges.push({ from: parent, to: child, dashed: DASHED_FROM_CHAOS.has(child.id) && pid === "chaos" });
    }
  }
  return { nodes: [...nodes.values()], edges };
}

export default function FamilyTreePage() {
  const { nodes, edges } = build();
  const H = TOP + ROWS.length * ROW_H;
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "족보", path: "/family-tree" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "족보" }]} />
      <PageHead kicker="FAMILY TREE" title="족보" lead={lead} />
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
        <li>── 부모와 자식</li>
        <li>- - - 카오스 다음에 생겨남(헤시오도스는 &lsquo;낳았다&rsquo;고 하지 않음)</li>
        <li>회색 칸: 이 사이트에 따로 페이지가 없는 인물</li>
      </ul>
      <div className="mt-4 overflow-x-auto rounded-md border border-line bg-card">
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label="그리스 신화 가계도" className="block">
          <g fill="none" stroke="#c9a54e" strokeOpacity="0.55" strokeWidth="1.2">
            {edges.map((e, i) => {
              const x1 = e.from.x;
              const y1 = e.from.y + NODE_H;
              const x2 = e.to.x;
              const y2 = e.to.y;
              const my = (y1 + y2) / 2;
              return (
                <path key={i} d={`M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`} strokeDasharray={e.dashed ? "5 4" : undefined} />
              );
            })}
          </g>
          {nodes.map((n) => {
            const box = (
              <g>
                <rect
                  x={n.x - NODE_W / 2}
                  y={n.y}
                  width={NODE_W}
                  height={NODE_H}
                  rx={6}
                  fill={n.href ? "#fffdf7" : "#efece4"}
                  stroke={n.href ? "#9a7624" : "#cfc8b8"}
                />
                <text x={n.x} y={n.y + 17} textAnchor="middle" fontSize="13" fill="#2a2620" fontFamily="serif">
                  {n.label}
                </text>
                <text x={n.x} y={n.y + 32} textAnchor="middle" fontSize="9.5" fill="#7a7266">
                  {n.sub}
                </text>
              </g>
            );
            return n.href ? (
              <a key={n.id} href={n.href} aria-label={`${n.label} 페이지`}>
                {box}
              </a>
            ) : (
              <g key={n.id}>{box}</g>
            );
          })}
        </svg>
      </div>
      <p className="mt-2 text-xs text-muted">화면이 좁으면 가계도를 옆으로 밀어 보세요.</p>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-ink">글로 보는 족보</h2>
        <ol className="mt-3 space-y-3 text-sm leading-7">
          {ROWS.map((row, r) => (
            <li key={r}>
              <span className="mr-2 text-xs text-gold">{r + 1}세대</span>
              {row.map((id, i) => {
                const p = id.startsWith("@") ? undefined : personBySlug.get(id);
                return (
                  <span key={id}>
                    {i > 0 ? <span className="text-muted">, </span> : null}
                    {p ? (
                      <Link href={`/gods/${p.slug}`} className="text-navy underline decoration-line underline-offset-4 hover:text-gold">
                        {p.ko}
                      </Link>
                    ) : (
                      <span>{id.slice(1)}</span>
                    )}
                  </span>
                );
              })}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-6 text-muted">
          세대 구분은 보기 쉽게 정리한 것입니다. 예를 들어 아프로디테는 헤시오도스에서는 우라노스에게서, 호메로스에서는 제우스와 디오네의 딸로 나옵니다. 에로스도 태초의 신으로 보는 전승과 아프로디테의 아들로 보는 전승이 함께 있습니다.
        </p>
      </section>
    </div>
  );
}
