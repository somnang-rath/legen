import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const rows = ["L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
const leftCols = [1, 2, 3, 4];
const centerCols = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const rightCols = [15, 16, 17, 18];
const seatPrice = 4;

// Occupied seats
const occupied = ["B6", "C6", "C7", "D7", "G8", "J5", "J6", "G16", "H16"];

const SeatSelection = (props) => {
  const {
    id,
    setPrice,
    setDisplayComponent,
    displayComponent,
    selectedSeats,
    setSelectedSeats,
    setSeates,
    setTotalPriceSeates,
  } = props;
  useEffect(() => {
    const result = selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
    const totalSeates = selectedSeats.length * 4;
    setTotalPriceSeates(totalSeates);
    setSeates(result);
  }, [selectedSeats]);

  useEffect(() => {
    const totalPrice = selectedSeats.length * seatPrice;
    setPrice(totalPrice);
  }, [selectedSeats, setPrice]);
  const toggleSeat = (seatId) => {
    if (occupied.includes(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = (row, cols) => {
    return cols.map((col) => {
      const seatId = `${row}${col}`;
      const isOccupied = occupied.includes(seatId);
      const isSelected = selectedSeats.includes(seatId);

      let bgColor = "bg-white";
      if (isOccupied) bgColor = "bg-red-600";
      else if (isSelected) bgColor = "bg-green-400";

      return (
        <div
          key={seatId}
          onClick={() => toggleSeat(seatId)}
          className={`w-5 h-5 rounded-sm cursor-pointer ${bgColor} hover:scale-110 transition-transform`}
          title={seatId}
        ></div>
      );
    });
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="flex flex-col items-center text-white p-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Select Your Seat</h2>
        <div className="flex">
          {/* Left Block */}
          <div className="flex flex-col gap-1 mr-2">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-1">
                <span className="w-4 text-sm">{row}</span>
                {renderSeats(row, leftCols)}
              </div>
            ))}
          </div>

          {/* Center Block */}
          <div className="flex flex-col gap-1 mx-2">
            {rows.map((row) => (
              <div key={row} className="flex gap-1">
                {renderSeats(row, centerCols)}
              </div>
            ))}
          </div>

          {/* Right Block */}
          <div className="flex flex-col gap-1 ml-2">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-1">
                {renderSeats(row, rightCols)}
                <span className="w-4 text-sm">{row}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Info */}
        <div className="mt-4 text-center">
          <div>
            Selected Seats:{" "}
            <span className="text-green-400">
              {selectedSeats.join(", ") || "None"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="w-14 h-14 bg-white rounded-2xl"></div>
            <p className=" opacity-75 font-semibold mt-1">
              Adult Regular 2D
              <br /> <span className="text-2xl">$ 4.00</span>
            </p>
          </div>
          {/* {selectedSeats && setPrice(totalPrice)} */}
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row justify-center items-center  space-x-10 py-6 mt-10">
        <div className=" flex justify-center items-center space-x-6 text-white">
          <div className="flex space-x-3">
            <div className="w-6 h-6 rounded-md bg-green-400"></div>
            <p className="text-gray-300">Selected</p>
          </div>
          <div className="flex space-x-3">
            <div className="w-6 h-6 rounded-md bg-white"></div>
            <p className="text-gray-300">Available</p>
          </div>
          <div className="flex space-x-3">
            <div className="w-6 h-6 rounded-md bg-red-600"></div>
            <p className="text-gray-300">Taken</p>
          </div>
          <Link to={`/movie/${id}`}>
            <button className=" flex justify-center items-center ml-10 text-xl">
              <p>Back</p>
            </button>
          </Link>
          <button
            onClick={() => setDisplayComponent(displayComponent + 1)}
            className={`${
              totalPrice
                ? "w-12 h-12 ml-3 bg-red-600 rounded-full flex justify-center items-center"
                : "hidden"
            }`}
          >
            <ArrowRight size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
