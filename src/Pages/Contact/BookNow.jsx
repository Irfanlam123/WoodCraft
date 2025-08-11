import { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import Form from './Form';

const BookNowPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1531824475211-72594993ce2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Overlay with gradient */}
      <div className={`min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Hero Section */}
        <div className="relative py-16 px-4 sm:py-20 md:py-24 bg-gradient-to-r from-[#4a0404]/90 to-[#2a0101]/90 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 transform transition-all duration-700 hover:scale-105">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Book Our Master Craftsmen
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 text-amber-100">
              Complete the form below and we'll craft your vision into reality
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
              <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
              <div className="w-4 h-1 bg-amber-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Decorative wood texture divider */}
        <div className="h-2 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-amber-900/80"></div>

        {/* Form Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 transform transition-all duration-500 hover:scale-[99.9%]">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-amber-700/30">
                <div className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    Service Request Form
                  </h2>
                  <p className="text-gray-600 mb-6">Let us know about your project needs</p>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/CTA Section */}
        <div className="py-16 px-4 sm:px-6 bg-gradient-to-b from-amber-900/30 to-[#4a0404]/90 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl italic mb-8">
              "The team transformed our kitchen with exceptional craftsmanship. Their attention to detail is unmatched."
            </blockquote>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-xl font-bold">JS</span>
              </div>
              <div className="text-left">
                <p className="font-semibold">James & Sarah</p>
                <p className="text-sm text-amber-200">Custom Kitchen Project</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Call Us Directly: (123) 456-7890
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNowPage;