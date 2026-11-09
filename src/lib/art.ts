/* ==========================================================================
   Project artwork — liquid-glass app mockups drawn as SVG (no image files).
   One generator feeds the project cards, the detail pages and the OG images.
   Layers (.win / .float / .orb) get CSS parallax on hover for a 3D feel.
   ========================================================================== */
import type { Project } from '../data/siteConfig';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
const w = (o: number) => `rgba(255,255,255,${o})`;
const DARK = 'rgba(8,8,24,.55)';

export function projectArt(p: Project): string {
  const [a, b] = p.colors;
  const id = `art-${p.slug}`;
  const A = `url(#${id}-a)`, SKY = `url(#${id}-sky)`;

  const rect = (x: number, y: number, wd: number, h: number, rx: number, fill: string, extra = '') =>
    `<rect x="${x}" y="${y}" width="${wd}" height="${h}" rx="${rx}" fill="${fill}"${extra}/>`;
  const circle = (cx: number, cy: number, r: number, fill: string, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"${extra}/>`;
  const text = (x: number, y: number, s: string, size: number, fill = '#fff', weight = 700, anchor = 'start') =>
    `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(s)}</text>`;
  const lines = (x: number, y: number, widths: number[], gap = 24, fill = w(0.18)) => widths.map((wd, i) => rect(x, y + i * gap, wd, 12, 6, fill)).join('');
  const pill = (x: number, y: number, wd: number, h: number, label: string, size: number, fill = A) =>
    rect(x, y, wd, h, h / 2, fill) + text(x + wd / 2, y + h / 2 + size * 0.36, label, size, '#fff', 700, 'middle');
  const glass = (wd: number, h: number, rx = 32, tint = true) =>
    (tint ? rect(0, 0, wd, h, rx, 'rgba(10,9,28,.6)') : '') + rect(0, 0, wd, h, rx, `url(#${id}-g)`, ` stroke="url(#${id}-r)" stroke-width="2" filter="url(#${id}-s)"`);

  /* ---------- per-project screen (inside 780×560 window; content area x 36–744, y 96–524) + floating card (300×340) ---------- */
  const screens: Record<Project['art'], [string, string]> = {
    booking: [
      rect(36, 96, 380, 428, 24, SKY) +
        circle(320, 180, 36, w(0.85)) +
        `<path d="M36 440 160 300l70 80 90-130 96 140v110a24 24 0 0 1-24 24H60a24 24 0 0 1-24-24Z" fill="${DARK}"/>` +
        text(448, 150, 'Find your trail', 36) + lines(448, 178, [240, 180]) +
        text(448, 270, '★★★★★', 28, a) +
        rect(448, 296, 120, 44, 22, w(0.12)) + text(508, 325, 'Oct 24', 18, '#fff', 600, 'middle') +
        rect(580, 296, 130, 44, 22, w(0.12)) + text(645, 325, '2 guests', 18, '#fff', 600, 'middle') +
        text(448, 410, '$299', 44) + text(572, 410, '/ night', 20, w(0.6), 500) +
        pill(448, 446, 270, 64, 'Book now', 24),
      glass(300, 340) + rect(20, 20, 260, 210, 20, w(0.07)) +
        `<path d="M50 200C100 120 150 220 200 120S270 60 250 50" fill="none" stroke="${A}" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 16"/>` +
        circle(50, 200, 13, a) + circle(250, 50, 13, '#fff') +
        text(24, 282, '12.4 km', 30) + text(24, 312, 'Elevation 1,280 m', 17, w(0.65), 500),
    ],
    chat: [
      rect(36, 96, 330, 428, 24, SKY) +
        `<path d="M141 200l42-22q18 22 36 0l42 22 34 46-34 20v140H141V266l-34-20Z" fill="${w(0.92)}"/>` +
        rect(60, 450, 140, 46, 23, DARK) + text(130, 480, '$24.99', 20, '#fff', 700, 'middle') +
        text(400, 150, 'Classic Tee', 36) + lines(400, 178, [260, 200]) +
        ['S', 'M', 'L', 'XL'].map((s, i) => rect(400 + i * 70, 250, 58, 50, 14, i === 1 ? A : w(0.1)) + text(429 + i * 70, 283, s, 20, '#fff', 700, 'middle')).join('') +
        [a, b, '#fff', '#111827'].map((c, i) => circle(420 + i * 52, 350, 18, c, i === 0 ? ` stroke="#fff" stroke-width="4"` : '')).join('') +
        pill(400, 430, 330, 64, 'Add to cart', 24),
      glass(300, 340) + circle(34, 40, 8, '#4ade80') + text(52, 47, 'Vendor chat', 20) +
        rect(20, 72, 200, 56, 22, w(0.14)) + lines(38, 94, [150], 0, w(0.4)) +
        rect(80, 142, 200, 56, 22, A) + lines(98, 164, [150], 0, w(0.8)) +
        rect(20, 212, 170, 56, 22, w(0.14)) + lines(38, 234, [120], 0, w(0.4)) +
        [0, 1, 2].map((i) => circle(44 + i * 22, 304, 7, w(0.5 - i * 0.12))).join(''),
    ],
    vpn: [
      circle(250, 310, 150, 'none', ` stroke="${w(0.08)}" stroke-width="26"`) +
        circle(250, 310, 150, 'none', ` stroke="${A}" stroke-width="26" stroke-linecap="round" stroke-dasharray="700 943" transform="rotate(-90 250 310)"`) +
        circle(250, 310, 104, w(0.06)) +
        `<path d="M250 240l56 22v48q0 52-56 80-56-28-56-80v-48Z" fill="${A}"/><path d="m224 312 18 18 36-38" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>` +
        rect(470, 116, 220, 52, 26, 'rgba(34,197,94,.18)') + circle(500, 142, 9, '#4ade80') + text(520, 150, 'Connected', 22, '#4ade80') +
        text(470, 236, 'Frankfurt, DE', 34) + text(470, 270, 'Encrypted · AES-256', 18, w(0.6), 500) +
        text(470, 346, '↓ 94.2', 34) + text(470, 374, 'Mbps', 16, w(0.6), 500) +
        text(620, 346, '↑ 41.7', 34) + text(620, 374, 'Mbps', 16, w(0.6), 500) +
        [40, 64, 48, 80, 58, 92, 70, 104, 86, 72].map((h, i) => rect(470 + i * 26, 516 - h, 14, h, 7, A, ` opacity="${0.45 + i * 0.05}"`)).join(''),
      glass(300, 340) + text(24, 48, 'Servers', 22) +
        ['#ef4444', '#3b82f6', '#f59e0b', '#22c55e'].map((c, i) =>
          circle(40, 96 + i * 62, 16, c) + rect(68, 90 + i * 62, 120 - i * 14, 12, 6, w(0.3)) +
          [0, 1, 2].map((j) => rect(222 + j * 16, 106 + i * 62 - (j + 1) * 9, 10, (j + 1) * 9, 3, j < 3 - (i % 2) ? A : w(0.2))).join('')).join(''),
    ],
    shop: [
      rect(36, 96, 708, 58, 29, w(0.08)) + circle(72, 125, 11, 'none', ` stroke="${w(0.7)}" stroke-width="4"`) + text(100, 133, 'Search products…', 20, w(0.55), 500) +
        [0, 1, 2, 3, 4, 5].map((i) => {
          const x = 36 + (i % 3) * 244, y = 176 + Math.floor(i / 3) * 176;
          return rect(x, y, 220, 160, 22, w(0.08)) +
            (i % 2 ? circle(x + 50, y + 52, 32, A) : rect(x + 18, y + 20, 64, 64, 18, A)) +
            lines(x + 100, y + 34, [96, 64], 22) + text(x + 20, y + 132, `$${[49, 89, 129, 24, 210, 65][i]}`, 26);
        }).join(''),
      glass(300, 340) + text(24, 48, 'Order #4821', 22) +
        [0, 1, 2, 3].map((i) =>
          (i < 3 ? rect(39, 100 + i * 64, 4, 64, 2, i < 2 ? a : w(0.2)) : '') +
          circle(41, 100 + i * 64, 12, i < 3 ? A : 'none', i < 3 ? '' : ` stroke="${w(0.4)}" stroke-width="4"`) +
          lines(70, 94 + i * 64, [150 - i * 18], 0, w(i < 3 ? 0.45 : 0.2))).join(''),
    ],
    food: [
      text(36, 146, "Today's menu", 36) +
        pill(400, 112, 110, 46, 'Lunch', 18) + rect(522, 112, 110, 46, 23, w(0.1)) + text(577, 141, 'Snacks', 18, '#fff', 600, 'middle') +
        [0, 1, 2].map((i) => {
          const y = 188 + i * 112;
          return rect(36, y, 708, 96, 26, w(0.07)) + circle(96, y + 48, 36, w(0.92)) + circle(96, y + 48, 24, A) +
            circle(86, y + 40, 6, '#fff', ' opacity=".8"') + circle(106, y + 56, 5, '#fff', ' opacity=".6"') +
            lines(158, y + 32, [200 - i * 30, 130], 24) + text(620, y + 58, `Rs ${[120, 90, 60][i]}`, 26, '#fff', 700, 'end') +
            circle(692, y + 48, 24, A) + text(692, y + 57, '+', 28, '#fff', 700, 'middle');
        }).join(''),
      glass(300, 340) + text(24, 48, 'Your order', 22) +
        [0, 1, 2].map((i) => lines(24, 88 + i * 40, [140 - i * 20], 0, w(0.35)) + rect(236, 88 + i * 40, 40, 12, 6, w(0.35))).join('') +
        rect(24, 210, 252, 2, 1, w(0.2)) + text(24, 248, 'Total', 20, w(0.7), 600) + text(276, 248, 'Rs 270', 24, '#fff', 700, 'end') +
        pill(24, 270, 252, 50, 'Place order', 20),
    ],
    canvas: [
      rect(36, 96, 64, 428, 20, w(0.08)) +
        [0, 1, 2, 3, 4, 5].map((i) => rect(52, 116 + i * 62, 32, 32, 9, i === 1 ? A : w(0.22))).join('') +
        rect(124, 96, 620, 428, 20, 'rgba(255,255,255,.94)') +
        rect(160, 130, 250, 22, 11, '#1e1b4b', ' opacity=".85"') + rect(160, 164, 170, 14, 7, '#1e1b4b', ' opacity=".25"') +
        rect(176, 214, 210, 140, 18, A) +
        rect(166, 204, 230, 160, 4, 'none', ` stroke="${b}" stroke-width="3" stroke-dasharray="10 8"`) +
        [[166, 204], [396, 204], [166, 364], [396, 364]].map(([x, y]) => rect(x - 8, y - 8, 16, 16, 3, '#fff', ` stroke="${b}" stroke-width="3"`)).join('') +
        circle(570, 270, 74, b, ' opacity=".85"') +
        text(600, 196, 'A+', 56, '#1e1b4b', 800) +
        `<path d="M440 450c40-50 80 50 120-10s80-20 120 20" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round"/>` +
        rect(160, 410, 200, 14, 7, '#1e1b4b', ' opacity=".2"') + rect(160, 440, 150, 14, 7, '#1e1b4b', ' opacity=".2"'),
      glass(300, 340) + text(24, 48, 'Layers', 22) +
        ['Shape', 'Circle', 'Text', 'Drawing'].map((s, i) =>
          rect(20, 70 + i * 50, 260, 40, 12, i === 0 ? w(0.16) : 'none') + circle(44, 90 + i * 50, 8, i === 0 ? a : w(0.4)) +
          text(64, 97 + i * 50, s, 18, w(0.85), 500)).join('') +
        [a, b, '#f472b6', '#facc15', '#fff'].map((c, i) => circle(40 + i * 52, 300, 16, c)).join(''),
    ],
  };
  const [screen, card] = screens[p.art];

  return `<svg class="art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${esc(p.title)} — app illustration" font-family="Sora, Inter, system-ui, sans-serif">
<defs>
<linearGradient id="${id}-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
<linearGradient id="${id}-sky" x1="0" y1="0" x2=".4" y2="1"><stop offset="0" stop-color="${b}"/><stop offset="1" stop-color="${a}"/></linearGradient>
<linearGradient id="${id}-g" x1="0" y1="0" x2=".6" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".05"/></linearGradient>
<linearGradient id="${id}-r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".35" stop-color="#fff" stop-opacity=".08"/><stop offset=".7" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#fff" stop-opacity=".45"/></linearGradient>
<radialGradient id="${id}-o" cx=".32" cy=".28" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".22" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>
<filter id="${id}-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="90"/></filter>
<filter id="${id}-s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dy="30" stdDeviation="30" flood-color="#000" flood-opacity=".4"/></filter>
<pattern id="${id}-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0v60" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
</defs>
<rect width="1200" height="900" fill="#0a0918"/>
<circle cx="260" cy="220" r="280" fill="${a}" opacity=".7" filter="url(#${id}-blur)"/>
<circle cx="980" cy="740" r="320" fill="${b}" opacity=".7" filter="url(#${id}-blur)"/>
<rect width="1200" height="900" fill="url(#${id}-grid)"/>
<g transform="translate(140 150)"><g class="win">
${glass(780, 560, 36, false)}
${['#ff5f57', '#febc2e', '#28c840'].map((c, i) => circle(40 + i * 26, 40, 8, c)).join('')}
${rect(130, 22, 300, 36, 18, w(0.1))}${text(152, 47, p.title.toLowerCase(), 18, w(0.7), 500)}
${rect(0, 74, 780, 1.5, 0, w(0.12))}
${screen}
</g></g>
<g transform="translate(850 460) rotate(-6)"><g class="float">${card}</g></g>
<g class="orb"><circle cx="1070" cy="330" r="64" fill="url(#${id}-o)"/><circle cx="1049" cy="309" r="16" fill="#fff" opacity=".6"/></g>
<g class="orb orb-sm"><circle cx="110" cy="790" r="34" fill="url(#${id}-o)"/></g>
</svg>`;
}
