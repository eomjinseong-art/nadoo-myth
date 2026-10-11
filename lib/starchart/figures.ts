/** Hand-drawn line art in chart coordinates. Paths are anchored to real stars. */

export type Pt = { x: number; y: number };
export type At = (hip: number) => Pt | undefined;

const r = (n: number) => Math.round(n * 10) / 10;

export function add(a: Pt, b: Pt): Pt {
  return { x: a.x + b.x, y: a.y + b.y };
}
export function mul(a: Pt, s: number): Pt {
  return { x: a.x * s, y: a.y * s };
}
export function sub(a: Pt, b: Pt): Pt {
  return { x: a.x - b.x, y: a.y - b.y };
}
export function lerp(a: Pt, b: Pt, t: number): Pt {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}
export function dist(a: Pt, b: Pt) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
export function dir(a: Pt, b: Pt): Pt {
  const d = dist(a, b) || 1;
  return { x: (b.x - a.x) / d, y: (b.y - a.y) / d };
}
export function perp(a: Pt): Pt {
  return { x: -a.y, y: a.x };
}

export function circle(c: Pt, radius: number) {
  return `M ${r(c.x - radius)} ${r(c.y)} a ${r(radius)} ${r(radius)} 0 1 0 ${r(radius * 2)} 0 a ${r(radius)} ${r(radius)} 0 1 0 ${r(-radius * 2)} 0`;
}

export function line(pts: Pt[]) {
  if (pts.length < 2) return "";
  return pts.map((point, index) => `${index ? "L" : "M"} ${r(point.x)} ${r(point.y)}`).join(" ");
}

