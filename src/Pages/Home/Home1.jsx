import React from "react";
import Button from "../../Components/Button";
import { FaTools, FaHome, FaStar } from "react-icons/fa";
import Card from "../../Components/Card";
import Home3 from "./Home3";

const Home1 = () => {
  return (
    <div className="bg-yellow-50">
      <section className=" py-16 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-0 md:px-12  rounded-lg">
          {/* Text Section */}
          <div className="flex-1 font-sans text-center md:text-left ml-0 md:ml-6">
            {/* First line - Small */}
            <p className="text-xl uppercase tracking-wide blur-[1px]">
              Transform Your Space with Exceptional Flooring Solutions
            </p>

            {/* Second line - Large */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Elevate Your Environment With Our{" "}
              <span className="text-[#4a0404]">
                Innovative Flooring Expertise
              </span>
            </h2>

            {/* Third paragraph - Small */}
            <p className="mt-5 text-gray-700 text-base leading-relaxed">
              Crafting exceptional spaces with quality, style, and precision in
              every personalized flooring project. Unveiling elegance and
              durability in flooring that redefines your living and working
              environments.
            </p>

            {/* Button */}
            <div className="mt-6 py-2">
              <Button text="Discover More " />
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="./src/assets/floor.png"
              alt="floorCleaning"
              className="h-72 md:h-96 object-cover rounded-lg"
              style={{
                boxShadow: "-15px 0px 20px rgba(0, 0, 0, 0.3)", // left shadow only
              }}
            />
          </div>
        </div>
      </section>



      <div className="py-10 flex justify-center flex-wrap gap-0">
        <Card
          icon={<FaTools />}
          title="Expert Craftsmanship Work"
          description="Emphasize the high level of skill and attention to detail in your flooring installations."
        />
        <Card
          icon={<FaHome />}
          title="Innovative Designs"
          description="Emphasize the high level of skill and attention to detail in your flooring installations."
        />
        <Card
          icon={<FaStar />}
          title="Customer Satisfaction"
          description="Emphasize the high level of skill and attention to detail in your flooring installations."
        />
      </div>
                
          {/*  Overlapping Image */}       
     
     <Home3/>


    </div>
  );
};

export default Home1;
