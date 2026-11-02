import { useState } from "react";
import Reveal from "./Reveal";
import UrunKarti from "./UrunKarti";
import Lightbox from "./Lightbox";
import { kategoriler } from "../data/urunler";

function kategoriAdi(slug) {
  return kategoriler.find((kategori) => kategori.slug === slug)?.ad;
}

// Ürün kartları ve büyük fotoğraf görüntüleyici. Anasayfada ve kategori sayfalarında kullanılır.
function UrunIzgara({ urunler }) {
  const [acikUrun, setAcikUrun] = useState(null);
  const [sira, setSira] = useState(null);

  const fotografiAc = (urun, index) => {
    setAcikUrun(urun);
    setSira(index);
  };

  return (
    <>
      <div className="urun-izgara">
        {urunler.map((urun, index) => (
          <Reveal key={urun.ad} gecikme={(index % 3) * 100}>
            <UrunKarti
              urun={urun}
              kategoriAd={kategoriAdi(urun.kategori)}
              onAc={(fotoIndex) => fotografiAc(urun, fotoIndex)}
            />
          </Reveal>
        ))}
      </div>
      {acikUrun ? (
        <Lightbox
          gorseller={acikUrun.fotograflar.map((foto) => ({ src: foto.buyuk, alt: acikUrun.ad }))}
          sira={sira}
          setSira={setSira}
        />
      ) : null}
    </>
  );
}

export default UrunIzgara;
