import { useState, useEffect } from "react";
import cars from "../data/car";
import CarCard from "./CarCard";

const HotLots = () => {
  const [visibleSlides, setVisibleSlides] = useState(3); // Default: 3 slides for large screens
  const totalCars = cars.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update visible slides based on screen size
  useEffect(() => {
    const updateSlides = () => {
      setVisibleSlides(window.innerWidth < 640 ? 1 : 3); // Show 1 slide on mobile, 3 on larger screens
    };

    updateSlides(); // Set initial value
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Move to next slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides >= totalCars ? 0 : prevIndex + visibleSlides
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCars - visibleSlides : prevIndex - visibleSlides
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">Hot Lots</h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {cars.concat(cars).map((car, index) => (
            <div key={index} className={`flex-none px-2 ${visibleSlides === 1 ? "w-full" : "w-1/3"}`}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md hover:bg-blue-200 transition"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md hover:bg-blue-200 transition"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default HotLots;
