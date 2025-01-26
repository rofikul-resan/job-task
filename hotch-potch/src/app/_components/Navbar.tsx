import Button from "@/lib/Button";
import Image from "next/image";
import React from "react";

const navLinks = ["Demos", "About", "Blog", "Pages", "Contact"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex justify-between items-center ">
        <div>
          <Image src={"/logo.png"} height={32} width={78} alt="Logo" />
        </div>
        <div className="ml-10">
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
      <div className="flex gap-2 items-center">
        <Button className="text-headlineColor  border-headlineColor  border">
          Sing In
        </Button>
        <Button className="text-headlineColor  main-gradient ">
          Get Started Free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
