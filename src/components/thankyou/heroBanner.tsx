"use client";

import { Play } from "lucide-react";
import DonationProgress from "../common/donationProgress";

export default function HeroBanner() {
  return (
    <section
      className="section relative h-[380px] lg:h-[480px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner2.png')" }}
    >
      <div className="relative z-10 mx-auto flex h-full items-center">
        <div className="grid w-full lg:grid-cols-2 gap-8 md:gap-0">
          <div className="flex flex-col gap-8 justify-between text-white">
            <div className="flex flex-col gap-2 md:gap-3">
              <h1 className="text-[22px] font-medium uppercase md:text-[36px] lg:text-[25px] xl:text-[42px]">
                Thank You! Your Donation Was Successful.  
              </h1>

              <div className="h-1 w-20 rounded-full bg-[#6BB643]" />

              <p className="text-[20px] md:text-[24px] lg:text-[20px] xl:text-[26px]">
                You are now a part of a movement that changes lives.
              </p>
            </div>

            <DonationProgress currentStep={4} />
          </div>
          <div className="flex h-full items-end justify-center lg:justify-end">
            <button className="group flex items-center gap-4">
              <div className="flex h-12 w-12 xl:h-16 xl:w-16 items-center justify-center rounded-full border-2 border-white cursor-pointer group-hover:scale-105">
                <Play className="h-6 w-6 xl:h-8 xl:w-8 fill-white text-white" />
              </div>

              <span className="text-[15px] md:text-[20px] lg:text-[16px] xl:text-[18px] leading-[100%] tracking-normal uppercase text-white">
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
