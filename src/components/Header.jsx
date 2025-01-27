import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container nav">
        <Link to="/" className="logo-link">
          <img src="/placeholder.svg?height=40&width=120" alt="TechNova Logo" className="logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
