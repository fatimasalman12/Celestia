// StarMap.jsx
import React, { useState } from 'react';
import mercuryImage from '../assets/mercury.png'; // Replace with actual paths to your images
import venusImage from '../assets/Venus.png'; 
import marsImage from '../assets/mars.png'; 
import earthImage from '../assets/earth-removebg-preview.png'; 
import jupiterImage from '../assets/jupiter.png'; 
import saturnImage from '../assets/saturn2.png'; 
import neptuneImage from '../assets/neptune.png';
import uranusImage from '../assets/uranus.png';

const planets = [
    {
      name: 'Mercury',
      image: mercuryImage,
      galaxy: 'Milky Way',
      diameter: '4,880 km',
      climate: 'Extreme',
      avgTemp: '−173°C to 427°C',
    },
    {
      name: 'Venus',
      image: venusImage,
      galaxy: 'Milky Way',
      diameter: '12,104 km',
      climate: 'Hot',
      avgTemp: '462°C',
    },
    {
      name: 'Earth',
      image: earthImage,
      galaxy: 'Milky Way',
      diameter: '12,742 km',
      climate: 'Temperate',
      avgTemp: '14°C',
    },
    {
      name: 'Mars',
      image: marsImage,
      galaxy: 'Milky Way',
      diameter: '6,779 km',
      climate: 'Cold',
      avgTemp: '−63°C',
    },
    {
      name: 'Jupiter',
      image: jupiterImage,
      galaxy: 'Milky Way',
      diameter: '139,820 km',
      climate: 'Gas Giant',
      avgTemp: '−108°C',
    },
    {
      name: 'Saturn',
      image: saturnImage,
      galaxy: 'Milky Way',
      diameter: '116,460 km',
      climate: 'Gas Giant',
      avgTemp: '−139°C',
    },
    {
      name: 'Uranus',
      image: uranusImage,
      galaxy: 'Milky Way',
      diameter: '50,724 km',
      climate: 'Ice Giant',
      avgTemp: '−195°C',
    },
    {
      name: 'Neptune',
      image: neptuneImage,
      galaxy: 'Milky Way',
      diameter: '49,244 km',
      climate: 'Ice Giant',
      avgTemp: '−201°C',
    },
  ];

export default function StarMap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? planets.length - 1 : prevIndex - 1
    );
  };

  const currentPlanet = planets[currentIndex];

  return (
    
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-6 rounded-lg relative bg-black bg-opacity-30 shadow-lg">
        {/* Title and Planet */}
        <h1 className="text-6xl font-bold text-center mb-6">{currentPlanet.name.toUpperCase()}</h1>
        <div className="flex justify-center mb-8">
          <img
            src={currentPlanet.image}
            alt={currentPlanet.name}
            className="w-72 h-72 object-cover rounded-full shadow-2xl"
          />
        </div>

        {/* Information Section */}
        <div className="flex justify-around bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <div className="text-center">
            <p className="text-sm uppercase font-semibold">Galaxy</p>
            <p className="text-xl">{currentPlanet.galaxy}</p>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase font-semibold">Diameter</p>
            <p className="text-xl">{currentPlanet.diameter}</p>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase font-semibold">Climate</p>
            <p className="text-xl">{currentPlanet.climate}</p>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase font-semibold">Avg Temp</p>
            <p className="text-xl">{currentPlanet.avgTemp}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-4 left-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          →
        </button>
      </div>
    </div>
  );
}
