import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Regional from "./pages/Regional";
import Contact from "./pages/Contact";
import Classifier from "./pages/Classifier";
import Report from "./pages/Report";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-stone-950 to-stone-900 text-neutral-100 selection:bg-amber-600 selection:text-stone-900">
        <Navbar />

        {/* Grain overlay */}
        <div className="pointer-events-none fixed inset-0 opacity-5 mix-blend-overlay bg-[url('/grain.png')]"></div>

        <main className="max-w-6xl mx-auto px-4 py-10 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classifier" element={<Classifier />} />
            <Route path="/about" element={<About />} />
            <Route path="/regional" element={<Regional />} />
            <Route path="/report" element={<Report />} />   {/* <-- fixed route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="w-full mt-16 border-t border-stone-800/40 bg-stone-900">
          <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-sm text-stone-400">
              LAM Museum — Artifact Classifier
            </div>
            <div className="text-sm text-stone-500">
              Built for Research & Education · <span className="font-medium text-amber-400">Non-Commercial</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
