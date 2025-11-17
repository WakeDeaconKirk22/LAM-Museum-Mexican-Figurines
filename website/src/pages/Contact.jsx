import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-4">Project Manager Contact</h1>
      <p className="max-w-xl text-center mb-4">
        Have questions about the figurines, the dataset, or the model?
        Send us a message and we&apos;ll get back to you.
        
    <div studentName="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 studentName="text-1xl font-bold mb-4">Contact Us</h1>
      <p studentName="max-w-xl text-left mb-4">
        Project Manager: Caroline Wales
        Email: walecc22@wfu.edu

    <div LAMContact="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 LAMContact="text-1xl font-bold mb-4">Project Manager Contact</h1>
      <p LAMContact="max-w-xl text-right mb-4">
        LAM Museum Representative: Mackenzie Lael
        Email: mackenzielael8@gmail.com

      </p>
      <Link
        to="/"
        className="mt-6 text-emerald-500 hover:text-emerald-400 underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
