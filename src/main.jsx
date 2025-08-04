import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite";
import { TicketProvider } from "./context/TicketProvider .jsx";
import DataProvider from "./context/DataProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicketProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </TicketProvider>
  </StrictMode>
);
