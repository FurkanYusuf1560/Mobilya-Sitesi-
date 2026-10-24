import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { whatsappLink } from "../data/site";
import "./WhatsappButon.css";

function WhatsappButon() {
  return (
    <a
      className="wp-buton"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden yazın"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
      <span>Bize yazın</span>
    </a>
  );
}

export default WhatsappButon;
