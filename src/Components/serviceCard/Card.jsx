import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="group bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-all duration-300 w-full h-full flex flex-col relative">
      {/* Image section with responsive height */}
      <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/90 via-[#4a0404]/30 to-transparent"></div>
      </div>

      {/* Title positioned to overlap both image and content */}
      <div className="absolute top-[calc(10rem)] sm:top-[calc(12rem)] md:top-[calc(14rem)] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 w-5/6 px-2 sm:px-4 text-center">
        <h3 className="text-white text-sm sm:text-base md:text-lg font-bold bg-[#4a0404] py-2 px-4 sm:py-3 sm:px-6 rounded-md sm:rounded-lg shadow-md border-2 border-amber-500/30">
          {title}
        </h3>
      </div>

      {/* Content area with responsive padding */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow pt-8 sm:pt-10 md:pt-12">
        <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base flex-grow">
          {description}
        </p>
        
        {/* Responsive button */}
        <div className="text-center mt-auto">
          <Link
            to={link}
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-medium text-white bg-gradient-to-br from-amber-600 to-amber-700 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 group-hover:from-amber-700 group-hover:to-amber-800 shadow-sm sm:shadow-md hover:shadow-lg"
          >
            Discover More
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive decorative elements */}
      <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[#4a0404] transform rotate-45 origin-bottom-left translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 bg-amber-600/20 rounded-full"></div>
    </div>
  );
};

export default ServiceCard;