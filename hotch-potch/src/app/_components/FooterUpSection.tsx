import React from "react";
import Button from "../_lib/Button";

const FooterUpSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 rounded-xl main-gradient mb-20 mt-32 py-8 px-14 items-center justify-between">
        <div className="w-9/12">
          <h3>
            It will help you improve your writing & bring ideas more c learly.
          </h3>
        </div>
        <div className="ml-auto">
          <Button className="bg-white text-black ml-auto">
            Start 14 Days Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterUpSection;
