import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Locations from "../data/Locations";
import sliderSid from "../assets/img/slider/sliderSid.png";
import Card from "../components/Card";
import Detail from "../components/Detail";
import MapLocation from "../components/MapLocation";

const LocationDetail = () => {
  const { id } = useParams();
  const [showe, setShowe] = useState(true);
  const location = Locations.find((e) => e.id.toString() == id);
  console.log(location);
  return (
    <div className="transition-all duration-300">
      <div
        style={{
          backgroundImage: `url(${sliderSid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-3 pt-30 backdrop-blur-sm">
          <div
            style={{
              backgroundImage: `url(${sliderSid})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto rounded-lg"
          >
            <div className="w-full h-[450px] flex flex-col justify-end pl-5 pb-3 text-white space-y-3">
              <h1 className="text-4xl font-bold">{location.name}</h1>
              <div className="flex space-x-2">
                <MapPin className="text-red-700 " size={24} />
                <p className="text-xl">{location.location}</p>
              </div>
              <div className="flex space-x-3">
                <Link to="/">
                  <h1 className="text-xl font-bold text-gray-400 hover:text-white">
                    Home
                  </h1>
                </Link>
                <p className="text-xl font-bold text-white">/</p>
                <Link to="/cinemas">
                  <h1 className="text-xl font-bold text-gray-400 hover:text-white">
                    Cinema
                  </h1>
                </Link>
                <p className="text-xl font-bold text-white">/</p>
                <h1 className="text-xl font-bold text-white">
                  {location.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white space-x-5 my-6">
          <button onClick={() => setShowe(true)} className="cursor-pointer">
            <h1
              className={`${
                showe ? "text-2xl font-bold" : "text-xl font-bold text-gray-300"
              }`}
            >
              Showtime
            </h1>
          </button>
          <div className="w-1 h-10 bg-amber-50 mask-y-from-50% mask-y-to-90% "></div>
          <button onClick={() => setShowe(false)} className="cursor-pointer">
            <h1
              className={`${
                showe ? "text-xl font-bold text-gray-300" : "text-2xl font-bold"
              }`}
            >
              Detail
            </h1>
          </button>
        </div>
        <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90%  shadow-2xl"></div>
      </div>
      {showe ? <Card /> : <MapLocation />}
    </div>
  );
};

export default LocationDetail;
