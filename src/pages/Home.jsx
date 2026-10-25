import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../components/Reveal";
import Gorsel from "../components/Gorsel";
import UrunKarti, { BosUrunKarti } from "../components/UrunKarti";
import Lightbox from "../components/Lightbox";
import CtaBant from "../components/CtaBant";
import { kategoriler, urunler } from "../data/urunler";
import { anaGorsel, iletisim, whatsappLink } from "../data/site";
import "./Home.css";

// Süzme düğmeleri yalnızca birden fazla kategoride ürün varsa görünür.
const doluKategoriler = kategoriler.filter((kategori) =>
  urunler.some((urun) => urun.kategori === kategori.slug)
);

function kategoriAdi(slug) {
  return kategoriler.find((kategori) => kategori.slug === slug)?.ad;
}

function Home() {
  const [filtre, setFiltre] = useState("hepsi");
  const [acikUrun, setAcikUrun] = useState(null);
  const [sira, setSira] = useState(null);

  const gosterilen = filtre === "hepsi" ? urunler : urunler.filter((urun) => urun.kategori === filtre);

  const fotografiAc = (urun, index) => {
    setAcikUrun(urun);
    setSira(index);
  };

  return (
    <main>
      <section className="giris">
        <div className="kap giris__ic">
          <Reveal className="giris__metin">
            <span className="ust-baslik">Ankara-Siteler · Mobilya atölyesi</span>
            <h1>
              Atölyeden evinize, <em>ömürlük</em> mobilya.
            </h1>
            <p>
              Dolap, komodin ve şifonyerlerimizi Siteler'deki kendi atölyemizde, 35 yılı aşkın
              ustalıkla üretiyoruz.
            </p>
            <div className="giris__butonlar">
              <a className="buton buton--ana" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp'tan yazın
              </a>
              <a className="buton buton--cizgi" href="#urunler">
                Ürünleri inceleyin
              </a>
            </div>
          </Reveal>

          <Reveal className="giris__gorsel" gecikme={150}>
            <Gorsel src={anaGorsel} alt="Pako Dizayn yatak odası mobilyası" tur="dolap" />
            <div className="giris__rozet">
              <strong>35+</strong>
              <span>yıllık ustalık</span>
            </div>
          </Reveal>
        </div>

        <div className="kap giris__seritler">
          <div>
            <strong>Kendi üretimimiz</strong>
            <span>Siteler'deki atölyemizde</span>
          </div>
          <div>
            <strong>Usta işçiliği</strong>
            <span>35 yılı aşkın tecrübe</span>
          </div>
          <div>
            <strong>Takım uyumu</strong>
            <span>Dolap, komodin ve şifonyer</span>
          </div>
        </div>
      </section>

      <section className="bolum" id="urunler">
        <div className="kap">
          <Reveal className="bolum__bas">
            <div>
              <span className="ust-baslik">Ürünlerimiz</span>
              <h2>Atölyemizden çıkan modeller.</h2>
            </div>
            <p>Beğendiğiniz modelin altındaki butona dokunun, fiyat ve detayları WhatsApp'tan iletelim.</p>
          </Reveal>

          {doluKategoriler.length > 1 ? (
            <div className="filtre" role="group" aria-label="Kategoriye göre süz">
              {[{ slug: "hepsi", ad: "Tümü" }, ...doluKategoriler].map((kategori) => (
                <button
                  key={kategori.slug}
                  type="button"
                  className={filtre === kategori.slug ? "filtre--secili" : ""}
                  aria-pressed={filtre === kategori.slug}
                  onClick={() => setFiltre(kategori.slug)}
                >
                  {kategori.ad}
                </button>
              ))}
            </div>
          ) : null}

          <div className="urun-izgara">
            {urunler.length > 0
              ? gosterilen.map((urun, index) => (
                  <Reveal key={urun.ad} gecikme={(index % 3) * 100}>
                    <UrunKarti
                      urun={urun}
                      kategoriAd={kategoriAdi(urun.kategori)}
                      onAc={(fotoIndex) => fotografiAc(urun, fotoIndex)}
                    />
                  </Reveal>
                ))
              : kategoriler.map((kategori, index) => (
                  <Reveal key={kategori.slug} gecikme={index * 100}>
                    <BosUrunKarti tur={kategori.slug} kategoriAd={kategori.ad} />
                  </Reveal>
                ))}
          </div>

          {urunler.length === 0 ? (
            <p className="urun-not">
              Yeni modellerimizin fotoğrafları çok yakında burada. Güncel ürünleri hemen görmek için{" "}
              <a href={whatsappLink("Merhaba, güncel modellerinizi görmek istiyorum.")} target="_blank" rel="noopener noreferrer">
                WhatsApp'tan yazın
              </a>
              .
            </p>
          ) : null}
        </div>
        {acikUrun ? (
          <Lightbox
            gorseller={acikUrun.fotograflar.map((foto) => ({ src: foto.buyuk, alt: acikUrun.ad }))}
            sira={sira}
            setSira={setSira}
          />
        ) : null}
      </section>

      <section className="bolum hakkimizda" id="hakkimizda">
        <div className="kap hakkimizda__ic">
          <Reveal>
            <span className="ust-baslik">Hakkımızda</span>
            <blockquote>
              “Her parçada işçilik ve malzeme kalitesine aynı özeni gösteriyoruz.”
            </blockquote>
          </Reveal>
          <Reveal className="hakkimizda__metin" gecikme={150}>
            <p>
              Halil Çevik, 35 yılı aşkın ustalık birikimini Pako Dizayn çatısı altında çağdaş
              çizgilerle buluşturuyor. Dolaplar, komodinler ve şifonyerler; doğru malzeme, temiz
              işçilik ve uzun ömürlü kullanım odağıyla hazırlanıyor.
            </p>
            <p>
              Yatak odanızda sıcak, düzenli ve karakterli bir atmosfer arıyorsanız; burada her
              parça gerçek bir atölye emeği taşıyor.
            </p>
            <div className="hakkimizda__imza">
              <strong>Halil Çevik</strong>
              <span>Kurucu usta, Pako Dizayn</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBant />

      <section className="bolum iletisim" id="iletisim">
        <div className="kap iletisim__ic">
          <Reveal className="iletisim__bilgi">
            <span className="ust-baslik">İletişim</span>
            <h2>Bize ulaşın.</h2>
            <p>
              Ürünlerimiz, fiyatlar ve teslimat hakkında bilgi almak için bizi arayabilir ya da
              WhatsApp'tan yazabilirsiniz.
            </p>
            <ul className="iletisim__liste">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <div>
                  <span>Telefon</span>
                  <a href={iletisim.telefonLink}>{iletisim.telefon}</a>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} />
                <div>
                  <span>WhatsApp</span>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Mesaj gönderin
                  </a>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
                <div>
                  <span>Instagram</span>
                  <a href={iletisim.instagramLink} target="_blank" rel="noopener noreferrer">
                    {iletisim.instagram}
                  </a>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                  <span>Adres</span>
                  <a href={iletisim.haritaLink} target="_blank" rel="noopener noreferrer">
                    {iletisim.adres}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="iletisim__harita" gecikme={150}>
            <iframe
              title="Pako Dizayn atölye konumu"
              src={iletisim.haritaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
