import Link from "next/link";
import { Check, Minus, Globe, Server, TrendingUp, ArrowRight } from "lucide-react";
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
    description: "Clean, mobile-first websites that make local service businesses look credible and easy to trust.",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description: "We handle hosting, security, updates, and performance — so your site stays fast and online.",
  },
  {
    icon: TrendingUp,
    title: "Get Found Locally",
    description: "Google Business Profile help, local SEO basics, and reporting so customers can actually find you.",
  },
];

/* ─── Proof / representative work ─────────────────────────────────────── */
const proofCards = [
  {
    title: "Lawncare Landing Page",
    tag: "Sample concept",
    description: "A service-area landing page built for lead generation and easy quote requests.",
  },
  {
    title: "Contractor Website",
    tag: "Sample concept",
    description: "Project credibility, clear services, and a simple path to request a quote.",
  },
  {
    title: "Event Website",
    tag: "Representative build",
    description: "A professional event page structure with a clean registration and details flow.",
  },
  {
    title: "Local Service Business",
    tag: "Representative build",
    description: "A trust-focused homepage and contact flow that turns visitors into calls.",
  },
];

/* ─── How it works ───────────────────────────────────────────────────── */
const steps = [
  { n: "01", title: "Audit", body: "We review your current website, Google presence, and business goals." },
  { n: "02", title: "Frame", body: "We shape your message, services, layout, and conversion path." },
  { n: "03", title: "Build", body: "We design and launch a clean, mobile-first website." },
  { n: "04", title: "Grow", body: "We handle updates, improvements, and ongoing support." },
];

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const plans = [
  {
    name: "Launch",
    price: "$49",
    setup: "+ $499 setup",
    description: "For businesses that need a clean, credible online presence.",
    features: [
      "Professional website",
      "Hosting included",
      "Mobile optimized",
      "Contact and quote forms",
      "Analytics dashboard",
    ],
    cta: "Start Your Website",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Local Growth",
    price: "$99",
    setup: "+ $999 setup",
    badge: "Most Popular",
    description: "For businesses that want a stronger website, basic SEO, and ongoing updates.",
    features: [
      "Everything in Launch",
      "Monthly website updates",
      "Local SEO basics",
      "Google Business Profile support",
      "Monthly performance reports",
    ],
    cta: "Start Your Website",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Growth Partner",
    price: "$299",
    setup: "+ $1,999 setup",
    description: "For businesses that want ongoing improvements, reporting, content support, and strategy.",
    features: [
      "Everything in Local Growth",
      "Branding support",
      "Content support",
      "Email marketing support",
      "Quarterly strategy calls",
    ],
    cta: "Request an Audit",
    href: "/contact",
    highlighted: false,
  },
];

