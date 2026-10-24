import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Lightbox.css";

function Lightbox({ gorseller, sira, setSira }) {
  const acik = sira !== null;
  const toplam = gorseller.length;
  const dokunmaX = useRef(0);

  useEffect(() => {
    if (!acik) return undefined;

    const tus = (event) => {
      if (event.key === "Escape") setSira(null);
      if (event.key === "ArrowRight") setSira((onceki) => (onceki + 1) % toplam);
      if (event.key === "ArrowLeft") setSira((onceki) => (onceki - 1 + toplam) % toplam);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", tus);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", tus);
    };
  }, [acik, toplam, setSira]);

  if (!acik) return null;

  const gorsel = gorseller[sira];

  // Telefonda sağa/sola kaydırarak fotoğraf değiştirme
  const dokunmaBasla = (event) => {
    dokunmaX.current = event.touches[0].clientX;
  };

  const dokunmaBitti = (event) => {
    const fark = event.changedTouches[0].clientX - dokunmaX.current;
    if (toplam > 1 && Math.abs(fark) > 50) {
      setSira((sira + (fark < 0 ? 1 : -1) + toplam) % toplam);
    }
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={gorsel.alt}
      onClick={() => setSira(null)}
      onTouchStart={dokunmaBasla}
      onTouchEnd={dokunmaBitti}
    >
      <button type="button" className="lightbox__kapat" aria-label="Kapat" onClick={() => setSira(null)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      {toplam > 1 ? (
        <>
          <button
            type="button"
            className="lightbox__ok lightbox__ok--sol"
            aria-label="Önceki"
            onClick={(event) => {
              event.stopPropagation();
              setSira((sira - 1 + toplam) % toplam);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className="lightbox__ok lightbox__ok--sag"
            aria-label="Sonraki"
            onClick={(event) => {
              event.stopPropagation();
              setSira((sira + 1) % toplam);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      ) : null}

      <figure onClick={(event) => event.stopPropagation()}>
        <img src={gorsel.src} alt={gorsel.alt} />
        <figcaption>
          {gorsel.alt}
          {toplam > 1 ? <span>{`${sira + 1} / ${toplam}`}</span> : null}
        </figcaption>
      </figure>
    </div>
  );
}

export default Lightbox;
