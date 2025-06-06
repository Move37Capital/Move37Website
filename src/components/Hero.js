import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/London-Slide.webp"
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-blue-900 px-4 sm:px-6 md:px-8 lg:px-12 transform-none lg:transform lg:translate-x-[-62px] lg:translate-y-[-60px] landscapes:transform landscapes:translate-x-[-28px] landsacpes:translate-y-[-12px] ">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[28px] font-semibold mb-3 leading-tight max-w-4xl landscapes:text-[12px] landscapes:mb-1 landscapes:leading-snug">
        A Fast Growing Asset Management Firm
          <sup className="relative -top-2 text-xs sm:text-sm ml-1 landscapes:ml-[2px]">*</sup>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 max-w-xl whitespace-nowrap landscapes:text-[10px] landscapes:mb-1 landscapes:leading-snug">
          Trusted by top institutional investors
        </p>

        <Link
          to="/contact"
          className="bg-[#1b4460] text-white px-6 py-3 rounded-full font-medium hover:bg-[#122F43] transition text-sm sm:text-base landscapes:text-[8px] landscapes:px-3 landscapes:py-[2px]"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;