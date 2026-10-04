import { ImageResponse } from "next/og";

export const alt = "나두신화 · 그리스 로마 신화";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const title = "나두신화";
  const sub = "그리스·로마 신화를 한국어로 쉽고 정확하게";
  const font = await loadFont(title + sub + "신과 인물 이야기 족보 단어 작품 그리스 vs 로마 ·");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#faf7f0",
          color: "#2b2620",
          padding: "72px",
          borderTop: "18px solid #9a7624",
          borderBottom: "18px solid #9a7624",
          fontFamily: font ? "NotoSerifKR" : "serif",
        }}
      >
        <div style={{ color: "#9a7624", fontSize: 30, letterSpacing: 8 }}>NADOO MYTHOLOGY</div>
        <div style={{ marginTop: 20, fontSize: 96 }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 36, color: "#6f665b" }}>{sub}</div>
        <div style={{ marginTop: 36, fontSize: 28, color: "#1f3b57" }}>신과 인물 · 이야기 · 족보 · 단어 · 작품 · 그리스 vs 로마</div>
      </div>
    ),
    { ...size, ...(font ? { fonts: [{ name: "NotoSerifKR", data: font, weight: 700 as const, style: "normal" as const }] } : {}) },
  );
}
