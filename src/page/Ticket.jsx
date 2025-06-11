import React, { useEffect, useState } from "react";
import ticketImg from "../assets/img/ticket/ticket_movie.png";
import Movies from "../data/Movies";

const Ticket = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [upcomingTickets, setUpcomingTickets] = useState([]);
  const [historyTickets, setHistoryTickets] = useState([]);

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const now = new Date();

    const upcoming = [];
    const history = [];

    tickets.forEach((ticket) => {
      const ticketDate = new Date(ticket.createdAt);
      if (ticketDate >= now) {
        upcoming.push(ticket);
      } else {
        history.push(ticket);
      }
    });

    setUpcomingTickets(upcoming);
    setHistoryTickets(history);
  }, []);

  const displayedTickets = showUpcoming ? historyTickets : upcomingTickets;

  return (
    <div className="px-4 py-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto mt-32">
      <div className="flex text-white space-x-5 mb-6">
        <button onClick={() => setShowUpcoming(true)}>
          <h1
            className={`${
              showUpcoming
                ? "text-4xl font-bold"
                : "text-4xl font-bold text-gray-400"
            }`}
          >
            Upcoming
          </h1>
        </button>
        <div className="w-1 h-10 bg-amber-50"></div>
        <button onClick={() => setShowUpcoming(false)}>
          <h1
            className={`${
              !showUpcoming
                ? "text-4xl font-bold"
                : "text-4xl font-bold text-gray-400"
            }`}
          >
            History
          </h1>
        </button>
      </div>

      {displayedTickets.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={ticketImg} alt="Ticket" className="w-80" />
          <p className="text-2xl font-bold text-white">
            {showUpcoming ? "No Upcoming Tickets" : "No Past Tickets"}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayedTickets.map((ticket, index) => (
            <div
              key={index}
              className="text-white bg-black/30 rounded-xl p-4 space-y-2 shadow-md"
            >
              <div className="flex justify-between">
                <p className="text-xl font-semibold">
                  🎬 {ticket.title || "Unknown Movie"}
                </p>
                <p>{ticket.createdAt}</p>
              </div>
              <p>🎟 Seats: {ticket.seats}</p>
              <p>🕐 Time: {ticket.time}</p>
              <p>🏷 Format: {ticket.format}</p>
              <p>🏛 Hall: {ticket.hall}</p>
              <p>📍 Cinema: {ticket.cinema}</p>
              <p>💵 Total: ${ticket.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ticket;
