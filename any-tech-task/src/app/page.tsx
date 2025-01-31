import Navbar from "@/_components/Navbar";
import HeroSection from "./(home)/_components/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto sticky top-0 z-20 ">
        <Navbar />
      </div>
      <HeroSection />
    </main>
  );
}
