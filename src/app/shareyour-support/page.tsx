import CTA from "@/src/components/shareUrSupport/cta";
import Banner from "@/src/components/shareUrSupport/heroBanner";
import SupportCard from "@/src/components/shareUrSupport/supportCard";

const Page = () => {
  return (
    <div className="container">
      <main className="pt-20">
        <section className="relative">
          <Banner />

          <div className="relative z-20 mx-auto -mt-16 xl:-mt-30 section">
            <SupportCard />
            <CTA />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
