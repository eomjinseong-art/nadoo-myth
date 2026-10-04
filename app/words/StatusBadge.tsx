import { WORD_STATUS_LABEL } from "@/data/words";
import type { Word } from "@/data/types";

const CLS: Record<Word["status"], string> = {
  solid: "border-navy/40 bg-navy/5 text-navy",
  indirect: "border-gold/50 bg-gold/10 text-gold",
  disputed: "border-rome/40 bg-rome/5 text-rome",
  "myth-not-origin": "border-line bg-marble text-muted",
};

export function StatusBadge({ status }: { status: Word["status"] }) {
  return (
    <span className={`inline-block shrink-0 rounded-sm border px-1.5 py-0.5 text-[11px] ${CLS[status]}`}>
      {WORD_STATUS_LABEL[status]}
    </span>
  );
}
