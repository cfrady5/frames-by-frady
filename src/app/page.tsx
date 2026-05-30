import Link from "next/link";
import { ArrowRight, BarChart3, Globe, RefreshCw, Shield, Zap, LayoutDashboard, Code2, Search, FileText, MonitorSmartphone, Users } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import PricingCard from "@/components/PricingCard";

const services = [
  { icon: Zap, title: "Custom Website Design", description: "Premium designs tailored to your brand, built to impress and convert from day one." },
  { icon: Code2, title: "Development", description: "Fast, responsive sites built with modern frameworks. Clean code, no bloat." },
  { icon: Globe, title: "Hosting & Maintenance", description: "Reliable hosting included with every plan. We keep your site live, updated, and secure." },
  { icon: BarChart3, title: "Analytics Setup", description: "Know exactly who visits your site, what they do, and where they come from." },
  { icon: RefreshCw, title: "Monthly Updates", description: "Submit edit requests and we handle the changes. No technical knowledge required." },
  { icon: FileText, title: "Landing Pages", description: "Dedicated landing pages for campaigns, promos, or specific offers." },
  { icon: Search, title: "SEO Basics", description: "Structured metadata, fast load times, and clean markup to help you get found." },
  { icon: LayoutDashboard, title: "Client Portal Access", description: "A branded dashboard for analytics, reports, billing, and edit requests." },
];

