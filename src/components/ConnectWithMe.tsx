import { FaGithub, FaLinkedin } from "react-icons/fa";

const ConnectWithMe = () => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Other Ways to Connect With Me
      </h2>

      <div className="space-y-4">
        <a
          href="https://www.linkedin.com/in/dominik-deak/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
        >
          <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
            <p className="font-medium">linkedin.com/in/dominik-deak</p>
          </div>
        </a>

        <a
          href="https://github.com/dominik-deak"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
        >
          <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
            <FaGithub className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">GitHub</p>
            <p className="font-medium">github.com/dominik-deak</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
