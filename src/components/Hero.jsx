import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

function Hero({ baslik, aciklama, tel, resim, reverse = false }) {
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
          <h1>{baslik}</h1>
          <p>{aciklama}</p>
          <div className="contact-icons">
            <p><FontAwesomeIcon icon={faPhone} /> {tel}</p>
            <p><FontAwesomeIcon icon={faInstagram} /> @pakodizayn</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> Güneşevler, Eğribucak Sk. No:24, 06140 Altındağ/Ankara</p>
          </div>
        </div>
        <div className="image-content">
          <img src={resim} alt="hero" onError={(e) => e.target.src = "/images/placeholder.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
