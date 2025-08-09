import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <Link to='/Services' className="bg-[#c69231] mr-20 text-zinc-100 font-sans px-5 py-1 rounded-full hover:bg-[#4a0404] hover:text-zinc-100 transition-all duration-300 shadow-md">
      {text}
    </Link>
  );
};

export default Button;
