import Link from "next/link";
import { ArrowRight, Zap, Code2, Globe, BarChart3, Search, FileText, RefreshCw, LayoutDashboard } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Zap,
    title: "Website Design",
    description: "We design clean, modern websites built around your brand. Every layout is built to feel intentional, premium, and easy to navigate.",
    forWho: "Businesses that want a site that stands out and actually represents who they are.",
    included: ["Custom layout and visual design", "Brand color and typography integration", "Mobile-first responsive design", "Design review and refinement rounds", "Component-based design system"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "We build fast, reliable websites using modern web frameworks. Clean code, no bloat, and built to scale with your business.",
    forWho: "Anyone who wants a site that loads fast, works everywhere, and holds up over time.",
    included: ["Modern framework development (Next.js)", "Responsive layout implementation", "Contact forms and integrations", "Performance optimization", "Cross-browser compatibility"],
  },
  {
    icon: Globe,
    title: "Hosting & Maintenance",
    description: "Your site stays live, updated, and secure. We handle the infrastructure so you never have to worry about uptime or technical breakdowns.",
    forWho: "Any business that does not want to think about servers, SSL, or software updates.",
    included: ["Managed hosting included in every plan", "SSL certificate", "Uptime monitoring", "Regular software and dependency updates", "Daily or weekly backups"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Know exactly who is visiting your site, what they are looking at, and where they came from. No guessing, no black boxes.",
    forWho: "Businesses that want to make informed decisions based on real traffic data.",
    included: ["Analytics integration and setup", "Monthly performance reports", "Traffic sources and referrers", "Device and location breakdowns", "Top pages and conversion tracking"],
  },
  {
    icon: Search,
    title: "SEO Basics",
    description: "We set your site up to be found. Proper metadata, clean structure, fast load times, and the fundamentals that search engines care about.",
    forWho: "Local businesses and service providers trying to rank in search results.",
    included: ["Page title and meta description setup", "Structured data markup", "XML sitemap and robots.txt", "Image optimization and alt text", "Core Web Vitals optimization"],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Focused, conversion-optimized pages for specific campaigns, services, or offers. Built fast and designed to get results.",
    forWho: "Businesses running ads, promotions, or services that need a dedicated destination.",
    included: ["Custom landing page design and build", "Clear CTA layout and structure", "Mobile optimization", "Form integration", "Basic A/B testing setup (Growth and above)"],
  },
  {
    icon: RefreshCw,
    title: "Monthly Website Management",
    description: "Your site should evolve with your business. We handle edits, updates, and ongoing improvements so it never goes stale.",
    forWho: "Any business that wants their site to stay current without having to manage it themselves.",
    included: ["Monthly edit request handling", "Content updates and additions", "Image and media swaps", "Ongoing performance reviews", "Priority turnaround on Growth and Premium"],
  },
  {
    icon: LayoutDashboard,
    title: "Client Portal Access",
    description: "Every managed website can include access to a secure client dashboard. View your analytics, check billing, submit edit requests, and download reports.",
    forWho: "Clients who want visibility and control without needing to get into the technical details.",
    included: ["Secure login and authentication", "Analytics overview", "Edit request submission and tracking", "Monthly report access", "Billing and plan management"],
  },
];

export default function ServicesPage() {
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
              label="Services"
              title="Everything your website needs, in one place."
              description="Frames by Frady offers a full suite of website services under one managed subscription. Design, development, hosting, analytics, and ongoing management included."
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-blue glow-blue-sm hover:opacity-90 transition-opacity w-fit"
            >
              Start Your Website <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Services detail */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-1">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`py-16 border-b border-[rgba(148,163,184,0.1)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    i % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(47,128,255,0.12)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2F80FF]" strokeWidth={1.75} />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-[#F8FAFC]">{service.title}</h2>
                    </div>
                    <p className="text-[#94A3B8] leading-relaxed">{service.description}</p>
                    <div className="glass-card rounded-xl p-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2F80FF] mb-2">Who it is for</p>
                      <p className="text-sm text-[#94A3B8]">{service.forWho}</p>
                    </div>
                  </div>
                  <div className={`glass-card rounded-xl p-6 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">What is included</p>
                    <ul className="flex flex-col gap-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] mt-2 flex-shrink-0" />
                          <span className="text-sm text-[#94A3B8]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#07111F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading
              title="Ready to get started?"
              description="Pick a plan and we will take care of the rest."
              centered
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-blue glow-blue-sm hover:opacity-90 transition-opacity">
                Start Your Website
              </Link>
              <Link href="/pricing" className="px-6 py-3 text-sm font-semibold text-[#F8FAFC] rounded-xl border border-[rgba(148,163,184,0.2)] hover:border-[rgba(47,128,255,0.4)] transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
