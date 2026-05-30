import { LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export default function DashboardStatCard({ icon: Icon, label, value, subtext, trend, trendValue }: DashboardStatCardProps) {
  return (
    <div className="agency-card rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#1A73FF]" strokeWidth={1.75} />
        </div>
        {trend && trendValue && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
            trend === "up" ? "bg-[#EFF6FF] text-[#1A73FF]"
            : trend === "down" ? "bg-red-50 text-red-500"
            : "bg-[#F5F5F5] text-[#6B7280]"
          }`}>
            {trendValue}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-heading font-bold text-[#0A0F1C]">{value}</p>
        <p className="text-sm text-[#6B7280] mt-0.5">{label}</p>
        {subtext && <p className="text-xs text-[#9CA3AF] mt-1">{subtext}</p>}
      </div>
    </div>
  );
}
