"use client";
import Button from "@/app/_lib/Button";
import Hamburger from "hamburger-react";
import Image from "next/image";
import React, { useState } from "react";

const navLinks: string[] = ["Demos", "About", "Blog", "Pages", "Contact"];

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="flex  items-center lg:justify-between px-4 lg:px-0">
        {/* navigation  hamburger */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="flex justify-between lg:items-center ">
          <div className="h-14 w-14 ">
            <Image
              src={"/logo.png"}
              height={32}
              width={78}
              alt="Logo"
              className="h-full w-full"
            />
          </div>
          <div className="ml-10 hidden lg:block">
            <ul className="flex gap-10 items-center ">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="font-sm text-sm capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-center ml-auto ">
          <Button className="text-headlineColor  border-white/30 border light-btn">
            Sing In
          </Button>
          <Button className="text-headlineColor  main-gradient  ">
            Get Started Free
          </Button>
        </div>
      </div>
      {isOpen === true ? (
        <div className=" px-6 space-y-3 lg:hidden ">
          {navLinks.map((link: string, idx: number) => (
            <div key={idx} className="hover:underline">
              <p>{link}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
