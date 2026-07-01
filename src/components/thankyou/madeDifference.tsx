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
    <div className="py-4 px-4 md:px-9 2xl:px-14">

    <div className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-6">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
    <div className="flex flex-col gap-2">
      <h3 className="text-[16px]2xl:text-[18px] font-bold text-[#111827] leading-snug">
        You Just Made a Difference!
      </h3>

    <p className="text-[15px] 2xl:text-[16px] text-[#4B5563] leading-snug">
           Your support helps us continue our mission of developing rural talent
           through sports.
         </p>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col gap-2 items-center text-center"
        >
          <div className="text-[#1A7A3C]">{s.icon}</div>

          <p className="text-[18px] 2xl:text-[20px] font-bold leading-none text-[#111827]">
            {s.value}
          </p>

          <p className="text-[14px] 2xl:text-[15px] leading-tight text-[#6B7280]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  );
}