import React from "react";
import { useEffect, useRef } from "react";
import "../styles/loginstyle.css";
import videoBg from "../assets/spacevid.mp4";
import GoogleLogo from "../assets/google.png";
import logo from "../assets/whitelogo.png";
import { useNavigate } from 'react-router-dom';

function Login() {
  const videoRef = useRef(null);
  const navigate = useNavigate(); 

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
        <div className="h-[410px] w-[350px] bg-[rgba(56,55,55,0.445)] border border-[rgba(126,118,118,0.788)] rounded-[22px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)">
          <div className="h-[410px] w-[350px] rounded-none transition-all duration-200 hover:scale-98 hover:rounded-[20px]">
            <form action="login">
              <h2 className="Login-label">Login</h2>
              <input
                type="email"
                className=" w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] opacity-[0.6]"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <input
                type="password"
                className=" w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] opacity-[0.6]"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <button className="w-72 h-30 py-3 px-4 rounded-lg ml-7 mt-4 bg-[#141313] flex items-center justify-center space-x-4 hover:bg-[#3d3a3ab0] transition-colors duration-200" 
              onClick={() => navigate('/dashboard')}>
                <img src={logo} alt="Google Logo" className="w-5 h-5" />
                <span className="text-white font-bold">Submit</span>
              </button>
              <hr className="hr-tag" />
              <button onClick={() => navigate('/dashboard')} 
              className="relative bg-[rgb(23,24,24)] rounded-lg shadow-[0px_4px_0px_0px_rgb(172,118,57)] py-3 px-4 cursor-pointer box-border text-white border-none text-base transition-all duration-300 ease-in-out z-1 overflow-hidden w-[285px] h-[45px] mt-4 ml-7 flex items-center justify-center submitbtn">
                <div className="flex items-center space-x-2 relative z-10">
                  <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
                  <span>Login with Google</span>
                </div>
              </button>
              <p className="text-[rgb(199, 192, 192)] text-sm mt-3 text-center">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-[rgb(199, 192, 192)] underline"
                >
                  Signup
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
