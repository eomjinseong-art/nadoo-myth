import { constellations } from "@/data/constellations";
import { allStars, constellationLines, starByHip, starColor, starRadius } from "@/lib/starchart/catalog";
import { altAz, lerpRa, localSiderealDegrees } from "@/lib/starchart/geometry";

/** Evening sky from central Korea. 21:00 KST = 12:00 UTC, Seoul longitude. */
export const SKY_LAT = 37.5;
export const SKY_LON = 127;
const HOUR_UTC = 12;
const YEAR = 2026;

export type SeasonId = "spring" | "summer" | "autumn" | "winter";

export type Season = {
  id: SeasonId;
  ko: string;
  when: string;
  month: number;
  day: number;
  blurb: string;
};

export const seasons: Season[] = [
  {
    id: "spring",
    ko: "봄",
    when: "4월 15일",
    month: 4,
    day: 15,
    blurb: "사자자리가 남쪽 높이, 북두칠성은 북동쪽 높이입니다. 게자리와 바다뱀자리가 남쪽에 있고, 오리온과 쌍둥이는 서쪽으로 기울며 북쪽왕관이 동쪽에서 올라옵니다.",
  },
  {
    id: "summer",
    ko: "여름",
    when: "7월 15일",
    month: 7,
    day: 15,
    blurb: "헤르쿨레스와 북쪽왕관이 하늘 높이 있습니다. 거문고자리의 베가는 동쪽 하늘이고, 8월 저녁이면 머리 위 가까이 옵니다. 전갈은 남쪽 낮은 하늘, 궁수는 남동쪽 지평선 근처입니다.",
  },
  {
    id: "autumn",
    ko: "가을",
    when: "10월 15일",
    month: 10,
    day: 15,
    blurb: "페가수스의 대사각형이 남동쪽 높이, 안드로메다는 동쪽, 카시오페이아와 케페우스는 북쪽 높이입니다. 고래자리는 동쪽 낮은 하늘에 있고 북두칠성은 북쪽 지평선 가까이 내려갑니다.",
  },
  {
    id: "winter",
    ko: "겨울",
    when: "1월 15일",
    month: 1,
    day: 15,
    blurb: "오리온이 남동쪽 하늘, 쌍둥이가 그 왼쪽(동쪽)에 있습니다. 페르세우스와 카시오페이아는 북쪽 높이이고, 게자리가 동쪽에서 따라 올라옵니다.",
  },
];

export type SkyLink = { slug: string; name: string; x: number; y: number };
export type SkyStar = { x: number; y: number; r: number; color: string; mag: number };
export type SkyModel = {
  stars: SkyStar[];
  lines: string[];
  links: SkyLink[];
  polaris: { x: number; y: number } | null;
};

const CX = 200;
const CY = 198;
const RADIUS = 168;

export function skyViewBox() {
  return { width: 400, height: 430, cx: CX, cy: CY, radius: RADIUS };
}

