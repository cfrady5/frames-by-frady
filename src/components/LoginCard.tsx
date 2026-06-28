"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

// TODO: Replace mock login with Supabase Auth in Phase 5.
export default function LoginCard() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    router.push("/dashboard");
  };

  const input = "w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0F1C] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#3BAE48] focus:bg-white transition-all";

  return (
    <div className="w-full agency-card rounded-xl p-8 flex flex-col gap-6">
      <div className="text-center">
        <h1 className="font-heading font-bold text-2xl text-[#0A0F1C]">Client Login</h1>
        <p className="text-sm text-[#6B7280] mt-1">Access your website dashboard</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className={input} />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Password</label>
            <Link href="/forgot-password" className="text-xs text-[#3BAE48] hover:text-[#2E8C39] transition-colors">Forgot password?</Link>
          </div>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" className={`${input} pr-10`} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors" aria-label="Toggle password">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-1 py-3.5 disabled:opacity-60">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
