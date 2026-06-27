"use client";

import { Users, MapPin, Activity, HeartHandshake } from "lucide-react";

export function MadeDifference() {
  const stats = [
    { icon: <Users size={28} strokeWidth={1.5} />, value: "5000+", label: "Children Impacted" },
    { icon: <MapPin size={28} strokeWidth={1.5} />, value: "120+", label: "Villages Reached" },
    { icon: <Activity size={28} strokeWidth={1.5} />, value: "30+", label: "Sports Programs" },
    { icon: <HeartHandshake size={28} strokeWidth={1.5} />, value: "200+", label: "Volunteers" },
  ];

  return (
    <div className="w-full border border-[#E5E7EB] rounded-2xl px-4 py-6 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] font-bold text-[#111827] leading-snug">
          You Just Made a Difference!
        </h3>
        <p className="text-[14px] text-[#6B7280] leading-snug max-w-sm">
          Your support helps us continue our mission of developing rural talent
          through sports.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="text-[#1A7A3C]">{s.icon}</div>
            <p className="text-[20px] font-bold text-[#111827] leading-none">
              {s.value}
            </p>
            <p className="text-[12px] text-[#6B7280] leading-tight">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}