export function buildSky(season: Season): SkyModel {
  const lst = localSiderealDegrees(YEAR, season.month, season.day, HOUR_UTC, SKY_LON);
  const place = (ra: number, dec: number) => {
    const { alt, az } = altAz(ra, dec, lst, SKY_LAT);
    if (alt <= 0) return null;
    return { ...project(alt, az), alt };
  };

  const stars: SkyStar[] = [];
  for (const star of allStars) {
    if (star.mag > 4.05) continue;
    const point = place(star.ra, star.dec);
    if (!point) continue;
    stars.push({
      x: round(point.x),
      y: round(point.y),
      r: round(Math.max(0.45, starRadius(star.mag) * 0.55)),
      color: starColor(star.bv),
      mag: star.mag,
    });
  }

  const lines: string[] = [];
  const links: SkyLink[] = [];
  for (const constellation of constellations) {
    const segments = constellationLines[constellation.iau] ?? [];
    const verts = segments.flat();
    let wellUp = 0;
    for (const [ra, dec] of verts) {
      if (altAz(ra, dec, lst, SKY_LAT).alt >= 8) wellUp++;
    }
    if (wellUp < 2 || wellUp / Math.max(verts.length, 1) < 0.25) continue;
    const visible: { x: number; y: number }[] = [];
    for (const segment of segments) {
      let cursor: { ra: number; dec: number } | null = null;
      let cursorAlt = 0;
      const parts: string[] = [];
      for (const [ra, dec] of segment) {
        const { alt } = altAz(ra, dec, lst, SKY_LAT);
        if (cursor) {
          const clipped = clipSegment(cursor, cursorAlt, { ra, dec }, alt, lst);
          if (clipped) {
            const a = project(clipped[0].alt, clipped[0].az);
            const b = project(clipped[1].alt, clipped[1].az);
            parts.push(`M ${round(a.x)} ${round(a.y)} L ${round(b.x)} ${round(b.y)}`);
            if (clipped[0].alt > 0) visible.push(a);
            if (clipped[1].alt > 0) visible.push(b);
          }
        }
        cursor = { ra, dec };
        cursorAlt = alt;
      }
      if (parts.length) lines.push(parts.join(" "));
    }
    if (!visible.length) continue;
    const raw = {
      x: visible.reduce((sum, point) => sum + point.x, 0) / visible.length,
      y: visible.reduce((sum, point) => sum + point.y, 0) / visible.length,
    };
    const clamped = clampInside(raw.x, raw.y);
    links.push({ slug: constellation.slug, name: constellation.ko, x: round(clamped.x), y: round(clamped.y) });
  }

  separate(links);

  const polarisStar = starByHip.get(11767);
  const polarisPoint = polarisStar ? place(polarisStar.ra, polarisStar.dec) : null;

  return {
    stars,
    lines,
    links,
    polaris: polarisPoint ? { x: round(polarisPoint.x), y: round(polarisPoint.y) } : null,
  };
}

function project(alt: number, az: number) {
  const z = ((90 - alt) * Math.PI) / 180 / 2;
  const radius = RADIUS * (Math.tan(z) / Math.tan(Math.PI / 4));
  const a = (az * Math.PI) / 180;
  return { x: CX - radius * Math.sin(a), y: CY - radius * Math.cos(a) };
}

function clipSegment(
  a: { ra: number; dec: number },
  altA: number,
  b: { ra: number; dec: number },
  altB: number,
  lst: number,
) {
  if (altA <= 0 && altB <= 0) return null;
  if (altA > 0 && altB > 0) {
    return [altAz(a.ra, a.dec, lst, SKY_LAT), altAz(b.ra, b.dec, lst, SKY_LAT)] as const;
  }
  let neg = altA <= 0 ? a : b;
  let pos = altA <= 0 ? b : a;
  for (let i = 0; i < 14; i++) {
    const mid = { ra: lerpRa(neg.ra, pos.ra, 0.5), dec: neg.dec + (pos.dec - neg.dec) * 0.5 };
    const alt = altAz(mid.ra, mid.dec, lst, SKY_LAT).alt;
    if (alt > 0) pos = mid;
    else neg = mid;
  }
  const above = altA > 0 ? a : b;
  return [altAz(pos.ra, pos.dec, lst, SKY_LAT), altAz(above.ra, above.dec, lst, SKY_LAT)] as const;
}

function clampInside(x: number, y: number) {
  const dx = x - CX;
  const dy = y - CY;
  const d = Math.hypot(dx, dy);
  const limit = RADIUS - 22;
  if (d <= limit) return { x, y };
  const s = limit / (d || 1);
  return { x: CX + dx * s, y: CY + dy * s };
}

function labelRadius(name: string) {
  const text = name.replace("자리", "");
  return Math.max(18, text.length * 6.4);
}

function separate(links: SkyLink[]) {
  for (let pass = 0; pass < 12; pass++) {
    for (let i = 0; i < links.length; i++) {
      for (let j = i + 1; j < links.length; j++) {
        const a = links[i];
        const b = links[j];
        const need = labelRadius(a.name) + labelRadius(b.name);
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d > need) continue;
        const push = (need - d) / 2;
        a.x -= (dx / d) * push;
        a.y -= (dy / d) * push;
        b.x += (dx / d) * push;
        b.y += (dy / d) * push;
        const ca = clampInside(a.x, a.y);
        const cb = clampInside(b.x, b.y);
        a.x = ca.x;
        a.y = ca.y;
        b.x = cb.x;
        b.y = cb.y;
      }
    }
  }
}

function round(n: number) {
  return Math.round(n * 10) / 10;
}
