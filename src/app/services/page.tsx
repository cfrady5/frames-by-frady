import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ─── Data ───────────────────────────────────────────────────────────── */

const metrics = [
  { value: "3 weeks", label: "Average launch time" },
  { value: "99.9%",   label: "Uptime" },
  { value: "1",       label: "Team. One subscription." },
  { value: "0",       label: "Long-term contracts" },
];

const pillars = [
  {
    label: "Website Design",
    headline: "A site that earns trust on the first visit.",
    description:
      "First impressions happen in milliseconds. We design websites that immediately feel credible, clean, and built for your type of business.",
    features: [
      "Designed around your business",
      "Mobile-first on every screen",
      "Built to move visitors to action",
    ],
    visual: "design",
  },
  {
    label: "Managed Hosting",
    headline: "Your site stays live. You stay focused.",
    description:
      "We handle servers, SSL, updates, and performance. You don't manage anything. Your site just works.",
    features: [
      "Fast, secure, and maintained",
      "99.9% uptime monitored",
      "Updates handled for you",
    ],
    visual: "hosting",
  },
  {
    label: "Growth Support",
    headline: "Grow without adding to your to-do list.",
    description:
      "We track performance, improve search rankings, and send you a plain-English report every month. You see results. We do the work.",
    features: [
      "Local SEO and search visibility",
      "Real analytics, clear reporting",
      "Continuous improvement",
    ],
    visual: "growth",
  },
];

const differentiators = [
  {
    headline: "Not a project. A partnership.",
    body: "Most agencies hand off a site and disappear. We stick around — handling updates, monitoring performance, and improving your presence month after month.",
  },
  {
    headline: "One subscription. Everything included.",
    body: "No juggling a developer, a hosting provider, and an SEO consultant. We handle all of it under one plan.",
  },
  {
    headline: "Built for small businesses, not enterprise.",
    body: "We keep things simple. No bloated contracts, no unnecessary complexity. Just what your business actually needs to grow online.",
  },
];

/* ─── Visuals ─────────────────────────────────────────────────────────── */

