import conNames from "@/data/sky/con-names.json";
import lineMap from "@/data/sky/lines.json";
import starRows from "@/data/sky/stars.json";

export type StarRec = { hip: number; ra: number; dec: number; mag: number; bv: number };

const rows = starRows as number[][];

export const allStars: StarRec[] = rows.map(([hip, ra, dec, mag, bv]) => ({ hip, ra, dec, mag, bv }));

export const starByHip = new Map(allStars.map((star) => [star.hip, star]));

/** IAU id → line segments of [ra, dec] in degrees. */
export const constellationLines = lineMap as Record<string, number[][][]>;

export const constellationNames = conNames as Record<string, string>;

export function starColor(bv: number) {
  if (bv < 0) return "#c5dcff";
  if (bv < 0.3) return "#f4f7ff";
  if (bv < 0.6) return "#fff4df";
  if (bv < 1.0) return "#ffd7a4";
  if (bv < 1.4) return "#ffb07a";
  return "#ff8d68";
}

export function starRadius(mag: number) {
  const radius = 4.6 * Math.pow(0.7, mag + 1.4);
  return Math.max(0.45, Math.min(5.4, radius));
}
