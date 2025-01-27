import BrandSection from "./_components/BrandSection";
import FeatureSection from "./_components/FeatureSection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import OfferSection from "./_components/OfferSection";
import OfferSection2 from "./_components/OfferSection2";
import TestimonialSection from "./_components/TestimonialSection";
import ToolsSection from "./_components/ToolsSection";

export default function Home() {
  return (
    <div>
      <main className="max-w-[1260px] mx-auto">
        <header>
          <Navbar />
        </header>
        <section className="space-y-28">
          <HeroSection />
          <BrandSection />
          <OfferSection />
          <OfferSection2 />
          <ToolsSection />
          <FeatureSection />
        </section>
      </main>
      <div className="w-full footer-gradient py-20">
        <section className="max-w-[1260px] mx-auto">
          <TestimonialSection />
        </section>
      </div>
    </div>
  );
}
