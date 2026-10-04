"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { VisitorCounter } from "@/components/VisitorCounter";
import { NAV, SITE_NAME, SITE_NAME_EN } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const term = q.trim();
    setOpen(false);
    router.push(term ? `/search?q=${encodeURIComponent(term)}` : "/search");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${SITE_NAME} 홈`}>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-marble font-serif text-sm text-gold"
          >
            Ω
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-tight tracking-wide text-ink">{SITE_NAME}</span>
            <span className="mt-0.5 block text-[10px] leading-none tracking-[0.18em] text-gold">{SITE_NAME_EN}</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm lg:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "font-semibold text-gold" : "text-muted hover:text-ink"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <form onSubmit={submit} className="hidden md:block" role="search">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="제우스, Zeus, Ζεύς, Jupiter"
              aria-label="신화 검색"
              className="w-52 rounded-full border border-line bg-card px-3 py-1.5 text-sm outline-none placeholder:text-muted/70 focus:border-gold"
            />
          </form>
          <VisitorCounter />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-4 py-3 lg:hidden">
          <form onSubmit={submit} role="search" className="mb-3">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="한국어·그리스어·로마 이름으로 검색"
              aria-label="신화 검색"
              className="w-full rounded-full border border-line bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </form>
          <nav className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-ink hover:bg-gold/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <div className="meander opacity-60" aria-hidden />
    </header>
  );
}