function DesignVisual() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-[#F0F4FF] flex flex-col shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-[#E5E7EB] flex-shrink-0">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          ))}
        </div>
        <div className="flex-1 mx-3 h-4 rounded-md bg-[#F5F5F5] border border-[#E5E7EB] flex items-center px-2.5">
          <span className="text-[9px] text-[#9CA3AF] font-medium">yoursite.com</span>
        </div>
      </div>
      {/* Page */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Nav */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#F3F4F6]">
          <div className="h-3 w-20 rounded bg-[#0A0F1C]" />
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 w-8 rounded bg-[#D1D5DB]" />
            ))}
            <div className="h-5 w-14 rounded-md bg-[#1A73FF]" />
          </div>
        </div>
        {/* Hero */}
        <div className="flex gap-5 px-5 py-5 bg-white flex-1">
          <div className="flex-1 flex flex-col gap-2.5 pt-1">
            <div className="h-5 w-full rounded-md bg-[#0A0F1C]" />
            <div className="h-5 w-4/5 rounded-md bg-[#0A0F1C]" />
            <div className="h-5 w-3/5 rounded-md bg-[#0A0F1C]" />
            <div className="h-2 w-full rounded bg-[#E5E7EB] mt-2" />
            <div className="h-2 w-3/4 rounded bg-[#E5E7EB]" />
            <div className="flex gap-2 mt-4">
              <div className="h-7 w-20 rounded-lg bg-[#1A73FF]" />
              <div className="h-7 w-20 rounded-lg border border-[#E5E7EB] bg-white" />
            </div>
          </div>
          {/* Right panel */}
          <div className="w-32 flex-shrink-0 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 flex flex-col gap-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]" />
            <div className="h-2 w-full rounded bg-[#E5E7EB]" />
            <div className="h-2 w-2/3 rounded bg-[#E5E7EB]" />
          </div>
        </div>
        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-0 border-t border-[#E5E7EB]">
          {["Reviews", "Projects", "Clients"].map((s) => (
            <div key={s} className="px-4 py-3 flex flex-col gap-1 border-r last:border-r-0 border-[#E5E7EB] bg-white">
              <div className="h-3 w-8 rounded bg-[#0A0F1C]" />
              <div className="h-1.5 w-12 rounded bg-[#D1D5DB]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HostingVisual() {
  const segments = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col gap-3 p-5 bg-[#0A0F1C]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-white/60 tracking-wide uppercase">System Status</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-[10px] font-semibold text-[#22C55E]">All systems operational</span>
        </div>
      </div>

      {/* Uptime number */}
      <div className="flex flex-col gap-0.5 py-2">
        <span className="font-heading font-bold text-5xl text-white tracking-tight">99.9%</span>
        <span className="text-xs text-white/40">Uptime — last 30 days</span>
      </div>

      {/* Segment bar */}
      <div className="flex gap-0.5 h-6">
        {segments.map((up, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: up ? "#1A73FF" : "#EF4444", opacity: up ? 0.7 + i * 0.01 : 1 }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-[9px] text-white/30">30 days ago</span>
        <span className="text-[9px] text-white/30">Today</span>
      </div>

      {/* Status rows */}
      <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
        {[
          { name: "Website", status: "Operational" },
          { name: "SSL Certificate", status: "Active" },
          { name: "Performance", status: "Optimal" },
        ].map((row) => (
          <div key={row.name} className="flex items-center justify-between">
            <span className="text-xs text-white/50">{row.name}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-[10px] text-white/60">{row.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthVisual() {
  // SVG line chart points for a smooth upward curve
  const points = [
    [0, 80], [14, 72], [28, 75], [43, 60], [57, 52], [71, 38], [85, 28], [100, 12]
  ];
  const svgPoints = points.map(([x, y]) => `${x * 2.4},${y}`).join(" ");
  const areaPoints = `0,80 ${svgPoints} 240,80`;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col gap-3 p-5 bg-white border border-[#E5E7EB]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wide">Organic Search Traffic</span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="font-heading font-bold text-3xl text-[#0A0F1C]">1,284</span>
            <span className="text-xs font-semibold text-[#22C55E] bg-[#F0FDF4] px-1.5 py-0.5 rounded">↑ 34%</span>
          </div>
        </div>
        <span className="text-[10px] text-[#D1D5DB]">Last 3 months</span>
      </div>

      {/* SVG chart */}
      <div className="flex-1 relative">
        <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A73FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1A73FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill="url(#grad)" />
          <polyline
            points={svgPoints}
            fill="none"
            stroke="#1A73FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* End dot */}
          <circle cx="240" cy="12" r="3" fill="#1A73FF" />
        </svg>
      </div>

      {/* Stat chips */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#F3F4F6]">
        {[
          { label: "Avg position", value: "4.2" },
          { label: "Monthly clicks", value: "312" },
          { label: "Indexed pages", value: "18" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col gap-0.5">
            <span className="font-heading font-semibold text-sm text-[#0A0F1C]">{s.value}</span>
            <span className="text-[9px] text-[#9CA3AF]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  design:  <DesignVisual />,
  hosting: <HostingVisual />,
  growth:  <GrowthVisual />,
};

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="py-28 md:py-40 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A73FF]">
              Services
            </p>
            <h1 className="font-heading font-bold text-5xl sm:text-[64px] text-[#0A0F1C] tracking-tight leading-[1.04]">
              Everything your business needs online.{" "}
              <span className="text-[#9CA3AF]">Nothing it doesn&apos;t.</span>
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed max-w-lg">
              One subscription. Professional website, managed hosting, and growth support — all handled for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/pricing" className="btn-primary text-sm px-6 py-3">
                View Pricing
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-6 py-3">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* ── Metrics strip ─────────────────────────────────────────── */}
        <section className="border-b border-[#E5E7EB] bg-[#F8F9FB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E7EB]">
              {metrics.map((m) => (
                <div key={m.label} className="py-8 px-8 flex flex-col gap-1">
                  <span className="font-heading font-bold text-2xl text-[#0A0F1C] tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-xs text-[#6B7280]">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Alternating service blocks ───────────────────────────── */}
        {pillars.map((p, i) => {
          const isReversed = i % 2 === 1;
          return (
            <section
              key={p.label}
              className={`border-b border-[#E5E7EB] ${isReversed ? "bg-[#F8F9FB]" : "bg-white"}`}
            >
              <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="flex flex-col gap-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A73FF]">
                      {p.label}
                    </p>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight leading-[1.1]">
                      {p.headline}
                    </h2>
                    <p className="text-[#4B5563] text-base leading-relaxed">
                      {p.description}
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#4B5563]">
                          <span className="w-1 h-1 rounded-full bg-[#1A73FF] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="h-80 lg:h-[420px]">
                    {visuals[p.visual]}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Why Frames ───────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A73FF] mb-5">
                Why Frames by Frady
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0F1C] tracking-tight leading-[1.1]">
                Different from a freelancer.<br />Simpler than an agency.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
              {differentiators.map((d) => (
                <div key={d.headline} className="flex flex-col gap-4 py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                  <h3 className="font-heading font-semibold text-lg text-[#0A0F1C] leading-snug">
                    {d.headline}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="py-32 lg:py-40 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-7">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#0A0F1C] tracking-tight leading-[1.06]">
              Your business deserves a website that actually works for it.
            </h2>
            <p className="text-[#4B5563] text-base leading-relaxed max-w-sm">
              See our plans and pick one that fits where you are right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
