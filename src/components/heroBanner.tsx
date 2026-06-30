"use client";

import { Play, Target, Trophy, Users } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Empower",
    subtitle: "Rural Children",
    icon: Users,
  },
  {
    id: 2,
    title: "Build Skills &",
    subtitle: "Confidence",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Create Brighter",
    subtitle: "Futures",
    icon: Target,
  },
];

export default function Banner() {
  return (
    <div
      className="relative md:h-[460px] xl:h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat hero"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8zhu8fq/image/upload/f_auto,q_auto:good,w_1920,c_limit/v1782553682/e5lrpvyfida31is6vgyr.png')",
      }}
    >
      <div className="relative z-10 mx-auto flex h-[calc(100%-5rem)] items-center md:pt-24 xl:pt-0">
        <div className="grid w-full items-center gap-4 md:gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4 md:gap-7 text-white">
            <div className="flex flex-col gap-4 xl:gap-6">
              <h3 className="font-semibold uppercase leading-none text-[42px] lg:text-[50px] xl:text-[70px]">
                DONATE <span className="text-[#6F962C]">NOW</span>
              </h3>

              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-medium uppercase leading-tight md:text-[25px] xl:text-[42px]">
                  One Opportunity Can Change A Life
                </h1>

                <div className="h-1 w-20 rounded-full bg-[#6F962C]" />
              </div>

              <p className="text-[18px] md:text-[20px] xl:text-[26px]  xl:leading-[34px] tracking-normal">
                Your support helps us discover, nurture and empower talented
                children in rural communities through sports. Together, let's
                build a future of champions.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-14">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="flex flex-col gap-2 items-center text-center"
                  >
                    <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full border border-[#2E8B3D] bg-[#0D2A4F]">
                      <Icon className="h-4 w-4 md:h-8 md:w-8 text-[#2E8B3D]" />
                    </div>

                    <span className="text-[14px] md:text-[16px] leading-5 tracking-normal">
                      {feature.title}
                      <br />
                      {feature.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex h-full items-end justify-center lg:justify-end">
            <button className="group flex items-center gap-4">
              <div className="flex h-10 w-10 xl:h-16 xl:w-16 items-center justify-center rounded-full border-2 border-white cursor-pointer group-hover:scale-105">
                <Play className="h-4 w-4 xl:h-8 xl:w-8 fill-white text-white" />
              </div>

              <span className="text-[15px] md:text-[20px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-normal uppercase text-white">
                WATCH OUR STORY
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
