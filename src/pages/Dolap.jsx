import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const dolapVerileri = [
  {
    ad: "Özel Ölçü Dolap",
    resimYolu: "/images/Gemini_Generated_Image_2juznk2juznk2juz.png",
    etiket: "Özel üretim",
  },
  {
    ad: "Modern Kapak Formu",
    resimYolu: "/images/Gemini_Generated_Image_57h4m257h4m257h4.png",
    etiket: "Yeni seri",
  },
  {
    ad: "Sıcak Ahşap Doku",
    resimYolu: "/images/Gemini_Generated_Image_8awwj98awwj98aww.png",
    etiket: "Doğal ton",
  },
  {
    ad: "Yatak Odası Gardırop",
    resimYolu: "/images/Gemini_Generated_Image_yxb6r0yxb6r0yxb6.png",
    etiket: "Fonksiyonel",
  },
  {
    ad: "Dengeli Cephe Tasarımı",
    resimYolu: "/images/Gemini_Generated_Image_7oc5zk7oc5zk7oc5.png",
    etiket: "Modern çizgi",
  },
  {
    ad: "Atölye Seçkisi",
    resimYolu: "/images/dolap3.jpeg",
    etiket: "Usta işi",
  },
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
            Modern yaşam alanlarına uyum sağlayan dolap modellerimiz; ölçü, kapak
            düzeni, renk tonu ve depolama ihtiyacına göre şekilleniyor. Galerideki
            her parça, atölyeden çıkan gerçek uygulamalardan ilham alıyor.
          </p>
          <div className="product-hero__meta">
            <span>Özel ölçü seçenekleri</span>
            <span>El işçiliği detaylar</span>
            <span>Ankara üretim</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img
            src="/images/Gemini_Generated_Image_yxb6r0yxb6r0yxb6.png"
            alt="Dolap koleksiyonu"
          />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>İşlev ve estetiği dengede tutan çözümler</h2>
          <p>
            Gardırop, sürgülü sistem veya dekoratif depolama çözümleri için
            tasarlanan dolaplarımız; malzeme kalitesi, ölçü hassasiyeti ve uzun
            ömürlü kullanım odağıyla hazırlanır. İsterseniz buradaki örnekler
            üzerinden benzer bir çizgi, isterseniz tamamen size özel bir kurgu
            oluşturulabilir.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {dolapVerileri.map((urun, index) => (
            <UrunKarti
              key={`${urun.resimYolu}-${index}`}
              ad={urun.ad}
              resimYolu={urun.resimYolu}
              etiket={urun.etiket}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dolap;
