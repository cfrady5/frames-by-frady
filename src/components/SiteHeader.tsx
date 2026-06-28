"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FramesLogo } from "@/components/BrandLogo";

export { FramesLogo };

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-[#070B14]/60 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" onClick={() => setOpen(false)} className="transition-transform hover:scale-[1.03]">
          <FramesLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-underline px-4 py-2 text-sm font-medium text-[#9CA8B8] hover:text-white transition-colors rounded"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm">
            Get a Free Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#9CA8B8] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-[#070B14] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-[#9CA8B8] hover:text-white transition-colors rounded hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/8 flex flex-col gap-2">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Get a Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
