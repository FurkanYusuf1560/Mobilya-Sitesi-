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
        flexWrap: "wrap",
        justifyContent: "center", // ORTADA hizalı
        alignItems: "center",
        padding: "10px 20px", // Daha dar padding
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "none",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          fontSize: "16px",
          justifyContent: "center",
        }}
      >
        <Link style={linkStyle} to="/">AnaSayfa</Link>
        <Link style={linkStyle} to="/dolap">Dolap</Link>
        <Link style={linkStyle} to="/komodin">Komodin</Link>
        <Link style={linkStyle} to="/sifonyer">Şifonyer</Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  transition: "color 0.3s",
};

export default Header;
