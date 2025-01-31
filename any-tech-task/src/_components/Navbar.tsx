import Image from "next/image";
import React from "react";
import logo from "@/asset/logo.svg";
import Button from "@/_lib/Button";
import { TbWorld } from "react-icons/tb";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" text-white max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] z-[9999] container flex items-center flex-wrap justify-between  ">
      <div>
        <Image
          src={logo}
          alt="nav logo"
          height={200}
          width={300}
          className="h-7 w-auto"
        />
      </div>
      <ul className=" flex items-center mb-1">
        <li className="relative px-6 py-3 flex items-center justify-between gap-2 group transition-all  ">
          <span>Solutions</span> <FaAngleDown className="mt-1" />
          <ul className="absolute hidden opacity-0 top-12 rounded  left-6 bg-white w-[240px] h-[300%] inset-0 text-black group-hover:block group-hover:opacity-100 duration-300">
            <li className="py-3 px-4 w-[240px] border-b-[0.5px] hover:text-primary  border-gray-200">
              AnyCaaS
            </li>
            <li className="py-3 px-4 w-[240px] border-b-[0.5px] hover:text-primary  border-gray-200">
              AnyBaaS
            </li>
            <li className="py-3 px-4 w-[240px]  hover:text-primary  ">
              AnyPaaS
            </li>
          </ul>
        </li>
        <li className="px-6 py-3 hover:border-b border-white">Services</li>
        <li className="px-6 py-3 hover:border-b border-white">About Us</li>
        <li className="px-6 py-3 ">
          <Button
            style={{ borderRadius: "9999px", textTransform: "uppercase" }}
            className="border-white border  h-full "
          >
            <span>
              <TbWorld />
            </span>
            <span className="w-full">en</span>
            <span>
              <FaAngleDown />
            </span>
          </Button>
        </li>
      </ul>
      <div>
        <Button
          className="border border-white bg-transparent hover:bg-white hover:text-primary transition-all hover:shadow-md gap-2 group  
        "
        >
          <span>Contact Us</span>{" "}
          <span className="group-hover:translate-x-2 duration-500 delay-150">
            <FaAngleRight />
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
