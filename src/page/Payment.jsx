import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movies from "../data/Movies";
import Seat from "../components/Seat";
import OderFB from "./OderFB";
import OptionPay from "../components/OptionPay";
const Payment = () => {
  const { id } = useParams();
  const movie = Movies.find((e) => e.id.toString() == id);
  const [price, setPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seates, setSeates] = useState("");
  const [displayComponent, setDisplayComponent] = useState(0);
  const [totalPriceSeates, setTotalPriceSeates] = useState(0);

  const renderComponent = () => {
    switch (displayComponent) {
      case 0:
        return (
          <Seat
            id={id}
            price={price}
            setPrice={setPrice}
            setDisplayComponent={setDisplayComponent}
            displayComponent={displayComponent}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            seates={seates}
            setSeates={setSeates}
            setTotalPriceSeates={setTotalPriceSeates}
          />
        );
      case 1:
        return (
          <OderFB
            id={id}
            price={price}
            setPrice={setPrice}
            setDisplayComponent={setDisplayComponent}
            displayComponent={displayComponent}
            totalPriceSeates={totalPriceSeates}
            seates={seates}
            setSeates={setSeates}
          />
        );
      case 2:
        return (
          <OptionPay
            id={id}
            price={price}
            setPrice={setPrice}
            setDisplayComponent={setDisplayComponent}
            displayComponent={displayComponent}
            totalPriceSeates={totalPriceSeates}
            seates={seates}
          />
        );
      default:
        return <Link to={`/movie/${id.toString()}`} />;
    }
  };
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${movie.movie_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full backdrop-blur-md transition-all duration-300">
        {renderComponent()}
        {/* <Seat id={id} price={price} setPrice={setPrice} /> */}
        {/* <OderFB id={id} price={price} setPrice={setPrice} /> */}
      </div>
    </div>
  );
};

export default Payment;
