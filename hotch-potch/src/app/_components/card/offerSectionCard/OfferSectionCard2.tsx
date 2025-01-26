import MiniSkeleton from "@/app/_lib/skeleton/MiniSkeleton";
import React from "react";

const OfferSectionCard2 = () => {
  return (
    <div
      style={{
        height: "450px",
        width: "550px",
      }}
      className="bg-white p-4 rounded-lg shadow-lg overflow-hidden ml-auto flex"
    >
      <div className=" w-[30%]">
        <ul className="text-paragraphColor text-body2 flex flex-col ">
          <li className="hover:underline">Blog Outline</li>
          <li className="hover:underline">Blog Intro </li>
          <li className="hover:underline">Blog Conclusion </li>
          <li className="hover:underline">AIDA </li>
          <li className="hover:underline">PAS </li>
          <li className="hover:underline">Content Rewriter </li>
          <li className="h-1.5 w-[95%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[90%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[55%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[65%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[75%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[95%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[91%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[85%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[55%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[90%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[95%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[45%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
          <li className="h-1.5 w-[35%] rounded-lg bg-[#e4e8ef] animate-pulse mt-4"></li>
        </ul>
        {/* <ul className="space-y-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <li
              key={index}
              className="h-1.5 w-[95%] rounded-lg bg-[#e4e8ef] animate-pulse"
            >
              {" "}
            </li>
          ))}
        </ul> */}
      </div>
      <div className=" w-full flex-1">
        <h4 className="text-black">Results</h4>
        <p className="text-paragraphColor text-body2">
          Here&apos;s what our AI came up with.
        </p>
        <div className="mt-4 space-y-2">
          <MiniSkeleton className="bg-black" />
          <MiniSkeleton className="bg-[#dee2ee]" />
          <MiniSkeleton className="bg-[#f8faff]" />
          <MiniSkeleton className="bg-[#f8faff]" />
          <MiniSkeleton className="bg-[#f8faff]" />
          <MiniSkeleton className="bg-[#f8faff]" />
        </div>
      </div>
    </div>
  );
};

export default OfferSectionCard2;
