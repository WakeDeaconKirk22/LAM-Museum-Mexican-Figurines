// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Regional from "./pages/Regional";
import Contact from "./pages/Contact";
import Classifier from "./pages/Classifier";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            {/* Home route → Classifier */}
            <Route path="/" element={<Classifier />} />

            <Route path="/about" element={<About />} />
            <Route path="/regional" element={<Regional />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
