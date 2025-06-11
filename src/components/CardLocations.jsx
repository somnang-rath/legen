import React from "react";
import Locations from "../data/Locations";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const CardLocations = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white my-8">Location</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 mx-auto justify-items-center gap-2 ">
        {Locations.map((e) => (
          <Link
            to={`/location/${e.id.toString()}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
            <li
              key={e.id}
              className="w-[350px] p-6 rounded-lg space-y-3 bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden shadow-lg text-white hover:shadow-2xl hover:scale-105 duration-300 transition-all "
            >
              <img src={e.img} alt={e.img} className="rounded-lg h-64" />
              <p className="text-white font-bold text-xl truncate">{e.name}</p>
              <div className="flex space-x-1">
                <MapPin color="red" />
                <p className="text-sm text-gray-100 truncate">{e.location}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CardLocations;
