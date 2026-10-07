import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { SisterSitesFooter } from "@/components/SisterSites";
import { BRAND_LINE, NAV, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-marble/60">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs tracking-wide text-gold">{BRAND_LINE}</p>
        <div className="mt-4 max-w-3xl space-y-2">
          <p>
            나두신화의 글은 헤시오도스, 호메로스, 오비디우스, 아폴로도로스 같은 고전 원전과 공개 백과사전·학술 자료를
            참고해 우리말로 새로 쓴 것입니다. 현대 번역서의 문장을 옮기지 않았습니다. 판본마다 이야기가 다른 곳은
            &lsquo;이야기마다 달라요&rsquo;로 따로 표시합니다.
          </p>
          <p>그림은 퍼블릭 도메인 작품만 쓰고, 출처(위키미디어 공용)를 함께 적습니다. 영화 제목과 상표는 각 권리자의 것입니다.</p>
        </div>
        <SisterSitesFooter />
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-gold">
              {item.label}
            </Link>
          ))}
          <Link href="/search" className="underline decoration-line underline-offset-4 hover:text-gold">
            검색
          </Link>
          <Link href="/sources" className="underline decoration-line underline-offset-4 hover:text-gold">
            원전과 기준
          </Link>
        </nav>
      </div>
    </footer>
  );
}
