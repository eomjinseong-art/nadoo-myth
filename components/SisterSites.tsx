import type { ReactNode } from "react";
import { ROME_STORIES_URL, SISTER_GROUP_LABEL, SISTER_SITES } from "@/lib/site";

function SisterAnchor({
  href,
  name,
  className,
  children,
}: {
  href: string;
  name: string;
  className: string;
  children?: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children ?? name}
      <span className="sr-only"> (새 창)</span>
    </a>
  );
}

export function SisterSitesHeader() {
  return (
    <nav aria-label={SISTER_GROUP_LABEL} className="border-t border-line/80 bg-marble/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-1.5 text-xs">
        <span className="mr-1 font-serif tracking-wide text-gold">{SISTER_GROUP_LABEL}</span>
        {SISTER_SITES.map((site, index) => (
          <span key={site.href} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden className="text-muted/40">
                ·
              </span>
            ) : null}
            <SisterAnchor
              href={site.href}
              name={site.name}
              className={
                site.href === ROME_STORIES_URL ? "text-rome hover:text-gold" : "text-ink hover:text-gold"
              }
            />
          </span>
        ))}
      </div>
    </nav>
  );
}

export function SisterSitesFooter() {
  return (
    <nav aria-label={SISTER_GROUP_LABEL} className="mt-4">
      <p className="font-serif text-xs tracking-wide text-gold">{SISTER_GROUP_LABEL}</p>
      <ul className="mt-1 space-y-1 text-xs leading-6">
        {SISTER_SITES.map((site) => (
          <li key={site.href}>
            <SisterAnchor
              href={site.href}
              name={site.name}
              className={
                site.href === ROME_STORIES_URL
                  ? "text-rome underline decoration-line underline-offset-4 hover:text-gold"
                  : "text-ink underline decoration-line underline-offset-4 hover:text-gold"
              }
            />
            <span className="text-muted"> — {site.note}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SisterSitesHome() {
  return (
    <section className="mt-8 rounded-lg border border-line bg-card p-5" aria-label={SISTER_GROUP_LABEL}>
      <p className="font-serif text-xs tracking-[0.18em] text-gold">{SISTER_GROUP_LABEL}</p>
      <h2 className="mt-1 font-serif text-xl text-ink">신화 옆의 역사</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        신화 본문은 나두신화에 두고, 시대와 전쟁은 같은 나두의 역사 사이트에서 읽습니다.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {SISTER_SITES.map((site) => {
          const rome = site.href === ROME_STORIES_URL;
          return (
            <li key={site.href}>
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block h-full rounded-md border bg-bg/40 p-4 transition hover:shadow-sm ${
                  rome ? "border-rome/40 hover:border-rome" : "border-line hover:border-gold"
                }`}
              >
                <span className={`font-serif text-lg ${rome ? "text-rome" : "text-ink group-hover:text-gold"}`}>
                  {site.name}
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">{site.blurb}</span>
                <span className="sr-only"> (새 창)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
