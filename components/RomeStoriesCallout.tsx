import { ROME_STORIES_NAME, ROME_STORIES_URL } from "@/lib/site";

export function RomeStoriesCallout({ body }: { body: string }) {
  return (
    <aside className="mt-8 rounded-md border border-rome/40 bg-rome/5 p-5">
      <p className="text-xs tracking-[0.18em] text-rome">ROME STORIES</p>
      <h2 className="mt-1 font-serif text-2xl text-ink">역사 속 로마는 {ROME_STORIES_NAME}</h2>
      <p className="mt-2 text-sm leading-7 text-ink">{body}</p>
      <a
        href={ROME_STORIES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm text-rome underline underline-offset-4 hover:text-gold"
      >
        {ROME_STORIES_NAME}에서 역사 읽기 →
      </a>
    </aside>
  );
}
