import Image from "next/image";
import React from "react";
import heroImg from "@/asset/herobg.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* background image  */}
      <div className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white hero-bg-clip overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] hero-bg-gradient -z-[99999]">
        {/* hero image  */}
        <div className="absolute hero-bg-image-clip h-full hidden left-1/2 lg:block lg:w-full pointer-events-none svelte-1lc7tvy top-0 xl:left-[35%] xl:w-[65%]">
          <Image
            src={heroImg}
            alt="hero bg"
            height={600}
            width={600}
            className="object-cover w-[105%] h-[105%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
