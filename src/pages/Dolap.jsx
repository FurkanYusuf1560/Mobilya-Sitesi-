import { useEffect, useRef, useState } from "react";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const dolapVerileri = [
  { ad: "Beyaz Sürgülü Dolap", resimYolu: "/images/dolap1.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap2.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap2.jpeg" },
  { ad: "Ceviz Kapaklı Dolap", resimYolu: "/images/dolap2.jpeg" },
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
      { threshold: 0.3 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* TANITIM FLEX BÖLÜMÜ */}
      <div className="tanitim-container">
        <div className="tanitim-resim">
          <img src="/images/dolap3.jpeg" alt="Dolap Tanıtım" />
        </div>
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h1>Hayalinizdeki Dolabı Tasarlayın</h1>
          <p>
            Dolap koleksiyonumuz, modern yaşam alanlarınıza şıklık ve işlevsellik
            katıyor. Gardırop, kitaplık veya dekoratif depolama çözümleri için
            özenle tasarlanmış ürünlerimizle yaşam alanlarınızı yeniden keşfedin.
            Kaliteli malzemeler ve özenli işçilikle üretilen dolaplarımız, uzun
            yıllar size eşlik edecek.
          </p>
        </div>
      </div>

      {/* ÜRÜNLER */}
      <div style={{ padding: "40px 5%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {dolapVerileri.map((urun, index) => (
            <UrunKarti key={index} ad={urun.ad} resimYolu={urun.resimYolu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dolap;
