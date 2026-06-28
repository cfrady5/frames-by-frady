import Link from "next/link";
import { FramesLogo } from "@/components/SiteHeader";

const links = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link href="/">
            <FramesLogo />
          </Link>
          <p className="text-xs text-[#9CA3AF] mt-1">Digital Web Design</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-[#9CA8B8] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#9CA3AF]">
          © {new Date().getFullYear()} Frames by Frady
        </p>
      </div>
    </footer>
  );
}
