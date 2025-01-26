import Button from "@/lib/Button";
import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" py-24 flex items-center justify-center relative">
      {/* background color */}
      <div className="absolute inset-0 -z-10">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* main text */}
      <div className="absolute inset-0 z-10">
        <div className="h-48 w-48 rounded-full  absolute top-[200px] left-1/2  bg-[#9F36F2B2] blur-[200px]"></div>
        <div className="h-32 w-32 rounded-full  absolute top-[400px] -left-[200px]  bg-[#FFCF7366] blur-[200px] "></div>
        <div className="h-32 w-32 rounded-full  absolute bottom-0 -right-[200px]  bg-[#F23690B2] blur-[200px] "></div>
      </div>

      {/* main text */}
      <div className="w-[40%] mx-auto text-center  pb-10 space-y-10">
        <div>
          <h1>
            Write better content for your{" "}
            <span className="underline bg-clip-text  text-transparent bg-gradient-to-l from-[#FFC947] to-[#FC6739] ">
              Facebook Ads{" "}
            </span>
          </h1>{" "}
          <div className="bg-gradient-to-l from-[#FFC947] to-[#FC6739] w-[72%] mx-auto h-1.5"></div>{" "}
        </div>
        <p>
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </p>
        <div className="flex gap-2 flex-col w-fit mx-auto">
          <Button className="main-gradient w-fit px-3">
            Start 14 Days Free Trial
          </Button>
          <Button className=" w-full flex items-center justify-center gap-2">
            <FaPlayCircle />
            <span>Watch A Demo</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
