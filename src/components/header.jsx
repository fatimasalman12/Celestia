import React from "react";
import "../styles/header.css";
import videoBg from "../assets/marsvideo.mp4";
import logo from "../assets/whitelogo.png"; 
import arrow from "../assets/arrow-icon.png";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); 

  const handleHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const handleExplore = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };
  const handleFeatures = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };
  const handleOverview = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div id="home" className="main1 relative">
        <div className="gradient-overlay1 absolute inset-0 z-10"></div>
        <video
          className="video1 absolute inset-0 w-full h-full object-cover z-0"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <nav className=" navbar absolute top-4 w-screen transform -translate-x-1/2  bg-transparent z-30 animate-slide-down">
          <ul className="flex justify-around space-x-5 text-gray-300 my-3 font-sans">
            <div>
              <li className=" font-bold font-sans text-md flex items-center -mt-[2px] text-white ">
                <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                Celestia
              </li>
            </div>
            <div className="flex space-x-6">
              <li
                onClick={handleHome}
                className="mt-1 text-sm hover:text-[white]"
              >
                Home
              </li>
              {/* <li className="mt-1 text-sm hover:text-[white]">About</li> */}
              <li
                onClick={handleExplore}
                className="mt-1 text-sm hover:text-[white] "
              >
                Explore
              </li>
              <li
                onClick={handleFeatures}
                className="mt-1 text-sm hover:text-[white]"
              >
                Features
              </li>
              <li
                onClick={handleOverview}
                className="mt-1 text-sm hover:text-[white]"
              >
                Links
              </li>
            </div>
            <div className="flex flex-row space-x-4">
              <li className="mt-1 font-bold text-sm hover:text-[white]" 
              onClick={() => navigate('/signup')}>
                Signup
              </li>
              <div className="h-4 mt-[6px] w-[2px] bg-white"></div>
              <li className="mt-1 text-sm font-bold hover:text-[white]"
              onClick={() => navigate('/login')}>
                Login
              </li>
            </div>
          </ul>
        </nav>

        <div className="flex flex-col absolute z-40 mx-[100px] my-[200px] p-2 animate-slide-down">
          <h2 className="text-[50px] font-san font-bold text-left w-[550px] my-2 gradient-text">
            Beyond the Horizon
          </h2>
          <p className="text-sm font-sans text-gray-300 text-left w-1/2 ">
            Celestia is your ultimate portal to the wonders of the universe.
            Stay updated with the latest space events, from thrilling rocket
            launches to groundbreaking discoveries
          </p>
        </div>
        <div className="justify-center mt-[370px] ml-[105px]">
          <button
            onClick={handleExplore}
            className="animate-slide-down p-2 flex justify-between relative z-10 h-[40px] w-[120px] border border-[rgba(126,118,118,0.788)] rounded-[10px] bg-transparent transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)]"
          >
            <span className="text-white text-sm">Lets Explore</span>
            <img className="w-5 h-5" src={arrow} alt="arrow icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
