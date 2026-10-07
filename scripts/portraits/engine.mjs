import { PROPS } from "./props.mjs";

const SKIN = {
  olive: ["#f6ddc8", "#e2b48f", "#b57d5c"],
  fair: ["#f8e4d6", "#f0ccb6", "#d29a84"],
  deep: ["#e6b890", "#c4845c", "#8d5a38"],
  bronze: ["#f0c9a4", "#d09768", "#a56b42"],
  pale: ["#f7e8e0", "#e8d0c4", "#c9a496"],
};

const HAIR = {
  white: ["#f7f4ef", "#d9d3c8", "#a39c92"],
  black: ["#4a403c", "#2a2320", "#161311"],
  brown: ["#6b4b34", "#3e2a1e", "#24160f"],
  auburn: ["#8a4e32", "#5c301c", "#3a1c10"],
  honey: ["#e8c78a", "#c4964a", "#8a6428"],
  dark: ["#3a312c", "#241c18", "#120e0c"],
  sea: ["#3e5c62", "#243e44", "#14282c"],
  vine: ["#2c4034", "#1c2c24", "#101810"],
};

const SLOTS = {
  skyR: [478, 168, 1.05],
  skyL: [120, 175, 1],
  left: [108, 280, 0.95],
  right: [492, 300, 0.95],
  staffL: [72, 450, 1.12],
  staffR: [528, 450, 1.12],
  lowL: [128, 630, 1.05],
  lowR: [470, 620, 1.05],
  midL: [118, 470, 1],
  midR: [482, 480, 1],
};

function shade(hex, amt) {
  const n = hex.replace("#", "");
  const t = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  const ch = [0, 2, 4].map((i) => {
    const v = parseInt(n.slice(i, i + 2), 16);
    return Math.max(0, Math.min(255, Math.round(v + (t - v) * p)));
  });
  return `#${ch.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function defaults(s) {
  return {
    scene: "olympus",
    skin: "olive",
    hair: "long",
    hairColor: "dark",
    beard: "none",
    age: "adult",
    garment: "chiton",
    garmentColor: "#f3efe4",
    trim: "#c9a54e",
    crown: "none",
    crest: "#8c2f2b",
    helmet: "#c9a54e",
    turn: 1,
    wings: "none",
    form: "bust",
    brow: "soft",
    mouth: "calm",
    gaze: "front",
    jewels: false,
    hood: "none",
    chest: "none",
    props: [],
    sky: ["#f7f1e4", "#e7dcc8"],
    wash: "#c9a54e",
    ...s,
  };
}

function stars(seed, n, yMax = 260) {
  let s = seed;
  let out = "";
  for (let i = 0; i < n; i++) {
    s = (s * 16807 + 11) % 2147483647;
    const x = 30 + (s % 540);
    s = (s * 16807 + 11) % 2147483647;
    const y = 24 + (s % yMax);
    const r = 0.8 + (s % 4) * 0.35;
    out += `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" fill="#f7f4ee" opacity="0.85"/>`;
  }
  return out;
}

function sceneArt(s) {
  const wash = s.wash;
  switch (s.scene) {
    case "sea":
      return `
        <path d="M0 560 C80 530 140 590 230 555 C330 515 400 575 600 540 L600 800 L0 800Z" fill="${wash}" opacity="0.28"/>
        <path d="M0 650 C120 610 200 690 320 640 C440 590 520 670 600 640 L600 800 L0 800Z" fill="#164e56" opacity="0.22"/>
        <path d="M40 590 q30 -18 60 0 M180 570 q26 -14 52 0 M360 600 q34 -16 64 0" fill="none" stroke="#7eb8c4" stroke-width="3" opacity="0.55"/>`;
    case "sky":
      return `
        <ellipse cx="150" cy="110" rx="78" ry="18" fill="#fff" opacity="0.55"/>
        <ellipse cx="430" cy="86" rx="96" ry="16" fill="#fff" opacity="0.45"/>
        <ellipse cx="300" cy="150" rx="60" ry="12" fill="#fff" opacity="0.28"/>`;
    case "night":
      return `<rect width="600" height="420" fill="${wash}" opacity="0.2"/>${stars(s.slug.length * 97, 28)}`;
    case "void":
      return `
        <path d="M0 0 H600 V800 H0Z" fill="#1a1428" opacity="0.18"/>
        <path d="M80 40 C200 160 120 300 260 420 C380 520 300 640 420 800" fill="none" stroke="#f7f4ee" stroke-width="18" opacity="0.08"/>
        ${stars(11, 18, 700)}`;
    case "earth":
      return `
        <path d="M0 640 C80 600 160 670 260 630 C380 580 480 660 600 620 L600 800 L0 800Z" fill="#5c6b3a" opacity="0.25"/>
        <path d="M0 700 C140 670 240 740 600 690 L600 800 L0 800Z" fill="#3e5230" opacity="0.2"/>`;
    case "wheat":
      return `
        <path d="M0 620 H600 V800 H0Z" fill="#e6c56a" opacity="0.18"/>
        ${[40, 90, 140, 460, 510, 555].map((x) => `<path d="M${x} 760 V680 M${x} 730 l-8 -8 M${x} 710 l8 -8 M${x} 690 l-7 -6" stroke="#c9a54e" stroke-width="2" opacity="0.7"/>`).join("")}`;
    case "forge":
      return `
        <radialGradient id="forge" cx="70%" cy="80%" r="45%"><stop offset="0%" stop-color="#e25a2a" stop-opacity="0.35"/><stop offset="100%" stop-color="#e25a2a" stop-opacity="0"/></radialGradient>
        <rect width="600" height="800" fill="url(#forge)"/>
        <path d="M430 700 H560 V760 H430Z" fill="#4e5258" opacity="0.35"/>`;
    case "underworld":
      return `
        <path d="M70 80 H150 V520 H70Z" fill="#2a2140" opacity="0.16"/>
        <path d="M450 80 H530 V520 H450Z" fill="#2a2140" opacity="0.16"/>
        <path d="M0 680 H600 V800 H0Z" fill="#1a1428" opacity="0.2"/>`;
    case "grove":
      return `
        <circle cx="80" cy="180" r="70" fill="#5c6b3a" opacity="0.16"/>
        <circle cx="530" cy="150" r="90" fill="#3e5230" opacity="0.14"/>
        <circle cx="500" cy="230" r="50" fill="#6e8a3a" opacity="0.12"/>`;
    case "olympus":
      return `
        <g fill="#f7f4ee" opacity="0.4">
          <rect x="34" y="90" width="26" height="500"/>
          <rect x="540" y="90" width="26" height="500"/>
          <rect x="26" y="74" width="42" height="16"/>
          <rect x="532" y="74" width="42" height="16"/>
        </g>`;
    case "cave":
      return `
        <path d="M0 0 H600 V260 C480 380 120 360 0 240Z" fill="#3a342e" opacity="0.16"/>
        <path d="M0 0 H80 V800 H0Z" fill="#2b2620" opacity="0.08"/>
        <path d="M520 0 H600 V800 H520Z" fill="#2b2620" opacity="0.08"/>`;
    case "roses":
      return `
        <circle cx="70" cy="640" r="18" fill="#8c2f2b" opacity="0.2"/>
        <circle cx="110" cy="690" r="14" fill="#c46a6a" opacity="0.25"/>
        <circle cx="500" cy="660" r="16" fill="#a33b45" opacity="0.2"/>`;
    case "labyrinth":
      return `
        <path d="M40 40 H200 V160 H80 V100 H160" fill="none" stroke="#c9a54e" stroke-width="2" opacity="0.35"/>
        <path d="M400 60 H560 V200 H440 V120" fill="none" stroke="#c9a54e" stroke-width="2" opacity="0.3"/>`;
    case "storm":
      return `
        <path d="M0 80 H600 V220 C420 280 180 160 0 240Z" fill="#2a2140" opacity="0.2"/>
        <path d="M60 120 H200 M240 100 H420 M80 160 H180" stroke="#d5e3f2" stroke-width="3" opacity="0.25"/>`;
    case "sun":
      return `
        <circle cx="480" cy="120" r="54" fill="#f0d78a" opacity="0.85"/>
        ${Array.from({ length: 10 }, (_, i) => {
          const a = (i * Math.PI) / 5;
          const x1 = 480 + Math.cos(a) * 62;
          const y1 = 120 + Math.sin(a) * 62;
          const x2 = 480 + Math.cos(a) * 92;
          const y2 = 120 + Math.sin(a) * 92;
          return `<path d="M${x1.toFixed(0)} ${y1.toFixed(0)} L${x2.toFixed(0)} ${y2.toFixed(0)}" stroke="#c9a54e" stroke-width="3" opacity="0.7"/>`;
        }).join("")}`;
    case "hearth":
      return `<ellipse cx="300" cy="700" rx="160" ry="28" fill="#e25a2a" opacity="0.16"/>`;
    default:
      return "";
  }
}

