import type { ReactNode } from "react";
import {
  linkCheckAllows404,
  OTHER_FAMILY_TREES,
  OTHER_SITE_FILMS,
  ROME_STORIES_URL,
  SISTER_GROUP_LABEL,
  SISTER_SITES,
} from "@/lib/site";

function SisterAnchor({
  href,
  name,
  en,
  className,
  children,
}: {
  href: string;
  name: string;
  en?: string;
  className: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...(linkCheckAllows404(href) ? { "data-link-check-allow-404": "true" } : {})}
    >
      {children ?? (
        <>
          {name}
          {en ? <span className="ml-1 text-[10px] font-sans tracking-normal text-muted">{en}</span> : null}
        </>
      )}
      <span className="sr-only"> (새 창)</span>
    </a>
  );
}

export function SisterSitesHeader() {
  return (
    <nav aria-label={SISTER_GROUP_LABEL} className="max-w-full overflow-x-auto border-t border-line/80 bg-marble/70">
      <div className="mx-auto flex w-max items-center gap-x-2 whitespace-nowrap px-4 py-1.5 text-xs">
        <span className="mr-1 shrink-0 font-serif tracking-wide text-gold">{SISTER_GROUP_LABEL}</span>
        {SISTER_SITES.map((site, index) => (
          <span key={site.href} className="inline-flex shrink-0 items-center gap-2">
            {index > 0 ? (
              <span aria-hidden className="text-muted/40">
                ·
              </span>
            ) : null}
            <SisterAnchor
              href={site.href}
              name={site.name}
              en={site.en}
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
          <li key={site.href} className="break-words">
            <SisterAnchor
              href={site.href}
              name={site.name}
              en={site.en}
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
      <OtherFamilyTrees />
      <OtherSiteFilms />
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
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SISTER_SITES.map((site) => {
          const rome = site.href === ROME_STORIES_URL;
          return (
            <li key={site.href} className="min-w-0">
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                {...(linkCheckAllows404(site.href) ? { "data-link-check-allow-404": "true" } : {})}
                className={`group block h-full rounded-md border bg-bg/40 p-4 transition hover:shadow-sm ${
                  rome ? "border-rome/40 hover:border-rome" : "border-line hover:border-gold"
                }`}
              >
                <span className={`font-serif text-lg ${rome ? "text-rome" : "text-ink group-hover:text-gold"}`}>
                  {site.name}
                </span>
                <span className="mt-0.5 block text-[10px] tracking-wide text-gold">{site.en}</span>
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

function SisterLinkRow({
  title,
  titleEn,
  links,
}: {
  title: string;
  titleEn: string;
  links: readonly { name: string; en: string; href: string }[];
}) {
  return (
    <nav aria-label={title} className="mt-4 max-w-full">
      <p className="font-serif text-xs tracking-wide text-gold">
        {title} <span className="font-sans tracking-normal text-muted">{titleEn}</span>
      </p>
      <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs">
        {links.map((site) => (
          <li key={site.href} className="max-w-full">
            <SisterAnchor
              href={site.href}
              name={site.name}
              en={site.en}
              className="break-words text-ink underline decoration-line underline-offset-4 hover:text-gold"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function OtherFamilyTrees() {
  return <SisterLinkRow title="다른 가족관계도" titleEn="Other family trees" links={OTHER_FAMILY_TREES} />;
}

export function OtherSiteFilms() {
  return <SisterLinkRow title="다른 사이트의 영화" titleEn="Films on sister sites" links={OTHER_SITE_FILMS} />;
}
