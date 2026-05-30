import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Code2, Search, TrendingUp } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";

/* ─── Data ──────────────────────────────────────────────────────────── */

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Design",
    description: "Beautiful, user-focused designs that convert. Every layout is built around your brand and your goals.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, scalable code built for performance. Fast load times, responsive on every device.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimized for speed, visibility, and growth. We build sites that search engines and users both love.",
  },
  {
    icon: TrendingUp,
    title: "Strategy",
    description: "Data-driven strategies that deliver results. We align your site with your business objectives.",
  },
];

const processSteps = [
  { title: "Discover", description: "We learn your business, goals, and audience before a single pixel is placed." },
  { title: "Design", description: "Clean, modern interfaces refined until they feel exactly right for your brand." },
  { title: "Build", description: "Fast, responsive sites with the structure and integrations your business needs." },
  { title: "Launch", description: "We handle hosting, final checks, and go-live so everything ships correctly." },
  { title: "Manage", description: "Ongoing updates, monitoring, and reporting so your site never goes stale." },
];

const caseStudies = [
  {
    type: "Local Service Business",
    title: "HVAC contractor site with lead capture",
    outcome: "Fast mobile-first site with a service area map and quote form. Organic leads up within 90 days.",
    tags: ["Design", "Development", "SEO"],
  },
  {
    type: "Event",
    title: "Annual fundraiser landing page",
    outcome: "Single-page event site with countdown, sponsors, and ticket link. Built and launched in under a week.",
    tags: ["Design", "Development"],
  },
  {
    type: "Professional Services",
    title: "Accounting firm multi-page website",
    outcome: "Replaced a dated site with a polished presence that builds credibility and drives inquiries.",
    tags: ["Design", "Development", "SEO"],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$149",
    description: "Everything you need to get online and look professional.",
    features: ["5-page website", "Hosting included", "Basic analytics", "1 monthly edit", "Mobile responsive", "Email support"],
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STARTER,
  },
  {
    name: "Growth",
    price: "$299",
    description: "For businesses that need more control and visibility.",
    features: ["Custom website", "Hosting included", "Analytics dashboard", "Unlimited minor edits", "Monthly report", "SEO basics", "Priority support"],
    highlighted: true,
    badge: "Most Popular",
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_GROWTH,
  },
  {
    name: "Premium",
    price: "$599",
    description: "A full-service digital presence, entirely managed.",
    features: ["Custom coded site", "Advanced analytics", "Landing pages", "Conversion optimization", "Monthly strategy report", "Priority support"],
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PREMIUM,
  },
];