/* ─── Comparison table ────────────────────────────────────────────────── */
const comparisonRows = [
  { feature: "Professional website",      foundation: true,  growth: true,  partner: true },
  { feature: "Hosting and security",      foundation: true,  growth: true,  partner: true },
  { feature: "Analytics dashboard",       foundation: true,  growth: true,  partner: true },
  { feature: "Monthly website updates",   foundation: false, growth: true,  partner: true },
  { feature: "Local SEO basics",          foundation: false, growth: true,  partner: true },
  { feature: "Branding support",          foundation: false, growth: false, partner: true },
  { feature: "Content support",           foundation: false, growth: false, partner: true },
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
                <div className="flex flex-col animate-fade-up" style={{ animationDelay: "0.08s" }}>
                  <h1
                    className="font-heading font-black text-white tracking-tight"
                    style={{ fontSize: "clamp(38px, 4.6vw, 64px)", lineHeight: 1.04 }}
                  >
                    Clean websites for local businesses that{" "}
                    <span className="text-[#3BAE48]">deserve to be trusted.</span>
                  </h1>
                </div>

                {/* Sub */}
                <p
                  className="text-[#9CA8B8] leading-relaxed max-w-xl animate-fade-up"
                  style={{ fontSize: "clamp(15px, 1.2vw, 18px)", animationDelay: "0.16s" }}
                >
                  Frames by Frady builds simple, professional websites that help service businesses look credible, get found online, and turn visitors into calls or quote requests.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl transition-all bg-[#3BAE48] hover:bg-[#2E8C39] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(59,174,72,0.30)] hover:shadow-[0_10px_28px_rgba(59,174,72,0.38)]"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    Get a Free Website Audit
                    <ArrowRight className="btn-arrow w-4 h-4 flex-shrink-0" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl transition-all bg-white/[0.03] border border-white/16 hover:border-[#3BAE48]/50 hover:bg-white/[0.06] hover:-translate-y-0.5"
                    style={{ padding: "14px 28px", fontSize: "15px" }}
                  >
                    View Example Work
                    <ArrowRight className="btn-arrow w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>

                {/* Trust bar — honest, supportable signals */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-up" style={{ animationDelay: "0.32s" }}>
                  {["Free website audit", "Mobile-first & local-SEO ready", "You own everything"].map((item, i) => (
                    <div key={item} className="flex items-center gap-2">
                      {i > 0 && <span className="hidden sm:block w-px h-4 bg-white/10 mr-3" />}
                      <Check className="w-4 h-4 text-[#3BAE48] flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-sm text-[#9CA8B8]">{item}</span>
                    </div>
                  ))}
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

        {/* ── Proof / representative work ───────────────────────────── */}
        <section className="py-24 border-t border-white/8 bg-[#070B14]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal className="flex flex-col gap-4 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">Recent &amp; representative work</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                Built for businesses that earn their reputation.
              </h2>
              <p className="text-[#9CA8B8] text-base leading-relaxed">
                From lawncare and contractors to restaurants, events, and professional services, Frames by Frady helps small businesses show up online with the same care they bring to their work.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {proofCards.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 80}
                  className="group agency-card lift rounded-xl p-6 flex flex-col gap-4"
                >
                  {/* Minimal preview mock */}
                  <div className="h-24 rounded-lg border border-white/8 bg-[#0B121C] p-3 flex flex-col gap-2 overflow-hidden">
                    <div className="h-1.5 w-2/3 rounded bg-[#3BAE48]/60" />
                    <div className="h-1.5 w-full rounded bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded bg-white/10" />
                    <div className="h-4 w-1/3 rounded bg-[#3BAE48]/25 mt-auto" />
                  </div>
                  <span className="self-start px-2 py-0.5 text-[11px] font-medium rounded-md bg-[#3BAE48]/12 text-[#3BAE48] border border-[#3BAE48]/25">
                    {card.tag}
                  </span>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="font-heading font-semibold text-white text-base leading-snug">{card.title}</h3>
                    <p className="text-sm text-[#9CA8B8] leading-relaxed">{card.description}</p>
                  </div>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3BAE48] hover:gap-2.5 transition-all"
                  >
                    View example
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="text-xs text-[#9CA3AF]">
              Sample concepts and representative builds shown. New client work is added as projects launch.
            </p>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/8 bg-[#0B121C]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal className="flex flex-col gap-3 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">How it works</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                A simple, steady process.
              </h2>
              <p className="text-[#9CA8B8] text-base leading-relaxed">
                No pressure, no jargon. Four clear steps from where you are now to a website that works for your business.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={i * 90}
                  className="agency-card rounded-xl p-7 flex flex-col gap-3"
                >
                  <span className="font-heading font-bold text-2xl text-[#3BAE48]">{step.n}</span>
                  <h3 className="font-heading font-semibold text-white text-lg">{step.title}</h3>
                  <p className="text-sm text-[#9CA8B8] leading-relaxed">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section id="services" className="py-24 border-t border-white/8 bg-[#070B14]">
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
        <section id="pricing" className="py-24 border-t border-white/8 bg-[#0B121C]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal className="text-center flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">Our Plans</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Simple plans for every stage.
              </h2>
              <p className="text-[#9CA8B8] text-base max-w-md mx-auto leading-relaxed">
                Start with a clean website. Add local growth support when you&apos;re ready. You own everything.
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
        <section className="py-20 border-t border-white/8 bg-[#070B14]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-white tracking-tight text-center">
              What&apos;s included
            </h2>
            <Reveal className="rounded-xl border border-white/8 bg-[#0F1623] overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-white/8 bg-[#0B121C] px-5 py-3">
                <div />
                {["Launch", "Local Growth", "Partner"].map((col) => (
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
        <section className="py-28 border-t border-white/8 bg-[#0B121C]">
          <Reveal className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Start simple. We&apos;ll help you figure out the rest.
            </h2>
            <p className="text-[#9CA8B8] text-base leading-relaxed">
              Get a free website audit. We&apos;ll review your current site and Google presence, then show you what to improve — no pressure, no jargon.
            </p>
            <Link href="/contact" className="group btn-primary text-sm px-7 py-3.5 mt-1">
              Get a Free Website Audit
              <ArrowRight className="btn-arrow w-4 h-4" />
            </Link>
            <p className="text-xs text-[#9CA3AF] max-w-md">
              No traps. No hidden ownership games. You own your content and assets. If you ever leave, we&apos;ll provide a full export of your site.
            </p>
          </Reveal>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
