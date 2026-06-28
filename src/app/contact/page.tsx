import type { Metadata } from "next";
import { Mail, Clock, ShieldCheck, ChevronDown } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import AuditForm from "@/components/AuditForm";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get a Free Website Audit",
  description:
    "Request a free website audit. Tell us about your local service business and we'll review your current site and Google presence — start simple, we'll help you figure out the rest.",
  openGraph: {
    title: "Get a Free Website Audit | Frames by Frady",
    description:
      "Start simple. Request a free website audit and we'll show you what to improve.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 pt-16">
        {/* Primary: simple audit request */}
        <section className="py-20 border-b border-white/8 bg-[#070B14]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: context */}
            <Reveal as="div" className="lg:col-span-2 flex flex-col gap-8">
              <SectionHeading
                label="Free Website Audit"
                title="Start simple. We'll help you figure out the rest."
                description="Tell us a little about your business and what you want to improve. We'll review your current website and Google presence, then show you where the quickest wins are."
              />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#3BAE48]/14 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#3BAE48]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Response time</p>
                    <p className="text-sm text-white font-medium">Within 1–2 business days</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#3BAE48]/14 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#3BAE48]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Email</p>
                    <p className="text-sm text-white font-medium">hello@framesbyfrady.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#3BAE48]/14 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#3BAE48]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">No lock-in</p>
                    <p className="text-sm text-white font-medium">You own your content and assets</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: simple form */}
            <Reveal as="div" delay={120} className="lg:col-span-3">
              <div className="agency-card rounded-xl p-8">
                <AuditForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Secondary: detailed website launcher (for ready-to-build leads) */}
        <section className="py-20 bg-[#0B121C]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Reveal className="flex flex-col gap-2 text-center mb-8">
              <h2 className="font-heading font-bold text-2xl text-white tracking-tight">
                Ready to give us the full picture?
              </h2>
              <p className="text-sm text-[#9CA8B8] leading-relaxed max-w-xl mx-auto">
                If you already know you want to build, the detailed Website Launcher brief helps us move faster — business description, services, tone, goals, and brand colors. It&apos;s optional.
              </p>
            </Reveal>

            <details className="group rounded-xl border border-white/8 bg-[#0F1623] overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
                <span className="font-heading font-semibold text-white text-sm">
                  Open the detailed Website Launcher brief
                </span>
                <ChevronDown className="w-4 h-4 text-[#3BAE48] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-white/8">
                <ContactForm />
              </div>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
