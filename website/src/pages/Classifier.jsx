import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Classifier() {
  const traits = [
    "Hand-crafted",
    "Mold-crafted",
    "Small eyes",
    "Large eyes",
    "Regular-sized eyes",
    "Slit eyes",
    "Line eyes",
    "Almond-shaped eyes",
    "Dot-shaped impression eyes",
    "Small nose",
    "Large nose",
    "Rounded 'O' shaped nose",
    "Triangle-shaped nose",
    "Straight nose",
    "Hooked nose",
    "Simple nose",
    "Undefined nose",
    "Small mouth",
    "Large mouth",
    "Simple smile mouth",
    "Neutral expression mouth",
    "Closed moouth",
    "Open mouth",
    "Downturned mouth",
    "Earrings",
    "Necklace(s)",
    "Headdress",
    "Hats/headgear",
    "Detailed hairstyles"
  ];

  const [values, setValues] = useState(Array(traits.length).fill(null));

  function updateValue(index, val) {
    const updated = [...values];
    updated[index] = val;
    setValues(updated);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-xl bg-neutral-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Artifact Classifier
        </h1>

        <div className="space-y-4">
          {traits.map((trait, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-center bg-neutral-800 p-4 rounded-lg space-x-6"
            >
              <span className="w-32 font-medium text-center">{trait}</span>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name={`trait-${i}`}
                    onChange={() => updateValue(i, 1)}
                  />
                  <span>Yes</span>
                </label>

                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name={`trait-${i}`}
                    onChange={() => updateValue(i, 0)}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Output vector */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Output Vector</h2>
          <div className="bg-neutral-800 p-4 rounded-lg">
            [{values.map((v) => (v === null ? "_" : v)).join(", ")}]
          </div>
        </div>

        {/* Back to home page*/}
        <Link
          to="/"
          className="mt-6 text-emerald-500 hover:text-emerald-400 underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
