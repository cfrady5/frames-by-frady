import Link from "next/link";
import { Check, Minus, Globe, Server, TrendingUp, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ─── Hero: large wordmark ───────────────────────────────────────────── */
function HeroLogo() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div
        className="flex items-center text-[#0A0F1C] tracking-[0.12em]"
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 52px)" }}
      >
        <span style={{ color: "#1A73FF", fontWeight: 300, marginRight: "2px" }}>[</span>
        <span>FRAMES</span>
        <span style={{ color: "#1A73FF", fontWeight: 300, marginLeft: "2px" }}>]</span>
      </div>
      <div
        className="text-[#1A73FF] tracking-[0.28em] uppercase mt-1"
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif", fontWeight: 600, fontSize: "clamp(8px, 0.9vw, 12px)", paddingLeft: "3px" }}
      >
        BY FRADY
      </div>
    </div>
  );
}

/* ─── Hero: laptop mockup ────────────────────────────────────────────── */
function LaptopMockup() {
  return (
    <div className="relative w-full" style={{ perspective: "1800px" }}>
      <div style={{ transform: "rotateY(-6deg) rotateX(2deg)", transformStyle: "preserve-3d" }}>
        {/* Screen bezel */}
        <div
          className="rounded-t-2xl p-[10px] sm:p-[14px]"
          style={{ background: "linear-gradient(145deg, #3a3a3a, #222222)", boxShadow: "0 40px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.18)" }}
        >
          {/* Screen */}
          <div className="bg-white rounded-xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <div className="h-full flex flex-col">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 py-2 bg-[#F8F9FB] border-b border-[#E5E7EB] flex-shrink-0">
                <div className="flex gap-1">
                  {["#F87171","#FBBF24","#34D399"].map((c, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 mx-2 h-3.5 rounded bg-white border border-[#E5E7EB] flex items-center px-2">
                  <span className="text-[8px] text-[#9CA3AF]">framesbyfrady.com</span>
                </div>
              </div>
              {/* Site content */}
              <div className="flex flex-1 overflow-hidden">
                {/* Left: text content */}
                <div className="flex-[1.1] px-4 py-4 flex flex-col justify-center gap-2.5 bg-white">
                  {/* Site nav */}
                  <div className="flex items-center justify-between mb-1">
                    <div className="h-2 w-12 rounded bg-[#0A0F1C]" />
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((i) => <div key={i} className="h-1.5 w-6 rounded bg-[#E5E7EB]" />)}
                      <div className="h-3.5 w-10 rounded bg-[#1A73FF]" />
                    </div>
                  </div>
                  {/* Headline */}
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading font-bold text-[11px] sm:text-[13px] text-[#0A0F1C] leading-tight">Elevating</span>
                    <span className="font-heading font-bold text-[11px] sm:text-[13px] text-[#1A73FF] italic leading-tight">brands online.</span>
                  </div>
                  <p className="text-[8px] text-[#6B7280] leading-relaxed">Strategy. Design. Results.</p>
                  <div
                    className="flex items-center justify-center rounded"
                    style={{ background: "#1A73FF", height: "18px", width: "52px" }}
                  >
                    <span className="text-[7px] text-white font-semibold">Learn More</span>
                  </div>
                </div>
                {/* Right: architectural image placeholder */}
                <div className="flex-1 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #CBD5E1 0%, #94A3B8 40%, #64748B 100%)" }}>
                  {/* Geometric building shapes */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ background: "linear-gradient(160deg, #D8E2EE 0%, #B8C5D4 50%, #8FA3B8 100%)" }} />
                    {/* Vertical building slice — right */}
                    <div
                      className="absolute top-0 right-0 bottom-0 w-3/5"
                      style={{ background: "linear-gradient(180deg, #C4CDD8 0%, #9DAFC2 100%)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    />
                    {/* Window grid overlay */}
                    <div className="absolute inset-0 opacity-[0.12]" style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "12px 14px"
                    }} />
                    {/* Diagonal highlight edge */}
                    <div
                      className="absolute top-0 left-1/3 w-px h-full opacity-30"
                      style={{ background: "linear-gradient(180deg, transparent, #ffffff, transparent)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hinge bar */}
        <div style={{ background: "linear-gradient(180deg, #3a3a3a, #2a2a2a)", height: "6px", margin: "0 6px", borderRadius: "0 0 3px 3px" }} />
        {/* Keyboard base */}
        <div
          style={{
            background: "linear-gradient(180deg, #C8C8C8 0%, #BABABA 100%)",
            height: "14px",
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
          }}
        />
      </div>
      {/* Surface shadow/reflection */}
      <div
        className="absolute -bottom-3 left-4 right-4 h-3 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #000 0%, transparent 70%)", filter: "blur(6px)" }}
      />
    </div>
  );
}

/* ─── Services ───────────────────────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern websites built to look sharp, load fast, and convert visitors.",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description: "We handle hosting, security, updates, and performance.",
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "SEO, analytics, and reporting to help your business improve online.",
  },
];

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const plans = [
  {
    name: "Foundation",
    price: "$49",
    setup: "+ $499 setup",
    description: "Professional website, hosting, and analytics for businesses that need a stronger online presence.",
    features: [
      "Professional website",
      "Hosting included",
      "Mobile optimized",
      "Contact forms",
      "Analytics dashboard",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    setup: "+ $999 setup",
    badge: "Most Popular",
    description: "Everything in Foundation, plus ongoing updates and SEO support to help generate more leads.",
    features: [
      "Everything in Foundation",
      "Monthly website updates",
      "SEO optimization",
      "Google Business Profile support",
      "Monthly performance reports",
    ],
    cta: "Start Growing",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Growth Partner",
    price: "$299",
    setup: "+ $1,999 setup",
    description: "A dedicated marketing partner for businesses ready to scale their brand and online presence.",
    features: [
      "Everything in Growth",
      "Branding support",
      "Content creation",
      "Email marketing support",
      "Quarterly strategy calls",
    ],
    cta: "Let's Talk",
    href: "/contact",
    highlighted: false,
  },
];

/* ─── Comparison table ────────────────────────────────────────────────── */
const comparisonRows = [
  { feature: "Professional website",    foundation: true,  growth: true,  partner: true },
  { feature: "Hosting and security",    foundation: true,  growth: true,  partner: true },
  { feature: "Analytics dashboard",     foundation: true,  growth: true,  partner: true },
  { feature: "Monthly website updates", foundation: false, growth: true,  partner: true },
  { feature: "SEO optimization",        foundation: false, growth: true,  partner: true },
  { feature: "Branding support",        foundation: false, growth: false, partner: true },
  { feature: "Content creation",        foundation: false, growth: false, partner: true },
];

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            minHeight: "calc(100vh - 64px)",
            background: "linear-gradient(135deg, #ffffff 0%, #F5F7FA 60%, #EEF2F8 100%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#0A0F1C 1px, transparent 1px), linear-gradient(90deg, #0A0F1C 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

              {/* ── Left: copy ─────────────────────────────────────── */}
              <div className="flex flex-col gap-8 lg:gap-10">
                {/* Hero wordmark */}
                <HeroLogo />

                {/* Headline */}
                <div className="flex flex-col gap-0" style={{ lineHeight: 0.96 }}>
                  <h1
                    className="font-heading font-black text-[#0A0F1C] tracking-tight"
                    style={{ fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: 0.96 }}
                  >
                    Built with care.
                  </h1>
                  <h1
                    className="font-heading font-black text-[#1A73FF] tracking-tight"
                    style={{ fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: 0.96 }}
                  >
                    Designed to grow.
                  </h1>
                </div>

                {/* Sub */}
                <p className="text-[#4B5563] leading-relaxed max-w-lg" style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}>
                  High-quality websites, hosting, and growth solutions for small businesses that deserve a partner they can trust.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl transition-colors bg-[#1A73FF] hover:bg-[#1557CC] shadow-[0_4px_16px_rgba(26,115,255,0.30)]"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    Let&apos;s Talk About Your Project
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2.5 font-semibold text-[#0A0F1C] rounded-xl transition-colors bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-[#F8F9FB]"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    View Our Work
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>
              </div>

              {/* ── Right: laptop mockup ────────────────────────── */}
              <div className="hidden lg:flex items-center justify-center w-full">
                <div className="w-full max-w-xl">
                  <LaptopMockup />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section id="services" className="py-24 border-t border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">Services</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight">
                Everything your site needs.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="agency-card rounded-xl p-7 flex flex-col gap-4">
                    <div className="w-9 h-9 rounded-lg border border-[#E5E7EB] flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-[#1A73FF]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#0A0F1C] text-base mb-1.5">{s.title}</h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">Our Plans</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight">
                Simple plans for every stage.
              </h2>
              <p className="text-[#4B5563] text-base max-w-md mx-auto leading-relaxed">
                Start with a professional website. Add growth support when you&apos;re ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-xl flex flex-col gap-6 p-8 ${
                    plan.highlighted
                      ? "border-2 border-[#1A73FF] bg-white shadow-[0_4px_24px_rgba(26,115,255,0.12)]"
                      : "agency-card"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1A73FF] text-white whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF] mb-3">{plan.name}</p>
                    <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="font-heading font-bold text-4xl text-[#0A0F1C]">{plan.price}</span>
                      <span className="text-sm text-[#4B5563]">/mo</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] mb-3">{plan.setup}</p>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{plan.description}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#1A73FF] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm text-[#4B5563]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-[#1A73FF] text-white hover:bg-[#1557CC]"
                        : "border border-[#E5E7EB] text-[#0A0F1C] hover:bg-[#F8F9FB]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ────────────────────────────────────────────── */}
        <section className="py-20 border-t border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-[#0A0F1C] tracking-tight text-center">
              What&apos;s included
            </h2>
            <div className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-[#E5E7EB] bg-[#F8F9FB] px-5 py-3">
                <div />
                {["Foundation", "Growth", "Partner"].map((col) => (
                  <div key={col} className="text-center text-xs font-semibold text-[#0A0F1C]">{col}</div>
                ))}
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 px-5 py-3.5 items-center ${
                    i < comparisonRows.length - 1 ? "border-b border-[#E5E7EB]" : ""
                  }`}
                >
                  <span className="text-sm text-[#4B5563]">{row.feature}</span>
                  {[row.foundation, row.growth, row.partner].map((has, idx) => (
                    <div key={idx} className="flex justify-center">
                      {has ? (
                        <Check className="w-4 h-4 text-[#1A73FF]" strokeWidth={2.5} />
                      ) : (
                        <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={2} />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="py-28 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight">
              Ready to build something great?
            </h2>
            <p className="text-[#4B5563] text-base leading-relaxed">
              Let&apos;s create a website that looks sharp, performs smoothly, and helps your business grow.
            </p>
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5 mt-1">
              Schedule a Call
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
