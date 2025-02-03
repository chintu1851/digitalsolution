import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/finq.png";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import MiscellaneousServicesTwoToneIcon from '@mui/icons-material/MiscellaneousServicesTwoTone';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: HomeTwoToneIcon },
    { name: "About", path: "/about", icon: InfoTwoToneIcon  },
    { name: "Services", path: "/services", icon: MiscellaneousServicesTwoToneIcon },
    { name: "Portfolio", path: "/portfolio", icon: PushPinTwoToneIcon },
    { name: "Contact", path: "/contact", icon: ContactPageTwoToneIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container nav">
        <Link to="/" className="logo-link">
          <img src={logo} alt="intuiqo.ai Logo" className="logo" />
        </Link>
        <div
          className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {location.pathname === link.path ? <span className="icon-class"><link.icon /></span> : <></>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
