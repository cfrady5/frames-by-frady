import Link from "next/link";
import { Zap } from "lucide-react";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[rgba(47,128,255,0.07)] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-sm flex flex-col items-center gap-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-blue flex items-center justify-center glow-blue-sm">
            <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-heading font-bold text-lg text-[#F8FAFC]">Frames by Frady</span>
        </Link>

        <LoginCard />

        <p className="text-xs text-[#94A3B8] text-center">
          Not a client yet?{" "}
          <Link href="/contact" className="text-[#2F80FF] hover:text-[#44D9FF] transition-colors">
            Start your website
          </Link>
        </p>
      </div>
    </main>
  );
}
