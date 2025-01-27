"use client";
import Button from "@/app/_lib/Button";
import React from "react";
import { motion } from "framer-motion";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  teamSize: string;
  features: string[];
  activeId: string;
  index: number;
}

const PriceCard: React.FC<PricingPlan> = ({
  name,
  price,
  teamSize,
  features,
  id,
  activeId,
  index,
}) => {
  return (
    <motion.div
      className="max-w-md mx-auto p-8 rounded-2xl bg-[#282A37] flex flex-col justify-between h-full hover:-translate-y-4 duration-150"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: index * 0.2,
        },
      }}
    >
      <div>
        <p className="mb-10 ">{name}</p>
        <div>
          {" "}
          <h2>
            {price} <span className="text-sm font-light">/ month</span>
          </h2>
          <p style={{ fontWeight: 300 }} className="my-6 tracking-wide">
            This package is suitable for teams <span>{teamSize}</span>.
          </p>
        </div>
        <div className="space-y-4">
          <h4>What’s included:</h4>
          <ul className="space-y-4 font-light tracking-wide text-paragraphColor">
            {features.map((ftr: string, idx: number) => (
              <li key={idx}>{ftr}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Button
          className={`${
            activeId === id ? "main-gradient border-0" : ""
          } border w-full border-black py-4  mt-10`}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default PriceCard;
