import Contact from "./contact/Contact";
import { OtherServices } from "./OtherServices";
import { About } from "./About";
import "./contact/Contact.css";
import { HomeGallery } from "./HomeGallery";
import Footer from "./Footer";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif' }}>
      <div style={{ fontFamily: 'Lato, sans-serif' }}>
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
      </div>

      <nav className="bg-white-600 text-black p-8 flex justify-between items-center h-20">
        <h1 className="text-4xl font-bold flex-grow ml-40">Geros</h1>
        <span className="mx-2 text-blue-600 flex items-center">|</span>

        <div className="space-x-6 flex-shrink-0 flex items-center">
          <a href="/" className="text-l hover:text-blue-600 px-3">HOME</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/services" className="text-l hover:text-blue-600 px-3">SERVICES</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/projects" className="text-l hover:text-blue-600 px-3">PROJECTS</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/gallery" className="text-l hover:text-blue-600 px-3">WORK GALLERY</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/contact" className="text-l hover:text-blue-600 px-3">CONTACT US</a>
        </div>
      </nav>

      <div className="home-content">
        <Contact />
      </div>

      <h1 className="text-white">/</h1>

      <div className="additional-info" style={{ padding: '20px', textAlign: 'center' }}>
        <h1 className="text-white">/</h1>

        <div className="flex items-center justify-center">
          <div className="w-[80px] h-[2px] bg-gray-500 "></div>
          <span className="mx-3 text-4xl font-bold text-black-500 ">OUR SERVICES</span>
          <div className="w-[80px] h-[2px] bg-gray-500"></div>
        </div>

        <h1 className="text-white">/</h1>

        <p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
      </div>

      <div className="photo-gallery flex justify-center gap-12 mt-4"></div>

      <div className="flex justify-center gap-28">
        <div className="max-w-sm text-center border rounded-lg shadow-lg p-2">
          <img src="/images/maera4.jpeg" alt="Roofing Project 3" className="w-[400px] h-[297px] object-cover rounded-lg shadow-lg border-4 border-blue-500"/>
          <h2 className="text-xl font-semibold mt-4">Residential Roofing</h2>
          <p className="text-gray-700 mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          
          <a href="your-link-here" className="blue-link">Learn More</a>
        </div>

        <div className="max-w-sm text-center border rounded-lg shadow-lg p-2">
          <img src="/images/maintenence1.jpeg" alt="Roofing Project 3" className="w-[400px] h-[297px] object-cover rounded-lg shadow-lg border-4 border-blue-500"/>
          <h2 className="text-xl font-semibold mt-4">Maintenance</h2>
          <p className="text-gray-700 mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          <a href="your-link-here" className="blue-link">Learn More</a>
        </div>

        <div className="max-w-sm text-center border rounded-lg shadow-lg p-2">
          <img src="/images/commercial1.jpeg" alt="Roofing Project 3" className="w-[400px] h-[297px] object-cover rounded-lg shadow-lg border-4 border-blue-500"/>
          <h2 className="text-xl font-semibold mt-4">Commercial Roofing</h2>
          <p className="text-gray-700 mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          <a href="your-link-here" className="blue-link">Learn More</a>
        </div>
      </div>

      <h1 className="text-white">/</h1>

      <p>/</p>
      <p>/</p>
      <h1 className="text-white">/</h1>

      <div className="services-content">
        <OtherServices />
      </div>

      <div className="about-section">
        <About />
      </div>

      <div className="about-section">
        <HomeGallery />
      </div>

      <div className="about-section">
        <Footer />
      </div>
    </div>
  );
}
