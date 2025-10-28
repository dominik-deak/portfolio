import experienceData from "@/data/experience.json";

const Experience = () => {
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-700 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative pl-0 sm:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-2 h-2 bg-cyan-400 rounded-full -translate-x-[3px] hidden sm:block" />

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 mb-4">
                    {exp.company} <span className="text-slate-500">•</span>{" "}
                    {exp.period}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
