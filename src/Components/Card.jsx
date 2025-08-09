import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-xl p-6 w-80 h-64 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 mx-auto group overflow-hidden border border-gray-200 hover:border-amber-300">
      {/* Background pattern (subtle wood grain) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#4a0404] transform rotate-45 origin-bottom-left translate-x-8 -translate-y-8"></div>
      </div>

      {/* Icon + Title */}
      <div className="flex items-center justify-center mb-4 mt-2 group-hover:-translate-y-1 transition-transform duration-300">
        <span className="text-3xl text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
          {icon}
        </span>
        <h2 className="ml-4 text-xl text-[#4a0404] font-bold tracking-tight group-hover:text-[#6a0c0c] transition-colors duration-300">
          {title}
        </h2>
      </div>

      {/* Horizontal line with animation */}
      <div className="relative w-full my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-amber-600 text-sm transform group-hover:scale-110 transition-transform duration-300">
            ✻
          </span>
        </div>
      </div>

      {/* Description with improved typography */}
      <p className="text-gray-600 font-medium text-sm leading-relaxed flex-g-1 px-2 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>

      {/* Subtle hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default Card;