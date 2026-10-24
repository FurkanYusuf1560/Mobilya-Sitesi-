import "./Gorsel.css";

// Fotoğraf yoksa kategoriye özel çizimli bir yer tutucu gösterir.
const cizimler = {
  dolap: (
    <>
      <rect x="52" y="24" width="96" height="176" rx="3" />
      <line x1="100" y1="24" x2="100" y2="200" />
      <line x1="92" y1="100" x2="92" y2="124" />
      <line x1="108" y1="100" x2="108" y2="124" />
      <line x1="52" y1="44" x2="148" y2="44" />
      <line x1="60" y1="200" x2="60" y2="210" />
      <line x1="140" y1="200" x2="140" y2="210" />
    </>
  ),
  komodin: (
    <>
      <rect x="62" y="104" width="76" height="86" rx="3" />
      <line x1="62" y1="133" x2="138" y2="133" />
      <line x1="62" y1="162" x2="138" y2="162" />
      <line x1="92" y1="118" x2="108" y2="118" />
      <line x1="92" y1="147" x2="108" y2="147" />
      <line x1="92" y1="176" x2="108" y2="176" />
      <line x1="70" y1="190" x2="70" y2="210" />
      <line x1="130" y1="190" x2="130" y2="210" />
      <path d="M86 104 L80 70 H120 L114 104" />
      <line x1="100" y1="70" x2="100" y2="58" />
    </>
  ),
  sifonyer: (
    <>
      <rect x="36" y="80" width="128" height="116" rx="3" />
      <line x1="36" y1="109" x2="164" y2="109" />
      <line x1="36" y1="138" x2="164" y2="138" />
      <line x1="36" y1="167" x2="164" y2="167" />
      <line x1="90" y1="94" x2="110" y2="94" />
      <line x1="90" y1="123" x2="110" y2="123" />
      <line x1="90" y1="152" x2="110" y2="152" />
      <line x1="90" y1="181" x2="110" y2="181" />
      <line x1="46" y1="196" x2="46" y2="210" />
      <line x1="154" y1="196" x2="154" y2="210" />
      <rect x="68" y="30" width="64" height="42" rx="21" />
    </>
  ),
};

function Gorsel({ src, alt, tur = "dolap", className = "", etiket = "Fotoğraf yakında" }) {
  if (src) {
    return (
      <div className={`gorsel ${className}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={`gorsel gorsel--bos ${className}`} role="img" aria-label={`${alt} – ${etiket}`}>
      <svg viewBox="0 0 200 230" aria-hidden="true">
        <line className="gorsel__zemin" x1="16" y1="210" x2="184" y2="210" />
        {cizimler[tur] ?? cizimler.dolap}
      </svg>
      {etiket ? <span className="gorsel__etiket">{etiket}</span> : null}
    </div>
  );
}

export default Gorsel;
