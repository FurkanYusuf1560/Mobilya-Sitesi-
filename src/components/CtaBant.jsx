import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { iletisim, whatsappLink } from "../data/site";
import Reveal from "./Reveal";
import "./CtaBant.css";

function CtaBant({
  baslik = "Beğendiğiniz modeli bize sorun.",
  aciklama = "Fiyat ve ürünlerimiz hakkında detaylı bilgi için WhatsApp'tan yazın ya da bizi arayın.",
  mesaj,
}) {
  return (
    <section className="cta">
      <Reveal className="kap cta__ic">
        <div>
          <h2>{baslik}</h2>
          <p>{aciklama}</p>
        </div>
        <div className="cta__butonlar">
          <a className="buton buton--acik" href={whatsappLink(mesaj)} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp'tan yazın
          </a>
          <a className="buton buton--cizgi-acik" href={iletisim.telefonLink}>
            <FontAwesomeIcon icon={faPhone} /> Hemen arayın
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CtaBant;
