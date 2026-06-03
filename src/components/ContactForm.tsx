"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const toneOptions = ["Professional", "Modern", "Luxury", "Friendly", "Playful", "Bold", "Minimal", "Local / Community-Focused"];
const budgetOptions = ["Under $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+"];
const timelineOptions = ["ASAP", "1-2 weeks", "2-4 weeks", "1-2 months", "Flexible"];
const goalOptions = ["Generate leads", "Book appointments", "Sell products", "Build credibility", "Showcase work", "Launch a new brand", "Other"];

type FormState = {
  name: string;
  email: string;
  businessName: string;
  currentWebsite: string;
  businessDescription: string;
  services: string;
  tone: string;
  tagline: string;
  websiteContactInfo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  budgetRange: string;
  timeline: string;
  websiteGoal: string;
  extraNotes: string;
};

const colorFields = [
  { key: "primaryColor", colorLabel: "Primary" },
  { key: "secondaryColor", colorLabel: "Secondary" },
  { key: "accentColor", colorLabel: "Accent" },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    businessName: "",
    currentWebsite: "",
    businessDescription: "",
    services: "",
    tone: "",
    tagline: "",
    websiteContactInfo: "",
    primaryColor: "#2563eb",
    secondaryColor: "#111827",
    accentColor: "#f8fafc",
    budgetRange: "",
    timeline: "",
    websiteGoal: "",
    extraNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-8">
        <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-[#1A73FF]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-[#0A0F1C] mb-2">Request received.</h3>
          <p className="text-[#6B7280] text-sm">We will review your website request and get back to you within 1-2 business days.</p>
        </div>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0F1C] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#1A73FF] focus:bg-white transition-all";
  const labelClass = "text-xs font-semibold text-[#6B7280] uppercase tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      {/* Business Name + Current Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="businessName" className={labelClass}>Business Name *</label>
          <input id="businessName" name="businessName" required value={form.businessName} onChange={handleChange} placeholder="Your business name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="currentWebsite" className={labelClass}>Current Website</label>
          <input id="currentWebsite" name="currentWebsite" value={form.currentWebsite} onChange={handleChange} placeholder="https://yoursite.com" className={inputClass} />
        </div>
      </div>

      {/* Business Description */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="businessDescription" className={labelClass}>Business Description *</label>
        <textarea
          id="businessDescription"
          name="businessDescription"
          required
          value={form.businessDescription}
          onChange={handleChange}
          placeholder="Describe the business, what it does, who it serves, and what makes it different..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Services */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="services" className={labelClass}>Services / Offerings *</label>
        <textarea
          id="services"
          name="services"
          required
          value={form.services}
          onChange={handleChange}
          placeholder="Example: Lawn mowing, cleanup, mulching, edging, trimming"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Tone + Website Goal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tone" className={labelClass}>Preferred Website Tone *</label>
          <select id="tone" name="tone" required value={form.tone} onChange={handleChange} className={inputClass}>
            <option value="">Select a tone</option>
            {toneOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="websiteGoal" className={labelClass}>Website Goal *</label>
          <select id="websiteGoal" name="websiteGoal" required value={form.websiteGoal} onChange={handleChange} className={inputClass}>
            <option value="">Select a goal</option>
            {goalOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Tagline */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="tagline" className={labelClass}>Tagline or One-Liner</label>
        <input
          id="tagline"
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          placeholder="Leave blank if you want us to create one"
          className={inputClass}
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="websiteContactInfo" className={labelClass}>Contact Info to Include on Website</label>
        <textarea
          id="websiteContactInfo"
          name="websiteContactInfo"
          value={form.websiteContactInfo}
          onChange={handleChange}
          placeholder="Email, phone number, address, social links, hours, etc."
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Brand Colors */}
      <div className="flex flex-col gap-3">
        <p className={labelClass}>Brand Colors *</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {colorFields.map(({ key, colorLabel }) => (
            <div key={key} className="flex flex-col gap-2 p-3 rounded-md border border-[#E5E7EB] bg-[#FAFAFA]">
              <span className={labelClass}>{colorLabel}</span>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  required
                  aria-label={`${colorLabel} brand color`}
                  className="w-10 h-10 rounded cursor-pointer border border-[#E5E7EB] bg-transparent p-0.5 shrink-0"
                />
                <span className="text-sm font-mono text-[#0A0F1C]">{form[key]}</span>
              </div>
              <div className="w-full h-5 rounded border border-[#E5E7EB]" style={{ backgroundColor: form[key] }} />
            </div>
          ))}
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budgetRange" className={labelClass}>Budget Range *</label>
          <select id="budgetRange" name="budgetRange" required value={form.budgetRange} onChange={handleChange} className={inputClass}>
            <option value="">Select a range</option>
            {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="timeline" className={labelClass}>Timeline *</label>
          <select id="timeline" name="timeline" required value={form.timeline} onChange={handleChange} className={inputClass}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Extra Notes */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="extraNotes" className={labelClass}>Extra Notes</label>
        <textarea
          id="extraNotes"
          name="extraNotes"
          value={form.extraNotes}
          onChange={handleChange}
          placeholder="Anything else we should know?"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-50 w-fit">
        {status === "loading" ? "Sending..." : <><Send className="w-4 h-4" /> Launch My Website Request</>}
      </button>
    </form>
  );
}
