"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="rounded-xl border border-white/8 bg-[#070B14] overflow-hidden">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className={i < faqs.length - 1 ? "border-b border-white/8" : ""}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
            >
              <span className="font-heading font-semibold text-white text-sm">{faq.q}</span>
              <Plus
                className={`w-4 h-4 flex-shrink-0 text-[#3BAE48] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-[#9CA8B8] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
