import Image from "next/image";
import React from "react";
import heroImg from "@/asset/herobg.jpg";
import { ReactComponent as HeroSvg1 } from "@/asset/backgrounds/WaveLinesDesktop1.svg";
import { ReactComponent as HeroSvg2 } from "@/asset/backgrounds/WaveLinesDesktop2.svg";
import { ReactComponent as HeroSvg3 } from "@/asset/backgrounds/WaveLinesDesktop3.svg";
import { ReactComponent as HeroSvg4 } from "@/asset/backgrounds/WaveLinesDesktop4.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* background image  */}
      <div className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white hero-bg-clip overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] hero-bg-gradient -z-[99999]">
        {/* hero image  */}
        <div className="absolute hero-bg-image-clip h-full hidden left-1/2 lg:block lg:w-full pointer-events-none  top-0 xl:left-[35%] xl:w-[65%]">
          <Image
            src={heroImg}
            alt="hero bg"
            height={600}
            width={600}
            className="object-cover w-[105%] h-[105%]"
          />
        </div>
        <div className="absolute inset-0 z-10">
          <HeroSvg1 />
          <HeroSvg2 />
          <HeroSvg3 />
          <HeroSvg4 />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
