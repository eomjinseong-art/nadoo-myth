/** Bold attribute drawings, centered on 0,0, in the portrait palette. */

const ink = "#2b2620";
const gold = "#c9a54e";
const goldHi = "#f0d78a";
const wood = "#6e5844";
const sea = "#1f6f78";

export const PROPS = {
  lightning: () =>
    `<path d="M18 -78 L-16 -8 H8 L-28 86 L34 6 H2 L40 -78Z" fill="${goldHi}" stroke="${gold}" stroke-width="3"/>`,

  eagle: () => `
    <path d="M0 10 C-50 -10 -90 -40 -60 -55 C-20 -30 0 -8 16 0 C40 -36 92 -22 62 8 C88 18 70 40 36 30 C16 48 -16 40 0 10Z" fill="#6a5040"/>
    <path d="M62 8 L92 14 L74 0Z" fill="${gold}"/>
    <circle cx="70" cy="2" r="2.2" fill="${ink}"/>`,

  trident: () => `
    <path d="M0 -40 V140" stroke="${sea}" stroke-width="8" stroke-linecap="round"/>
    <path d="M-46 -70 C-58 -120 -30 -150 -16 -158" fill="none" stroke="${gold}" stroke-width="8" stroke-linecap="round"/>
    <path d="M0 -70 V-160" stroke="${gold}" stroke-width="8" stroke-linecap="round"/>
    <path d="M46 -70 C58 -120 30 -150 16 -158" fill="none" stroke="${gold}" stroke-width="8" stroke-linecap="round"/>
    <path d="M-36 -78 H36" stroke="${gold}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="0" cy="-160" r="5" fill="${goldHi}"/>`,

  dolphin: () => `
    <path d="M-50 10 C-20 -40 40 -30 70 0 C40 10 50 30 20 24 C10 40 -20 36 -10 16 C-30 30 -60 24 -50 10Z" fill="#1f6f78"/>
    <path d="M60 -2 L86 -20 L74 8Z" fill="#164e56"/>
    <circle cx="24" cy="-6" r="2.4" fill="${ink}"/>
    <path d="M-20 8 Q0 18 16 8" fill="none" stroke="#7eb8c4" stroke-width="2"/>`,

  owl: () => `
    <ellipse cx="0" cy="16" rx="40" ry="46" fill="#6e5a3a"/>
    <path d="M-30 -10 L-8 -78 L10 -16Z" fill="#6e5a3a"/>
    <path d="M30 -10 L8 -78 L-10 -16Z" fill="#5a482e"/>
    <ellipse cx="0" cy="8" rx="26" ry="22" fill="#cbb892"/>
    <circle cx="-14" cy="4" r="12" fill="#f7f3ea"/>
    <circle cx="14" cy="4" r="12" fill="#f7f3ea"/>
    <circle cx="-14" cy="5" r="5" fill="${ink}"/>
    <circle cx="14" cy="5" r="5" fill="${ink}"/>
    <path d="M-6 20 L0 30 L6 20Z" fill="${gold}"/>
    <path d="M-46 8 L-70 36 L-30 28Z" fill="#5a482e"/>
    <path d="M46 8 L70 36 L30 28Z" fill="#5a482e"/>`,

  aegis: () => `
    <circle r="62" fill="#1f3b57" stroke="${gold}" stroke-width="7"/>
    <circle cy="2" r="26" fill="#e2b48f" stroke="${gold}" stroke-width="2"/>
    <path d="M-16 -6 Q0 -16 16 -6" fill="none" stroke="${ink}" stroke-width="2"/>
    <circle cx="-7" cy="2" r="2.2" fill="${ink}"/>
    <circle cx="7" cy="2" r="2.2" fill="${ink}"/>
    <path d="M-10 10 Q0 16 10 10" fill="none" stroke="#a86b52" stroke-width="1.5"/>
    <path d="M-34 -28 q-8 -18 10 -8 M34 -28 q8 -18 -10 -8 M0 -36 q8 -16 0 -4 M-20 24 q-16 10 -4 16 M20 24 q16 10 4 16" fill="none" stroke="#3e6b45" stroke-width="3" stroke-linecap="round"/>`,

  olive: () => `
    <path d="M-40 40 C-10 10 10 -20 30 -50" fill="none" stroke="#5c6b3a" stroke-width="4"/>
    <ellipse cx="-10" cy="8" rx="16" ry="7" fill="#6e8a3a" transform="rotate(-30 -10 8)"/>
    <ellipse cx="8" cy="-16" rx="16" ry="7" fill="#7e9a48" transform="rotate(-50 8 -16)"/>
    <ellipse cx="28" cy="-40" rx="14" ry="6" fill="#5c6b3a" transform="rotate(-20 28 -40)"/>
    <circle cx="34" cy="-58" r="5" fill="#3e6b45"/>`,

  spear: () => `
    <path d="M0 -150 V140" stroke="${wood}" stroke-width="6" stroke-linecap="round"/>
    <path d="M0 -158 L16 -112 L0 -124 L-16 -112Z" fill="#e7e2d8" stroke="${gold}" stroke-width="2"/>`,

  lyre: () => `
    <path d="M-26 28 C-46 -30 -16 -78 0 -86 C16 -78 46 -30 26 28" fill="none" stroke="${gold}" stroke-width="6"/>
    <path d="M-24 28 H24" stroke="${wood}" stroke-width="7" stroke-linecap="round"/>
    <path d="M-14 26 V-46 M-7 26 V-62 M0 26 V-68 M7 26 V-62 M14 26 V-46" stroke="${goldHi}" stroke-width="1.7"/>
    <circle cx="-30" cy="0" r="7" fill="${goldHi}" stroke="${gold}"/>
    <circle cx="30" cy="0" r="7" fill="${goldHi}" stroke="${gold}"/>`,

  bow: () => `
    <path d="M-6 -90 C58 -40 58 40 -6 90" fill="none" stroke="${wood}" stroke-width="6"/>
    <path d="M-6 -86 L-6 86" stroke="${gold}" stroke-width="1.6"/>
    <path d="M-6 -4 L48 -46" stroke="${ink}" stroke-width="2"/>
    <path d="M48 -46 L34 -34 L44 -28Z" fill="${gold}"/>`,

  laurel: () => `
    <path d="M0 50 C-10 -10 10 -40 0 -70" stroke="#5c6b3a" stroke-width="3" fill="none"/>
    ${[-40, -10, 20, 50].map((y, i) => `<ellipse cx="${i % 2 ? 12 : -12}" cy="${y}" rx="14" ry="6" fill="#6e8a3a" transform="rotate(${i % 2 ? 30 : -30} ${i % 2 ? 12 : -12} ${y})"/>`).join("")}`,

  deer: () => `
    <path d="M-20 20 C-40 20 -46 -10 -20 -16 C-10 -40 20 -36 24 -10 C46 -6 40 24 10 24 C0 36 -10 34 -20 20Z" fill="#8a5a3c"/>
    <circle cx="6" cy="-2" r="2" fill="${ink}"/>
    <path d="M-8 -16 C-30 -50 -10 -70 0 -40 M8 -18 C20 -56 46 -60 30 -28" fill="none" stroke="#6e5844" stroke-width="3"/>
    <ellipse cx="30" cy="2" rx="12" ry="7" fill="#a86b52"/>`,

  crescent: () => `
    <path d="M-10 -40 A42 42 0 1 0 -10 46 A30 30 0 1 1 -10 -40Z" fill="${goldHi}" stroke="${gold}" stroke-width="2"/>`,

  peacock: () => `
    <ellipse cx="-10" cy="20" rx="22" ry="14" fill="#1f6f78"/>
    <circle cx="14" cy="10" r="8" fill="#164e56"/>
    <circle cx="16" cy="9" r="1.6" fill="${gold}"/>
    <path d="M-20 16 C-70 -20 -30 -70 10 -20 C30 -80 80 -30 20 10" fill="#0f6e62"/>
    <circle cx="-20" cy="-20" r="5" fill="#1f6f78" stroke="${goldHi}"/>
    <circle cx="10" cy="-36" r="5" fill="#1f6f78" stroke="${goldHi}"/>
    <circle cx="40" cy="-8" r="5" fill="#1f6f78" stroke="${goldHi}"/>
    <path d="M-30 24 L-46 46" stroke="#1f6f78" stroke-width="3"/>`,

  pomegranate: () => `
    <circle cy="6" r="28" fill="#8c2f2b"/>
    <path d="M-8 -20 Q0 -36 8 -20 L4 -16 Q0 -26 -4 -16Z" fill="#5c6b3a"/>
    <path d="M-10 -8 H10 M0 -12 V8 M-8 4 H8" stroke="${goldHi}" stroke-width="1.2" opacity="0.7"/>`,

  wheat: () => `
    <path d="M0 70 V-50" stroke="#c9a54e" stroke-width="3"/>
    ${[-40, -24, -8, 8, 24].map((y) => `<ellipse cx="0" cy="${y}" rx="8" ry="12" fill="#e6c56a"/>`).join("")}
    <path d="M-16 20 C-28 0 -20 -10 -8 4 M16 28 C30 8 20 -4 8 10" fill="none" stroke="#5c6b3a" stroke-width="2"/>`,

  torch: () => `
    <path d="M-7 20 H7 V120 H-7Z" fill="${wood}"/>
    <path d="M0 -62 C20 -28 16 8 0 22 C-16 8 -20 -28 0 -62Z" fill="#d4532b"/>
    <path d="M0 -40 C10 -18 8 4 0 14 C-8 4 -10 -18 0 -40Z" fill="${goldHi}"/>`,

  hearth: () => `
    <path d="M-46 20 H46 L36 48 H-36Z" fill="#8c2f2b"/>
    <path d="M-36 48 H36 V58 H-36Z" fill="#6e2420"/>
    <path d="M0 -50 C16 -20 14 8 0 20 C-14 8 -16 -20 0 -50Z" fill="#e25a2a"/>
    <path d="M-16 -10 C-8 -36 0 -8 0 16 C-4 -8 -10 -8 -16 -10Z" fill="${goldHi}"/>
    <path d="M12 -16 C18 -34 8 -8 4 10 C12 -4 10 -8 12 -16Z" fill="${goldHi}" opacity="0.85"/>`,

  roses: () => `
    <path d="M0 20 C-6 40 8 50 0 70" stroke="#5c6b3a" stroke-width="3" fill="none"/>
    <circle cx="-16" cy="8" r="12" fill="#8c2f2b"/>
    <circle cx="14" cy="0" r="13" fill="#a33b45"/>
    <circle cx="0" cy="-16" r="12" fill="#c46a6a"/>
    <circle cx="-16" cy="8" r="4" fill="#f0d0d0"/>
    <circle cx="14" cy="0" r="4" fill="#f0d0d0"/>
    <circle cy="-16" r="4" fill="#f7e6ea"/>`,

  dove: () => `
    <path d="M-30 8 C-10 -16 30 -10 48 6 C20 0 24 16 4 14 C-6 28 -24 20 -16 6 C-28 16 -40 10 -30 8Z" fill="#f7f4ee" stroke="#cfc6b8" stroke-width="1.5"/>
    <circle cx="36" cy="2" r="1.6" fill="${ink}"/>
    <path d="M46 6 L58 2" stroke="${gold}" stroke-width="2"/>`,

  shell: () => `
    <path d="M-40 16 C-30 -28 30 -28 40 16 L-40 16Z" fill="#f4e4d4" stroke="${gold}" stroke-width="2"/>
    <path d="M-24 16 C-16 -16 -8 -16 0 16 M0 16 C8 -18 16 -16 24 16" fill="none" stroke="#e0c2b0" stroke-width="2"/>`,

  apple: () => `
    <circle cy="6" r="26" fill="${gold}"/>
    <path d="M0 -18 C8 -36 18 -30 12 -16" fill="none" stroke="#5c6b3a" stroke-width="3"/>
    <ellipse cx="10" cy="-24" rx="8" ry="4" fill="#6e8a3a"/>`,

  hammer: () => `
    <path d="M0 -10 V110" stroke="${wood}" stroke-width="8" stroke-linecap="round"/>
    <rect x="-40" y="-58" width="80" height="34" rx="4" fill="#8d9196" stroke="${ink}" stroke-width="2"/>
    <path d="M-40 -42 H40" stroke="#c5c8cc" stroke-width="2"/>`,

  caduceus: () => `
    <path d="M0 -120 V130" stroke="${gold}" stroke-width="6" stroke-linecap="round"/>
    <path d="M-22 -108 Q-46 -90 -8 -78" fill="#f7f4ee" stroke="${gold}" stroke-width="2"/>
    <path d="M22 -108 Q46 -90 8 -78" fill="#f7f4ee" stroke="${gold}" stroke-width="2"/>
    <path d="M0 -70 C-36 -50 -28 -10 0 -16 C28 -10 36 -50 0 -70" fill="none" stroke="#3e6b45" stroke-width="5"/>
    <path d="M0 -16 C-32 4 -24 40 0 30 C24 40 32 4 0 -16" fill="none" stroke="#2f5538" stroke-width="5"/>
    <circle cx="-26" cy="-28" r="4" fill="#2f5538"/>
    <circle cx="24" cy="8" r="4" fill="#3e6b45"/>`,

  sandals: () => `
    <path d="M-36 10 H34 C40 10 44 20 36 26 H-30 C-42 24 -42 12 -36 10Z" fill="#c9a54e" stroke="${ink}" stroke-width="1.5"/>
    <path d="M-20 10 C-28 -10 -8 -16 0 0 C8 -16 24 -8 18 10" fill="none" stroke="#f0d78a" stroke-width="2"/>
    <path d="M-46 -8 C-20 -28 10 -24 6 -4" fill="#f7f4ee" stroke="${gold}" stroke-width="2"/>
    <path d="M46 -6 C20 -26 -6 -20 0 -2" fill="#f7f4ee" stroke="${gold}" stroke-width="2"/>`,

  thyrsus: () => `
    <path d="M0 -20 V140" stroke="${wood}" stroke-width="7"/>
    <ellipse cy="-48" rx="16" ry="28" fill="#6e8a3a"/>
    <path d="M-8 -70 Q0 -88 8 -70" fill="none" stroke="#5c6b3a" stroke-width="2"/>
    <circle cx="-12" cy="-20" r="3" fill="#8c2f2b"/>
    <circle cx="10" cy="-8" r="3" fill="#8c2f2b"/>
    <path d="M-16 20 Q0 10 14 24" fill="none" stroke="#3e6b45" stroke-width="3"/>`,

  grapes: () => `
    <path d="M4 -36 C16 -52 8 -60 -2 -46" fill="none" stroke="#5c6b3a" stroke-width="3"/>
    <ellipse cx="12" cy="-48" rx="8" ry="4" fill="#6e8a3a"/>
    ${[[-12, -10], [0, -16], [12, -8], [-6, 2], [8, 6], [-14, 14], [0, 16], [14, 16], [-4, 28], [8, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#5c3d78"/>`).join("")}`,

  sickle: () => `
    <path d="M-10 40 C-40 10 -36 -40 10 -70 C-10 -30 -8 10 16 30" fill="none" stroke="#d9d3c8" stroke-width="8" stroke-linecap="round"/>
    <path d="M8 24 L24 70" stroke="${wood}" stroke-width="6" stroke-linecap="round"/>`,

  scroll: () => `
    <path d="M-36 -16 H28 V28 H-36Z" fill="#f4efe4" stroke="${gold}" stroke-width="2"/>
    <path d="M-36 -16 V28 C-52 28 -52 -16 -36 -16Z" fill="#e6dcc8"/>
    <path d="M28 -16 V28 C44 28 44 -16 28 -16Z" fill="#e6dcc8"/>
    <path d="M-24 -4 H16 M-24 6 H12 M-24 16 H18" stroke="#cfc6b8" stroke-width="1.5"/>`,

  globe: () => `
    <circle r="40" fill="#1f3b57" stroke="${gold}" stroke-width="3"/>
    <ellipse rx="40" ry="14" fill="none" stroke="#9ec4de" stroke-width="1.5"/>
    <ellipse rx="16" ry="40" fill="none" stroke="#9ec4de" stroke-width="1.5"/>
    <path d="M-28 -28 H-18 M8 -30 H20 M-10 18 H6 M22 8 H30" stroke="${goldHi}" stroke-width="1.5"/>
    <circle cx="-22" cy="-10" r="1.4" fill="#fff"/>
    <circle cx="12" cy="14" r="1.3" fill="#fff"/>
    <circle cx="6" cy="-18" r="1.2" fill="#fff"/>`,

  lion: () => `
    <circle r="28" fill="#c4a06a"/>
    <circle cy="6" r="16" fill="#e6c48a"/>
    <circle cx="-6" cy="2" r="2" fill="${ink}"/>
    <circle cx="6" cy="2" r="2" fill="${ink}"/>
    <path d="M-6 10 H6" stroke="${ink}" stroke-width="1.5"/>
    ${[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => {
      const rad = (a * Math.PI) / 180;
      const x = Math.cos(rad) * 30;
      const y = Math.sin(rad) * 30;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" fill="#a88448"/>`;
    }).join("")}`,

  club: () => `
    <path d="M-6 20 C-4 -10 6 -10 8 20 L6 120 H-4Z" fill="${wood}"/>
    <circle cy="-10" r="16" fill="#5c4636"/>
    <circle cx="-14" cy="4" r="10" fill="#6e5844"/>
    <circle cx="12" cy="0" r="11" fill="#5c4636"/>
    <circle cx="2" cy="-24" r="9" fill="#7a624c"/>`,

  shield: () => `
    <circle r="58" fill="#8c2f2b" stroke="${gold}" stroke-width="6"/>
    <circle r="34" fill="none" stroke="${goldHi}" stroke-width="3"/>
    <circle r="10" fill="${gold}"/>
    <path d="M0 -52 V52 M-52 0 H52" stroke="${gold}" stroke-width="2" opacity="0.7"/>`,

  fleece: () => `
    <path d="M-20 20 C-50 10 -46 -20 -10 -24 C0 -46 36 -30 30 -4 C54 0 46 30 16 26 C6 42 -10 36 -20 20Z" fill="${gold}"/>
    ${[[-24, -4], [-8, -16], [10, -14], [24, 0], [-16, 12], [4, 14], [18, 16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${goldHi}"/>`).join("")}
    <path d="M-28 -8 C-46 -28 -18 -36 -8 -20" fill="none" stroke="#f7f4ee" stroke-width="3"/>
    <circle cx="22" cy="-6" r="2" fill="${ink}"/>`,

  ship: () => `
    <path d="M-50 16 L-36 36 H40 L50 16 Z" fill="#6e5844"/>
    <path d="M-8 16 V-48" stroke="${wood}" stroke-width="4"/>
    <path d="M-6 -46 L28 -10 L-6 8Z" fill="#f7f4ee" stroke="${gold}" stroke-width="1.5"/>
    <path d="M-46 8 Q0 20 46 6" fill="none" stroke="#1f6f78" stroke-width="3"/>`,

  loom: () => `
    <path d="M-28 -40 H28 V50 H-28Z" fill="none" stroke="${wood}" stroke-width="4"/>
    <path d="M-20 -40 V50 M-10 -40 V50 M0 -40 V50 M10 -40 V50 M20 -40 V50" stroke="${gold}" stroke-width="1.4"/>
    <path d="M-28 -10 H28 M-28 16 H28" stroke="#8c2f2b" stroke-width="3"/>
    <circle cx="34" cy="30" r="8" fill="#f4efe4" stroke="${gold}"/>`,

  jar: () => `
    <path d="M-12 -40 H12 L18 -24 C36 -10 36 36 0 52 C-36 36 -36 -10 -18 -24Z" fill="#c46a45" stroke="#8c2f2b" stroke-width="2"/>
    <path d="M-14 -40 H14 V-48 H-14Z" fill="#e6c2a4"/>
    <path d="M-16 4 H16" stroke="${gold}" stroke-width="2"/>
    <path d="M0 8 C6 16 4 28 0 34 C-4 28 -6 16 0 8Z" fill="${goldHi}" opacity="0.8"/>`,

  narcissus: () => `
    <path d="M0 16 V70" stroke="#5c6b3a" stroke-width="3"/>
    ${[0, 60, 120, 180, 240, 300].map((a) => {
      const rad = (a * Math.PI) / 180;
      const x = Math.cos(rad) * 16;
      const y = Math.sin(rad) * 16;
      return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="8" ry="14" fill="#f7f4ee" stroke="${gold}" transform="rotate(${a + 90} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }).join("")}
    <circle r="7" fill="#e6c56a"/>`,

  spider: () => `
    <circle cx="-8" cy="0" r="8" fill="${ink}"/>
    <circle cx="6" cy="2" r="11" fill="${ink}"/>
    <path d="M-16 -8 L-36 -24 M-18 0 L-40 0 M-16 10 L-34 22 M8 -10 L28 -28 M16 0 L40 2 M10 12 L32 24" stroke="${ink}" stroke-width="1.6"/>
    <path d="M-30 -30 A40 40 0 0 1 30 -30" fill="none" stroke="#cfc6b8" stroke-width="1"/>`,

  coins: () => `
    <ellipse cx="0" cy="16" rx="28" ry="10" fill="#a8842a"/>
    <ellipse cx="4" cy="6" rx="28" ry="10" fill="#c9a54e"/>
    <ellipse cx="8" cy="-6" rx="28" ry="10" fill="${goldHi}"/>
    <ellipse cx="8" cy="-6" rx="10" ry="4" fill="none" stroke="#9a7624"/>`,

  boulder: () => `
    <path d="M-40 16 C-50 -20 -10 -46 16 -36 C46 -28 52 10 30 28 C10 46 -30 40 -40 16Z" fill="#8a8178" stroke="#5c564e" stroke-width="2"/>
    <path d="M-20 -8 Q0 -20 16 -6" fill="none" stroke="#cfc6b8" stroke-width="2"/>`,

  fruit: () => `
    <path d="M-30 20 C0 -10 10 -40 40 -50" fill="none" stroke="#5c6b3a" stroke-width="3"/>
    <circle cx="-10" cy="4" r="8" fill="#8c2f2b"/>
    <circle cx="12" cy="-8" r="8" fill="#c46a45"/>
    <circle cx="30" cy="-28" r="7" fill="#e6c56a"/>
    <path d="M-46 36 H40" stroke="#1f6f78" stroke-width="3" opacity="0.6"/>`,

  statue: () => `
    <path d="M-28 40 H28 L22 48 H-22Z" fill="#d9d3c8"/>
    <path d="M-16 40 V8 H16 V40" fill="#f4efe4" stroke="#cfc6b8"/>
    <circle cy="-8" r="10" fill="#f7f4ee" stroke="#cfc6b8"/>
    <path d="M-18 8 Q0 -4 18 8" fill="#e7e2d8"/>`,

  wing: () => `
    <path d="M-40 20 C-10 -40 40 -50 70 -10 C30 -16 10 0 0 24 C-10 10 -20 16 -40 20Z" fill="#f7f4ee" stroke="${gold}" stroke-width="2"/>
    <path d="M-10 0 L40 -30 M-16 12 L30 -8 M-24 20 L16 8" stroke="#e6dcc8" stroke-width="2"/>`,

  thread: () => `
    <circle r="22" fill="#8c2f2b"/>
    <path d="M-16 -4 H16 M-12 6 H14 M-8 -12 H10" stroke="${goldHi}" stroke-width="1.5"/>
    <path d="M16 8 C40 20 30 40 10 36" fill="none" stroke="#8c2f2b" stroke-width="2"/>`,

  butterfly: () => `
    <path d="M0 -8 C-30 -40 -50 0 -16 16 C-40 36 -10 40 0 12 C10 40 40 36 16 16 C50 0 30 -40 0 -8Z" fill="#7e9a48" stroke="${gold}" stroke-width="1.5"/>
    <path d="M0 -16 V20" stroke="${ink}" stroke-width="2"/>
    <path d="M0 -16 l-6 -10 M0 -16 l6 -10" stroke="${ink}" stroke-width="1.5"/>`,

  lamp: () => `
    <path d="M-30 8 H24 L16 24 H-22Z" fill="#c9a54e" stroke="${ink}" stroke-width="1.5"/>
    <path d="M24 10 H40" stroke="${gold}" stroke-width="4"/>
    <path d="M-4 -28 C8 -16 6 4 0 8 C-6 4 -8 -16 -4 -28Z" fill="#e25a2a"/>
    <path d="M-16 8 H10" stroke="${goldHi}" stroke-width="2"/>`,

  bull: () => `
    <path d="M-40 10 C-46 -10 -10 -24 20 -16 C40 -12 52 8 40 18 C20 10 0 20 -16 16 C-10 30 -30 26 -40 10Z" fill="#f7f4ee" stroke="#d9d3c8"/>
    <path d="M-20 -16 C-36 -46 -8 -40 -4 -18 M6 -18 C10 -42 36 -36 24 -12" fill="none" stroke="#e6dcc8" stroke-width="4"/>
    <circle cx="24" cy="-2" r="2" fill="${ink}"/>
    <ellipse cx="36" cy="6" rx="10" ry="6" fill="#f4efe4"/>`,

  basket: () => `
    <path d="M-28 -4 H28 L20 28 H-20Z" fill="#c4a06a" stroke="${wood}" stroke-width="2"/>
    <path d="M-20 -4 C-16 -20 16 -20 20 -4" fill="#f7f4ee"/>
    <circle cx="-8" cy="-12" r="5" fill="#c46a6a"/>
    <circle cx="6" cy="-16" r="5" fill="#f7f4ee"/>
    <circle cx="14" cy="-8" r="4" fill="#e6c56a"/>
    <path d="M-16 8 H16 M-14 16 H14" stroke="${wood}" stroke-width="1.5"/>`,

  scales: () => `
    <path d="M0 -50 V40" stroke="${gold}" stroke-width="4"/>
    <path d="M-40 -36 H40" stroke="${gold}" stroke-width="4"/>
    <path d="M-40 -36 L-52 0 H-28Z" fill="${goldHi}" stroke="${gold}"/>
    <path d="M40 -36 L28 0 H52Z" fill="${goldHi}" stroke="${gold}"/>
    <path d="M-16 40 H16" stroke="${gold}" stroke-width="4"/>`,

  wheel: () => `
    <circle r="36" fill="none" stroke="${ink}" stroke-width="6"/>
    <circle r="6" fill="${gold}"/>
    <path d="M0 -30 V30 M-30 0 H30 M-22 -22 L22 22 M22 -22 L-22 22" stroke="${ink}" stroke-width="2"/>`,

  rod: () => `
    <path d="M-60 0 H60" stroke="${wood}" stroke-width="4"/>
    <path d="M-50 -8 V8 M-25 -8 V8 M0 -8 V8 M25 -8 V8 M50 -8 V8" stroke="${gold}" stroke-width="2"/>`,

  pipes: () => `
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const h = 28 + (i % 2 ? 18 : 0) + i * 3;
      const x = -36 + i * 12;
      return `<rect x="${x}" y="${-h / 2}" width="10" height="${h}" rx="2" fill="#e6dcc8" stroke="${gold}" stroke-width="1.2"/>`;
    }).join("")}`,

  palm: () => `
    <path d="M-4 60 V-10" stroke="#5c6b3a" stroke-width="4"/>
    <path d="M0 -10 C-40 -20 -36 -46 -8 -28 M0 -10 C-20 -46 10 -60 8 -20 M0 -10 C30 -50 48 -20 10 -16 M0 -10 C40 -10 36 10 8 -4" fill="#6e8a3a"/>`,

  poppy: () => `
    <path d="M0 10 V60" stroke="#5c6b3a" stroke-width="3"/>
    <circle cy="-6" r="16" fill="#8c2f2b"/>
    <circle cy="-6" r="6" fill="${ink}"/>
    <path d="M-18 -18 C-8 -28 8 -28 18 -18" fill="none" stroke="#6e2420" stroke-width="2"/>`,

  cup: () => `
    <path d="M-24 -10 H24 L16 16 H-16Z" fill="${gold}" stroke="${ink}" stroke-width="1.5"/>
    <path d="M24 -4 C40 -4 40 12 22 12" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M-8 16 H8 V28 H-8Z" fill="${gold}"/>
    <path d="M-14 28 H14" stroke="${gold}" stroke-width="3"/>
    <path d="M-8 -24 C-2 -8 6 -16 4 -2" fill="none" stroke="#3e6b45" stroke-width="2"/>`,

  pig: () => `
    <ellipse cx="0" cy="6" rx="28" ry="16" fill="#e7b7b0"/>
    <circle cx="22" cy="-2" r="10" fill="#f0c8c2"/>
    <ellipse cx="30" cy="0" rx="6" ry="4" fill="#e7b7b0"/>
    <circle cx="24" cy="-4" r="1.5" fill="${ink}"/>
    <path d="M-16 20 V32 M8 20 V32" stroke="#c48a8a" stroke-width="3"/>
    <path d="M-8 4 Q-20 -16 -4 -8" fill="none" stroke="#e7b7b0" stroke-width="3"/>`,

  cauldron: () => `
    <path d="M-36 -8 H36 L26 28 C10 42 -10 42 -26 28Z" fill="#3a3e44" stroke="${gold}" stroke-width="2"/>
    <path d="M-30 -8 C-20 -24 20 -24 30 -8" fill="#2b2620"/>
    <path d="M-8 -30 C-2 -46 8 -28 2 -16" fill="none" stroke="#6e8a3a" stroke-width="3"/>
    <circle cx="6" cy="-34" r="4" fill="#5c6b3a"/>`,

  horse: () => `
    <path d="M-30 24 C-40 10 -20 -20 10 -24 C18 -46 40 -40 36 -16 C60 -10 58 16 30 16 C24 32 0 30 -10 16 C-6 28 -24 30 -30 24Z" fill="#f7f4ee" stroke="#d9d3c8"/>
    <path d="M4 -24 C-8 -8 0 8 16 4" fill="none" stroke="#e6dcc8" stroke-width="3"/>
    <circle cx="30" cy="-8" r="2" fill="${ink}"/>
    <path d="M-46 -8 Q-10 -30 6 -20" fill="none" stroke="#f7f4ee" stroke-width="4"/>`,

  quiver: () => `
    <path d="M-16 -10 H16 L12 50 H-12Z" fill="#6e5844" stroke="${ink}"/>
    <path d="M-6 50 H6 V64 H-6Z" fill="${gold}"/>
    <path d="M-8 -40 V-8 M0 -52 V-8 M8 -36 V-8" stroke="${wood}" stroke-width="2"/>
    <path d="M-8 -40 L-4 -48 L-12 -46Z M0 -52 L4 -60 L-4 -58Z M8 -36 L12 -44 L4 -42Z" fill="${goldHi}"/>`,

  bident: () => `
    <path d="M0 -20 V140" stroke="#4a3d55" stroke-width="7"/>
    <path d="M-28 -70 C-36 -130 -8 -150 0 -110 C8 -150 36 -130 28 -70" fill="none" stroke="#d9d3c8" stroke-width="7"/>
    <path d="M-20 -70 H20" stroke="#d9d3c8" stroke-width="6"/>`,

  chain: () => `
    ${[-30, -10, 10, 30].map((x) => `<ellipse cx="${x}" cy="0" rx="12" ry="16" fill="none" stroke="#8d9196" stroke-width="4"/>`).join("")}`,

  fennel: () => `
    <path d="M0 -10 V120" stroke="#6e8a3a" stroke-width="6"/>
    <path d="M0 -70 C14 -40 10 -8 0 6 C-10 -8 -14 -40 0 -70Z" fill="#e25a2a"/>
    <path d="M0 -48 C8 -28 6 -6 0 2 C-6 -6 -8 -28 0 -48Z" fill="${goldHi}"/>
    <path d="M-16 20 Q0 10 16 24 M-12 46 Q0 36 14 50" fill="none" stroke="#5c6b3a" stroke-width="2"/>`,

  swaddle: () => `
    <path d="M-26 0 C-30 -20 -8 -28 0 -16 C10 -30 32 -16 24 2 C34 8 20 24 0 20 C-22 26 -36 10 -26 0Z" fill="#f7f4ee" stroke="#d9d3c8" stroke-width="2"/>
    <path d="M-16 2 H16 M-10 10 H12" stroke="#cfc6b8" stroke-width="1.5"/>
    <path d="M-6 -6 H8" stroke="${gold}" stroke-width="2"/>`,

  fish: () => `
    <ellipse rx="28" ry="14" fill="#1f6f78"/>
    <path d="M24 -4 L44 -18 L40 8Z" fill="#164e56"/>
    <circle cx="-12" cy="-2" r="2" fill="${ink}"/>
    <path d="M-8 4 Q4 10 16 2" stroke="#7eb8c4" stroke-width="1.5" fill="none"/>`,

  maze: () => `
    <path d="M-36 -36 H36 V36 H-36Z" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M-20 -36 V-8 H12 V12 H-8 V36 M4 -36 V-20 H28 V8" fill="none" stroke="${ink}" stroke-width="3"/>`,

  sun: () => `
    <circle r="22" fill="${goldHi}" stroke="${gold}" stroke-width="3"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const a = (i * Math.PI) / 6;
      const x1 = Math.cos(a) * 30;
      const y1 = Math.sin(a) * 30;
      const x2 = Math.cos(a) * 46;
      const y2 = Math.sin(a) * 46;
      return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${gold}" stroke-width="3" stroke-linecap="round"/>`;
    }).join("")}`,

  dog: () => `
    <path d="M-24 16 C-36 6 -20 -16 4 -12 C14 -28 36 -18 30 0 C48 6 40 22 20 18 C14 30 -8 28 -14 16 C-10 24 -22 22 -24 16Z" fill="#3a342e"/>
    <circle cx="22" cy="-2" r="1.8" fill="${goldHi}"/>
    <path d="M8 -14 L2 -30 L16 -18" fill="#3a342e"/>`,

  leopard: () => `
    <circle r="26" fill="#c4a06a"/>
    <circle cx="-8" cy="-4" r="3" fill="#2b2620"/>
    <circle cx="10" cy="6" r="2.4" fill="#2b2620"/>
    <circle cx="6" cy="-12" r="2" fill="#2b2620"/>
    <circle cx="-4" cy="10" r="2.2" fill="#2b2620"/>
    <path d="M16 0 L30 6 L24 -6Z" fill="#e6c48a"/>
    <circle cx="22" cy="-2" r="2" fill="${ink}"/>`,

  swan: () => `
    <path d="M10 20 C40 20 46 -10 20 -16 C30 -40 8 -48 4 -28 C-10 -46 -36 -20 -10 0 C-20 8 -16 22 10 20Z" fill="#f7f4ee" stroke="#d9d3c8"/>
    <path d="M20 -16 C28 -28 18 -36 16 -24" fill="none" stroke="${gold}" stroke-width="2"/>
    <circle cx="18" cy="-22" r="1.4" fill="${ink}"/>`,

  bridle: () => `
    <path d="M-20 -20 H24 V8 H-8 L-24 28" fill="none" stroke="${gold}" stroke-width="4"/>
    <circle cx="24" cy="-6" r="6" fill="${goldHi}" stroke="${gold}"/>
    <path d="M-8 8 L8 28" stroke="${gold}" stroke-width="3"/>`,

  mask: () => `
    <path d="M-26 -28 H26 V10 C26 36 10 48 0 48 C-10 48 -26 36 -26 10Z" fill="#f4efe4" stroke="${gold}" stroke-width="2"/>
    <path d="M-16 -8 H-4 M8 -8 H16" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>
    <path d="M-8 16 Q0 26 8 16" fill="none" stroke="${ink}" stroke-width="2"/>
    <path d="M-30 -20 L-18 -28 L-22 -10Z" fill="${gold}"/>
    <path d="M30 -20 L18 -28 L22 -10Z" fill="${gold}"/>`,

  oar: () => `
    <path d="M10 -80 L-8 70" stroke="${wood}" stroke-width="5"/>
    <path d="M-8 70 L-28 100 H8 L4 78Z" fill="#1f6f78"/>`,

  herb: () => `
    <path d="M0 40 V-30" stroke="#5c6b3a" stroke-width="3"/>
    <ellipse cx="-12" cy="0" rx="12" ry="5" fill="#6e8a3a" transform="rotate(-40 -12 0)"/>
    <ellipse cx="12" cy="-8" rx="12" ry="5" fill="#7e9a48" transform="rotate(30 12 -8)"/>
    <ellipse cx="-8" cy="-24" rx="10" ry="4" fill="#5c6b3a" transform="rotate(-20 -8 -24)"/>
    <circle cx="2" cy="-40" r="4" fill="#c46a6a"/>`,

  flowers: () => `
    <path d="M-8 10 C-16 36 -4 50 -8 64 M6 12 C12 36 4 52 10 64" stroke="#5c6b3a" stroke-width="2"/>
    <circle cx="-14" cy="-4" r="8" fill="#f7f4ee"/>
    <circle cx="4" cy="-10" r="8" fill="#e7b7c8"/>
    <circle cx="16" cy="2" r="7" fill="#f0d78a"/>
    <circle cx="-14" cy="-4" r="2" fill="${gold}"/>
    <circle cx="4" cy="-10" r="2" fill="#8c2f2b"/>`,

  moon: () => `
    <circle r="28" fill="#f7f4ee"/>
    <circle cx="12" r="24" fill="#1f3b57"/>
    <circle cx="-6" cy="-8" r="2" fill="${goldHi}" opacity="0.8"/>`,

  echo: () => `
    <path d="M-10 10 Q20 -10 6 -30" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M0 16 Q36 -8 16 -40" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M10 22 Q52 -4 26 -50" fill="none" stroke="${goldHi}" stroke-width="3"/>`,

  web: () => `
    <circle r="8" fill="${ink}"/>
    <path d="M0 0 L0 -48 M0 0 L34 -34 M0 0 L48 0 M0 0 L34 34 M0 0 L0 48 M0 0 L-34 34 M0 0 L-48 0 M0 0 L-34 -34" stroke="#d9d3c8" stroke-width="1.3"/>
    <path d="M-16 -16 A22 22 0 0 1 16 -16 A22 22 0 0 1 16 16 A22 22 0 0 1 -16 16 A22 22 0 0 1 -16 -16" fill="none" stroke="#d9d3c8" stroke-width="1.2"/>`,

  anvil: () => `
    <path d="M-54 -16 H30 L46 2 H-34 L-54 22 H-70 Z" fill="#6e7278"/>
    <path d="M-24 22 H8 V58 H-24Z" fill="#4e5258"/>
    <path d="M-40 58 H24 V70 H-40Z" fill="${ink}"/>`,

  reins: () => `
    <path d="M-40 -20 C-10 -40 30 -30 46 -8" fill="none" stroke="${gold}" stroke-width="4"/>
    <path d="M-30 10 C0 -10 24 0 40 20" fill="none" stroke="${goldHi}" stroke-width="3"/>
    <circle cx="46" cy="-8" r="5" fill="${gold}"/>
    <circle cx="40" cy="20" r="5" fill="${gold}"/>`,

  stars: () => `
    ${[[0, 0], [-28, 18], [26, 22], [8, -26]].map(([x, y], i) => `<path d="M${x} ${y - 12} L${x + 3} ${y - 3} L${x + 12} ${y} L${x + 3} ${y + 3} L${x} ${y + 14} L${x - 3} ${y + 3} L${x - 12} ${y} L${x - 3} ${y - 3}Z" fill="${i % 2 ? goldHi : "#fff"}"/>`).join("")}`,

  scepter: () => `
    <path d="M0 -130 V110" stroke="#c9a54e" stroke-width="6" stroke-linecap="round"/>
    <circle cy="-136" r="14" fill="#f0d78a" stroke="#9a7624" stroke-width="2"/>
    <path d="M-18 108 H18" stroke="#c9a54e" stroke-width="6" stroke-linecap="round"/>`,

  serpent: () => `
    <path d="M-10 40 C-46 10 -30 -30 4 -46 C28 -28 6 -8 20 16 C36 40 4 28 -8 12" fill="none" stroke="#3e6b45" stroke-width="7" stroke-linecap="round"/>
    <circle cx="8" cy="-48" r="6" fill="#2f5538"/>
    <circle cx="10" cy="-49" r="1.3" fill="#f0d78a"/>`,

  sheep: () => `
    <ellipse cy="8" rx="28" ry="16" fill="#f7f4ee" stroke="#e6dcc8"/>
    <circle cx="24" cy="-2" r="9" fill="#f4efe4" stroke="#e6dcc8"/>
    <circle cx="27" cy="-4" r="1.5" fill="#2b2620"/>
    <path d="M-12 22 V34 M8 22 V34" stroke="#d9d3c8" stroke-width="3" stroke-linecap="round"/>`,

  anchor: () => `
    <circle cy="-36" r="8" fill="none" stroke="${sea}" stroke-width="4"/>
    <path d="M0 -28 V30" stroke="${sea}" stroke-width="4"/>
    <path d="M-28 8 H28" stroke="${sea}" stroke-width="4"/>
    <path d="M0 30 C-30 30 -36 8 -20 8 M0 30 C30 30 36 8 20 8" fill="none" stroke="${sea}" stroke-width="4"/>`,
};
