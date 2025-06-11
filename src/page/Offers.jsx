import React from "react";
import offers from "../assets/img/slider/offers.jpeg";
import CardOffers from "../components/CardOffers";

const Offers = () => {
  return (
    <div className="transition-all duration-300">
      {" "}
      <div
        style={{
          backgroundImage: `url('${offers}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" pt-30 backdrop-blur-sm">
          <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto ">
            <div className="flex bg-gray-950 justify-between rounded-lg">
              <img
                src={offers}
                alt={offers}
                className="rounded-lg object-cover object-center "
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90% mt-5  shadow-2xl"></div>
        </div>
      </div>
      <CardOffers />
    </div>
  );
};

export default Offers;
