import { FileText, Download } from "lucide-react";

interface Report {
  id: number;
  title: string;
  month: string;
  summary: string;
  reportUrl?: string;
}

export default function ReportCards({ reports }: { reports: Report[] }) {
  return (
    <div className="flex flex-col gap-4">
      {reports.map((report) => (
        <div key={report.id} className="agency-card rounded-lg p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-[#EDF7EE] flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[#3BAE48]" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-heading font-semibold text-[#0A0F1C] text-sm">{report.title}</p>
              <p className="text-xs text-[#9CA3AF]">{report.month}</p>
              <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">{report.summary}</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            {report.reportUrl ? (
              <a href={report.reportUrl} className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#3BAE48] rounded-md border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-all">
                <Download className="w-3.5 h-3.5" /> View Report
              </a>
            ) : (
              <span className="text-xs text-[#9CA3AF] px-3 py-2 rounded-md border border-[#E5E7EB]">Not available</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
