import Button from "@/app/_lib/Button";
import React from "react";
import OfferSectionCard from "./card/offerSectionCard/OfferSectionCard";
import OfferSectionSkeleton from "@/app/_lib/skeleton/OfferSectonSkeleton";

const OfferSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto mt-10 items-center">
      <div className="relative">
        <div className="h-48 w-48 absolute top-28 right-20 bg-[#9F36F2B2] rounded-full blur-[150px] -z-10 animate-pulse">
          {/* bg blue light  */}
        </div>
        <div className="absolute top-1/2 right-20  z-10 w-[240px] h-[105px] bg-white shadow-md rounded-md overflow-hidden ">
          <OfferSectionSkeleton />
        </div>
        <OfferSectionCard />
      </div>
      <div className=" w-10/12 space-y-6 ml-auto">
        <h2>
          Create content efficiently and quickly with great AI writing tools
        </h2>
        <p className="text-paragraphColor tracking-wider ">
          150k+ users. No Credit Card Required. Pro designs and writing at no
          cost. Start for free. Ai Writer Tool | Generate text for ecom, social
          media, website, sales, blogs etc.
        </p>
        <Button className="main-gradient px-3">Start 14 Days Free Trial</Button>
      </div>
    </div>
  );
};

export default OfferSection;
