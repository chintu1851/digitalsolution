import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Solutions from "./components/Solutions"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import './App.css'
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