const processSteps = [
  { title: "Discover", description: "We learn your business, goals, and audience, then map out exactly what your website needs to do and who it needs to reach." },
  { title: "Design", description: "We design a clean, modern interface built around your brand, with layouts reviewed and refined until they feel right." },
  { title: "Build", description: "We develop a fast, responsive site with the structure, content, and integrations your business actually needs." },
  { title: "Launch", description: "We handle hosting, final checks, and go-live, so your site ships smoothly with everything configured correctly." },
  { title: "Manage", description: "After launch we keep your site updated, monitored, and optimized, with edits, analytics, and reporting handled for you." },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$149",
    description: "Everything you need to get online and look professional.",
    features: ["5-page website", "Hosting included", "Basic analytics", "1 monthly edit request", "Mobile responsive design", "Email support"],
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STARTER,
  },
  {
    name: "Growth",
    price: "$299",
    description: "For businesses that need more control and visibility.",
    features: ["Custom website", "Hosting included", "Analytics dashboard", "Unlimited minor edits", "Monthly performance report", "SEO basics", "Priority support"],
    highlighted: true,
    badge: "Most Popular",
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_GROWTH,
  },
  {
    name: "Premium",
    price: "$599",
    description: "A full-service digital presence with everything managed for you.",
    features: ["Custom coded website", "Advanced analytics", "Landing pages", "Conversion optimization", "Monthly strategy report", "Priority support", "Faster turnaround"],
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PREMIUM,
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,15,28,0.6)] to-[#0A0F1C]" />
          {/* Subtle blue radial */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(26,115,255,0.05)] blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
            {/* Copy */}
            <div className="flex-1 flex flex-col gap-8 max-w-2xl">
              <div className="flex items-center gap-2.5 w-fit px-3 py-1.5 rounded-full border border-[rgba(26,115,255,0.25)] bg-[rgba(26,115,255,0.06)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A73FF]" />
                <span className="text-xs font-semibold text-[#1A73FF] tracking-wide">
                  Strategy. Design. Development. Results.
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-[1.1] tracking-tight">
                Websites built to look sharp, load fast, and{" "}
                <span className="text-[#1A73FF]">keep working</span> after launch.
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                Frames by Frady builds modern websites with ongoing hosting, updates, analytics, and support, so businesses do not just get a site. They get a managed digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors"
                >
                  Start Your Website
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F5F5F5] rounded-md border border-[rgba(229,231,235,0.15)] hover:border-[rgba(26,115,255,0.4)] hover:bg-[rgba(26,115,255,0.06)] transition-all"
                >
                  View Pricing
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-2 border-t border-[rgba(229,231,235,0.08)]">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-heading font-bold text-xl text-[#F5F5F5]">{value}</p>
                    <p className="text-xs text-[#9CA3AF]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero dashboard mockup */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="relative rounded-lg border border-[rgba(26,115,255,0.2)] bg-[#161E2E] glow-blue overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(229,231,235,0.08)] bg-[rgba(17,24,39,0.8)]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(239,68,68,0.4)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(234,179,8,0.4)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(34,197,94,0.4)]" />
                  </div>
                  <div className="flex-1 mx-2 h-4 rounded bg-[rgba(229,231,235,0.05)] flex items-center px-2">
                    <span className="text-[10px] text-[#9CA3AF] font-mono">app.framesbyfrady.com/dashboard</span>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  {[
                    { label: "Monthly Visitors", value: "4,821", color: "#1A73FF" },
                    { label: "Page Views", value: "12,340", color: "#1A73FF" },
                    { label: "Open Requests", value: "2", color: "#9CA3AF" },
                    { label: "Plan", value: "Growth", color: "#1A73FF" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-md bg-[rgba(17,24,39,0.6)] border border-[rgba(229,231,235,0.08)] p-4">
                      <p className="text-xs text-[#9CA3AF] mb-1">{stat.label}</p>
                      <p className="font-heading font-bold text-lg" style={{ color: stat.color }}>{stat.value}</p>
                    </div>
                  ))}
                  <div className="col-span-2 rounded-md bg-[rgba(17,24,39,0.6)] border border-[rgba(229,231,235,0.08)] p-4">
                    <p className="text-xs text-[#9CA3AF] mb-2">Traffic (last 7 days)</p>
                    <div className="flex items-end gap-1 h-12">
                      {[30, 55, 45, 70, 60, 85, 75].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: `rgba(26, 115, 255, ${0.25 + (h / 100) * 0.55})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-6 bg-[rgba(26,115,255,0.04)] rounded-full blur-[50px] -z-10" />
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="py-24 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading
                label="Why Frames by Frady"
                title="Built for businesses that need more than a basic website."
                description="Your website should not sit untouched after launch. Frames by Frady keeps your site updated, monitored, optimized, and easy to manage, so it keeps performing long after it goes live."
              />
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, label: "Fully Managed", desc: "We handle every technical detail so you can focus on running your business." },
                { icon: BarChart3, label: "Ongoing Analytics", desc: "Real visibility into how your site is performing, every month." },
                { icon: Users, label: "Real Support", desc: "A dedicated partner who knows your site and responds when you need help." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-card rounded-lg p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-md bg-[rgba(26,115,255,0.1)] border border-[rgba(26,115,255,0.15)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1A73FF]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#F5F5F5] text-base mb-1">{label}</p>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <SectionHeading label="Services" title="Everything your site needs, handled." />
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A73FF] hover:text-[#1557CC] transition-colors whitespace-nowrap">
                All services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => <ServiceCard key={s.title} {...s} />)}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <SectionHeading
                label="How It Works"
                title="From first call to fully managed."
                description="A clear, repeatable process so you always know where things stand."
              />
              <div>
                {processSteps.map((step, i) => (
                  <ProcessStep
                    key={step.title}
                    number={i + 1}
                    title={step.title}
                    description={step.description}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portal teaser */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="glass-card rounded-lg p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col gap-6 max-w-xl">
                <SectionHeading
                  label="Client Portal"
                  title="A website partner your clients can actually see."
                  description="Every managed website can include access to a client dashboard for analytics, billing, reports, and edit requests."
                />
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors w-fit"
                >
                  View the Portal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-3 w-full max-w-xs">
                {[
                  { icon: BarChart3, label: "Analytics Dashboard" },
                  { icon: FileText, label: "Monthly Reports" },
                  { icon: RefreshCw, label: "Edit Requests" },
                  { icon: MonitorSmartphone, label: "Billing & Plan" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-md bg-[rgba(17,24,39,0.6)] border border-[rgba(229,231,235,0.08)]">
                    <Icon className="w-4 h-4 text-[#1A73FF]" strokeWidth={1.75} />
                    <span className="text-sm text-[#F5F5F5] font-medium">{label}</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#1A73FF] opacity-70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="py-24 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionHeading
                label="Pricing"
                title="Simple monthly plans."
                description="No surprise fees. No complicated setups. Just a managed website subscription that works."
                centered
              />
              <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A73FF] hover:text-[#1557CC] transition-colors">
                See full pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => <PricingCard key={plan.name} {...plan} />)}
            </div>
            <p className="text-center text-xs text-[#9CA3AF]">
              Custom build fees may apply. No-upfront-cost plans are available with a 12-month agreement.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[rgba(26,115,255,0.06)] blur-[100px] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading
              title="Ready to give your business a sharper digital presence?"
              description="Start with a plan that fits your budget. Scale as your business grows."
              centered
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors"
            >
              Start Your Website
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
