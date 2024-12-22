import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-amber-500">cgdev.</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="home"  
              smooth={true}
              duration={500}
              className="text-stone-400 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="about"  
              smooth={true}
              duration={500}
              className="text-stone-400 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="services"  
              smooth={true}
              duration={500}
              className="text-stone-400 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="contact"  
              smooth={true}
              duration={500}
              className="text-stone-400 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} type="button" className="text-slate-300 hover:text-slate-400 focus:outline-none" aria-label="Toggle menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Fade Effect */}
        <div className={`transition-opacity duration-300 ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"} overflow-hidden md:hidden`}>
          <div className="space-y-1 px-0 pt-2 pb-3">
            <Link
              to="home"  
              smooth={true}
              duration={500}
              className="block text-slate-50 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="about" 
              smooth={true}
              duration={500}
              className="block text-slate-50 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="services"  
              smooth={true}
              duration={500}
              className="block text-slate-50 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="contact"  
              smooth={true}
              duration={500}
              className="block text-slate-50 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
