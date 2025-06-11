import React from "react";
import { Link } from "react-router-dom";
import Offers from "../data/Offers";

const CardOffers = () => {
  return (
    <div className="px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
      <h1 className="text-4xl font-bold text-white my-16">Promotions</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 mx-auto justify-items-center gap-2 space-y-5">
        {Offers.map((e) => (
          <Link
            to={`/offers/${e.id.toString()}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <li
              key={e.id}
              className="w-[365px] p-2  border-[1px] border-gray-400 rounded-lg space-y-3 bg-gradient-to-br from-zinc-300 to-zinc-200 overflow-hidden shadow-lg text-white hover:shadow-2xl hover:scale-105 duration-300 transition-all "
            >
              <img src={e.img} alt={e.title} className="rounded-lg h-60" />
              <p className="text-white font-bold text-xl truncate">{e.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CardOffers;
