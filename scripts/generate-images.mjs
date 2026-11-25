import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const scenes = [
  {
    filename: "hero-india-travel-guide.webp",
    width: 1600,
    height: 900,
    skyTop: "#132A2E",
    skyMid: "#C85A17",
    skyBottom: "#F2B880",
    sunColor: "#FFE29A",
    sunX: 1180,
    sunY: 280,
    layer1: "#3E2723",
    layer2: "#1B5E4A",
    layer3: "#133A2E",
    accent: "#E76F51",
    motif: "palace-mountains",
  },
  {
    filename: "manali-himalayas-himachal-pradesh.webp",
    width: 1200,
    height: 800,
    skyTop: "#1E3A5F",
    skyMid: "#5B8FB9",
    skyBottom: "#D6E6F2",
    sunColor: "#FFF5D6",
    sunX: 900,
    sunY: 180,
    layer1: "#94A3B8",
    layer2: "#2C4A3E",
    layer3: "#183028",
    accent: "#E2E8F0",
    motif: "snow-peaks",
  },
  {
    filename: "shimla-hill-station-himachal-pradesh.webp",
    width: 1200,
    height: 800,
    skyTop: "#283655",
    skyMid: "#D08C60",
    skyBottom: "#F1DCA7",
    sunColor: "#FFE5B4",
    sunX: 300,
    sunY: 240,
    layer1: "#3B5249",
    layer2: "#263B33",
    layer3: "#182822",
    accent: "#D97706",
    motif: "ridge-hills",
  },
  {
    filename: "jaipur-pink-city-rajasthan.webp",
    width: 1200,
    height: 800,
    skyTop: "#4A1D1F",
    skyMid: "#C85A17",
    skyBottom: "#F4A261",
    sunColor: "#FFD166",
    sunX: 920,
    sunY: 200,
    layer1: "#9B3B2B",
    layer2: "#7C2D12",
    layer3: "#451A03",
    accent: "#FDBA74",
    motif: "palace-arches",
  },
  {
    filename: "udaipur-lake-pichola-rajasthan.webp",
    width: 1200,
    height: 800,
    skyTop: "#1E1B4B",
    skyMid: "#9D4EDD",
    skyBottom: "#F4A261",
    sunColor: "#FFE8A3",
    sunX: 600,
    sunY: 280,
    layer1: "#312E81",
    layer2: "#1E293B",
    layer3: "#0F172A",
    accent: "#FDE68A",
    motif: "lake-palace",
  },
  {
    filename: "goa-beaches-coastline-india.webp",
    width: 1200,
    height: 800,
    skyTop: "#0F4C5C",
    skyMid: "#E36414",
    skyBottom: "#FB8B24",
    sunColor: "#FFF3B0",
    sunX: 600,
    sunY: 320,
    layer1: "#0E7490",
    layer2: "#155E75",
    layer3: "#D97706",
    accent: "#14B8A6",
    motif: "palms-ocean",
  },
  {
    filename: "kerala-backwaters-alleppey-india.webp",
    width: 1200,
    height: 800,
    skyTop: "#134E4A",
    skyMid: "#2DD4BF",
    skyBottom: "#CCFBF1",
    sunColor: "#FEF08A",
    sunX: 840,
    sunY: 220,
    layer1: "#115E59",
    layer2: "#0F766E",
    layer3: "#064E3B",
    accent: "#F59E0B",
    motif: "backwaters-boat",
  },
  {
    filename: "rishikesh-ganga-uttarakhand.webp",
    width: 1200,
    height: 800,
    skyTop: "#1E3A8A",
    skyMid: "#3B82F6",
    skyBottom: "#DBEAFE",
    sunColor: "#FEF9C3",
    sunX: 350,
    sunY: 200,
    layer1: "#1E40AF",
    layer2: "#1B5E4A",
    layer3: "#065F46",
    accent: "#F97316",
    motif: "river-bridge",
  },
  {
    filename: "varanasi-ghats-ganga-india.webp",
    width: 1200,
    height: 800,
    skyTop: "#431407",
    skyMid: "#EA580C",
    skyBottom: "#FDBA74",
    sunColor: "#FEF08A",
    sunX: 600,
    sunY: 260,
    layer1: "#7C2D12",
    layer2: "#9A3412",
    layer3: "#431407",
    accent: "#FBBF24",
    motif: "ghats-lamps",
  },
  {
    filename: "leh-ladakh-pangong-lake-india.webp",
    width: 1200,
    height: 800,
    skyTop: "#0C4A6E",
    skyMid: "#0284C7",
    skyBottom: "#BAE6FD",
    sunColor: "#FFFFFF",
    sunX: 950,
    sunY: 160,
    layer1: "#78350F",
    layer2: "#92400E",
    layer3: "#0369A1",
    accent: "#E0F2FE",
    motif: "high-altitude-lake",
  },
  {
    filename: "darjeeling-tea-gardens-west-bengal.webp",
    width: 1200,
    height: 800,
    skyTop: "#1E293B",
    skyMid: "#64748B",
    skyBottom: "#E2E8F0",
    sunColor: "#FDE047",
    sunX: 280,
    sunY: 190,
    layer1: "#14532D",
    layer2: "#166534",
    layer3: "#15803D",
    accent: "#F8FAFC",
    motif: "tea-hills",
  },
  {
    filename: "agra-taj-mahal-uttar-pradesh.webp",
    width: 1200,
    height: 800,
    skyTop: "#312E81",
    skyMid: "#F97316",
    skyBottom: "#FED7AA",
    sunColor: "#FFFBEB",
    sunX: 880,
    sunY: 220,
    layer1: "#F8FAFC",
    layer2: "#E2E8F0",
    layer3: "#0F766E",
    accent: "#F59E0B",
    motif: "marble-dome",
  },
  {
    filename: "andaman-nicobar-islands-beaches-india.webp",
    width: 1200,
    height: 800,
    skyTop: "#0369A1",
    skyMid: "#06B6D4",
    skyBottom: "#A5F3FC",
    sunColor: "#FEF08A",
    sunX: 920,
    sunY: 180,
    layer1: "#0F766E",
    layer2: "#0D9488",
    layer3: "#115E59",
    accent: "#FDE68A",
    motif: "island-lagoon",
  },
];

