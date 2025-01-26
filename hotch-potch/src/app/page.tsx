import BrandSection from "./_components/BrandSection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import OfferSection from "./_components/OfferSection";
import OfferSection2 from "./_components/OfferSection2";
import ToolsSection from "./_components/ToolsSection";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="space-y-28">
        <HeroSection />
        <BrandSection />
        <OfferSection />
        <OfferSection2 />
        <ToolsSection />
      </section>
    </main>
  );
}
