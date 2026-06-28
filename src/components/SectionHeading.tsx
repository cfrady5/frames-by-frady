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
    <div className={`flex flex-col gap-3 ${centered ? "items-center text-center" : ""}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">
          {label}
        </p>
      )}
      <h2
        className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.08] tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-[#9CA8B8] leading-relaxed text-base sm:text-lg ${centered ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
