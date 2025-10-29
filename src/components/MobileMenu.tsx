"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Overlay isOpen={isOpen} onClose={onClose} />
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = ({ isOpen, onClose }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-800 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseButton onClose={onClose} />
      <NavigationLinks onClose={onClose} />
    </div>
  );
};

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <div className="flex justify-end p-4">
      <button
        type="button"
        onClick={onClose}
        className="text-slate-300 hover:text-cyan-400 transition-colors"
        aria-label="Close menu"
      >
        <HiX className="w-6 h-6" />
      </button>
    </div>
  );
};

interface NavigationLinksProps {
  onClose: () => void;
}

const NavigationLinks = ({ onClose }: NavigationLinksProps) => {
  return (
    <nav className="flex flex-col gap-6 px-6 py-4">
      <Link
        href="/"
        onClick={onClose}
        className="text-slate-300 hover:text-cyan-400 transition-colors text-lg"
      >
        Home
      </Link>
      <Link
        href="/projects"
        onClick={onClose}
        className="text-slate-300 hover:text-cyan-400 transition-colors text-lg"
      >
        Projects
      </Link>
      <Link
        href="/contact"
        onClick={onClose}
        className="text-slate-300 hover:text-cyan-400 transition-colors text-lg"
      >
        Contact
      </Link>
    </nav>
  );
};

export default MobileMenu;
