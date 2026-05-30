"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import DashboardStatCard from "@/components/DashboardStatCard";
import { BarChart3, Globe, Monitor, Smartphone, Users } from "lucide-react";

const trafficData = [
  { day: "May 1", visitors: 120 }, { day: "May 5", visitors: 190 }, { day: "May 10", visitors: 160 },
  { day: "May 15", visitors: 240 }, { day: "May 20", visitors: 210 }, { day: "May 25", visitors: 280 }, { day: "May 30", visitors: 310 },
];

const topPages = [
  { page: "/", views: 2840, label: "Home" },
  { page: "/services", views: 1120, label: "Services" },
  { page: "/pricing", views: 890, label: "Pricing" },
  { page: "/contact", views: 640, label: "Contact" },
  { page: "/about", views: 430, label: "About" },
];

const topReferrers = [
  { source: "Google", pct: 38 }, { source: "Direct", pct: 25 },
  { source: "Facebook", pct: 12 }, { source: "Instagram", pct: 9 }, { source: "Other", pct: 16 },
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
        <h1 className="font-heading font-bold text-2xl text-[#0A0F1C]">Analytics</h1>
        <p className="text-sm text-[#6B7280] mt-1">May 2026 overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <DashboardStatCard key={s.label} {...s} />)}
      </div>
      <div className="agency-card rounded-lg p-6 flex flex-col gap-5">
        <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Visitor Traffic</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={trafficData} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#9CA3AF", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#9CA3AF", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 6, color: "#0A0F1C", fontSize: 12 }} cursor={{ fill: "rgba(26,115,255,0.04)" }} />
            <Bar dataKey="visitors" fill="#1A73FF" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="agency-card rounded-lg p-6 flex flex-col gap-4 lg:col-span-2">
          <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Top Pages</h2>
          <div className="flex flex-col gap-3">
            {topPages.map((p) => (
              <div key={p.page} className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#6B7280] min-w-0 truncate">{p.label} <span className="text-xs opacity-50">{p.page}</span></span>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-24 h-1.5 rounded-full bg-[#F3F4F6] overflow-hidden">
                    <div className="h-full rounded-full bg-[#1A73FF]" style={{ width: `${(p.views / topPages[0].views) * 100}%` }} />
                  </div>
                  <span className="text-sm text-[#0A0F1C] font-medium w-12 text-right">{p.views.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="agency-card rounded-lg p-5 flex flex-col gap-3">
            <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Devices</h2>
            {[{ icon: Monitor, label: "Desktop", pct: 52 }, { icon: Smartphone, label: "Mobile", pct: 44 }, { icon: Monitor, label: "Tablet", pct: 4 }].map(({ icon: Icon, label, pct }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                <span className="text-sm text-[#6B7280] flex-1">{label}</span>
                <span className="text-sm font-semibold text-[#0A0F1C]">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="agency-card rounded-lg p-5 flex flex-col gap-3">
            <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Top Referrers</h2>
            {topReferrers.map((r) => (
              <div key={r.source} className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">{r.source}</span>
                <span className="text-sm font-semibold text-[#0A0F1C]">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
