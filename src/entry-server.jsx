// Build sırasında sayfanın HTML'ini üretmek için kullanılır (scripts/prerender.js).
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export { urunler } from "./data/urunler.js";

export function render() {
  return renderToString(<App />);
}
