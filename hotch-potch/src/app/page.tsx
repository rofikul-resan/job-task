import BrandSection from "./_components/BrandSection";
import FeatureSection from "./_components/FeatureSection";
import Footer from "./_components/Footer";
import FooterUpSection from "./_components/FooterUpSection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import OfferSection from "./_components/OfferSection";
import OfferSection2 from "./_components/OfferSection2";
import PriceSection from "./_components/PriceSection";
import TestimonialSection from "./_components/TestimonialSection";
import ToolsSection from "./_components/ToolsSection";
import SectionDivider from "./_lib/SectionDivider";

export default function Home() {
  return (
    <div>
      <main>
        <div className="max-w-[1260px] mx-auto">
          <header>
            <Navbar />
          </header>
          <section className=" px-6 lg:px-0 space-y-14 lg:space-y-28">
            <HeroSection />
            <BrandSection />
            <OfferSection />
            <OfferSection2 />
            <ToolsSection />
          </section>
        </div>
        <SectionDivider />
        <section className="max-w-[1260px] mx-auto">
          <FeatureSection />
        </section>
        <div className="w-full footer-gradient py-20">
          <section className="max-w-[1260px] mx-auto">
            <TestimonialSection />
          </section>
          <SectionDivider />
          <section className="max-w-[1260px] mx-auto">
            <PriceSection />
            <FooterUpSection />
          </section>
          <footer className="max-w-[1260px] mx-auto">
            <Footer />
          </footer>
        </div>
      </main>
    </div>
  );
}
