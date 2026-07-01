"use client";

import { ShieldCheck, ArrowRight } from "lucide-react";

const actions = [
  {
    img: "/images/sponsor.png",
    title: "Sponsor a Child",
    description: "Help a child train, learn and achieve their dreams.",
    cta: "Sponsor Now",
    href: "#",
  },
  {
    img: "/images/volunteer.png",
    title: "Become a Volunteer",
    description: "Join our team and contribute your time and skills.",
    cta: "Volunteer Now",
    href: "#",
  },
  {
    img: "/images/partnership.png",
    title: "Corporate Partnership",
    description: "Partner with us to empower rural talent at scale.",
    cta: "Partner With Us",
    href: "#",
  },
  {
    img: "/images/world.png",
    title: "Spread the Word",
    description: "Share our mission and inspire others to join.",
    cta: "Share Now",
    href: "#",
  },
];

export function WouldYouLike() {
  return (
    <div className="section">
      <div className="xl:py-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:items-stretch">
          <div className="md:col-span-2 lg:col-span-2 rounded-xl border border-[#E5E7EB] bg-[#F6F8F7] p-4 flex items-center gap-3 py-6">
            <div className="flex h-6 w-6 2xl:h-9 2xl:w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1A7A3C] text-[#1A7A3C] md:h-12 md:w-12">
              <ShieldCheck
                size={20}
                className="2xl:h-6 2xl:w-6"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] 2xl:text-[20px] font-bold text-[#111827] leading-[100%] tracking-normal">
                Would You Like to Do More?
              </p>
              <p className="text-[15px] 2xl:text-[16px] text-[#6B7280]">
                There are many ways to support and create a bigger impact.
              </p>
            </div>
          </div>

          {actions.map((action) => (
            <div
              key={action.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <img
                src={action.img}
                alt={action.title}
                className="w-10 h-10 2xl:w-14 2xl:h-14 object-contain"
              />
              <p className="text-[15px] 2xl:text-[22px] font-bold text-[#111827] leading-[100%] tracking-normal">
                {action.title}
              </p>
              <p className="text-[14px] 2xl:text-[15px] text-[#6B7280] leading-[100%] tracking-normal">
                {action.description}
              </p>
              <a
                href={action.href}
                className="inline-flex items-center gap-1 text-[14px] 2xl:text-[15px] font-bold text-[#1A7A3C] hover:underline mt-auto"
              >
                {action.cta}
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
