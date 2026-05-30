"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import DashboardStatCard from "@/components/DashboardStatCard";
import { BarChart3, Globe, Monitor, Smartphone, Users } from "lucide-react";

const trafficData = [
  { day: "May 1", visitors: 120 },
  { day: "May 5", visitors: 190 },
  { day: "May 10", visitors: 160 },
  { day: "May 15", visitors: 240 },
  { day: "May 20", visitors: 210 },
  { day: "May 25", visitors: 280 },
  { day: "May 30", visitors: 310 },
];

const topPages = [
  { page: "/", views: 2840, label: "Home" },
  { page: "/services", views: 1120, label: "Services" },
  { page: "/pricing", views: 890, label: "Pricing" },
  { page: "/contact", views: 640, label: "Contact" },
  { page: "/about", views: 430, label: "About" },
];

const topReferrers = [
  { source: "Google", visits: 1840, pct: 38 },
  { source: "Direct", visits: 1200, pct: 25 },
  { source: "Facebook", visits: 580, pct: 12 },
  { source: "Instagram", visits: 420, pct: 9 },
  { source: "Other", visits: 781, pct: 16 },
];

const stats = [
  { icon: Users, label: "Total Visitors", value: "4,821", trend: "up" as const, trendValue: "+12%" },
  { icon: BarChart3, label: "Page Views", value: "12,340", trend: "up" as const, trendValue: "+8%" },
  { icon: Globe, label: "Avg. Session", value: "2m 14s", trend: "up" as const, trendValue: "+5%" },
  { icon: BarChart3, label: "Bounce Rate", value: "41%", trend: "down" as const, trendValue: "-3%" },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#F8FAFC]">Analytics</h1>
        <p className="text-sm text-[#94A3B8] mt-1">May 2026 overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <DashboardStatCard key={s.label} {...s} />)}
      </div>

      {/* Traffic chart */}
      <div className="glass-card rounded-xl p-6 flex flex-col gap-5">
        <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Visitor Traffic</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={trafficData} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#0B1422", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 8, color: "#F8FAFC", fontSize: 12 }}
              cursor={{ fill: "rgba(47,128,255,0.06)" }}
            />
            <Bar dataKey="visitors" fill="#2F80FF" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top pages */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4 lg:col-span-2">
          <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Top Pages</h2>
          <div className="flex flex-col gap-3">
            {topPages.map((p) => (
              <div key={p.page} className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#94A3B8] min-w-0 truncate">{p.label} <span className="text-xs opacity-60">{p.page}</span></span>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-24 h-1.5 rounded-full bg-[rgba(148,163,184,0.1)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2F80FF]"
                      style={{ width: `${(p.views / topPages[0].views) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-[#F8FAFC] font-medium w-12 text-right">{p.views.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device + referrers */}
        <div className="flex flex-col gap-4">
          <div className="glass-card rounded-xl p-5 flex flex-col gap-3">
            <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Devices</h2>
            {[
              { icon: Monitor, label: "Desktop", pct: 52 },
              { icon: Smartphone, label: "Mobile", pct: 44 },
              { icon: Monitor, label: "Tablet", pct: 4 },
            ].map(({ icon: Icon, label, pct }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#94A3B8]" strokeWidth={1.5} />
                <span className="text-sm text-[#94A3B8] flex-1">{label}</span>
                <span className="text-sm font-semibold text-[#F8FAFC]">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-xl p-5 flex flex-col gap-3">
            <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Top Referrers</h2>
            {topReferrers.map((r) => (
              <div key={r.source} className="flex items-center justify-between">
                <span className="text-sm text-[#94A3B8]">{r.source}</span>
                <span className="text-sm font-semibold text-[#F8FAFC]">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
