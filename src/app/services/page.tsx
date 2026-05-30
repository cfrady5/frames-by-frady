import Link from "next/link";
import { Globe, Server, TrendingUp, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pillars = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Clean, modern websites built to look sharp, load fast, and help visitors take action.",
    features: [
      "Custom layout direction",
      "Mobile-first design",
      "Conversion-focused pages",
    ],
  },
  {
    icon: Server,
    title: "Managed Hosting",
    description: "We handle the technical side so your site stays live, secure, and easy to maintain.",
    features: [
      "Hosting and SSL",
      "Performance monitoring",
      "Website updates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "Add SEO, reporting, and marketing support when your business is ready to grow.",
    features: [
      "SEO optimization",
      "Analytics dashboard",
      "Monthly performance reports",
    ],
  },
];

const steps = [
  { step: "01", title: "Launch", description: "We design and launch your website." },
  { step: "02", title: "Manage", description: "We handle hosting, updates, and performance." },
  { step: "03", title: "Grow", description: "We track results and improve your online presence." },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">

        {/* Header */}
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">Services</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-[#0A0F1C] tracking-tight leading-[1.08]">
              Websites, hosting, and growth support in one place.
            </h1>
            <p className="text-[#4B5563] text-base leading-relaxed">
              A simpler way for small businesses to launch, manage, and improve their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-1">
              <Link href="/pricing" className="btn-primary text-sm px-6 py-3">
                View Plans
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-6 py-3">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* Service pillars */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="agency-card rounded-xl p-8 flex flex-col gap-5">
                    <div className="w-9 h-9 rounded-lg border border-[#E5E7EB] flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-[#1A73FF]" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-heading font-semibold text-[#0A0F1C] text-lg">{p.title}</h2>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{p.description}</p>
                    </div>
                    <ul className="flex flex-col gap-2 mt-auto">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#1A73FF] flex-shrink-0" strokeWidth={2.5} />
                          <span className="text-sm text-[#4B5563]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
            <div className="text-center flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">How it works</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0A0F1C] tracking-tight">
                Simple from day one.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.title} className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-[#1A73FF] tracking-widest">{s.step}</span>
                  <h3 className="font-heading font-semibold text-[#0A0F1C] text-base">{s.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-5">
            <h2 className="font-heading font-bold text-3xl text-[#0A0F1C] tracking-tight">
              Start with a website. Add growth when you&apos;re ready.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <Link href="/pricing" className="btn-primary text-sm px-6 py-3">
                View Pricing
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-6 py-3">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
