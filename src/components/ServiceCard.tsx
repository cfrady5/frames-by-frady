import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="agency-card card-hover rounded-lg p-6 flex flex-col gap-4">
      <div className="w-10 h-10 rounded-md bg-[#EFF6FF] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#1A73FF]" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading font-semibold text-[#0A0F1C] text-base">{title}</h3>
        <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
