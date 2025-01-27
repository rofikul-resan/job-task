import React from "react";

const OfferSectionCard = () => {
  return (
    <div className="bg-white p-2 lg:p-4 rounded-lg h-[350px] lg:h-[450px] w-[280px] lg:w-[406px] shadow-lg overflow-hidden">
      <div>
        <h4 className="text-black">Results</h4>
        <p className="text-body2 text-paragraphColor">
          Here&apos;s what our AI came up with.
        </p>
      </div>
      <div
        style={{ lineHeight: "20px" }}
        className="p-4 mt-2 text-black space-y-4 text-sm tracking-tighter  bg-[#f4f6ff] rounded-lg "
      >
        <p>
          Pain: You are an e-commerce business, and you want to sell your
          products all over the country, but you are confused about how to
          handle sales tax.{" "}
        </p>

        <p>
          {" "}
          Agitate: You have no idea how much sales tax to charge your customers
          in each state.
        </p>
        <p>
          Solution: Use TaxSol, our full stack sales tax solution, to manage
          your sales tax for you!
        </p>
      </div>
      <div className="p-4  text-black space-y-3 text-sm tracking-tight mt-10 bg-[#f4f6ff] rounded-lg">
        <p>
          Pain: You are an e-commerce business, and you want to sell your
          products all over the country, but you are confused about how to
          handle sales tax.{" "}
        </p>

        <p>
          {" "}
          Agitate: You have no idea how much sales tax to charge your customers
          in each state.
        </p>
        <p>
          Solution: Use TaxSol, our full stack sales tax solution, to manage
          your sales tax for you!
        </p>
      </div>
    </div>
  );
};

export default OfferSectionCard;
