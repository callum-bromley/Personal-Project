import Contact from "../components/contact/Contact";
import { OtherServices } from "../components/OtherServices";
import { About } from "../components/About";
import "./contact/Contact.css";
import { HomeGallery } from "../components/HomeGallery";
import Footer from "../components/Footer";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FooterLogo } from "../components/FooterLogo";

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
  <a href="/services" >
       Services </a>    <span className="ml-2">▾</span>
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
          <a href="/about" className="text-md hover:text-blue-600 px-3">About</a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>
          <a href="/contact" className="text-md hover:text-blue-600 px-3">Contact Us</a>
          <span className="mx-2 text-white flex items-center">|</span>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="home-content">
        <Contact />
      </div>

      {/* Services Header */}
      <h1 className="text-white">/</h1>
      <div className="additional-info" style={{ padding: '20px', textAlign: 'center' }}>
        <h1 className="text-white">/</h1>
        <div className="flex items-center justify-center">
          <div className="w-[80px] h-[2px] bg-gray-500"></div>
          <span className="mx-3 text-4xl font-bold text-black-500">OUR SERVICES</span>
          <div className="w-[80px] h-[2px] bg-gray-500"></div>
        </div>
        <h1 className="text-white">/</h1>
        <p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
      </div>

      {/* Smaller Card Layout */}
      <div className="flex justify-center flex-wrap gap-10 mt-6">
        <div className="w-[300px] text-center border rounded-lg shadow-lg p-4">
          <img src="/images/maera4.jpeg" alt="Roofing Project" className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400" />
          <h2 className="text-lg font-semibold mt-3">Residential Roofing</h2>
          <p className="text-gray-700 text-sm mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          <a href="/services/residential" className="text-blue-700 hover:underline text-sm mt-2 inline-block underline font-bold">Learn More</a>
        </div>

        <div className="w-[300px] text-center border rounded-lg shadow-lg p-4">
          <img src="/images/maintenence1.jpeg" alt="Maintenance" className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400" />
          <h2 className="text-lg font-semibold mt-3">Maintenance</h2>
          <p className="text-gray-700 text-sm mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          <a href="/services/maintenance" className="text-blue-700 hover:underline text-sm mt-2 inline-block font-bold underline">Learn More</a>
        </div>

        <div className="w-[300px] text-center border rounded-lg shadow-lg p-4">
          <img src="/images/commercial1.jpeg" alt="Commercial Roofing" className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400" />
          <h2 className="text-lg font-semibold mt-3">Commercial Roofing</h2>
          <p className="text-gray-700 text-sm mt-2">
            No two aspects of your home work together quite like windows and doors. They are the openings to the outside, and the barriers between your home and extreme weather conditions.
          </p>
          <a href="/services/commercial" className="text-blue-700 hover:underline text-sm mt-2 inline-block underline font-bold">Learn More</a>
        </div>
      </div>

      <h1 className="text-white">/</h1>
      <p>/</p>
      <p>/</p>
      <h1 className="text-white">/</h1>

      {/* Other Sections */}
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
        <FooterLogo />
      </div>

      <div className="about-section">
        <Footer />
      </div>


      <div className="flex w-full bg-black p-4 justify-center text-white text-sm">
   <p>© 2025 Geros Roofing - Website by <a href="https://www.linkedin.com/in/callum-bromley-78bab3362/" className="underline" target="_blank" rel="noopener noreferrer" >Callum Bromley</a></p>
    </div>



    </div>
  );
}
