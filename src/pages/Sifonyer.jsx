import { useEffect, useRef, useState } from "react";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const sifonyerVerileri = [
  {
    ad: "Ceviz Şifonyer",
    resimYolu: "/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png",
    etiket: "Sıcak doku",
  },
  {
    ad: "Geniş Çekmeceli Model",
    resimYolu: "/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png",
    etiket: "Fonksiyonel",
  },
  {
    ad: "Modern Yüzeyli Şifonyer",
    resimYolu: "/images/Gemini_Generated_Image_7oc5zk7oc5zk7oc5.png",
    etiket: "Modern çizgi",
  },
  {
    ad: "Doğal Ton Serisi",
    resimYolu: "/images/Gemini_Generated_Image_sdvrd8sdvrd8sdvr.png",
    etiket: "Doğal görünüm",
  },
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
      <section className="product-hero product-hero--image">
        <div className="product-hero__content">
          <span className="product-hero__kicker">Şifonyer koleksiyonu</span>
          <h1>Düzeni artıran, odanın havasını yükselten parçalar.</h1>
          <p>
            Şifonyer modellerimiz, geniş çekmece hacmini sade ve karakterli bir
            dış görünüşle birleştiriyor. Kullanım kolaylığı kadar odadaki genel
            kompozisyona uyum da ön planda tutuluyor.
          </p>
          <div className="product-hero__meta">
            <span>Geniş çekmece hacmi</span>
            <span>Modern ve klasik denge</span>
            <span>Uzun ömürlü malzeme seçimi</span>
          </div>
        </div>
        <div className="product-hero__media">
          <img
            src="/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png"
            alt="Şifonyer koleksiyonu"
          />
        </div>
      </section>

      <section className="product-intro">
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h2>Depolama ihtiyacı için estetik çözüm</h2>
          <p>
            Yatak odasında görsel kalabalık oluşturmadan ekstra alan kazandıran
            şifonyerler, özellikle takım bütünlüğü arayan kullanıcılar için çok
            güçlü bir tamamlayıcı. İhtiyaca göre daha kompakt ya da daha geniş
            çekmece düzenleri uygulanabiliyor.
          </p>
        </div>
      </section>

      <section className="product-gallery">
        <div className="product-gallery__grid">
          {sifonyerVerileri.map((urun, index) => (
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

export default Sifonyer;
