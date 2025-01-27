"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const animateFun = (index: number) => {
  const animate: Variants = {
    hidden: { opacity: 0, x: 5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.3 },
    },
  };
  return animate;
};

const FeatureShowCard = () => {
  return (
    <div className="p-3 bg-[#282A37] rounded-lg overflow-hidden ">
      <div className="flex items-center gap-3 p-2">
        <div className=" h-3 w-3 rounded-full bg-[#F23936] cursor-pointer"></div>
        <div className=" h-3 w-3 rounded-full bg-[#FABB18] cursor-pointer"></div>
        <div className=" h-3 w-3 rounded-full bg-[#45C646] cursor-pointer"></div>
      </div>
      <div className="pl-4">
        <div className="py-4">
          <p className="text-paragraphColor">4 Blog Headlines Generated</p>
        </div>
        <motion.div initial="hidden" whileInView={"visible"}>
          <motion.h4
            className="py-6 border-t border-[#313342]"
            variants={animateFun(1)}
          >
            Create original content that ranks for SEO
          </motion.h4>
          <motion.h4
            className="py-6 border-t border-[#313342]"
            variants={animateFun(2)}
          >
            Any mechanical keyboard enthusiasts in design?
          </motion.h4>
          <motion.h4
            className="py-6 border-t border-[#313342]"
            variants={animateFun(3)}
          >
            The More Important the Work, the More Important the Rest
          </motion.h4>
          <motion.h4
            className="py-6 border-t border-[#313342]"
            variants={animateFun(4)}
          >
            How to design a product that can grow itself 10x in year
          </motion.h4>
          <h4 className="py-6 border-t border-[#313342]">
            Any mechanical keyboard enthusiasts in design?
          </h4>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureShowCard;
