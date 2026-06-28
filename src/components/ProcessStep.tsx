interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-md border border-[rgba(59,174,72,0.4)] bg-[rgba(59,174,72,0.08)] flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-bold text-sm text-[#3BAE48]">{number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[rgba(59,174,72,0.25)] to-transparent min-h-[2rem]" />
        )}
      </div>
      <div className="pb-10 flex flex-col gap-1.5 pt-1">
        <h3 className="font-heading font-semibold text-[#F5F5F5] text-base">{title}</h3>
        <p className="text-[#9CA3AF] leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
