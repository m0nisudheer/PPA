import DonationCard from "../../components/donationCard";
import ImpactCard from "../../components/donationImpact";
import Banner from "../../components/heroBanner";

import { CalendarDays, UserRound, Building2, Gift } from "lucide-react";
import OtherWays from "../../components/otherWays";
import TaxBanner from "../../components/taxBanner";
import TrustCard from "../../components/trustCard";
import BeTheReason from "@/src/components/beTheReason";

export const impactData = [
  {
    id: 1,
    title: "Access to Sports",
    description: "Provides equipment and infrastructure in rural areas.",
    icon: "/images/donationImpact/access.png",
    image: "/images/donationImpact/accessImage.png",
  },
  {
    id: 2,
    title: "Quality Coaching",
    description: "Professional training to nurture talent.",
    icon: "/images/donationImpact/coach.png",
    image: "/images/donationImpact/coachImage.png",
  },
  {
    id: 3,
    title: "Nutrition & Health",
    description: "Proper nutrition and healthcare for young athletes.",
    icon: "/images/donationImpact/nutrition.png",
    image: "/images/donationImpact/nutritionImage.png",
  },
  {
    id: 4,
    title: "Education & Values",
    description: "Education support and value-based development.",
    icon: "/images/donationImpact/education.png",
    image: "/images/donationImpact/education.png",
  },
  {
    id: 5,
    title: "Opportunities",
    description: "Exposure to tournaments and scholarships.",
    icon: "/images/donationImpact/opportunities.png",
    image: "/images/donationImpact/opportunitiesImage.png",
  },
];

export const giveData = [
  {
    id: 1,
    title: "Monthly Giving",
    description:
      "Become a monthly donor and create a sustained impact every month.",
    button: "DONATE MONTHLY",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Sponsor a Child",
    description:
      "Support a child's training, education and overall development.",
    button: "SPONSOR NOW",
    icon: UserRound,
  },
  {
    id: 3,
    title: "Corporate Partnership",
    description:
      "Partner with us to empower rural talent and build stronger communities.",
    button: "PARTNER WITH US",
    icon: Building2,
  },
  {
    id: 4,
    title: "In-Kind Donations",
    description:
      "Contribute sports equipment, gear, nutrition or other essentials.",
    button: "KNOW MORE",
    icon: Gift,
  },
];

export const trustData = [
  {
    id: 1,
    title: "100% Secure Donations",
    description: "Your transaction is safe with us.",
    icon: "/images/trust/lock.png",
  },
  {
    id: 2,
    title: "Transparent Operations",
    description: "We ensure accountability and transparency.",
    icon: "/images/trust/transparent.png",
  },
  {
    id: 3,
    title: "Verified Organization",
    description:
      "Registered non-profit organization working for rural sports development.",
    icon: "/images/trust/Verified.png",
  },
  {
    id: 4,
    title: "Impact Driven",
    description: "Your contribution creates measurable change.",
    icon: "/images/trust/focus.png",
  },
];

const Page = () => {
  return (
    <div className="container">
      <main className="pt-20">
        <section className="relative">
          <Banner />

          <div
            className="relative z-20 mx-auto -mt-10 xl:-mt-30 section"
            id="donate-card"
          >
            <DonationCard />
          </div>
        </section>

        <section className="section">
          <div className="flex flex-col gap-8 rounded-2xl bg-[#F6F8F5] p-4 md:p-8">
            <h2 className="text-[28px] md:text-[40px] font-bold uppercase">
              Your Donation Makes an Impact
            </h2>

            <div className="grid grid-cols-1 gap-9 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {impactData.map((item) => (
                <ImpactCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="flex flex-col gap-8 rounded-2xl bg-[#F6F8F5] p-4 md:p-8">
            <h2 className="text-[28px] md:text-[40px] font-bold uppercase">
              Other Ways to Give
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {giveData.map((item) => (
                <OtherWays key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* <section className="section">
          <TaxBanner />
        </section> */}
        <section className="section">
          <div className="grid gap-8 rounded-2xl bg-[#F6F8F5] p-6 md:grid-cols-2 xl:grid-cols-4">
            {trustData.map((item) => (
              <TrustCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className="section">
          <BeTheReason/>
        </section>

      </main>
    </div>
  );
};

export default Page;
