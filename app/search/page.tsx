import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import { SearchClient } from "./SearchClient";

export const metadata = {
  ...pageMetadata({ title: "검색", description: "나두신화에서 신과 인물, 이야기, 단어, 그리스·로마 비교를 한국어·그리스어·로마 이름으로 검색합니다.", path: "/search" }),
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Suspense fallback={<p className="text-sm text-muted">불러오는 중…</p>}>
        <SearchClient />
      </Suspense>
    </div>
  );
}
