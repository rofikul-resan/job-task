import React from "react";

const nabBtnStyle: React.CSSProperties = {
  height: "10px",
  width: "10px",
};

const OfferSectionSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full shadow-md rounded-md bg-white">
      <div className="flex px-2 py-1  items-center  gap-2">
        <div style={nabBtnStyle} className=" rounded-full bg-[#f23936]"></div>
        <div style={nabBtnStyle} className=" rounded-full bg-[#fabb18]"></div>
        <div style={nabBtnStyle} className=" rounded-full bg-[#45c646] "></div>
      </div>
      <div className=" p-4">
        <div className="h-1.5 w-20  bg-[#2B59FF] rounded mb-4"></div>
        <div className="space-y-1">
          <div className="h-1.5 w-11/12 bg-[#e1e3e8] rounded"></div>
          <div className="h-1.5 w-9/12 bg-[#e1e3e8] rounded"></div>
          <div className="h-1.5 w-7/12 bg-[#e1e3e8] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default OfferSectionSkeleton;
