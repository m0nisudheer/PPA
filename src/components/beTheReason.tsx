"use client";

import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const BeTheReason = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Together.png')",
        }}
      >
      

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 px-6 py-8 md:flex-row md:items-center md:px-8 2xl:px-10">
          <div className="text-white">
            <p className="text-[18px] 2xl:text-[22px] font-normal leading-tight">
              Be the reason a child believes in their dream.
            </p>

            <h2 className="text-[26px] font-semibold 2xl:text-[30px]">
              Together, Let's Build Champions.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-center gap-1">
            <button
             onClick={() => {
                document.getElementById("donate-card")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            //   onClick={() => router.push("/donate")}
              className="cursor-pointer group inline-flex items-center gap-1 rounded-md bg-[#6F962C] px-4 py-2 2xl:px-6 2xl:py-3 text-[14px] 2xl:text-sm font-semibold uppercase text-white transition hover:bg-[#5b8d30]"
            >
              Donate Now
              <Heart className="h-4 w-4 fill-white text-white" />
            </button>

            <p className="text-[12px] text-[#D1D5DB]">
              Thank you for changing lives!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeTheReason;
