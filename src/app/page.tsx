"use client"; // Indicates that this module should only run in a client environment
import React, { useEffect, useRef, useState } from "react"; // Importing React hooks and features
import { Gradient } from "@/app/gradient"; // Importing the Gradient component
import sunsetCities from "@/lib/sunsets";
import { hexToNormalizedRGB } from "@/lib/utils";

export default function Home() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0); // State to keep track of the current city index
  const gradientRef = useRef<any>(
    new Gradient(sunsetCities[currentCityIndex].colors)
  ); // Ref to store the Gradient instance
  const currentCity = sunsetCities[currentCityIndex]; // Get the current city based on the index
  const currentColors = sunsetCities[currentCityIndex].colors.map((color) =>
    typeof color === "string" ? hexToNormalizedRGB(color) : color
  );
  const changeCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % sunsetCities.length);
  };

  // Effect hook to initialize and update the gradient for the current city
  useEffect(() => {
    const canvasElement = document.querySelector(
      "#gradient-canvas"
    ) as HTMLCanvasElement;
    if (canvasElement) {
      gradientRef.current.initGradient("#gradient-canvas", currentColors);
    }
  }, [currentColors]);

  // Effect hook to smoothly update the gradient colors when the city changes
  useEffect(() => {
    if (!gradientRef.current) return; // If there's no gradient instance, do nothing
    if (gradientRef.current) {
      gradientRef.current.updateSectionColorsSmoothly(currentColors); // Ensure gradientRef.current is not null
    }
    console.log("gradientRef.current", gradientRef.current);
  }, [currentColors]);

  // Render the canvas and display the current gradient colors
  return (
    <main className="relative">
      <h1 className="absolute m-4 flex flex-col text-3xl font-bold opacity-80 shadow-lg">
        {currentCity.city}
        <span className="text-lg font-medium">{currentCity.country}</span>
      </h1>

      <div className="absolute right-0 top-0 z-50 m-8 flex items-center justify-center space-x-4">
        {currentColors.map((color, index) => (
          <div
            key={index}
            className="flex items-center justify-center font-bold text-white opacity-60 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundColor: `rgb(${color[0] * 255}, ${color[1] * 255}, ${
                color[2] * 255
              })`,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 m-4 opacity-60 z-10"
        onClick={changeCity}
      >
        discover
      </button>

      <p className="absolute bottom-0 right-0 m-4 font-medium opacity-80 shadow-lg">
        Sunsets around the world.
      </p>

      <canvas id="gradient-canvas" className=" z-10 blur-3xl"></canvas>
    </main>
  );
}
