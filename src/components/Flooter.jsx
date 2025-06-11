import React from "react";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import apple_logo from "../assets/apple_logo.png";
import google_play from "../assets/google-play.png";
import logo from "../assets/Legend-logo.png";

const Flooter = () => {
  return (
    <div>
      <div className=" px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto py-10">
        <div className="w-full flex justify-center items-center pb-20">
          <img src={logo} alt="logo" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col  space-y-3">
            <h1 className="text-white font-bold text-xl">Company</h1>
            <ul className="text-gray-500 text-xl space-y-1">
              <li>About us</li>
              <li>Contect us</li>
              <li>Cinemas</li>
            </ul>
          </div>
          <div className="flex flex-col  space-y-3">
            <h1 className="text-white font-bold text-xl">More</h1>
            <ul className="text-gray-500 text-xl space-y-1">
              <li>Promotions</li>
              <li>News & Activity</li>
              <li>My Ticket</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div className="flex flex-col  space-y-2">
            <h1 className="text-white font-bold text-xl">Download Our App</h1>
            <div className="flex jutify-center items-center">
              <img src={apple_logo} alt="" className="w-20" />
              <img src={google_play} alt="" className="w-8 h-8" />
            </div>
            <h1 className="text-white font-bold text-xl">
              {" "}
              Follow Our Social Media
            </h1>
            <div className="flex fustify-center items-center space-x-2 text-white">
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-white transition-all duration-500 hover:bg-gray-400 cursor-pointer">
                <Facebook />
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-white transition-all duration-500 hover:bg-gray-400 cursor-pointer">
                <Youtube />
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-white transition-all duration-500 hover:bg-gray-400 cursor-pointer">
                <Instagram />
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full border border-white transition-all duration-500 hover:bg-gray-400 cursor-pointer">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 mt-5"></div>
        <div className="text-white flex  justify-center items-center mt-3">
          <h1>All right reserved ® 2023</h1>
        </div>
      </div>
    </div>
  );
};

export default Flooter;