export function smooth(pts: Pt[], close = false) {
  if (pts.length < 2) return "";
  if (pts.length === 2) return `M ${r(pts[0].x)} ${r(pts[0].y)} L ${r(pts[1].x)} ${r(pts[1].y)}`;
  let d = `M ${r(pts[0].x)} ${r(pts[0].y)}`;
  const last = close ? pts.length : pts.length - 1;
  for (let i = 0; i < last; i++) {
    const p0 = pts[close ? (i - 1 + pts.length) % pts.length : Math.max(0, i - 1)];
    const p1 = pts[close ? i % pts.length : i];
    const p2 = pts[close ? (i + 1) % pts.length : Math.min(pts.length - 1, i + 1)];
    const p3 = pts[close ? (i + 2) % pts.length : Math.min(pts.length - 1, i + 2)];
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${r(c1.x)} ${r(c1.y)} ${r(c2.x)} ${r(c2.y)} ${r(p2.x)} ${r(p2.y)}`;
  }
  return close ? `${d} Z` : d;
}

function need(at: At, hips: number[]) {
  const pts: Pt[] = [];
  for (const hip of hips) {
    const point = at(hip);
    if (!point) return null;
    pts.push(point);
  }
  return pts;
}

/** Closed ribbon around a polyline. `width` is the full width at the start; `end` tapers. */
function ribbon(pts: Pt[], width: number, end = width) {
  if (pts.length < 2) return "";
  const left: Pt[] = [];
  const right: Pt[] = [];
  for (let i = 0; i < pts.length; i++) {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    const half = (width + (end - width) * (i / (pts.length - 1))) / 2;
    const side = mul(perp(dir(prev, next)), half);
    left.push(add(pts[i], side));
    right.push(add(pts[i], mul(side, -1)));
  }
  const cap = Math.max(2, width * 0.35);
  const nose = add(pts[pts.length - 1], mul(dir(pts[pts.length - 2], pts[pts.length - 1]), cap));
  return smooth([...left, nose, ...right.reverse()], true);
}

function unit(a: Pt, b: Pt) {
  return dist(a, b) / 100;
}

function orion(at: At) {
  const bet = at(27989);
  const bel = at(25336);
  const mei = at(26207);
  const rig = at(24436);
  const sai = at(27366);
  const min = at(25930);
  const nil = at(26311);
  const nit = at(26727);
  if (!bet || !bel || !mei || !rig || !sai || !min || !nil || !nit) return [];
  const u = unit(bet, bel) * 100;
  const k = (n: number) => n * (u / 130);
  const shoulder = lerp(bet, bel, 0.5);
  const waist = lerp(nit, min, 0.5);
  const paths = [
    circle(add(mei, { x: 0, y: -k(2) }), k(11)),
    ribbon([mei, shoulder, waist], k(16), k(12)),
    ribbon([bet, add(bet, { x: -k(16), y: -k(28) })], k(7), k(5)),
    smooth([
      add(bet, { x: -k(14), y: -k(26) }),
      add(bet, { x: -k(28), y: -k(48) }),
      add(bet, { x: -k(8), y: -k(44) }),
      add(bet, { x: -k(12), y: -k(24) }),
    ]),
    ribbon([bel, add(bel, { x: k(18), y: -k(16) })], k(7), k(5)),
    circle(add(bel, { x: k(26), y: -k(18) }), k(14)),
    smooth([add(bel, { x: k(16), y: -k(28) }), add(bel, { x: k(30), y: -k(8) }), add(bel, { x: k(18), y: k(2) })]),
    ribbon([waist, nil], k(8), k(4)),
    smooth([nil, at(26241) ?? add(nil, { x: 0, y: k(28) }), add(nil, { x: k(2), y: k(42) })]),
    ribbon([lerp(waist, nit, 0.4), sai], k(8), k(5)),
    ribbon([lerp(waist, min, 0.4), rig], k(8), k(5)),
  ];
  return paths.filter(Boolean);
}

function pegasus(at: At) {
  const alph = at(677);
  const scheat = at(113881);
  const markab = at(113963);
  const algenib = at(1067);
  const enif = at(107315);
  if (!alph || !scheat || !markab || !algenib || !enif) return [];
  const k = (n: number) => n * (unit(alph, scheat) * 100) / 110;
  const body = [alph, scheat, markab, algenib].map((point) => {
    const mid = lerp(lerp(alph, markab, 0.5), lerp(scheat, algenib, 0.5), 0.5);
    return lerp(mid, point, 1.16);
  });
  const neck = [lerp(markab, scheat, 0.15), at(112029) ?? lerp(markab, enif, 0.45), lerp(markab, enif, 0.72)];
  const noseDir = dir(neck[neck.length - 1], enif);
  let belly = perp(noseDir);
  if (belly.y > 0) belly = mul(belly, -1);
  const crest = mul(belly, -1);
  const reach = Math.max(32, dist(markab, enif) * 0.22);
  const atHead = (forward: number, up: number) => add(enif, add(mul(noseDir, forward * reach), mul(crest, up * reach)));
  const wingRoot = lerp(alph, scheat, 0.35);
  const span = dist(alph, scheat);
  const wing = (dx: number, dy: number) => add(wingRoot, { x: dx * span, y: dy * span });
  return [
    smooth(body, true),
    ribbon(neck, k(13), k(7)),
    line([
      atHead(-0.42, 0.02),
      atHead(-0.28, 0.62),
      atHead(-0.1, 0.08),
      atHead(0.02, 0.55),
      atHead(0.2, 0.14),
      atHead(0.78, 0.1),
      atHead(0.86, -0.08),
      atHead(0.62, -0.22),
      atHead(0.08, -0.32),
      atHead(-0.32, -0.06),
    ]),
    circle(atHead(0.28, 0.08), 2.4),
    line([wingRoot, wing(-0.06, -0.55), wing(0.08, -0.72), wing(0.34, -0.42), wing(0.08, -0.06)]),
    line([wingRoot, wing(0.16, -0.58), wing(0.38, -0.36)]),
    line([wingRoot, wing(0.02, -0.48), wing(0.22, -0.22)]),
    ribbon([scheat, at(112158) ?? add(scheat, { x: span * 0.06, y: -span * 0.28 }), add(scheat, { x: span * 0.02, y: -span * 0.46 })], k(6), k(3)),
  ];
}

function andromeda(at: At) {
  const head = at(677);
  const mirach = at(5447);
  const almach = at(9640);
  const delta = at(3092);
  if (!head || !mirach || !almach || !delta) return [];
  const k = (n: number) => n * (unit(head, mirach) * 100) / 120;
  const hip = lerp(mirach, almach, 0.35);
  const handL = add(delta, { x: -k(8), y: -k(6) });
  const handR = at(116584) ?? add(almach, { x: k(20), y: -k(16) });
  return [
    circle(add(head, { x: k(2), y: k(2) }), k(10)),
    smooth([add(head, { x: -k(8), y: k(4) }), add(head, { x: -k(16), y: k(12) }), add(head, { x: -k(6), y: k(16) })]),
    ribbon([head, delta, mirach, hip], k(12), k(9)),
    ribbon([delta, handL], k(5), k(3)),
    ribbon([hip, almach], k(6), k(4)),
    smooth([handL, add(handL, { x: -k(10), y: -k(8) }), add(handL, { x: -k(4), y: k(8) }), handL]),
    smooth([almach, handR, add(handR, { x: k(6), y: -k(4) })]),
    smooth([
      add(hip, { x: -k(10), y: k(4) }),
      add(hip, { x: -k(16), y: k(28) }),
      add(almach, { x: k(4), y: k(8) }),
    ]),
  ];
}

function perseus(at: At) {
  const mirfak = at(15863);
  const algol = at(14576);
  const eps = at(18532);
  if (!mirfak || !algol) return [];
  const k = (n: number) => n * (dist(mirfak, algol) / 150);
  const shoulder = eps ?? add(mirfak, { x: k(20), y: -k(10) });
  const medusa = add(algol, { x: 0, y: k(2) });
  return [
    circle(add(mirfak, { x: 0, y: -k(18) }), k(9)),
    ribbon([add(mirfak, { x: 0, y: -k(8) }), mirfak, lerp(mirfak, algol, 0.45)], k(14), k(10)),
    ribbon([mirfak, shoulder], k(6), k(4)),
    ribbon([lerp(mirfak, algol, 0.2), medusa], k(6), k(4)),
    circle(medusa, k(11)),
    smooth([add(medusa, { x: -k(8), y: -k(8) }), add(medusa, { x: -k(16), y: -k(2) }), add(medusa, { x: -k(8), y: k(2) })]),
    smooth([add(medusa, { x: k(6), y: -k(10) }), add(medusa, { x: k(14), y: -k(16) }), add(medusa, { x: k(8), y: -k(4) })]),
    smooth([add(medusa, { x: k(10), y: k(2) }), add(medusa, { x: k(18), y: k(8) })]),
    smooth([add(medusa, { x: -k(2), y: k(10) }), add(medusa, { x: -k(8), y: k(18) })]),
    circle(add(medusa, { x: -k(2), y: -k(1) }), k(1.5)),
    smooth([shoulder, add(shoulder, { x: k(8), y: -k(22) }), add(shoulder, { x: k(2), y: -k(30) })]),
  ];
}

function cassiopeia(at: At) {
  const pts = need(at, [8886, 6686, 4427, 3179, 746]);
  if (!pts) return [];
  const k = (n: number) => n * (dist(pts[0], pts[4]) / 160);
  const mid = pts[2];
  return [
    ribbon(pts, k(10), k(8)),
    circle(add(mid, { x: 0, y: -k(16) }), k(8)),
    smooth([
      add(mid, { x: -k(6), y: -k(22) }),
      add(mid, { x: -k(2), y: -k(30) }),
      add(mid, { x: k(3), y: -k(24) }),
      add(mid, { x: k(8), y: -k(32) }),
      add(mid, { x: k(6), y: -k(20) }),
    ]),
    smooth([pts[0], add(pts[0], { x: -k(4), y: k(16) }), add(pts[1], { x: 0, y: k(12) })]),
    smooth([pts[4], add(pts[4], { x: k(4), y: k(16) }), add(pts[3], { x: 0, y: k(12) })]),
  ];
}

function cepheus(at: At) {
  const alderamin = at(105199);
  const alfirk = at(106032);
  const errai = at(116727);
  if (!alderamin || !alfirk || !errai) return [];
  const k = (n: number) => n * (dist(alderamin, errai) / 140);
  const baseL = at(109492) ?? add(alderamin, { x: -k(16), y: k(10) });
  const baseR = at(112724) ?? add(alfirk, { x: k(10), y: k(8) });
  return [
    smooth([baseL, alderamin, errai, alfirk, baseR, baseL], true),
    circle(lerp(errai, lerp(alderamin, alfirk, 0.5), 0.42), k(8)),
    smooth([
      add(errai, { x: -k(8), y: k(2) }),
      add(errai, { x: -k(4), y: -k(10) }),
      errai,
      add(errai, { x: k(5), y: -k(8) }),
      add(errai, { x: k(10), y: k(2) }),
    ]),
    smooth([alderamin, add(alderamin, { x: -k(18), y: k(8) })]),
  ];
}

function cetus(at: At) {
  const menkar = at(14135);
  const diphda = at(3419);
  const gamma = at(12706);
  if (!menkar || !diphda || !gamma) return [];
  const body = need(at, [14135, 12706, 12387, 8645, 8102, 3419]);
  if (!body) return [];
  const k = (n: number) => n * (dist(menkar, diphda) / 220);
  return [
    circle(add(menkar, mul(dir(gamma, menkar), k(8))), k(14)),
    circle(add(menkar, { x: -k(2), y: -k(2) }), k(1.6)),
    smooth([
      add(menkar, { x: k(10), y: -k(6) }),
      add(menkar, { x: k(18), y: -k(2) }),
      add(menkar, { x: k(22), y: k(4) }),
    ]),
    ribbon(body, k(16), k(7)),
    smooth([
      diphda,
      add(diphda, { x: -k(16), y: -k(8) }),
      add(diphda, { x: -k(8), y: k(12) }),
      add(diphda, { x: k(6), y: k(4) }),
    ]),
  ];
}

function hercules(at: At) {
  const head = at(84345);
  const beta = at(80816);
  const zeta = at(81693);
  const eta = at(81833);
  const pi = at(84380);
  const eps = at(83207);
  if (!head || !beta || !zeta || !eta || !pi || !eps) return [];
  const k = (n: number) => n * (dist(zeta, pi) / 90);
  const chest = lerp(lerp(zeta, eta, 0.5), lerp(eps, pi, 0.5), 0.5);
  return [
    smooth([zeta, eta, pi, eps, zeta], true),
    circle(head, k(9)),
    ribbon([chest, beta, head], k(8), k(5)),
    ribbon([eta, at(80170) ?? add(eta, { x: -k(10), y: -k(24) })], k(6), k(4)),
    smooth([
      add(eta, { x: -k(6), y: -k(20) }),
      add(eta, { x: -k(18), y: -k(36) }),
      add(eta, { x: -k(4), y: -k(32) }),
    ]),
    ribbon([eps, at(84379) ?? add(eps, { x: k(8), y: k(20) })], k(6), k(4)),
    smooth([zeta, add(zeta, { x: -k(6), y: k(18) }), add(zeta, { x: -k(2), y: k(28) })]),
  ];
}

function leo(at: At) {
  const regulus = at(49669);
  const algieba = at(50583);
  const denebola = at(57632);
  const zosma = at(54872);
  const eps = at(47908);
  const mu = at(48455);
  const zeta = at(50335);
  if (!regulus || !algieba || !denebola || !zosma || !eps || !mu || !zeta) return [];
  const k = (n: number) => n * (dist(regulus, denebola) / 180);
  const mane = [eps, mu, zeta, algieba];
  return [
    smooth([regulus, algieba, zosma, denebola, at(54879) ?? lerp(denebola, regulus, 0.45), regulus], true),
    ribbon(mane, k(8), k(5)),
    circle(lerp(zeta, mu, 0.4), k(8)),
    smooth([denebola, add(denebola, { x: -k(14), y: -k(8) }), add(denebola, { x: -k(6), y: -k(16) })]),
    smooth([regulus, add(regulus, { x: k(12), y: k(8) })]),
    smooth([algieba, add(algieba, { x: k(4), y: k(14) }), regulus]),
  ];
}

function cancer(at: At) {
  const australis = at(42911);
  const borealis = at(42806);
  const tarf = at(40526);
  const acubens = at(44066);
  if (!australis || !borealis) return [];
  const k = (n: number) => n * (dist(australis, borealis) / 70);
  const body = lerp(australis, borealis, 0.45);
  return [
    circle(body, k(16)),
    circle(add(body, { x: -k(4), y: -k(2) }), k(2)),
    circle(add(body, { x: k(5), y: -k(1) }), k(2)),
    smooth([body, borealis, at(43103) ?? add(borealis, { x: 0, y: -k(18) })]),
    smooth([body, australis, tarf ?? add(australis, { x: k(16), y: k(14) })]),
    smooth([body, acubens ?? add(body, { x: k(20), y: k(4) })]),
    smooth([add(body, { x: -k(12), y: -k(6) }), add(body, { x: -k(22), y: -k(14) })]),
    smooth([add(body, { x: -k(12), y: k(6) }), add(body, { x: -k(22), y: k(12) })]),
  ];
}

function hydra(at: At) {
  const head = need(at, [43109, 43234, 42799, 42402, 42313]);
  const body = need(at, [43109, 43813, 45336, 47431, 46390, 48356, 49841, 51069, 52943, 56343, 64962, 68895]);
  if (!head || !body) return [];
  const k = (n: number) => n * (dist(head[0], body[4]) / 120);
  const snout = head[2];
  return [
    smooth([...head, head[0]], true),
    circle(lerp(head[0], head[1], 0.5), k(2)),
    smooth([snout, add(snout, mul(dir(head[1], snout), k(14))), add(snout, { x: k(6), y: k(4) })]),
    ribbon(body, k(9), k(2.5)),
  ];
}

function ursaMajor(at: At) {
  const dubhe = at(54061);
  const merak = at(53910);
  const phecda = at(58001);
  const megrez = at(59774);
  const alioth = at(62956);
  const mizar = at(65378);
  const alkaid = at(67301);
  const muscida = at(41704);
  if (!dubhe || !merak || !phecda || !megrez || !alioth || !mizar || !alkaid) return [];
  const k = (n: number) => n * (dist(dubhe, alkaid) / 200);
  const neck = muscida ?? add(dubhe, { x: k(30), y: k(4) });
  return [
    ribbon([alkaid, mizar, alioth, megrez], k(8), k(14)),
    smooth([megrez, phecda, merak, dubhe, megrez], true),
    ribbon([dubhe, at(46733) ?? lerp(dubhe, neck, 0.5), neck], k(8), k(6)),
    circle(neck, k(10)),
    smooth([add(neck, { x: -k(4), y: -k(8) }), add(neck, { x: -k(2), y: -k(16) }), add(neck, { x: k(4), y: -k(8) })]),
    smooth([add(neck, { x: k(4), y: -k(6) }), add(neck, { x: k(10), y: -k(14) })]),
    ribbon([merak, at(46853) ?? add(merak, { x: k(12), y: k(16) })], k(5), k(3)),
    ribbon([phecda, at(57399) ?? add(phecda, { x: 0, y: k(18) })], k(5), k(3)),
    circle(add(neck, { x: -k(2), y: k(1) }), k(1.4)),
  ];
}

function lyra(at: At) {
  const vega = at(91262);
  const sheliak = at(92420);
  const sulafat = at(93194);
  const zeta = at(91971);
  if (!vega || !sheliak || !sulafat || !zeta) return [];
  const k = (n: number) => n * (dist(vega, sulafat) / 90);
  const delta = at(92791) ?? lerp(zeta, sulafat, 0.5);
  const top = lerp(vega, zeta, 0.35);
  return [
    smooth([
      add(vega, { x: -k(4), y: k(2) }),
      add(top, { x: -k(16), y: k(8) }),
      zeta,
      delta,
      sulafat,
      sheliak,
      add(top, { x: k(14), y: k(10) }),
      add(vega, { x: k(4), y: k(2) }),
    ]),
    smooth([zeta, sheliak]),
    smooth([lerp(zeta, delta, 0.5), lerp(sheliak, sulafat, 0.35)]),
    smooth([delta, sulafat]),
    circle(vega, k(3.5)),
  ];
}

function gemini(at: At) {
  const castor = at(36850);
  const pollux = at(37826);
  const alhena = at(31681);
  const tejat = at(30343);
  if (!castor || !pollux) return [];
  const k = (n: number) => n * (dist(castor, pollux) / 70);
  const footC = alhena ?? add(castor, { x: k(6), y: k(70) });
  const footP = tejat ?? add(pollux, { x: -k(4), y: k(74) });
  return [
    circle(add(castor, { x: 0, y: -k(2) }), k(9)),
    circle(add(pollux, { x: 0, y: -k(2) }), k(9)),
    ribbon([castor, at(35550) ?? lerp(castor, footC, 0.45), footC], k(8), k(5)),
    ribbon([pollux, at(32246) ?? lerp(pollux, footP, 0.4), footP], k(8), k(5)),
    smooth([add(castor, { x: k(6), y: k(12) }), add(pollux, { x: -k(6), y: k(14) })]),
    smooth([add(castor, { x: -k(4), y: k(16) }), add(castor, { x: -k(16), y: k(8) }), add(castor, { x: -k(12), y: k(24) })]),
    smooth([
      add(pollux, { x: k(4), y: k(18) }),
      add(pollux, { x: k(16), y: k(28) }),
      add(pollux, { x: k(8), y: k(36) }),
      add(pollux, { x: k(18), y: k(40) }),
    ]),
  ];
}

function scorpius(at: At) {
  const body = need(at, [78401, 80112, 80763, 81266, 82396, 82514, 82729, 84143, 86228, 87073, 86670, 85927]);
  const acrab = at(78820);
  const dschubba = at(78401);
  const antares = at(80763);
  const shaula = at(85927);
  const lesath = at(85696);
  if (!body || !acrab || !dschubba || !antares || !shaula) return [];
  const k = (n: number) => n * (dist(antares, shaula) / 160);
  const paths = [
    ribbon(body, k(10), k(3)),
    smooth([dschubba, acrab, add(acrab, { x: k(8), y: -k(10) })]),
    smooth([dschubba, at(78265) ?? add(dschubba, { x: -k(12), y: k(6) })]),
    circle(antares, k(4)),
  ];
  if (lesath) paths.push(smooth([shaula, lesath, add(lesath, mul(dir(shaula, lesath), k(8)))]));
  else paths.push(smooth([shaula, add(shaula, { x: k(6), y: -k(8) })]));
  return paths;
}

function corona(at: At) {
  const pts = need(at, [76127, 75695, 76267, 76952, 77512, 78159, 78493]);
  if (!pts) return [];
  const k = (n: number) => n * (dist(pts[0], pts[6]) / 120);
  const outer = pts.map((point, i) => {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    return add(point, mul(perp(dir(prev, next)), -k(8)));
  });
  const jewels = pts.map((point) => circle(point, iSize(point, pts[3], k(3.2))));
  return [smooth(outer), smooth(pts), ...jewels];
}

function iSize(point: Pt, front: Pt, base: number) {
  return dist(point, front) < 1 ? base * 1.5 : base;
}

function sagittarius(at: At) {
  const alnasl = at(88635);
  const australis = at(90185);
  const media = at(89931);
  const borealis = at(90496);
  const nunki = at(92855);
  const ascella = at(93506);
  if (!alnasl || !australis || !media || !borealis || !nunki || !ascella) return [];
  const k = (n: number) => n * (dist(alnasl, nunki) / 120);
  const chest = lerp(borealis, media, 0.45);
  return [
    smooth([alnasl, australis, ascella, nunki, borealis, media, alnasl], true),
    smooth([media, borealis, add(borealis, mul(dir(media, alnasl), -k(8)))]),
    smooth([chest, alnasl, add(alnasl, mul(dir(media, alnasl), k(18)))]),
    smooth([
      add(alnasl, mul(dir(borealis, alnasl), k(6))),
      add(alnasl, { x: 0, y: k(8) }),
      add(alnasl, mul(dir(borealis, alnasl), k(14))),
    ]),
    circle(add(chest, { x: 0, y: -k(16) }), k(7)),
    ribbon([australis, add(australis, { x: k(4), y: k(18) })], k(5), k(3)),
    ribbon([ascella, add(ascella, { x: -k(2), y: k(16) })], k(5), k(3)),
  ];
}

function centaurus(at: At) {
  const menkent = at(68933);
  const hadar = at(68702);
  const rigil = at(71683);
  const gamma = at(61932);
  if (!menkent || !hadar || !rigil) return [];
  const k = (n: number) => n * (dist(menkent, hadar) / 160);
  const hip = gamma ?? lerp(menkent, hadar, 0.45);
  return [
    circle(add(menkent, { x: 0, y: -k(8) }), k(9)),
    ribbon([menkent, hip], k(12), k(16)),
    ribbon([hip, hadar], k(8), k(4)),
    ribbon([hip, rigil], k(8), k(4)),
    ribbon([hip, at(66657) ?? add(hip, { x: -k(10), y: k(24) })], k(6), k(3)),
    smooth([add(menkent, { x: -k(6), y: k(6) }), add(menkent, { x: -k(22), y: -k(4) })]),
    smooth([
      add(menkent, { x: -k(8), y: -k(14) }),
      add(menkent, { x: -k(2), y: -k(22) }),
      add(menkent, { x: k(6), y: -k(14) }),
    ]),
  ];
}

const DRAW: Record<string, (at: At) => string[]> = {
  Ori: orion,
  Peg: pegasus,
  And: andromeda,
  Per: perseus,
  Cas: cassiopeia,
  Cep: cepheus,
  Cet: cetus,
  Her: hercules,
  Leo: leo,
  Cnc: cancer,
  Hya: hydra,
  UMa: ursaMajor,
  Lyr: lyra,
  Gem: gemini,
  Sco: scorpius,
  CrB: corona,
  Sgr: sagittarius,
  Cen: centaurus,
};

export function figurePaths(iau: string, at: At) {
  const draw = DRAW[iau];
  if (!draw) return [];
  return draw(at).filter((path) => path.length > 0);
}
