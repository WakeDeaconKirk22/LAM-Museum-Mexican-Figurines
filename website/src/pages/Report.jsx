export default function Report() {
    return (
      <div className="min-h-screen px-6 md:px-12 lg:px-24 py-16 space-y-16">
        {/* HEADER */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold text-stone-100">
            Classification Report
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            View detailed analysis, confidence scores, and cultural attribution for your uploaded data.
          </p>
        </header>
  
        {/* SUMMARY CARDS */}
        <section className="grid md:grid-cols-3 gap-6">
          {[{
            label: "Total Records",
            value: "—",
          },{
            label: "Top Predicted Culture",
            value: "—",
          },{
            label: "Average Confidence",
            value: "—",
          }].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 shadow">
              <div className="text-3xl font-serif font-bold text-amber-500">{item.value}</div>
              <div className="text-stone-400 text-sm mt-2">{item.label}</div>
            </div>
          ))}
        </section>
  
        {/* RESULTS TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-stone-100">Detailed Results</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/50">
            <table className="w-full text-left text-stone-300 text-sm">
              <thead className="bg-stone-900/80">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Predicted Culture</th>
                  <th className="px-4 py-3">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {/* Placeholder rows */}
                <tr className="border-t border-stone-800/70">
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        {/* EXPORT BUTTONS */}
        <section className="pt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-amber-500 text-stone-900 font-semibold rounded-xl hover:bg-amber-600 transition">
            Download CSV
          </button>
          <button className="px-6 py-3 bg-stone-800/60 border border-stone-700 text-stone-200 font-semibold rounded-xl hover:bg-stone-700/50 transition">
            Export as PDF
          </button>
        </section>
      </div>
    );
  }