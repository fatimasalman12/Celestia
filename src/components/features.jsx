// import React from "react";
// import features from "../assets/icons8-settings-128.png";
// import Star from "../components/star";
// import jupiter from "../assets/jupiter.png";
// import venus from "../assets/Venus.png";
// import mars from "../assets/mars2.png";
// import uranus from "../assets/uranus.png";
// import mercury from "../assets/mercury2.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import earth from "../assets/earth-removebg-preview.png";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { FaRegBell } from "react-icons/fa";

// function Features() {
//   const numberOfStars = 200;
//   return (
//     <div
//       id="features"
//       className="relative bg-[#0c0c0c] h-screen w-full overflow-hidden"
//     >
//       {Array.from({ length: numberOfStars }).map((_, index) => (
//         <Star key={index} />
//       ))}
//       <div className="flex flex-col justify-center space-x-5 z-10 p-4 text-center text-lg ">
//         <img
//           className="w-9 h-9 ml-[550px] mt-[30px]"
//           src={features}
//           alt="Features"
//         />
//         <span className="z-20 text-gray-300 text-[35px] gradient-text2 font-bold -mt-[30px]">
//           Features
//         </span>
//         <p className="text-sm font-sans text-gray-300 mt-[30px]">
//           Embark on a cosmic journey through articles, event details, and more,
//           unraveling the wonders of the universe.
//         </p>
//       </div>
//       {/* This portion is the small earth image */}
//       <div className="z-50 relative hover:translate-y-2 group m-8 h-[40px] w-[40px] transition rounded-full duration-300 ease-in-out transform hover:shadow-earth">
//         <img className="rounded-full" src={earth} alt="earth" />
//         <div className="absolute ml-[50px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Earth:</strong> The third planet from the Sun, and the densest
//           planet in the Solar System.
//         </div>
//       </div>
//       <div className="ml-[250px] z-50 relative hover:translate-y-2 group m-8 h-[30px] w-[30px] transition rounded-full duration-300 ease-in-out transform hover:shadow-jupiter">
//         <img className="rounded-full" src={jupiter} alt="earth" />
//         <div className="absolute ml-[50px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Jupiter:</strong> The largest planet, a gas giant with a
//           massive storm and dozens of moons.
//         </div>
//       </div>

//       <div className="z-50 ml-[1100px] -mt-[50px] relative hover:translate-y-2 group m-8 h-[40px] w-[40px] transition rounded-full duration-300 ease-in-out transform hover:shadow-venus">
//         <img className="rounded-full" src={venus} alt="earth" />
//         <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Venus:</strong> Earth's "sister planet," shrouded in thick
//           clouds of sulfuric acid and featuring scorching surface temperatures.
//         </div>
//       </div>

//       {/* Adding Feature cards here */}
//       <div>
//         <div>
//           <IoChatboxEllipsesOutline size={24} color="blue" />
//         </div>
//         <div>
//           <FaRegBell size={24} color="red" />
//         </div>
//       </div>
//       <div className="h-[30px] w-[30px] z-50 relative hover:translate-y-2 group m-8 transition rounded-full duration-300 ease-in-out transform hover:shadow-mercury">
//         <img
//           className="rounded-full h-[30px] w-[30px]"
//           src={mercury}
//           alt="earth"
//         />
//         <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Mercury: </strong>The farthest ice giant, known for its deep
//           blue color and supersonic winds.
//         </div>
//       </div>
//       <div className="-mt-[70px] ml-[1100px] z-50 relative hover:translate-y-2 group m-8 h-[27px] w-[27px] transition rounded-full duration-300 ease-in-out transform hover:shadow-uranus">
//         <img className="rounded-full" src={uranus} alt="earth" />
//         <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Uranus: </strong>An ice giant with a unique sideways rotation
//           and faint rings, known for its blue-green color.
//         </div>
//       </div>
//       <div className="-mt-[30px] ml-[600px] z-50 relative hover:translate-y-2 group m-8 h-[33px] w-[33px] transition rounded-full duration-300 ease-in-out transform hover:shadow-mars">
//         <img
//           className="rounded-full h-[33px] w-[33px]"
//           src={mars}
//           alt="earth"
//         />
//         <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <strong>Mars</strong> The "Red Planet," known for its iron oxide
//           surface, polar ice caps, and the largest volcano in the solar system.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Features;


import React from "react";
import features from "../assets/icons8-settings-128.png";
import Star from "../components/star";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";

function Features() {
  const numberOfStars = 200;

  const featureCards = [
    {
      title: "AI Chatbot",
      description:
        "Interact with our AI chatbot to get detailed information about space events, missions, and more.",
      icon: (
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
          <IoChatboxEllipsesOutline size={30} className="text-white" />
        </div>
      ),
    },
    {
      title: "Set Reminders",
      description:
        "Never miss a space event! Set reminders for upcoming space missions, launches, and celestial events.",
      icon: (
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
          <FaRegBell size={30} className="text-white" />
        </div>
      ),
    },
    {
      title: "Event Notes",
      description:
        "Take and save notes on various space events and discoveries for future reference.",
      icon: (
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
          <MdOutlineEventNote size={30} className="text-white" />
        </div>
      ),
    },
    // Add more features as needed
  ];

  return (
    <div
      id="features"
      className="relative bg-[#0c0c0c] h-screen w-full overflow-hidden"
    >
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <Star key={index} />
      ))}
      <div className="flex flex-col justify-center space-x-5 z-10 p-4 text-center text-lg ">
        <img
          className="w-9 h-9 ml-[550px] mt-[30px]"
          src={features}
          alt="Features"
        />
        <span className="z-20 text-gray-300 text-[35px] gradient-text2 font-bold -mt-[30px]">
          Features
        </span>
        <p className="text-sm font-sans text-gray-300 mt-[30px]">
          Embark on a cosmic journey through articles, event details, and more,
          unraveling the wonders of the universe.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex justify-center mt-10 space-x-8">
        {featureCards.map((feature, index) => (
          <div
            key={index}
            className="w-[300px] h-[270px] flex flex-col items-center p-5 bg-[rgba(56,55,55,0.445)] rounded-lg border border-[rgba(126,118,118,0.788)] hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)] transition-all duration-300 "
          >
            <div className="mb-4 rounded-full hover:shadow-neptune">{feature.icon}</div>
            <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
