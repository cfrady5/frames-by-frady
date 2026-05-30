import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  paymentLink?: string;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  paymentLink,
  badge,
}: PricingCardProps) {
  const href = paymentLink || "/contact";

  return (
    <div
      className={`relative rounded-lg p-8 flex flex-col gap-6 transition-all card-hover ${
        highlighted
          ? "bg-[#0A0F1C] text-white border border-[#0A0F1C]"
          : "agency-card"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1A73FF] text-white">
            {badge}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className={`text-xs font-semibold uppercase tracking-widest ${highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`}>
          {name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading font-bold text-4xl ${highlighted ? "text-white" : "text-[#0A0F1C]"}`}>
            {price}
          </span>
          <span className={`text-sm ${highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>/month</span>
        </div>
        <p className={`text-sm leading-relaxed ${highlighted ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? "text-[#93C5FD]" : "text-[#1A73FF]"}`}
              strokeWidth={2.5}
            />
            <span className={`text-sm ${highlighted ? "text-[#D1D5DB]" : "text-[#6B7280]"}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`w-full py-3 rounded-md text-sm font-semibold text-center transition-all ${
          highlighted
            ? "bg-[#1A73FF] text-white hover:bg-[#1557CC]"
            : "border border-[#E5E7EB] text-[#0A0F1C] hover:border-[#D1D5DB] hover:bg-[#F9FAFB]"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
