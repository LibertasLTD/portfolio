import { useState } from "react";
import type { Page } from "../types";

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface Props {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const mobileLinks: { page: Page; label: string }[] = [
  { page: "home", label: "_hello" },
  { page: "about", label: "_about-me" },
  { page: "projects", label: "_projects" },
  { page: "contact", label: "_contact-me" },
];

export default function Nav({ activePage, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  const isActive = (p: Page) => activePage === p;
  const activeStyle = { borderBottom: "2px solid #FEA55F", marginBottom: -1 } as const;

  const navBtn = (page: Page, label: string, alwaysShow = false) => (
    <button
      key={page}
      onClick={() => { onNavigate(page); setOpen(false); }}
      className={`${alwaysShow ? "flex" : "hidden sm:flex"} items-center px-4 sm:px-6 py-5 border-r border-[#1E2D3D] transition-colors ${isActive(page) ? "text-white" : "text-[#607B96] hover:text-white"}`}
      style={isActive(page) ? activeStyle : undefined}
    >
      {label}
    </button>
  );

  return (
    <nav className="relative z-20 shrink-0">
      <div className="flex items-stretch border-b border-[#1E2D3D] text-sm">
        {/* Logo */}
        <div className="px-4 sm:px-6 py-5 border-r border-[#1E2D3D] flex items-center min-w-0">
          <span className="text-[#607B96] truncate">kyle-allbright</span>
        </div>

        {/* _hello — always visible; _about-me and _projects sm+ */}
        {navBtn("home", "_hello", true)}
        {navBtn("about", "_about-me")}
        {navBtn("projects", "_projects")}

        {/* Spacer */}
        <div className="flex-1" />

        {/* _contact-me — md+ */}
        <button
          onClick={() => onNavigate("contact")}
          className="hidden md:flex items-center px-6 py-5 text-[#607B96] border-l border-[#1E2D3D] hover:text-white transition-colors"
        >
          _contact-me
        </button>

        {/* Hamburger — below sm */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          className="sm:hidden flex items-center justify-center w-[52px] text-[#607B96] hover:text-white transition-colors"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-nav-menu"
          className="sm:hidden absolute top-full left-0 right-0 bg-[#010C15] border-b border-[#1E2D3D] z-30"
        >
          {mobileLinks.map(({ page, label }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setOpen(false); }}
              className={`w-full text-left px-6 py-4 border-b border-[#1E2D3D] last:border-b-0 text-sm transition-colors ${isActive(page) ? "text-white" : "text-[#607B96] hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
