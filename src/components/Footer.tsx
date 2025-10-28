import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-semibold mb-4"
            >
              <span className="text-cyan-400">&lt;/&gt;</span>
              <span className="text-white">Portfolio</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Developer crafting exceptional digital experiences with
              modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="mailto:developer@example.com"
                className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400 hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <MdEmail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400 hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400 hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            2025 Portfolio. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with <span className="text-cyan-400">💙</span> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
