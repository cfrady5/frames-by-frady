import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  projectType: string;
  title: string;
  outcome: string;
  services: string[];
}

export default function PortfolioCard({
  projectType,
  title,
  outcome,
  services,
}: PortfolioCardProps) {
  return (
    <div className="group agency-card lift rounded-2xl overflow-hidden flex flex-col">
      {/* Mock browser preview */}
      <div className="h-44 relative overflow-hidden gradient-blue-soft">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-3 rounded-lg bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(10,15,28,0.06)] flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#F3F4F6]">
            <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
            <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
            <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
            <div className="flex-1 mx-2 h-3 rounded bg-[#F3F4F6] max-w-32" />
          </div>
          {/* Page skeleton */}
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-3 rounded bg-[#3BAE48]/70 w-2/3" />
            <div className="h-2 rounded bg-[#E5E7EB] w-full" />
            <div className="h-2 rounded bg-[#E5E7EB] w-4/5" />
            <div className="h-6 rounded-md bg-[#3BAE48]/25 w-1/3 mt-1" />
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">
            {projectType}
          </p>
          <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] transition-all duration-200 group-hover:text-[#3BAE48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="font-heading font-semibold text-white text-base leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#9CA8B8] leading-relaxed flex-1">{outcome}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {services.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-xs rounded-md bg-[#3BAE48]/12 text-[#3BAE48] border border-[#3BAE48]/25"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
