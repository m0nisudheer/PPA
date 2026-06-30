import DonationBanner from "@/src/components/landingPage/donationBanner";
import FeaturedPrograms from "@/src/components/landingPage/featuredPrograms";
import FeaturedStories from "@/src/components/landingPage/featuredStories";
import Banner from "@/src/components/landingPage/heroBanner";
import ImpactSection from "@/src/components/landingPage/impactSection";
import SportsWeSupport from "@/src/components/landingPage/sportsWeSupport";
import WhyWeExist from "@/src/components/landingPage/whyWeExist";

const page = () => {
  return (
    <div className="container">
      <Banner />
      <WhyWeExist />
      <SportsWeSupport />
      <FeaturedStories />
      <FeaturedPrograms />
      <DonationBanner />
      <ImpactSection />
    </div>
  );
};

export default page;