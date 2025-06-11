import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Flooter from "../components/Flooter";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="bg-gray-950">
        <Flooter />
      </div>
    </div>
  );
};

export default RootLayout;
