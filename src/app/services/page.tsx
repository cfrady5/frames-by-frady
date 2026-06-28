import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, managed hosting, local SEO, and Google Business Profile help for local service businesses — contractors, lawncare, home services, restaurants, and professional services.",
  openGraph: {
    title: "Services | Frames by Frady",
    description:
      "Clean websites, managed hosting, and local growth support for service businesses that rely on calls, quotes, and trust.",
  },
};

/* ─── Data ───────────────────────────────────────────────────────────── */

const metrics = [
  { value: "~3 weeks",  label: "Typical time to launch" },
  { value: "99.9%",     label: "Managed hosting uptime target" },
  { value: "Monthly",   label: "Reports delivered to your inbox" },
];

/* ─── Google Business Profile checklist ──────────────────────────────── */
const gbpItems = [
  "Google Business Profile setup or cleanup",
  "Accurate service categories",
  "Photos and up-to-date business info",
  "Review link setup to make feedback easy",
  "Local keywords for your service area",
  "Monthly profile updates where applicable",
];

const pillars = [
  {
    label: "Website Design",
    headline: "A website that represents your business the right way.",
    description:
      "We take time to understand your business before we design anything. The result is a site that feels intentional — clean, professional, and built for the people you're trying to reach.",
    features: [
      "Designed around your business",
      "Looks right on every device",
      "Easy to navigate, easy to contact you",
    ],
    visual: "design",
  },
  {
    label: "Managed Hosting",
    headline: "We keep your website secure, updated, and running.",
    description:
      "Once your site is live, we handle everything behind the scenes — security, performance, updates. You don't manage anything. We do.",
    features: [
      "Fast, secure, and maintained",
      "Monitored around the clock",
      "Updates handled for you",
    ],
    visual: "hosting",
  },
  {
    label: "Growth Support",
    headline: "Know how your website is performing — without the complexity.",
    description:
      "Every month, we send you a clear report showing what's working and where things can improve. No dashboards to learn, no data to interpret. Just clear, honest feedback.",
    features: [
      "Local SEO and search visibility",
      "Monthly reports in plain English",
      "We flag what isn't working",
    ],
    visual: "growth",
  },
];

const beliefs = [
  {
    headline: "We put our name on everything we build.",
    body: "Every site we launch reflects directly on us. That means we hold ourselves to a standard we'd be proud of — not just at launch, but years down the line.",
  },
  {
    headline: "We're here long after launch.",
    body: "Most agencies hand off a site and move on. We stay — handling updates, monitoring performance, and improving things month after month. We're invested in your success.",
  },
  {
    headline: "We keep things honest and simple.",
    body: "No hidden fees, no technical jargon, no unnecessary complexity. Just clear communication, fair pricing, and work you can trust.",
  },
];

/* ─── Visuals ─────────────────────────────────────────────────────────── */

