import React from "react";
import Button from "../_lib/Button";

const FooterUpSection = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 rounded-xl main-gradient lg:mb-20 my-10 lg:mt-32 py-3 lg:py-8 px-6 lg:px-14 items-center justify-between">
        <div className="lg:w-9/12">
          <h3>
            It will help you improve your writing & bring ideas more c learly.
          </h3>
        </div>
        <div className="lg:ml-auto mx-auto mt-4 lg:mt-0">
          <Button className="bg-white text-black ml-auto">
            Start 14 Days Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterUpSection;
