import type { IconType } from "react-icons";
import { AiOutlineTool } from "react-icons/ai";
import { BsDatabase, BsPeople } from "react-icons/bs";
import { FaCode, FaServer } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdDesignServices, MdOutlineAutoGraph } from "react-icons/md";
import { VscBeaker } from "react-icons/vsc";
import skillsData from "@/data/skills.json";

const iconMap: Record<string, IconType> = {
  "programming-languages": FaCode,
  frontend: MdDesignServices,
  backend: FaServer,
  database: BsDatabase,
  testing: VscBeaker,
  "devops-and-tools": AiOutlineTool,
  ai: GiBrain,
  methodologies: MdOutlineAutoGraph,
  "soft-skills": BsPeople,
};

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.categories.map((category) => {
            const Icon = iconMap[category.id];
            return (
              <div
                key={category.id}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="text-2xl text-cyan-400" />}
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
