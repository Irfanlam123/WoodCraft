import React from "react";
import Button from "../../Components/Button";
import { FaTools, FaHome, FaStar, FaArrowRight } from "react-icons/fa";
import Card from "../../Components/Card";
import Home3 from "./Home3";

const Home1 = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 rounded-lg">
          {/* Text Section */}
          <div className="flex-1 font-sans text-center md:text-left">
            {/* Tagline */}
            <div className="inline-block mb-4 px-3 py-1 bg-amber-100 rounded-full">
              <p className="text-sm md:text-base uppercase tracking-wider text-amber-800 font-medium">
                Transform Your Space
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
              Elevate Your Environment With{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Innovative</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200 opacity-60 z-0"></span>
              </span>{" "}
              <br />
              <span className="text-[#4a0404]">Flooring Expertise</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-2xl">
              Crafting exceptional spaces with quality, style, and precision in
              every personalized flooring project. Unveiling elegance and
              durability in flooring that redefines your living and working
              environments.
            </p>

            {/* Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button text="Discover More" icon={<FaArrowRight className="ml-2" />} />
              <button className="px-6 py-3 border-2 border-amber-800 text-amber-800 font-medium rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src="./src/assets/floor.png"
                alt="floorCleaning"
                className="h-72 md:h-[28rem] object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                style={{
                  boxShadow: "15px 15px 30px rgba(0, 0, 0, 0.15)",
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <FaStar className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="py-12 md:py-20 bg-white bg-opacity-60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-amber-700">Our Services</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We combine quality materials with expert craftsmanship to deliver
              flooring solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={<FaTools className="text-2xl text-amber-600" />}
              title="Expert Craftsmanship"
              description="Our skilled artisans bring decades of experience to every project, ensuring flawless execution and attention to detail."
              bgColor="bg-amber-50"
            />
            <Card
              icon={<FaHome className="text-2xl text-amber-600" />}
              title="Innovative Designs"
              description="Stay ahead with cutting-edge flooring designs tailored to your unique style and functional needs."
              bgColor="bg-amber-50"
            />
            <Card
              icon={<FaStar className="text-2xl text-amber-600" />}
              title="Customer Satisfaction"
              description="Your happiness is our priority. We work closely with you from concept to completion for perfect results."
              bgColor="bg-amber-50"
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