import React from "react";
import maplocation from "../assets/img/slider/map.png";

const MapLocation = () => {
  return (
    <div>
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <ul className="grid grid-cols-3 my-7">
          <li className="space-y-3">
            <h1 className="text-3xl text-gray-400">Number of Halls:</h1>
            <h1 className="text-3xl text-white font-bold">4</h1>
          </li>
          <li className="space-y-3">
            <h1 className="text-3xl text-gray-400">Operning Hour:</h1>
            <h1 className="text-3xl text-white font-bold">09:30 - 22:30</h1>
          </li>
          <li className="space-y-3">
            <h1 className="text-3xl text-gray-400">Address:</h1>
            <h1 className="text-3xl text-white font-bold">
              PGB-5-021, 4th Floor of Prince ,Sihanoukville
            </h1>
          </li>
        </ul>
        <img src={maplocation} alt="name" className="rounded-lg my-20" />
      </div>
    </div>
  );
};

export default MapLocation;
