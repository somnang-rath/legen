import React from "react";
import slider_location from "../assets/img/slider/slider_location.jpeg";
import CardLocations from "../components/CardLocations";
const Cinemas = () => {
  return (
    <div className="transition-all duration-300">
      <div
        style={{
          backgroundImage: `url('${slider_location}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-3 pt-30 backdrop-blur-sm">
          <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto ">
            <div className="flex bg-gray-950 justify-between rounded-lg">
              <img
                src={slider_location}
                alt={slider_location}
                className="rounded-lg object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <CardLocations />
      </div>
    </div>
  );
};

export default Cinemas;
