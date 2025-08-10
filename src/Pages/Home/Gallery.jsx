import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const WoodcraftGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Hardwood Flooring",
      description: "Custom oak flooring with perfect stain matching",
      images: [
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ]
    },
    {
      id: 2,
      title: "Wood Paneling",
      description: "Walnut wall panels with intricate inlay work",
      images: [
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ]
    },
    // ... other projects (keep images array for each)
  ];

  const [selectedProject, setSelectedProject] = React.useState(projects[0]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [zoomModal, setZoomModal] = React.useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      (prev + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <div className="bg-amber-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      {/* Gallery Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0404] mb-2 sm:mb-4">
          Woodcraft Masterpieces
        </h1>
        <p className="text-sm sm:text-base text-gray-700">
          Witness the transformation of raw wood into exquisite creations.
        </p>
      </div>

      {/* Project Selector - Horizontal Scroll */}
      <div className="overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <div className="flex space-x-2 sm:space-x-4 w-max mx-auto px-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setSelectedImageIndex(0);
              }}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full whitespace-nowrap transition-all ${
                selectedProject.id === project.id
                  ? 'bg-[#4a0404] text-white shadow-sm sm:shadow-md'
                  : 'bg-white text-[#4a0404] hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Gallery Content */}
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        {/* Project Info */}
        <div className="mb-6 sm:mb-8 text-center px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
            {selectedProject.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
            {selectedProject.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-6 sm:mb-8 group">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-xl">
            <img
              src={selectedProject.images[selectedImageIndex]}
              alt={selectedProject.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setZoomModal(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full shadow-sm sm:shadow-md hover:bg-white transition-all"
                  onClick={prevImage}
                >
                  <FaChevronLeft className="text-[#4a0404] text-sm sm:text-base" />
                </button>
                <button 
                  className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full shadow-sm sm:shadow-md hover:bg-white transition-all"
                  onClick={nextImage}
                >
                  <FaChevronRight className="text-[#4a0404] text-sm sm:text-base" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
              {selectedImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {selectedProject.images.length > 1 && (
          <div className="flex overflow-x-auto space-x-2 sm:space-x-3 pb-2 sm:pb-4 px-2 scrollbar-hide">
            {selectedProject.images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-md overflow-hidden cursor-pointer transition-all ${
                  selectedImageIndex === idx ? 'ring-2 sm:ring-3 ring-amber-500' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {zoomModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <img
              src={selectedProject.images[selectedImageIndex]}
              alt={selectedProject.title}
              className="w-full h-full max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setZoomModal(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Craftsmanship Showcase */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 px-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4a0404] mb-4 sm:mb-6 text-center">
          The Woodcraft Difference
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-amber-800">Traditional Techniques</h4>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              Time-honored woodworking methods with modern precision tools.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Woodworking tools"
              className="w-full h-40 sm:h-48 object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-amber-800">Sustainable Materials</h4>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              Responsibly harvested wood with eco-friendly finishes.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Wood planks"
              className="w-full h-40 sm:h-48 object-cover rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodcraftGallery;