interface PortfolioCardProps {
  projectType: string;
  title: string;
  outcome: string;
  services: string[];
  gradient?: string;
}

export default function PortfolioCard({
  projectType,
  title,
  outcome,
  services,
}: PortfolioCardProps) {
  return (
    <div className="glass-card rounded-lg overflow-hidden group hover:border-[rgba(26,115,255,0.3)] transition-all">
      {/* Mock browser preview */}
      <div className="h-44 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-3 rounded-md bg-[rgba(10,15,28,0.7)] border border-[rgba(229,231,235,0.08)] flex flex-col">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[rgba(229,231,235,0.06)]">
            <div className="w-2 h-2 rounded-full bg-[rgba(229,231,235,0.15)]" />
            <div className="w-2 h-2 rounded-full bg-[rgba(229,231,235,0.15)]" />
            <div className="w-2 h-2 rounded-full bg-[rgba(229,231,235,0.15)]" />
            <div className="flex-1 mx-2 h-3 rounded bg-[rgba(229,231,235,0.05)] max-w-32" />
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-3 rounded bg-[rgba(26,115,255,0.3)] w-2/3" />
            <div className="h-2 rounded bg-[rgba(229,231,235,0.08)] w-full" />
            <div className="h-2 rounded bg-[rgba(229,231,235,0.08)] w-4/5" />
            <div className="h-6 rounded bg-[rgba(26,115,255,0.2)] w-1/3 mt-1" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">
          {projectType}
        </p>
        <h3 className="font-heading font-semibold text-[#F5F5F5] text-base leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{outcome}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {services.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-xs rounded bg-[rgba(26,115,255,0.1)] text-[#1A73FF] border border-[rgba(26,115,255,0.15)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
