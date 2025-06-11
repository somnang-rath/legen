import dayjs from "dayjs";
import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );

  return (
    <TicketContext.Provider
      value={{
        location,
        setLocation,
        selectedTime,
        setSelectedTime,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
