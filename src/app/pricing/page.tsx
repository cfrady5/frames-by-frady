import Link from "next/link";
import { Check, Minus } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: "Professional website",    foundation: true,  growth: true,  partner: true },
  { feature: "Hosting and security",    foundation: true,  growth: true,  partner: true },
  { feature: "Analytics dashboard",     foundation: true,  growth: true,  partner: true },
  { feature: "Monthly website updates", foundation: false, growth: true,  partner: true },
  { feature: "SEO optimization",        foundation: false, growth: true,  partner: true },
  { feature: "Branding support",        foundation: false, growth: false, partner: true },
  { feature: "Content creation",        foundation: false, growth: false, partner: true },
];

const faqs = [
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
    q: "Do I own my website?",
    a: "Yes. You own all content and assets. If you ever leave, we provide a full export of your site.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">

        {/* Header */}
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">Pricing</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-[#0A0F1C] tracking-tight">
              Simple plans for every stage.
            </h1>
            <p className="text-[#4B5563] text-base leading-relaxed">
              Start with a professional website. Add growth support when you&apos;re ready.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
                    href="/contact"
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

        {/* Comparison */}
        <section className="py-20 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-[#0A0F1C] tracking-tight text-center">
              What&apos;s included
            </h2>
            <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
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

        {/* FAQ */}
        <section className="py-20 border-t border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <h2 className="font-heading font-bold text-2xl text-[#0A0F1C] tracking-tight text-center">
              Common questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`py-5 flex flex-col gap-1.5 ${i < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <p className="font-heading font-semibold text-[#0A0F1C] text-sm">{faq.q}</p>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-5">
            <h2 className="font-heading font-bold text-3xl text-[#0A0F1C] tracking-tight">
              Ready to build something great?
            </h2>
            <p className="text-[#4B5563] text-sm leading-relaxed">
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