/* ─── Browser mockup ────────────────────────────────────────────────── */
function BrowserMockup() {
  return (
    <div className="w-full rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F3F4F6] bg-[#F9FAFB]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
          <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
          <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex-1 mx-3 h-5 rounded-md bg-white border border-[#E5E7EB] flex items-center px-2.5">
          <span className="text-[10px] text-[#9CA3AF]">framesbyfrady.com</span>
        </div>
      </div>
      {/* Page content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Nav strip */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-[#0A0F1C]" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 w-8 rounded bg-[#E5E7EB]" />
            ))}
            <div className="h-5 w-14 rounded bg-[#1A73FF]" />
          </div>
        </div>
        {/* Hero block */}
        <div className="mt-2 flex gap-6">
          <div className="flex-1 flex flex-col gap-2.5 pt-2">
            <div className="h-2 w-24 rounded bg-[#DBEAFE]" />
            <div className="h-5 w-full rounded bg-[#0A0F1C]" />
            <div className="h-5 w-4/5 rounded bg-[#0A0F1C]" />
            <div className="h-3 w-full rounded bg-[#E5E7EB] mt-1" />
            <div className="h-3 w-3/4 rounded bg-[#E5E7EB]" />
            <div className="flex gap-2 mt-2">
              <div className="h-7 w-24 rounded bg-[#1A73FF]" />
              <div className="h-7 w-24 rounded border border-[#E5E7EB]" />
            </div>
          </div>
          {/* Right visual */}
          <div className="w-36 flex-shrink-0 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] p-3 flex flex-col gap-2">
            <div className="h-2 w-16 rounded bg-[#E5E7EB]" />
            <div className="h-16 rounded bg-[#EFF6FF] flex items-end px-2 pb-1 gap-1">
              {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-[#1A73FF]"
                  style={{ height: `${h}%`, opacity: 0.5 + (h / 160) }}
                />
              ))}
            </div>
            <div className="h-2 w-12 rounded bg-[#E5E7EB]" />
            <div className="h-2 w-10 rounded bg-[#E5E7EB]" />
          </div>
        </div>
        {/* Service cards strip */}
        <div className="grid grid-cols-4 gap-2 mt-1">
          {["Web Design", "Development", "SEO", "Strategy"].map((s) => (
            <div key={s} className="rounded bg-[#F9FAFB] border border-[#E5E7EB] p-2 flex flex-col gap-1">
              <div className="w-4 h-4 rounded bg-[#DBEAFE]" />
              <div className="h-1.5 w-full rounded bg-[#E5E7EB]" />
              <div className="h-1.5 w-2/3 rounded bg-[#E5E7EB]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          {/* Dot grid background */}
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="flex flex-col gap-7">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-xs font-semibold text-[#6B7280] tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73FF]" />
                Digital Web Design
              </div>

              <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[64px] text-[#0A0F1C] leading-[1.04] tracking-tight">
                Building digital experiences that make an{" "}
                <span className="text-[#1A73FF]">impact.</span>
              </h1>

              <p className="text-[#6B7280] text-lg leading-relaxed max-w-lg">
                Frames by Frady designs and develops clean, high-performing websites for brands that need to look sharp, move fast, and grow online.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/portfolio" className="btn-primary">
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Start a Project
                </Link>
              </div>

              {/* Tagline row */}
              <div className="flex items-center gap-3 text-xs text-[#9CA3AF] font-medium pt-2">
                {["Modern", "Innovative", "Strategic"].map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="text-[#E5E7EB]">•</span>}
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Browser mockup */}
            <div className="hidden lg:block">
              <BrowserMockup />
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <SectionHeading
                label="What We Do"
                title="Services built for results."
              />
              <Link href="/services" className="text-sm font-semibold text-[#1A73FF] hover:text-[#1557CC] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                All services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="agency-card card-hover rounded-lg p-6 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1A73FF]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#0A0F1C] text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionHeading
              label="Process"
              title="How we work."
              description="A clear, repeatable process so you always know where things stand."
            />
            <div className="flex flex-col">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="font-heading font-bold text-xs text-[#1A73FF]">{i + 1}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-[#E5E7EB] min-h-[1.5rem]" />
                    )}
                  </div>
                  <div className="pb-8 pt-0.5 flex flex-col gap-1">
                    <h3 className="font-heading font-semibold text-[#0A0F1C] text-base">{step.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Work ─────────────────────────────────────────── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <SectionHeading label="Selected Work" title="Projects we are proud of." />
              <Link href="/portfolio" className="text-sm font-semibold text-[#1A73FF] hover:text-[#1557CC] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                View all work <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="agency-card card-hover rounded-lg overflow-hidden flex flex-col">
                  {/* Mockup thumbnail */}
                  <div className="h-48 bg-[#F9FAFB] border-b border-[#E5E7EB] relative overflow-hidden p-4">
                    <div className="w-full h-full rounded-md border border-[#E5E7EB] bg-white flex flex-col overflow-hidden shadow-sm">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                        {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#E5E7EB]" />)}
                        <div className="flex-1 ml-2 h-3 rounded bg-[#E5E7EB]" />
                      </div>
                      <div className="flex-1 p-3 flex flex-col gap-2">
                        <div className="h-3 rounded bg-[#0A0F1C] w-3/5" />
                        <div className="h-2 rounded bg-[#E5E7EB] w-full" />
                        <div className="h-2 rounded bg-[#E5E7EB] w-4/5" />
                        <div className="h-6 rounded bg-[#1A73FF] w-1/3 mt-1 opacity-80" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">{cs.type}</p>
                    <h3 className="font-heading font-semibold text-[#0A0F1C] text-base leading-snug">{cs.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{cs.outcome}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded bg-[#F5F5F5] border border-[#E5E7EB] text-[#6B7280]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing teaser ────────────────────────────────────────── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionHeading
                label="Pricing"
                title="Simple monthly plans."
                description="No surprise fees. No complicated setups. A managed website subscription that keeps working for you."
                centered
              />
              <Link href="/pricing" className="text-sm font-semibold text-[#1A73FF] hover:text-[#1557CC] transition-colors flex items-center gap-1.5">
                See full pricing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-lg p-8 flex flex-col gap-6 card-hover ${
                    plan.highlighted
                      ? "bg-[#0A0F1C] border border-[#0A0F1C]"
                      : "agency-card"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1A73FF] text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`}>
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-heading font-bold text-4xl ${plan.highlighted ? "text-white" : "text-[#0A0F1C]"}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>/month</span>
                    </div>
                    <p className={`text-sm mt-2 leading-relaxed ${plan.highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`}>✓</span>
                        <span className={`text-sm ${plan.highlighted ? "text-[#D1D5DB]" : "text-[#6B7280]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.paymentLink || "/contact"}
                    className={`w-full py-3 rounded-md text-sm font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-[#1A73FF] text-white hover:bg-[#1557CC]"
                        : "border border-[#E5E7EB] text-[#0A0F1C] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#9CA3AF]">
              Custom build fees may apply. No-upfront-cost plans available with a 12-month agreement.
            </p>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="py-28 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading
              title="Ready to build something better?"
              description="Tell us about your project and we will get back to you within one business day."
              centered
            />
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
