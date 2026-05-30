import { Mail, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <SectionHeading
                label="Contact"
                title="Let us build something together."
                description="Tell us about your project. We will review your submission and get back to you within 1-2 business days."
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#1A73FF]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Email</p>
                    <p className="text-sm text-[#0A0F1C] font-medium">hello@framesbyfrady.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#1A73FF]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Response time</p>
                    <p className="text-sm text-[#0A0F1C] font-medium">Within 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="agency-card rounded-xl p-8">
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
