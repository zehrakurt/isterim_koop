import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logoImage} alt="Kooperatif Logo" />
        </a>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Anasayfa</a>

        <div className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span className="dropdown-title">Hakkımızda ▾</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/about-us">Biz Kimiz</a>
              <a href="/misyonumuz">Misyonumuz</a>
              <a href="/vizyonumuz">Vizyonumuz</a>
            </div>
          )}
        </div>

        <div className="dropdown" onClick={() => setAcademyOpen(!academyOpen)}>
          <span className="dropdown-title">Akademi ▾</span>
          {academyOpen && (
            <div className="dropdown-menu">
              <a href="/akademi-1">Akademi 1</a>
              <a href="/akademi-2">Akademi 2</a>
            </div>
          )}
        </div>
        <a href="/bizden-haberler">Bizden Haberler</a>
        <a href="/iletisim">İletişim</a>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
