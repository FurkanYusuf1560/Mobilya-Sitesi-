import { useEffect, useRef, useState } from "react";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const komodinVerileri = [
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
  { ad: "Modern Komodin", resimYolu: "/images/komodin1.jpeg" },
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
      { threshold: 0.3 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="tanitim-container">
        <div className="tanitim-resim">
          <img src="/images/komodin1.jpeg" alt="Komodin Tanıtım" />
        </div>
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h1>Komodin Modelleriyle Odanıza Şıklık Katın</h1>
          <p>
            Komodin koleksiyonumuz, hem estetik hem de işlevselliği bir arada sunar.
            Farklı tarz ve boyutlardaki komodinlerle yatak odanızı tamamlayın.
            Şık çekmeceler, kaliteli malzeme ve modern tasarım bir arada.
          </p>
        </div>
      </div>

      <div style={{ padding: "40px 5%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {komodinVerileri.map((urun, index) => (
            <UrunKarti key={index} ad={urun.ad} resimYolu={urun.resimYolu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Komodin;
