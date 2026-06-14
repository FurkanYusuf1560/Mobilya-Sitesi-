import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo";
import "./Katalog.css";

const katalogYolu = "/katalog/sncevik.pdf";

function Katalog() {
  return (
    <main className="catalog-page">
      <Seo
        title="Dijital Dolap Kataloğu | Pako Dizayn"
        description="Pako Dizayn dolap modellerini dijital katalog üzerinden inceleyin veya PDF olarak indirin."
        path="/katalog"
      />

      <section className="catalog-intro">
        <div>
          <span className="catalog-intro__kicker">
            <FontAwesomeIcon icon={faFilePdf} />
            Dijital katalog
          </span>
          <h1>Dolap modellerimizi tek katalogda inceleyin.</h1>
          <p>
            Tasarım ve uygulama örneklerimizi sayfa sayfa görüntüleyebilir, kataloğu yeni sekmede
            açabilir veya cihazınıza PDF olarak indirebilirsiniz.
          </p>
        </div>

        <div className="catalog-actions">
          <a
            className="catalog-button catalog-button--primary"
            href={katalogYolu}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Yeni sekmede aç
          </a>
          <a className="catalog-button catalog-button--secondary" href={katalogYolu} download>
            <FontAwesomeIcon icon={faDownload} />
            PDF indir
          </a>
        </div>
      </section>

      <section className="catalog-viewer" aria-label="Pako Dizayn dolap kataloğu">
        <object data={katalogYolu} type="application/pdf">
          <div className="catalog-viewer__fallback">
            <FontAwesomeIcon icon={faFilePdf} />
            <p>Tarayıcınız PDF önizlemesini desteklemiyor.</p>
            <a href={katalogYolu} target="_blank" rel="noopener noreferrer">
              Kataloğu aç
            </a>
          </div>
        </object>
      </section>
    </main>
  );
}

export default Katalog;
