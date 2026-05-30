"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function FramesLogo() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-center bracket-logo text-[#0A0F1C] text-[15px] tracking-[0.14em]">
        <span className="text-[#1A73FF] font-light mr-[1px]">[</span>
        <span>FRAMES</span>
        <span className="text-[#1A73FF] font-light ml-[1px]">]</span>
      </div>
      <div className="text-[#1A73FF] font-heading font-semibold text-[8px] tracking-[0.22em] uppercase mt-[1px] pl-[2px]">
        BY FRADY
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" onClick={() => setOpen(false)}>
          <FramesLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0F1C] transition-colors rounded"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-[#6B7280] hover:text-[#0A0F1C] transition-colors">
            Client Login
          </Link>
          <Link href="/contact" className="btn-primary text-sm">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#6B7280] hover:text-[#0A0F1C] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-[#6B7280] hover:text-[#0A0F1C] transition-colors rounded hover:bg-[#F9FAFB]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-[#6B7280]">
              Client Login
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
