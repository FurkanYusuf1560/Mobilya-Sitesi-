// vite build sonrası çalışır:
// 1. Sayfanın HTML'ini dist/index.html içine yazar; arama motorları içeriği JavaScript beklemeden görür.
// 2. Ürün fotoğraflarını da içeren dist/sitemap.xml dosyasını üretir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.sncevik.com";
const ssrKlasoru = path.join(kok, "dist-ssr");

const { render, urunler } = await import(pathToFileURL(path.join(ssrKlasoru, "entry-server.js")).href);

const indexYolu = path.join(kok, "dist", "index.html");
const sablon = fs.readFileSync(indexYolu, "utf-8");
const bosKok = '<div id="root"></div>';
if (!sablon.includes(bosKok)) throw new Error("dist/index.html içinde boş #root bulunamadı");
fs.writeFileSync(indexYolu, sablon.replace(bosKok, `<div id="root">${render()}</div>`));

const kacis = (metin) =>
  metin.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const gorseller = urunler.flatMap((urun) =>
  urun.fotograflar.map(
    (foto) => `    <image:image>
      <image:loc>${site}${foto.buyuk}</image:loc>
      <image:title>${kacis(urun.ad)}</image:title>
    </image:image>`
  )
);

fs.writeFileSync(
  path.join(kok, "dist", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${gorseller.join("\n")}
  </url>
</urlset>
`
);

fs.rmSync(ssrKlasoru, { recursive: true, force: true });
console.log(`Prerender tamam: index.html + sitemap.xml (${gorseller.length} görsel)`);
