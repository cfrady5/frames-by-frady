import { Check, CreditCard, ExternalLink } from "lucide-react";

// TODO: Replace with Supabase client data + Stripe Customer Portal in Phase 7.
const mockBilling = {
  plan: "Growth",
  status: "Active",
  price: "$299",
  nextBillingDate: "June 15, 2026",
  cardLast4: "4242",
  cardBrand: "Visa",
};

const planFeatures = [
  "Custom website",
  "Hosting included",
  "Analytics dashboard",
  "Unlimited minor edits",
  "Monthly performance report",
  "SEO basics",
  "Priority support",
];

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#F8FAFC]">Billing</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Manage your plan and payment details</p>
      </div>

      {/* Current plan */}
      <div className="glass-card rounded-2xl p-8 border border-[rgba(47,128,255,0.2)]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2F80FF]">Current Plan</p>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-bold text-3xl text-[#F8FAFC]">{mockBilling.plan}</span>
              <span className="text-[#94A3B8] text-sm ml-1">{mockBilling.price}/month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#44D9FF]" />
              <span className="text-sm text-[#44D9FF] font-semibold">{mockBilling.status}</span>
            </div>
          </div>
          {/* TODO: Wire to Stripe Customer Portal in Phase 7 */}
          <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl gradient-blue glow-blue-sm hover:opacity-90 transition-opacity w-fit">
            <ExternalLink className="w-4 h-4" />
            Manage Billing
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-[rgba(148,163,184,0.12)] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-[#94A3B8] mb-1">Next billing date</p>
            <p className="text-sm font-semibold text-[#F8FAFC]">{mockBilling.nextBillingDate}</p>
          </div>
          <div>
            <p className="text-xs text-[#94A3B8] mb-1">Payment method</p>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#94A3B8]" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-[#F8FAFC]">
                {mockBilling.cardBrand} ending in {mockBilling.cardLast4}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Plan features */}
      <div className="glass-card rounded-xl p-6 flex flex-col gap-5">
        <h2 className="font-heading font-semibold text-[#F8FAFC] text-base">
          What is included in {mockBilling.plan}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {planFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#2F80FF] flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm text-[#94A3B8]">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upgrade prompt */}
      <div className="glass-card rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-heading font-semibold text-[#F8FAFC] text-sm">Need more?</p>
          <p className="text-xs text-[#94A3B8] mt-0.5">Upgrade to Premium for advanced analytics, landing pages, and a monthly strategy report.</p>
        </div>
        <a
          href="/pricing"
          className="text-sm font-semibold text-[#2F80FF] hover:text-[#44D9FF] transition-colors whitespace-nowrap"
        >
          View plans
        </a>
      </div>
    </div>
  );
}
