import { Timer, ArrowRight } from "lucide-react";
import Movies from "../data/Movies";
import SeatSelection from "./SeatSelection";

const Seat = (props) => {
  const {
    id,
    setPrice,
    price,
    setDisplayComponent,
    displayComponent,
    selectedSeats,
    setSelectedSeats,
    setTotalPriceSeates,
    seates,
    setSeates,
  } = props;
  const movie = Movies.find((e) => e.id.toString() == id);
  return (
    <div className="pt-40">
      <div className="flex justify-center sm:flex-col sm:items-center  md:flex-col lg:flex-row  space-x-10">
        <div className="w-80 ">
          <div className="">
            <img
              src={movie.movie_image}
              alt={movie.title_movie}
              className="w-full "
            />
            <div className="bg-gray-950 p-6 space-y-3">
              <p className="text-gray-300 text-[26px]">
                {movie.title_movie}
                <span className="text-white text-[26px] ">: {movie.genre}</span>
              </p>
              <p className="text-gray-300 text-[26px]">
                Duration{" "}
                <span className="text-white text-[26px] ">
                  : {movie.duration}
                </span>
              </p>
              <p className="text-gray-300 text-[26px]">
                Release{" "}
                <span className="text-white text-[26px] ">
                  : {movie.release}
                </span>
              </p>
              <p className="text-gray-300 text-[26px]">
                Classcification{" "}
                <span className="text-white text-[26px] ">
                  : {movie.classification}
                </span>
              </p>
            </div>
            <div className="w-full flex justify-center text-2xl bg-black/20 py-6 mr-40 rounded text-white font-bold items-center mt-10">
              <p>Total ${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex space-x-20">
            <div className="flex text-white justify-center items-center space-x-3">
              <h1 className="text-2xl">{movie.title_movie}</h1>
              <Timer className="text-red-600 " size={30} />
              <p>1:58</p>
            </div>
            <div className="flex text-white justify-center items-center space-x-3">
              <Timer className="text-red-600 " size={30} />
              <p>96 minutes</p>
            </div>
            <button className="text-white py-3 px-10  border-red-600 border-[3px] rounded-full">
              PG-13
            </button>
          </div>
          <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90%  shadow-2xl my-16"></div>
          <div className=" text-white flex items-center justify-center">
            <SeatSelection
              id={id}
              setPrice={setPrice}
              setDisplayComponent={setDisplayComponent}
              displayComponent={displayComponent}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              setTotalPriceSeates={setTotalPriceSeates}
              seates={seates}
              setSeates={setSeates}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