function hairBack(s) {
  const [hi, mid] = HAIR[s.hairColor] ?? HAIR.dark;
  if (s.hair === "bald" || s.hair === "snakes") return "";
  if (s.hair === "curls") {
    const circles = Array.from({ length: 18 }, (_, i) => {
      const ang = Math.PI + (Math.PI * i) / 17;
      const drop = s.beard === "none" ? 100 : 118;
      const x = 300 + Math.cos(ang) * drop;
      const y = 318 + Math.sin(ang) * (drop + 14);
      const r = 22 + (i % 3) * 4;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>`;
    }).join("");
    const sides =
      s.age === "youth"
        ? ""
        : `<path d="M190 370 C155 450 150 530 176 610 C214 500 236 440 252 400Z"/><path d="M410 370 C445 450 450 530 424 610 C386 500 364 440 348 400Z"/>`;
    return `<g fill="url(#${s.slug}-hair)">${circles}${sides}</g><path d="M250 250 Q300 230 360 270" fill="none" stroke="${hi}" stroke-width="8" opacity="0.35" stroke-linecap="round"/>`;
  }
  if (s.hair === "short") {
    return `<path d="M214 300 C200 210 250 168 300 164 C360 168 408 220 392 310 C370 250 330 236 300 240 C260 236 230 260 214 300Z" fill="url(#${s.slug}-hair)"/>`;
  }
  if (s.hair === "tied") {
    return `
      <path d="M210 280 C190 190 250 150 300 150 C370 156 420 210 400 300 C380 240 340 220 300 224 C255 220 230 250 210 280Z" fill="url(#${s.slug}-hair)"/>
      <path d="M392 280 C430 340 450 430 410 520 C370 430 360 340 372 300Z" fill="${mid}"/>
      <circle cx="430" cy="250" r="16" fill="${mid}"/>`;
  }
  if (s.hair === "bun") {
    return `
      <path d="M206 300 C190 190 248 156 300 152 C358 156 414 200 396 310 C370 250 250 250 206 300Z" fill="url(#${s.slug}-hair)"/>
      <circle cx="300" cy="148" r="28" fill="url(#${s.slug}-hair)"/>
      <path d="M230 300 C210 380 200 460 214 540" fill="none" stroke="${mid}" stroke-width="16" stroke-linecap="round"/>
      <path d="M372 300 C396 390 402 470 380 560" fill="none" stroke="${mid}" stroke-width="18" stroke-linecap="round"/>`;
  }
  // long waves
  return `
    <path d="M300 168 C390 160 430 230 418 320 C458 400 470 520 424 640 C360 500 338 400 318 360 C292 400 250 500 176 640 C140 500 150 380 190 300 C170 220 220 160 300 168Z" fill="url(#${s.slug}-hair)"/>
    <path d="M228 250 C196 320 188 400 214 490" fill="none" stroke="${mid}" stroke-width="20" stroke-linecap="round"/>
    <path d="M372 246 C408 320 414 410 386 510" fill="none" stroke="${hi}" stroke-width="16" stroke-linecap="round" opacity="0.9"/>`;
}

function snakes() {
  const colors = ["#3e6b45", "#2f5538", "#527a48", "#243f2c", "#3e6b45"];
  let out = `<path d="M210 300 C190 200 250 160 300 158 C360 160 420 210 398 310 C360 250 250 250 210 300Z" fill="#2f5538"/>`;
  for (let i = 0; i < 12; i++) {
    const ang = Math.PI * (0.95 + (1.1 * i) / 11);
    const x1 = 300 + Math.cos(ang) * 86;
    const y1 = 300 + Math.sin(ang) * 96;
    const x2 = 300 + Math.cos(ang) * 158;
    const y2 = 292 + Math.sin(ang) * 168;
    const c = colors[i % colors.length];
    const bend = i % 2 === 0 ? 22 : -22;
    out += `<path d="M${x1.toFixed(0)} ${y1.toFixed(0)} Q ${(x2 + bend).toFixed(0)} ${(y2 + 16).toFixed(0)} ${x2.toFixed(0)} ${y2.toFixed(0)}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`;
    out += `<ellipse cx="${x2.toFixed(0)}" cy="${y2.toFixed(0)}" rx="9" ry="5.5" fill="${c}"/>`;
    out += `<circle cx="${(x2 + (bend > 0 ? 3 : -3)).toFixed(0)}" cy="${(y2 - 1).toFixed(0)}" r="1.3" fill="#f0d78a"/>`;
  }
  return out;
}

function facePath(age) {
  if (age === "youth") {
    return "M300 228 C360 234 376 292 370 344 C364 394 340 440 300 450 C260 440 236 394 230 344 C224 292 240 234 300 228Z";
  }
  if (age === "elder") {
    return "M300 204 C378 212 400 284 388 348 C376 416 346 470 300 480 C254 470 224 416 212 348 C200 284 222 212 300 204Z";
  }
  return "M300 214 C372 220 392 280 384 340 C376 400 348 452 300 462 C252 452 224 400 216 340 C208 280 228 220 300 214Z";
}

function features(s) {
  const dx = (s.turn ?? 1) * 7;
  const youth = s.age === "youth";
  const elder = s.age === "elder";
  const eyeY = youth ? 340 : elder ? 330 : 334;
  const lx = 300 - (youth ? 60 : 68) + dx;
  const rx = 300 + (youth ? 60 : 68) + dx;
  const erx = youth ? 16 : elder ? 14 : 15;
  const ery = youth ? 10 : elder ? 8 : 9.5;
  const gazeX = s.gaze === "side" ? s.turn * 3 : 1;
  const gazeY = s.gaze === "down" ? 3 : 0;
  const brow = s.brow === "stern"
    ? [`M${lx - 18} ${eyeY - 24} Q${lx} ${eyeY - 30} ${lx + 20} ${eyeY - 18}`, `M${rx - 20} ${eyeY - 18} Q${rx} ${eyeY - 30} ${rx + 18} ${eyeY - 24}`]
    : [`M${lx - 16} ${eyeY - 22} Q${lx} ${eyeY - 34} ${lx + 22} ${eyeY - 20}`, `M${rx - 22} ${eyeY - 20} Q${rx} ${eyeY - 34} ${rx + 16} ${eyeY - 22}`];
  const mouthY = youth ? 408 : elder ? 420 : 412;
  const mx = 300 + dx;
  const smile = s.mouth === "smile" ? 16 : s.mouth === "sorrow" ? 6 : 12;
  const lip = s.mouth === "smile" ? "#c96b6e" : "#c47d78";
  const wrinkles = elder
    ? `<path d="M250 270 Q300 262 350 272" fill="none" stroke="#c9956a" stroke-width="1.5" opacity="0.75"/>
       <path d="M${lx - 8} ${eyeY + 14} q8 6 16 -2" fill="none" stroke="#c9956a" stroke-width="1.2" opacity="0.6"/>
       <path d="M${rx - 8} ${eyeY + 14} q8 6 16 -2" fill="none" stroke="#c9956a" stroke-width="1.2" opacity="0.6"/>`
    : "";
  return `
    <path d="${brow[0]}" fill="none" stroke="#6e4b36" stroke-width="${s.brow === "stern" ? 3.3 : 2.7}" stroke-linecap="round"/>
    <path d="${brow[1]}" fill="none" stroke="#6e4b36" stroke-width="${s.brow === "stern" ? 3.3 : 2.7}" stroke-linecap="round"/>
    <ellipse cx="${lx}" cy="${eyeY}" rx="${erx}" ry="${ery}" fill="#fbf6f1"/>
    <ellipse cx="${rx}" cy="${eyeY}" rx="${erx}" ry="${ery}" fill="#fbf6f1"/>
    <circle cx="${lx + gazeX}" cy="${eyeY + gazeY}" r="${youth ? 6 : 5.6}" fill="#3a2e26"/>
    <circle cx="${rx + gazeX}" cy="${eyeY + gazeY}" r="${youth ? 6 : 5.6}" fill="#3a2e26"/>
    <circle cx="${lx + gazeX + 2}" cy="${eyeY + gazeY - 2}" r="1.7" fill="#fff"/>
    <circle cx="${rx + gazeX + 2}" cy="${eyeY + gazeY - 2}" r="1.7" fill="#fff"/>
    <path d="M${lx - 14} ${eyeY - 1} Q${lx} ${eyeY - 10} ${lx + 15} ${eyeY - 1}" fill="none" stroke="#2b2620" stroke-width="1.5"/>
    <path d="M${rx - 15} ${eyeY - 1} Q${rx} ${eyeY - 10} ${rx + 14} ${eyeY - 1}" fill="none" stroke="#2b2620" stroke-width="1.5"/>
    <path d="M${mx + 2} ${eyeY + 6} C${mx - 2} ${eyeY + 28} ${mx - 12} ${eyeY + 44} ${mx - 20} ${mouthY - 22}" fill="none" stroke="#a86b52" stroke-width="2.3" stroke-linecap="round"/>
    <path d="M${mx - 20} ${mouthY - 22} C${mx - 6} ${mouthY - 14} ${mx + 12} ${mouthY - 14} ${mx + 16} ${mouthY - 24}" fill="none" stroke="#a86b52" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="${lx - 22}" cy="${eyeY + 32}" rx="16" ry="8" fill="#e7a090" opacity="0.25"/>
    <ellipse cx="${rx + 18}" cy="${eyeY + 32}" rx="16" ry="8" fill="#e7a090" opacity="0.2"/>
    <path d="M${mx - 28} ${mouthY} Q${mx} ${mouthY + smile} ${mx + 28} ${mouthY} Q${mx} ${mouthY + smile - 8} ${mx - 28} ${mouthY}Z" fill="${lip}"/>
    <path d="M${mx - 20} ${mouthY} Q${mx} ${mouthY - 5} ${mx + 20} ${mouthY}" fill="none" stroke="#a85d62" stroke-width="1.2"/>
    ${wrinkles}`;
}

function beard(s) {
  if (s.beard === "none" || s.hair === "snakes") return "";
  const id = `${s.slug}-hair`;
  if (s.beard === "short") {
    return `<path d="M236 400 C220 430 230 455 300 460 C370 455 380 430 364 400 C340 414 260 414 236 400Z" fill="url(#${id})"/>`;
  }
  if (s.beard === "long") {
    return `
      <path d="M214 390 C180 470 170 580 230 680 C270 620 300 700 360 660 C430 600 430 470 386 390 C350 420 250 420 214 390Z" fill="url(#${id})"/>
      <path d="M250 470 Q300 520 360 480" fill="none" stroke="#fff" stroke-width="2" opacity="0.2"/>`;
  }
  return `
    <path d="M228 418 C206 470 220 530 300 548 C380 530 394 470 372 418 C340 436 260 436 228 418Z" fill="url(#${id})"/>
    <path d="M268 408 Q300 396 332 408" fill="none" stroke="url(#${id})" stroke-width="7" stroke-linecap="round"/>
    <path d="M250 460 Q300 500 348 456" fill="none" stroke="#fff" stroke-width="2" opacity="0.22"/>`;
}

function ears(s) {
  const skin = SKIN[s.skin][1];
  let extra = "";
  if (s.ears === "donkey") {
    extra = `<ellipse cx="214" cy="250" rx="12" ry="36" fill="${skin}"/><ellipse cx="386" cy="250" rx="12" ry="36" fill="#c9956a"/>`;
  } else if (s.ears === "goat") {
    extra = `<path d="M200 300 L168 230 L230 280Z" fill="${skin}"/><path d="M400 300 L432 230 L370 280Z" fill="#c9956a"/>`;
  }
  return `
    ${extra}
    <path d="M214 330 C196 328 186 358 202 384 C216 372 220 350 214 330Z" fill="${skin}"/>
    <path d="M386 330 C404 328 414 358 398 384 C384 372 380 350 386 330Z" fill="${shade(skin, -0.08)}"/>`;
}

function crown(s) {
  const gold = "#c9a54e";
  const hi = "#f0d78a";
  switch (s.crown) {
    case "diadem":
      return `<path d="M228 258 Q300 232 372 258" fill="none" stroke="${gold}" stroke-width="7" stroke-linecap="round"/>
        <path d="M292 236 L300 210 L308 236Z" fill="${hi}" stroke="#9a7624" stroke-width="1"/>`;
    case "laurel":
      return `<g fill="#5c6b3a">${[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const ang = Math.PI + (Math.PI * (i + 0.4)) / 7.2;
        const x = 300 + Math.cos(ang) * 108;
        const y = 300 + Math.sin(ang) * 118;
        return `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="16" ry="7" transform="rotate(${((ang * 180) / Math.PI).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})"/>`;
      }).join("")}</g>`;
    case "wheat":
      return `<g stroke="#c9a54e" fill="#e6c56a">${[-50, -25, 0, 25, 50].map((dx) => `<path d="M${300 + dx} 250 V${200 - Math.abs(dx) / 4}" stroke-width="2"/><ellipse cx="${300 + dx}" cy="${214 - Math.abs(dx) / 5}" rx="5" ry="12"/>`).join("")}</g>`;
    case "ivy":
      return `<path d="M210 270 Q300 200 390 270" fill="none" stroke="#3e6b45" stroke-width="4"/>
        ${[[230, 250], [270, 226], [310, 220], [350, 236], [385, 262]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="7" fill="#3e6b45" transform="rotate(-20 ${x} ${y})"/>`).join("")}
        <circle cx="300" cy="214" r="4" fill="#5c3d78"/>`;
    case "radiate":
      return `<g stroke="${hi}" stroke-width="4" stroke-linecap="round">${[-70, -46, -24, 0, 24, 46, 70].map((dx) => `<path d="M${300 + dx} 230 L${300 + dx * 1.15} ${150 - Math.abs(dx) / 6}"/>`).join("")}</g>
        <circle cx="300" cy="210" r="16" fill="${hi}" opacity="0.9"/>`;
    case "crescent":
      return `<path d="M300 168 A28 28 0 1 0 300 214 A20 20 0 1 1 300 168Z" fill="${hi}"/>`;
    case "petasos":
      return `
        <ellipse cx="300" cy="230" rx="108" ry="18" fill="#e6c56a"/>
        <path d="M240 228 C246 170 354 170 360 228Z" fill="#c9a54e"/>
        <path d="M214 220 C180 200 170 230 198 236" fill="#f7f4ee" stroke="${gold}"/>
        <path d="M386 220 C420 200 430 230 402 236" fill="#f7f4ee" stroke="${gold}"/>`;
    case "helmet":
      return `
        <path d="M206 292 C196 200 250 148 300 144 C358 148 412 206 396 296 L374 274 C360 205 332 176 300 174 C264 176 236 210 226 274Z" fill="${s.helmet}"/>
        <path d="M226 274 Q300 246 374 274 L362 292 Q300 270 238 292Z" fill="${shade(s.helmet, 0.25)}"/>
        <path d="M286 150 C292 70 308 70 314 150 C360 78 330 36 300 28 C270 36 240 78 286 150Z" fill="${s.crest}"/>
        <path d="M300 48 V146" stroke="#fff" stroke-width="2" opacity="0.35"/>`;
    case "mural":
      return `
        <path d="M214 250 H386 V274 H214Z" fill="${gold}"/>
        <path d="M220 250 V226 H244 V250 M258 250 V218 H286 V250 M300 250 V214 H328 V250 M342 250 V226 H370 V250" fill="${hi}"/>`;
    case "horns":
      return `
        <path d="M230 250 C200 180 150 170 168 230" fill="none" stroke="#e6dcc8" stroke-width="10" stroke-linecap="round"/>
        <path d="M370 250 C400 180 450 170 432 230" fill="none" stroke="#d9d0c2" stroke-width="10" stroke-linecap="round"/>`;
    case "stars":
      return `<g fill="${hi}">${[-40, -14, 14, 40].map((dx, i) => `<path d="M${300 + dx} ${200 - (i % 2) * 8} l3 8 h8 l-6 5 2 8 -7 -5 -7 5 2 -8 -6 -5 h8z"/>`).join("")}</g>`;
    case "poppy":
      return `<g>${[-36, 0, 36].map((dx) => `<circle cx="${300 + dx}" cy="230" r="12" fill="#8c2f2b"/><circle cx="${300 + dx}" cy="230" r="4" fill="#2b2620"/>`).join("")}</g>`;
    case "veil":
      return `
        <path d="M188 300 C170 180 230 130 300 126 C390 130 440 190 414 320 C450 420 430 560 360 620 L250 600 C180 540 160 420 188 300Z" fill="${shade(s.garmentColor, 0.08)}" opacity="0.96"/>
        <path d="M230 250 Q300 210 372 258" fill="none" stroke="${s.trim}" stroke-width="3" opacity="0.7"/>`;
    case "phrygian":
      return `<path d="M214 300 C200 210 250 170 300 176 C340 160 390 120 372 188 C400 230 390 300 360 310 C330 250 250 250 214 300Z" fill="#8c2f2b"/>`;
    case "pilos":
      return `<path d="M214 300 C230 180 370 180 386 300 C360 270 240 270 214 300Z" fill="#e6dcc8" stroke="#c9a54e" stroke-width="2"/>`;
    case "donkey":
      return "";
    default:
      return "";
  }
}

function wings(kind) {
  if (kind === "none") return "";
  const color = kind === "dark" ? "#1a1428" : kind === "wax" ? "#f4efe4" : kind === "soft" ? "#f7f4ee" : "#f3efe6";
  const stroke = kind === "dark" ? "#3a3450" : "#e0d5c4";
  const y = 520;
  return `
    <path d="M250 ${y} C160 ${y - 120} 70 ${y - 40} 64 ${y + 30} C130 ${y + 10} 190 ${y + 36} 246 ${y + 48}Z" fill="${color}" stroke="${stroke}"/>
    <path d="M350 ${y} C440 ${y - 120} 530 ${y - 40} 536 ${y + 30} C470 ${y + 10} 410 ${y + 36} 354 ${y + 48}Z" fill="${color}" stroke="${stroke}"/>
    <path d="M120 ${y - 20} L210 ${y + 10} M150 ${y + 10} L230 ${y + 30} M430 ${y + 10} L360 ${y + 30}" stroke="${stroke}" stroke-width="2"/>
    ${kind === "wax" ? `<ellipse cx="96" cy="${y - 10}" rx="7" ry="16" fill="#f7f4ee" transform="rotate(-20 96 ${y - 10})"/><ellipse cx="150" cy="${y - 70}" rx="6" ry="14" fill="#f4efe4"/><ellipse cx="470" cy="${y - 30}" rx="6" ry="13" fill="#f7f4ee"/>` : ""}`;
}

function garment(s) {
  const c = s.garmentColor;
  const dark = shade(c, -0.25);
  const id = `${s.slug}-cloth`;
  if (s.hood === "lion") {
    return `
      <path d="M230 490 C170 530 100 600 86 820 L514 820 C500 600 430 530 370 490 C340 512 260 512 230 490Z" fill="#c4a06a"/>
      <path d="M210 530 Q180 660 150 820 M300 520 Q320 680 340 820 M390 530 Q430 670 470 820" fill="none" stroke="#a88448" stroke-width="3" opacity="0.5"/>
      <g transform="translate(168 530)">
        <circle r="34" fill="#b8924e"/>
        <circle cy="6" r="16" fill="#e6c48a"/>
        <circle cx="-6" cy="4" r="2.2" fill="#2b2620"/>
        <circle cx="6" cy="4" r="2.2" fill="#2b2620"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const rad = (a * Math.PI) / 180;
          return `<circle cx="${(Math.cos(rad) * 32).toFixed(0)}" cy="${(Math.sin(rad) * 32).toFixed(0)}" r="9" fill="#a07838"/>`;
        }).join("")}
      </g>
      <path d="M250 560 Q300 600 350 555" fill="none" stroke="#8a6230" stroke-width="4"/>`;
  }
  if (s.garment === "armor") {
    return `
      <path d="M214 500 C160 540 120 620 110 820 L490 820 C480 620 440 540 386 500 C350 524 250 524 214 500Z" fill="${id ? `url(#${id})` : c}"/>
      <path d="M248 530 H352 L340 700 H260Z" fill="${shade(c, 0.12)}" stroke="${s.trim}" stroke-width="2"/>
      <path d="M300 530 V700" stroke="${s.trim}" stroke-width="2"/>
      <path d="M230 700 H370" stroke="${dark}" stroke-width="8"/>
      ${[240, 270, 300, 330, 360].map((x) => `<path d="M${x} 708 V800" stroke="${shade(c, -0.15)}" stroke-width="8"/>`).join("")}
      ${s.chest === "gorgoneion" ? `<g transform="translate(300 600) scale(0.55)">${PROPS.aegis()}</g>` : `<circle cx="300" cy="590" r="8" fill="${s.trim}"/>`}`;
  }
  const pleats = [ -80, -30, 20, 70 ].map((dx, i) => {
    const x1 = 300 + dx * 0.2;
    const x2 = 300 + dx;
    return `M${x1} 520 Q${x2 + (i % 2 ? 10 : -8)} 660 ${x2} 810`;
  }).join(" ");
  const strap = s.garment === "hunt" ? `<path d="M230 500 L360 640" stroke="${s.trim}" stroke-width="6"/><circle cx="250" cy="512" r="5" fill="${s.trim}"/>` : "";
  const apron = s.garment === "smith"
    ? `<path d="M250 530 H360 L348 760 H262Z" fill="#6e5844"/><path d="M250 530 H360" stroke="#c9a54e" stroke-width="3"/>`
    : "";
  const spots = s.cloak === "leopard"
    ? [ [260, 580], [330, 610], [290, 680], [360, 720], [240, 730], [320, 780] ].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#2b2620" opacity="0.35"/>`).join("")
    : "";
  return `
    <path d="M246 478 C190 512 112 575 88 820 L512 820 C488 575 410 512 354 478 C328 500 272 500 246 478Z" fill="url(#${id})"/>
    <path d="${pleats}" fill="none" stroke="${dark}" stroke-width="3" opacity="0.35"/>
    <path d="M130 748 H470" stroke="${s.trim}" stroke-width="5"/>
    ${s.jewels ? `<path d="M250 500 Q300 528 350 500" fill="none" stroke="${s.trim}" stroke-width="3"/><circle cx="300" cy="522" r="5" fill="${s.trim}"/>` : `<circle cx="300" cy="505" r="6" fill="${s.trim}"/>`}
    ${strap}${apron}${spots}`;
}

