import Movies from "../data/Movies";
import { Calendar1, Book, Timer, EyeOff, IdCard } from "lucide-react";
import { useParams } from "react-router-dom";
import S_2D from "../assets/img/screen/S_2D.png";
import { useState } from "react";
import ShoweTime from "../components/ShoweTime";
import Detail from "../components/Detail";

const DetailMovie = () => {
  const { id } = useParams();
  const [showe, setShowe] = useState(true);
  const movie = Movies.find((e) => e.id == id);
  return (
    <div className="transition-all duration-300">
      <div
        style={{
          backgroundImage: `url(${movie.movie_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" pt-30 backdrop-blur-sm">
          <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto ">
            <div className="flex h-[550px] pl-16 bg-gray-950 justify-between rounded-lg">
              <div className="space-y-10 mt-30">
                <h1 className="text-white text-5xl font-bold font-sans">
                  {movie.title_movie}
                </h1>
                <img src={S_2D} alt="2D" className="w-14" />
                <div className="space-y-3">
                  <div className="flex space-x-3 items-center">
                    <Book color="red" />
                    <p className="text-gray-200 text-lg">
                      Genre:{" "}
                      <span className="text-white font-bold text-lg">
                        {movie.genre}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <Timer color="red" />
                    <p className="text-gray-200 text-lg">
                      Duration:{" "}
                      <span className="text-white font-bold text-lg">
                        {movie.duration}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <Calendar1 color="red" />
                    <p className="text-gray-200 text-lg">
                      Release:{" "}
                      <span className="text-white font-bold text-lg">
                        {movie.release}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <EyeOff color="red" />
                    <p className="text-gray-200 text-lg">
                      Classification:{" "}
                      <span className="text-white font-bold text-lg">
                        {movie.classification}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={movie.movie_image}
                alt={movie.movie_image}
                className="rounded-lg object-cover w-1/2 object-center mask-l-from-20% mask-l-to-90%"
              />
            </div>
          </div>

          <div className="flex justify-center items-center text-white space-x-5 my-6">
            <button onClick={() => setShowe(true)} className="cursor-pointer">
              <h1
                className={`${
                  showe
                    ? "text-2xl font-bold text-shadow-zinc-800 text-shadow-lg"
                    : "text-xl font-bold text-gray-300 text-shadow-zinc-800 text-shadow-lg"
                }`}
              >
                Showtime
              </h1>
            </button>
            <div className="w-1 h-10 bg-amber-50 mask-y-from-50% mask-y-to-90% "></div>
            <button onClick={() => setShowe(false)} className="cursor-pointer">
              <h1
                className={`${
                  showe
                    ? "text-xl font-bold text-gray-300 text-shadow-zinc-800 text-shadow-lg"
                    : "text-2xl font-bold text-shadow-zinc-800 text-shadow-lg"
                }`}
              >
                Detail
              </h1>
            </button>
          </div>
          <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90%  shadow-2xl"></div>
        </div>
      </div>
      {showe ? <ShoweTime id={id} /> : <Detail />}
    </div>
  );
};

export default DetailMovie;
