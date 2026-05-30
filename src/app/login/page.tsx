import Link from "next/link";
import { FramesLogo } from "@/components/SiteHeader";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAFAFA]">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        <Link href="/">
          <FramesLogo />
        </Link>
        <LoginCard />
        <p className="text-xs text-[#9CA3AF] text-center">
          Not a client yet?{" "}
          <Link href="/contact" className="text-[#1A73FF] hover:text-[#1557CC] transition-colors">
            Start your website
          </Link>
        </p>
      </div>
    </main>
  );
}
