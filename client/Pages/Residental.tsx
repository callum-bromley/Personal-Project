import Contact from "../components/contact/Contact";

import "../components/contact/Contact.css";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Top bar */}
      <nav className="bg-gray-700 text-white flex justify-end items-center p-4">
        <div className="flex space-x-4 mr-3">
          <a href="/" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="/" aria-label="Google" className="hover:text-blue-400">
            <FaGoogle />
          </a>
        </div>
        <h1 className="text-md font-semibold m-0 text-right ml-4">
          Give us a call today!
        </h1>
        <h1 className="text-md font-semibold m-0 text-right ml-2 mr-4">
          (022) 123 456
        </h1>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white-600 text-black p-8 flex justify-between items-center h-20">
        <h1 className="text-4xl font-bold flex-grow ml-40">Geros</h1>

        <div className="space-x-6 flex-shrink-0 flex items-center">
          <a href="/" className="text-md hover:text-blue-600 px-3">Home</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          {/* Dropdown for Services */}
          <div className="relative group">
  <button className="flex items-center text-md hover:text-blue-600 px-3 focus:outline-none">
    <span>Services</span>
    <span className="ml-2">▾</span>
  </button>

  

  <div className="absolute left-0 mt-6 w-48 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
    <a href="/services/residential" className="block px-3 py-2 text-sm hover:bg-blue-400 pl-8">
      Residential Roofing
    </a>
    <a href="/services/maintenance" className="block px-3 py-2 text-sm hover:bg-blue-400 pl-8">
      Maintenance
    </a>
    <a href="/services/commercial" className="block px-3 py-2 text-sm hover:bg-blue-400 pl-8">
      Commercial
    </a>

    {/* Additional Services */}
    <div className="relative group/additional">
  <div className="flex items-center px-3 py-2 text-sm pl-8 hover:bg-blue-400 group-hover/additional:bg-blue-400 cursor-pointer">
  <a href="/services/additionalservices"> Additional Services</a>
    <span className="ml-2">▸</span>
  </div>

  <div className="absolute left-full top-0 w-48 bg-white text-black shadow-lg opacity-0 group-hover/additional:opacity-100 invisible group-hover/additional:visible transition-all duration-300 ease-in-out z-50">
    <a href="/services/leakrepairs" className="block px-4 py-2 text-sm hover:bg-blue-400">Leak Repairs</a>
    <a href="/services/gutters" className="block px-4 py-2 text-sm hover:bg-blue-400">Gutters</a>
    <a href="/services/wallcladding" className="block px-4 py-2 text-sm hover:bg-blue-400">Wall Cladding</a>
    <a href="/services/flashings" className="block px-4 py-2 text-sm hover:bg-blue-400">Flashings</a>
  </div>
 
</div>
  </div>


          </div>

          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/gallery" className="text-md hover:text-blue-600 px-3">Work Gallery</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/gallery" className="text-md hover:text-blue-600 px-3">About</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/contact" className="text-md hover:text-blue-600 px-3">Contact Us</a>
          <span className="mx-2 text-white flex items-center">|</span>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="home-content">
        <Contact />
      </div>

      </div>

  )}