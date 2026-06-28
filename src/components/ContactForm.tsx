"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "1-2 weeks",
  "2-4 weeks",
  "1-2 months",
  "Flexible",
];

const toneOptions = [
  "Professional",
  "Modern",
  "Luxury",
  "Friendly",
  "Playful",
  "Bold",
  "Minimal",
  "Local / Community-Focused",
];

const websiteGoalOptions = [
  "Generate leads",
  "Book appointments",
  "Sell products",
  "Build credibility",
  "Showcase work",
  "Launch a new brand",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [form, setForm] = useState({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full px-4 py-3 rounded-md bg-[#0B121C] border border-white/12 text-white placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#3BAE48] focus:bg-[#0B121C] transition-all";

  const label =
    "text-xs font-semibold text-[#9CA8B8] uppercase tracking-wide";

  const colorInput =
    "h-11 w-14 cursor-pointer rounded-md border border-white/12 bg-[#0B121C] p-1";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-8">
        <div className="w-12 h-12 rounded-full bg-[#3BAE48]/14 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-[#3BAE48]" />
        </div>

        <div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            Website request received.
          </h3>
          <p className="text-[#9CA8B8] text-sm max-w-md">
            We will review your submission and use your business details, goals,
            and brand colors to create your website preview.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={input}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={label}>Email *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={input}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Business Name *</label>
          <input
            name="businessName"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Your business name"
            className={input}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={label}>Current Website</label>
          <input
            name="currentWebsite"
            value={form.currentWebsite}
            onChange={handleChange}
            placeholder="https://yoursite.com"
            className={input}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Business Description *</label>
        <textarea
          name="businessDescription"
          required
          value={form.businessDescription}
          onChange={handleChange}
          placeholder="Describe the business, what it does, who it serves, and what makes it different..."
          rows={5}
          className={`${input} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Services / Offerings *</label>
        <textarea
          name="services"
          required
          value={form.services}
          onChange={handleChange}
          placeholder="Example: Lawn mowing, cleanup, mulching, edging, trimming"
          rows={3}
          className={`${input} resize-none`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Preferred Website Tone *</label>
          <select
            name="tone"
            required
            value={form.tone}
            onChange={handleChange}
            className={input}
          >
            <option value="">Select a tone</option>
            {toneOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={label}>Website Goal *</label>
          <select
            name="websiteGoal"
            required
            value={form.websiteGoal}
            onChange={handleChange}
            className={input}
          >
            <option value="">Select a goal</option>
            {websiteGoalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Tagline or One-Liner</label>
        <input
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          placeholder="Leave blank if you want us to create one"
          className={input}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Contact Info to Include on Website</label>
        <textarea
          name="websiteContactInfo"
          value={form.websiteContactInfo}
          onChange={handleChange}
          placeholder="Email, phone number, address, social links, hours, etc."
          rows={3}
          className={`${input} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <label className={label}>Brand Color Selection *</label>
          <p className="mt-1 text-sm text-[#9CA8B8] leading-relaxed">
            Choose three brand colors. These hex codes will be used to generate
            your website&apos;s design system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-md border border-white/12 bg-[#0B121C] p-4">
            <label className="block text-xs font-semibold text-[#9CA8B8] uppercase tracking-wide mb-3">
              Primary
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                name="primaryColor"
                required
                value={form.primaryColor}
                onChange={handleChange}
                className={colorInput}
              />
              <span className="text-sm font-medium text-white">
                {form.primaryColor}
              </span>
            </div>
          </div>

          <div className="rounded-md border border-white/12 bg-[#0B121C] p-4">
            <label className="block text-xs font-semibold text-[#9CA8B8] uppercase tracking-wide mb-3">
              Secondary
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                name="secondaryColor"
                required
                value={form.secondaryColor}
                onChange={handleChange}
                className={colorInput}
              />
              <span className="text-sm font-medium text-white">
                {form.secondaryColor}
              </span>
            </div>
          </div>

          <div className="rounded-md border border-white/12 bg-[#0B121C] p-4">
            <label className="block text-xs font-semibold text-[#9CA8B8] uppercase tracking-wide mb-3">
              Accent
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                name="accentColor"
                required
                value={form.accentColor}
                onChange={handleChange}
                className={colorInput}
              />
              <span className="text-sm font-medium text-white">
                {form.accentColor}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Budget Range</label>
          <select
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            className={input}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={label}>Timeline</label>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={input}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Extra Notes</label>
        <textarea
          name="extraNotes"
          value={form.extraNotes}
          onChange={handleChange}
          placeholder="Anything else we should know?"
          rows={4}
          className={`${input} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong while submitting your website request. Please try
          again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-50 w-fit"
      >
        {status === "loading" ? (
          "Submitting..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Launch My Website Request
          </>
        )}
      </button>
    </form>
  );
}
