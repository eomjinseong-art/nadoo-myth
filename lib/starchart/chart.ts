import type { Constellation } from "@/data/constellations";
import { allStars, constellationLines, constellationNames, starByHip, starColor, starRadius } from "@/lib/starchart/catalog";
import { figurePaths, type Pt } from "@/lib/starchart/figures";
import { lerpRa, meanDirection, projectTangent, raDecToVec, separationDeg, tangentAxes } from "@/lib/starchart/geometry";

export type ChartStar = {
  hip: number;
  x: number;
  y: number;
  r: number;
  mag: number;
  color: string;
  glow: boolean;
};

export type ChartLabel = {
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  line1: string;
  line2?: string;
};

export type ChartModel = {
  slug: string;
  title: string;
  width: number;
  height: number;
  stars: ChartStar[];
  ownLines: string[];
  neighborLines: string[];
  asterismPaths: string[];
  asterismLabels: { x: number; y: number; text: string }[];
  labels: ChartLabel[];
  neighbors: { x: number; y: number; text: string }[];
  markers: { x: number; y: number; rx: number; ry: number; label: string; lx: number; ly: number }[];
  figures: string[];
};

type World = { x: number; y: number };

const cache = new Map<string, ChartModel>();

export function getChart(constellation: Constellation, mini = false) {
  const key = `${constellation.slug}:${mini ? "m" : "f"}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const chart = buildChart(constellation, mini);
  cache.set(key, chart);
  return chart;
}

function buildChart(constellation: Constellation, mini: boolean): ChartModel {
  const segments = constellationLines[constellation.iau] ?? [];
  const linePoints = segments.flat().map(([ra, dec]) => ({ ra, dec }));
  const center = meanDirection(linePoints);
  const { north, west } = tangentAxes(center);

  const project = (ra: number, dec: number): World | null => {
    const point = projectTangent(raDecToVec(ra, dec), center, north, west);
    return point;
  };

  const ownWorld = segments.map((segment) =>
    segment.map(([ra, dec]) => project(ra, dec)).filter((point): point is World => point !== null),
  );
  const flatOwn = ownWorld.flat();
  let minX = Math.min(...flatOwn.map((point) => point.x));
  let maxX = Math.max(...flatOwn.map((point) => point.x));
  let minY = Math.min(...flatOwn.map((point) => point.y));
  let maxY = Math.max(...flatOwn.map((point) => point.y));

  const must = new Set<number>();
  for (const label of constellation.labels) must.add(label.hip);
  for (const asterism of constellation.asterisms) for (const line of asterism.lines) for (const hip of line) must.add(hip);

  for (const hip of must) {
    const star = starByHip.get(hip);
    if (!star) continue;
    const point = project(star.ra, star.dec);
    if (!point) continue;
    minX = Math.min(minX, point.x);
    maxX = Math.max(maxX, point.x);
    minY = Math.min(minY, point.y);
    maxY = Math.max(maxY, point.y);
  }

  const span = Math.max(maxX - minX, maxY - minY, 0.05);
  const grow = Math.min(span * (mini ? 0.08 : 0.12), mini ? 0.08 : 0.16);
  const samples = lineSamples(segments);
  const corridor = span > 0.85 ? 7 : span > 0.45 ? 7.5 : 9;
  const magLimit = mini ? (span > 0.7 ? 4.1 : 4.85) : span > 0.85 ? 4.45 : span > 0.45 ? 4.75 : 5.35;
  minX -= grow;
  maxX += grow;
  minY -= grow;
  maxY += grow;

  const worldW = maxX - minX || 1;
  const worldH = maxY - minY || 1;
  const pad = mini ? 8 : 46;
  let innerW = mini ? 280 : 320;
  let innerH = innerW * (worldH / worldW);
  const minH = mini ? 150 : 230;
  const maxH = mini ? 280 : 460;
  innerH = Math.max(minH, Math.min(maxH, innerH));
  if (innerH === maxH || innerH === minH) {
    const fitted = Math.min(innerW / worldW, innerH / worldH);
    innerW = worldW * fitted;
    innerH = worldH * fitted;
    if (innerH < minH) {
      innerH = minH;
    }
  }
  const scale = Math.min(innerW / worldW, innerH / worldH);
  const drawnW = worldW * scale;
  const drawnH = worldH * scale;
  const width = drawnW + pad * 2;
  const height = Math.max(drawnH + pad * 2, mini ? 150 : 210);
  const originX = (width - drawnW) / 2;
  const originY = (height - drawnH) / 2;

  const toSvg = (point: World): Pt => ({
    x: originX + (point.x - minX) * scale,
    y: originY + (maxY - point.y) * scale,
  });

  const inside = (point: World, margin = 0) =>
    point.x >= minX - margin && point.x <= maxX + margin && point.y >= minY - margin && point.y <= maxY + margin;

  const vertexStars = new Set<number>();
  for (const segment of segments) {
    for (const [ra, dec] of segment) {
      let bestHip = 0;
      let best = 0.4;
      for (const star of allStars) {
        const gap = separationDeg(ra, dec, star.ra, star.dec);
        if (gap < best) {
          best = gap;
          bestHip = star.hip;
        }
      }
      if (bestHip) vertexStars.add(bestHip);
    }
  }

  const stars: { hip: number; world: World; mag: number; bv: number }[] = [];
  for (const star of allStars) {
    const point = project(star.ra, star.dec);
    if (!point || !inside(point)) continue;
    const pinned = must.has(star.hip) || vertexStars.has(star.hip);
    if (!pinned && (star.mag > magLimit || nearestDeg(star.ra, star.dec, samples) > corridor)) continue;
    stars.push({ hip: star.hip, world: point, mag: star.mag, bv: star.bv });
  }

  const svgStars: ChartStar[] = stars.map((star) => {
    const point = toSvg(star.world);
    return {
      hip: star.hip,
      x: round(point.x),
      y: round(point.y),
      r: round(starRadius(star.mag) * (mini ? 0.85 : 1)),
      mag: star.mag,
      color: starColor(star.bv),
      glow: star.mag < 1.9,
    };
  });

  const at = new Map(svgStars.map((star) => [star.hip, { x: star.x, y: star.y }]));

  const pathOf = (worlds: (World | null)[]) => {
    const pts = worlds.filter((point): point is World => point !== null && inside(point, span * 0.2)).map(toSvg);
    if (pts.length < 2) return "";
    return pts.map((point, index) => `${index === 0 ? "M" : "L"} ${round(point.x)} ${round(point.y)}`).join(" ");
  };

  const ownLines = ownWorld.map((segment) => pathOf(segment)).filter(Boolean);

  const neighborLines: string[] = [];
  const neighborLabels: { x: number; y: number; text: string }[] = [];
  if (!mini) {
    for (const [iau, lines] of Object.entries(constellationLines)) {
      if (iau === constellation.iau) continue;
      const kept: World[] = [];
      for (const segment of lines) {
        if (neighborLines.length >= 8) break;
        const mid = segment[Math.floor(segment.length / 2)];
        if (!mid || nearestDeg(mid[0], mid[1], samples) > corridor + 3.5) continue;
        const worlds = segment.map(([ra, dec]) => project(ra, dec));
        const visible = worlds.filter((point): point is World => point !== null && inside(point));
        if (visible.length < 2) continue;
        const bothEndsIn = worlds.every((point) => point !== null && inside(point, span * 0.02));
        if (!bothEndsIn && visible.length < segment.length) continue;
        const d = pathOf(worlds);
        if (d) neighborLines.push(d);
        kept.push(...visible);
      }
      if (kept.length < 2) continue;
      const mid = toSvg({
        x: kept.reduce((sum, point) => sum + point.x, 0) / kept.length,
        y: kept.reduce((sum, point) => sum + point.y, 0) / kept.length,
      });
      if (mid.x < 36 || mid.y < 28 || mid.x > width - 36 || mid.y > height - 20) continue;
      neighborLabels.push({ x: round(mid.x), y: round(mid.y), text: constellationNames[iau] ?? iau });
    }
  }

  const asterismPaths: string[] = [];
  const asterismLabels: { x: number; y: number; text: string }[] = [];
  for (const asterism of constellation.asterisms) {
    const points: Pt[] = [];
    for (const line of asterism.lines) {
      const worlds: World[] = [];
      for (const hip of line) {
        const star = starByHip.get(hip);
        if (!star) continue;
        const point = project(star.ra, star.dec);
        if (point) worlds.push(point);
      }
      const d = pathOf(worlds);
      if (d) asterismPaths.push(d);
      points.push(...worlds.map(toSvg));
    }
    if (!mini && points.length && asterism.name) {
      const x = points.reduce((sum, point) => sum + point.x, 0) / points.length;
      const y = points.reduce((sum, point) => sum + point.y, 0) / points.length;
      asterismLabels.push({ x: round(x), y: round(y - 12), text: asterism.name });
    }
  }

  const markers = (mini ? [] : constellation.markers ?? []).flatMap((marker) => {
    const centerPoint = project(marker.ra, marker.dec);
    const edge = project(marker.ra + marker.rx, marker.dec);
    if (!centerPoint || !edge) return [];
    const c = toSvg(centerPoint);
    const e = toSvg(edge);
    const rx = Math.max(4, Math.abs(e.x - c.x));
    return [{ x: round(c.x), y: round(c.y), rx: round(rx), ry: round(rx * 0.62), label: marker.label, lx: round(c.x + rx + 3), ly: round(c.y + 3) }];
  });

  const labels = mini ? [] : placeLabels(constellation, at, svgStars, width, height);
  const figures = mini ? [] : figurePaths(constellation.iau, (hip) => at.get(hip));

  return {
    slug: constellation.slug,
    title: `${constellation.ko} 성도`,
    width: round(width),
    height: round(height),
    stars: svgStars,
    ownLines,
    neighborLines,
    asterismPaths,
    asterismLabels,
    labels,
    neighbors: thinNeighbors(neighborLabels, labels, width, height),
    markers,
    figures,
  };
}

function round(n: number) {
  return Math.round(n * 10) / 10;
}

function lineSamples(segments: number[][][]) {
  const samples: { ra: number; dec: number }[] = [];
  for (const segment of segments) {
    for (let i = 0; i < segment.length; i++) {
      const [ra, dec] = segment[i];
      samples.push({ ra, dec });
      const next = segment[i + 1];
      if (!next) continue;
      for (const t of [0.33, 0.66]) samples.push({ ra: lerpRa(ra, next[0], t), dec: dec + (next[1] - dec) * t });
    }
  }
  return samples;
}

function nearestDeg(ra: number, dec: number, samples: { ra: number; dec: number }[]) {
  let best = 180;
  for (const sample of samples) {
    const gap = separationDeg(ra, dec, sample.ra, sample.dec);
    if (gap < best) best = gap;
    if (best < 1) return best;
  }
  return best;
}

function placeLabels(
  constellation: Constellation,
  at: Map<number, Pt>,
  stars: ChartStar[],
  width: number,
  height: number,
): ChartLabel[] {
  const placed: { x: number; y: number; w: number; h: number }[] = [];
  for (const star of stars) {
    if (star.mag > 2.4) continue;
    placed.push({ x: star.x - star.r - 2, y: star.y - star.r - 2, w: star.r * 2 + 4, h: star.r * 2 + 4 });
  }
  const labels: ChartLabel[] = [];
  const ordered = [...constellation.labels].sort((a, b) => (starByHip.get(a.hip)?.mag ?? 9) - (starByHip.get(b.hip)?.mag ?? 9));
  for (const label of ordered) {
    const star = at.get(label.hip);
    if (!star) continue;
    const line1 = label.ko ? `${label.bayer} ${label.ko}`.trim() : label.latin ? `${label.bayer} ${label.latin}`.trim() : label.bayer;
    const line2 = label.ko && label.latin ? label.latin : undefined;
    const w = Math.max(textWidth(line1, 9.2), line2 ? textWidth(line2, 7.4) : 0);
    const h = line2 ? 20 : 11;
    const chosen = chooseSpot(star, w, h, label.place, placed, width, height);
    placed.push(chosen.box);
    labels.push({ x: round(chosen.x), y: round(chosen.y), anchor: chosen.anchor, line1, line2 });
  }
  return labels;
}

function chooseSpot(
  star: Pt,
  w: number,
  h: number,
  place: "n" | "s" | "e" | "w" | undefined,
  placed: { x: number; y: number; w: number; h: number }[],
  width: number,
  height: number,
) {
  const dirs: { dx: number; dy: number; anchor: ChartLabel["anchor"]; id: "n" | "s" | "e" | "w" }[] = [
    { dx: 0, dy: -1, anchor: "middle", id: "n" },
    { dx: 1, dy: -1, anchor: "start", id: "e" },
    { dx: -1, dy: -1, anchor: "end", id: "w" },
    { dx: 1, dy: 0, anchor: "start", id: "e" },
    { dx: -1, dy: 0, anchor: "end", id: "w" },
    { dx: 0, dy: 1, anchor: "middle", id: "s" },
    { dx: 1, dy: 1, anchor: "start", id: "e" },
    { dx: -1, dy: 1, anchor: "end", id: "w" },
  ];
  dirs.sort((a, b) => Number(b.id === place) - Number(a.id === place));
  let best: { x: number; y: number; anchor: ChartLabel["anchor"]; box: { x: number; y: number; w: number; h: number }; score: number } | null = null;
  for (let ring = 0; ring < 8; ring++) {
    const gap = 8 + ring * 6;
    for (const dir of dirs) {
      const ax = star.x + dir.dx * gap;
      const ay = star.y + dir.dy * (gap + 2);
      let x = ax;
      if (dir.anchor === "middle") x = ax - w / 2;
      if (dir.anchor === "end") x = ax - w;
      const y = dir.dy < 0 ? ay - h + 8 : ay;
      const box = { x, y: y - 8, w, h };
      if (box.x < 2 || box.y < 2 || box.x + box.w > width - 2 || box.y + box.h > height - 2) continue;
      const score = placed.reduce((sum, item) => sum + overlapArea(item, box), 0);
      if (score === 0) return { x: ax, y, anchor: dir.anchor, box };
      if (!best || score < best.score) best = { x: ax, y, anchor: dir.anchor, box, score };
    }
  }
  const chosen = best ?? { x: star.x + 8, y: star.y - 8, anchor: "start" as const, box: { x: star.x + 8, y: star.y - 16, w, h }, score: 1 };
  return chosen;
}

function overlapArea(a: { x: number; y: number; w: number; h: number }, b: { x: number; y: number; w: number; h: number }) {
  const x = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const y = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  if (x <= 0 || y <= 0) return 0;
  return x * y;
}

function textWidth(text: string, size: number) {
  let width = 0;
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    width += code > 0x2e80 ? size : size * 0.56;
  }
  return width;
}

function thinNeighbors(neighbors: { x: number; y: number; text: string }[], labels: ChartLabel[], width: number, height: number) {
  const kept: { x: number; y: number; text: string }[] = [];
  for (const neighbor of neighbors) {
    if (neighbor.x < 30 || neighbor.y < 24 || neighbor.x > width - 30 || neighbor.y > height - 16) continue;
    const crowded = labels.some((label) => Math.hypot(label.x - neighbor.x, label.y - neighbor.y) < 36);
    const stacked = kept.some((item) => Math.hypot(item.x - neighbor.x, item.y - neighbor.y) < 28);
    if (crowded || stacked) continue;
    kept.push(neighbor);
  }
  return kept.slice(0, 6);
}
