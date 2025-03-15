import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";
import reviews from "../data/reviews";

const CustomerReviews = () => {
  const totalReviews = reviews.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Adjust visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 640 ? 1 : 3);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides >= totalReviews ? 0 : prevIndex + visibleSlides
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalReviews - visibleSlides : prevIndex - visibleSlides
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="flex-none w-full sm:w-1/3 px-2">
              <div className="bg-[#f6f2f3] p-6 shadow-md text-center min-h-[420px] flex flex-col justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto mb-8 object-cover"
                />
                <p className="text-gray-700 mb-3">"{review.review}"</p>

                {/* Star Rating */}
                <div className="flex justify-center mb-3 text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <MdStar key={i} size={20} />
                  ))}
                </div>

                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
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
        <MdChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md hover:bg-blue-200 transition"
        aria-label="Next slide"
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
};

export default CustomerReviews;
