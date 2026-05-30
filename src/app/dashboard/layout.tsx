import Link from "next/link";
import { BarChart3, CreditCard, FileText, LayoutDashboard, MessageSquare, LogOut } from "lucide-react";
import { FramesLogo } from "@/components/SiteHeader";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
  { href: "/dashboard/edit-requests", icon: MessageSquare, label: "Edit Requests" },
  { href: "/dashboard/reports", icon: FileText, label: "Reports" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#0A0F1C]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-[rgba(229,231,235,0.08)] bg-[#111827] fixed top-0 bottom-0 left-0">
        <div className="px-5 py-5 border-b border-[rgba(229,231,235,0.08)]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <FramesLogo />
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] hover:bg-[rgba(229,231,235,0.05)] transition-all"
            >
              <Icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-[rgba(229,231,235,0.08)]">
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] hover:bg-[rgba(229,231,235,0.05)] transition-all"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 md:pl-60 min-h-screen">
        <div className="md:hidden flex items-center justify-between px-6 py-4 border-b border-[rgba(229,231,235,0.08)] bg-[#111827]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <FramesLogo />
          </Link>
        </div>
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
