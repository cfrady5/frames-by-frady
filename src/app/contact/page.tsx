import { Mail, Clock, Sparkles } from "lucide-react";
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
                label="Website Launcher"
                title="Launch your website from a simple description."
                description="Tell us about your business, choose your brand colors, and we’ll use your submission to create a polished website direction built around your services, tone, and goals."
              />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                    <Sparkles
                      className="w-4 h-4 text-[#1A73FF]"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">What happens next</p>
                    <p className="text-sm text-[#0A0F1C] font-medium">
                      Your submission is used to generate a website preview.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                    <Mail
                      className="w-4 h-4 text-[#1A73FF]"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Email</p>
                    <p className="text-sm text-[#0A0F1C] font-medium">
                      hello@framesbyfrady.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                    <Clock
                      className="w-4 h-4 text-[#1A73FF]"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">Response time</p>
                    <p className="text-sm text-[#0A0F1C] font-medium">
                      Website request reviewed within 1-2 business days
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                <p className="text-sm font-semibold text-[#0A0F1C] mb-2">
                  Website Launcher Intake
                </p>
                <p className="text-sm text-[#5F6B7A] leading-relaxed">
                  Include your business description, services, preferred tone,
                  website goals, and three brand colors. The selected hex codes
                  will be used to create the design system for your preview.
                </p>
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
