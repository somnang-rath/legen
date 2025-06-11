import React from "react";
import { Link, useParams } from "react-router-dom";
import Offers from "../data/Offers";
const OffersDetail = () => {
  const { id } = useParams();
  const offer = Offers.find((e) => e.id.toString() == id);
  return (
    <div className="transition-all duration-300">
      <div className="px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto mt-30 space-y-8">
        <div className="flex mb-3 items-cente h-1/2 space-x-3">
          <Link to={"/offers"}>
            <h1 className=" text-gray-300 text-xl hover:text-white hover:font-bold">
              Promotions
            </h1>
          </Link>
          <h1 className="text-2xl font-bold text-white">/</h1>
          <h1 className="text-xl font-bold text-white leading-relaxed">
            {offer.title}
          </h1>
        </div>
        <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90% shadow-2xl"></div>
        <h1 className="text-5xl font-bold text-white leading-relaxed">
          {offer.title}
        </h1>
        <h1 className=" text-gray-100 text-xl">
          Publish Date: <span>{offer.date_time}</span>
        </h1>
        <img
          src={offer.img}
          alt={offer.title}
          className="rounded-lg w-full h-full"
        />
        <p className="text-gray-200 text-xl whitespace-pre-line ">
          {offer.discreption}
        </p>
      </div>
    </div>
  );
};

export default OffersDetail;
