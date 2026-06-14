import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const dolapVerileri = [
  { ad: "Özel Ölçü Gardırop", resimYolu: "/images/dolap3.jpeg", etiket: "Gerçek uygulama" },
  { ad: "Açık Raflı Dolap", resimYolu: "/images/Gemini_Generated_Image_1tb6ls1tb6ls1tb6.png", etiket: "Raf sistemi" },
  { ad: "Yatak Odası Takımı", resimYolu: "/images/Gemini_Generated_Image_2juznk2juznk2juz.png", etiket: "Takım uyumu" },
  { ad: "Açık Ton Dolap", resimYolu: "/images/Gemini_Generated_Image_57h4m257h4m257h4.png", etiket: "Aydınlık seri" },
  { ad: "Modern Yatak Odası", resimYolu: "/images/Gemini_Generated_Image_7oc5zk7oc5zk7oc5.png", etiket: "Modern çizgi" },
  { ad: "Doğal Ahşap Takım", resimYolu: "/images/Gemini_Generated_Image_8awwj98awwj98aww.png", etiket: "Doğal ton" },
  { ad: "Kapaklı Büyük Dolap", resimYolu: "/images/Gemini_Generated_Image_8dzl478dzl478dzl.png", etiket: "Kapaklı model" },
  { ad: "Tekli Açık Dolap", resimYolu: "/images/Gemini_Generated_Image_8ublpb8ublpb8ubl.png", etiket: "Dar alan" },
  { ad: "Geniş Raf Ünitesi", resimYolu: "/images/Gemini_Generated_Image_9coig39coig39coi.png", etiket: "Düzenli iç hacim" },
  { ad: "Simetrik Dolap Tasarımı", resimYolu: "/images/Gemini_Generated_Image_9r2zof9r2zof9r2z.png", etiket: "Simetrik düzen" },
  { ad: "Orta Çekmeceli Seri", resimYolu: "/images/Gemini_Generated_Image_9yygae9yygae9yyg.png", etiket: "Fonksiyonel" },
  { ad: "Sürgülü Cam Detay", resimYolu: "/images/Gemini_Generated_Image_asjchyasjchyasjc.png", etiket: "Cam detay" },
  { ad: "Çok Raflı Dolap", resimYolu: "/images/Gemini_Generated_Image_edvdkiedvdkiedvd.png", etiket: "Geniş raf" },
  { ad: "Kompakt Açık Sistem", resimYolu: "/images/Gemini_Generated_Image_eyucfyeyucfyeyuc.png", etiket: "Kompakt çözüm" },
  { ad: "Dikey Dar Modül", resimYolu: "/images/Gemini_Generated_Image_mtdxcimtdxcimtdx.png", etiket: "Dikey kullanım" },
  { ad: "Büyük Gövdeli Dolap", resimYolu: "/images/Gemini_Generated_Image_nnjm63nnjm63nnjm.png", etiket: "Büyük hacim" },
  { ad: "Açılır Kapak Sistem", resimYolu: "/images/Gemini_Generated_Image_nx401hnx401hnx40.png", etiket: "Açılır kapak" },
  { ad: "Aynalı Gardırop", resimYolu: "/images/Gemini_Generated_Image_o89fi0o89fi0o89f.png", etiket: "Aynalı seri" },
  { ad: "Beyaz ve Ahşap Seri", resimYolu: "/images/Gemini_Generated_Image_q50lyhq50lyhq50l.png", etiket: "Renk dengesi" },
  { ad: "Tekli Bölmeli Dolap", resimYolu: "/images/Gemini_Generated_Image_qv7oh6qv7oh6qv7o.png", etiket: "Tek modül" },
  { ad: "Duvar Boyu Dolap", resimYolu: "/images/Gemini_Generated_Image_sobokrsobokrsobo.png", etiket: "Duvar çözümü" },
  { ad: "Ekonomik Yatak Odası", resimYolu: "/images/Gemini_Generated_Image_yxb6r0yxb6r0yxb6.png", etiket: "Takım halinde" },
  { ad: "Doğal Açık Sistem", resimYolu: "/images/Gemini_Generated_Image_yhqt0xyhqt0xyhqt.png", etiket: "Açık raf" },
  { ad: "Showroom Dolap Takımı", resimYolu: "/images/WhatsApp Image 2026-06-14 at 22.30.40 (1).jpeg", etiket: "Showroom" },
];

function Dolap() {
  const yaziRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-page">
      <Seo
        title="Ankara Özel Ölçü Dolap Modelleri | Sn Çevik Mobilya"
        description="Ankara'da özel ölçü dolap, gardırop ve depolama çözümleri. Sn Çevik Mobilya ile el işçiliği dolap modellerini inceleyin."
        path="/dolap"
      />
      <section className="product-hero product-hero--image">
        <div className="product-hero__content">
          <span className="product-hero__kicker">Dolap koleksiyonu</span>
          <h1>Hayalinizdeki dolabı birlikte şekillendirelim.</h1>
          <p>
            Dolap başlığı altında gardırop, açık sistem raf, aynalı dolap ve takım uyumlu
            yatak odası çözümlerinin tamamını topladık. Klasik kapaklı modellerden açık raf
            düzenine kadar tüm dolap görselleri bu sayfada yer alıyor.
          </p>
          <div className="product-hero__meta">
            <span>Özel ölçü seçenekleri</span>
            <span>El işçiliği detaylar</span>
            <span>Ankara üretim</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img src="/images/Gemini_Generated_Image_asjchyasjchyasjc.png" alt="Dolap koleksiyonu" />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>Tüm dolap görselleri tek yerde</h2>
          <p>
            Dolap, gardırop, raf sistemleri ve showroom dolap örneklerinin tamamını bu galeriye
            ekledim. Böylece images klasöründeki dolap odaklı bütün görseller doğrudan dolap
            sayfasında görünür durumda.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {dolapVerileri.map((urun, index) => (
            <UrunKarti key={`${urun.resimYolu}-${index}`} ad={urun.ad} resimYolu={urun.resimYolu} etiket={urun.etiket} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dolap;
