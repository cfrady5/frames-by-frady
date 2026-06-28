import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import Reveal from "@/components/Reveal";

const projects = [
  {
    projectType: "Local Service Business",
    title: "HVAC contractor website with lead capture",
    outcome: "Launched a fast, mobile-first site with a service area map and quote request form. Organic leads increased within the first 90 days.",
    services: ["Design", "Development", "SEO Basics", "Hosting"],
  },
  {
    projectType: "Restaurant",
    title: "Restaurant landing page with online reservation link",
    outcome: "Redesigned an outdated site with a clean visual layout, updated menu, and direct reservation integration.",
    services: ["Design", "Development", "Hosting", "Monthly Updates"],
  },
  {
    projectType: "Contractor",
    title: "General contractor portfolio with project gallery",
    outcome: "Built a trust-building site with a photo gallery, service breakdown, and contact form. Client saw a measurable increase in quote requests.",
    services: ["Design", "Development", "Analytics", "Hosting"],
  },
  {
    projectType: "Personal Brand",
    title: "Consultant personal brand website",
    outcome: "A clean, minimal site that communicates expertise, showcases case studies, and drives consulting inquiries.",
    services: ["Design", "Development", "SEO Basics", "Landing Pages"],
  },
  {
    projectType: "Event",
    title: "Annual fundraiser event landing page",
    outcome: "Single-page event site with countdown timer, sponsor logos, and ticket link. Built and launched in under a week.",
    services: ["Design", "Development", "Hosting"],
  },
  {
    projectType: "Professional Services",
    title: "Accounting firm multi-page website",
    outcome: "Replaced a dated site with a polished, professional presence that builds credibility and drives phone inquiries.",
    services: ["Design", "Development", "SEO Basics", "Analytics", "Hosting"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="relative py-24 overflow-hidden bg-[#070B14] border-b border-white/8">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgba(59,174,72,0.08)] blur-[80px] rounded-full pointer-events-none" />
          <Reveal className="relative max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
            <SectionHeading
              label="Portfolio"
              title="Sites we have designed, built, and managed."
              description="A look at the kinds of projects we take on and the outcomes we deliver for small businesses."
            />
          </Reveal>
        </section>

        {/* Grid */}
        <section className="py-24 bg-[#0B121C]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <Reveal key={project.title} delay={(i % 3) * 90}>
                  <PortfolioCard {...project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#070B14]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Reveal className="gradient-blue glow-blue rounded-3xl px-8 py-20 lg:py-24 flex flex-col items-center text-center gap-6 overflow-hidden relative">
              <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />
              <h2 className="relative font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1] max-w-2xl">
                Ready to add your project to this list?
              </h2>
              <p className="relative text-white/85 text-base leading-relaxed max-w-md">
                Let us build something sharp for your business.
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#3BAE48] bg-white rounded-xl hover:bg-[#F8F9FB] hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
              >
                Start Your Website
                <ArrowRight className="btn-arrow w-5 h-5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
