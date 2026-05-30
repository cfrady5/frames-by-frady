import { LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export default function DashboardStatCard({
  icon: Icon,
  label,
  value,
  subtext,
  trend,
  trendValue,
}: DashboardStatCardProps) {
  return (
    <div className="glass-card rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-md bg-[rgba(26,115,255,0.1)] border border-[rgba(26,115,255,0.15)] flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#1A73FF]" strokeWidth={1.75} />
        </div>
        {trend && trendValue && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded ${
              trend === "up"
                ? "bg-[rgba(26,115,255,0.12)] text-[#1A73FF]"
                : trend === "down"
                ? "bg-[rgba(239,68,68,0.1)] text-red-400"
                : "bg-[rgba(156,163,175,0.1)] text-[#9CA3AF]"
            }`}
          >
            {trendValue}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-heading font-bold text-[#F5F5F5]">{value}</p>
        <p className="text-sm text-[#9CA3AF] mt-0.5">{label}</p>
        {subtext && <p className="text-xs text-[#9CA3AF] mt-1 opacity-70">{subtext}</p>}
      </div>
    </div>
  );
}
