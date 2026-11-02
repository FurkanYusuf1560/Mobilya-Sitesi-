import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../components/Reveal";
import Gorsel from "../components/Gorsel";
import { BosUrunKarti } from "../components/UrunKarti";
import UrunIzgara from "../components/UrunIzgara";
import CtaBant from "../components/CtaBant";
import { kategoriler, urunler } from "../data/urunler";
import { sayfalar } from "../data/sayfalar";
import { anaGorsel, iletisim, whatsappLink } from "../data/site";
import "./Home.css";

// Süzme düğmeleri yalnızca birden fazla kategoride ürün varsa görünür.
const doluKategoriler = kategoriler.filter((kategori) =>
  urunler.some((urun) => urun.kategori === kategori.slug)
);

function Home() {
  const [filtre, setFiltre] = useState("hepsi");

  const gosterilen = filtre === "hepsi" ? urunler : urunler.filter((urun) => urun.kategori === filtre);

  return (
    <main>
      <section className="giris">
        <div className="kap giris__ic">
          <Reveal className="giris__metin">
            <span className="ust-baslik">Atölyeden evinize, ömürlük mobilya</span>
            <h1>
              Ankara Siteler'de <em>yatak odası takımı</em> ve mobilya imalatı.
            </h1>
            <p>
              Yatak odası takımı, aynalı gardırop, köşe dolap, makyaj masası, komodin ve şifonyerlerimizi
              Ankara Siteler'deki kendi atölyemizde, 35 yılı aşkın ustalıkla üretiyoruz.
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
            <p>
              Aynalı gardırop, köşe dolap, sürgülü dolap ve ışıklı makyaj masası modellerimiz.
              Beğendiğiniz modelin altındaki butona dokunun, fiyat ve detayları WhatsApp'tan iletelim.
            </p>
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

          {urunler.length > 0 ? (
            <UrunIzgara urunler={gosterilen} />
          ) : (
            <div className="urun-izgara">
              {kategoriler.map((kategori, index) => (
                <Reveal key={kategori.slug} gecikme={index * 100}>
                  <BosUrunKarti tur={kategori.slug} kategoriAd={kategori.ad} />
                </Reveal>
              ))}
            </div>
          )}

          {urunler.length === 0 ? (
            <p className="urun-not">
              Yeni modellerimizin fotoğrafları çok yakında burada. Güncel ürünleri hemen görmek için{" "}
              <a href={whatsappLink("Merhaba, güncel modellerinizi görmek istiyorum.")} target="_blank" rel="noopener noreferrer">
                WhatsApp'tan yazın
              </a>
              .
            </p>
          ) : null}

          <nav className="kategori-linkleri" aria-label="Kategoriler">
            {sayfalar.map((sayfa) => (
              <a key={sayfa.yol} href={sayfa.yol}>
                {sayfa.menuAdi} modelleri <FontAwesomeIcon icon={faArrowRight} />
              </a>
            ))}
          </nav>
        </div>
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
              çizgilerle buluşturuyor. Gardıroplar, makyaj masaları, komodinler ve şifonyerler; doğru
              malzeme, temiz işçilik ve uzun ömürlü kullanım odağıyla hazırlanıyor.
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
              Atölyemiz Ankara Siteler'de, Güneşevler Eğribucak Sokak'ta. Ürünlerimiz, fiyatlar ve
              teslimat hakkında bilgi almak için bizi arayabilir ya da WhatsApp'tan yazabilirsiniz.
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
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <span>Çalışma saatleri</span>
                  <p>{iletisim.calismaSaatleri}</p>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="iletisim__harita" gecikme={150}>
            <iframe
              title="Pako Dizayn atölye konumu"
              src={iletisim.haritaEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
