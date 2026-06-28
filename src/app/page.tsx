import Link from "next/link";
import { Check, Minus, Globe, Server, TrendingUp, ArrowRight, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { FramesMark, FramesWordmark } from "@/components/BrandLogo";

/* ─── Hero: brand lockup ─────────────────────────────────────────────── */
function HeroLogo() {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <FramesMark className="w-12 h-12 sm:w-14 sm:h-14" />
      <FramesWordmark className="text-2xl sm:text-3xl" />
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
            background: "linear-gradient(135deg, #070B14 0%, #0A1018 55%, #0A140F 100%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Animated aurora blobs */}
          <div
            className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full pointer-events-none animate-float"
            style={{ background: "radial-gradient(circle, rgba(59,174,72,0.22) 0%, transparent 70%)", filter: "blur(20px)" }}
          />
          <div
            className="absolute top-1/3 -right-32 w-[40rem] h-[40rem] rounded-full pointer-events-none animate-float"
            style={{ background: "radial-gradient(circle, rgba(59,174,72,0.16) 0%, transparent 70%)", filter: "blur(24px)", animationDelay: "1.5s" }}
          />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

              {/* ── Left: copy ─────────────────────────────────────── */}
              <div className="flex flex-col gap-8 lg:gap-10">
                {/* Hero wordmark */}
                <div className="animate-fade-up">
                  <HeroLogo />
                </div>

                {/* Headline */}
                <div className="flex flex-col gap-0 animate-fade-up" style={{ lineHeight: 0.96, animationDelay: "0.08s" }}>
                  <h1
                    className="font-heading font-black text-white tracking-tight"
                    style={{ fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: 0.96 }}
                  >
                    Built with care.
                  </h1>
                  <h1
                    className="font-heading font-black text-[#3BAE48] tracking-tight"
                    style={{ fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: 0.96 }}
                  >
                    Designed to grow.
                  </h1>
                </div>

                {/* Sub */}
                <p
                  className="text-[#9CA8B8] leading-relaxed max-w-lg animate-fade-up"
                  style={{ fontSize: "clamp(15px, 1.2vw, 18px)", animationDelay: "0.16s" }}
                >
                  High-quality websites, hosting, and growth solutions for small businesses that deserve a partner they can trust.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl transition-all bg-[#3BAE48] hover:bg-[#2E8C39] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(59,174,72,0.30)] hover:shadow-[0_10px_28px_rgba(59,174,72,0.38)]"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    Let&apos;s Talk About Your Project
                    <ArrowRight className="btn-arrow w-4 h-4 flex-shrink-0" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl transition-all bg-white/[0.03] border border-white/16 hover:border-[#3BAE48]/50 hover:bg-white/[0.06] hover:-translate-y-0.5"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    View Our Work
                    <ArrowRight className="btn-arrow w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>

                {/* Trust bar */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-up" style={{ animationDelay: "0.32s" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                      ))}
                    </div>
                    <span className="text-sm text-[#9CA8B8]">Loved by local businesses</span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-white/10" />
                  <p className="text-sm text-[#9CA8B8]">
                    <span className="font-semibold text-white">50+</span>{" "}
                    sites launched &amp; managed
                  </p>
                </div>
              </div>

              {/* ── Right: spinning brand mark ──────────────────── */}
              <div className="hidden lg:flex items-center justify-center w-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="animate-spin-slow drop-shadow-[0_0_60px_rgba(59,174,72,0.25)]">
                  <FramesMark
                    className="w-[30rem] h-[30rem] xl:w-[34rem] xl:h-[34rem]"
                    bg="transparent"
                    backStroke="rgba(255,255,255,0.85)"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section id="services" className="py-24 border-t border-white/8 bg-[#0B121C]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal className="text-center flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">Services</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Everything your site needs.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal
                    key={s.title}
                    delay={i * 90}
                    className="group agency-card lift rounded-xl p-7 flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center transition-colors group-hover:border-[#3BAE48]/40 group-hover:bg-[#3BAE48]/14">
                      <Icon className="w-4.5 h-4.5 text-[#3BAE48]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white text-base mb-1.5">{s.title}</h3>
                      <p className="text-sm text-[#9CA8B8] leading-relaxed">{s.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 border-t border-white/8 bg-[#070B14]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal className="text-center flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">Our Plans</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Simple plans for every stage.
              </h2>
              <p className="text-[#9CA8B8] text-base max-w-md mx-auto leading-relaxed">
                Start with a professional website. Add growth support when you&apos;re ready.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 90}
                  className={`relative rounded-xl flex flex-col gap-6 p-8 ${
                    plan.highlighted
                      ? "border-2 border-[#3BAE48] bg-[#0F1623] shadow-[0_8px_40px_rgba(59,174,72,0.25)] lift"
                      : "agency-card lift"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#3BAE48] text-white whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48] mb-3">{plan.name}</p>
                    <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="font-heading font-bold text-4xl text-white">{plan.price}</span>
                      <span className="text-sm text-[#9CA8B8]">/mo</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] mb-3">{plan.setup}</p>
                    <p className="text-sm text-[#9CA8B8] leading-relaxed">{plan.description}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#3BAE48] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm text-[#9CA8B8]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-[#3BAE48] text-white hover:bg-[#2E8C39]"
                        : "border border-white/8 text-white hover:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ────────────────────────────────────────────── */}
        <section className="py-20 border-t border-white/8 bg-[#0B121C]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-white tracking-tight text-center">
              What&apos;s included
            </h2>
            <Reveal className="rounded-xl border border-white/8 bg-[#0F1623] overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-white/8 bg-[#0B121C] px-5 py-3">
                <div />
                {["Foundation", "Growth", "Partner"].map((col) => (
                  <div key={col} className="text-center text-xs font-semibold text-white">{col}</div>
                ))}
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 px-5 py-3.5 items-center ${
                    i < comparisonRows.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <span className="text-sm text-[#9CA8B8]">{row.feature}</span>
                  {[row.foundation, row.growth, row.partner].map((has, idx) => (
                    <div key={idx} className="flex justify-center">
                      {has ? (
                        <Check className="w-4 h-4 text-[#3BAE48]" strokeWidth={2.5} />
                      ) : (
                        <Minus className="w-4 h-4 text-white/20" strokeWidth={2} />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="py-28 border-t border-white/8 bg-[#070B14]">
          <Reveal className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to build something great?
            </h2>
            <p className="text-[#9CA8B8] text-base leading-relaxed">
              Let&apos;s create a website that looks sharp, performs smoothly, and helps your business grow.
            </p>
            <Link href="/contact" className="group btn-primary text-sm px-7 py-3.5 mt-1">
              Schedule a Call
              <ArrowRight className="btn-arrow w-4 h-4" />
            </Link>
          </Reveal>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
