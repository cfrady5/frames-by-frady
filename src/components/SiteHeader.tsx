"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

function FramesLogo({ size = "default" }: { size?: "default" | "sm" }) {
  const isSmall = size === "sm";
  return (
    <div className={`flex flex-col leading-none ${isSmall ? "gap-0" : "gap-0"}`}>
      <div className={`flex items-center gap-0 bracket-logo text-[#F5F5F5] ${isSmall ? "text-sm" : "text-base"}`}>
        <span className="text-[#1A73FF] font-light opacity-80">[</span>
        <span className="tracking-[0.15em]">FRAMES</span>
        <span className="text-[#1A73FF] font-light opacity-80">]</span>
      </div>
      <div className={`flex items-center justify-between px-[2px] ${isSmall ? "-mt-0.5" : "-mt-0.5"}`}>
        <span className={`font-heading font-semibold text-[#1A73FF] tracking-[0.18em] uppercase ${isSmall ? "text-[8px]" : "text-[9px]"}`}>
          BY FRADY
        </span>
      </div>
    </div>
  );
}

export { FramesLogo };

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(229,231,235,0.08)] bg-[rgba(10,15,28,0.92)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <FramesLogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors rounded-md hover:bg-[rgba(229,231,235,0.05)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Login */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
            >
              Client Login
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors"
            >
              Start Your Website
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(229,231,235,0.08)] bg-[#0A0F1C] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors rounded-md hover:bg-[rgba(229,231,235,0.05)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[rgba(229,231,235,0.08)] mt-2 flex flex-col gap-2">
            <Link
              href="/login"
              className="px-3 py-2.5 text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Client Login
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2.5 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Website
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
