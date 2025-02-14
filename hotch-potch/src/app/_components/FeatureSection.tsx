"use client";
import React from "react";
import { useState } from "react";
import FeatureShowCard from "./card/FeatureShowCard";

const featureCategoryList: string[] = [
  "Blog Headlines",
  "Blog Intros",
  "Content Rewriter",
  "Facebook Ads",
  "Product Description",
  "PAS Copywriting Formula",
];

const FeatureCategoryButton = (props: {
  title: string;
  index: number;
  cgIndex: number;
  onclick?: () => void;
}) => {
  const { title, onclick, index, cgIndex } = props;
  return (
    <div
      onClick={onclick}
      className={`${
        cgIndex === index ? "main-gradient" : " "
      } rounded-lg py-2 lg:py-5 px-7 w-full border border-[#282A37] mb-2 `}
    >
      <h5>{title}</h5>
    </div>
  );
};

const FeatureSection = () => {
  const [cgIndex, setCgIndex] = useState<number>(0);

  return (
    <div className=" pb-12 lg:pb-24 px-4">
      <div className="text-center pb-12 lg:pb-24">
        <h2>
          Mixland helps you <br />
          build beautiful website
        </h2>
      </div>
      <div className="gap-10 lg:flex">
        {/* left side */}
        <div className="h-full lg:w-1/3">
          {featureCategoryList.map((category, idx) => (
            <div key={idx} onClick={() => setCgIndex(idx)}>
              <FeatureCategoryButton
                index={idx}
                cgIndex={cgIndex}
                title={category}
              />
            </div>
          ))}
        </div>

        {/* right side */}
        <div className=" relative  lg:flex-1">
          <div className="h-48 w-48 rounded-full absolute bg-[#9F36F2B2] bottom-10 left-48 blur-[150px] -z-10"></div>
          <FeatureShowCard />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
