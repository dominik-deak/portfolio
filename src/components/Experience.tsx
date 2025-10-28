import Link from "next/link";
import { MdOpenInNew, MdWork } from "react-icons/md";
import experienceData from "@/data/experience.json";

const Experience = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <MdWork className="w-8 h-8 text-cyan-400" />
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
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                      {/* TODO: fix vertical alignment of the icon */}
                      <MdOpenInNew className="inline-block ml-2" />
                    </Link>{" "}
                    <span className="text-slate-500">•</span> {exp.period}
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
