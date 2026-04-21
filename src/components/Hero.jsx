import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      { threshold: 0.25 }
    );

    if (yaziRef.current) observer.observe(yaziRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className={`hero-layout ${reverse ? "reverse" : ""}`}>
        <div ref={yaziRef} className={`hero-copy ${visible ? "visible" : ""}`}>
          <span className="hero-badge">Özel üretim yatak odası mobilyaları</span>
          <h1>{baslik}</h1>
          <p className="hero-lead">{aciklama}</p>
          <div className="hero-actions">
            <a className="hero-button hero-button--primary" href={`tel:${tel.replace(/\s+/g, "")}`}>
              Hemen ara
            </a>
            <Link className="hero-button hero-button--secondary" to="/dolap">
              Koleksiyonları incele
            </Link>
          </div>
          <div className="hero-contact-grid">
            <div className="hero-contact-card">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <strong>Telefon</strong>
                <span>{tel}</span>
              </div>
            </div>
            <a
              className="hero-contact-card"
              href="https://www.instagram.com/pakodizayn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <div>
                <strong>Instagram</strong>
                <span>@pakodizayn</span>
              </div>
            </a>
            <div className="hero-contact-card hero-contact-card--wide">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <strong>Atölye</strong>
                <span>Güneşevler, Eğribucak Sk. No:24, 06140 Altındağ/Ankara</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-media__frame">
            <img src={resim} alt={baslik} />
            <div className="hero-media__note">
              <span>35+ yıl tecrübe</span>
              <p>Her parçada ölçü, işçilik ve malzeme uyumuna özel dikkat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
