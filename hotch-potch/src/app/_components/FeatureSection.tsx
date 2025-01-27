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
      } rounded-lg py-5 px-7 w-full border border-[#282A37] mb-2 `}
    >
      <h5>{title}</h5>
    </div>
  );
};

const FeatureSection = () => {
  const [cgIndex, setCgIndex] = useState<number>(1);

  return (
    <div>
      <div className="text-center pb-24">
        <h2>
          Mixland helps you <br />
          build beautiful website
        </h2>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
        className="gap-10"
      >
        {/* left side */}
        <div className="h-full">
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
        <div className=" ">
          <FeatureShowCard />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
