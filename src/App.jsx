import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButon from "./components/WhatsappButon";
import Home from "./pages/Home";
import KategoriSayfasi from "./pages/KategoriSayfasi";
import { sayfaBul } from "./data/sayfalar";

// yol: sayfanın adresi ("/", "/gardirop" ...). Bilinmeyen adreslerde anasayfa gösterilir.
function App({ yol }) {
  const sayfa = sayfaBul(yol);

  return (
    <>
      <Header />
      {sayfa ? <KategoriSayfasi sayfa={sayfa} /> : <Home />}
      <Footer />
      <WhatsappButon />
    </>
  );
}

export default App;
