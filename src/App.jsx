// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (from src/pages)
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <Router basename="/ilham"> {/* Needed for GitHub Pages */}
      <Header /> {/* Optional: place nav here so it appears on every page */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        {/* Optional 404 fallback */}
        <Route path="*" element={<div className="p-4 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
