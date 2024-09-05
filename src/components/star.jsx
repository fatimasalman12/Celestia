import React from "react";

const Star = () => {
  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const getRandomSize = () => ({
    width: `${Math.random() * 1.5 + 0.5}px`,
    height: `${Math.random() * 1.5 + 0.5}px`,
  });

  const getRandomColor = () => {
    const colors = ["#FFFFFF", "#D3D3D3", "#C0C0C0"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const style = {
    ...getRandomPosition(),
    ...getRandomSize(),
    backgroundColor: getRandomColor(),
    position: "absolute",
    borderRadius: "50%",
  };

  return <div style={style}></div>;
};

export default Star;
