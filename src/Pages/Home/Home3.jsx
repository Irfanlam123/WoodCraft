import React from 'react';

const Home3 = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side Text */}
        <div className="flex flex-col space-y-4 sm:space-y-6 max-w-xl order-2 lg:order-1">
          <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Crafting Excellence
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-[#4a0404]">Dedicated Experts</span> In Flooring & Construction
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            At Woodcraft, we blend artistry with functionality to create
            outstanding flooring and construction solutions. Our passion drives
            every project's success.
          </p>

          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            {[
              "Superior quality in every detail",
              "Tailoring solutions to individual preferences",
              "Experienced professionals at your service",
              "Ensuring customer satisfaction with every project"
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 sm:gap-3"
              >
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 sm:pt-4">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#4a0404] text-white text-sm sm:text-base rounded-full font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
              Get Your Free Estimate
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="relative w-full max-w-2xl mb-8 lg:mb-0 order-1 lg:order-2">
          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src='./src/assets/wrap.avif'
              alt="Flooring Work"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Overlapping Image */}
          <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 lg:-right-10 lg:-bottom-10 z-20 w-1/2 sm:w-[60%] lg:w-[70%] border-2 sm:border-4 border-white rounded sm:rounded-lg shadow-lg sm:shadow-2xl overflow-hidden">
            <img
              src="./src/assets/wrap2.avif"
              alt="Flooring Detail"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-[300px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3;