import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone, faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { iletisim, katalog, whatsappLink } from "../data/site";
import "./Header.css";

const baglantilar = [
  { href: "#urunler", ad: "Ürünler" },
  { href: "#hakkimizda", ad: "Hakkımızda" },
  { href: "#iletisim", ad: "İletişim" },
];

function Header() {
  const [acik, setAcik] = useState(false);
  const [kaydi, setKaydi] = useState(false);

  useEffect(() => {
    const kontrol = () => setKaydi(window.scrollY > 12);
    kontrol();
    window.addEventListener("scroll", kontrol, { passive: true });
    return () => window.removeEventListener("scroll", kontrol);
  }, []);

  useEffect(() => {
    document.body.style.overflow = acik ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [acik]);

  const kapat = () => setAcik(false);

  return (
    <header className={`ust ${kaydi || acik ? "ust--dolu" : ""}`}>
      <div className="ust__ic kap">
        <a className="marka" href="#" onClick={kapat} aria-label="Pako Dizayn – sayfa başı">
          <span className="marka__isim">Pako Dizayn</span>
          <span className="marka__alt">Sn Çevik Mobilya</span>
        </a>

        <nav className={`menu ${acik ? "menu--acik" : ""}`} aria-label="Ana menü">
          {baglantilar.map((baglanti) => (
            <a key={baglanti.href} href={baglanti.href} onClick={kapat}>
              {baglanti.ad}
            </a>
          ))}

          <a className="menu__katalog" href={katalog.dosya} download={katalog.indirmeAdi} onClick={kapat}>
            <FontAwesomeIcon icon={faFilePdf} className="menu__katalog-ikon" />
            <span className="menu__katalog-yazi">
              Katalog
              <small>PDF olarak indirin</small>
            </span>
            <FontAwesomeIcon icon={faDownload} className="menu__katalog-indir" />
          </a>

          <div className="menu__mobil-iletisim">
            <a className="buton buton--ana" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp'tan yazın
            </a>
            <a className="buton buton--cizgi" href={iletisim.telefonLink}>
              <FontAwesomeIcon icon={faPhone} /> {iletisim.telefon}
            </a>
          </div>
        </nav>

        <div className="ust__sag">
          <a className="ust__tel" href={iletisim.telefonLink}>
            <FontAwesomeIcon icon={faPhone} />
            <span>{iletisim.telefon}</span>
          </a>
          <a
            className="buton buton--ana buton--kucuk ust__teklif"
            href={whatsappLink("Merhaba, ürünleriniz için fiyat bilgisi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiyat sorun
          </a>
          <button
            type="button"
            className="ust__hamburger"
            aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={acik}
            onClick={() => setAcik((onceki) => !onceki)}
          >
            <FontAwesomeIcon icon={acik ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
