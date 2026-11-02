// vite build sonrası çalışır:
// 1. Anasayfanın HTML'ini dist/index.html içine yazar; arama motorları içeriği JavaScript beklemeden görür.
// 2. Her kategori sayfasını (src/data/sayfalar.js) kendi başlığı, açıklaması ve yapısal verisiyle
//    dist/<yol>.html olarak üretir. vercel.json'daki cleanUrls sayesinde /gardirop gibi adreslerden açılır.
// 3. Ürün fotoğraflarını da içeren dist/sitemap.xml dosyasını üretir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.sncevik.com";
const ssrKlasoru = path.join(kok, "dist-ssr");

const { render, urunler, sayfalar, sayfaUrunleri } = await import(pathToFileURL(path.join(ssrKlasoru, "entry-server.js")).href);

const kacis = (metin) =>
  metin.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const indexYolu = path.join(kok, "dist", "index.html");
const sablon = fs.readFileSync(indexYolu, "utf-8");
const bosKok = '<div id="root"></div>';
if (!sablon.includes(bosKok)) throw new Error("dist/index.html içinde boş #root bulunamadı");

function degistir(html, desen, yeni) {
  if (!desen.test(html)) throw new Error(`dist/index.html içinde bulunamadı: ${desen}`);
  return html.replace(desen, yeni);
}

function sayfaHtml(sayfa) {
  const adres = `${site}${sayfa.yol}`;
  const baslik = kacis(sayfa.baslik);
  const aciklama = kacis(sayfa.aciklama);

  let html = sablon.replace(bosKok, `<div id="root">${render(sayfa.yol)}</div>`);
  html = degistir(html, /<title>[^<]*<\/title>/, `<title>${baslik}</title>`);
  html = degistir(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${aciklama}" />`);
  html = degistir(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${adres}" />`);
  html = degistir(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${adres}" />`);
  for (const ad of ["og:title", "twitter:title"]) {
    const nitelik = ad.startsWith("og:") ? "property" : "name";
    html = degistir(html, new RegExp(`<meta ${nitelik}="${ad}" content="[^"]*"\\s*/?>`), `<meta ${nitelik}="${ad}" content="${baslik}" />`);
  }
  for (const ad of ["og:description", "twitter:description"]) {
    const nitelik = ad.startsWith("og:") ? "property" : "name";
    html = degistir(
      html,
      new RegExp(`<meta\\s+${nitelik}="${ad}"\\s+content="[^"]*"\\s*/?>`),
      `<meta ${nitelik}="${ad}" content="${aciklama}" />`
    );
  }

  const yapisalVeri = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${adres}#sayfa`,
        url: adres,
        name: sayfa.baslik,
        description: sayfa.aciklama,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${site}/#site` },
        about: { "@id": `${site}/#isletme` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${site}/` },
          { "@type": "ListItem", position: 2, name: sayfa.menuAdi, item: adres },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: sayfa.sorular.map((soru) => ({
          "@type": "Question",
          name: soru.soru,
          acceptedAnswer: { "@type": "Answer", text: soru.cevap },
        })),
      },
    ],
  };
  // "</" dizisi script etiketini erken kapatmasın diye kaçırılır.
  const json = JSON.stringify(yapisalVeri, null, 2).replace(/<\//g, "<\\/");
  return html.replace("</head>", `    <script type="application/ld+json">\n${json}\n    </script>\n  </head>`);
}

fs.writeFileSync(indexYolu, sablon.replace(bosKok, `<div id="root">${render("/")}</div>`));
for (const sayfa of sayfalar) {
  fs.writeFileSync(path.join(kok, "dist", `${sayfa.yol.slice(1)}.html`), sayfaHtml(sayfa));
}

const bugun = new Date().toISOString().slice(0, 10);
let gorselSayisi = 0;

function sitemapGirdisi(adres, oncelik, liste) {
  const gorseller = liste.flatMap((urun) =>
    urun.fotograflar.map(
      (foto) => `    <image:image>
      <image:loc>${site}${foto.buyuk}</image:loc>
      <image:title>${kacis(urun.ad)}</image:title>
    </image:image>`
    )
  );
  gorselSayisi += gorseller.length;
  return `  <url>
    <loc>${adres}</loc>
    <lastmod>${bugun}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${oncelik}</priority>
${gorseller.join("\n")}
  </url>`;
}

fs.writeFileSync(
  path.join(kok, "dist", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[
  sitemapGirdisi(`${site}/`, "1.0", urunler),
  ...sayfalar.map((sayfa) => sitemapGirdisi(`${site}${sayfa.yol}`, "0.8", sayfaUrunleri(sayfa).liste)),
].join("\n")}
</urlset>
`
);

fs.rmSync(ssrKlasoru, { recursive: true, force: true });
console.log(`Prerender tamam: anasayfa + ${sayfalar.length} kategori sayfası, sitemap.xml (${gorselSayisi} görsel)`);
