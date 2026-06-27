"use client";

import { CheckCircle, Play } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Spread Awareness",
    subtitle: "Let more people know about our mission",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Inspire Action",
    subtitle: "Encourage others to support rural talent",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Create Impact",
    subtitle: "Every share can bring new opportunities",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Build a Movement",
    subtitle: "Together, we can change more lives",
    icon: CheckCircle,
  },
];

export default function Banner() {
  return (
    <div
      className="relative h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat hero"
      style={{ backgroundImage: "url('/images/heroBanner.png')" }}
    >
      <div className="relative z-10 mx-auto flex h-[calc(100%-3rem)] xl:h-[calc(100%-4rem)] items-center">
        <div className="grid w-full items-center gap-8 lg:gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-7 text-white col-span-2">
            <div className="flex flex-col gap-4 xl:gap-6">
              <div className="flex flex-col gap-0 md:gap-3">
                <h3 className="flex flex-col gap-2 md:gap-3 font-semibold uppercase leading-[110%] md:leading-none text-[28px] md:text-[58px] lg:text-[40px] xl:text-[63px]">
                  Thank you for your generosity!
                  <div className="text-[#6F962C]">
                    {" "}
                    Now inspire others to make a difference.
                  </div>
                </h3>

                <div className="h-1 w-20 rounded-full bg-[#6F962C]" />
              </div>
              <p className="text-[15px] md:text-[24px] lg:text-[20px] xl:text-[26px] leading-[110%] xl:leading-[34px] tracking-normal">
                Your support can create a bigger impact when shared.
                <br className="hidden sm:block" />
                Invite your friends, family and network to join this movement.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 lg:gap-x-12 lg:gap-y-8">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center text-center gap-2 md:gap-4"
                  >
                    <div className="flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full border border-[#2E8B3D] bg-[#0D2A4F]">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#2E8B3D]" />
                    </div>

                    <div>
                      <h4 className="text-[13px] xl:text-[18px] font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="text-[12px] xl:text-[15px] text-white/80">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex h-full items-end justify-center lg:justify-end">
            <button className="group flex items-center gap-4">
              <div className="flex h-8 w-8 md:h-10 md:w-10 xl:h-16 xl:w-16 items-center justify-center rounded-full border-2 border-white cursor-pointer group-hover:scale-105">
                <Play className="h-4 w-4 xl:h-8 xl:w-8 fill-white text-white" />
              </div>

              <span className="text-[13px] md:text-[20px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-normal uppercase text-white">
                WATCH OUR STORY
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
