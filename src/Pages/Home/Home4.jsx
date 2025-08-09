import React from "react";
import ServiceCard from "../../Components/serviceCard/Card";

const Home4 = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 font-sans">
      {/* Headings */}
      <div className="text-center mb-12">
        <h1 className="text-xl  font-bold text- mb-4">Our Solutions</h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#4a0404]">
          Expert Flooring and Construction Solutions
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex justify-center space-x-4">
        <ServiceCard
          image=".\src\assets\Swood.avif"
          title="Residential Flooring Installation"
          description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
          link="#"
        />

        <ServiceCard
          image=".\src\assets\Swood1.avif"
          title="Safety and Accessibility Flooring"
          description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
          link="#"
        />

        <ServiceCard
          image=".\src\assets\Swood2.avif"
          title="Construction and Remodeling Services"
          description="Flooring installations that prioritize safety, including non-slip surfaces and accessibility features."
          link="#"
        />
      </div>
    </div>
  );
};

export default Home4;
