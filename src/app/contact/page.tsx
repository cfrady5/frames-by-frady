import { Mail, MessageSquare } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[rgba(47,128,255,0.06)] blur-[80px] rounded-full pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <SectionHeading
                label="Contact"
                title="Let us build something together."
                description="Tell us about your business and what you need. We will review your submission and get back to you within 1-2 business days."
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(47,128,255,0.12)] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#2F80FF]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-0.5">Email</p>
                    <p className="text-sm text-[#F8FAFC] font-medium">hello@framesbyfrady.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(47,128,255,0.12)] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-[#2F80FF]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-0.5">Response time</p>
                    <p className="text-sm text-[#F8FAFC] font-medium">Within 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
