import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4a0404] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-2">Woodcraft</h2>
            <p className="text-gray-300 leading-relaxed">
              Crafting exceptional woodwork with passion and precision. We transform wood into timeless pieces that elevate your spaces.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-amber-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Home</a></li>
              <li><a href="/About" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>About Us</a></li>
              <li><a href="/Services" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Services</a></li>
              <li><a href="/Gallery" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-amber-600 pb-2">Our Craftsmanship</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Custom Furniture</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Wood Flooring</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Cabinetry</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Wood Carving</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"><span className="w-2 h-2 bg-amber-600 rounded-full"></span>Restoration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-amber-600 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-600 mt-1 flex-shrink-0" />
                <span>123 Woodcraft Lane, Studio 100<br />Portland, OR 97201</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-600" />
                <a href="tel:+18005551234" className="hover:text-amber-400 transition-colors duration-200">(800) 555-5678</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-600" />
                <a href="mailto:craft@woodcraft.com" className="hover:text-amber-400 transition-colors duration-200">craft@woodcraft.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Woodcraft. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;