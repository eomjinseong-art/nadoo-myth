export type Vec = [number, number, number];

export function rad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function posmod(value: number, mod: number) {
  return ((value % mod) + mod) % mod;
}

export function raDecToVec(ra: number, dec: number): Vec {
  const r = rad(ra);
  const d = rad(dec);
  const c = Math.cos(d);
  return [c * Math.cos(r), c * Math.sin(r), Math.sin(d)];
}

export function dot(a: Vec, b: Vec) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function cross(a: Vec, b: Vec): Vec {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

export function vadd(a: Vec, b: Vec): Vec {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

export function vscale(a: Vec, s: number): Vec {
  return [a[0] * s, a[1] * s, a[2] * s];
}

export function normalize(a: Vec): Vec {
  const n = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / n, a[1] / n, a[2] / n];
}

export function meanDirection(points: { ra: number; dec: number }[]): Vec {
  let sum: Vec = [0, 0, 0];
  for (const point of points) sum = vadd(sum, raDecToVec(point.ra, point.dec));
  return normalize(sum);
}

/** Local tangent plane: +x is west (east lands on the left), +y is north. */
export function tangentAxes(center: Vec) {
  const pole: Vec = [0, 0, 1];
  const projected: Vec = [
    pole[0] - dot(pole, center) * center[0],
    pole[1] - dot(pole, center) * center[1],
    pole[2] - dot(pole, center) * center[2],
  ];
  const north = Math.hypot(...projected) < 0.15 ? ([1, 0, 0] as Vec) : normalize(projected);
  const west = normalize(cross(center, pole));
  return { north, west };
}

/** Gnomonic projection. Returns null when the point is far behind the chart center. */
export function projectTangent(vec: Vec, center: Vec, north: Vec, west: Vec) {
  const facing = dot(vec, center);
  if (facing < 0.22) return null;
  const point = vadd(vscale(vec, 1 / facing), vscale(center, -1));
  return { x: dot(point, west), y: dot(point, north) };
}

export function separationDeg(ra1: number, dec1: number, ra2: number, dec2: number) {
  const dRa = rad(ra2 - ra1) * Math.cos(rad((dec1 + dec2) / 2));
  const dDec = rad(dec2 - dec1);
  return Math.hypot(dRa, dDec) * (180 / Math.PI);
}

/** Julian Date (Gregorian, UTC). */
export function julianDay(year: number, month: number, day: number, hourUTC: number) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5 + hourUTC / 24;
}

/** Local sidereal time in degrees. Meeus, sufficient for a seasonal finder chart. */
export function localSiderealDegrees(year: number, month: number, day: number, hourUTC: number, lonDeg: number) {
  const days = julianDay(year, month, day, hourUTC) - 2451545.0;
  const gmst = posmod(280.46061837 + 360.98564736629 * days, 360);
  return posmod(gmst + lonDeg, 360);
}

export function altAz(ra: number, dec: number, lst: number, lat: number) {
  const hourAngle = posmod(lst - ra + 540, 360) - 180;
  const h = rad(hourAngle);
  const d = rad(dec);
  const phi = rad(lat);
  const sinAlt = Math.sin(d) * Math.sin(phi) + Math.cos(d) * Math.cos(phi) * Math.cos(h);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const cosAlt = Math.cos(alt);
  const cosAz = (Math.sin(d) - Math.sin(alt) * Math.sin(phi)) / (cosAlt * Math.cos(phi) || 1e-9);
  let az = Math.acos(Math.max(-1, Math.min(1, cosAz)));
  if (Math.sin(h) > 0) az = Math.PI * 2 - az;
  return { alt: (alt * 180) / Math.PI, az: (az * 180) / Math.PI };
}

export function lerpRa(a: number, b: number, t: number) {
  const delta = posmod(b - a + 540, 360) - 180;
  return posmod(a + delta * t, 360);
}