function neck(s) {
  const w = s.garment === "armor" || s.beard !== "none" ? 34 : 28;
  return `
    <path d="M${300 - w + 8} 430 L${300 - w - 2} 505 L${300 + w + 2} 505 L${300 + w - 8} 430Z" fill="url(#${s.slug}-skin)"/>
    <path d="M300 455 L${300 + w} 505" stroke="#a86b52" stroke-width="8" opacity="0.18" fill="none"/>`;
}

function cyclopsFace() {
  return `
    <path d="M300 200 C390 210 410 300 396 370 C380 450 340 490 300 498 C260 490 220 450 204 370 C190 300 210 210 300 200Z" fill="url(#skin-face)"/>
    <path d="M210 300 Q300 250 390 300" fill="none" stroke="#6e4b36" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="300" cy="336" rx="36" ry="26" fill="#fbf6f1"/>
    <circle cx="300" cy="338" r="14" fill="#3a2e26"/>
    <circle cx="306" cy="332" r="4" fill="#fff"/>
    <path d="M300 360 C292 390 286 404 278 414" fill="none" stroke="#a86b52" stroke-width="3"/>
    <path d="M278 414 C292 422 312 420 320 412" fill="none" stroke="#a86b52" stroke-width="2.4"/>
    <path d="M262 430 Q300 448 338 430" fill="#c47d78"/>
    <path d="M230 250 C180 180 150 220 190 280" fill="#6b4b34"/>
    <path d="M370 250 C420 180 450 220 410 280" fill="#3e2a1e"/>`;
}

