import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4a0404] text-gray-300 py-10 mt-32">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        
        {/* Left - Logo and Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white mb-4">YourBrand</h2>
          <p className="text-gray-400 max-w-sm">
            Providing the best solutions for your business. Connect with us for a brighter future.
          </p>
        </div>
        
        {/* Center - Navigation Links */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex justify-around">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Home</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Overview</li>
              <li className="mb-2 hover:text-white cursor-pointer">Features</li>
              <li className="mb-2 hover:text-white cursor-pointer">Pricing</li>
              <li className="mb-2 hover:text-white cursor-pointer">Testimonials</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Company</li>
              <li className="mb-2 hover:text-white cursor-pointer">Team</li>
              <li className="mb-2 hover:text-white cursor-pointer">Careers</li>
              <li className="mb-2 hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
              <li className="mb-2 hover:text-white cursor-pointer">Support</li>
              <li className="mb-2 hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="mb-2 hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Right - Social Media */}
        <div className="md:w-1/3 flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
