import React, { useState } from "react";
import { Timer, ArrowRight } from "lucide-react";
import p1 from "../assets/img/F&B/97101.jpg";
import Movies from "../data/Movies";
import { useTicket } from "../context/TicketProvider ";

const comboList = [
  { id: 1, name: "Combo 1", price: 5.0 },
  { id: 2, name: "Combo 2", price: 6.5 },
  { id: 3, name: "Combo 3", price: 4.0 },
  { id: 4, name: "Combo 4", price: 7.0 },
  { id: 5, name: "Combo 5", price: 5.5 },
];

const OderFB = (props) => {
  const { location } = useTicket();
  const [selectedCombos, setSelectedCombos] = useState({});
  const {
    id,
    setPrice,
    price,
    setDisplayComponent,
    displayComponent,
    seates,
    totalPriceSeates,
  } = props;
  const movie = Movies.find((e) => e.id.toString() == id);
  const handleAdd = (item) => {
    setSelectedCombos((prev) => ({
      ...prev,
      [item.id]: {
        ...item,
        qty: (prev[item.id]?.qty || 0) + 1,
      },
    }));
  };

  const handleRemove = (item) => {
    setSelectedCombos((prev) => {
      const newQty = (prev[item.id]?.qty || 0) - 1;
      if (newQty <= 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [item.id]: {
          ...item,
          qty: newQty,
        },
      };
    });
  };

  const totalPrice = Object.values(selectedCombos).reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  return (
    <div className="flex flex-col justify-center items-center pt-36 space-x-10 transition-all duration-300">
      <div className="flex justify-center   space-x-10">
        <div className=" flex flex-col  space-y-5 ">
          <h1 className="text-2xl text-white font-semibold">F&B (Option)</h1>
          <div className="text-white w-[400px] bg-black/20 p-5 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <Timer className="text-red-600" />
            </div>

            <ul className="space-y-4">
              {comboList.map((item) => {
                const selected = selectedCombos[item.id]?.qty || 0;

                return (
                  <li
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex space-x-5 items-center">
                      <img
                        src={p1}
                        alt={item.name}
                        className="w-16 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="text-xl">{item.name}</p>
                        <p className="text-[17px]">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {selected > 0 && (
                        <button
                          className="w-6 h-6 flex justify-center items-center rounded-full bg-red-600 text-white"
                          onClick={() => {
                            handleRemove(item), setPrice(price - item.price);
                          }}
                        >
                          -
                        </button>
                      )}
                      {selected > 0 && (
                        <span className="text-black">{selected}</span>
                      )}
                      <button
                        className="h-6 bg-green-600 text-white px-3 rounded-2xl"
                        onClick={() => {
                          handleAdd(item), setPrice(price + item.price);
                        }}
                      >
                        +Add
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Show total price */}

            <div className="pt-4 text-lg flex justify-between  font-semibold border-t border-white ">
              <p>Total: $</p>
              <p className="text-2xl"> {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  space-y-5">
          <h1 className="text-2xl text-white font-semibold">F&B (Option)</h1>
          <div className="text-white w-[400px] bg-black/20 p-5 rounded-xl space-y-4">
            <div className="flex  space-x-6">
              <img src={movie.movie_image} alt="" className="w-30" />
              <div className="space-y-9">
                <p>{movie.title_movie}</p>
                <p>
                  9:50 PM /<span>{movie.release}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Seat</p>
              <p>{seates}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Format</p>
              <p>2D</p>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Hall</p>
              <p>{movie.genre}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Cinema</p>
              <p className="">{location}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <p>Price</p>
              <p>${totalPriceSeates.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-white text-2xl font-bold flex justify-between items-center rounded-lg bg-black/20 px-3 py-6">
            <p className="">Total</p>
            <p className="">{price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="w-[700px] flex justify-between my-10">
        <button
          onClick={() => setDisplayComponent(displayComponent - 1)}
          className=" flex justify-center items-center text-white text-xl"
        >
          <p>Back</p>
        </button>
        <button
          onClick={() => setDisplayComponent(displayComponent + 1)}
          className="px-6 py-3  bg-red-500 rounded-lg flex justify-center items-center"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OderFB;
