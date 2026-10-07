import { ROME_STORIES_NAME, ROME_STORIES_URL, SISTER_GROUP_LABEL, SISTER_SITES } from "@/lib/site";

export function RomeStoriesCallout({ body }: { body: string }) {
  return (
    <aside className="mt-8 rounded-md border border-line bg-card p-5">
      <p className="text-xs tracking-[0.18em] text-gold">{SISTER_GROUP_LABEL}</p>
      <h2 className="mt-1 font-serif text-2xl text-ink">역사 속 로마는 {ROME_STORIES_NAME}</h2>
      <p className="mt-2 text-sm leading-7 text-ink">{body}</p>
      <nav aria-label={SISTER_GROUP_LABEL} className="mt-4 flex flex-wrap gap-2">
        {SISTER_SITES.map((site) => {
          const rome = site.href === ROME_STORIES_URL;
          return (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                rome
                  ? "rounded-full border border-rome/40 px-3 py-1 text-sm text-rome hover:bg-rome/5"
                  : "rounded-full border border-line px-3 py-1 text-sm text-ink hover:border-gold hover:text-gold"
              }
            >
              {rome ? `${site.name}에서 역사 읽기 →` : `${site.name} →`}
              <span className="sr-only"> (새 창)</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
