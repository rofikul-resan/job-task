import MiniSkeleton from "@/app/_lib/skeleton/MiniSkeleton";
import React from "react";

const OfferSectionCard2 = () => {
  return (
    <div className="bg-white p-4 h-[350px] w-full mx-auto lg:h-[450px] lg:w-[550px] rounded-lg shadow-lg overflow-hidden ml-auto flex">
      <div className=" w-[30%] ">
        <ul className="text-paragraphColor lg:text-body2 flex flex-col ">
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
      </div>
      <div className=" w-full flex-1">
        <h4 className="text-black">Results</h4>
        <p className="text-paragraphColor lg:text-body2">
          Here&apos;s what our AI came up with.
        </p>
        <div className="mt-4 space-y-2">
          <MiniSkeleton className="bg-black" theme="dark" />
          <MiniSkeleton className="bg-[#f8faff]" />
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
