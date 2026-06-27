"use client";

import { Heart, ClipboardList, BarChart2, Link2 } from "lucide-react";

export default function WhatHappensNext() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Receipt Sent",
      description:
        "A confirmation email with your receipt has been sent to your email.",
    },
    {
      icon: Heart,
      title: "We Put It to Good Use",
      description:
        "Your donation will directly support our programs and beneficiaries.",
    },
    {
      icon: BarChart2,
      title: "Impact Updates",
      description:
        "You will receive regular updates on the impact you're creating.",
    },
    {
      icon: Link2,
      title: "Stay Connected",
      description:
        "Follow our journey and see the change you are helping to create.",
    },
  ];
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 w-full">
      <h3 className="text-[20px] font-bold text-[#111827] mb-6">
        What Happens Next?
      </h3>

      <div className="flex flex-col">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#3a7d1e] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-[#D1D5DB] my-1 min-h-[32px]" />
                )}
              </div>

              <div
                className={`pb-${isLast ? "0" : "6"} pt-1`}
                style={{ paddingBottom: isLast ? 0 : "1.5rem" }}
              >
                <p className="text-[15px] font-bold text-[#111827] leading-tight mb-1">
                  {step.title}
                </p>
                <p className="text-[14px] text-[#6B7280] leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
