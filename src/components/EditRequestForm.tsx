"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const priorityOptions = ["Low", "Medium", "High"];

interface EditRequestFormProps {
  onSubmit: (req: { title: string; description: string; priority: string; pageUrl: string; notes: string }) => void;
}

export default function EditRequestForm({ onSubmit }: EditRequestFormProps) {
  const [form, setForm] = useState({ title: "", description: "", priority: "Medium", pageUrl: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    onSubmit(form);
    setForm({ title: "", description: "", priority: "Medium", pageUrl: "", notes: "" });
    setLoading(false);
  };

  const inputClass = "w-full px-4 py-3 rounded-md bg-[rgba(229,231,235,0.05)] border border-[rgba(229,231,235,0.12)] text-[#F5F5F5] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[rgba(59,174,72,0.5)] transition-all";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Request Title *</label>
        <input name="title" required value={form.title} onChange={handleChange} placeholder="e.g. Update homepage headline" className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Description *</label>
        <textarea name="description" required value={form.description} onChange={handleChange} rows={3} placeholder="Describe what you need changed..." className={`${inputClass} resize-none`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Priority</label>
          <select name="priority" value={form.priority} onChange={handleChange} className={inputClass}>
            {priorityOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Page URL</label>
          <input name="pageUrl" value={form.pageUrl} onChange={handleChange} placeholder="https://yoursite.com/page" className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Additional Notes</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Anything else we should know..." className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-md bg-[#3BAE48] hover:bg-[#2E8C39] transition-colors disabled:opacity-60 w-fit">
        {loading ? "Submitting..." : <><Send className="w-4 h-4" /> Submit Request</>}
      </button>
    </form>
  );
}
