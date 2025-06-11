import React, { useRef } from "react";
import Movies from "../data/Movies";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Offers from "../data/Offers";
import { useTicket } from "../context/TicketProvider ";

const Card = () => {
  const { selectedDate, setSelectedDate } = useTicket();
  const generateDates = () => {
    const today = dayjs();
    return Array.from({ length: 14 }, (_, i) => today.add(i, "day"));
  };
  const scrollRef = useRef(null);
  let isDown = false;
  let startX, scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    const slider = scrollRef.current;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="flex flex-col justify-center items-center px-60 pb-3  2xl:mx-auto top-0  mb-5 p-4">
      <div className="flex flex-col px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto space-y-4">
        <h1 className="text-white text-5xl font-bold">Now Showing</h1>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex w-full overflow-x-scroll no-scrollbar space-x-3 py-2 cursor-grab"
        >
          {generateDates().map((date) => {
            const formatted = date.format("YYYY-MM-DD");
            const isSelected = formatted === selectedDate;

            return (
              <button
                key={formatted}
                onClick={() => setSelectedDate(formatted)}
                className={`flex flex-col min-w-[100px] items-center px-5 py-4 rounded-lg border 
                  ${
                    isSelected
                      ? "border-white bg-zinc-900"
                      : "border-zinc-600 bg-black"
                  } text-white`}
              >
                <span className="text-sm">{date.format("ddd")}</span>
                <span className="text-lg font-bold">{date.format("D")}</span>
                <span className="text-xs">{date.format("MMM")}</span>
              </button>
            );
          })}
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-5 justify-items-center p-3">
        {Movies.map((e) => (
          <li
            key={e.id}
            className="w-72 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-5 hover:shadow-2xl hover:scale-105 duration-300 transition-all"
          >
            <Link
              to={`/movie/${e.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            >
              <img
                src={e.movie_image}
                alt={e.title_movie}
                className="w-full  rounded-lg mb-3"
              />
              <div className="flex justify-between text-sm mb-2">
                <p>{e.release}</p>
                <p>R18</p>
              </div>
              <p className="text-lg font-semibold">{e.title_movie}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
