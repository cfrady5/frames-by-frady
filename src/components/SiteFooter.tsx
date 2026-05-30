import Link from "next/link";
import { FramesLogo } from "@/components/SiteHeader";

const footerLinks = {
  Work: [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/">
              <FramesLogo />
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Digital web design for businesses that need to look sharp and grow online.
            </p>
            <Link href="/contact" className="btn-primary w-fit text-sm">
              Start a Project
            </Link>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                {group}
              </p>
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#6B7280] hover:text-[#0A0F1C] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Frames by Frady. All rights reserved.</p>
          <p className="text-xs">Digital Web Design</p>
        </div>
      </div>
    </footer>
  );
}
