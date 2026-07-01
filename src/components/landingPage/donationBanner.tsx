import Image from "next/image";
import { Heart } from "lucide-react";

const donationOptions = [
  {
    amount: "₹500",
    title: "Fuel Their Dream",
  },
  {
    amount: "₹2000",
    title: "Support Their Training",
  },
  {
    amount: "₹5000",
    title: "Shape Their Future",
  },
];

export default function DonationBanner() {
  return (
    <div className="section">
      <div className="group relative z-20 overflow-visible rounded-xl bg-[#1E2A52] text-white py-6 px-4 xl:px-8 xl:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-44 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-l-full bg-[#0E1324]/25 transition-all duration-500 group-hover:-right-10" />

          <div className="absolute -right-30 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-l-full bg-[#0E1324]/45 transition-all duration-500 group-hover:-right-4" />

          <div className="absolute -right-16 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-l-full bg-[#0E1324] transition-all duration-500 group-hover:right-2" />
        </div>

        <div className="relative z-10 grid items-center gap-6 lg:gap-2 2xl:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h2 className="text-[24px] xl:text-[28px] font-semibold leading-[110%] 2xl:text-[36px]">
              One opportunity can <br className="hidden lg:block" />
              change a life.
            </h2>

            <p className="text-[18px] 2xl:text-[20px] leading-[150%] tracking-normal text-[#FFFFFF]">
              Your support can help a child discover their talent and build a
              better future through sports.
            </p>
          </div>

          <div className="relative flex justify-center lg:col-span-2">
            <Image
              src="/images/taxplayer.png"
              alt="Player"
              width={180}
              height={250}
              className="
              relative
              z-10
              w-auto
              object-contain
              transition-all
              duration-500
              ease-in-out
              group-hover:z-30
              group-hover:-translate-y-6
              group-hover:scale-118
            "
            />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 2xl:gap-3">
              {donationOptions.map((item, index) => (
                <button
                  key={item.amount}
                  className={`
                  rounded-lg
                  border
                  border-white/30
                  bg-white/5
                  px-3
                  py-4
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#74A73D]
                  hover:bg-white/10
                  ${
                    index === donationOptions.length - 1
                      ? "col-span-2 md:col-span-1"
                      : ""
                  }
                `}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] 2xl:text-[26px] font-semibold leading-[100%] tracking-normal">
                      {item.amount}
                    </h3>

                    <p className="text-[13px] 2xl:text-[15px] leading-[150%] tracking-normal">
                      {item.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <button
              className="
              cursor-pointer
              flex
              items-center
              gap-2
              rounded-md
              bg-[#6F962C]
              px-4
              py-2
              2xl:px-6
              2xl:py-3
              text-[12px]
              font-semibold
              uppercase
              tracking-wide
              duration-300
              hover:text-[#6F962C]
              hover:bg-white
      
            "
            >
              DONATE NOW
              <Heart
                size={14}
                fill="white"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
