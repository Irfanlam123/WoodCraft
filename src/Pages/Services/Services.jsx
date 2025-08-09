import { useState } from "react";
import { FaHome, FaChair, FaTools } from "react-icons/fa";
import { FaKitchenSet, FaDoorOpen, FaBuilding, FaTree } from "react-icons/fa6";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import ServicesShowcase from "./Work";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: 1,
      title: "Custom Furniture Making",
      description: "Handcrafted tables, chairs, wardrobes, and cabinets tailored to your specifications. We use premium quality wood and traditional joinery techniques.",
      icon: <FaChair className="text-4xl text-amber-600" />,
      category: "residential",
      priceRange: {
        basic: "$800 - $2,500",
        standard: "$2,500 - $5,000",
        premium: "$5,000+"
      },
      features: [
        "Custom designs to your exact specifications",
        "Premium hardwoods (oak, walnut, mahogany)",
        "Traditional joinery techniques",
        "3D design consultation included"
      ]
    },
    {
      id: 2,
      title: "Wooden Flooring Installation",
      description: "Expert installation of laminate, hardwood, and vinyl plank flooring. We provide seamless fitting with attention to detail for a perfect finish.",
      icon: <FaHome className="text-4xl text-amber-600" />,
      category: "residential",
      priceRange: {
        basic: "$3 - $6/sq.ft (laminate)",
        standard: "$6 - $12/sq.ft (engineered)",
        premium: "$12+/sq.ft (solid hardwood)"
      },
      features: [
        "Precision cutting and installation",
        "Moisture barrier included",
        "Multiple wood species available",
        "10-year craftsmanship warranty"
      ]
    },
    {
      id: 3,
      title: "Repair & Restoration",
      description: "Breathing new life into old furniture through expert repair and polishing. We preserve the character while restoring functionality.",
      icon: <FaTools className="text-4xl text-amber-600" />,
      category: "both",
      priceRange: {
        basic: "$150 - $300 (minor repairs)",
        standard: "$300 - $800 (structural repairs)",
        premium: "$800+ (antique restoration)"
      },
      features: [
        "Free damage assessment",
        "Historical preservation techniques",
        "Color matching for flawless repairs",
        "Upholstery services available"
      ]
    },
    {
      id: 4,
      title: "Kitchen & Wardrobe Design",
      description: "Custom modular kitchen and wardrobe solutions that maximize space and functionality while maintaining aesthetic appeal.",
      icon: <FaKitchenSet className="text-4xl text-amber-600" />,
      category: "residential",
      priceRange: {
        basic: "$4,000 - $8,000",
        standard: "$8,000 - $15,000",
        premium: "$15,000+"
      },
      features: [
        "Custom storage solutions",
        "Soft-close hardware standard",
        "Multiple finish options",
        "Integrated lighting available"
      ]
    },
    {
      id: 5,
      title: "Doors & Windows Work",
      description: "Custom wooden doors, frames, and window fittings crafted with precision for perfect fit and smooth operation.",
      icon: <FaDoorOpen className="text-4xl text-amber-600" />,
      category: "both",
      priceRange: {
        basic: "$300 - $600 (standard doors)",
        standard: "$600 - $1,200 (custom designs)",
        premium: "$1,200+ (specialty/antique)"
      },
      features: [
        "Precision measurements",
        "Weatherproofing included",
        "Custom hardware options",
        "Soundproofing available"
      ]
    },
    {
      id: 6,
      title: "Office & Commercial Carpentry",
      description: "Professional office desks, counters, and shelving solutions designed for productivity and durability in commercial spaces.",
      icon: <FaBuilding className="text-4xl text-amber-600" />,
      category: "commercial",
      priceRange: {
        basic: "$1,500 - $3,000",
        standard: "$3,000 - $7,000",
        premium: "$7,000+"
      },
      features: [
        "Commercial-grade materials",
        "Space optimization designs",
        "Quick turnaround available",
        "Bulk discounts for multiple units"
      ]
    },
    {
      id: 7,
      title: "Outdoor Woodwork",
      description: "Beautiful decks, pergolas, and garden furniture built to withstand the elements while enhancing your outdoor living space.",
      icon: <FaTree className="text-4xl text-amber-600" />,
      category: "both",
      priceRange: {
        basic: "$1,500 - $3,500",
        standard: "$3,500 - $8,000",
        premium: "$8,000+"
      },
      features: [
        "Weather-resistant woods",
        "Custom staining options",
        "Structural engineering included",
        "5-year outdoor warranty"
      ]
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab || service.category === "both");

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <div 
        className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598300053659-fb0f77d5f5c1?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
              Our Carpentry Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Master craftsmanship meets modern design. Quality woodwork solutions for homes and businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Estimate
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-amber-400 text-amber-100 hover:bg-amber-900/30 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === "all" ? 'bg-amber-600 text-white' : 'bg-white text-gray-800 hover:bg-amber-100'}`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === "residential" ? 'bg-amber-600 text-white' : 'bg-white text-gray-800 hover:bg-amber-100'}`}
          >
            Residential
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === "commercial" ? 'bg-amber-600 text-white' : 'bg-white text-gray-800 hover:bg-amber-100'}`}
          >
            Commercial
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Pricing Section */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Price Range:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Basic:</span>
                      <span className="font-medium">{service.priceRange.basic}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Standard:</span>
                      <span className="font-medium">{service.priceRange.standard}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Premium:</span>
                      <span className="font-medium">{service.priceRange.premium}</span>
                    </div>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.category === 'residential' ? 'bg-blue-100 text-blue-800' :
                    service.category === 'commercial' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {service.category === 'residential' ? 'Home' : 
                     service.category === 'commercial' ? 'Business' : 'Both'}
                  </span>
                  <Button text='Get Exact Quote'/>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Showcase */}
        <ServicesShowcase/>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#4a0404] to-[#6a0c0c] rounded-xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and exact pricing for your specific needs.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200">
            Contact Us Now
          </button>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default ServicesPage;