import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const sifonyerVerileri = [
  { ad: "Makyaj Masası ve Şifonyer", resimYolu: "/images/Gemini_Generated_Image_diym1wdiym1wdiym.png", etiket: "Makyajlı şifonyer" },
  { ad: "Beyaz Makyaj Masası", resimYolu: "/images/WhatsApp Image 2026-06-14 at 22.36.46.jpeg", etiket: "Gerçek uygulama" },
  { ad: "Aynalı Makyaj Masası", resimYolu: "/images/WhatsApp Image 2026-06-14 at 22.36.46 (1).jpeg", etiket: "Gerçek uygulama" },
  { ad: "Doğal Ahşap Şifonyer", resimYolu: "/images/Gemini_Generated_Image_8awwj98awwj98aww.png", etiket: "Takım içinde" },
  { ad: "Sade Yüzeyli Şifonyer", resimYolu: "/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png", etiket: "Yatak odası takımı" },
  { ad: "Beyaz Seri Şifonyer", resimYolu: "/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png", etiket: "Açık renk" },
];

function Sifonyer() {
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
        title="Şifonyer Modelleri | Sn Çevik Mobilya Ankara"
        description="Ankara'da özel üretim şifonyer ve makyaj masası modelleri. Aynalı, çekmeceli ve kullanışlı yatak odası çözümleri için Sn Çevik Mobilya."
        path="/sifonyer"
      />
      <section className="product-hero product-hero--image">
        <div className="product-hero__content">
          <span className="product-hero__kicker">Şifonyer koleksiyonu</span>
          <h1>Makyajlı şifonyerleri doğru başlık altında topladık.</h1>
          <p>
            Makyaj masası, aynalı çekmeceli birimler ve şifonyer kullanımı olan görsellerin tamamını
            bu başlık altında topladım. Özellikle makyajlı şifonyer fotoğrafları artık doğrudan
            şifonyer sayfasında görünüyor.
          </p>
          <div className="product-hero__meta">
            <span>Aynalı çözümler</span>
            <span>Çekmeceli düzen</span>
            <span>Takım tamamlayıcı ürünler</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img src="/images/Gemini_Generated_Image_diym1wdiym1wdiym.png" alt="Şifonyer ve makyaj masası koleksiyonu" />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>Şifonyer ve makyaj masası bir arada</h2>
          <p>
            Aynalı kullanım, geniş çekmece düzeni ve makyaj köşesi ihtiyacı olan ürünler burada
            ayrı bir grup olarak toplanıyor. Bu bölüm özellikle senin bahsettiğin makyajlı şifonyer
            görsellerini doğru yerde göstermesi için güncellendi.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {sifonyerVerileri.map((urun, index) => (
            <UrunKarti key={`${urun.resimYolu}-${index}`} ad={urun.ad} resimYolu={urun.resimYolu} etiket={urun.etiket} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sifonyer;
