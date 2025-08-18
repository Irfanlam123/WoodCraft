import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navBar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/About" },

        { id: 3, name: "Gallery", link: "/Gallery" },

    { id: 4, name: "Services", link: "/Services" },
    { id: 5, name: "Book Now", link: "/BookNow" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`bg-[#4a0404] shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - Larger tap target on mobile */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-white text-xl sm:text-2xl font-bold hover:text-amber-300 transition-colors px-2 py-1"
              aria-label="Home"
            >
              WoodCraft
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <ul className="flex space-x-1">
              {navBar.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`
                      relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200
                      group
                      ${
                        location.pathname === item.link
                          ? "text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-md"
                          : "text-gray-200 hover:text-white hover:bg-amber-800/30"
                      }`
                    }
                    aria-current={location.pathname === item.link ? "page" : undefined}
                  >
                    {item.name}
                    <span className={`
                      absolute left-1/2 bottom-1 h-0.5 bg-amber-400 
                      transform -translate-x-1/2
                      transition-all duration-200
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
            <Link 
              to='/BookNow' 
              className="ml-1 sm:ml-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-medium py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg shadow-sm sm:shadow-md transition-all hover:shadow-lg"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile menu button - Larger tap target */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#4a0404]/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
        style={{ top: scrolled ? "3.5rem" : "4rem" }}
      >
        <div className="container mx-auto px-4 pt-2 pb-6">
          <div className="flex flex-col space-y-2">
            {navBar.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`
                  block px-4 py-3 rounded-lg text-base font-medium
                  transition-colors duration-200
                  ${
                    location.pathname === item.link
                      ? "bg-amber-700 text-white"
                      : "text-gray-200 hover:bg-amber-800/30 hover:text-white"
                  }`
                }
                aria-current={location.pathname === item.link ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/BookNow"
              className="block mt-2 bg-amber-600 text-white text-center font-medium py-3 px-4 rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;