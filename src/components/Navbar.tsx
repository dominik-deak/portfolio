"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <span className="text-cyan-400">&lt;/&gt;</span>
              <span className="text-white">Dominik Deak</span>
            </Link>
            <DesktopMenu />
            <HamburgerButton toggleMobileMenu={toggleMobileMenu} />
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex items-center gap-8">
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
  );
};

interface HamburgerButtonProps {
  toggleMobileMenu: () => void;
}

const HamburgerButton = ({ toggleMobileMenu }: HamburgerButtonProps) => {
  return (
    <button
      type="button"
      onClick={toggleMobileMenu}
      className="sm:hidden text-slate-300 hover:text-cyan-400 transition-colors"
      aria-label="Open menu"
    >
      <HiMenu className="w-6 h-6" />
    </button>
  );
};

export default Navbar;
