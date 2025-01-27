import Image from "next/image";
import React from "react";

interface ToolsCardProps {
  image: string;
  title: string;
  details: string;
}
const ToolsCard: React.FC<ToolsCardProps> = ({ image, title, details }) => {
  return (
    <div className="flex justify-between gap-2 lg:gap-4 rounded-lg p-2 lg:p-4 bg-[#282A37] shadow-md">
      <div className="h-9 w-9 ">
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
    </div>
  );
};

export default ToolsCard;
