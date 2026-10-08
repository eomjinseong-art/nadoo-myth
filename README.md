# 나두신화 (Nadoo Mythology)

그리스·로마 신화를 한국어로 쉽고 정확하게 정리한 정적 사이트입니다.

- **신과 인물** `/gods` — 올림포스 신, 티탄, 영웅, 님프, 괴물 (그리스어·로마 이름, 상징, 가족관계, 원전)
- **이야기** `/stories` — 대략의 시간 순서로 정리한 주요 신화
- **가족관계도** `/family-tree` — 세대별 가계도. 부모·배우자 선을 구분하고, 칸을 누르면 가족이 강조됩니다 (Family Tree)
- **신화 속 단어** `/words` — 어원 확실/논쟁 중 표시
- **작품 속 신화** `/in-media` — 영화, 명화(퍼블릭 도메인), 별자리
- **그리스 vs 로마** `/greece-vs-rome` — 신 짝 비교, 로마 고유의 신, 합쳐진 과정 (모든 서술에 출처 유형 표시)

## 개발

```bash
npm ci
npm run dev
npm run build
```

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. 모든 페이지는 빌드 시 정적으로 생성됩니다.
콘텐츠 데이터는 `data/` 폴더에 있습니다. `NEXT_PUBLIC_SITE_URL`로 정식 주소를 바꿀 수 있습니다.

## 이미지

`public/paintings/`의 그림은 위키미디어 공용의 퍼블릭 도메인(또는 CC0) 파일을 축소한 것이며, 페이지에 원본 링크를 표시합니다.

나두 — 나의 모든 일상을 AI와 함께
