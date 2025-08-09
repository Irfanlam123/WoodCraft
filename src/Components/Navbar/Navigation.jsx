import { Link, Links, useLocation } from "react-router-dom";
import Button from "../Button";

const Navigation = () => {
  const navBar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/About" },
    { id: 3, name: "Services", link: "/Services" },
    { id: 4, name: "Book Now", link: "/BookNow" },
  ];

  const location = useLocation();

  return (
    <nav className="bg-[#4a0404] shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder - Replace with your actual logo */}
          <div className="flex-shrink-0">
            <a className="text-white text-2xl font-bold">WoodCraft</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1 list-none">
              {navBar.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`
                      relative no-underline px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      group
                      ${
                        location.pathname === item.link
                          ? "text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg"
                          : "text-gray-200 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className={`
                      absolute left-1/2 bottom-1 h-0.5 bg-amber-400 
                      transform -translate-x-1/2
                      transition-all duration-300
                      ${
                        location.pathname === item.link 
                          ? "w-4/5" 
                          : "w-0 group-hover:w-4/5"
                      }`
                    }></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Get A Quote Button */}
            <div className="ml-6">
              <Link to='/BookNow'>Get A Quote</Link>
            </div>
          </div>

          {/* Mobile menu button - would need additional state */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-200 hover:text-white focus:outline-none">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;