import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SectionIntro.css";

function SectionIntro({ baslik, aciklama, resim, hedefLink, reverse = false }) {
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
    <section className="intro-section">
      <div className={`intro-layout ${reverse ? "reverse" : ""}`}>
        <div ref={yaziRef} className={`intro-copy ${visible ? "visible" : ""}`}>
          <span className="intro-kicker">Seçili koleksiyon</span>
          <h2>{baslik}</h2>
          <p>{aciklama}</p>
          <Link className="intro-link" to={hedefLink}>
            Detayları gör
          </Link>
        </div>
        <div className="intro-media">
          <img src={resim} alt={baslik} />
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
