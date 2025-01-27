"use client";
import Button from "@/app/_lib/Button";
import React from "react";
import OfferSectionCard from "./card/offerSectionCard/OfferSectionCard";
import OfferSectionSkeleton from "@/app/_lib/skeleton/OfferSectonSkeleton";
import { motion } from "framer-motion";

const OfferSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto mt-10 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="h-48 w-48 absolute lg:top-28 right-20 bg-[#9F36F2B2] rounded-full blur-[150px] -z-10 animate-pulse">
          {/* bg blue light  */}
        </div>
        <motion.div
          className="absolute top-1/2 right-10 lg:right-20  z-10 w-[120px] lg:w-[240px] h-[60px] lg:h-[105px] bg-white shadow-md rounded-md overflow-hidden "
          initial={{
            x: 100,
            y: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: [1, 1],
            transition: { duration: 0.5 },
          }}
        >
          <OfferSectionSkeleton />
        </motion.div>
        <OfferSectionCard />
      </div>
      <motion.div
        className=" lg:w-10/12 space-y-3 lg:space-y-6 ml-auto order-1 lg:order-2 text-center lg:text-left"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
      >
        <h2>
          Create content efficiently and quickly with great AI writing tools
        </h2>
        <p className="text-paragraphColor tracking-wider ">
          150k+ users. No Credit Card Required. Pro designs and writing at no
          cost. Start for free. Ai Writer Tool | Generate text for ecom, social
          media, website, sales, blogs etc.
        </p>
        <Button className="main-gradient px-3">Start 14 Days Free Trial</Button>
      </motion.div>
    </div>
  );
};

export default OfferSection;
