import { Timer, ArrowRight, Turtle } from "lucide-react";
import Movies from "../data/Movies";
import ChoosePaymentCard from "./ChoosePaymentCard";
import { Link } from "react-router-dom";
import { useTicket } from "../context/TicketProvider ";

const OptionPay = (props) => {
  const {
    id,
    price,
    setDisplayComponent,
    displayComponent,
    totalPriceSeates,
    seates,
  } = props;
  const { location, selectedDate, selectedTime } = useTicket();
  const movie = Movies.find((e) => e.id.toString() == id);
  const handlePayment = () => {
    const ticket = {
      movieId: id,
      title: movie.title_movie,
      movieImage: movie.movie_image,
      time: selectedTime,
      releaseDate: selectedDate,
      format: "2D",
      hall: movie.genre,
      cinema: location,
      seats: seates,
      total: totalPriceSeates,
      price: price,
      createdAt: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem("tickets")) || [];
    stored.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(stored));
    console.log(stored);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-36 pb-14 space-x-10">
      <div className="flex justify-center   space-x-10">
        <div className=" flex flex-col  space-y-5 ">
          <h1 className="text-2xl text-white font-semibold">Pay (Option)</h1>
          <div className="text-white w-[400px] bg-black/20 p-5 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <Timer className="text-red-600" />
            </div>

            <ChoosePaymentCard />
          </div>
        </div>
        <div className="flex flex-col justify-center  space-y-5">
          <h1 className="text-2xl text-white font-semibold">Order Detail</h1>
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
              <p>{location}</p>
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
          <div className=" flex justify-between ">
            <button
              onClick={() => setDisplayComponent(displayComponent - 1)}
              className=" flex justify-center items-center text-white text-xl"
            >
              <p>Back</p>
            </button>
            <Link to={"/ticket"}>
              <button
                onClick={handlePayment}
                className="px-3 py-2  bg-red-500 rounded-lg flex justify-center items-center"
              >
                <p className="text-white text-xl">Checkout</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionPay;
