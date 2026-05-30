import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="glass-card rounded-lg p-6 flex flex-col gap-4 hover:border-[rgba(26,115,255,0.3)] transition-colors group">
      <div className="w-10 h-10 rounded-md bg-[rgba(26,115,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(26,115,255,0.18)] transition-colors border border-[rgba(26,115,255,0.15)]">
        <Icon className="w-5 h-5 text-[#1A73FF]" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading font-semibold text-[#F5F5F5] text-base">{title}</h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
