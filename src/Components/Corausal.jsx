import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselData } from "../Utils/DummyData"


const corausalStyle = {
  corausalDiv: `relative w-full bg-gradient-to-b from-red-300 to-white py-8 md:py-12`,
  mainContainer: `relative overflow-hidden rounded-xl shadow-lg`,
  slides: `flex transition-transform duration-500 ease-out`,
  prevSlide: `absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"`,
  nextSlide: `absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200`,
  arrowIcon: `w-6 h-6 text-gray-800`,
  corausalMap: `w-full flex-none flex flex-col md:flex-row items-center bg-white`,
  imageDiv: `w-full md:w-1/2 h-48 sm:h-64 md:h-96 relative`,
  imageData: `w-full h-full object-cover`,
  contentSection: `w-full md:w-1/2 p-6 md:p-12`,
  contentHeading: `text-2xl md:text-4xl font-bold text-gray-900 mb-4`,
  contentText: `text-base md:text-lg text-gray-600`,
  AutoplayToggle: `absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-colors duration-200`,
  Dot: `absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2`,
}


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Sample carousel data - replace with your actual data
  

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

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

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={corausalStyle.corausalDiv}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={corausalStyle.mainContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={corausalStyle.slides}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselData.map((item, index) => (
              <div
                key={index}
                className={corausalStyle.corausalMap}
              >
                <div className={corausalStyle.imageDiv}>
                  <img
                    src={item.image}
                    alt={item.heading}
                    className={corausalStyle.imageData}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className={corausalStyle.contentSection}>
                  <h2 className={corausalStyle.contentHeading}>
                    {item.heading}
                  </h2>
                  <p className={corausalStyle.contentText}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className={corausalStyle.prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className={corausalStyle.arrowIcon} />
          </button>

          <button
            onClick={nextSlide}
            className={corausalStyle.nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className={corausalStyle.arrowIcon} />
          </button>

          <div className={corausalStyle.Dot}>
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-white w-6"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={corausalStyle.AutoplayToggle}
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;