import React from "react";
import DigitCsvClassifier from "../DigitCsvClassifier";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      
      {/* width container */}
      <div className="w-full max-w-4xl flex flex-col items-center">

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100 text-center">
          Digit CSV Classifier
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-center mb-8 text-neutral-300">
          This tool lets you upload a CSV file of digit data and have it classified
          by our trained model. Use it to test predictions, explore model behavior,
          and experiment with different inputs.
        </p>

        {/* Card */}
        <div className="w-full p-6 border border-neutral-800 rounded-lg shadow-md bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-3 text-neutral-100">
            Upload a test CSV file
          </h2>
          <p className="text-sm mb-4 text-neutral-300">
            Choose a CSV file in the expected format, then submit it to see the
            model&apos;s predictions.
          </p>

          <DigitCsvClassifier />
        </div>

      </div>
    </div>
  );
}
