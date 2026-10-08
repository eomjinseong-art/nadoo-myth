import type { ElsewhereLink } from "@/data/types";
import { linkCheckAllows404 } from "@/lib/site";

export function ElsewhereBox({ links }: { links?: ElsewhereLink[] }) {
  if (!links?.length) return null;
  return (
    <aside className="mt-8 rounded-md border border-line bg-card p-4" aria-label="다른 사이트에서 더 보기">
      <h2 className="font-serif text-base text-ink">
        다른 사이트에서 더 보기{" "}
        <span className="text-xs font-sans tracking-wide text-gold">More on sister sites</span>
      </h2>
      <ul className="mt-2 space-y-1.5 text-sm">
        {links.map((link) => (
          <li key={link.href} className="min-w-0">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...(linkCheckAllows404(link.href) ? { "data-link-check-allow-404": "true" } : {})}
              className="break-words text-navy underline decoration-line underline-offset-4 hover:text-gold"
            >
              {link.label}
              <span className="sr-only"> (새 창)</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
