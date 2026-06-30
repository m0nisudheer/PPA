"use client";

import { Play, Target, Trophy, Users, MapPin, Medal, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    id: 1,
    text: "Sponsor a child",
    href: "#",
  },
  {
    id: 2,
    text: "Become a volunteer",
    href: "#",
  },
  {
    id: 3,
    text: "Explore programs",
    href: "#",
  },
];

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Children Impacted",
  },
  {
    icon: MapPin,
    value: "120+",
    label: "Villages Reached",
  },
  {
    icon: Medal,
    value: "30+",
    label: "Sports Programs",
  },
  {
    icon: Users,
    value: "200+",
    label: "Volunteers",
  },
  {
    icon: Star,
    value: "50+",
    label: "Success Stories",
  },
];

export default function Banner() {
  const router = useRouter();
  return (
    <div className="pt-20 xl:h-screen flex flex-col">
      <div
        //   className="hero relative h-[360px] lg:h-[680px] bg-cover bg-center bg-no-repeat"
        className="py-14 px-4 md:px-9 xl:px-14 relative flex-1 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dg8zhu8fq/image/upload/f_auto,q_auto:good,w_1920,c_limit/v1782710827/negge7qzwiwsfe6ig3pr.png')",
        }}
      >
        <div className="relative z-10 mx-auto flex h-full items-center">
          <div className="grid w-full items-center gap-4 md:gap-8 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col gap-4 md:gap-7 text-white">
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6">
                <h3 className="font-semibold uppercase leading-[130%] 2xl:leading-[120%] tracking-normal text-[38px] md:text-[48px] lg:text-[50px] xl:text-[56px] 2xl:text-[66px]">
                  {/* DONATE <span className="text-[#6F962C]">NOW</span> */}
                  Transforming <br className="hidden lg:block" />{" "}
                  <span className="text-[#6F962C]">Rural talent</span> into
                  sporting excellence
                  <div className="h-1 w-20 rounded-full bg-[#6F962C]" />
                </h3>

                <p className="text-[18px] md:text-[24px] lg:text-[20px] xl:text-[26px]  xl:leading-[34px] tracking-normal">
                  Every child should play by Choice, not by Chance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => router.push(feature.href)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 md:px-6 md:py-2 text-[16px] font-normal transition-all duration-300 ${
                      index === 0
                        ? "bg-[#6F962C] text-white hover:bg-[#011C3E]"
                        : "border border-white bg-transparent text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {feature.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex h-full items-end justify-center lg:justify-end">
              <button className="group flex items-center gap-4">
                <div className="flex h-9 w-9 md:h-11 md:w-11 xl:h-16 xl:w-16 items-center justify-center rounded-full border-2 border-white cursor-pointer group-hover:scale-105">
                  <Play className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8 fill-white text-white" />
                </div>

                <span className="text-[14px] md:text-[16px] xl:text-[18px] leading-[100%] tracking-normal uppercase text-white">
                  WATCH OUR STORY
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 w-full px-3 py-5 md:hero">
        <div className="-mt-12 xl:-mt-18 rounded-2xl bg-[#222D4E] shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-center md:justify-start xl:justify-center gap-4 px-3 py-4 md:px-6 md:py-7"
                >
                  {index !== stats.length - 1 && (
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-[#FFFFFF] hidden lg:block" />
                  )}

                  <Icon
                    className="h-7 w-7 shrink-0 text-[#70AA44] md:h-8 md:w-8 lg:h-9 lg:w-9"
                    strokeWidth={2}
                  />

                  <div className="flex flex-col gap-1 text-center md:text-left">
                    <h3 className="text-[#FFFFFF] text-[22px] md:text-[28px] leading-[100%] tracking-normal">
                      {item.value}
                    </h3>

                    <p className="text-[15px] md:text-[18px] text-[#FFFFFF]">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
