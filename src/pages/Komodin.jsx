import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const komodinVerileri = [
  {
    ad: "Yatak Başı Komodini",
    resimYolu: "/images/Gemini_Generated_Image_vr9kxpvr9kxpvr9k.png",
    etiket: "Minimal",
  },
  {
    ad: "Dikey Form Komodin",
    resimYolu: "/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png",
    etiket: "Dikey form",
  },
  {
    ad: "Doğal Ahşap Komodin",
    resimYolu: "/images/Gemini_Generated_Image_sdvrd8sdvrd8sdvr.png",
    etiket: "Doğal doku",
  },
  {
    ad: "Takım Uyumlu Parça",
    resimYolu: "/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png",
    etiket: "Takım uyumu",
  },
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
            Komodinler sadece küçük depolama alanları değil, yatak odasının
            karakterini dengeleyen tamamlayıcı parçalar. Buradaki seçki; sade,
            ölçülü ve malzeme hissi yüksek örneklerden oluşuyor.
          </p>
          <div className="product-hero__meta">
            <span>Takım uyumlu çözümler</span>
            <span>İşlevsel çekmece kurgusu</span>
            <span>Modern yüzey detayları</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img
            src="/images/Gemini_Generated_Image_vr9kxpvr9kxpvr9k.png"
            alt="Komodin koleksiyonu"
          />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>Küçük ölçekte büyük etki</h2>
          <p>
            Yatak başında ihtiyaç duyulan her şeyi kolay erişilebilir kılarken,
            genel oda kompozisyonunu da bozmayan oranlar kullanıyoruz. Yüzey,
            kulp ve çekmece geçişlerinde sade ama kaliteli bir dil korunuyor.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {komodinVerileri.map((urun, index) => (
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

export default Komodin;
