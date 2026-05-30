interface EditRequest {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: "New" | "In Progress" | "Waiting on Client" | "Completed";
  pageUrl?: string;
  created: string;
}

const statusColors: Record<EditRequest["status"], string> = {
  "New": "bg-[rgba(26,115,255,0.12)] text-[#1A73FF]",
  "In Progress": "bg-[rgba(26,115,255,0.2)] text-[#60A5FA]",
  "Waiting on Client": "bg-[rgba(234,179,8,0.12)] text-yellow-400",
  "Completed": "bg-[rgba(26,115,255,0.08)] text-[#0D47A1]",
};

const priorityColors: Record<string, string> = {
  "High": "text-red-400",
  "Medium": "text-yellow-400",
  "Low": "text-[#9CA3AF]",
};

export default function EditRequestList({ requests }: { requests: EditRequest[] }) {
  if (requests.length === 0) {
    return (
      <div className="text-center py-10 text-[#9CA3AF] text-sm">
        No edit requests yet. Submit one above.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {requests.map((req) => (
        <div key={req.id} className="glass-card rounded-lg p-5 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="font-semibold text-[#F5F5F5] text-sm leading-snug">{req.title}</p>
              {req.pageUrl && <p className="text-xs text-[#9CA3AF] truncate">{req.pageUrl}</p>}
            </div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${statusColors[req.status]}`}>
              {req.status}
            </span>
          </div>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">{req.description}</p>
          <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
            <span>Priority: <span className={`font-semibold ${priorityColors[req.priority]}`}>{req.priority}</span></span>
            <span>|</span>
            <span>{req.created}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
