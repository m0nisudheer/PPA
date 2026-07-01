"use client";

import { Play } from "lucide-react";
import DonationProgress from "../common/donationProgress";

export default function HeroBanner() {
  return (
    <section
      className="hero relative h-[360px] lg:h-[480px] xl:h-[520px] 2xl:h-[650px] bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/images/banner2.png')" }}
      style={{
      //   backgroundImage:
      //     "url('https://res.cloudinary.com/dg8zhu8fq/image/upload/f_auto,q_auto:good,w_1920,c_limit/v1782911004/n3efcwvfis7teidtnzcs.jpg')",
      // 
       backgroundImage: `
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.6) 25%,
        rgba(0, 0, 0, 0.35) 45%,
        rgba(0, 0, 0, 0) 60%
      ),
      url('https://res.cloudinary.com/dg8zhu8fq/image/upload/f_auto,q_auto:good,w_1920,c_limit/v1782911004/n3efcwvfis7teidtnzcs.jpg')
    `,
    }}
    >
      <div className="relative z-10 container mx-auto flex h-full items-center">
        <div className="grid w-full lg:grid-cols-2 gap-8 md:gap-0">
          <div className="flex flex-col gap-8 justify-between text-white">
            <div className="flex flex-col gap-2 md:gap-3">
              <h1 className="text-[22px] font-semibold uppercase md:text-[36px] 2xl:text-[42px]">
                Complete Your Donation
              </h1>

              <div className="h-1 w-20 rounded-full bg-[#6BB643]" />

              <p className="text-[20px] md:text-[24px] 2xl:text-[26px]">
                You are one step closer to changing a child's life.
              </p>
            </div>

            <DonationProgress currentStep={2} />
          </div>
          <div className="flex h-full items-end justify-center lg:justify-end">
            <button className="group flex items-center gap-4">
              <div className="flex h-10 w-10 2xl:h-16 2xl:w-16 items-center justify-center rounded-full border-2 border-white cursor-pointer group-hover:scale-105">
                <Play className="h-4 w-4 2xl:h-8 2xl:w-8 fill-white text-white" />
              </div>

              <span className="text-[15px] md:text-[20px] lg:text-[16px] 2xl:text-[20px] leading-[100%] tracking-normal uppercase text-white">
                WATCH OUR STORY
              </span>
            </button>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}
