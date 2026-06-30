import { ArrowRight, PersonStanding } from "lucide-react";
import Image from "next/image";
import { FaRunning } from "react-icons/fa";

const FeaturedStories = () => {
  const stories = [
    {
      name: "Manvitha Sri",
      sport: "Athletics",
      achievement:
        "Event: Shot put, Long Jump\nNational participation, Gujarat\n9th Class",
      image: "/images/realStory1.png",
    },
    {
      name: "S. Ravinder",
      sport: "Athletics",
      achievement:
        "Event: 1600\nAge: 16, National Bihar participations\nInter 1st year",
      image: "/images/realStory3.png",
    },
    {
      name: "Ch. Nagaraju",
      sport: "Athletics",
      achievement: "Gold Medal\nWalk Race",
      image: "/images/realStory2.png",
    },
  ];
  return (
    <section className="section">
      <div className="2xl:py-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-semibold uppercase tracking-wider text-[#6F962C]">
              Featured Stories
            </p>

            <div className="flex flex-col gap-2">
                 <h2 className="font-semibold leading-[140%] md:leading-tight text-[#222D4E] text-[28px] lg:text-[42px]">
             
                Real Stories. Real Impact.
              </h2>

              <div className="h-1 w-16 rounded-full bg-[#74A73D]" />
            </div>
          </div>

          <button className="group hidden items-center gap-2 text-sm font-semibold uppercase text-[#24345A] lg:flex">
            View All Stories
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="grid gap-4 xl:gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group flex overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={120}
                  height={150}
                  className="h-full md:w-full rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 justify-between p-2 xl:p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#222D4E] leading-[100%] tracking-normal">
                    {story.name}
                  </h3>

                  <p className="flex items-center gap-2 text-[14px] text-[#222D4E">
                    <FaRunning className="text-[#6F962C]" />
                    <span>{story.sport}</span>
                  </p>

                  <p className="whitespace-pre-line text-[15px] md:text-[18px] leading-[150%] tracking-normal text-[#595959]">
                    {story.achievement}
                  </p>
                </div>

                <button className="cursor-pointer group inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#222D4E]">
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
