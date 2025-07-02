import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "20px",
        transition: "all 0.3s ease",
        backgroundColor: "transparent",      // her zaman şeffaf
        backdropFilter: "none",              // istersen blur ekleyebilirsin: "blur(8px)"
        boxShadow: "none",
      }}
    >
      <Link to="/">AnaSayfa</Link>
      <Link to="/dolap">Dolap</Link>
      <Link to="/komodin">Komodin</Link>
      <Link to="/sifonyer">Şifonyer</Link>
      
    </header>
  );
}

export default Header;
