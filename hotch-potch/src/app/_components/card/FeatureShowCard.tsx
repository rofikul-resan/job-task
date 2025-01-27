import React from "react";

const FeatureShowCard = () => {
  return (
    <div className="p-3 bg-[#282A37] rounded-lg ">
      <div className="flex items-center gap-3 p-2">
        <div className=" h-3 w-3 rounded-full bg-[#F23936] cursor-pointer"></div>
        <div className=" h-3 w-3 rounded-full bg-[#FABB18] cursor-pointer"></div>
        <div className=" h-3 w-3 rounded-full bg-[#45C646] cursor-pointer"></div>
      </div>
      <div className="pl-4">
        <div className="py-4">
          <p className="text-paragraphColor">4 Blog Headlines Generated</p>
        </div>
        <div>
          <h4 className="py-6 border-t border-[#313342]">
            Create original content that ranks for SEO
          </h4>
          <h4 className="py-6 border-t border-[#313342]">
            Any mechanical keyboard enthusiasts in design?
          </h4>
          <h4 className="py-6 border-t border-[#313342]">
            The More Important the Work, the More Important the Rest
          </h4>
          <h4 className="py-6 border-t border-[#313342]">
            How to design a product that can grow itself 10x in year
          </h4>
          <h4 className="py-6 border-t border-[#313342]">
            Any mechanical keyboard enthusiasts in design?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowCard;
