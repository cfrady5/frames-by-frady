import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pillars = [
  {
    title: "Website Design",
    description: "Clean, modern websites designed to create trust and convert visitors into customers.",
    features: ["Custom layouts", "Mobile-first design", "Conversion-focused pages"],
  },
  {
    title: "Managed Hosting",
    description: "We handle the technical side so your site stays live, secure, and easy to maintain.",
    features: ["Hosting and SSL", "Performance monitoring", "Website updates"],
  },
  {
    title: "Growth Support",
    description: "SEO, reporting, and marketing support to improve your online presence over time.",
    features: ["SEO optimization", "Analytics dashboard", "Monthly performance reports"],
  },
];

const steps = [
  {
    title: "Launch",
    description: "Professional website design and launch.",
  },
  {
    title: "Manage",
    description: "Hosting, updates, and performance handled.",
  },
  {
    title: "Grow",
    description: "Reporting, SEO, and ongoing optimization.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="py-28 md:py-36 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A73FF]">
              Services
            </p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-[#0A0F1C] tracking-tight leading-[1.05]">
              Websites that work harder for your business.
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed max-w-xl">
              Design, hosting, and growth support built into one simple system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/pricing" className="btn-primary text-sm px-6 py-3">
                View Pricing
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-6 py-3">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {pillars.map((p, i) => (
              <div key={p.title}>
                <div className="py-14 flex flex-col sm:flex-row gap-10 sm:gap-16">
                  <div className="sm:w-48 flex-shrink-0">
                    <h2 className="font-heading font-semibold text-xl text-[#0A0F1C] leading-snug">
                      {p.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5 flex-1">
                    <p className="text-[#4B5563] text-base leading-relaxed">{p.description}</p>
                    <ul className="flex flex-col gap-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#6B7280]">
                          <span className="w-1 h-1 rounded-full bg-[#1A73FF] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < pillars.length - 1 && (
                  <div className="border-t border-[#E5E7EB]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight">
              Launch. Manage. Grow.
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden sm:block absolute top-2 left-0 right-0 h-px bg-[#E5E7EB]" style={{ left: "1rem", right: "1rem" }} />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
                {steps.map((s) => (
                  <div key={s.title} className="flex flex-col gap-4">
                    <div className="relative flex items-center gap-3 sm:block">
                      {/* Dot */}
                      <div className="w-4 h-4 rounded-full border-2 border-[#1A73FF] bg-white flex-shrink-0 sm:mb-5" />
                      <h3 className="font-heading font-semibold text-[#0A0F1C] text-base sm:mt-0">{s.title}</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed sm:block hidden">{s.description}</p>
                    <p className="text-sm text-[#4B5563] leading-relaxed sm:hidden">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Visual break ──────────────────────────────────────────── */}
        <section className="bg-white border-t border-[#E5E7EB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
            <div className="w-full aspect-video rounded-2xl bg-[#F0F4FF] border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
              {/* Browser chrome mockup */}
              <div className="w-full h-full flex flex-col">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E5E7EB] bg-[#F8F9FB] flex-shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                    <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                    <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                  </div>
                  <div className="flex-1 mx-4 h-5 rounded-md bg-white border border-[#E5E7EB] flex items-center px-3">
                    <span className="text-[10px] text-[#9CA3AF]">yoursite.com</span>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded-md bg-[#0A0F1C]" />
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 w-10 rounded bg-[#E5E7EB]" />
                      ))}
                      <div className="h-6 w-16 rounded-md bg-[#1A73FF]" />
                    </div>
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="h-8 w-4/5 rounded-md bg-[#0A0F1C]" />
                      <div className="h-8 w-3/5 rounded-md bg-[#0A0F1C]" />
                      <div className="h-3 w-full rounded bg-[#E5E7EB] mt-2" />
                      <div className="h-3 w-4/5 rounded bg-[#E5E7EB]" />
                      <div className="flex gap-3 mt-3">
                        <div className="h-9 w-28 rounded-lg bg-[#1A73FF]" />
                        <div className="h-9 w-28 rounded-lg border border-[#E5E7EB] bg-white" />
                      </div>
                    </div>
                    <div className="w-64 flex-shrink-0 rounded-xl bg-white border border-[#E5E7EB] p-5 flex flex-col gap-3 hidden lg:flex">
                      <div className="h-2 w-20 rounded bg-[#E5E7EB]" />
                      <div className="h-20 rounded-lg bg-[#EFF6FF] flex items-end px-3 pb-2 gap-1">
                        {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-[#1A73FF]"
                            style={{ height: `${h}%`, opacity: 0.4 + h / 200 }}
                          />
                        ))}
                      </div>
                      <div className="h-2 w-16 rounded bg-[#E5E7EB]" />
                      <div className="h-2 w-12 rounded bg-[#E5E7EB]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-32 border-t border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#0A0F1C] tracking-tight leading-[1.08]">
              Start with a website.<br />Add growth when you&apos;re ready.
            </h2>
            <p className="text-[#4B5563] text-base leading-relaxed max-w-md">
              Launch with a professional website today and expand as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
