import Link from "next/link";
import { Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ─── Service blocks ─────────────────────────────────────────────────── */
const pillars = [
  {
    label: "Website Design",
    headline: "A website that looks as good as your business.",
    description:
      "We design clean, modern websites built around your brand. Every layout is intentional — structured to create trust and move visitors toward action.",
    features: [
      "Custom layout and visual direction",
      "Mobile-first, responsive design",
      "Conversion-focused page structure",
    ],
    visual: "design",
  },
  {
    label: "Managed Hosting",
    headline: "Your site stays fast, secure, and up.",
    description:
      "We handle the infrastructure so you never think about servers, updates, or downtime. Your site just works.",
    features: [
      "Managed hosting and SSL",
      "Uptime and performance monitoring",
      "Ongoing updates and maintenance",
    ],
    visual: "hosting",
  },
  {
    label: "Growth Support",
    headline: "Improve your online presence, month over month.",
    description:
      "Once your site is live, we keep working. SEO, analytics, and reporting to help you understand what's working and where to grow.",
    features: [
      "SEO optimization and setup",
      "Analytics dashboard and tracking",
      "Monthly performance reports",
    ],
    visual: "growth",
  },
];

/* ─── Visual placeholders ────────────────────────────────────────────── */
function DesignVisual() {
  return (
    <div className="w-full h-full bg-[#F0F4FF] rounded-2xl overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E5E7EB] bg-white flex-shrink-0">
        <div className="flex gap-1.5">
          {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />)}
        </div>
        <div className="flex-1 mx-3 h-4 rounded bg-[#F8F9FB] border border-[#E5E7EB] flex items-center px-2">
          <span className="text-[9px] text-[#9CA3AF]">yoursite.com</span>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded bg-[#0A0F1C]" />
          <div className="flex gap-2">
            {[1,2,3].map(i => <div key={i} className="h-1.5 w-8 rounded bg-[#D1D5DB]" />)}
            <div className="h-5 w-14 rounded-md bg-[#1A73FF]" />
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2.5">
          <div className="h-6 w-4/5 rounded-md bg-[#0A0F1C]" />
          <div className="h-6 w-3/5 rounded-md bg-[#0A0F1C]" />
          <div className="h-2 w-full rounded bg-[#D1D5DB] mt-2" />
          <div className="h-2 w-3/4 rounded bg-[#D1D5DB]" />
          <div className="flex gap-2 mt-3">
            <div className="h-8 w-24 rounded-lg bg-[#1A73FF]" />
            <div className="h-8 w-24 rounded-lg border border-[#E5E7EB] bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-lg bg-white border border-[#E5E7EB] p-3 flex flex-col gap-1.5">
              <div className="w-4 h-4 rounded bg-[#DBEAFE]" />
              <div className="h-1.5 w-full rounded bg-[#E5E7EB]" />
              <div className="h-1.5 w-2/3 rounded bg-[#E5E7EB]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HostingVisual() {
  const bars = [72, 85, 91, 88, 95, 89, 97];
  return (
    <div className="w-full h-full bg-[#F8F9FB] rounded-2xl overflow-hidden flex flex-col gap-4 p-6">
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="h-2 w-16 rounded bg-[#E5E7EB]" />
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-bold text-2xl text-[#0A0F1C]">99.9%</span>
              <span className="text-xs text-[#6B7280]">uptime</span>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[10px] font-semibold text-[#16A34A]">
            All systems live
          </div>
        </div>
        <div className="flex items-end gap-1 h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#1A73FF]"
              style={{ height: `${h}%`, opacity: 0.4 + h / 200 }}
            />
          ))}
        </div>
        <div className="h-px bg-[#E5E7EB]" />
        <div className="flex flex-col gap-2">
          {["SSL certificate active", "Last backup: today", "Performance: optimal"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A73FF]" />
              <span className="text-xs text-[#6B7280]">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 rounded-sm bg-[#1A73FF]" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-2 w-32 rounded bg-[#E5E7EB]" />
          <div className="h-1.5 w-20 rounded bg-[#F3F4F6]" />
        </div>
        <div className="text-[10px] font-semibold text-[#16A34A]">Done</div>
      </div>
    </div>
  );
}

function GrowthVisual() {
  const weeks = ["W1","W2","W3","W4","W5","W6","W7","W8"];
  const visits = [40, 52, 48, 65, 70, 78, 85, 94];
  return (
    <div className="w-full h-full bg-[#F8F9FB] rounded-2xl overflow-hidden p-6 flex flex-col gap-4">
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-[#6B7280]">Organic visits</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-bold text-2xl text-[#0A0F1C]">1,284</span>
              <span className="text-xs font-semibold text-[#16A34A]">↑ 34%</span>
            </div>
          </div>
          <div className="text-[10px] text-[#9CA3AF]">Last 8 weeks</div>
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {visits.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-[#1A73FF]"
                style={{ height: `${h}%`, opacity: 0.35 + h / 200 }}
              />
              <span className="text-[8px] text-[#9CA3AF]">{weeks[i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Avg position", value: "4.2", change: "↑ 1.8" },
          { label: "Clicks (mo)", value: "312", change: "↑ 22%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex flex-col gap-1">
            <span className="text-[10px] text-[#9CA3AF]">{stat.label}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-bold text-lg text-[#0A0F1C]">{stat.value}</span>
              <span className="text-[10px] font-semibold text-[#16A34A]">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  design: <DesignVisual />,
  hosting: <HostingVisual />,
  growth: <GrowthVisual />,
};

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
              Websites, hosting, and growth support in one place.
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed max-w-xl">
              A simpler way for small businesses to launch, manage, and improve their online presence.
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

        {/* ── Alternating service blocks ─────────────────────────────── */}
        <section className="bg-white">
          {pillars.map((p, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={p.label}
                className={`border-b border-[#E5E7EB] ${i % 2 === 1 ? "bg-[#F8F9FB]" : "bg-white"}`}
              >
                <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>

                    {/* Text */}
                    <div className="flex flex-col gap-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A73FF]">
                        {p.label}
                      </p>
                      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight leading-[1.1]">
                        {p.headline}
                      </h2>
                      <p className="text-[#4B5563] text-base leading-relaxed">
                        {p.description}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-[#1A73FF] flex-shrink-0" strokeWidth={2.5} />
                            <span className="text-sm text-[#4B5563]">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className="h-72 sm:h-80 lg:h-96">
                      {visuals[p.visual]}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Process ───────────────────────────────────────────────── */}
        <section className="py-24 bg-white border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight">
              Launch. Manage. Grow.
            </h2>
            <div className="relative">
              <div className="hidden sm:block absolute top-2 left-2 right-2 h-px bg-[#E5E7EB]" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
                {[
                  { title: "Launch", desc: "Professional website design and launch." },
                  { title: "Manage", desc: "Hosting, updates, and performance handled." },
                  { title: "Grow",   desc: "Reporting, SEO, and ongoing optimization." },
                ].map((s) => (
                  <div key={s.title} className="flex flex-col gap-4">
                    <div className="w-4 h-4 rounded-full border-2 border-[#1A73FF] bg-white" />
                    <h3 className="font-heading font-semibold text-[#0A0F1C] text-base">{s.title}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-32 border-t border-[#E5E7EB] bg-[#F8F9FB]">
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
