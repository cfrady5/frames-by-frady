interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  titleClassName?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">
          {label}
        </p>
      )}
      <h2
        className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F5] leading-[1.1] tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-[#9CA3AF] leading-relaxed ${centered ? "max-w-2xl" : "max-w-xl"} text-base sm:text-lg`}>
          {description}
        </p>
      )}
    </div>
  );
}
