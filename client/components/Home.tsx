import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

import Contact from "../components/contact/Contact";
import { OtherServices } from "../components/OtherServices";
import { About } from "../components/About";
import { HomeGallery } from "../components/HomeGallery";
import Footer from "../components/Footer";
import { FooterLogo } from "../components/FooterLogo";
import "./contact/Contact.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      {/* Top Bar */}
      <nav className="bg-gray-700 text-white flex justify-end items-center p-4">
        <div className="flex space-x-4 mr-3">
          <a href="/" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="/" aria-label="Google" className="hover:text-blue-400">
            <FaGoogle />
          </a>
        </div>
        <h1 className="text-md font-semibold ml-4">(022) 106 6710</h1>
      </nav>

      {/* Main Navbar */}
      <nav
        className="bg-white-600 text-black p-8 flex justify-between items-center h-24"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/geroslogo4_zb5lwt.png"
          alt="Geros Logo"
          className="h-20 w-auto rounded-md ml-20"
        />

        <div className="space-x-6 flex-shrink-0 flex items-center">
          <span className="text-lg px-3 text-blue-600">Home</span>
          <span className="mx-2 text-blue-600">|</span>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-lg hover:text-blue-600 px-3 focus:outline-none">
              <a href="/services">Services</a>
              <span className="ml-2">▾</span>
            </button>
            <div className="absolute left-0 mt-6 w-48 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
              <a href="/services/residential" className="block px-3 py-2 hover:bg-blue-400 pl-8">Residential Roofing</a>
              <a href="/services/maintenance" className="block px-3 py-2 hover:bg-blue-400 pl-8">Maintenance</a>
              <a href="/services/commercial" className="block px-3 py-2 hover:bg-blue-400 pl-8">Commercial</a>

              {/* Additional Services Nested Dropdown */}
              <div className="relative group/additional">
                <div className="flex items-center px-3 py-2 hover:bg-blue-400 pl-8 cursor-pointer">
                  <a href="/services/additionalservices">Additional Services</a>
                  <span className="ml-2">▸</span>
                </div>
                <div className="absolute left-full top-0 w-48 bg-white shadow-lg opacity-0 group-hover/additional:opacity-100 invisible group-hover/additional:visible transition-all duration-300 ease-in-out z-50">
                  <a href="/services/leakrepairs" className="block px-4 py-2 hover:bg-blue-400">Leak Repairs</a>
                  <a href="/services/gutters" className="block px-4 py-2 hover:bg-blue-400">Gutters</a>
                  <a href="/services/wallcladding" className="block px-4 py-2 hover:bg-blue-400">Wall Cladding</a>
                  <a href="/services/flashings" className="block px-4 py-2 hover:bg-blue-400">Flashings</a>
                </div>
              </div>
            </div>
          </div>

          <span className="mx-2 text-blue-600">|</span>
          <a href="/gallery" className="text-lg hover:text-blue-600 px-3">Work Gallery</a>
          <span className="mx-2 text-blue-600">|</span>
          <a href="/about" className="text-lg hover:text-blue-600 px-3">About</a>
          <span className="mx-2 text-blue-600">|</span>
          <a href="/contact" className="text-lg hover:text-blue-600 px-3">Contact Us</a>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="home-content">
        <Contact />
      </div>

      {/* Services Info */}
      <div className="additional-info text-center p-6">
        <div className="flex items-center justify-center">
          <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
          <span data-aos="fade-up" className="mx-3 text-4xl font-bold">OUR SERVICES</span>
          <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
        </div>
        <p data-aos="fade-up" className="mx-10 md:mx-52 mt-4 text-gray-700">
          We provide expert roofing solutions for both residential and commercial properties, including installations, maintenance, and repairs. Our team is committed to quality craftsmanship, lasting materials, and dependable service—helping you protect what matters most.
        </p>
      </div>

      {/* Services Cards */}
      <div className="flex justify-center flex-wrap gap-10 mt-6">
        {[
          {
            title: "Residential Roofing",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747199457/residential1_q3kkkz.jpg",
            link: "/services/residential",
            desc: "Comprehensive roofing solutions designed to safeguard your home, enhance curb appeal, and provide long-term protection against the elements.",
          },
          {
            title: "Maintenance",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100739/maintenence1_hacydu.jpg",
            link: "/services/maintenance",
            desc: "Proactive roof maintenance services that extend the life of your roofing system, prevent costly damage, and ensure year-round performance and safety.",
          },
          {
            title: "Commercial Roofing",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100459/commercial1_jsdlbr.jpg",
            link: "/services/commercial",
            desc: "High-performance roofing systems tailored to meet the structural and operational demands of commercial buildings, ensuring durability and minimal disruption.",
          },
        ].map(({ title, img, link, desc }, i) => (
          <div key={i} data-aos="fade-up" className="w-[300px] text-center border rounded-lg shadow-lg p-4">
            <img src={img} alt={title} className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400" />
            <h2 className="text-lg font-semibold mt-3">{title}</h2>
            <p className="text-gray-700 text-sm mt-2">{desc}</p>
            <a href={link} className="text-blue-600 underline hover:underline text-sm mt-2 inline-block">Learn More</a>
          </div>
        ))}
      </div>

      {/* Other Sections */}
      <div data-aos="fade-up" className="services-content">
        <OtherServices />
      </div>

      <div data-aos="fade-up" className="about-section">
        <About />
      </div>

      <div data-aos="fade-up" className="about-section">
        <HomeGallery />
      </div>

      <div className="about-section">
        <FooterLogo />
        <Footer />
      </div>

      {/* Footer Credit */}
      <div className="flex w-full bg-black p-4 justify-center text-white text-sm">
        <p>
          © 2025 Geros Roofing - Website by{" "}
          <a
            href="https://www.linkedin.com/in/callum-bromley-78bab3362/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Callum Bromley
          </a>
        </p>
      </div>

      {/* Page Title */}
      <Helmet>
        <title>Home | Geros Roofing</title>
      </Helmet>
    </div>
  );
}
