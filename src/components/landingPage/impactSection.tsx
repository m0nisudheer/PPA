import Image from "next/image";
import {
  ArrowRight,
  LocateIcon,
  LucideIcon,
  MapPin,
  Pin,
  Target,
  Users,
  Users2,
} from "lucide-react";

type ImpactStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type ImpactCard = {
  title: string;
  type: "impact";
  map: string;
  button: string;
  stats: ImpactStat[];
};

type PartnersCard = {
  title: string;
  type: "partners";
  subtitle: string;
  button: string;
  logos: string[];
};

type PatronisersCard = {
  title: string;
  type: "patronisers";
  subtitle: string;
  button: string;
  logos: string[];
};

type Card = ImpactCard | PartnersCard | PatronisersCard;

const cards: Card[] = [
  {
    title: "Our impact across rural india",
    type: "impact",
    map: "/images/map.png",
    button: "View Our Impact",
    stats: [
      {
        icon: MapPin,
        value: "120+",
        label: "Villages Reached",
      },
      {
        icon: Pin,
        value: "15+",
        label: "Districts Covered",
      },
      {
        icon: Users2,
        value: "5000+",
        label: "Children Impacted",
      },
    ],
  },
  {
    title: "Our Partners",
    type: "partners",
    subtitle: "Stronger together. Greater impact.",
    button: "View All Partners",
    logos: [
      "/images/partner1.png",
      "/images/partner2.png",
      "/images/partner3.png",
    ],
  },
  {
    title: "Our Patronisers",
    type: "patronisers",
    subtitle: "Empowering by Visionaries. Driven by Purpose",
    button: "View All Patronisers",
    logos: ["/images/PATRONISERS1.png", "/images/PATRONISERS2.png"],
  },
];

export default function ImpactSection() {
  return (
    <section className="section">
      <div className="2xl:py-10 grid gap-4 xl:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col ${
              card.type === "patronisers" ? "gap-2.5" : "gap-4"
            } rounded-2xl border border-[#DCDCDC] bg-[#FFFFFF] p-4 md:p-6`}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-center text-[20px] font-semibold uppercase text-[#6F962C] leading-[120%] tracking-normal">
                {card.title}
              </h3>
              {card.type === "partners" && (
                <p className="text-center text-[17px] font-semibold text-[#222D4E] leading-[120%] tracking-normal">
                  {card.subtitle}
                </p>
              )}
              {card.type === "patronisers" && (
                <p className="text-center text-[17px] font-semibold text-[#222D4E] leading-[120%] tracking-normal">
                  {card.subtitle}
                </p>
              )}
            </div>

            <div className="">
              {card.type === "impact" && (
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-6">
                  <Image
                    src={card.map}
                    alt="India Map"
                    width={150}
                    height={180}
                    className="h-48 w-56"
                  />

                  <div className="w-full flex flex-col gap-6">
                    <div className="space-y-4">
                      {card.stats.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="flex items-center gap-3"
                          >
                            <Icon size={22} className="text-[#343330]" />

                            <div className="flex items-center gap-1">
                              <span className="text-[22px] md:text-[20px] font-semibold text-[#222D4E]">
                                {item.value}
                              </span>

                              <span className="text-[15px] text-[#595959]">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button className="cursor-pointer group flex items-center gap-2 text-sm font-semibold uppercase text-[#74A73D]">
                      {card.button}

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              {card.type === "partners" && (
                <div className="flex flex-col gap-7">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    {card.logos.map((logo) => (
                      <div
                        key={logo}
                        className="flex h-24 items-center justify-center rounded-xl border border-[#DCDCDC]"
                      >
                        <Image
                          src={logo}
                          alt="Partner Logo"
                          width={90}
                          height={50}
                        />
                      </div>
                    ))}
                  </div>

                  <button className="cursor-pointer group mx-auto flex items-center gap-2 text-sm font-semibold uppercase text-[#74A73D]">
                    {card.button}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              )}
            </div>

            <div>
              {card.type === "patronisers" && (
                <div className="flex flex-col gap-7">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {card.logos.map((logo) => (
                      <div
                        key={logo}
                        className="flex h-24 items-center justify-center rounded-xl border border-[#DCDCDC]"
                      >
                        <Image
                          src={logo}
                          alt="Patroniser Logo"
                          width={150}
                          height={80}
                        />
                      </div>
                    ))}
                  </div>

                  <button className="group mx-auto flex items-center gap-2 text-sm font-semibold uppercase text-[#74A73D]">
                    {card.button}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
