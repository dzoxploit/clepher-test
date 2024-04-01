"use client";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header>
      <img className="logo" src="./Logo.jpg" />
      <nav ref={navRef}>
        <a href="/#">Beranda</a>
        <a href="/#">Overview</a>
        <a href="/#">Documentation</a>
        <a href="/#">Tentang Kami</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
