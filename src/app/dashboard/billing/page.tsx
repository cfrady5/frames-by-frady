import { Check, CreditCard, ExternalLink } from "lucide-react";

// TODO: Replace with Supabase client data + Stripe Customer Portal in Phase 7.
const mockBilling = { plan: "Growth", status: "Active", price: "$299", nextBillingDate: "June 15, 2026", cardLast4: "4242", cardBrand: "Visa" };
const planFeatures = ["Custom website", "Hosting included", "Analytics dashboard", "Unlimited minor edits", "Monthly performance report", "SEO basics", "Priority support"];

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#0A0F1C]">Billing</h1>
        <p className="text-sm text-[#6B7280] mt-1">Manage your plan and payment details</p>
      </div>

      <div className="agency-card rounded-xl p-8 border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3BAE48]">Current Plan</p>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-bold text-3xl text-[#0A0F1C]">{mockBilling.plan}</span>
              <span className="text-[#6B7280] text-sm ml-1">{mockBilling.price}/month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3BAE48]" />
              <span className="text-sm text-[#3BAE48] font-semibold">{mockBilling.status}</span>
            </div>
          </div>
          {/* TODO: Wire to Stripe Customer Portal in Phase 7 */}
          <button className="btn-primary text-sm w-fit">
            <ExternalLink className="w-4 h-4" /> Manage Billing
          </button>
        </div>
        <div className="mt-6 pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Next billing date</p>
            <p className="text-sm font-semibold text-[#0A0F1C]">{mockBilling.nextBillingDate}</p>
          </div>
          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Payment method</p>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-[#0A0F1C]">{mockBilling.cardBrand} ending in {mockBilling.cardLast4}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="agency-card rounded-xl p-6 flex flex-col gap-5">
        <h2 className="font-heading font-semibold text-[#0A0F1C] text-base">What is included in {mockBilling.plan}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {planFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#3BAE48] flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm text-[#6B7280]">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="agency-card rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-heading font-semibold text-[#0A0F1C] text-sm">Need more?</p>
          <p className="text-xs text-[#6B7280] mt-0.5">Upgrade to Premium for advanced analytics, landing pages, and a monthly strategy report.</p>
        </div>
        <a href="/pricing" className="text-sm font-semibold text-[#3BAE48] hover:text-[#2E8C39] transition-colors whitespace-nowrap">View plans</a>
      </div>
    </div>
  );
}
