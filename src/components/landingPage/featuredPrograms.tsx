import { ArrowRight, School, Trophy, Building2 } from "lucide-react";

const programs = [
  {
    title: "Rural Sports Campus",
    description: "Bringing sports training closer to rural children.",
    icon: Trophy,
  },
  {
    title: "School Partnerships",
    description: "Bringing sports training closer to rural children.",
    icon: School,
  },
  {
    title: "Girls in Sports",
    description: "Encouraging and empowering girls in sports and leadership.",
    icon: Building2,
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="section">
      <div className="2xl:py-10 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-semibold uppercase tracking-wider text-[#6F962C]">
              Featured Programs
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold leading-[140%] md:leading-tight text-[#222D4E] text-[28px] lg:text-[42px]">
                Building Strong Foundation.
              </h2>

              <div className="h-1 w-16 rounded-full bg-[#74A73D]" />
            </div>
          </div>

          <button className="group items-center gap-2 text-sm font-semibold uppercase text-[#24345A] flex">
            View All Programs
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="grid gap-4 xl:gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#DCDCDC] p-4"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full">
                    <Icon className="text-[#74A73D]" size={34} />
                  </div>

                  <div className="flex flex-col justify-between gap-6 ">
                    <div className="space-y-2">
                      <h3 className="text-[18px] md:text-[20px] font-semibold leading-none text-[#222D4E]">
                        {item.title}
                      </h3>

                      <p className="text-[16px] md:text-[18px] leading-6 text-[#595959]">
                        {item.description}
                      </p>
                    </div>

                    <button className="cursor-pointer group flex w-fit items-center gap-2 text-[16px] font-semibold text-[#6BB643] transition-all">
                      <span>Learn More</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
