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
      className={`relative rounded-lg p-8 flex flex-col gap-6 transition-all ${
        highlighted
          ? "border border-[#1A73FF] bg-[#161E2E] glow-blue"
          : "glass-card hover:border-[rgba(26,115,255,0.25)]"
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
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A73FF]">{name}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-bold text-4xl text-[#F5F5F5]">{price}</span>
          <span className="text-[#9CA3AF] text-sm">/month</span>
        </div>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-[#1A73FF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
            <span className="text-sm text-[#9CA3AF]">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`w-full py-3 rounded-md text-sm font-semibold text-center transition-all ${
          highlighted
            ? "bg-[#1A73FF] text-white hover:bg-[#1557CC]"
            : "border border-[rgba(229,231,235,0.15)] text-[#F5F5F5] hover:border-[rgba(26,115,255,0.4)] hover:bg-[rgba(26,115,255,0.06)]"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