function bullHead() {
  return `
    <path d="M150 360 C120 260 180 160 250 150 C270 80 210 70 230 160" fill="#e6dcc8"/>
    <path d="M450 360 C480 260 420 160 350 150 C330 80 390 70 370 160" fill="#d9d0c2"/>
    <path d="M300 180 C400 170 430 280 410 380 C390 470 250 500 210 400 C180 300 200 190 300 180Z" fill="#c4a06a"/>
    <ellipse cx="300" cy="400" rx="70" ry="48" fill="#e6c48a"/>
    <ellipse cx="250" cy="250" rx="28" ry="18" fill="#a88448"/>
    <ellipse cx="350" cy="250" rx="28" ry="18" fill="#a88448"/>
    <ellipse cx="276" cy="330" rx="14" ry="12" fill="#fbf6f1"/>
    <ellipse cx="340" cy="330" rx="14" ry="12" fill="#fbf6f1"/>
    <circle cx="278" cy="332" r="6" fill="#2b2620"/>
    <circle cx="342" cy="332" r="6" fill="#2b2620"/>
    <ellipse cx="278" cy="408" rx="8" ry="12" fill="#6e5844"/>
    <ellipse cx="322" cy="408" rx="8" ry="12" fill="#6e5844"/>
    <path d="M250 430 Q300 455 350 430" fill="none" stroke="#6e5844" stroke-width="3"/>`;
}

