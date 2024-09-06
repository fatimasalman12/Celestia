import React from "react";
import logo from "../assets/whitelogo.png";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GoCopilot } from "react-icons/go";

function Topsection() {
  return (
    <div className="bg-[#141414] w-full">
      <div className="flex justify-between items-center px-4 py-2 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center text-white">
          <img src={logo} alt="logo" className="w-6 h-6 mr-2" />
          <span className="font-bold font-sans text-md">Celestia</span>
        </div>

        {/* Search Section */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              className="h-[35px] w-full rounded-[11px] border bg-[rgba(56,55,55,0.445)] border-[rgba(56,55,55,0.445)] p-2 pl-10 text-white"
              placeholder="Search here"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[gray]"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="Profile-img"
            className="rounded-full h-[30px] w-[30px]"
          />
          <p className="text-white text-sm hidden md:block">James Nicolas</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white w-3 h-3"
          />
        </div>
      </div>

      {/* Responsive Search Section for Smaller Screens */}
      <div className="flex md:hidden justify-center py-2 px-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            className="h-[35px] w-full rounded-[11px] border bg-[rgba(56,55,55,0.445)] border-[rgba(56,55,55,0.445)] p-2 pl-10 text-white"
            placeholder="Search here"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[gray]"
          />
        </div>
      </div>
    </div>
  );
}

export default Topsection;
 