// Ürün listesi.
// Her ürünün fotoğrafları public/images/urunler/<klasör>/ altında 01-k.webp (kart boyutu)
// ve 01-b.webp (büyük boyut) şeklinde sıralı durur. Slider bu sırayla gösterir.
// kategori: kategoriler listesindeki slug değerlerinden biri.

export const kategoriler = [
  { slug: "dolap", ad: "Dolap" },
  { slug: "makyaj-masasi", ad: "Makyaj Masası" },
  { slug: "komodin", ad: "Komodin" },
  { slug: "sifonyer", ad: "Şifonyer" },
];

function fotolar(klasor, adet) {
  return Array.from({ length: adet }, (_, index) => {
    const no = String(index + 1).padStart(2, "0");
    return {
      kart: `/images/urunler/${klasor}/${no}-k.webp`,
      buyuk: `/images/urunler/${klasor}/${no}-b.webp`,
    };
  });
}

export const urunler = [
  {
    ad: "Ahşap Desen Aynalı Gardırop",
    kategori: "dolap",
    aciklama: "Dört kapaklı, iki aynalı kapak. İçinde askılık, raflar ve çekmeceler.",
    fotograflar: fotolar("urun-1", 4),
  },
  {
    ad: "Gri Aynalı Gardırop",
    kategori: "dolap",
    aciklama: "Dört kapaklı, iki aynalı kapak. İçinde askılık, raflar ve çekmeceler.",
    fotograflar: fotolar("urun-2", 5),
  },
  {
    ad: "Beyaz Aynalı Gardırop",
    kategori: "dolap",
    aciklama: "Dört kapaklı, iki aynalı kapak. İçinde askılık, raflar ve çekmeceler.",
    fotograflar: fotolar("urun-3", 4),
  },
  {
    ad: "Füme Camlı Köşe Gardırop",
    kategori: "dolap",
    aciklama: "L formunda köşe dolap; füme cam ve düz kapaklar, altın tonlu kulplar.",
    fotograflar: fotolar("urun-4", 7),
  },
  {
    ad: "Işıklı Aynalı Makyaj Masası",
    kategori: "makyaj-masasi",
    aciklama: "Işıklı ayna, cam tabla ve bol çekmeceli gövde; takı bölmeli çekmece.",
    fotograflar: fotolar("urun-5", 11),
  },
  {
    ad: "Sürgülü Aynalı Gardırop",
    kategori: "dolap",
    aciklama: "İki sürgülü kapak, biri aynalı. İçinde askılık, raflar ve çekmeceler.",
    fotograflar: fotolar("urun-6", 5),
  },
];
