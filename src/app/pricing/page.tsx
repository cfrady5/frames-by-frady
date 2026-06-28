import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for local service businesses. Launch, Local Growth, and Growth Partner plans — clean websites, local SEO, and ongoing support. You own your site.",
  openGraph: {
    title: "Pricing | Frames by Frady",
    description:
      "Simple, transparent pricing for local service businesses. You own your content and assets — no lock-in.",
  },
};

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
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: "Professional website",    foundation: true,  growth: true,  partner: true },
  { feature: "Hosting and security",    foundation: true,  growth: true,  partner: true },
  { feature: "Analytics dashboard",     foundation: true,  growth: true,  partner: true },
  { feature: "Monthly website updates", foundation: false, growth: true,  partner: true },
  { feature: "Local SEO basics",        foundation: false, growth: true,  partner: true },
  { feature: "Branding support",        foundation: false, growth: false, partner: true },
  { feature: "Content support",         foundation: false, growth: false, partner: true },
];

const faqs = [
  {
    q: "Do I own my website?",
    a: "Yes. You own all content and assets. If you ever leave, we provide a full export of your site — no traps, no hostage situations.",
  },
  {
    q: "Is there a setup fee?",
    a: "Yes. Each plan includes a one-time setup fee to cover design, build, and launch. This is paid at the start.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can move to a higher plan at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "What is included in hosting?",
    a: "All plans include managed hosting, SSL, uptime monitoring, and performance maintenance.",
  },
  {
    q: "Do you guarantee rankings or leads?",
    a: "No — and you should be cautious of anyone who does. We set up strong local SEO foundations and a website built to convert, but we never promise specific rankings or lead numbers.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">

        {/* Header */}
        <section className="relative py-20 border-b border-white/8 bg-[#070B14] overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,174,72,0.08) 0%, transparent 70%)", filter: "blur(20px)" }}
          />
          <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48] animate-fade-up">Pricing</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight animate-fade-up" style={{ animationDelay: "0.08s" }}>
              Simple plans for every stage.
            </h1>
            <p className="text-[#9CA8B8] text-base leading-relaxed animate-fade-up" style={{ animationDelay: "0.16s" }}>
              Clean websites and local growth support for service businesses. Start where you are and add more when you&apos;re ready.
            </p>
          </div>
        </section>

        {/* Ownership / no lock-in trust banner */}
        <section className="bg-[#0B121C] pt-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Reveal className="rounded-2xl border border-[#3BAE48]/25 bg-[#3BAE48]/[0.06] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#3BAE48]/14 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#3BAE48]" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-heading font-semibold text-white text-base">You own everything. No lock-in.</p>
                <p className="text-sm text-[#9CA8B8] leading-relaxed">
                  No traps. No hidden ownership games. You own your content and assets. If you ever leave, we&apos;ll provide a full export of your site.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Plans */}
        <section className="pt-12 pb-20 bg-[#0B121C]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 90}
                  className={`relative rounded-xl flex flex-col gap-6 p-8 ${
                    plan.highlighted
                      ? "border-2 border-[#3BAE48] bg-[#0F1623] shadow-[0_8px_40px_rgba(59,174,72,0.18)] lift"
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
                    href="/contact"
                    className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-[#3BAE48] text-white hover:bg-[#2E8C39]"
                        : "border border-white/12 text-white hover:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 border-t border-white/8 bg-[#070B14]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-white tracking-tight text-center">
              What&apos;s included
            </h2>
            <Reveal className="rounded-xl border border-white/8 overflow-hidden bg-[#0F1623]">
              <div className="grid grid-cols-4 border-b border-white/8 bg-white/5 px-5 py-3">
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

        {/* FAQ */}
        <section className="py-20 border-t border-white/8 bg-[#0B121C]">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-white tracking-tight text-center">
              Common questions
            </h2>
            <Reveal>
              <FaqList faqs={faqs} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-white/8 bg-[#070B14]">
          <Reveal className="max-w-xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-5">
            <h2 className="font-heading font-bold text-3xl text-white tracking-tight">
              Not sure which plan fits?
            </h2>
            <p className="text-[#9CA8B8] text-sm leading-relaxed">
              Start with a free website audit. We&apos;ll review your current site and Google presence, then recommend the right starting point — no pressure.
            </p>
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5 mt-1">
              Get a Free Website Audit
            </Link>
          </Reveal>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
