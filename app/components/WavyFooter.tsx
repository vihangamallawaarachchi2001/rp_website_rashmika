import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Logo and Description */}
        <div className="text-center lg:text-left">
          <img src="/white-logo.svg" alt="Logo" className="h-20 md:h-24 lg:h-32 mx-auto lg:mx-0 mb-4" />
          <p className="max-w-xs mx-auto lg:mx-0 text-sm text-gray-300">
            Embark on a journey of revive with Coral Revive Research Group. Step in now let's restore the rainforests of the sea.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Download</h3>
          <a href="#" className="inline-block mb-4">
            <img src="/google-play.png" alt="Download on Google Play" className="h-10" />
          </a>
          <p className="text-gray-400 hover:text-white transition">
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-500 text-sm">Copyright © 2024 CoralRevive</p>
      </div>
    </footer>
  );
};

export default Footer;
