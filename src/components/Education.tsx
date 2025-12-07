import Link from "next/link";
import { MdOpenInNew, MdSchool } from "react-icons/md";
import educationData from "@/data/education.json";

const Education = () => {
  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <MdSchool className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">
              {educationData.degree}
            </h3>
            <p className="text-cyan-400 mb-4">
              <Link
                href={educationData.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {educationData.institution}
                {/* TODO: fix vertical alignment of the icon */}
                <MdOpenInNew className="inline-block mx-1" />
              </Link>
              <span className="text-slate-500">•</span> {educationData.period}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {educationData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
