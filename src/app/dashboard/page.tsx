import Link from "next/link";
import { BarChart3, CreditCard, ExternalLink, FileText, MessageSquare, ArrowRight } from "lucide-react";
import DashboardStatCard from "@/components/DashboardStatCard";

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

const mockRequests = [
  { id: 1, title: "Update homepage headline", status: "In Progress", created: "May 28, 2026" },
  { id: 2, title: "Add new service to services page", status: "New", created: "May 30, 2026" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#0A0F1C]">Welcome back, {mockClient.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <a href={mockClient.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[#3BAE48] hover:text-[#2E8C39] transition-colors">
              {mockClient.websiteUrl} <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#E5E7EB]">|</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#EDF7EE] text-[#3BAE48] font-semibold">{mockClient.plan}</span>
          </div>
        </div>
        <Link href="/dashboard/edit-requests" className="btn-primary text-sm w-fit">New Edit Request</Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((s) => <DashboardStatCard key={s.label} {...s} />)}
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic chart */}
        <div className="agency-card rounded-lg p-6 flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Traffic — last 7 days</h2>
            <Link href="/dashboard/analytics" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex items-end gap-1 h-20">
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-[#3BAE48]" style={{ height: `${h}%`, opacity: 0.35 + (h / 130) }} />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-[#9CA3AF]">
            {["M","T","W","T","F","S","S"].map((d,i) => <span key={i}>{d}</span>)}
          </div>
        </div>

        {/* Requests */}
        <div className="agency-card rounded-lg p-6 flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Recent Requests</h2>
            <Link href="/dashboard/edit-requests" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {mockRequests.map((r) => (
              <div key={r.id} className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm text-[#0A0F1C] leading-snug">{r.title}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{r.created}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${
                  r.status === "New" ? "bg-[#EDF7EE] text-[#3BAE48]" : "bg-[#F5F5F5] text-[#6B7280]"
                }`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Billing + report */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="agency-card rounded-lg p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Billing</h2>
              <Link href="/dashboard/billing" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors flex items-center gap-1">Manage <ArrowRight className="w-3 h-3" /></Link>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Status</span>
              <span className="text-[#3BAE48] font-semibold">{mockClient.billingStatus}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Next bill</span>
              <span className="text-[#0A0F1C]">{mockClient.nextBillingDate}</span>
            </div>
          </div>
          <div className="agency-card rounded-lg p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-[#0A0F1C] text-sm">Latest Report</h2>
              <Link href="/dashboard/reports" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
            </div>
            <p className="text-sm text-[#0A0F1C]">May 2026 Performance Report</p>
            <p className="text-xs text-[#6B7280]">Traffic up 12%. 3 SEO improvements applied.</p>
            <Link href="/dashboard/reports" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors flex items-center gap-1 w-fit">
              <FileText className="w-3 h-3" /> View report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
