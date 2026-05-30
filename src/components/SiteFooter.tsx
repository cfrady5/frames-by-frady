import Link from "next/link";
import { FramesLogo } from "@/components/SiteHeader";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services", label: "Website Design" },
    { href: "/services", label: "Development" },
    { href: "/services", label: "Hosting & Maintenance" },
    { href: "/services", label: "Analytics & Reporting" },
  ],
  Plans: [
    { href: "/pricing", label: "Starter" },
    { href: "/pricing", label: "Growth" },
    { href: "/pricing", label: "Premium" },
  ],
  Portal: [
    { href: "/login", label: "Client Login" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/billing", label: "Billing" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(229,231,235,0.08)] bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="hover:opacity-80 transition-opacity w-fit">
              <FramesLogo />
            </Link>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Digital web design for businesses that need more than a basic website.
            </p>
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors w-fit"
            >
              Start Your Website
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                {group}
              </p>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(229,231,235,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Frames by Frady. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5F5F5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F5F5F5] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
