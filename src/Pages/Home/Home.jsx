import React from "react";
import Button from "../../Components/Button";
import Home1 from "./Home1";
import Footer from "../../Components/Footer";
import Home4 from "./Home4";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Hero Image with Gradient Overlay */}
        <div className="relative h-[70vh] sm:h-[80vh] md:h-[calc(100vh-50px)] w-full">
          <img
            src="./src/assets/heroimage.png"
            alt="Premium flooring installation"
            className="h-full w-full object-cover object-center transition-all duration-1000 hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-4 sm:left-10 lg:left-40 transform -translate-y-1/2 max-w-md sm:max-w-xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
              Innovative designs,
            </span>
            <br />
            <span className="text-white">lasting flooring solutions.</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-amber-50 drop-shadow-lg font-medium">
            Elevate your space with superior floors.
          </p>
          
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md max-w-full sm:max-w-lg">
            Experience the pinnacle of flooring excellence, delivering durability,
            style, and unmatched quality in every project.
          </p>
          
          <div className="mt-6 sm:mt-8">
            <Button 
              text='Discover More'
              className="px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            />
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Page Sections */}
      <Home1/>
      <Home4/>
      <Footer/>
    </div>
  );
};

export default Home;