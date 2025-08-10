import React from "react";
import Button from "../../Components/Button";
import { FaTools, FaHome, FaStar, FaArrowRight } from "react-icons/fa";
import Card from "../../Components/Card";
import Home3 from "./Home3";

const Home1 = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:py-16 md:py-24">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Section */}
          <div className="flex-1 font-sans text-center md:text-left">
            {/* Tagline */}
            <div className="inline-block mb-3 sm:mb-4 px-2 py-1 sm:px-3 sm:py-1 bg-amber-100 rounded-full">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-amber-800 font-medium">
                Transform Your Space
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 sm:mt-3 leading-tight">
              Elevate Your Environment With{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Innovative</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-amber-200 opacity-60 z-0"></span>
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#4a0404]">Flooring Expertise</span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              Crafting exceptional spaces with quality, style, and precision in
              every personalized flooring project. Unveiling elegance and
              durability in flooring that redefines your living and working
              environments.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button 
                text="Discover More" 
                icon={<FaArrowRight className="ml-2" />} 
                className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-amber-800 text-amber-800 text-sm sm:text-base font-medium rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center relative w-full">
            <div className="relative w-full max-w-md">
              <img
                src="./src/assets/floor.png"
                alt="floorCleaning"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-[28rem] object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                style={{
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-3">
                    <FaStar className="text-amber-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">500+</p>
                    <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white bg-opacity-60 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-amber-700">Our Services</span>
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We combine quality materials with expert craftsmanship to deliver
              flooring solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card
              icon={<FaTools className="text-xl sm:text-2xl text-amber-600" />}
              title="Expert Craftsmanship"
              description="Our skilled artisans bring decades of experience to every project, ensuring flawless execution and attention to detail."
              bgColor="bg-amber-50"
              className="text-sm sm:text-base"
            />
            <Card
              icon={<FaHome className="text-xl sm:text-2xl text-amber-600" />}
              title="Innovative Designs"
              description="Stay ahead with cutting-edge flooring designs tailored to your unique style and functional needs."
              bgColor="bg-amber-50"
              className="text-sm sm:text-base"
            />
            <Card
              icon={<FaStar className="text-xl sm:text-2xl text-amber-600" />}
              title="Customer Satisfaction"
              description="Your happiness is our priority. We work closely with you from concept to completion for perfect results."
              bgColor="bg-amber-50"
              className="text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Overlapping Image Section */}
      <Home3 />
    </div>
  );
};

export default Home1;