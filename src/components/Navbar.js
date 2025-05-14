import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

      <nav className="fixed top-0 w-full z-50 bg-[#1b4460] py-4 shadow-md font-sans">
        <div className="container mx-auto flex items-center justify-between px-6 sm:px-0">

          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="./images/logo_white_png.png"
              alt="logo"
              className="h-8 md:h-10 object-contain lg:pl-6"
            />
          </Link>

          {/* Navigation Links */}
          <div className="pr-8 flex space-x-6 sm:space-x-10 md:space-x-16 ml-4 sm:ml-8 md:ml-20">
            <Link
              to="/"
              className="text-white text-sm sm:text-base md:text-lg hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>
          

            <Link
              to="/contact"
              className="text-white text-sm sm:text-base md:text-lg hover:text-blue-400 transition font-medium"
            >
              Contact
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
