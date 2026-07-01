import { ArrowRight, PersonStanding } from "lucide-react";
import Image from "next/image";
import { FaRunning } from "react-icons/fa";

const FeaturedStories = () => {
  const stories = [
    {
      name: "Manvitha Sri",
      sport: "Athletics",
      achievement:
        "Event: shot put, long jump National participation, Gujarat  9th class",
      image: "/images/realStory1.png",
    },
    {
      name: "S. Ravinder",
      sport: "Athletics",
      achievement:
        "Event: 1600 Age 15, National Bihar participations  Inter 1st year",
      image: "/images/realStory3.png",
    },
    {
      name: "Ch. Nagaraju",
      sport: "Athletics",
      achievement: "Gold Medal Walk Race",
      image: "/images/realStory2.png",
    },
  ];
  return (
    <section className="section">
      <div className="2xl:py-10 flex flex-col gap-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] 2xl:text-[18px] font-semibold uppercase tracking-wider text-[#6F962C]">
              Featured Stories
            </p>

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="font-semibold leading-[140%] 2xl:leading-tight text-[#222D4E] text-[28px] 2xl:text-[42px]">
                Real Stories. Real Impact.
              </h2>

              <div className="h-1 w-16 rounded-full bg-[#74A73D]" />
            </div>
          </div>

          <button className="cursor-pointer group flex items-center gap-2 text-[13px] 2xl:text-sm font-semibold uppercase text-[#24345A]">
            View All Stories
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2 2xl:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group flex h-full overflow-hidden rounded-2xl border border-[#DCDCDC] bg-whit[#FFFFFF]"
            >
              <div className="w-30 shrink-0">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={120}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 justify-between p-4 xl:p-6">
                <div className="space-y-2 2xl:space-y-3">
                  <h3 className="text-[18px] 2xl:text-[20px] font-semibold leading-tight text-[#222D4E]">
                    {story.name}
                  </h3>

                  <p className="inline-flex w-fit items-center gap-2 text-[12px] 2xl:text-[14px] font-medium text-[#222D4E]">
                    <FaRunning className="text-[#6F962C]" />
                    <span>{story.sport}</span>
                  </p>

                  <p className="text-[13px] 2xl:text-[16px] leading-[120%] xl:leading-[150%] text-[#595959]">
                    {story.achievement}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 text-[12px] 2xl:text-sm font-semibold uppercase text-[#222D4E]">
                  Read Full Story
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
