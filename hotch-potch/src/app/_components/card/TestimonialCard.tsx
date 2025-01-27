import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
interface TestimonialProps {
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
    <div className="bg-white rounded-lg px-4 py-6">
      <div className="flex py-3">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <Image width={43} height={43} alt="profile pic" src={image} />
        </div>
        <div className="flex justify-between flex-grow h-full">
          <div className="flex flex-col justify-between h-full">
            <h5>{name}</h5>
            <p className="text-sm">{username}</p>
          </div>
          <div>
            <FaTwitter className="text-[#0ea5e9]" />
          </div>
        </div>
      </div>
      <div>
        <p>{testimonial}</p>
        <p className="text-lgBlue">{hashtag}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
