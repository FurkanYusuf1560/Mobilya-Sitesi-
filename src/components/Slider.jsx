import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

// Mobilde parmakla kaydırılır (scroll-snap), masaüstünde oklar ve noktalarla gezilir.
function Slider({ fotograflar, ad, onAc }) {
  const izRef = useRef(null);
  const [aktif, setAktif] = useState(0);
  // İlk kaydırmaya kadar sadece kapak fotoğrafı yüklenir, sonra hepsi.
  const [kaydirildiMi, setKaydirildiMi] = useState(false);
  const son = fotograflar.length - 1;

  const git = (index) => {
    const iz = izRef.current;
    iz.scrollTo({ left: index * iz.clientWidth, behavior: "smooth" });
  };

  const kaydirildi = () => {
    const iz = izRef.current;
    setAktif(Math.round(iz.scrollLeft / iz.clientWidth));
    setKaydirildiMi(true);
  };

  return (
    <div className="slider">
      <div className="slider__iz" ref={izRef} onScroll={kaydirildi}>
        {fotograflar.map((foto, index) => (
          <button
            key={foto.kart}
            type="button"
            className="slider__kare"
            onClick={() => onAc(index)}
            aria-label={`${ad} – ${index + 1}. fotoğrafı büyüt`}
          >
            <img
              src={foto.kart}
              alt={`${ad} – fotoğraf ${index + 1}`}
              loading={kaydirildiMi && index > 0 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </button>
        ))}
      </div>

      {son > 0 ? (
        <>
          <button
            type="button"
            className="slider__ok slider__ok--sol"
            aria-label="Önceki fotoğraf"
            onClick={() => git(aktif - 1)}
            disabled={aktif === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className="slider__ok slider__ok--sag"
            aria-label="Sonraki fotoğraf"
            onClick={() => git(aktif + 1)}
            disabled={aktif === son}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className="slider__sayac">{`${aktif + 1} / ${son + 1}`}</span>
          <div className="slider__noktalar">
            {fotograflar.map((foto, index) => (
              <button
                key={foto.kart}
                type="button"
                className={index === aktif ? "slider__nokta--aktif" : ""}
                aria-label={`${index + 1}. fotoğraf`}
                aria-current={index === aktif}
                onClick={() => git(index)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Slider;
