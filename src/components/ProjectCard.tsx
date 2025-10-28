import Link from "next/link";
import { FiCode } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  codeUrl: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded border border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {project.codeUrl.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 bg-slate-700/50 text-cyan-400 font-medium rounded border border-slate-600 hover:bg-slate-600 hover:border-cyan-400/50 transition-colors group"
            >
              <span className="flex items-center gap-2">
                <FiCode className="w-4 h-4" />
                {link.label}
              </span>
              <MdOpenInNew className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
