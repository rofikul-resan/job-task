import React from "react";
import band1 from "@/assets/band1.png";
import band2 from "@/assets/band2.png";
import band3 from "@/assets/band3.png";
import band4 from "@/assets/band4.png";
import band5 from "@/assets/band5.png";
import band6 from "@/assets/band6.png";
import band7 from "@/assets/band7.png";
import band8 from "@/assets/band8.png";

import Image, { StaticImageData } from "next/image";

const bandLogo: StaticImageData[] = [
  band1,
  band2,
  band3,
  band4,
  band5,
  band6,
  band7,
  band8,
];

const BrandSection = () => {
  return (
    <div className="w-10/12 mx-auto py-20 ">
      <h3 className="text-center">Trusted by nearly 5000+ paying customers</h3>
      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4  justify-between">
          {bandLogo.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
