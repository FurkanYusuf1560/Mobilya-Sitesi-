import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { whatsappLink } from "../data/site";
import Gorsel from "./Gorsel";
import Slider from "./Slider";
import "./UrunKarti.css";

function UrunKarti({ urun, kategoriAd, onAc }) {
  const mesaj = `Merhaba, sitenizdeki "${urun.ad}" modeli hakkında bilgi almak istiyorum.`;

  return (
    <article className="urun">
      <div className="urun__medya">
        {urun.fotograflar?.length ? (
          <Slider fotograflar={urun.fotograflar} ad={urun.ad} onAc={onAc} />
        ) : (
          <Gorsel alt={urun.ad} tur={urun.kategori} />
        )}
        {urun.etiket ? <span className="urun__etiket">{urun.etiket}</span> : null}
      </div>
      <div className="urun__govde">
        {kategoriAd ? <span className="urun__kategori">{kategoriAd}</span> : null}
        <h3>{urun.ad}</h3>
        {urun.aciklama ? <p>{urun.aciklama}</p> : null}
        <a className="urun__sor" href={whatsappLink(mesaj)} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> Bu modeli sorun
        </a>
      </div>
    </article>
  );
}

export function BosUrunKarti({ tur, kategoriAd }) {
  return (
    <article className="urun urun--bos">
      <div className="urun__medya">
        <Gorsel alt={`Yeni ${kategoriAd ?? "model"}`} tur={tur} etiket="Fotoğraf yakında" />
      </div>
      {kategoriAd ? (
        <div className="urun__govde">
          <span className="urun__kategori">{kategoriAd}</span>
          <h3>Yeni modeller</h3>
        </div>
      ) : null}
    </article>
  );
}

export default UrunKarti;
