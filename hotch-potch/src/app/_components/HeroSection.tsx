"use client";
import Button from "@/app/_lib/Button";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className=" py-10 lg:py-24 flex items-center justify-center relative ">
      {/* background color */}
      <div className="absolute inset-0 -z-10">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="h-20 lg:h-48 w-20 lg:w-48 rounded-full  absolute top-[60px] lg:top-[80px] left-1/2 -translate-x-1/2 bg-[#9F36F2B2] blur-[80px] lg:blur-[150px]"></div>
        <div className="lg:h-32 lg:w-32 h-10 w-10 rounded-full  absolute lg:top-[400px] left-[20px]  bg-[#FFCF7366] blur-[80px] lg:blur-[150px] "></div>
        <div className="h-32 w-32 rounded-full  absolute bottom-0 right-[100px]  bg-[#F23690B2] blur-[100px] "></div>
      </div>

      {/* main text */}
      <motion.div
        className="w-11/12 lg:w-[40%] mx-auto text-center pb-6 lg:pb-10 space-y-4 lg:space-y-10"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, stiffness: 50 },
        }}
      >
        <div>
          <h1>
            Write better content for your{" "}
            <span className="underline bg-clip-text  text-transparent bg-gradient-to-l from-[#FFC947] to-[#FC6739] ">
              Facebook Ads{" "}
            </span>
          </h1>{" "}
          <div className="bg-gradient-to-l from-[#FFC947] to-[#FC6739] w-[72%] mx-auto h-1.5"></div>{" "}
        </div>
        <p className="text-paragraphColor">
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </p>
        <div className="flex gap-2 flex-col w-fit mx-auto">
          <motion.div
            initial={{
              x: -100,
              y: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, stiffness: 50, delay: 0.3 },
            }}
          >
            <Button className="main-gradient w-fit px-3">
              Start 14 Days Free Trial
            </Button>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              y: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                stiffness: 50,
                delay: 0.3,
                type: "",
              },
            }}
          >
            <Button className=" w-full flex items-center justify-center gap-2 light-btn">
              <FaPlayCircle className="icon-btn" />
              <span>Watch A Demo</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <hr className="w-full  h-[1px] bg-[#221d2b] absolute bottom-10 left-0 opacity-25" />
    </div>
  );
};

export default HeroSection;
