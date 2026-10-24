import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { iletisim, whatsappLink } from "../data/site";
import "./Footer.css";

function Footer() {
  return (
    <footer className="alt">
      <div className="kap alt__ic">
        <div className="alt__marka">
          <span className="alt__isim">Pako Dizayn</span>
          <p>
            Sn Çevik Mobilya. Dolap, komodin ve şifonyerlerimizi Ankara Altındağ'daki
            atölyemizde, 35 yılı aşkın tecrübeyle üretiyoruz.
          </p>
        </div>

        <div className="alt__sutun">
          <h3>İletişim</h3>
          <a href={iletisim.telefonLink}>
            <FontAwesomeIcon icon={faPhone} /> {iletisim.telefon}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a href={iletisim.instagramLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> {iletisim.instagram}
          </a>
          <a href={iletisim.haritaLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} /> {iletisim.adres}
          </a>
        </div>
      </div>

      <div className="kap alt__taban">
        <span>© {new Date().getFullYear()} Sn Çevik Mobilya – Pako Dizayn</span>
        <span>Ankara'da el işçiliğiyle üretilmiştir.</span>
      </div>
    </footer>
  );
}

export default Footer;
