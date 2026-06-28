import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FramesLogo } from "@/components/SiteHeader";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const values = [
  { title: "Simple to work with", description: "No unnecessary complexity. Clear communication, honest pricing, and a process that makes sense from start to finish." },
  { title: "Built for the long run", description: "We are not a one-and-done shop. Our model is built around ongoing relationships, not single projects." },
  { title: "Quality over shortcuts", description: "Every site we build is designed and developed to a standard we are proud of. No templates, no throwaway work." },
  { title: "Small business focused", description: "Our clients are local service providers, contractors, consultants, and growing businesses. We understand what they need." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-20 border-b border-white/8 bg-[#070B14]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                label="About"
                title="A modern web partner for growing businesses."
                description="Frames by Frady helps small businesses launch better websites and keep them managed over time. We handle design, development, hosting, and everything after launch."
              />
              <p className="text-[#9CA8B8] leading-relaxed">
                Most agencies hand you a website and disappear. We built Frames by Frady around a different model: one where your site keeps improving, your data stays visible, and you always have someone to call.
              </p>
              <p className="text-[#9CA8B8] leading-relaxed">
                We work with local service businesses, contractors, consultants, and small teams who need a sharp digital presence without the overhead of managing it themselves.
              </p>
            </Reveal>
            <Reveal delay={120} className="agency-card rounded-xl p-10 flex flex-col gap-8 items-center text-center">
              <FramesLogo />
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Digital Web Design</h3>
                <p className="text-[#9CA8B8] text-sm leading-relaxed max-w-xs">
                  Managed website design, development, and support for small businesses that take their digital presence seriously.
                </p>
              </div>
              <div className="w-full border-t border-white/8 pt-6 grid grid-cols-2 gap-4 text-center">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "3yr+", label: "Average Retainer" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-heading font-bold text-2xl text-[#3BAE48]">{value}</p>
                    <p className="text-xs text-[#9CA3AF]">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#0B121C] border-b border-white/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <Reveal>
              <SectionHeading label="How We Work" title="What we believe about building websites." />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 90} className="agency-card lift rounded-lg p-7 flex flex-col gap-3">
                  <h3 className="font-heading font-semibold text-white text-lg">{v.title}</h3>
                  <p className="text-[#9CA8B8] leading-relaxed text-sm">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#070B14]">
          <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <SectionHeading title="Let us build something together." description="Get in touch and we will figure out the right plan for your business." centered />
            <Link href="/contact" className="group btn-primary text-base px-8 py-4">
              Start a Project <ArrowRight className="btn-arrow w-5 h-5" />
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
