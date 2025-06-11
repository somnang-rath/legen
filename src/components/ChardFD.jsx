import React from "react";
import Locations from "../data/Locations";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const ChardFD = () => {
  return (
    <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto mt-28">
      <h1 className="text-3xl text-white mb-10">Choose Cinema</h1>
      <div>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Locations.map((e) => (
            <Link
              key={e.id}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to={`/location/${e.id.toString()}`}
            >
              <li className="flex justify-between items-center p-3 bg-black/25 border-[0.1px] border-white rounded-lg">
                <div className="flex space-x-4">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <p className="text-xl text-white ">{e.name}</p>
                </div>
                <ChevronRight className="text-white " size={35} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChardFD;
