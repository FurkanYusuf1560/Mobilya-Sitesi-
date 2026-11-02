import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../components/Reveal";
import UrunIzgara from "../components/UrunIzgara";
import CtaBant from "../components/CtaBant";
import { sayfalar, sayfaUrunleri } from "../data/sayfalar";
import { iletisim, whatsappLink } from "../data/site";
import "./Home.css";
import "./KategoriSayfasi.css";

function KategoriSayfasi({ sayfa }) {
  const { liste, yedek } = sayfaUrunleri(sayfa);
  const digerSayfalar = sayfalar.filter((diger) => diger.yol !== sayfa.yol);
  const mesaj = `Merhaba, ${sayfa.menuAdi.toLocaleLowerCase("tr")} modelleriniz hakkında bilgi almak istiyorum.`;

  return (
    <main>
      <section className="kategori-giris">
        <div className="kap">
          <nav className="yol-izi" aria-label="Sayfa yolu">
            <a href="/">Anasayfa</a>
            <span aria-hidden="true">/</span>
            <span>{sayfa.menuAdi}</span>
          </nav>
          <Reveal>
            <span className="ust-baslik">{sayfa.ustBaslik}</span>
            <h1>{sayfa.h1}</h1>
            <p>{sayfa.giris}</p>
            <div className="giris__butonlar">
              <a className="buton buton--ana" href={whatsappLink(mesaj)} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp'tan fiyat sorun
              </a>
              <a className="buton buton--cizgi" href={iletisim.telefonLink}>
                {iletisim.telefon}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bolum bolum--ust-bosluksuz" id="urunler">
        <div className="kap">
          <h2 className="kategori-alt-baslik">{yedek ? sayfa.yedekUrunBasligi : sayfa.urunBasligi}</h2>
          {yedek && sayfa.yedekNot ? <p className="kategori-not">{sayfa.yedekNot}</p> : null}
          <UrunIzgara urunler={liste} />
        </div>
      </section>

      <section className="bolum kategori-metin">
        <div className="kap kategori-metin__ic">
          {sayfa.metin.map((bolum) => (
            <Reveal key={bolum.baslik}>
              <h2>{bolum.baslik}</h2>
              {bolum.paragraflar.map((paragraf) => (
                <p key={paragraf}>{paragraf}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bolum sss">
        <div className="kap sss__ic">
          <Reveal>
            <span className="ust-baslik">Sık sorulan sorular</span>
            <h2>Merak edilenler.</h2>
          </Reveal>
          <div className="sss__liste">
            {sayfa.sorular.map((soru) => (
              <details key={soru.soru}>
                <summary>{soru.soru}</summary>
                <p>{soru.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBant mesaj={mesaj} />

      <section className="bolum">
        <div className="kap">
          <span className="ust-baslik">Diğer ürünlerimiz</span>
          <nav className="kategori-linkleri" aria-label="Diğer kategoriler">
            {digerSayfalar.map((diger) => (
              <a key={diger.yol} href={diger.yol}>
                {diger.menuAdi} modelleri <FontAwesomeIcon icon={faArrowRight} />
              </a>
            ))}
            <a href="/#urunler">
              Tüm ürünler <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default KategoriSayfasi;
