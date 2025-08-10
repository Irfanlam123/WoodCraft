import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ 
  text, 
  to = '/Services', 
  icon, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondary: 'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
    dark: 'bg-[#4a0404] hover:bg-amber-700 text-white',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600'
  };

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-full
        font-medium tracking-wide
        transition-all duration-300
        shadow-md hover:shadow-lg
        transform hover:-translate-y-1
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {text}
      {icon && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          {icon === 'arrow' ? <FaArrowRight className="w-4 h-4" /> : icon}
        </span>
      )}
    </Link>
  );
};

export default Button;