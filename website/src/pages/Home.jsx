import DigitCsvClassifier from "../DigitCsvClassifier";

export default function Home() {
  return (
    <div className="space-y-24 px-6 md:px-12 lg:px-24">

      {/* HOW IT WORKS */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="section-heading">How It Works</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Our AI-powered classifier uses advanced machine learning to identify cultural origins and characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Upload CSV",
              desc: "Upload your CSV file containing digit data for classification by our trained model",
              iconBubble: (
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
                </svg>
              ),
              inlineIcon: (
                <svg className="w-5 h-5 text-amber-400 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
                </svg>
              )
            },

            {
              title: "AI Analysis",
              desc: "Our advanced machine learning model analyzes patterns and characteristics to determine origins",
              iconBubble: (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M12 6v12m6-6H6m12 0a6 6 0 10-12 0 6 6 0 0012 0z" />
                </svg>
              ),
              inlineIcon: (
                <svg className="w-5 h-5 text-amber-400 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M12 6v12m6-6H6m12 0a6 6 0 10-12 0 6 6 0 0012 0z" />
                </svg>
              )
            },

            {
              title: "Get Results",
              desc: "Receive detailed classifications with confidence scores and cultural attribution",
              iconBubble: (
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              inlineIcon: (
                <svg className="w-5 h-5 text-amber-400 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
          ].map((c) => (
            <div key={c.title} className="card hover:shadow-xl transition p-6">

              {/* ICON BUBBLE */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl 
                              bg-amber-500/10 border border-amber-500/20 mb-4">
                {/* FIXED-SIZE WRAPPER (Option 2) */}
                <div className="w-6 h-6 flex items-center justify-center">
                  {c.iconBubble}
                </div>
              </div>

              {/* INLINE TITLE WITH ICON */}
              <h3 className="font-serif text-2xl font-bold mb-2 flex items-center justify-center">
                {c.inlineIcon}
                {c.title}
              </h3>

              <p className="text-stone-400 text-center">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* TRY THE CLASSIFIER */}
      <section className="card">
        <div className="text-center mb-6">
          <h2 className="section-heading">Try the Classifier</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Upload a CSV file of digit data and have it classified by our trained model.
          </p>
        </div>

        <div className="bg-gradient-to-br from-stone-900/50 to-stone-950/40 
                        border border-stone-800/40 rounded-2xl p-8 shadow-inner">
          <DigitCsvClassifier />
        </div>
      </section>
    </div>
  );
}
