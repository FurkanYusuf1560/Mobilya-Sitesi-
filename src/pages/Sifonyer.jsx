import { useEffect, useRef, useState } from "react";
import UrunKarti from "../components/UrunKarti";
import "./Dolap.css";

const sifonyerVerileri = [
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
  { ad: "Ceviz Şifonyer", resimYolu: "/images/dolap3.jpeg" },
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
      { threshold: 0.3 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="tanitim-container">
        <div className="tanitim-resim">
          <img src="/images/sifonyer1.jpeg" alt="Şifonyer Tanıtım" />
        </div>
        <div ref={yaziRef} className={`tanitim-yazi ${visible ? "visible" : ""}`}>
          <h1>Tarzınızı Yansıtan Şifonyer Modelleri</h1>
          <p>
            Şifonyer seçeneklerimiz, geniş saklama alanı ve zarif tasarımıyla öne
            çıkıyor. Yatak odanıza estetik dokunuş katacak modern ve klasik modeller
            burada!
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
          {sifonyerVerileri.map((urun, index) => (
            <UrunKarti key={index} ad={urun.ad} resimYolu={urun.resimYolu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sifonyer;
