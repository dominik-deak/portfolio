import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <span className="text-cyan-400">&lt;/&gt;</span>
            <span className="text-white">Portfolio</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
