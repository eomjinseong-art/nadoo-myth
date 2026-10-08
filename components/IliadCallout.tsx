import { ILIAD_NAME, ILIAD_URL, linkCheckAllows404 } from "@/lib/site";

/** Prominent pointer from the Trojan War story to the Iliad site. */
export function IliadCallout() {
  return (
    <aside className="mt-6 rounded-md border border-gold/60 bg-gold/10 p-5">
      <p className="text-xs tracking-[0.18em] text-gold">THE ILIAD</p>
      <p className="mt-2 font-serif text-xl leading-8 text-ink sm:text-2xl">
        일리아스는 트로이 전쟁 10년째의 51일만 다뤄요
      </p>
      <a
        href={ILIAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        {...(linkCheckAllows404(ILIAD_URL) ? { "data-link-check-allow-404": "true" } : {})}
        className="mt-3 inline-flex max-w-full items-center rounded-full border border-gold bg-card px-4 py-2 text-sm text-ink hover:text-gold"
      >
        {ILIAD_NAME}에서 자세히 →
        <span className="sr-only"> (새 창)</span>
      </a>
    </aside>
  );
}
