import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Starter",
    price: "$149",
    description: "Everything you need to get online and look professional.",
    features: [
      "5-page website",
      "Hosting included",
      "Basic analytics",
      "1 monthly edit request",
      "Mobile responsive design",
      "Email support",
    ],
    highlighted: false,
    paymentLinkEnv: "NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STARTER",
  },
  {
    name: "Growth",
    price: "$299",
    description: "For businesses that need more control and visibility.",
    features: [
      "Custom website",
      "Hosting included",
      "Analytics dashboard",
      "Unlimited minor edits",
      "Monthly performance report",
      "SEO basics",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
    paymentLinkEnv: "NEXT_PUBLIC_STRIPE_PAYMENT_LINK_GROWTH",
  },
  {
    name: "Premium",
    price: "$599",
    description: "A full-service digital presence with everything managed for you.",
    features: [
      "Custom coded website",
      "Advanced analytics",
      "Landing pages",
      "Conversion optimization",
      "Monthly strategy report",
      "Priority support",
      "Faster turnaround",
    ],
    highlighted: false,
    paymentLinkEnv: "NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PREMIUM",
  },
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "Custom build fees may apply depending on the scope of your project. No-upfront-cost plans are available with a 12-month agreement.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can change your plan at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "What counts as a minor edit?",
    a: "Text updates, image swaps, color tweaks, link changes, and similar small content modifications. Larger structural changes or new page builds are scoped separately.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. You own all content and assets. If you ever leave, we provide a full export of your site.",
  },
  {
    q: "What if I need something that is not in a plan?",
    a: "Reach out through the contact page and we will put together a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgba(47,128,255,0.06)] blur-[80px] rounded-full pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <SectionHeading
              label="Pricing"
              title="Simple plans, no surprises."
              description="Pick the plan that fits your business. Everything is managed monthly with no long-term lock-in required."
              centered
            />
          </div>
        </section>

        {/* Plans */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                    plan.highlighted
                      ? "border border-[#2F80FF] glow-blue bg-[#0B1422]"
                      : "glass-card hover:border-[rgba(47,128,255,0.25)] transition-all"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-blue text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#2F80FF]">{plan.name}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-bold text-4xl text-[#F8FAFC]">{plan.price}</span>
                      <span className="text-[#94A3B8] text-sm">/month</span>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#2F80FF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm text-[#94A3B8]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "gradient-blue text-white glow-blue-sm hover:opacity-90"
                        : "border border-[rgba(148,163,184,0.2)] text-[#F8FAFC] hover:border-[rgba(47,128,255,0.4)] hover:bg-[rgba(47,128,255,0.06)]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#94A3B8] mt-6">
              Custom build fees may apply. No-upfront-cost plans are available with a 12-month agreement.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#07111F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeading
              label="FAQ"
              title="Common questions."
              centered
            />
            <div className="flex flex-col gap-1">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5 border-b border-[rgba(148,163,184,0.1)] flex flex-col gap-2">
                  <p className="font-heading font-semibold text-[#F8FAFC]">{faq.q}</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading
              title="Not sure which plan fits?"
              description="Get in touch and we will figure it out together."
              centered
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl gradient-blue glow-blue hover:opacity-90 transition-opacity"
            >
              Start Your Website <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
