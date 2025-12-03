import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>

      <p className="max-w-xl text-center mb-6">
        Have questions about the figurines, the dataset, or the model?
        Send us a message and we&apos;ll get back to you.
      </p>

      <hr className="border-t border-stone-600 w-full max-w-2xl my-6" />

      {/* Project Manager card – same style as Colima/Nayarit/Chipicuaro */}
      <div className="max-w-2xl mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          Project Manager: Caroline Wales
        </p>
        <p className="mb-2">
          Email: walecc22@wfu.edu
        </p>
      </div>

      {/* LAM Museum rep card – same layout style */}
      <div className="max-w-2xl mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-2">LAM Museum Contact</h2>
        <p className="mb-2">
          LAM Museum Representative: Mackenzie Lael
        </p>
        <p className="mb-2">
          Email: mackenzielael8@gmail.com
        </p>
      </div>
      
      <Link
        to="/"
        className="mt-6 text-emerald-500 hover:text-emerald-400 underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
