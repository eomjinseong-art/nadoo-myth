import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-ink">길을 잃으셨네요</h1>
      <p className="mt-3 text-sm text-muted">미궁에 들어온 것 같아요. 아리아드네의 실 대신 아래 링크를 따라가세요.</p>
      <div className="mt-6 flex justify-center gap-4 text-sm">
        <Link href="/" className="text-gold underline">홈으로</Link>
        <Link href="/search" className="text-gold underline">검색하기</Link>
      </div>
    </div>
  );
}
