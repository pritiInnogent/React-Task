import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://i.pinimg.com/originals/a3/2b/99/a32b996da40f37f58d1e3e669c994ba1.jpg" alt="PrettyFinds Logo" className="logo-img" />
          <span>PrettyFinds</span>
        </Link>
      </div>

      <nav className="nav-icons">
        <i className="bi bi-cart3 icon"></i>
        <i className="bi bi-bell icon"></i>
        <i className="bi bi-person-circle icon"></i>
      </nav>
    </header>
  );
}

export default Header;

