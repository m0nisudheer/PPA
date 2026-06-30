import Image from "next/image";
import { Target, Medal, Handshake } from "lucide-react";

export default function WhyWeExist() {
  const features = [
    {
      icon: Target,
      title: "Equal Opportunity",
      subtitle: "for Every Child",
    },
    {
      icon: Medal,
      title: "Holistic Development",
      subtitle: "through Sports",
    },
    {
      icon: Handshake,
      title: "Building Confidence",
      subtitle: "and Character",
    },
  ];

  return (
    <div className="section">
      <div className="2xl:py-10 mx-auto">
        <div className="grid items-center gap-8 xl:gap-16 xl:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[18px] font-semibold uppercase tracking-wider text-[#6F962C]">
                Why We Exist
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold leading-[140%] md:leading-tight text-[#222D4E] text-[28px] lg:text-[42px]">
                  Every Village Has Talent.
                  <br />
                  We Help Them Discover It.
                </h2>

                <div className="h-1 w-16 rounded-full bg-[#74A73D]" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-[20px] text-[#161616]">
                Millions of children in rural India have the talent, passion and
                determination to achieve great things in sports. What they lack
                is access, guidance and opportunity.
              </p>

              <p className="text-[20px] text-[#161616]">
                Palle Palleku Aata exists to change that. We identify young
                talent in rural communities and nurture them through structured
                training, mentorship and exposure, helping them build a brighter
                future.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 md:gap-4 ${
                      index !== 0 ? "md:border-l border-gray-200 md:pl-2" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center shrink-0">
                      <Icon size={28} className="text-[#74A73D]" />
                    </div>

                    <p className="text-[17px] text-[#161616] leading-6">
                      {feature.title}
                      {feature.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="md:row-span-2">
              <Image
                src="/images/whyWeExist1.png"
                alt=""
                width={500}
                height={650}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <Image
              src="/images/whyWeExist2.png"
              alt=""
              width={300}
              height={300}
              className="h-full 2xl:h-[250px] object-top w-full rounded-xl object-cover"
            />

            <Image
              src="/images/whyWeExist3.png"
              alt=""
              width={300}
              height={300}
              className="h-full 2xl:h-[250px] object-top w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
