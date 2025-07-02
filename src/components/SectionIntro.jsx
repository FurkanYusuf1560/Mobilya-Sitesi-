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
      { threshold: 0.3 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-container">
      <div className={`section-content ${reverse ? "reverse" : ""}`}>
        <div ref={yaziRef} className={`text-content ${visible ? "visible" : ""}`}>
          <h2>{baslik}</h2>
          <p>{aciklama}</p>
          <Link to={hedefLink}>
            <button>Detayları Gör</button>
          </Link>
        </div>
        <div className="image-content">
          <img src={resim} alt={baslik} onError={(e) => e.target.src = "/images/placeholder.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
