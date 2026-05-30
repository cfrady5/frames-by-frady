import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";

const projects = [
  {
    projectType: "Local Service Business",
    title: "HVAC contractor website with lead capture",
    outcome: "Launched a fast, mobile-first site with a service area map and quote request form. Organic leads increased within the first 90 days.",
    services: ["Design", "Development", "SEO Basics", "Hosting"],
    gradient: "from-[#07111F] to-[#0d1a2d]",
  },
  {
    projectType: "Restaurant",
    title: "Restaurant landing page with online reservation link",
    outcome: "Redesigned an outdated site with a clean visual layout, updated menu, and direct reservation integration.",
    services: ["Design", "Development", "Hosting", "Monthly Updates"],
    gradient: "from-[#0d1a2d] to-[#07111F]",
  },
  {
    projectType: "Contractor",
    title: "General contractor portfolio with project gallery",
    outcome: "Built a trust-building site with a photo gallery, service breakdown, and contact form. Client saw a measurable increase in quote requests.",
    services: ["Design", "Development", "Analytics", "Hosting"],
    gradient: "from-[#07111F] to-[#0B1422]",
  },
  {
    projectType: "Personal Brand",
    title: "Consultant personal brand website",
    outcome: "A clean, minimal site that communicates expertise, showcases case studies, and drives consulting inquiries.",
    services: ["Design", "Development", "SEO Basics", "Landing Pages"],
    gradient: "from-[#0B1422] to-[#07111F]",
  },
  {
    projectType: "Event",
    title: "Annual fundraiser event landing page",
    outcome: "Single-page event site with countdown timer, sponsor logos, and ticket link. Built and launched in under a week.",
    services: ["Design", "Development", "Hosting"],
    gradient: "from-[#07111F] to-[#0d1a2d]",
  },
  {
    projectType: "Professional Services",
    title: "Accounting firm multi-page website",
    outcome: "Replaced a dated site with a polished, professional presence that builds credibility and drives phone inquiries.",
    services: ["Design", "Development", "SEO Basics", "Analytics", "Hosting"],
    gradient: "from-[#0d1a2d] to-[#0B1422]",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgba(47,128,255,0.06)] blur-[80px] rounded-full pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6 max-w-3xl">
            <SectionHeading
              label="Portfolio"
              title="Sites we have designed, built, and managed."
              description="A look at the kinds of projects we take on and the outcomes we deliver for small businesses."
            />
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <PortfolioCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#07111F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading
              title="Ready to add your project to this list?"
              description="Let us build something sharp for your business."
              centered
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl gradient-blue glow-blue hover:opacity-90 transition-opacity"
            >
              Start Your Website <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