function DesignVisual() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] flex flex-col shadow-[0_2px_32px_rgba(0,0,0,0.06)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8F9FB] border-b border-[#E5E7EB] flex-shrink-0">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          ))}
        </div>
        <div className="flex-1 mx-3 h-4 rounded-md bg-white border border-[#E5E7EB] flex items-center px-2.5">
          <span className="text-[9px] text-[#9CA3AF] font-medium">yoursite.com</span>
        </div>
      </div>
      {/* Page */}
      <div className="flex-1 overflow-hidden flex flex-col bg-white">
        {/* Nav */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#F3F4F6]">
          <div className="h-3 w-20 rounded bg-[#0A0F1C]" />
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-8 rounded bg-[#E5E7EB]" />
            ))}
            <div className="h-5 w-14 rounded-md bg-[#3BAE48]" />
          </div>
        </div>
        {/* Hero area */}
        <div className="flex gap-5 px-5 pt-5 pb-4 flex-1">
          <div className="flex-1 flex flex-col gap-2.5 pt-1">
            <div className="h-5 w-full rounded-md bg-[#0A0F1C]" />
            <div className="h-5 w-4/5 rounded-md bg-[#0A0F1C]" />
            <div className="h-5 w-3/5 rounded-md bg-[#E5E7EB]" />
            <div className="h-2 w-full rounded bg-[#F3F4F6] mt-1" />
            <div className="h-2 w-3/4 rounded bg-[#F3F4F6]" />
            <div className="flex gap-2 mt-3">
              <div className="h-7 w-20 rounded-lg bg-[#3BAE48]" />
              <div className="h-7 w-20 rounded-lg border border-[#E5E7EB]" />
            </div>
          </div>
          <div className="w-28 flex-shrink-0 rounded-xl bg-[#F8F9FB] border border-[#E5E7EB] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#EDF7EE] via-[#CDEBD2] to-[#EDF7EE]" />
          </div>
        </div>
        {/* Bottom strip */}
        <div className="grid grid-cols-3 border-t border-[#F3F4F6]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="px-4 py-3 flex flex-col gap-1.5 border-r last:border-r-0 border-[#F3F4F6]"
            >
              <div className="h-2.5 w-8 rounded bg-[#0A0F1C]" />
              <div className="h-1.5 w-12 rounded bg-[#E5E7EB]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HostingVisual() {
  const segments = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];
  const rows = [
    { label: "Website",        status: "Operational" },
    { label: "SSL Certificate", status: "Active" },
    { label: "Performance",    status: "Optimal" },
    { label: "Backups",        status: "Up to date" },
  ];
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] flex flex-col p-6 gap-5 shadow-[0_2px_32px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF]">
            Site Status
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-heading font-bold text-4xl text-[#0A0F1C] tracking-tight">
              99.9%
            </span>
            <span className="text-sm text-[#6B7280]">uptime</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="text-xs text-[#22C55E] font-medium">All systems running</span>
        </div>
      </div>

      {/* Segment bar */}
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-0.5 h-5">
          {segments.map((up, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                background: up ? "#3BAE48" : "#FCA5A5",
                opacity: up ? 0.55 + i * 0.012 : 1,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <span className="text-[9px] text-[#D1D5DB]">30 days ago</span>
          <span className="text-[9px] text-[#D1D5DB]">Today</span>
        </div>
      </div>

      {/* Status rows */}
      <div className="flex flex-col gap-0 border border-[#F3F4F6] rounded-xl overflow-hidden flex-1">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-4 py-3 ${
              i < rows.length - 1 ? "border-b border-[#F3F4F6]" : ""
            }`}
          >
            <span className="text-sm text-[#4B5563]">{row.label}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-xs text-[#6B7280]">{row.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthVisual() {
  const pts = [[0,78],[30,68],[60,72],[90,55],[120,48],[150,35],[180,22],[210,14],[240,8]];
  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `0,80 ${line} 240,80`;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] flex flex-col p-5 gap-4 shadow-[0_2px_32px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF]">
            Organic Traffic
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-heading font-bold text-4xl text-[#0A0F1C] tracking-tight">1,284</span>
            <span className="text-sm font-semibold text-[#22C55E]">↑ 34%</span>
          </div>
          <span className="text-xs text-[#9CA3AF]">vs. 3 months ago</span>
        </div>
      </div>

      {/* Line chart */}
      <div className="flex-1">
        <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3BAE48" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3BAE48" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={area} fill="url(#g)" />
          <polyline
            points={line}
            fill="none"
            stroke="#3BAE48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="240" cy="8" r="3.5" fill="#3BAE48" />
        </svg>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-0 border-t border-[#F3F4F6] pt-3">
        {[
          { label: "Avg. position", value: "4.2" },
          { label: "Monthly clicks", value: "312" },
          { label: "Pages indexed", value: "18" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col gap-0.5 pr-3">
            <span className="font-heading font-semibold text-base text-[#0A0F1C]">{s.value}</span>
            <span className="text-[10px] text-[#9CA3AF]">{s.label}</span>
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
        <section className="relative py-28 md:py-40 bg-[#070B14] border-b border-white/8 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full pointer-events-none animate-float"
            style={{ background: "radial-gradient(circle, rgba(59,174,72,0.10) 0%, transparent 70%)", filter: "blur(20px)" }}
          />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3BAE48] animate-fade-up">
              Services
            </p>
            <h1 className="font-heading font-bold text-5xl sm:text-[62px] text-white tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: "0.08s" }}>
              We build your website. Then we stick around.
            </h1>
            <p className="text-[#9CA8B8] text-lg leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
              Design, hosting, local SEO, and ongoing support for local service businesses — contractors, lawncare, home services, restaurants, and professional services that rely on calls, quotes, and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
              <Link href="/contact" className="group btn-primary text-sm px-6 py-3">
                Get a Free Audit
                <ArrowRight className="btn-arrow w-4 h-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost text-sm px-6 py-3">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── Metrics strip ─────────────────────────────────────────── */}
        <section className="border-b border-white/8 bg-[#0B121C]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 90} className="py-8 sm:px-10 first:pl-0 flex flex-col gap-1">
                  <span className="font-heading font-bold text-2xl text-white tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-sm text-[#9CA8B8]">{m.label}</span>
                </Reveal>
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
              className={`border-b border-white/8 ${isReversed ? "bg-[#0B121C]" : "bg-[#070B14]"}`}
            >
              <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text */}
                  <Reveal className="flex flex-col gap-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3BAE48]">
                      {p.label}
                    </p>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                      {p.headline}
                    </h2>
                    <p className="text-[#9CA8B8] text-base leading-relaxed">
                      {p.description}
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#9CA8B8]">
                          <span className="w-1 h-1 rounded-full bg-[#3BAE48] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  {/* Visual */}
                  <Reveal delay={120} className="h-80 lg:h-[420px] transition-transform duration-300 hover:-translate-y-1.5">
                    {visuals[p.visual]}
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Google Business Profile ─────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[#0B121C] border-b border-white/8">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#3BAE48]/12 border border-[#3BAE48]/25">
                <MapPin className="w-3.5 h-3.5 text-[#3BAE48]" strokeWidth={2} />
                <span className="text-xs font-semibold text-[#3BAE48]">Local visibility</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                Get found where customers are already searching.
              </h2>
              <p className="text-[#9CA8B8] text-base leading-relaxed">
                Most local customers find businesses through Google Maps and local search before they ever visit a website. We make sure your Google Business Profile is set up properly and working for you.
              </p>
              <Link href="/contact" className="group btn-primary text-sm px-6 py-3 self-start">
                Request an Audit
                <ArrowRight className="btn-arrow w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal delay={120} className="agency-card rounded-2xl p-7 sm:p-8 flex flex-col gap-4">
              {gbpItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3BAE48]/14 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#3BAE48]" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#E5E7EB]">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── What we believe ─────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[#070B14] border-b border-white/8">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
            <div className="max-w-lg">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                If our name is on it, it needs to be something we&apos;re proud of.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
              {beliefs.map((b, i) => (
                <Reveal
                  key={b.headline}
                  delay={i * 90}
                  className="flex flex-col gap-4 py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
                >
                  <h3 className="font-heading font-semibold text-base text-white leading-snug">
                    {b.headline}
                  </h3>
                  <p className="text-sm text-[#9CA8B8] leading-relaxed">{b.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="py-32 lg:py-40 bg-[#0B121C]">
          <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight leading-[1.06]">
              Let&apos;s build something you&apos;re proud of.
            </h2>
            <p className="text-[#9CA8B8] text-base leading-relaxed max-w-sm">
              Start with a free website audit. Tell us about your business and we&apos;ll take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="group btn-primary text-sm px-6 py-3">
                Get a Free Audit
                <ArrowRight className="btn-arrow w-4 h-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost text-sm px-6 py-3">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
