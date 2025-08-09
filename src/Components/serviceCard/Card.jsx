import React from "react";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="group bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[380px] h-full min-h-[450px] flex flex-col relative">
      {/* Image section with reduced height to accommodate title overlap */}
      <div className="relative overflow-hidden h-56"> {/* Reduced from h-64 */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/90 via-[#4a0404]/30 to-transparent"></div>
      </div>

      {/* Title positioned to overlap both image and content */}
      <div className="absolute top-[calc(56*4px)] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 w-full px-6 text-center">
        <h3 className="text-white text-xl font-bold bg-[#4a0404] py-3 px-6 rounded-lg shadow-lg border-2 border-amber-500/30">
          {title}
        </h3>
      </div>

      {/* Content area with extra padding-top to accommodate title */}
      <div className="p-6 flex flex-col flex-grow pt-10"> {/* Added pt-10 */}
        <p className="text-gray-600 mb-6 text-sm md:text-base flex-grow">
          {description}
        </p>
        
        {/* Enhanced button */}
        <div className="text-center mt-auto">
          <a
            href={link}
            className="relative inline-flex items-center px-6 py-3 font-medium text-white bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg overflow-hidden transition-all duration-300 group-hover:from-amber-700 group-hover:to-amber-800 shadow-md hover:shadow-lg"
          >
            <span>Discover More</span>
            <svg 
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#4a0404] transform rotate-45 origin-bottom-left translate-x-8 -translate-y-8"></div>
      </div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-amber-600/20 rounded-full"></div>
    </div>
  );
};

export default ServiceCard;