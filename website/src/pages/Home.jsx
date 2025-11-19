import React from "react";
import DigitCsvClassifier from "../DigitCsvClassifier";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex justify-center px-4 py-12">
      {/* Centered, max-width container so there are margins on the sides */}
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-neutral-900">
          Digit CSV Classifier
        </h1>

        <p className="text-center mb-8 text-neutral-700">
          HELLOThis tool lets you upload a CSV file of digit data and have it classified
          by our trained model. Use it to test predictions, explore model behavior,
          and experiment with different inputs.
        </p>

        {/* Card around the classifier */}
        <div className="w-full rounded-lg border border-neutral-300 shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold mb-3 text-neutral-900">
            Upload a test CSV file
          </h2>
          <p className="text-sm mb-4 text-neutral-700">
            Choose a CSV file in the expected format, then submit it to see the
            model&apos;s predictions.
          </p>

          {/* Slight top margin, but not a huge gap */}
          <div className="mt-2">
            <DigitCsvClassifier />
          </div>
        </div>
      </div>
    </div>
  );
}
