import Link from "next/link";
import { BarChart3, CreditCard, ExternalLink, FileText, MessageSquare, ArrowRight } from "lucide-react";
import DashboardStatCard from "@/components/DashboardStatCard";

// Mock data - will be replaced with Supabase queries in Phase 5+
const mockClient = {
  name: "Acme Roofing Co.",
  websiteUrl: "https://acmeroofing.com",
  plan: "Growth",
  billingStatus: "Active",
  nextBillingDate: "June 15, 2026",
};

const mockStats = [
  { icon: BarChart3, label: "Monthly Visitors", value: "4,821", trend: "up" as const, trendValue: "+12%" },
  { icon: BarChart3, label: "Page Views", value: "12,340", trend: "up" as const, trendValue: "+8%" },
  { icon: MessageSquare, label: "Open Requests", value: "2", trend: "neutral" as const, trendValue: "Active" },
  { icon: CreditCard, label: "Plan", value: "Growth", subtext: "Next bill: Jun 15, 2026" },
];

const mockEditRequests = [
  { id: 1, title: "Update homepage headline", status: "In Progress", created: "May 28, 2026" },
  { id: 2, title: "Add new service to services page", status: "New", created: "May 30, 2026" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#F8FAFC]">
            Welcome back, {mockClient.name}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <a
              href={mockClient.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#2F80FF] hover:text-[#44D9FF] transition-colors"
            >
              {mockClient.websiteUrl} <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#94A3B8] text-xs">|</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(47,128,255,0.12)] text-[#2F80FF] font-semibold">
              {mockClient.plan}
            </span>
          </div>
        </div>
        <Link
          href="/dashboard/edit-requests"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl gradient-blue glow-blue-sm hover:opacity-90 transition-opacity w-fit"
        >
          New Edit Request
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((stat) => (
          <DashboardStatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Analytics summary */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Traffic (last 7 days)</h2>
            <Link href="/dashboard/analytics" className="text-xs text-[#2F80FF] hover:text-[#44D9FF] transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex items-end gap-1 h-20">
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: `rgba(47, 128, 255, ${0.25 + (h / 100) * 0.5})`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-[#94A3B8]">
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <span key={d} className="flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>

        {/* Edit requests */}
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Recent Edit Requests</h2>
            <Link href="/dashboard/edit-requests" className="text-xs text-[#2F80FF] hover:text-[#44D9FF] transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {mockEditRequests.map((req) => (
              <div key={req.id} className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm text-[#F8FAFC] leading-snug">{req.title}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{req.created}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    req.status === "New"
                      ? "bg-[rgba(68,217,255,0.1)] text-[#44D9FF]"
                      : req.status === "In Progress"
                      ? "bg-[rgba(47,128,255,0.12)] text-[#2F80FF]"
                      : "bg-[rgba(148,163,184,0.1)] text-[#94A3B8]"
                  }`}
                >
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Billing + report */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="glass-card rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Billing</h2>
              <Link href="/dashboard/billing" className="text-xs text-[#2F80FF] hover:text-[#44D9FF] transition-colors flex items-center gap-1">
                Manage <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#94A3B8]">Status</span>
              <span className="text-[#44D9FF] font-semibold">{mockClient.billingStatus}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#94A3B8]">Next bill</span>
              <span className="text-[#F8FAFC]">{mockClient.nextBillingDate}</span>
            </div>
          </div>
          <div className="glass-card rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-[#F8FAFC] text-sm">Latest Report</h2>
              <Link href="/dashboard/reports" className="text-xs text-[#2F80FF] hover:text-[#44D9FF] transition-colors flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div>
              <p className="text-sm text-[#F8FAFC]">May 2026 Performance Report</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">Traffic up 12%. 3 SEO improvements applied.</p>
            </div>
            <Link href="/dashboard/reports" className="text-xs text-[#2F80FF] hover:text-[#44D9FF] transition-colors flex items-center gap-1 w-fit">
              <FileText className="w-3 h-3" /> View report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
