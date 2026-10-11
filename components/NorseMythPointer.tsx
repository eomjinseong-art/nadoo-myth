import { VIKING_MYTH_URL, VIKING_NAME } from "@/lib/site";

/** 이 사이트는 그리스·로마 신화만 다룹니다. 오딘과 토르는 자매 사이트로 보냅니다. */
export function NorseMythPointer({ className = "mt-8" }: { className?: string }) {
  return (
    <aside className={`${className} rounded-md border border-line bg-card p-4`}>
      <p className="text-sm leading-7 text-ink">
        <span className="font-serif text-ink">북유럽 신화는 {VIKING_NAME}에서</span>
        <span className="ml-1 text-[10px] tracking-wide text-muted">Norse myth</span>
        <br />
        오딘·토르·로키와 라그나로크는 그리스·로마 신화가 아니라서 이 사이트에 넣지 않았습니다. 바이킹 시대의 신앙과
        사가는{" "}
        <a
          href={VIKING_MYTH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rome underline underline-offset-2 hover:text-gold"
        >
          {VIKING_NAME}의 북유럽 신화
          <span className="sr-only"> (새 창)</span>
        </a>
        에서 이어 읽습니다.
      </p>
    </aside>
  );
}
