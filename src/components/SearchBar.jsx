import React, { useState } from "react";
import { FaCar, FaClock, FaDollarSign, FaMapMarkerAlt, FaTools, FaBolt, FaStar } from "react-icons/fa";

const SearchBar = () => {
  const [copartEnabled, setCopartEnabled] = useState(false);
  const [iaaiEnabled, setIaaiEnabled] = useState(false);

  return (
    <>
      {/* Search Bar Section */}
      <div className="max-w-7xl mx-auto p-6 bg-[#f6f2f3] rounded-lg shadow-md">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter lot, VIN, keywords"
            className="p-2 w-full rounded-full border border-gray-300 focus:outline-none"
          />
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>Any Make</option>
          </select>
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>Any Model</option>
          </select>
          <button className="text-yellow-500 font-semibold w-full">Advanced Search</button>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4">
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>From</option>
          </select>
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>To</option>
          </select>
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>Min Price</option>
          </select>
          <select className="p-2 w-full rounded-full border border-gray-300">
            <option>Max Price</option>
          </select>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-full w-full">
            Search
          </button>
        </div>

        {/* Third Row - Toggle Switches */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4">
          {/* Copart Toggle */}
          <div className="flex items-center space-x-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={copartEnabled}
                onChange={() => setCopartEnabled(!copartEnabled)}
              />
              <div className="w-12 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
            <span className="text-gray-700 font-medium">Copart</span>
          </div>

          {/* IAAI Toggle */}
          <div className="flex items-center space-x-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={iaaiEnabled}
                onChange={() => setIaaiEnabled(!iaaiEnabled)}
              />
              <div className="w-12 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
            <span className="text-gray-700 font-medium">IAAI</span>
          </div>
        </div>
      </div>

      {/* New Section with 7 Items (Scrollable on Mobile) */}
      <div className="max-w-7xl mx-auto overflow-x-auto">
  <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-6 mt-6 rounded-lg justify-items-center">
    {[
      { icon: <FaCar />, label: "Car Types" },
      { icon: <FaClock />, label: "Bidding Time" },
      { icon: <FaDollarSign />, label: "Price Range" },
      { icon: <FaMapMarkerAlt />, label: "Location" },
      { icon: <FaTools />, label: "Condition" },
      { icon: <FaBolt />, label: "Quick Buy" },
      { icon: <FaStar />, label: "Top Rated" }
    ].map((item, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center bg-[#f6f2f3] p-4 rounded-lg shadow-md w-full"
      >
        <div className="text-3xl text-yellow-500">{item.icon}</div>
        <span className="mt-2 text-sm font-medium text-yellow-500">{item.label}</span>
      </div>
    ))}
  </div>


      </div>
    </>
  );
};

export default SearchBar;
