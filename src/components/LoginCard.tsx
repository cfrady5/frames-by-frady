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

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-[rgba(229,231,235,0.05)] border border-[rgba(229,231,235,0.12)] text-[#F5F5F5] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[rgba(26,115,255,0.5)] focus:bg-[rgba(26,115,255,0.04)] transition-all";

  return (
    <div className="w-full glass-card rounded-lg p-8 flex flex-col gap-6">
      <div className="text-center flex flex-col gap-1">
        <h1 className="font-heading font-bold text-2xl text-[#F5F5F5]">Client Login</h1>
        <p className="text-sm text-[#9CA3AF]">Access your website dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">Password</label>
            <Link href="/forgot-password" className="text-xs text-[#1A73FF] hover:text-[#1557CC] transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={`${inputClass} pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 text-sm font-semibold text-white rounded-md bg-[#1A73FF] hover:bg-[#1557CC] transition-colors disabled:opacity-60 mt-1"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
