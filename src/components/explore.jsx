// THIS IS WITHOUT THE SLIDING EFFECT BUT WORKS FINE
import React, { useState } from "react";
import Star from "../components/star";
import earth from "../assets/earth-removebg-preview.png";
import explore from "../assets/icons8-space-64.png";
import jupiter from "../assets/jupiter.png";
import venus from "../assets/Venus.png";
import mars from "../assets/mars2.png";
import uranus from "../assets/uranus.png";
import mercury from "../assets/mercury2.png";
import saturn from "../assets/saturn2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from "../assets/right.png";
import left from "../assets/left.png";
import moon from "../assets/moon-removebg-preview.png";

const Explore = () => {
  const numberOfStars = 200; // Adjust the number of stars as needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      title: "Upcoming Space Events",
      description:
        "Stay updated with the latest events in space exploration. Set reminders and never miss a launch or discovery.",
      button: "View Events",
      img: earth,
    },
    {
      title: "Recent Discoveries",
      description:
        "Discover the latest findings and breakthroughs in space research. From new planets to cosmic phenomena.",
      button: "Explore Discoveries",
      img: venus,
    },
    {
      title: "Interactive Star Map",
      description:
        "Explore the night sky with our interactive star map. Identify stars, planets, and constellations.",
      button: "Start Exploring",
      img: jupiter,
    },
    {
      title: "Astronomy Articles",
      description:
        "Read in-depth articles written by experts in the field of astronomy and space science.",
      button: "Read Articles",
      img: mercury,
    },
    {
      title: "Space Missions",
      description:
        "Learn about past, present, and future space missions and their contributions to our understanding of the universe.",
      button: "View Missions",
      img: uranus,
    },
    {
      title: "Space News",
      description:
        "Stay informed with the latest news and updates from the world of space exploration.",
      button: "Read News",
      img: mars,
    },
    {
      title: "Astronomy Tutorials",
      description:
        "Get started with astronomy with our beginner-friendly tutorials and guides.",
      button: "Start Learning",
      img: saturn,
    },
    {
      title: "Space Photography",
      description:
        "Browse stunning photos of space captured by telescopes and space missions.",
      button: "View Photos",
      img: moon,
    },
  ];

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setIsTransitioning(false);
    }, 500); // Adjust this value to match the CSS transition duration
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
      setIsTransitioning(false);
    }, 500); // Adjust this value to match the CSS transition duration
  };

  const getVisibleCards = () => {
    const start = currentIndex;
    const end = (currentIndex + cardsToShow) % cards.length;
    if (end > start) {
      return cards.slice(start, end);
    } else {
      return [...cards.slice(start), ...cards.slice(0, end)];
    }
  };

  return (
    <div
      id="explore"
      className="relative bg-[#0c0c0c] h-screen w-full overflow-hidden"
    >
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <Star key={index} />
      ))}
      <div className="flex flex-col justify-center space-x-5 z-10 p-4 text-center text-lg">
        <img
          className="w-9 h-9 ml-[550px] mt-[30px]"
          src={explore}
          alt="explore"
        />
        <span className="z-20 text-gray-300 text-[35px] gradient-text2 font-bold -mt-[30px]">
          Explore
        </span>
        <p className="text-sm font-sans text-gray-300 mt-[30px]">
          Swipe through the latest events, read insightful articles, and
          discover the secrets of the cosmos.
        </p>
      </div>
      {/* This portion is the small earth image */}
      <div className="z-50 relative hover:translate-y-2 group m-8 h-[40px] w-[40px] transition rounded-full duration-300 ease-in-out transform hover:shadow-earth">
        <img className="rounded-full" src={earth} alt="earth" />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Earth:</strong> The third planet from the Sun, and the densest
          planet in the Solar System.
        </div>
      </div>
      <div className="ml-[250px] -mt-[230px] z-50 relative hover:translate-y-2 group m-8 h-[30px] w-[30px] transition rounded-full duration-300 ease-in-out transform hover:shadow-jupiter">
        <img className="rounded-full" src={jupiter} alt="earth" />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Jupiter:</strong> The largest planet, a gas giant with a
          massive storm and dozens of moons.
        </div>
      </div>
      <div className="z-50 ml-[1100px] -mt-[50px] relative hover:translate-y-2 group m-8 h-[40px] w-[40px] transition rounded-full duration-300 ease-in-out transform hover:shadow-venus">
        <img className="rounded-full" src={venus} alt="earth" />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Venus:</strong> Earth's "sister planet," shrouded in thick
          clouds of sulfuric acid and featuring scorching surface temperatures.
        </div>
      </div>

      <div className="flex space-x-3 my-[150px] justify-center">
        <div>
          <button onClick={handlePrev}>
            <img
              className="w-8 h-8 mx-5 mt-[130px] hover:w-9 hover:h-9"
              src={left}
              alt="left"
            />
          </button>
        </div>
        {getVisibleCards().map((card, index) => (
          <div
            key={index}
            className="border border-[rgba(126,118,118,0.788)] rounded-[25px] w-[250px] h-[300px] p-3 bg-[rgba(56,55,55,0.445)] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(211,218,216,0.3)] hover:w-[260px] hover:h-[310px]"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="h-8 w-full my-1">
              <span className="text-[#ffff] font-bold text-lg">{card.title}</span>
            </div>
            <div className="h-[100px] w-full">
              <p className="text-gray-300 text-sm">{card.description}</p>
            </div>
            <div className="flex justify-center mt-[80px] h-[50px] w-full">
              <button className="h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none cursor-pointer hover:shadow-neptune">
                <span className="relative z-10">{card.button}</span>
              </button>
            </div>
          </div>
        ))}
        <div>
          <button onClick={handleNext}>
            <img
              className="w-8 h-8 mx-5 mt-[130px] hover:w-9 hover:h-9"
              src={right}
              alt="right"
            />
          </button>
        </div>
      </div>
      <div className="-mt-[130px] h-[30px] w-[30px] z-50 relative hover:translate-y-2 group m-8 transition rounded-full duration-300 ease-in-out transform hover:shadow-mercury">
        <img
          className="rounded-full h-[30px] w-[30px]"
          src={mercury}
          alt="earth"
        />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Mercury: </strong>The farthest ice giant, known for its deep
          blue color and supersonic winds.
        </div>
      </div>
      <div className="-mt-[70px] ml-[1100px] z-50 relative hover:translate-y-2 group m-8 h-[27px] w-[27px] transition rounded-full duration-300 ease-in-out transform hover:shadow-uranus">
        <img className="rounded-full" src={uranus} alt="earth" />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Uranus: </strong>An ice giant with a unique sideways rotation
          and faint rings, known for its blue-green color.
        </div>
      </div>
      <div className="-mt-[30px] ml-[600px] z-50 relative hover:translate-y-2 group m-8 h-[33px] w-[33px] transition rounded-full duration-300 ease-in-out transform hover:shadow-mars">
        <img
          className="rounded-full h-[33px] w-[33px]"
          src={mars}
          alt="earth"
        />
        <div className="absolute ml-[50px] -my-[15px] bottom-0 left-0 w-[200px] p-2 text-white text-xs rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <strong>Mars</strong> The "Red Planet," known for its iron oxide
          surface, polar ice caps, and the largest volcano in the solar system.
        </div>
      </div>
    </div>
  );
};

export default Explore;