function buildSvg(s) {
  const w = s.width;
  const h = s.height;
  const horizon = Math.round(h * 0.62);

  let motifElements = "";
  if (s.motif === "snow-peaks" || s.motif === "high-altitude-lake") {
    motifElements = `
      <polygon points="0,${horizon} ${w * 0.22},${h * 0.26} ${w * 0.44},${horizon}" fill="${s.layer1}" opacity="0.95"/>
      <polygon points="${w * 0.22},${h * 0.26} ${w * 0.29},${h * 0.38} ${w * 0.16},${h * 0.39}" fill="${s.accent}" opacity="0.9"/>
      <polygon points="${w * 0.28},${horizon} ${w * 0.56},${h * 0.2} ${w * 0.84},${horizon}" fill="${s.layer2}" opacity="0.95"/>
      <polygon points="${w * 0.56},${h * 0.2} ${w * 0.65},${h * 0.35} ${w * 0.48},${h * 0.36}" fill="${s.accent}" opacity="0.9"/>
      <polygon points="${w * 0.65},${horizon} ${w * 0.88},${h * 0.3} ${w},${horizon}" fill="${s.layer3}"/>
      <rect x="0" y="${horizon}" width="${w}" height="${h - horizon}" fill="${s.layer3}" opacity="0.88"/>
    `;
  } else if (s.motif === "palace-arches" || s.motif === "palace-mountains") {
    motifElements = `
      <path d="M0,${horizon} Q${w * 0.25},${h * 0.38} ${w * 0.52},${horizon} T${w},${horizon} L${w},${h} L0,${h} Z" fill="${s.layer2}" opacity="0.85"/>
      <rect x="${w * 0.18}" y="${h * 0.38}" width="${w * 0.64}" height="${horizon - h * 0.38}" fill="${s.layer1}" rx="6"/>
      <path d="M${w * 0.25},${horizon} L${w * 0.25},${h * 0.47} Q${w * 0.3},${h * 0.42} ${w * 0.35},${h * 0.47} L${w * 0.35},${horizon} Z" fill="${s.accent}" opacity="0.75"/>
      <path d="M${w * 0.45},${horizon} L${w * 0.45},${h * 0.44} Q${w * 0.5},${h * 0.39} ${w * 0.55},${h * 0.44} L${w * 0.55},${horizon} Z" fill="${s.accent}" opacity="0.85"/>
      <path d="M${w * 0.65},${horizon} L${w * 0.65},${h * 0.47} Q${w * 0.7},${h * 0.42} ${w * 0.75},${h * 0.47} L${w * 0.75},${horizon} Z" fill="${s.accent}" opacity="0.75"/>
      <rect x="0" y="${horizon}" width="${w}" height="${h - horizon}" fill="${s.layer3}"/>
    `;
  } else if (s.motif === "marble-dome") {
    motifElements = `
      <rect x="0" y="${horizon}" width="${w}" height="${h - horizon}" fill="${s.layer3}"/>
      <rect x="${w * 0.36}" y="${h * 0.44}" width="${w * 0.28}" height="${horizon - h * 0.44}" fill="${s.layer1}" rx="4"/>
      <path d="M${w * 0.41},${h * 0.44} Q${w * 0.5},${h * 0.24} ${w * 0.59},${h * 0.44} Z" fill="${s.layer1}"/>
      <rect x="${w * 0.28}" y="${h * 0.34}" width="16" height="${horizon - h * 0.34}" fill="${s.layer2}"/>
      <rect x="${w * 0.71}" y="${h * 0.34}" width="16" height="${horizon - h * 0.34}" fill="${s.layer2}"/>
      <path d="M${w * 0.46},${horizon} L${w * 0.46},${h * 0.5} Q${w * 0.5},${h * 0.46} ${w * 0.54},${h * 0.5} L${w * 0.54},${horizon} Z" fill="${s.layer3}" opacity="0.65"/>
      <rect x="${w * 0.485}" y="${horizon}" width="${w * 0.03}" height="${h - horizon}" fill="#E0F2FE" opacity="0.55"/>
    `;
  } else if (s.motif === "palms-ocean" || s.motif === "island-lagoon" || s.motif === "backwaters-boat") {
    motifElements = `
      <rect x="0" y="${horizon}" width="${w}" height="${h - horizon}" fill="${s.layer1}"/>
      <path d="M0,${horizon + 40} Q${w * 0.3},${horizon + 15} ${w * 0.6},${horizon + 45} T${w},${horizon + 35} L${w},${h} L0,${h} Z" fill="${s.layer2}" opacity="0.8"/>
      <path d="M${w * 0.14},${h} Q${w * 0.18},${h * 0.55} ${w * 0.22},${h * 0.32}" stroke="${s.layer3}" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M${w * 0.22},${h * 0.32} Q${w * 0.12},${h * 0.28} ${w * 0.08},${h * 0.36}" stroke="${s.layer3}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M${w * 0.22},${h * 0.32} Q${w * 0.28},${h * 0.24} ${w * 0.34},${h * 0.32}" stroke="${s.layer3}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M${w * 0.22},${h * 0.32} Q${w * 0.19},${h * 0.22} ${w * 0.26},${h * 0.22}" stroke="${s.layer3}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M${w * 0.54},${horizon + 50} L${w * 0.72},${horizon + 50} L${w * 0.68},${horizon + 76} L${w * 0.58},${horizon + 76} Z" fill="${s.accent}"/>
    `;
  } else {
    motifElements = `
      <path d="M0,${horizon} Q${w * 0.2},${h * 0.38} ${w * 0.45},${horizon * 0.9} T${w},${horizon} L${w},${h} L0,${h} Z" fill="${s.layer1}" opacity="0.9"/>
      <path d="M0,${horizon + 20} Q${w * 0.3},${h * 0.48} ${w * 0.65},${horizon * 0.96} T${w},${horizon + 10} L${w},${h} L0,${h} Z" fill="${s.layer2}" opacity="0.92"/>
      <rect x="0" y="${horizon + 25}" width="${w}" height="${h - horizon - 25}" fill="${s.layer3}"/>
      <circle cx="${w * 0.35}" cy="${horizon + 48}" r="6" fill="${s.accent}"/>
      <circle cx="${w * 0.5}" cy="${horizon + 54}" r="7" fill="${s.accent}"/>
      <circle cx="${w * 0.66}" cy="${horizon + 46}" r="6" fill="${s.accent}"/>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${s.skyTop}"/>
        <stop offset="52%" stop-color="${s.skyMid}"/>
        <stop offset="100%" stop-color="${s.skyBottom}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${s.sunColor}" stop-opacity="0.95"/>
        <stop offset="60%" stop-color="${s.sunColor}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${s.sunColor}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#sky)"/>
    <circle cx="${s.sunX}" cy="${s.sunY}" r="${Math.round(h * 0.26)}" fill="url(#glow)"/>
    <circle cx="${s.sunX}" cy="${s.sunY}" r="${Math.round(h * 0.08)}" fill="${s.sunColor}"/>
    ${motifElements}
  </svg>`;
}

for (const scene of scenes) {
  const svg = buildSvg(scene);
  const outPath = path.join(outDir, scene.filename);
  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(outPath);
  console.log("Generated:", scene.filename);
}
