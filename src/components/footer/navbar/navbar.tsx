import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/logo2.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // SAYFA DEĞİŞİNCE MENÜLERİ KAPAT
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // HAKKIMIZDA DROPDOWN KONTROLÜ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
     <div className="logo">
  <Link to="/">
    <img src={logo} alt="Logo" />
  </Link>
</div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={location.pathname === "/" ? "active" : ""}
        >
          Anasayfa
        </Link>

        {/* HAKKIMIZDA DROPDOWN — AYNI KALDI */}
        <div className="dropdown" ref={dropdownRef}>
          <span
            className={`dropdown-title ${
              location.pathname.startsWith("/about-us") ||
              location.pathname.startsWith("/misyonumuz") ||
              location.pathname.startsWith("/vizyonumuz")
                ? "active"
                : ""
            }`}
            onClick={toggleDropdown}
          >
            Hakkımızda <span className="arrow">▾</span>
          </span>

          <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <Link
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/about-us" ? "active" : ""}
            >
              Biz Kimiz
            </Link>

            <Link
              to="/misyonumuz"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/misyonumuz" ? "active" : ""}
            >
              Misyonumuz
            </Link>

            <Link
              to="/vizyonumuz"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/vizyonumuz" ? "active" : ""}
            >
              Vizyonumuz
            </Link>
          </div>
        </div>

        {/* 🔥 ACADEMY DROPDOWN TAMAMEN KALDIRILDI — TEK LİNK */}
        <Link
          to="/akademi-1"
          onClick={() => setIsOpen(false)}
          className={location.pathname === "/akademi-1" ? "active" : ""}
        >
          Akademi
        </Link>

        <Link
          to="/bizden-haberler"
          onClick={() => setIsOpen(false)}
          className={location.pathname.startsWith("/bizden-haberler") ? "active" : ""}
        >
          Bizden Haberler
        </Link>

        <Link
          to="/iletisim"
          onClick={() => setIsOpen(false)}
          className={location.pathname === "/iletisim" ? "active" : ""}
        >
          İletişim
        </Link>
      </nav>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen(prev => !prev);
          setDropdownOpen(false);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
