import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    title: "Simple to work with",
    description: "No unnecessary complexity. Clear communication, honest pricing, and a process that makes sense from start to finish.",
  },
  {
    title: "Built for the long run",
    description: "We are not a one-and-done shop. Our model is built around ongoing relationships, not single projects.",
  },
  {
    title: "Quality over shortcuts",
    description: "Every site we build is designed and developed to a standard we are proud of. No templates, no throwaway work.",
  },
  {
    title: "Small business focused",
    description: "Our clients are local service providers, contractors, consultants, and growing businesses. We understand what they need.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgba(47,128,255,0.06)] blur-[80px] rounded-full pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeading
                label="About"
                title="A modern web partner for growing businesses."
                description="Frames by Frady helps small businesses launch better websites and keep them managed over time. We handle design, development, hosting, and everything that happens after launch."
              />
              <p className="text-[#94A3B8] leading-relaxed">
                Most agencies hand you a website and disappear. We built Frames by Frady around a different model: one where your site keeps improving, your data stays visible, and you always have someone to call.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                We work with local service businesses, contractors, consultants, and small teams who need a sharp digital presence without the overhead of managing it themselves. Our subscription model means your site is always looked after, and you always know what you are paying.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-10 flex flex-col gap-6 items-center text-center">
              <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center glow-blue">
                <Zap className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#F8FAFC] mb-2">Frames by Frady</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Managed website design, development, and support for small businesses that take their digital presence seriously.
                </p>
              </div>
              <div className="w-full border-t border-[rgba(148,163,184,0.12)] pt-6 grid grid-cols-2 gap-4 text-center">
                {[
                  { value: "100%", label: "Managed monthly" },
                  { value: "3 plans", label: "Starter to Premium" },
                  { value: "5+", label: "Service categories" },
                  { value: "1 partner", label: "For your whole site" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-heading font-bold text-xl text-[#2F80FF]">{value}</p>
                    <p className="text-xs text-[#94A3B8]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#07111F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeading
              label="How We Work"
              title="What we believe about building websites."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass-card rounded-xl p-7 flex flex-col gap-3">
                  <h3 className="font-heading font-semibold text-[#F8FAFC] text-lg">{v.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed text-sm">{v.description}</p>
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
              title="Let us build something together."
              description="Get in touch and we will figure out the right plan for your business."
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