function renderBust(s) {
  const special = s.form === "cyclops" || s.form === "minotaur";
  const specialHead = s.form === "cyclops" ? cyclopsFace().replaceAll("url(#skin-face)", `url(#${s.slug}-skin)`) : s.form === "minotaur" ? bullHead() : "";
  const hair = special || s.crown === "veil" ? "" : s.hair === "snakes" ? snakes() : hairBack(s);
  return `
    ${wings(s.wings)}
    ${hair}
    ${garment(s)}
    ${neck(s)}
    ${s.crown === "veil" ? crown(s) : ""}
    ${specialHead || `
      <path d="${facePath(s.age)}" fill="url(#${s.slug}-skin)"/>
      ${s.ears === "goat" || s.ears === "donkey" ? ears(s) : ears({ ...s, ears: "human" })}
      <ellipse cx="274" cy="300" rx="36" ry="22" fill="#fff" opacity="0.12"/>
      ${features(s)}
      ${beard(s)}
      ${s.crown !== "veil" ? crown(s) : `<path d="M230 250 Q300 228 370 252" fill="none" stroke="${s.trim}" stroke-width="3" opacity="0.65"/>`}
      ${s.templeWings ? `<path d="M200 300 C160 270 150 320 196 324" fill="#f7f4ee" stroke="#e6dcc8"/><path d="M400 300 C440 270 450 320 404 324" fill="#f7f4ee" stroke="#e6dcc8"/>` : ""}
    `}
    ${s.companion === "anchises" ? anchises() : ""}`;
}

