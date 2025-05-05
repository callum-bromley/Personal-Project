import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <p className="text-blue-400">(022) 123 456</p>
          <p className="text-black">/</p>

          <h3 className="font-bold text-lg mb-2 mt-4">Email</h3>
          <p>
            <a href="mailto:maera@gmail.com" className="text-blue-400 hover:underline">
              maera@gmail.com
            </a>
          </p>
          <p className="text-black">/</p>

          <h3 className="font-bold text-lg mb-2">Social</h3>
          <div className="flex space-x-4">
            <a href="/" aria-label="Facebook" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="/" aria-label="Google" className="hover:text-blue-400"><FaGoogle /></a>
          </div>
        </div>

        {/* Column 2: Browse Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Browse</h3>
          <div className="space-y-2 text-sm">
            <a href="/" className="block hover:text-blue-400">Residential Roofing</a>
            <a href="/" className="block hover:text-blue-400">Maintenance</a>
            <a href="/" className="block hover:text-blue-400">Commercial Roofing</a>
            <a href="/" className="block hover:text-blue-400">Other Services</a>
            <a href="/" className="block hover:text-blue-400">Our Story</a>
            <a href="/" className="block hover:text-blue-400">Work Gallery</a>
            <a href="/" className="block hover:text-blue-400">Contact</a>
          </div>
        </div>

       

      </div>
    </footer>
  );
};

export default Footer;
