import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  const handleHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const handleExplore = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };
  const handleFeatures = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };
  const handleLinks = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="footer" className="bg-[#0c0c0c] text-white py-10 px-4 relative">
      <div className="flex justify-center gap-[230px]">
        {/* Left Section */}
        <div>
          <h2 className="text-[22px] font-bold">Celestia</h2>
          <p className="text-sm mt-2 text-gray-400">See Beyond The Horizon!</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-md font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="hover:text-white" onClick={handleHome}>
              Home
            </li>
            <li className="hover:text-white" onClick={handleExplore}>
              Explore
            </li>
            <li className="hover:text-white" onClick={handleFeatures}>
              Features
            </li>
            <li className="hover:text-white" onClick={handleLinks}>
              Links
            </li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-md font-semibold">Get in touch</h3>
          <div className="flex space-x-4 mt-4">
            <FaFacebook size={20} className="hover:text-gray-500" />
            <FaInstagram size={20} className="hover:text-gray-500" />
            <FaLinkedin size={20} className="hover:text-gray-500" />
          </div>
          <div className="flex mt-5">
            <input
              type="email"
              placeholder="Enter email address"
              className="p-2 rounded-full w-[200px] h-[45px] mr-2 text-black"
            />
            <button className="mx-2 bg-gradient-to-r from-purple-600 to-indigo-600 py-2 px-4 rounded-full w-full hover:shadow-neptune">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500">
        <p>©2024, All right reserved.</p>
      </div>

      {/* Scroll to Top Button */}

      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hover:bg-gradient-to-r from-purple-600 to-indigo-600 p-1 rounded-full"
      >
        <FaArrowCircleUp size={25} className="text-white"/>
      </button> */}
    </div>
  );
}

export default Footer;
