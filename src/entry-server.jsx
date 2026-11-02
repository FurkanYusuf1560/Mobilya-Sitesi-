// Build sırasında sayfaların HTML'ini üretmek için kullanılır (scripts/prerender.js).
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export { urunler } from "./data/urunler.js";
export { sayfalar, sayfaUrunleri } from "./data/sayfalar.js";
export { iletisim } from "./data/site.js";

export function render(yol) {
  return renderToString(<App yol={yol} />);
}
