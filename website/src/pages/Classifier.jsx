import React, { useState } from "react";

export default function Classifier() {
  const traits = [
    "Slit eyes",
    "Round eyes",
    "Triangle nose",
    "Hooked nose",
    "Simple smile",
    "Headdress",
    "Necklace",
  ];

  const [values, setValues] = useState(
    Array(traits.length).fill(null) // null = unanswered
  );

  function updateValue(index, val) {
    const updated = [...values];
    updated[index] = val;
    setValues(updated);
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Artifact Classifier</h1>

        <div className="space-y-4">
          {traits.map((trait, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-neutral-800 p-4 rounded-lg"
            >
              <span>{trait}</span>

              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name={`trait-${i}`}
                    onChange={() => updateValue(i, 1)}
                  />{" "}
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name={`trait-${i}`}
                    onChange={() => updateValue(i, 0)}
                  />{" "}
                  No
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Output vector */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Output Vector</h2>
          <div className="bg-neutral-800 p-4 rounded-lg">
            [{values.map(v => (v === null ? "_" : v)).join(", ")}]
          </div>
        </div>
      </div>
    </div>
  );
}
