import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images");

const targets = [
  {
    filename: "goa-beaches-coastline-india.webp",
    query: "Goa beach India",
    width: 1200,
    height: 800,
  },
  {
    filename: "darjeeling-tea-gardens-west-bengal.webp",
    query: "Darjeeling tea garden",
    width: 1200,
    height: 800,
  },
  {
    filename: "agra-taj-mahal-uttar-pradesh.webp",
    query: "Taj Mahal Agra",
    width: 1200,
    height: 800,
  },
  {
    filename: "andaman-nicobar-islands-beaches-india.webp",
    query: "Havelock Island Andaman",
    width: 1200,
    height: 800,
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchWikimediaImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(
    query
  )}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1600&format=json&origin=*`;

  const res = await fetch(url, {
    headers: { "User-Agent": "ExploreIndiaAcademicProject/1.0 (contact@exploreindia.in)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const pages = Object.values(data?.query?.pages || {});

  for (const page of pages) {
    const info = page?.imageinfo?.[0];
    if (!info) continue;
    const mime = info.mime || "";
    if (!mime.startsWith("image/jpeg") && !mime.startsWith("image/png") && !mime.startsWith("image/webp")) {
      continue;
    }
    if ((info.width || 0) < 800 || (info.height || 0) < 500) continue;
    return info.thumburl || info.url;
  }
  return null;
}

for (const item of targets) {
  await sleep(1800);
  try {
    const imgUrl = await searchWikimediaImage(item.query);
    if (!imgUrl) {
      console.log(`SKIP (no match): ${item.filename}`);
      continue;
    }
    const imgRes = await fetch(imgUrl, {
      headers: { "User-Agent": "ExploreIndiaAcademicProject/1.0 (contact@exploreindia.in)" },
    });
    if (!imgRes.ok) {
      console.log(`SKIP (download failed ${imgRes.status}): ${item.filename}`);
      continue;
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const outPath = path.join(outDir, item.filename);
    await sharp(buf)
      .resize(item.width, item.height, { fit: "cover", position: "attention" })
      .webp({ quality: 84 })
      .toFile(outPath);

    const stats = fs.statSync(outPath);
    console.log(`OK: ${item.filename} (${Math.round(stats.size / 1024)} KB) <- ${imgUrl}`);
  } catch (err) {
    console.log(`ERR (${item.filename}):`, err.message);
  }
}
