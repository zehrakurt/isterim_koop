import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const academyRef = useRef<HTMLDivElement>(null);

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setAcademyOpen(false);
  }, [location]);

  // Dışarı tıklandığında dropdown'ları kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (academyRef.current && !academyRef.current.contains(event.target as Node)) {
        setAcademyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    setAcademyOpen(false);
  };

  const toggleAcademy = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAcademyOpen(!academyOpen);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Kooperatif Logo" />
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

        <div className="dropdown" ref={dropdownRef}>
          <span 
            className={`dropdown-title ${location.pathname.startsWith("/about-us") || location.pathname.startsWith("/misyonumuz") || location.pathname.startsWith("/vizyonumuz") ? "active" : ""}`}
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

        <div className="dropdown" ref={academyRef}>
          <span 
            className={`dropdown-title ${location.pathname.startsWith("/akademi") ? "active" : ""}`}
            onClick={toggleAcademy}
          >
            Akademi <span className="arrow">▾</span>
          </span>
          <div className={`dropdown-menu ${academyOpen ? "open" : ""}`}>
            <Link 
              to="/akademi-1" 
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/akademi-1" ? "active" : ""}
            >
              Akademi 1
            </Link>
            <Link 
              to="/akademi-2" 
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/akademi-2" ? "active" : ""}
            >
              Akademi 2
            </Link>
          </div>
        </div>
        
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

      {/* 🔥 DÜZELTİLMİŞ HAMBURGER */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen(prev => !prev);   // Menü aç/kapa çalışsın
          setDropdownOpen(false);     // Dropdown kapanır
          setAcademyOpen(false);      // Academy kapanır
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
