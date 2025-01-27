import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
export interface TestimonialProps {
  name: string;
  username: string;
  hashtag: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  username,
  hashtag,
  image,
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-lg p-2 px-4  lg:py-6 h-fit w-full lg:w-[306px]">
      <div className="flex py-3 items-center gap-4">
        <div className="w-6 h-6 lg:w-11 lg:h-11 rounded-full overflow-hidden">
          <Image width={48} height={48} alt="profile pic" src={image} />
        </div>
        <div className="flex justify-between flex-grow h-full text-black">
          <div className="flex flex-col  ">
            <h4>{name}</h4>
            <p className="text-sm  ">{username}</p>
          </div>
          <div>
            <FaTwitter className="text-[#0ea5e9] mt-2 ml-4" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-black text-[14px]">{testimonial}</p>
        <p className="text-lgBlue">{hashtag}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
