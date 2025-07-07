import { useEffect, useRef, useState } from "react";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const dolapVerileri = [
  { ad: "", resimYolu: "/images/dolap2.jpeg" },
  { ad: "", resimYolu: "/images/dolap4.jpeg" },
  { ad: "", resimYolu: "/images/dolap5.jpeg" },
  { ad: "", resimYolu: "/images/dolap6.jpeg" },
  { ad: "", resimYolu: "/images/dolap7.jpeg" },
  { ad: "", resimYolu: "/images/dolap8.jpeg" },
  { ad: "", resimYolu: "/images/dolap9.jpeg" },
  { ad: "", resimYolu: "/images/dolap11.jpeg" },
  { ad: "", resimYolu: "/images/dolap12.jpeg" },
  { ad: "", resimYolu: "/images/dolap13.jpeg" },
  { ad: "", resimYolu: "/images/dolap14.jpeg" },
  { ad: "", resimYolu: "/images/dolap15.jpeg" },
  { ad: "", resimYolu: "/images/dolap16.jpeg" },
  { ad: "", resimYolu: "/images/dolap17.jpeg" },
  { ad: "", resimYolu: "/images/dolap18.jpeg" },
  { ad: "", resimYolu: "/images/dolap19.jpeg" },
  { ad: "", resimYolu: "/images/dolap20.jpeg" },
  { ad: "", resimYolu: "/images/dolap21.jpeg" },
  { ad: "", resimYolu: "/images/dolap22.jpeg" },
  { ad: "", resimYolu: "/images/dolap23.jpeg" },
  { ad: "", resimYolu: "/images/dolap24.jpeg" },
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
          <video
            src="/videos/dolap-tanitim.mp4"
            autoPlay
            controls
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />
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
