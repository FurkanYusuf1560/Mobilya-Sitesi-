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
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "transparent", // TAM ŞEFFAF
        boxShadow: "none",              // Gölge yok
        backdropFilter: "none",         // Bulanıklık yok
      }}
    >
      <nav style={{ display: "flex", gap: "30px", fontSize: "18px" }}>
        <Link style={linkStyle} to="/">AnaSayfa</Link>
        <Link style={linkStyle} to="/dolap">Dolap</Link>
        <Link style={linkStyle} to="/komodin">Komodin</Link>
        <Link style={linkStyle} to="/sifonyer">Şifonyer</Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#000", // Gerekirse #fff yapabilirsin
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s",
};

export default Header;
