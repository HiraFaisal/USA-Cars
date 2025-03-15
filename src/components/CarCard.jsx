import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{car.title}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{car.rating}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>${car.startPrice}</span>
          <span>${car.endPrice}</span>
        </div>
        <button className="mt-3 w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default CarCard;
