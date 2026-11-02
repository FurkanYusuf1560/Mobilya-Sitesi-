// Kategori sayfaları. Her sayfa build sırasında kendi adresine ayrı HTML olarak üretilir
// (scripts/prerender.js) ve sitemap.xml'e eklenir.
// kategoriler: sayfada gösterilecek ürünlerin kategori slug'ları (boşsa tüm ürünler).
// yedekUrunler: bu kategorilerde henüz ürün yoksa onun yerine gösterilecek ürün adları (urunler.js'deki "ad").
// Metinlerde yalnızca gerçek bilgiler olsun: fiyat, teslimat ve üretim koşulları değişirse burayı güncelleyin.

import { urunler } from "./urunler.js";

const teslimatSorusu = {
  soru: "Teslimat ve montaj ücretli mi?",
  cevap: "Ankara içinde teslimat ve montaj ücretsizdir. Ürününüzü evinize getirip kurulumunu biz yapıyoruz.",
};

const ziyaretSorusu = {
  soru: "Atölyeniz nerede, ne zaman açıksınız?",
  cevap:
    "Atölyemiz Ankara Siteler'de, Güneşevler Eğribucak Sokak No:24/A adresinde. Pazartesi–Cumartesi 08:00–18:00 arası açığız, pazar kapalıyız.",
};

