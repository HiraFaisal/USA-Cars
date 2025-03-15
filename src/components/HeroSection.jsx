import { useState } from "react";
import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.png";

const slides = [slide1, slide2];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative overflow-hidden rounded-3xl m-4 sm:m-6 lg:m-8">
      <div
        className="relative h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center transition-all duration-500 rounded-3xl"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-10 sm:px-8 md:px-12 lg:px-16">
  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
    WELCOME TO <span className="text-yellow-500">USA CARS</span>
  </h1>
  <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-8">
    Discover the best deals on high-quality used cars. Fast shipping and easy buying process!
  </p>
  <a
    href="#"
    className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-yellow-500 text-white text-xs sm:text-sm font-medium hover:bg-yellow-600 transition duration-150"
  >
    Register
  </a>
</div>


        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 focus:outline-none"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 focus:outline-none"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white scale-110" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
