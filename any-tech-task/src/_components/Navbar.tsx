import Image from "next/image";
import React from "react";
import logo from "@/asset/logo.svg";
import Button from "@/_lib/Button";

const Navbar = () => {
  return (
    <nav className="bg-black text-white max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999] container flex items-center flex-wrap justify-between  ">
      <div>
        <Image
          src={logo}
          alt="nav logo"
          height={200}
          width={300}
          className="h-7 w-auto"
        />
      </div>
      <ul className=" flex gap-4 items-center">
        <li>Solutions</li>
        <li>Services</li>
        <li>About Us</li>
        <li>
          <Button
            style={{ borderRadius: "9999px", textTransform: "uppercase" }}
            className="border-white border "
          >
            <span className="w-full">en</span>
          </Button>
        </li>
      </ul>
      <div>
        <Button
          className="bg-secondary
        "
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
