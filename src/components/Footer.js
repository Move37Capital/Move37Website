import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b4460] text-white py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Move37 Capital</h3>
          <div className="mt-4 flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/move37capital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> contact-us@move37capital.com</p>
          <p className="flex items-center mt-2"><FaPhone className="mr-2" /> +44 77410 19491</p>
          <p className="mt-2">
            Move37 Capital,<br />
            Spaces, The Charter Building,<br />
            Uxbridge&nbsp;UB8&nbsp;1JG
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-yellow-300 transition">Terms of Use</Link></li>
            <li><Link to="/cookies" className="hover:text-yellow-300 transition">Cookies Policy</Link></li>
            
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-300">
        © {new Date().getFullYear()} Move37 Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