function anchises() {
  return `
    <g transform="translate(430 390) scale(0.72)">
      <circle cy="-40" r="28" fill="#e8d0c4"/>
      <path d="M-20 -10 C-30 20 -16 40 0 44 C20 40 34 16 22 -10Z" fill="#d9d3c8"/>
      <path d="M-16 20 H16 V70 H-16Z" fill="#6e5844"/>
      <path d="M-8 -70 Q0 -90 8 -70" stroke="#c9a54e" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(250 560) scale(0.45)">
      <path d="M-10 20 h8 v-16 h-8z M8 20 h8 v-16 h-8z" fill="#f0d78a"/>
      <circle cx="-6" cy="-2" r="5" fill="#f7f4ee"/>
      <circle cx="12" cy="-2" r="5" fill="#f7f4ee"/>
    </g>`;
}

function renderPegasus() {
  return `
    <path d="M430 300 C500 180 560 200 540 280 C580 260 590 330 540 340 C560 420 430 460 360 400Z" fill="#f7f4ee" stroke="#e6dcc8" stroke-width="2"/>
    <path d="M500 240 L470 300 M520 220 L500 300 M470 210 L450 290" stroke="#e6dcc8" stroke-width="2"/>
    <path d="M120 520 C80 430 140 300 250 280 C300 200 390 210 420 300 C470 280 520 340 480 400 C520 460 420 520 340 470 C300 530 180 560 120 520Z" fill="#f7f4ee" stroke="#d9d3c8" stroke-width="2"/>
    <path d="M250 300 C200 250 160 280 180 330 C150 300 120 340 160 370" fill="none" stroke="#f7f4ee" stroke-width="10" stroke-linecap="round"/>
    <path d="M300 340 C340 300 400 310 430 360" fill="none" stroke="#e7e2d8" stroke-width="8"/>
    <circle cx="390" cy="330" r="5" fill="#2b2620"/>
    <path d="M430 360 L470 390" stroke="#e6dcc8" stroke-width="4"/>
    <path d="M200 470 C160 520 180 600 240 640" fill="none" stroke="#f7f4ee" stroke-width="16" stroke-linecap="round"/>
    <ellipse cx="300" cy="700" rx="120" ry="16" fill="#1f3b57" opacity="0.08"/>`;
}

