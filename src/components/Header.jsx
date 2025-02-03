import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/finq.png";
import { services } from "./Services";

const Header = () => {
  
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
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

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container nav">
        <Link to="/" className="logo-link">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" />
        </Link>
        <div className={`nav-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index} className={link.dropdown ? "services-dropdown" : ""}>
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.path} // Make the main "Services" link clickable for navigation
                      className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                      onClick={toggleServices}
                    >
                      {link.name}
                    </Link>
                    <div className={`services-dropdown-content ${isServicesOpen ? "open" : ""}`}>
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}

              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
