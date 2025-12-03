// NO LONGER IN USE

import DigitCsvClassifier from "../DigitCsvClassifier";

export default function Home() {
  const features = [
    {
      title: "Upload CSV",
      desc: "Upload your CSV file containing digit data for classification by our trained model",
      iconBubble: (
        <svg className="w-6 h-6 text-amber-400 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
            d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
        </svg>
      )
    },
    {
      title: "AI Analysis",
      desc: "Our advanced machine learning model analyzes patterns and characteristics to determine origins",
      iconBubble: (
        <svg className="w-6 h-6 text-amber-400 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
            d="M12 6v12m6-6H6m12 0a6 6 0 10-12 0 6 6 0 0012 0z" />
        </svg>
      )
    },
    {
      title: "Get Results",
      desc: "Receive detailed classifications with confidence scores and cultural attribution",
      iconBubble: (
        <svg className="w-6 h-6 text-amber-400 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-32 px-6 md:px-12 lg:px-24">

      {/* HOW IT WORKS */}
      <section className="space-y-16 animate-fade-in">
        <div className="text-center">
          <h2 className="section-heading text-4xl font-bold text-amber-400 mb-4 glow-text">
            How It Works
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Our AI-powered classifier uses advanced machine learning to identify cultural origins and characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((c) => (
            <div key={c.title} className="card card-glow hover-lift gradient-border p-8 text-center">

              <div className="icon-bubble mb-5">
                {c.iconBubble}
              </div>

              <h3 className="text-xl font-bold text-amber-300 mb-2 tracking-wide">
                {c.title}
              </h3>

              <p className="text-stone-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* TRY THE CLASSIFIER */}
      <section className="animate-fade-in-delay">
        <div className="text-center mb-10">
          <h2 className="section-heading text-3xl font-bold text-amber-400 glow-text">
            Try the Classifier
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Upload a CSV file of digit data and have it classified by our trained model.
          </p>
        </div>

        <div className="card card-glow gradient-border p-10 shadow-xl">
          <DigitCsvClassifier />
        </div>
      </section>
    </div>
  );
}
