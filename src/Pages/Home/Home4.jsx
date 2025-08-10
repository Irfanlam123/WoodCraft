import React from "react";
import ServiceCard from "../../Components/serviceCard/Card";
import WoodcraftGallery from "./Gallery";

const Home4 = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 font-sans">
      {/* Headings */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-lg sm:text-xl font-bold text-gray-600 mb-2 sm:mb-4">Our Solutions</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4a0404] leading-tight">
          Expert Flooring and Construction Solutions
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        <div className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-32px)]">
          <ServiceCard
            image="./src/assets/Swood.avif"
            title="Residential Flooring Installation"
            description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
            link="#"
            className="h-full"
          />
        </div>
        
        <div className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-32px)]">
          <ServiceCard
            image="./src/assets/Swood1.avif"
            title="Safety and Accessibility Flooring"
            description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
            link="#"
            className="h-full"
          />
        </div>
        
        <div className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-32px)]">
          <ServiceCard
            image="./src/assets/Swood2.avif"
            title="Construction and Remodeling Services"
            description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
            link="#"
            className="h-full"
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <WoodcraftGallery/>
      </div>
    </div>
  );
};

export default Home4;