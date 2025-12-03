import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const contacts = [
    {
      title: "Project Manager",
      name: "Caroline Wales",
      email: "walecc22@wfu.edu",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.879 6.196M12 12v.01" />
        </svg>
      ),
      color: "emerald",
    },
    {
      title: "LAM Museum Representative",
      name: "Mackenzie Lael",
      email: "mackenzielael8@gmail.com",
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" />
        </svg>
      ),
      color: "amber",
    },
  ];

  return (
    <div className="space-y-24 px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center">
      
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Have questions about the figurines, the dataset, or the model? Send us a message and we&apos;ll get back to you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {contacts.map((contact) => (
          <div
            key={contact.email}
            className={`card hover:shadow-xl transition p-8 rounded-2xl border border-stone-800/20 bg-gradient-to-br from-stone-900/50 to-stone-950/40 text-center`}
          >
            {/* Icon Bubble */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 
                            bg-${contact.color}-500/10 border border-${contact.color}-500/20 mx-auto`}>
              {contact.icon}
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl font-bold mb-1">{contact.title}</h3>

            {/* Name & Email */}
            <p className="text-stone-300 mb-1">{contact.name}</p>
            <p className="text-stone-400">{contact.email}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="text-emerald-500 hover:text-emerald-400 underline text-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
