import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetails";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;