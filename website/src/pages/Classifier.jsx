import React, { useState } from "react";
import { Link } from "react-router-dom";

// image imports unchanged...
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

const chupicuaroImages = Object.entries(chupicuaroImports).map(([path, url]) => ({ id: path, url, region: "Chupicuaro" }));
const colimaImages = Object.entries(colimaImports).map(([path, url]) => ({ id: path, url, region: "Colima" }));
const nayaritImages = Object.entries(nayaritImports).map(([path, url]) => ({ id: path, url, region: "Nayarit" }));

const allImages = [...chupicuaroImages, ...colimaImages, ...nayaritImages];

function getRandomImage() {
  if (allImages.length === 0) return null;
  const idx = Math.floor(Math.random() * allImages.length);
  return allImages[idx];
}

export default function Classifier() {
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
      traits: ["Earrings", "Necklace(s)", "Headdress", "Hats/headgear", "Detailed hairstyles"],
    },
    {
      name: "Craft",
      traits: ["Hand-crafted", "Mold-crafted"],
    },
  ];

  const allTraits = traitSections.flatMap((s) => s.traits);
  const [values, setValues] = useState(Array(allTraits.length).fill(null));

  function updateValue(index, val) {
    const updated = [...values];
    updated[index] = val;
    setValues(updated);
  }

  const [currentImage, setCurrentImage] = useState(() => getRandomImage());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const resetAnswers = () => setValues(Array(allTraits.length).fill(null));

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
    setError("");
    setSuccess("");

    if (!currentImage) {
      setError("No image loaded.");
      alert("No image loaded.");
      return;
    }

    if (values.some((v) => v === null)) {
      const msg = "You must answer all the questions before submitting.";
      setError(msg);
      alert(msg);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/save-labels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageId: currentImage.id, region: currentImage.region, vector: values }),
      });

      if (!res.ok) throw new Error("Failed to save");

      setSuccess("Response saved. Loading a new image...");
      alert("Labels saved! Loading a new image.");
      setCurrentImage(getRandomImage());
      resetAnswers();
    } catch (err) {
      console.error(err);
      const msg = "Could not save your response. Is the label server running on port 5000?";
      setError(msg);
      alert(msg);
    } finally {
      setSubmitting(false);
    }
  };

  let traitCounter = 0;

  return (
    <div className="min-h-[80vh] flex flex-col items-center">
      <div className="w-full max-w-6xl bg-stone-900 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Artifact Classifier</h1>

        <hr className="border-t border-stone-600 w-full max-w-2xl my-6" />

        {error && <div className="text-center text-red-400 mb-4">{error}</div>}
        {success && <div className="text-center text-emerald-400 mb-4">{success}</div>}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - image */}
          <div className="lg:w-2/5 w-full flex flex-col items-center">
            <div className="w-full rounded-xl overflow-hidden bg-black">
              {currentImage ? (
                <img src={currentImage.url} alt={`${currentImage.region} figurine`} className="w-full h-[360px] object-contain" />
              ) : (
                <div className="p-8 text-center text-neutral-400">No images found in datasets.</div>
              )}
            </div>

            {currentImage && (
              <p className="mt-3 text-sm text-neutral-400 text-center break-all">
                Region: <span className="font-semibold text-stone-100">{currentImage.region}</span>
                <br />
                <span className="text-xs">{currentImage.id}</span>
              </p>
            )}

            <div className="mt-4 w-full items-center gap-6">
              <button onClick={handleNewRandomImage} disabled={submitting} className="px-4 py-2 rounded-lg border border-neutral-600 bg-amber-500 text-stone-900 font-semibold hover:scale-105 transition disabled:opacity-60">
                New Random Image
              </button>

              <button onClick={handleSubmit} disabled={submitting || !currentImage} className="px-4 py-2 rounded-lg border border-neutral-600 bg-amber-500 text-stone-900 font-semibold hover:scale-105 transition disabled:opacity-60">
                {submitting ? "Submitting..." : "Submit Labels"}
              </button>
            </div>
          </div>

          {/* Right - traits */}
          <div className="lg:flex-1 w-full">
            <div className="space-y-6">
              {traitSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h2 className="text-lg font-semibold text-center">{section.name}</h2>

                  <div className="grid gap-3">
                    {section.traits.map((trait) => {
                      const i = traitCounter++;
                      return (
                        <div key={i} className="flex items-center justify-center p-2 rounded-lg">
                          <div className="w-1/5 font-medium text-sm text-left">{trait}</div>
                          <div className="flex items-center gap-4">
                            <label className="flex items-center space-x-2">
                              <input className="input-radio" type="radio" name={`trait-${i}`} checked={values[i] === 1} onChange={() => updateValue(i, 1)} />
                              <span className="text-sm">Yes</span>
                            </label>

                            <label className="flex items-center space-x-2">
                              <input className="input-radio" type="radio" name={`trait-${i}`} checked={values[i] === 0} onChange={() => updateValue(i, 0)} />
                              <span className="text-sm">No</span>
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="text-center">
                <h3 className="font-semibold">Output Vector</h3>
                <div className="mt-2 p-3 rounded-lg text-sm break-all">[{values.map((v) => (v === null ? "_" : v)).join(", ")}]</div>
              </div>

              <div className="text-center">
                <Link to="/" className="text-amber-400 hover:text-amber-300 underline">← Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
