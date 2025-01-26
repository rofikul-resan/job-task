import Image from "next/image";
import React from "react";

interface ToolsCardProps {
  image: string;
  title: string;
  details: string;
}
const ToolsCard: React.FC<ToolsCardProps> = ({ image, title, details }) => {
  return (
    <div className="flex rounded-lg p-4 bg-[#282A37] shadow-md">
      <div>
        <Image src={image} alt={title} height={34} width={34} />
      </div>
      <div className="space-y-2 ml-4">
        <h3 className="text-headlineColor">{title}</h3>
        <p className="text-paragraphColor text-sm">{details}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
