import React, { useState, useEffect } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import { useNavigate } from "react-router-dom";
const images = [hero1, hero2, hero3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  // Automatically change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Image Slide */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">The New Minimal</h2>
            <h1 className="text-4xl font-bold text-gray-900">GOLD COLLECTION</h1>
          

            <button  onClick={() => navigate("/collections")}  className="mt-4 px-6 py-2 bg-gold-500 bg-black text-white font-semibold rounded-md cursor-pointer">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Dots for Manual Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