function renderHydra() {
  const necks = [
    [180, 180, "#3e6b45"],
    [250, 120, "#2f5538"],
    [310, 90, "#527a48"],
    [370, 130, "#2a4a30"],
    [430, 190, "#3e6b45"],
    [140, 250, "#24402c"],
    [470, 250, "#3e6b45"],
  ];
  return `
    <path d="M80 620 C160 520 260 560 300 500 C360 560 460 520 540 640 C480 760 120 780 80 620Z" fill="#2f5538"/>
    ${necks.map(([x, y, c]) => `
      <path d="M300 560 C${x} 480 ${x - 10} ${y + 80} ${x} ${y + 30}" fill="none" stroke="${c}" stroke-width="18" stroke-linecap="round"/>
      <ellipse cx="${x}" cy="${y}" rx="26" ry="18" fill="${c}"/>
      <circle cx="${x - 8}" cy="${y - 2}" r="3" fill="#f0d78a"/>
      <circle cx="${x + 8}" cy="${y - 2}" r="3" fill="#f0d78a"/>
      <path d="M${x - 10} ${y + 8} Q${x} ${y + 16} ${x + 10} ${y + 8}" fill="none" stroke="#1a2e20" stroke-width="1.5"/>
    `).join("")}
    <path d="M0 700 H600 V800 H0Z" fill="#1f6f78" opacity="0.25"/>`;
}

function renderChimera() {
  return `
    <path d="M70 460 C60 360 160 320 250 360 C300 300 420 320 460 400 C540 380 580 460 520 520 C560 600 400 640 300 580 C200 650 80 580 70 460Z" fill="#c4a06a"/>
    <circle cx="210" cy="390" r="48" fill="#b8924e"/>
    ${[0, 50, 100, 150, 200, 250, 300].map((a) => {
      const rad = (a * Math.PI) / 180;
      return `<circle cx="${210 + Math.cos(rad) * 48}" cy="${390 + Math.sin(rad) * 40}" r="12" fill="#a07838"/>`;
    }).join("")}
    <circle cx="230" cy="386" r="4" fill="#2b2620"/>
    <path d="M250 400 L290 410" stroke="#6e5844" stroke-width="3"/>
    <path d="M250 390 C270 370 290 380 286 400" fill="#e25a2a" opacity="0.85"/>
    <g transform="translate(400 340)">
      <ellipse rx="26" ry="20" fill="#e6dcc8"/>
      <path d="M-16 -16 C-28 -40 -4 -36 0 -16 M10 -16 C16 -38 36 -30 22 -12" fill="none" stroke="#d9d0c2" stroke-width="4"/>
      <circle cx="8" cy="-2" r="2.4" fill="#2b2620"/>
    </g>
    <path d="M480 500 C540 560 520 660 470 700" fill="none" stroke="#3e6b45" stroke-width="14" stroke-linecap="round"/>
    <ellipse cx="470" cy="710" rx="16" ry="10" fill="#2f5538"/>
    <circle cx="476" cy="708" r="1.6" fill="#f0d78a"/>`;
}

function renderCerberus() {
  const head = (x, y, sc) => `
    <g transform="translate(${x} ${y}) scale(${sc})">
      <path d="M-30 10 C-50 -10 -20 -40 10 -30 C30 -50 60 -20 40 10 C60 20 40 50 10 40 C-10 60 -40 40 -30 10Z" fill="#2b2620"/>
      <path d="M-10 -30 L-24 -58 L4 -34Z" fill="#3a342e"/>
      <path d="M20 -28 L34 -54 L14 -24Z" fill="#3a342e"/>
      <circle cx="6" cy="-4" r="4" fill="#f0d78a"/>
      <circle cx="28" cy="-2" r="4" fill="#f0d78a"/>
      <ellipse cx="40" cy="10" rx="12" ry="8" fill="#4a403c"/>
    </g>`;
  return `
    ${head(300, 300, 1.35)}
    ${head(150, 360, 1.05)}
    ${head(450, 360, 1.05)}
    <path d="M120 460 C100 560 180 700 300 720 C420 700 500 560 480 460 C400 520 200 520 120 460Z" fill="#241c18"/>
    <path d="M430 640 C500 700 470 760 500 790" fill="none" stroke="#3e6b45" stroke-width="10" stroke-linecap="round"/>
    <ellipse cx="508" cy="792" rx="12" ry="7" fill="#2f5538"/>`;
}

function renderSphinx() {
  return `
    <path d="M80 560 C70 470 180 430 280 470 C340 420 470 450 520 530 C560 600 430 650 320 600 C240 660 100 640 80 560Z" fill="#c4a06a"/>
    <path d="M300 500 C360 360 500 340 540 420 C500 400 430 450 400 500Z" fill="#e6dcc8" stroke="#d9d0c2"/>
    <g transform="translate(250 400)">${`
      <path d="M0 -70 C50 -64 58 -10 46 30 C34 70 10 90 -10 86 C-40 70 -58 20 -50 -20 C-46 -60 -20 -74 0 -70Z" fill="#f0ccb6"/>
      <path d="M-46 -20 C-70 -70 -10 -90 0 -60 C20 -96 70 -60 46 -16 C30 -50 -30 -50 -46 -20Z" fill="#3e2a1e"/>
      <ellipse cx="-16" cy="4" rx="8" ry="5" fill="#fbf6f1"/>
      <ellipse cx="18" cy="4" rx="8" ry="5" fill="#fbf6f1"/>
      <circle cx="-14" cy="5" r="2.4" fill="#2b2620"/>
      <circle cx="20" cy="5" r="2.4" fill="#2b2620"/>
      <path d="M-8 28 Q4 36 16 26" fill="none" stroke="#a86b52" stroke-width="1.6"/>
      <path d="M-30 -80 Q0 -100 30 -78" fill="none" stroke="#c9a54e" stroke-width="4"/>
    `}</g>
    <path d="M150 620 L190 700 M220 630 L230 720" stroke="#a88448" stroke-width="8" stroke-linecap="round"/>`;
}

