import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Classifier() {
  // List your characteristics here:
  const characteristics = [
    "Slit or almond-shaped eyes",
    "Large circular eyes",
    "Small rounded O-shaped nose",
    "Triangular nose",
    "Minimal adornments",
    "Elaborate adornments",
    "Hand-crafted appearance",
    "Molded appearance",
    "Headdress or hat"
  ];

  // Store yes/no selections (null = unanswered)
  const [answers, setAnswers] = useState(
    Array(characteristics.length).fill(null)
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <h1 className="text-3xl font-bold mb-6">Artifact Classifier</h1>

      <div className="max-w-2xl w-full p-6 border rounded-lg shadow-md">
        <p className="mb-4">
          Select <strong>Yes</strong> or <strong>No</strong> for each characteristic:
        </p>

        <div className="space-y-6">
          {characteristics.map((char, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-medium mb-2">{char}</span>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name={`char-${index}`}
                    value="yes"
                    checked={answers[index] === "yes"}
                    onChange={() => handleChange(index, "yes")}
                  />
                  <span>Yes</span>
                </label>

                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name={`char-${index}`}
                    value="no"
                    checked={answers[index] === "no"}
                    onChange={() => handleChange(index, "no")}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-2xl w-full p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Output Vector</h2>
        <p className="text-sm italic mb-2">
          This vector updates as you click:
        </p>

        <pre className="bg-gray-100 p-3 rounded">
{JSON.stringify(answers)}
        </pre>
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

