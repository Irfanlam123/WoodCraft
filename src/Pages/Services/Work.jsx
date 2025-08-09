import React from 'react';

const ServicesShowcase = () => {
  return (
    <div className="bg-gray-50 p-2 mt-4">
      {/* Hero Section */}
      <div className="relative h-96 bg-[#4a0404]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Craftsmanship in Action</h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            Witness the skill and dedication that goes into every project
          </p>
        </div>
      </div>

      {/* Flooring Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#4a0404]">Precision Flooring Installation</h2>
            <p className="text-lg text-gray-600">
              Our flooring specialists meticulously measure, cut, and install each plank with perfect alignment. 
              Watch as they transform spaces with hardwood, laminate, and vinyl flooring that lasts generations.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Exact measurements for seamless joints</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Specialized tools for flawless installation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quality materials that stand the test of time</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1170&auto=format&fit=crop" 
              alt="Flooring installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Our craftsman installing premium oak flooring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Furniture Making Section */}
      <div className="py-16 bg-[#4a0404]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white order-last lg:order-first">
              <img 
                src=".\src\assets\Fcrafting.avif" 
                alt="Furniture crafting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Master craftsman shaping custom furniture</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4a0404]">Handcrafted Furniture Creation</h2>
              <p className="text-lg text-gray-600">
                Our woodworkers combine traditional techniques with modern designs to create heirloom-quality pieces. 
                Each cut, joint, and finish is executed with precision and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-amber-700 mb-2">Custom Designs</h3>
                  <p className="text-sm text-gray-600">Tailored to your exact specifications and space requirements</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-amber-700 mb-2">Solid Wood</h3>
                  <p className="text-sm text-gray-600">Using only premium, sustainably sourced hardwoods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restoration Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4a0404]">Artful Restoration Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Watch how we breathe new life into cherished furniture pieces with our restoration expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <img 
              src=".\src\assets\wrap.avif" 
              alt="Assessment"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg">Assessment</h3>
                <p className="text-amber-200">Careful evaluation of each piece</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1171&auto=format&fit=crop" 
              alt="Repair"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg">Repair</h3>
                <p className="text-amber-200">Structural integrity restoration</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1074&auto=format&fit=crop" 
              alt="Finishing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg">Finishing</h3>
                <p className="text-amber-200">Beautiful protective coatings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#4a0404] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of skilled craftsmen is ready to bring your vision to life with quality workmanship and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors shadow-lg">
              Get a Free Estimate
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
              Visit Our Workshop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;