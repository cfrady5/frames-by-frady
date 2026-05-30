import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Code2, Globe, BarChart3, Search, FileText, RefreshCw, LayoutDashboard } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Design",
    description: "We design clean, modern websites built around your brand. Every layout is intentional, premium, and easy to navigate.",
    forWho: "Businesses that want a site that stands out and actually represents who they are.",
    included: ["Custom layout and visual design", "Brand color and typography integration", "Mobile-first responsive design", "Design review and refinement rounds", "Component-based design system"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "We build fast, reliable websites using modern frameworks. Clean code, no bloat, and built to scale.",
    forWho: "Anyone who wants a site that loads fast, works everywhere, and holds up over time.",
    included: ["Modern framework development (Next.js)", "Responsive layout implementation", "Contact forms and integrations", "Performance optimization", "Cross-browser compatibility"],
  },
  {
    icon: Globe,
    title: "Hosting & Maintenance",
    description: "Your site stays live, updated, and secure. We handle the infrastructure so you never worry about uptime.",
    forWho: "Any business that does not want to think about servers, SSL, or software updates.",
    included: ["Managed hosting included in every plan", "SSL certificate", "Uptime monitoring", "Regular software updates", "Backups"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Know exactly who is visiting your site, what they look at, and where they came from.",
    forWho: "Businesses that want to make informed decisions based on real traffic data.",
    included: ["Analytics integration and setup", "Monthly performance reports", "Traffic sources and referrers", "Device and location breakdowns", "Top pages tracking"],
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
    description: "Focused, conversion-optimized pages for specific campaigns, services, or offers.",
    forWho: "Businesses running ads, promotions, or services that need a dedicated destination.",
    included: ["Custom landing page design and build", "Clear CTA layout", "Mobile optimization", "Form integration", "Basic A/B testing setup (Growth and above)"],
  },
  {
    icon: RefreshCw,
    title: "Monthly Management",
    description: "We handle edits, updates, and ongoing improvements so your site never goes stale.",
    forWho: "Any business that wants their site to stay current without managing it themselves.",
    included: ["Monthly edit request handling", "Content updates and additions", "Image and media swaps", "Ongoing performance reviews", "Priority turnaround on Growth and Premium"],
  },
  {
    icon: LayoutDashboard,
    title: "Client Portal Access",
    description: "A secure client dashboard. View analytics, check billing, submit edit requests, and download reports.",
    forWho: "Clients who want visibility and control without the technical details.",
    included: ["Secure login and authentication", "Analytics overview", "Edit request tracking", "Monthly report access", "Billing and plan management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6 max-w-3xl">
            <SectionHeading
              label="Services"
              title="Everything your website needs, in one place."
              description="Design, development, hosting, analytics, and ongoing management under one managed subscription."
            />
            <Link href="/contact" className="btn-primary w-fit">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="py-4 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`py-16 border-b border-[#E5E7EB] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1A73FF]" strokeWidth={1.75} />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-[#0A0F1C]">{service.title}</h2>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed">{service.description}</p>
                    <div className="agency-card rounded-lg p-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF] mb-2">Who it is for</p>
                      <p className="text-sm text-[#6B7280]">{service.forWho}</p>
                    </div>
                  </div>
                  <div className={`agency-card rounded-lg p-6 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">What is included</p>
                    <ul className="flex flex-col gap-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1A73FF] mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-[#6B7280]">{item}</span>
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
        <section className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading title="Ready to get started?" description="Pick a plan and we will take care of the rest." centered />
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <Link href="/pricing" className="btn-ghost">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
