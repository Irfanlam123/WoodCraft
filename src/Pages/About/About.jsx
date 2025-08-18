import { FaAward, FaUsers, FaCheckCircle, FaClipboardCheck, FaHandshake } from 'react-icons/fa';
import { GiWoodCabin, GiWoodenDoor, GiFloorPolisher } from 'react-icons/gi';
import andriImg from "../../assets/andri.avif"; // Adjust based on your folder depth
import Footer from '../../Components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-[#4a0404] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center opacity-70"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Crafting Excellence in Wood</h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            Where traditional craftsmanship meets modern design
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-amber-600 mr-4"></div>
              <h2 className="text-xl font-semibold text-gray-700">OUR STORY</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-6">
              10+ Years of Transforming Spaces
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2013, we've grown from a small workshop to a trusted name in premium carpentry services. 
              What began as a passion for woodworking has evolved into a commitment to excellence that's recognized 
              by homeowners and businesses alike.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800">500+</h4>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800">100%</h4>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img 
              src=".\src\assets\Atwork.jpg" 
              alt="Carpenter at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/70 via-transparent to-transparent flex items-end p-6">
              <p className="text-white font-medium">Master craftsman working on custom furniture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-[#4a0404]/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <GiWoodCabin className="mx-auto text-5xl text-amber-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To deliver exceptional woodwork that combines <span className="text-amber-600 font-medium">timeless craftsmanship</span> with <span className="text-amber-600 font-medium">modern functionality</span>, 
            ensuring every piece we create enhances your space and stands the test of time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg">
              <FaAward className="text-3xl text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">Only the finest materials and techniques</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <FaClipboardCheck className="text-3xl text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">We respect your time and deadlines</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <FaHandshake className="text-3xl text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Your vision realized beyond expectations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-4">Meet Our Craftsmen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The skilled hands and creative minds behind your projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* <div className="h-64 bg-[url('.\src\assets\andri.avif')] bg-cover bg-center"></div> */}
             <div
      className="h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${andriImg})` }}
    ></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Nancy Salem</h3>
              <p className="text-amber-600 font-medium mb-4">Master Carpenter & Founder</p>
              <p className="text-gray-600">
                15 years experience specializing in custom furniture and antique restoration. 
                Trained in traditional Japanese joinery techniques.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Amit Sharma</h3>
              <p className="text-amber-600 font-medium mb-4">Flooring Specialist</p>
              <p className="text-gray-600">
                8 years perfecting flooring installations. Expert in hardwood, laminate, 
                and exotic wood species with flawless pattern matching.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Vikram Patel</h3>
              <p className="text-amber-600 font-medium mb-4">Cabinet & Joinery Expert</p>
              <p className="text-gray-600">
                Precision craftsman with 10+ years in kitchen and wardrobe design. 
                Combines functionality with aesthetic perfection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-[#4a0404] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Carpentry Services</h2>
            <p className="text-xl max-w-3xl mx-auto">
              What sets us apart in delivering exceptional woodwork
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-amber-600 p-3 rounded-full mr-6">
                <FaUsers className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Skilled & Certified Craftsmen</h3>
                <p className="text-amber-100">
                  Our team undergoes continuous training in both traditional techniques and modern 
                  woodworking technologies. Each member brings specialized skills to your project.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-600 p-3 rounded-full mr-6">
                <GiWoodenDoor className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Quality Materials</h3>
                <p className="text-amber-100">
                  We source only the finest hardwoods and materials, with sustainable options available. 
                  Our network of suppliers ensures the best quality at competitive prices.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-600 p-3 rounded-full mr-6">
                <FaCheckCircle className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-amber-100">
                  Transparent pricing with no hidden costs. We offer various budget options without 
                  compromising on quality, making fine craftsmanship accessible.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-600 p-3 rounded-full mr-6">
                <GiFloorPolisher className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-amber-100">
                  Get expert advice at no cost. We'll assess your space, discuss options, and provide 
                  recommendations before you commit to anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from homeowners and businesses who've experienced our craftsmanship
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[url('https://randomuser.me/api/portraits/women/43.jpg')] bg-cover bg-center mr-4"></div>
              <div>
                <h4 className="font-bold">Priya Malhotra</h4>
                <p className="text-amber-600 text-sm">Mumbai Residence</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The custom dining table they created is the centerpiece of our home. The attention to detail 
              and quality of craftsmanship exceeded all expectations. Worth every rupee!"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[url('https://randomuser.me/api/portraits/men/32.jpg')] bg-cover bg-center mr-4"></div>
              <div>
                <h4 className="font-bold">Rahul Desai</h4>
                <p className="text-amber-600 text-sm">Bangalore Office Project</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "We've used their services for three office fit-outs now. Consistent quality, on-time delivery, 
              and professional team. Our go-to carpentry solution."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[url('https://randomuser.me/api/portraits/women/65.jpg')] bg-cover bg-center mr-4"></div>
              <div>
                <h4 className="font-bold">Neha Gupta</h4>
                <p className="text-amber-600 text-sm">Delhi Kitchen Renovation</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Transformed our kitchen with beautiful custom cabinets. The team was clean, respectful of our home, 
              and delivered exactly what we envisioned."
            </p>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we bring your woodwork visions to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600">
                We listen to your needs and assess your space to provide expert recommendations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600">
                Create detailed plans and 3D renderings to visualize your project
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Build</h3>
              <p className="text-gray-600">
                Precision craftsmanship using quality materials in our workshop
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">4</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Deliver</h3>
              <p className="text-gray-600">
                Careful installation and final touches for perfect results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-[#4a0404] to-[#6a0c0c] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with exceptional woodwork
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200">
            Schedule Free Consultation
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;