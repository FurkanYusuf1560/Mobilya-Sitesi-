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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8777406504682!2d32.88846867644191!3d39.966486082919026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34d8ce8595a2d%3A0x706c039d96e529ab!2sPako%20Dizayn!5e0!3m2!1str!2str!4v1792935220841!5m2!1str!2str",
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
