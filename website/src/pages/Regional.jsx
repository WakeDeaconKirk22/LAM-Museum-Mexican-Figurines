import React from "react";
import { Link } from "react-router-dom";

export default function Regional() {
  const regions = [
    {
      name: "Colima",
      period: "Western Mexico (c. 300 BCE – 300 CE)",
      description: "The Colima culture thrived in Western Mexico. Well-known for its lifelike ceramic figurines, the Colima specialized in depicting animals, humans, and scenes from everyday life. Artifacts were often placed in tombs to aid the deceased in the afterlife. Colima figurines are distinguishable by their simple features and minimal adornments.",
      characteristics: "Colima figurines were typically hand-crafted. The eyes of these figurines are usually slits or lines in the clay of the figurine’s face. Sometimes, the eyes are large circles. Noses are either in small, rounded “O” shape or a triangle shape. The mouths of Colima figurines are small and often have simple smiles. Their adornments are minimal.",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
        </svg>
      ),
      color: "emerald",
    },
    {
      name: "Nayarit",
      period: "Western Mexico (c. 200 BCE – 300 CE)",
      description: "The Nayarit culture was found alongside the pacific coast of Western Mexico. Their figurines are extravagant, boasting many accessories, for which they are recognizable. Figurines also reflect communal life and social rituals, showing a deep connection to the spiritual and social worlds.",
      characteristics: "Nayarit figurines were created using a mix of hand-crafted and molded techniques. The eyes of figurines are generally in an almond or slit shape, while the nose is straight or hooked. Nayarit figurine mouths are generally small with neutral expressions. They often have numerous adornments, like large earrings or plug styles, necklaces, and headdresses. Sometimes they have hats or headgear.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" />
        </svg>
      ),
      color: "indigo",
    },
    {
      name: "Chipicuaro",
      period: "Northwest Central Mexico (c. 500 BCE – 300 CE)",
      description: "The Chupicuaro culture is one of Mesoamerica’s earliest ceramic traditions, originating in the Bajio region of central Mexico. They are typically found in burial places and hold ritual significance. The figurines’ distinctive appearances are marked by highly stylized human forms and detailed adornments.",
      characteristics: "Chipicuaro figurines were typically hand-crafted using clay. The figurine’s eyes are usually small slits or dot-shaped impressions, often with minimal detailing. Their noses are small, simple, and often triangular or left undefined, while Chipicuaro figurine mouths are small and usually closed or downturned. The adornments these figurines have may include earrings, necklaces, and detailed hairstyles or headdresses.",
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
      color: "pink",
    },
  ];

  return (
    <div className="space-y-24 px-6 md:px-12 lg:px-24 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold">Regional Information</h1>
        <p className="text-stone-400 max-w-2xl mx-auto mt-2">
          Explore the main Mesoamerican regions and their unique ceramic figurine styles.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {regions.map((region) => (
          <div
            key={region.name}
            className="card hover:shadow-xl transition p-6 rounded-2xl border border-stone-800/20 bg-gradient-to-br from-stone-900/50 to-stone-950/40"
          >
            {/* ICON BUBBLE */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 
                            bg-${region.color}-500/10 border border-${region.color}-500/20`}>
              {region.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-serif text-2xl font-bold mb-1 text-center">{region.name}</h3>
            <p className="italic text-stone-400 text-center mb-2">{region.period}</p>

            {/* DESCRIPTION */}
            <p className="text-stone-300 mb-2">{region.description}</p>
            <h4 className="font-semibold mb-1 mt-2">Characteristics</h4>
            <p className="text-stone-300">{region.characteristics}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="text-emerald-500 hover:text-emerald-400 underline font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
