import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const komodinVerileri = [
  { ad: "Takım İçi Komodin", resimYolu: "/images/Gemini_Generated_Image_2juznk2juznk2juz.png", etiket: "Takım uyumu" },
  { ad: "Aydınlık Oda Komodini", resimYolu: "/images/Gemini_Generated_Image_57h4m257h4m257h4.png", etiket: "Açık ton" },
  { ad: "Modern Komodin Detayı", resimYolu: "/images/Gemini_Generated_Image_7oc5zk7oc5zk7oc5.png", etiket: "Modern çizgi" },
  { ad: "Doğal Ahşap Komodin", resimYolu: "/images/Gemini_Generated_Image_8awwj98awwj98aww.png", etiket: "Doğal doku" },
  { ad: "Yumuşak Geçişli Takım", resimYolu: "/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png", etiket: "Yatak odası takımı" },
  { ad: "Beyaz Seri Komodin", resimYolu: "/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png", etiket: "Beyaz seri" },
  { ad: "Aynalı Dolaplı Takım", resimYolu: "/images/Gemini_Generated_Image_vr9kxpvr9kxpvr9k.png", etiket: "Takım halinde" },
  { ad: "Gri Yatak Odası Komodini", resimYolu: "/images/Gemini_Generated_Image_sdvrd8sdvrd8sdvr.png", etiket: "Gri seri" },
];

function Komodin() {
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
        title="Komodin Modelleri | Sn Çevik Mobilya Ankara"
        description="Yatak odası için özel üretim komodin modelleri. Ankara Altındağ Sn Çevik Mobilya atölyesinde ölçüye uygun komodin tasarımları."
        path="/komodin"
      />
      <section className="product-hero product-hero--image">
        <div className="product-hero__content">
          <span className="product-hero__kicker">Komodin seçkisi</span>
          <h1>Odanın ritmini tamamlayan güçlü detaylar.</h1>
          <p>
            Komodin görsellerini özellikle yatak odası takımı içinde görünen örneklerden topladım.
            Yani burada bağımsız çekmeceli birimden çok, komodin kullanımını takım içinde gösteren
            fotoğraflar öne çıkıyor.
          </p>
          <div className="product-hero__meta">
            <span>Takım uyumlu çözümler</span>
            <span>İşlevsel çekmece kurgusu</span>
            <span>Modern yüzey detayları</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img src="/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png" alt="Komodin koleksiyonu" />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>Komodin detayları takım içinde daha net görülüyor</h2>
          <p>
            Komodinler çoğu zaman yatak odasının tamamlayıcı parçası olduğu için bu sayfada onları
            takım içindeki yerleriyle gösteriyoruz. Böylece çekmece oranı, başlık hizası ve genel
            kullanım senaryosu daha rahat okunuyor.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {komodinVerileri.map((urun, index) => (
            <UrunKarti key={`${urun.resimYolu}-${index}`} ad={urun.ad} resimYolu={urun.resimYolu} etiket={urun.etiket} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Komodin;
