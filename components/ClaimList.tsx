import { SOURCE_TAG_LABEL, type Claim, type SourceTag } from "@/data/gvr-types";

const TAG_CLASS: Record<SourceTag, string> = {
  greek: "border-navy/40 bg-navy/5 text-navy",
  roman: "border-rome/40 bg-rome/5 text-rome",
  arch: "border-gold/50 bg-gold/10 text-gold",
  modern: "border-line bg-marble text-muted",
};

export function SourceTagBadge({ tag }: { tag: SourceTag }) {
  return (
    <span className={`inline-block shrink-0 rounded-sm border px-1.5 py-0.5 text-[10px] font-medium tracking-wide ${TAG_CLASS[tag]}`}>
      {SOURCE_TAG_LABEL[tag]}
    </span>
  );
}

export function ClaimList({ claims }: { claims: Claim[] }) {
  return (
    <ul className="space-y-2">
      {claims.map((cl, i) => (
        <li key={i} className="text-sm leading-7 text-ink">
          <SourceTagBadge tag={cl.tag} /> <span>{cl.t}</span>
          {cl.ref ? <span className="text-xs text-muted"> — {cl.ref}</span> : null}
        </li>
      ))}
    </ul>
  );
}

export function TagLegend() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
      <span>출처 표시:</span>
      {(Object.keys(SOURCE_TAG_LABEL) as SourceTag[]).map((t) => (
        <SourceTagBadge key={t} tag={t} />
      ))}
      <span className="w-full sm:w-auto">
        그리스어 문헌에는 로마에 대해 그리스어로 쓴 폴리비오스·플루타르코스·디오니시오스도 포함됩니다.
      </span>
    </div>
  );
}
