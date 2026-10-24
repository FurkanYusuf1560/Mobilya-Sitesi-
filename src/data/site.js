export const iletisim = {
  telefon: "0539 483 36 93",
  telefonLink: "tel:+905394833693",
  whatsapp: "905394833693",
  instagram: "@pakodizayn",
  instagramLink: "https://www.instagram.com/pakodizayn",
  adres: "Güneşevler, Eğribucak Sk. No:24, 06140 Altındağ/Ankara",
  haritaLink:
    "https://www.google.com/maps/search/?api=1&query=Pako+Dizayn+E%C4%9Fribucak+Sk.+No%3A24+Alt%C4%B1nda%C4%9F+Ankara",
  haritaEmbed:
    "https://www.google.com/maps?q=E%C4%9Fribucak+Sk.+No%3A24,+G%C3%BCne%C5%9Fevler,+Alt%C4%B1nda%C4%9F,+Ankara&output=embed",
};

// İndirilebilir katalog. Dosya public/katalog/ klasöründe durur.
export const katalog = {
  dosya: "/katalog/pako-dizayn-katalog.pdf",
  indirmeAdi: "Pako-Dizayn-Katalog.pdf",
};

// Anasayfadaki büyük görsel.
export const anaGorsel = "/images/urunler/urun-4/01-b.webp";

export function whatsappLink(mesaj = "Merhaba, mobilyalarınız hakkında bilgi almak istiyorum.") {
  return `https://wa.me/${iletisim.whatsapp}?text=${encodeURIComponent(mesaj)}`;
}
