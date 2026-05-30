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
    features: ["5-page website", "Hosting included", "Basic analytics", "1 monthly edit request", "Mobile responsive design", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$299",
    description: "For businesses that need more control and visibility.",
    features: ["Custom website", "Hosting included", "Analytics dashboard", "Unlimited minor edits", "Monthly performance report", "SEO basics", "Priority support"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$599",
    description: "A full-service digital presence with everything managed for you.",
    features: ["Custom coded website", "Advanced analytics", "Landing pages", "Conversion optimization", "Monthly strategy report", "Priority support", "Faster turnaround"],
    highlighted: false,
  },
];

const faqs = [
  { q: "Is there a setup fee?", a: "Custom build fees may apply depending on the scope of your project. No-upfront-cost plans are available with a 12-month agreement." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes. You can change your plan at any time. Changes take effect at the next billing cycle." },
  { q: "What counts as a minor edit?", a: "Text updates, image swaps, color tweaks, link changes, and similar small content modifications. Larger structural changes or new page builds are scoped separately." },
  { q: "Do I own my website?", a: "Yes. You own all content and assets. If you ever leave, we provide a full export of your site." },
  { q: "What if I need something not in a plan?", a: "Reach out through the contact page and we will put together a custom quote." },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-5">
            <SectionHeading
              label="Pricing"
              title="Simple plans, no surprises."
              description="Pick the plan that fits your business. Everything is managed monthly with no long-term lock-in required."
              centered
            />
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
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
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1A73FF] text-white">{plan.badge}</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className={`text-xs font-semibold uppercase tracking-widest ${plan.highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`}>{plan.name}</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-heading font-bold text-4xl ${plan.highlighted ? "text-white" : "text-[#0A0F1C]"}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>/month</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`} strokeWidth={2.5} />
                        <span className={`text-sm ${plan.highlighted ? "text-[#D1D5DB]" : "text-[#6B7280]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
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
            <p className="text-center text-xs text-[#9CA3AF] mt-6">
              Custom build fees may apply. No-upfront-cost plans available with a 12-month agreement.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
            <SectionHeading label="FAQ" title="Common questions." centered />
            <div>
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5 border-b border-[#E5E7EB] flex flex-col gap-2">
                  <p className="font-heading font-semibold text-[#0A0F1C]">{faq.q}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading title="Not sure which plan fits?" description="Get in touch and we will figure it out together." centered />
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
