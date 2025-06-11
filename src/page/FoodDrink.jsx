import React from "react";
import FD from "../assets/img/F&B/FD.jpeg";
import ChardFD from "../components/ChardFD";

const FoodDrink = () => {
  return (
    <div className="transition-all duration-300">
      {" "}
      <div
        style={{
          backgroundImage: `url('${FD}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" pt-30 backdrop-blur-sm">
          <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto ">
            <div className="flex bg-gray-950 justify-between rounded-lg">
              <img
                src={FD}
                alt={FD}
                className="rounded-lg object-cover object-center "
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90% mt-5  shadow-2xl"></div>
        </div>
      </div>
      <ChardFD />
    </div>
  );
};

export default FoodDrink;
