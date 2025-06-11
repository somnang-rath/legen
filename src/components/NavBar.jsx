import React from "react";
import logo from "../assets/Legend-logo.png";
import { NavLink, Link } from "react-router-dom";
import { UserRoundSearch, ShieldCheck, UserRound, Bell } from "lucide-react";
import links from "../data/LinkPage/LinkIcon";
const NavBar = () => {
  const storedUser = JSON.parse(localStorage.getItem("Users"));
  return (
    <nav className="px-30 fixed  w-full backdrop-blur-sm z-50">
      {/* Nav Bar  */}
      <div className=" flex justify-between items-center py-4 px-6 border-b-1 ">
        {/** Logo Bar */}
        <img src={logo} alt="Legend" />
        {/** Search Bar */}

        <div className="group flex items-center justify-center space-x-2 rounded-full border-none   px-3 py-1 hover:border-gray-500 transition-all duration-500">
          <search className="flex text-white justify-center items-center">
            <input
              type="text"
              placeholder="Search.."
              className="w-0 group-hover:w-60 opacity-0 group-hover:opacity-100 text-black bg-white rounded-lg px-3 py-2 outline-none transition-all duration-500"
            />
            <div className="w-10 h-10 group-hover:w-0 group-hover:h-0 opacity-100 group-hover:opacity-0 bg-gray-500 rounded-full group-hover:hidden  flex justify-center items-center transition-all duration-500">
              <UserRoundSearch size={20} />
            </div>
          </search>
        </div>

        {/** Link Bar */}
        <ul className="hidden lg:flex px-1.5 space-x-3 text-white">
          <li className="rounded-full px-3 py-2 border-[1px] border-gray-800 hover:border-gray-400 bg-orange-600 text-xl">
            <Link
              to={"ticket"}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="flex items-center"
            >
              <ShieldCheck size={20} />
              Ticket
            </Link>
          </li>
          <li className="rounded-full px-3 py-2 border-[1px] border-gray-500 hover:border-gray-400 bg-orange-600 text-xl">
            {storedUser ? (
              <Link to={"/profile"} className="flex items-center">
                <UserRound size={20} />
                Profile
              </Link>
            ) : (
              <Link to={"/login"} className="flex items-center">
                <UserRound size={20} />
                Log in
              </Link>
            )}
          </li>
          <li className="rounded-full px-3 py-2 border-[1px] border-gray-500 hover:border-gray-400 bg-orange-600 text-xl">
            <Link to={"/"} className="flex items-center">
              <Bell size={20} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Small Nav Bar */}
      <div className=" w-full h-10 justify-center items-center content-center">
        <ul className="flex space-x-4 text-white text-xs">
          {links.map((e) => (
            <li key={e.label} className="flex items-center space-x-2">
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to={e.path}
                className={({ isActive }) => `
                flex items-center space-x-2 font-semibold  ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`}
              >
                <e.icon size={23} />
                <span className="text-xl">{e.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
