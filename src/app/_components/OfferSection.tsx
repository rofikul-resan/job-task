import Button from "@/lib/Button";
import React from "react";
import OfferSectionCard from "./card/offerSectionCard/OfferSectionCard";

const OfferSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto mt-10 items-center">
      <div>
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
