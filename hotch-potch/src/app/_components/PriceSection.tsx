"use client";
import React, { useState } from "react";
import PriceCard from "./card/PriceCard";

interface PricingPlan {
  id: string;
  name: string;
  price: string; // Assuming price is always in the format "$XX/month"
  teamSize: string;
  features: string[];
}

const priceData: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    price: "$29",
    teamSize: "1-15 people",
    features: [
      "10 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "1 Year Support",
    ],
  },
  {
    id: "basic",
    name: "Basic Plan",
    price: "$79",
    teamSize: "1-50 people",
    features: [
      "15 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "5 Year Support",
      "Free Custom Domain",
      "Basic Statistics",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$129",
    teamSize: "1-100 people",
    features: [
      "20 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "Unlimited Support",
      "Free Custom Domain",
      "Full Statistics",
    ],
  },
];

const PriceSection = () => {
  const [activeId, setActiveId] = useState<string>("basic");
  return (
    <div className="w-10/12 mx-auto">
      <div className="w-2/3 mx-auto text-center space-y-10 py-20">
        <div className="px-20">
          <h2>Make the wise decision for your business</h2>
          <p
            style={{ fontSize: "18px" }}
            className="text-paragraphColor  tracking-widest mt-10"
          >
            Choose from our affordable 3 packages
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {priceData.map((price) => (
          <div
            className="h-full"
            key={price.id}
            onClick={() => setActiveId(price.id)}
          >
            <PriceCard
              activeId={activeId}
              features={price.features}
              id={price.id}
              name={price.name}
              price={price.price}
              teamSize={price.teamSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
