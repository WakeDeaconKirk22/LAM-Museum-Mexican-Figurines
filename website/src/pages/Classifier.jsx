// src/pages/Classifier.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- IMPORT & LABEL ALL IMAGES ---
const chupicuaroImports = import.meta.glob(
  "../assets/Chupicuaro/*.{png,jpg,jpeg,JPG,JPEG}",
  { eager: true, as: "url" }
);
const colimaImports = import.meta.glob(
  "../assets/Colima/*.{png,jpg,jpeg,JPG,JPEG}",
  { eager: true, as: "url" }
);
const nayaritImports = import.meta.glob(
  "../assets/Nayarit/*.{png,jpg,jpeg,JPG,JPEG}",
  { eager: true, as: "url" }
);

// Use the file path key as a stable "image id"
const chupicuaroImages = Object.entries(chupicuaroImports).map(
  ([path, url]) => ({
    id: path,
    url,
    region: "Chupicuaro",
  })
);
const colimaImages = Object.entries(colimaImports).map(([path, url]) => ({
  id: path,
  url,
  region: "Colima",
}));
const nayaritImages = Object.entries(nayaritImports).map(([path, url]) => ({
  id: path,
  url,
  region: "Nayarit",
}));

const allImages = [
  ...chupicuaroImages,
  ...colimaImages,
  ...nayaritImages,
];

function getRandomImage() {
  if (allImages.length === 0) return null;
  const idx = Math.floor(Math.random() * allImages.length);
  return allImages[idx];
}

export default function Classifier() {
  // ------------------ TRAIT LOGIC (your traits) ------------------
  const traitSections = [
    {
      name: "Eyes",
      traits: [
        "Small eyes",
        "Large eyes",
        "Regular-sized eyes",
        "Slit eyes",
        "Line eyes",
        "Almond-shaped eyes",
        "Dot-shaped impression eyes",
      ],
    },
    {
      name: "Nose",
      traits: [
        "Small nose",
        "Large nose",
        "Rounded 'O' shaped nose",
        "Triangle-shaped nose",
        "Straight nose",
        "Hooked nose",
        "Simple nose",
        "Undefined nose",
      ],
    },
    {
      name: "Mouth",
      traits: [
        "Small mouth",
        "Large mouth",
        "Simple smile mouth",
        "Neutral expression mouth",
        "Closed mouth",
        "Open mouth",
        "Downturned mouth",
      ],
    },
    {
      name: "Adornments",
      traits: [
        "Earrings",
        "Necklace(s)",
        "Headdress",
        "Hats/headgear",
        "Detailed hairstyles",
      ],
    },
    {
      name: "Craft",
      traits: ["Hand-crafted", "Mold-crafted"],
    },
  ];

  const allTraits = traitSections.flatMap((section) => section.traits);
  const [values, setValues] = useState(Array(allTraits.length).fill(null));

  function updateValue(index, val) {
    const updated = [...values];
    updated[index] = val;
    setValues(updated);
  }

  // ------------------ IMAGE + SUBMIT STATE ------------------
  const [currentImage, setCurrentImage] = useState(() => getRandomImage());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const resetAnswers = () => {
    setValues(Array(allTraits.length).fill(null));
  };

  const handleNewRandomImage = () => {
    setError("");
    setSuccess("");
    const img = getRandomImage();
    if (img) {
      setCurrentImage(img);
      resetAnswers();
    }
  };

  const handleSubmit = async () => {
    console.log("Submit button clicked");
    setError("");
    setSuccess("");

    if (!currentImage) {
      setError("No image loaded.");
      alert("No image loaded.");
      return;
    }

    // Require all questions answered
    if (values.some((v) => v === null)) {
      const msg = "You must answer all the questions before submitting.";
      setError(msg);
      alert(msg); // hard-to-miss feedback
      return;
    }

    setSubmitting(true);
    console.log("Submitting labels for image:", currentImage.id);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/save-labels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: currentImage.id,
          region: currentImage.region,
          vector: values,
        }),
      });

      if (!res.ok) {
        console.error("Save failed with status", res.status);
        throw new Error("Failed to save");
      }

      setSuccess("Response saved. Loading a new image...");
      alert("Labels saved! Loading a new image.");
      const next = getRandomImage();
      setCurrentImage(next);
      resetAnswers();
    } catch (err) {
      console.error("Error during submission:", err);
      const msg =
        "Could not save your response. Is the label server running on port 5000?";
      setError(msg);
      alert(msg);
    } finally {
      setSubmitting(false);
    }
  };

  let traitCounter = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-6xl bg-neutral-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Artifact Classifier
        </h1>

        {/* Status messages */}
        {error && (
          <div className="mb-4 text-base text-red-400 text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-base text-emerald-400 text-center">
            {success}
          </div>
        )}

        {/* IMAGE LEFT, QUESTIONS RIGHT – PLAIN FLEXBOX */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          {/* LEFT: image + buttons */}
          <div style={{ flex: "0 0 40%", minWidth: "260px" }}>
            <div className="border border-neutral-700 rounded-xl overflow-hidden bg-black/40">
              {currentImage ? (
                <img
                  src={currentImage.url}
                  alt={`${currentImage.region} figurine`}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              ) : (
                <div className="p-8 text-center text-neutral-400">
                  No images found in datasets.
                </div>
              )}
            </div>

            {currentImage && (
              <p className="mt-2 text-sm text-neutral-400 text-center">
                Region:{" "}
                <span className="font-semibold">{currentImage.region}</span>
                <br />
                <span className="text-xs break-all">
                  ID: {currentImage.id}
                </span>
              </p>
            )}

            <div className="flex flex-col items-center mt-4 space-y-2">
              <button
                type="button"
                onClick={handleNewRandomImage}
                className="px-4 py-2 rounded-lg border border-neutral-600 hover:bg-neutral-800 transition"
                disabled={submitting}
              >
                New Random Image
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed transition"
                disabled={submitting || !currentImage}
              >
                {submitting ? "Submitting..." : "Submit Labels"}
              </button>
            </div>
          </div>

          {/* RIGHT: traits + output vector */}
          <div style={{ flex: "1 1 60%" }}>
            <div className="space-y-6">
              {traitSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h2 className="text-xl font-semibold text-center mb-1">
                    {section.name}
                  </h2>

                  {section.traits.map((trait) => {
                    const i = traitCounter++;
                    return (
                      <div
                        key={i}
                        className="flex flex-row items-center justify-between bg-neutral-800 p-3 rounded-lg gap-4"
                      >
                        <span className="w-40 font-medium text-left">
                          {trait}
                        </span>

                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`trait-${i}`}
                              checked={values[i] === 1}
                              onChange={() => updateValue(i, 1)}
                            />
                            <span>Yes</span>
                          </label>

                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`trait-${i}`}
                              checked={values[i] === 0}
                              onChange={() => updateValue(i, 0)}
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Output vector */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold mb-2">Output Vector</h2>
                <div className="bg-neutral-800 p-3 rounded-lg text-xs md:text-sm break-all">
                  [{values.map((v) => (v === null ? "_" : v)).join(", ")}]
                </div>
              </div>

              {/* Back link */}
              <div className="mt-4 text-center">
                <Link
                  to="/"
                  className="text-emerald-500 hover:text-emerald-400 underline"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