export const sayfalar = [
  {
    yol: "/yatak-odasi-takimi",
    menuAdi: "Yatak Odası Takımı",
    baslik: "Yatak Odası Takımı | Ankara Siteler Atölye Üretimi – Pako Dizayn",
    aciklama:
      "Ankara Siteler'deki atölyemizde üretilen yatak odası takımları: aynalı gardırop, komodin, şifonyer ve makyaj masası. Ankara içi ücretsiz teslimat ve montaj.",
    ustBaslik: "Ankara Siteler · Yatak odası takımı",
    h1: "Ankara Siteler'de yatak odası takımı",
    giris:
      "Gardırop, komodin, şifonyer ve makyaj masasını birbiriyle uyumlu bir takım olarak Siteler'deki kendi atölyemizde üretiyoruz.",
    kategoriler: [],
    urunBasligi: "Takımlarımızdan modeller",
    metin: [
      {
        baslik: "Atölyeden doğrudan yatak odası takımı",
        paragraflar: [
          "Pako Dizayn, Ankara'nın mobilya merkezi Siteler'de 35 yılı aşkın tecrübeyle çalışan bir mobilya atölyesidir. Yatak odası takımlarımızı aracı olmadan kendi atölyemizde üretiyoruz; böylece malzemeyi ve işçiliği her aşamada kendimiz kontrol ediyoruz.",
          "Bir yatak odası takımı genellikle gardırop, komodin, şifonyer ve makyaj masasından oluşur. Bu parçaları aynı renk ve çizgide hazırlıyoruz; odanıza girdiğinizde her şey birbirini tamamlıyor.",
        ],
      },
      {
        baslik: "Takımda hangi parçalar var?",
        paragraflar: [
          "Gardırop tarafında aynalı, sürgülü ve L formunda köşe modellerimiz var. İçlerinde askılık, raf ve çekmece bölümleri bulunuyor. Işıklı aynalı makyaj masamız takıma şıklık katarken, komodin ve şifonyerler aynı renkte tamamlayıcı parça olarak hazırlanıyor.",
          "Takımın tamamını alabileceğiniz gibi yalnızca ihtiyacınız olan parçaları da seçebilirsiniz. Beğendiğiniz modelin altındaki butondan bize yazın, fiyat ve ölçü bilgilerini WhatsApp'tan iletelim.",
        ],
      },
    ],
    sorular: [
      {
        soru: "Yatak odası takımı fiyatları ne kadar?",
        cevap:
          "Fiyat, seçtiğiniz modele ve takımda yer alacak parçalara göre değişiyor. Beğendiğiniz modeli WhatsApp'tan sorun, güncel fiyatı hemen iletelim.",
      },
      {
        soru: "Takımın sadece bazı parçalarını alabilir miyim?",
        cevap: "Evet. Gardırop, komodin, şifonyer veya makyaj masasını ayrı ayrı da satın alabilirsiniz.",
      },
      teslimatSorusu,
      ziyaretSorusu,
    ],
  },
  {
    yol: "/genc-odasi-takimi",
    menuAdi: "Genç Odası Takımı",
    baslik: "Genç Odası Takımı | Ankara Siteler Atölye Üretimi – Pako Dizayn",
    aciklama:
      "Ankara Siteler'deki atölyemizde genç odası takımı üretiyoruz: gardırop, komodin, şifonyer ve makyaj masası. Ankara içi ücretsiz teslimat ve montaj.",
    ustBaslik: "Ankara Siteler · Genç odası takımı",
    h1: "Ankara Siteler'de genç odası takımı",
    giris:
      "Genç odası takımlarını Siteler'deki kendi atölyemizde üretiyoruz. Gardırop, komodin, şifonyer ve makyaj masasını birbiriyle uyumlu bir takım olarak hazırlıyoruz.",
    kategoriler: ["genc-odasi"],
    urunBasligi: "Genç odası modellerimiz",
    yedekUrunler: ["Beyaz Aynalı Gardırop", "Sürgülü Aynalı Gardırop", "Işıklı Aynalı Makyaj Masası"],
    yedekUrunBasligi: "Genç odasına uygun modellerimiz",
    yedekNot:
      "Genç odası takımı fotoğraflarımızı yakında ekliyoruz. Güncel modelleri görmek için WhatsApp'tan yazabilirsiniz.",
    metin: [
      {
        baslik: "Atölyeden genç odası takımı",
        paragraflar: [
          "Pako Dizayn, Ankara'nın mobilya merkezi Siteler'de 35 yılı aşkın tecrübeyle çalışan bir mobilya atölyesidir. Genç odası takımlarımızı aracı olmadan kendi atölyemizde üretiyor, malzemeyi ve işçiliği her aşamada kendimiz kontrol ediyoruz.",
          "Genç odaları çoğu zaman evin daha küçük odalarıdır. Bu yüzden saklama alanını iyi kullanan parçalar önemlidir. Aynalı gardıroplarımız ayrıca boy aynasına ihtiyaç bırakmaz; sürgülü kapaklı modelimiz ise kapak açacak alanın dar olduğu odalarda yer kazandırır.",
        ],
      },
      {
        baslik: "Takımda hangi parçalar var?",
        paragraflar: [
          "Genç odası takımında gardırop, komodin, şifonyer ve makyaj masasını aynı renk ve çizgide hazırlıyoruz. İçlerinde askılık, raf ve çekmece bölümleri bulunan gardıroplarımız kıyafetleri düzenli tutar; ışıklı aynalı makyaj masamız ise odaya şıklık katar.",
          "Takımın tamamını alabileceğiniz gibi yalnızca ihtiyacınız olan parçaları da seçebilirsiniz. Fiyat ve ölçü bilgisi için WhatsApp'tan yazın ya da bizi arayın.",
        ],
      },
    ],
    sorular: [
      {
        soru: "Genç odası takımı fiyatları ne kadar?",
        cevap:
          "Fiyat, seçtiğiniz modele ve takımda yer alacak parçalara göre değişiyor. WhatsApp'tan yazın, güncel fiyatı hemen iletelim.",
      },
      {
        soru: "Takımın sadece bazı parçalarını alabilir miyim?",
        cevap: "Evet. Gardırop, komodin, şifonyer veya makyaj masasını ayrı ayrı da satın alabilirsiniz.",
      },
      teslimatSorusu,
      ziyaretSorusu,
    ],
  },
  {
    yol: "/gardirop",
    menuAdi: "Gardırop",
    baslik: "Aynalı, Sürgülü ve Köşe Gardırop | Ankara Siteler – Pako Dizayn",
    aciklama:
      "Ankara Siteler'deki atölyemizde aynalı gardırop, sürgülü gardırop ve köşe gardırop üretiyoruz. Askılık, raf ve çekmeceli iç düzen. Ankara içi ücretsiz teslimat ve montaj.",
    ustBaslik: "Ankara Siteler · Gardırop",
    h1: "Ankara Siteler'de aynalı, sürgülü ve köşe gardırop",
    giris:
      "Dört kapaklı aynalı gardıroplar, sürgülü kapaklı modeller ve L formunda köşe gardıroplar. Hepsi Siteler'deki atölyemizde üretiliyor.",
    kategoriler: ["dolap"],
    urunBasligi: "Gardırop modellerimiz",
    metin: [
      {
        baslik: "Gardırop modellerimiz",
        paragraflar: [
          "Aynalı gardıroplarımız dört kapaklı; iki kapağı aynalı olduğu için yatak odanızda ayrıca boy aynasına ihtiyaç bırakmıyor. Ahşap desen, gri ve beyaz renk seçenekleri var.",
          "Sürgülü gardırop, kapak açacak alanın dar olduğu odalar için iyi bir çözüm. İki sürgülü kapaklı modelimizin bir kapağı aynalı. Köşe gardırop ise L formuyla odanın köşesini değerlendirip daha fazla saklama alanı sağlıyor; füme cam ve düz kapaklar altın tonlu kulplarla tamamlanıyor.",
        ],
      },
      {
        baslik: "İç düzen ve işçilik",
        paragraflar: [
          "Tüm gardıroplarımızın içinde askılık, raflar ve çekmeceler bulunuyor. 35 yılı aşkın tecrübeyle, Ankara Siteler'deki atölyemizde temiz işçilik ve uzun ömürlü kullanım odağıyla üretiyoruz.",
          "Gardıroplarımızı komodin, şifonyer ve makyaj masasıyla aynı çizgide bir yatak odası takımının parçası olarak da hazırlıyoruz. Ölçü ve fiyat bilgisi için beğendiğiniz modeli WhatsApp'tan sorabilirsiniz.",
        ],
      },
    ],
    sorular: [
      {
        soru: "Gardırop fiyatları ne kadar?",
        cevap:
          "Fiyat modele ve renge göre değişiyor. Beğendiğiniz modelin altındaki \"Bu modeli sorun\" butonuna dokunun, güncel fiyatı WhatsApp'tan iletelim.",
      },
      {
        soru: "Gardıropların ölçüleri nedir?",
        cevap: "Her modelin ölçüsü farklı. Beğendiğiniz modeli WhatsApp'tan sorun, ölçülerini hemen gönderelim.",
      },
      teslimatSorusu,
      ziyaretSorusu,
    ],
  },
  {
    yol: "/makyaj-masasi",
    menuAdi: "Makyaj Masası",
    baslik: "Işıklı Aynalı Makyaj Masası | Ankara Siteler – Pako Dizayn",
    aciklama:
      "Işıklı aynalı, cam tablalı ve çekmeceli makyaj masası. Ankara Siteler'deki atölyemizde üretiyoruz. Ankara içi ücretsiz teslimat ve montaj.",
    ustBaslik: "Ankara Siteler · Makyaj masası",
    h1: "Ankara'da ışıklı aynalı makyaj masası",
    giris:
      "Işıklı ayna, cam tabla ve takı bölmeli çekmeceler. Makyaj masalarımızı Siteler'deki atölyemizde üretiyoruz.",
    kategoriler: ["makyaj-masasi"],
    urunBasligi: "Makyaj masası modellerimiz",
    metin: [
      {
        baslik: "Işıklı aynalı makyaj masası",
        paragraflar: [
          "Makyaj yaparken doğru ışık çok önemlidir. Işıklı aynalı makyaj masamız, aynadaki aydınlatma sayesinde yüzünüzü net gösterir. Cam tabla temizlemesi kolay, şık bir yüzey sunar.",
          "Gövdedeki bol çekmeceler makyaj malzemelerinizi düzenli tutar; takı bölmeli çekmece sayesinde küpe, kolye ve yüzükleriniz de karışmadan yerini bulur.",
        ],
      },
      {
        baslik: "Yatak odası takımınızla uyumlu",
        paragraflar: [
          "Makyaj masalarımızı tek başına satın alabileceğiniz gibi gardırop, komodin ve şifonyerle aynı çizgide bir yatak odası takımının parçası olarak da hazırlıyoruz.",
          "Pako Dizayn, 35 yılı aşkın tecrübeyle Ankara Siteler'de üretim yapan bir mobilya atölyesidir. Fiyat ve ölçü bilgisi için WhatsApp'tan yazabilir ya da bizi arayabilirsiniz.",
        ],
      },
    ],
    sorular: [
      {
        soru: "Makyaj masası fiyatı ne kadar?",
        cevap: "Güncel fiyatı öğrenmek için modelin altındaki butondan WhatsApp'tan yazın, hemen iletelim.",
      },
      {
        soru: "Makyaj masasını tek başına alabilir miyim?",
        cevap: "Evet. Makyaj masasını takımdan bağımsız olarak tek başına satın alabilirsiniz.",
      },
      teslimatSorusu,
      ziyaretSorusu,
    ],
  },
];

export function sayfaBul(yol) {
  return sayfalar.find((sayfa) => sayfa.yol === yol);
}

// Sayfada gösterilecek ürünler. yedek: kategoride henüz ürün olmadığı için yedek ürünler mi gösteriliyor.
export function sayfaUrunleri(sayfa) {
  const asil = sayfa.kategoriler.length
    ? urunler.filter((urun) => sayfa.kategoriler.includes(urun.kategori))
    : urunler;
  if (asil.length || !sayfa.yedekUrunler) return { liste: asil, yedek: false };

  const liste = sayfa.yedekUrunler.map((ad) => {
    const urun = urunler.find((aday) => aday.ad === ad);
    if (!urun) throw new Error(`${sayfa.yol} sayfasındaki yedek ürün bulunamadı: ${ad}`);
    return urun;
  });
  return { liste, yedek: true };
}
