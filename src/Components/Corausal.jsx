import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { carouselData } from "../Utils/DummyData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto flex items-center justify-center bg-yellow-300 py-10 sm:py-15">
      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 transition z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Slide Container */}
      <div className="overflow-hidden w-full max-w-6xl px-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="w-full flex-none flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg mx-2"
            >
              {/* Image Section */}
              <div className="w-full sm:w-1/2">
                <img
                  src={item.image}
                  alt="carousel"
                  className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full sm:w-1/2 p-4 sm:p-8 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 transition z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;