function renderSiren() {
  return `
    <path d="M180 430 C80 380 70 520 150 560 C120 640 250 700 300 600 C360 700 470 620 400 520 C500 500 500 390 400 400 C340 340 240 350 180 430Z" fill="#6e5a3a"/>
    <path d="M150 460 C40 420 30 520 120 500Z" fill="#5a482e"/>
    <path d="M430 450 C520 400 540 500 450 510Z" fill="#5a482e"/>
    <g transform="translate(300 340) scale(0.85)">
      <path d="M0 -80 C48 -74 58 -10 44 36 C20 78 -24 78 -44 30 C-58 -16 -40 -76 0 -80Z" fill="#f0ccb6"/>
      <path d="M-40 -30 C-20 -100 30 -104 46 -20 C20 -60 -20 -60 -40 -30Z" fill="#5c301c"/>
      <path d="M-50 10 C-80 80 -30 140 0 100 C-10 40 -20 20 -50 10Z" fill="#5c301c"/>
      <ellipse cx="-16" cy="0" rx="9" ry="6" fill="#fbf6f1"/>
      <ellipse cx="16" cy="0" rx="9" ry="6" fill="#fbf6f1"/>
      <circle cx="-14" cy="1" r="2.6" fill="#2b2620"/>
      <circle cx="18" cy="1" r="2.6" fill="#2b2620"/>
      <path d="M-12 28 Q0 36 14 28" fill="#c47d78"/>
    </g>
    <g transform="translate(460 250) scale(0.7)">${PROPS.lyre()}</g>
    <path d="M80 300 q20 -16 0 -32 M96 306 q28 -20 0 -44" fill="none" stroke="#c9a54e" stroke-width="3"/>`;
}

function renderScylla(s) {
  const dogs = [-70, -30, 10, 50, 90, 130].map((dx, i) => `
    <g transform="translate(${230 + dx} ${560 + (i % 2) * 16}) scale(0.55)">
      <path d="M-20 10 C-36 0 -10 -24 12 -16 C28 -30 40 -8 24 8 C36 18 10 30 -8 16Z" fill="#3a342e"/>
      <circle cx="14" cy="-6" r="2" fill="#f0d78a"/>
    </g>`).join("");
  return `${renderBust({ ...s, form: "bust" })}${dogs}
    <path d="M80 640 H520 V800 H80Z" fill="#164e56" opacity="0.18"/>`;
}

function renderCentaur(s) {
  return `
    <path d="M360 560 C400 500 520 490 560 560 C590 640 520 760 430 740 C380 800 300 720 330 640 C300 600 330 580 360 560Z" fill="#f4efe4" stroke="#e6dcc8"/>
    <path d="M520 600 V760 M470 640 V780 M430 700 V790" stroke="#e6dcc8" stroke-width="6" stroke-linecap="round"/>
    <path d="M560 540 L590 500" stroke="#d9d3c8" stroke-width="4"/>
    ${renderBust({ ...s, form: "bust", garmentColor: s.garmentColor })}
    <g transform="translate(430 560) scale(0.8)">${PROPS.herb()}</g>`;
}

function renderTyphon(s) {
  return `
    ${wings("dark")}
    ${snakes()}
    ${renderBust({ ...s, form: "bust", hair: "bald", crown: "none" })}`;
}

function figureOf(s) {
  switch (s.form) {
    case "pegasus":
      return renderPegasus();
    case "hydra":
      return renderHydra();
    case "chimera":
      return renderChimera();
    case "cerberus":
      return renderCerberus();
    case "sphinx":
      return renderSphinx();
    case "siren":
      return renderSiren();
    case "scylla":
      return renderScylla(s);
    case "centaur":
      return renderCentaur(s);
    case "typhon":
      return renderTyphon(s);
    default:
      return renderBust(s);
  }
}

function drawProps(s, behind) {
  return s.props.map((p) => {
    const [id, slot, scale, isBehind] = p;
    if (Boolean(isBehind) !== behind) return "";
    const fn = PROPS[id];
    if (!fn) throw new Error(`Unknown prop ${id} for ${s.slug}`);
    const [x, y, base] = SLOTS[slot] ?? SLOTS.right;
    const sc = (scale ?? 1) * base;
    return `<g transform="translate(${x} ${y}) scale(${sc})">${fn()}</g>`;
  }).join("");
}

function frame() {
  const ticks = Array.from({ length: 34 }, (_, i) => `<line x1="${48 + i * 15}" y1="742" x2="${48 + i * 15}" y2="756"/>`).join("");
  return `
    <rect width="600" height="800" fill="url(#vig)"/>
    <rect x="16" y="16" width="568" height="768" fill="none" stroke="#9a7624" stroke-width="2" opacity="0.75" rx="8"/>
    <g stroke="#9a7624" stroke-width="1.4" opacity="0.6">
      <line x1="40" y1="742" x2="560" y2="742"/>
      <line x1="40" y1="756" x2="560" y2="756"/>
      ${ticks}
    </g>`;
}

export function renderPortrait(raw) {
  const s = defaults(raw);
  const skin = SKIN[s.skin] ?? SKIN.olive;
  const hair = HAIR[s.hairColor] ?? HAIR.dark;
  const cloth = s.garmentColor;
  const title = escapeXml(s.alt);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
  <title>${title}</title>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s.sky[0]}"/>
      <stop offset="58%" stop-color="#f6f1e6"/>
      <stop offset="100%" stop-color="${s.sky[1]}"/>
    </linearGradient>
    <radialGradient id="wash" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#f7f4ee" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${s.wash}" stop-opacity="0.2"/>
    </radialGradient>
    <linearGradient id="${s.slug}-skin" x1="18%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${skin[0]}"/>
      <stop offset="46%" stop-color="${skin[1]}"/>
      <stop offset="100%" stop-color="${skin[2]}"/>
    </linearGradient>
    <linearGradient id="${s.slug}-hair" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${hair[0]}"/>
      <stop offset="55%" stop-color="${hair[1]}"/>
      <stop offset="100%" stop-color="${hair[2]}"/>
    </linearGradient>
    <linearGradient id="${s.slug}-cloth" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0%" stop-color="${shade(cloth, 0.18)}"/>
      <stop offset="48%" stop-color="${cloth}"/>
      <stop offset="100%" stop-color="${shade(cloth, -0.22)}"/>
    </linearGradient>
    <radialGradient id="vig" cx="50%" cy="42%" r="72%">
      <stop offset="62%" stop-color="#2b2620" stop-opacity="0"/>
      <stop offset="100%" stop-color="#2b2620" stop-opacity="0.18"/>
    </radialGradient>
    <clipPath id="all"><rect width="600" height="800"/></clipPath>
  </defs>
  <g clip-path="url(#all)">
    <rect width="600" height="800" fill="url(#sky)"/>
    <rect width="600" height="800" fill="url(#wash)"/>
    ${sceneArt(s)}
    ${drawProps(s, true)}
    ${figureOf(s)}
    ${drawProps(s, false)}
    ${frame()}
  </g>
</svg>`;
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
