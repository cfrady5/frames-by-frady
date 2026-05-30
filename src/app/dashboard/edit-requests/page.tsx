"use client";

import { useState } from "react";
import EditRequestForm from "@/components/EditRequestForm";
import EditRequestList from "@/components/EditRequestList";

const initialRequests = [
  {
    id: 1,
    title: "Update homepage headline",
    description: "Change the main headline to reflect our new spring promotion.",
    priority: "Medium",
    status: "In Progress" as const,
    pageUrl: "https://acmeroofing.com",
    created: "May 28, 2026",
  },
  {
    id: 2,
    title: "Add new service to services page",
    description: "We now offer gutters installation. Need to add it as a new service card.",
    priority: "High",
    status: "New" as const,
    pageUrl: "https://acmeroofing.com/services",
    created: "May 30, 2026",
  },
  {
    id: 3,
    title: "Replace hero photo",
    description: "Swap the hero background image with the new photo we took on May 15.",
    priority: "Low",
    status: "Completed" as const,
    created: "May 10, 2026",
  },
];

export default function EditRequestsPage() {
  const [requests, setRequests] = useState(initialRequests);

  const handleSubmit = (newReq: { title: string; description: string; priority: string; pageUrl: string; notes: string }) => {
    setRequests((prev) => [
      {
        id: prev.length + 1,
        title: newReq.title,
        description: newReq.description,
        priority: newReq.priority,
        status: "New" as const,
        pageUrl: newReq.pageUrl || "",
        created: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      },
      ...prev,
    ]);
  };

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#F8FAFC]">Edit Requests</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Submit a change and we will handle it on the next update cycle.</p>
      </div>

      <div className="glass-card rounded-2xl p-6 flex flex-col gap-5">
        <h2 className="font-heading font-semibold text-[#F8FAFC] text-base">New Request</h2>
        <EditRequestForm onSubmit={handleSubmit} />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-heading font-semibold text-[#F8FAFC] text-base">All Requests</h2>
        <EditRequestList requests={requests} />
      </div>
    </div>
  );
}
