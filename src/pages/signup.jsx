import React from "react";
import { useEffect, useRef } from "react";
import "../styles/loginstyle.css";
import videoBg from "../assets/spacevid.mp4";
import GoogleLogo from "../assets/google.png";
import logo from "../assets/whitelogo.png";

function Signup() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // We can control the speed of any video like this
    }
  }, []);

  return (
    <div className="main">
      <div className="overlay"></div>
      <video ref={videoRef} src={videoBg} autoPlay loop muted />
      <div className="content ">
        <div className="h-[490px] w-[350px] bg-[rgba(56,55,55,0.445)] border border-[rgba(126,118,118,0.788)] rounded-[22px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)]">
          <div className="h-[490px] w-[350px] rounded-none transition-all duration-200 hover:scale-98 hover:rounded-[20px]">
            <form action="login">
              <h2 className="signup-label">SignUp</h2>
              <button className="relative bg-[rgb(23,24,24)] rounded-lg shadow-[0px_4px_0px_0px_rgb(172,118,57)] py-3 px-4 cursor-pointer box-border text-white border-none text-base transition-all duration-300 ease-in-out z-1 overflow-hidden w-[285px] h-[45px] mt-7 ml-7 flex items-center justify-center submitbtn">
                <div className="flex items-center space-x-2 relative z-10">
                  <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
                  <span>Signup with Google</span>
                </div>
              </button>
              <hr className="hr-tag" />

              <input
                type="email"
                className=" w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] opacity-[0.6] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)]"
                name="email"
                placeholder="Enter your Username "
                required
              />
              <input
                type="email"
                className=" w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] opacity-[0.6] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)]"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <input
                type="password"
                className=" w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] opacity-[0.6] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)]"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <button className="w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] flex items-center justify-center space-x-4 hover:bg-[#3d3a3ab0] transition-colors duration-200">
                <img src={logo} alt="Google Logo" className="w-5 h-5" />
                <span className="text-white font-bold">Submit</span>
              </button>
            </form>
            <p className="text-[rgb(199, 192, 192)] text-sm mt-4 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-[rgb(199, 192, 192)] underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
