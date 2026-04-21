import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/">
          <span className="site-header__eyebrow">Ankara el işçiliği</span>
          <span className="site-header__title">Pako Dizayn</span>
        </Link>
        <nav className="site-header__nav">
          <Link to="/">Anasayfa</Link>
          <Link to="/dolap">Dolap</Link>
          <Link to="/komodin">Komodin</Link>
          <Link to="/sifonyer">Şifonyer</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
