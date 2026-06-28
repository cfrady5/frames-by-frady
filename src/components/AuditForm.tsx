"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

/**
 * Simple first-step audit request. Posts to /api/contact, which accepts
 * { name, email, company, currentUrl, message }.
 */
export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    currentUrl: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, need: "Website audit" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full px-4 py-3 rounded-md bg-[#0B121C] border border-white/12 text-white placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#3BAE48] transition-all";
  const label = "text-xs font-semibold text-[#9CA8B8] uppercase tracking-wide";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-8">
        <div className="w-12 h-12 rounded-full bg-[#3BAE48]/14 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-[#3BAE48]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            Thanks — your audit request is in.
          </h3>
          <p className="text-[#9CA8B8] text-sm max-w-sm">
            We&apos;ll review your website and Google presence and get back to you within 1–2 business days.
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
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={input} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label}>Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@business.com" className={input} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Business Name *</label>
          <input name="company" required value={form.company} onChange={handleChange} placeholder="Your business name" className={input} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label}>Current Website</label>
          <input name="currentUrl" value={form.currentUrl} onChange={handleChange} placeholder="https://yoursite.com (optional)" className={input} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>What do you want to improve?</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="More calls and quote requests, a fresher look, getting found on Google, a new site from scratch..."
          rows={4}
          className={`${input} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email hello@framesbyfrady.com directly.
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-50 w-full sm:w-fit justify-center">
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request My Free Audit
          </>
        )}
      </button>
      <p className="text-xs text-[#9CA3AF]">
        No spam. We&apos;ll only use this to review your site and reply.
      </p>
    </form>
  );
}
