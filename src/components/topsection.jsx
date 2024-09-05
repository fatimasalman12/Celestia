import React from "react";
import logo from "../assets/whitelogo.png";
import profile from "../assets/profile.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Topsection() {
  return (
    <>
      <div className="bg-[#141414] h-full w-full">
        <div className="flex justify-center">
          <div className="text-white mx-2">
            <ul className="flex">
              <li className=" font-bold font-sans text-md flex items-center text-white">
                <img src={logo} alt="logo" className="w-6 h-6 mx-2" />
                Celestia
              </li>
              <li>
                <div className="relative mx-[330px] my-3">
                  <input
                    type="text"
                    className="h-[35px] w-[450px] rounded-[13px] border bg-[rgba(56,55,55,0.445)] border-[rgba(56,55,55,0.445)] p-2 pl-10 text-white"
                    placeholder="Search here "
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[gray]"
                  />
                </div>
              </li>
              <li>
                <div className="my-3 flex">
                    <img src={profile} alt="Profile-img" 
                    className="rounded-full h-[30px] w-[30px] "/>
                    <p className="mt-2 text-white text-[13px] mx-2">James Nicolas</p> 
                    <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-white w-3 h-3 mt-3"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topsection;

//hey copilot??