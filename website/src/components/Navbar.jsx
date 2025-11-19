import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 py-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-center space-x-6">
        <Link
          to="/"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white"
        >
          About
        </Link>

        <Link
          to="/regional"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white"
        >
          Regional Info
        </Link>

        <Link
          to="/contact"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
