"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ToolsCardProps {
  image: string;
  title: string;
  details: string;
  index: number;
}
const ToolsCard: React.FC<ToolsCardProps> = ({
  image,
  title,
  details,
  index,
}) => {
  return (
    <div>
      <motion.div
        className="flex justify-between gap-2 lg:gap-4 rounded-lg p-2 lg:p-4 bg-[#282A37] shadow-md"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.1,
            delay: index * 0.1,
            stiffness: 50,
            type: "spring",
          },
        }}
      >
        <div className="h-9 w-9">
          <Image
            src={image}
            alt={title}
            height={34}
            width={34}
            className="w-full"
          />
        </div>
        <div className="lg:space-y-2 w-10/12">
          <h5 className="text-headlineColor">{title}</h5>
          <p className="text-paragraphColor text-sm tracking-tighter">
            {details}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ToolsCard;
