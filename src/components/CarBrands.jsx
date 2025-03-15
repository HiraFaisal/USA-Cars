import React, { useState } from "react";
import brand from "../data/brands"; // Importing car brands from a separate file

const CarBrands = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brand : brand.slice(0, 16);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Buy cars
        </h2>

        {/* Grid Layout for Car Logos */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 place-items-center">
          {visibleBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
              <img
  src={brand.logo}
  alt={`${brand.name} Logo`}
  loading="lazy"
  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
/>

              </div>
              <span className="text-sm text-gray-600 group-hover:text-yellow-500 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* "View More" Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarBrands;