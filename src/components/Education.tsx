import educationData from "@/data/education.json";

const Education = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-cyan-400 mb-4">
                {edu.institution} <span className="text-slate-500">•</span>{" "}
                {edu.period}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
