import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-6 p-4 rounded-full bg-yellow-50 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;