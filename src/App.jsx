import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dolap from "./pages/Dolap";
import Komodin from "./pages/Komodin";
import Sifonyer from "./pages/Sifonyer";
import Katalog from "./pages/Katalog";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dolap" element={<Dolap />} />
        <Route path="/komodin" element={<Komodin />} />
        <Route path="/sifonyer" element={<Sifonyer />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </div>
  );
}

export default App;
