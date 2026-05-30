"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const budgetOptions = ["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500+", "Not sure yet"];
const timelineOptions = ["ASAP", "1 month", "1-3 months", "3-6 months", "Just exploring"];
const needsOptions = ["New website from scratch", "Redesign existing site", "Ongoing management only", "Landing page", "SEO and analytics setup", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", currentUrl: "", budget: "", timeline: "", need: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-8">
        <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-[#1A73FF]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-[#0A0F1C] mb-2">Message received.</h3>
          <p className="text-[#6B7280] text-sm">We will review your submission and get back to you within 1-2 business days.</p>
        </div>
      </div>
    );
  }

  const input = "w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0F1C] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#1A73FF] focus:bg-white transition-all";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={input} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={input} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Company Name</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Your business name" className={input} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Current Website</label>
          <input name="currentUrl" value={form.currentUrl} onChange={handleChange} placeholder="https://yoursite.com" className={input} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Budget Range</label>
          <select name="budget" value={form.budget} onChange={handleChange} className={input}>
            <option value="">Select a range</option>
            {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Timeline</label>
          <select name="timeline" value={form.timeline} onChange={handleChange} className={input}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">What Do You Need</label>
        <select name="need" value={form.need} onChange={handleChange} className={input}>
          <option value="">Select an option</option>
          {needsOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} className={`${input} resize-none`} />
      </div>
      {status === "error" && <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>}
      <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-50 w-fit">
        {status === "loading" ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}
