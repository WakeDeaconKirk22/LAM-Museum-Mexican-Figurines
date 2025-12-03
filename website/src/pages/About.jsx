import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen px-6 py-28 flex flex-col items-center">

      {/* Ambient glowing background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b 
          from-amber-500/5 via-red-500/5 to-black 
          blur-[160px] opacity-40" 
        />
      </div>

      {/* Title */}
      <div className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 glow-text text-amber-300">
          About This Project
        </h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Understanding the story behind the artifacts.
        </p>
      </div>

      <hr className="border-t border-stone-600 w-full max-w-2xl my-6" />

      {/* Content Cards */}
      <div className="mt-20 max-w-3xl w-full space-y-12">

        <div className="backdrop-blur-xl bg-white/5 transition hover:bg-white/10">
          <h2 className="text-3xl font-light mb-4">Our Problem</h2>
          <p className="text-left text-stone-300 leading-relaxed">
            The LAM Museum at Wake Forest University holds 400+ clay human figurines lacking provenance 
            or detailed documentation. Manual classification is slow, expert-dependent, and subjective. 
            This project builds a modern assistive system so museum staff and students can rapidly and 
            consistently identify and manage the collection.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 transition hover:bg-white/10">
          <h2 className="text-3xl font-light mb-4">Our Goal</h2>
          <p className="text-left text-stone-300 leading-relaxed">
            Our aim is to enable efficient repatriation and curation without demanding additional cost 
            or staff time. We combine domain-informed trait labeling with machine learning to create 
            a powerful, accessible classification tool for both experts and learners.
          </p>
        </div>

        {/* Back link */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="text-amber-400 hover:text-amber-300 transition underline text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
