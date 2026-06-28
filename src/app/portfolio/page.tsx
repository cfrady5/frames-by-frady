import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Example Work",
  description:
    "Example concepts and representative builds for local service businesses — lawncare, contractors, restaurants, events, and professional services. See the kind of work Frames by Frady does.",
  openGraph: {
    title: "Example Work | Frames by Frady",
    description:
      "Sample concepts and representative builds for local service businesses.",
  },
};

const projects = [
  {
    projectType: "Lawncare · Sample concept",
    title: "Service-area landing page with lead capture",
    outcome: "A fast, mobile-first landing page concept built around a service-area map and a simple quote request form — designed to turn local searches into calls.",
    services: ["Design", "Development", "Local SEO", "Hosting"],
  },
  {
    projectType: "Restaurant · Representative build",
    title: "Restaurant landing page with reservation link",
    outcome: "A clean layout concept with an easy-to-scan menu, hours, and a direct reservation link — the essentials a local restaurant actually needs.",
    services: ["Design", "Development", "Hosting", "Monthly Updates"],
  },
  {
    projectType: "Contractor · Sample concept",
    title: "Contractor website with project gallery",
    outcome: "A trust-focused structure with a photo gallery, clear service breakdown, and a contact form built to earn quote requests.",
    services: ["Design", "Development", "Analytics", "Hosting"],
  },
  {
    projectType: "Professional Services · Representative build",
    title: "Consultant personal-brand website",
    outcome: "A minimal, credible site concept that communicates expertise and gives prospects an easy path to reach out.",
    services: ["Design", "Development", "Local SEO", "Landing Pages"],
  },
  {
    projectType: "Event · Sample concept",
    title: "Event landing page with registration flow",
    outcome: "A single-page event structure with schedule, sponsors, and a clear ticket or registration link — quick to launch and easy to update.",
    services: ["Design", "Development", "Hosting"],
  },
  {
    projectType: "Home Services · Representative build",
    title: "Local service business homepage",
    outcome: "A trust-focused homepage and contact flow concept that makes a small service business look established and easy to hire.",
    services: ["Design", "Development", "Local SEO", "Analytics", "Hosting"],
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
              label="Example Work"
              title="The kind of work we do for local businesses."
              description="A look at the types of sites we build for service businesses. Where we don't yet have live client links, examples are shown honestly as sample concepts or representative builds."
            />
          </Reveal>
        </section>

        {/* Grid */}
        <section className="py-24 bg-[#0B121C]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <Reveal key={project.title} delay={(i % 3) * 90}>
                  <PortfolioCard {...project} />
                </Reveal>
              ))}
            </div>
            <p className="text-xs text-[#9CA3AF]">
              Sample concepts and representative builds shown for illustration. Live client work is added as projects launch.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#070B14] border-t border-white/8">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Reveal className="agency-card rounded-2xl px-8 py-16 flex flex-col items-center text-center gap-6">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1] max-w-xl">
                Want to see what this could look like for your business?
              </h2>
              <p className="text-[#9CA8B8] text-base leading-relaxed max-w-md">
                Get a free website audit and we&apos;ll show you what a clean, trustworthy site could do for you.
              </p>
              <Link href="/contact" className="group btn-primary text-base px-8 py-4">
                Get a Free Website Audit
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
