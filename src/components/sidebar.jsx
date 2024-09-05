import React from "react";
import logo from "../assets/whitelogo.png";

function Sidebar() {
  return (
    <>
      <div className="bg-[#0c0c0c] h-full w-full">
        <div className="flex">
          <div className="text-white mx-2 mt-4">
            <ul>
              <li className=" font-bold font-sans text-md flex items-center text-white ">
                <img src={logo} alt="logo" className="w-6 h-6 mx-2" />
                Celestia
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
