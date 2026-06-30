import {
  PersonStanding,
  Dumbbell,
  Goal,
  Volleyball,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { FaRunning } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const sports = [
  {
    title: "Athletics",
    image: "/images/sportsWeSupport/Athletics.png",
    icon: FaRunning,
  },
  {
    title: "Cricket",
    image: "/images/sportsWeSupport/Cricket.png",
    icon: GiCricketBat,
  },
  {
    title: "Hockey",
    image: "/images/sportsWeSupport/Hockey.png",
    icon: Dumbbell,
  },
  {
    title: "Kabaddi",
    image: "/images/sportsWeSupport/Kabaddi.png",
    icon: FaRunning,
  },
  {
    title: "Football",
    image: "/images/sportsWeSupport/Football.png",
    icon: Goal,
  },
  {
    title: "Volleyball",
    image: "/images/sportsWeSupport/Volleyball.png",
    icon: Volleyball,
  },
];

const SportsWeSupport = () => {
  return (
    // <div className="py-10">
      <div className="section flex flex-col gap-6">
        <div className="flex flex-col gap-1">
         <p className="text-[18px] font-semibold uppercase tracking-wider text-[#6F962C]">
            Sports We Support
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold leading-[140%] md:leading-tight text-[#222D4E] text-[28px] lg:text-[42px]">
             
              More Sports. More Opportunities.
            </h2>

            <div className="h-1 w-16 rounded-full bg-[#74A73D]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
          {sports.map((sport, index) => {
            const Icon = sport.icon;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <Image
                  src={sport.image}
                  alt={sport.title}
                  width={300}
                  height={180}
                  className="h-44 w-full object-cover"
                />

                <div className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCDCDC]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[#74A73D]"
                    />
                  </div>

                  <span className="text-[17px] font-semibold text-[#222D4E] leading-[100%] tracking-normal">
                    {sport.title}
                  </span>
                </div>
              </div>
            );
          })}

          <button className="flex flex-col gap-4 items-center justify-center rounded-xl bg-[#0C142D] p-6 text-white">
            <span className="text-center text-[17px] md:text-[18px] font-semibold leading-[120%] md:leading-tight">
              View all
              <br />
              Sports
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#6BB643]">
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="cursor-pointer text-[#6BB643] transition-colors duration-300 hover:text-white"
              />{" "}
            </div>
          </button>
        </div>
      </div>
    // </div>
  );
};

export default SportsWeSupport;
