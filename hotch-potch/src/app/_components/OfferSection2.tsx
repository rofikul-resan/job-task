import React from "react";
import Button from "../_lib/Button";
import OfferSectionCard2 from "./card/offerSectionCard/OfferSectionCard2";

const OfferSection2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto mt-10 items-center">
      <div className=" lg:w-10/12 space-y-3 lg:space-y-6 text-center ">
        <h2>
          Write what you want to convey through clear, & authentic writing
        </h2>
        <p className="text-paragraphColor tracking-wider ">
          AI-Writer is the most accurate content generation platform and writing
          tool that helps you transform your text into a completely
          personalized.
        </p>
        <Button className="main-gradient px-3">Start 14 Days Free Trial</Button>
      </div>
      <div className="relative ">
        <div className="h-48 w-48 absolute bottom-10 left-20 bg-[#9F36F2B2] rounded-full blur-[150px] -z-10 animate-pulse">
          {/* bg blue light  */}
        </div>
        {/* <div className="absolute top-1/2 right-20  z-10 w-[240px] h-[105px] bg-white shadow-md rounded-md overflow-hidden ">
          <OfferSectionSkeleton />
        </div> */}
        <OfferSectionCard2 />
      </div>
    </div>
  );
};

export default OfferSection2;
