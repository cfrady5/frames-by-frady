import ReportCards from "@/components/ReportCards";

const mockReports = [
  {
    id: 1,
    title: "May 2026 Performance Report",
    month: "May 2026",
    summary: "Traffic up 12% month-over-month. Top page is Services at 1,120 views. 3 SEO improvements applied. Site speed score improved from 84 to 91.",
    reportUrl: "#",
  },
  {
    id: 2,
    title: "April 2026 Performance Report",
    month: "April 2026",
    summary: "Visitors increased by 8% following the homepage redesign. Contact form submissions up 22%. Mobile traffic now accounts for 44% of total visits.",
    reportUrl: "#",
  },
  {
    id: 3,
    title: "March 2026 Performance Report",
    month: "March 2026",
    summary: "Steady baseline month. Bounce rate improved by 5% after navigation updates. Google Search impressions increased by 31% from SEO updates.",
    reportUrl: "#",
  },
  {
    id: 4,
    title: "February 2026 Performance Report",
    month: "February 2026",
    summary: "First full month post-launch. 3,210 visitors. Average session duration of 1m 58s. 12 contact form submissions.",
    reportUrl: "#",
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#F8FAFC]">Monthly Reports</h1>
        <p className="text-sm text-[#94A3B8] mt-1">A summary of your website performance, delivered every month.</p>
      </div>
      <ReportCards reports={mockReports} />
    </div>
  );
}
