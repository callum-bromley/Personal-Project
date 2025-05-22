import Contact from "../components/contact/Contact";
import { OtherServices } from "../components/OtherServices";
import { About } from "../components/About";
import { HomeGallery } from "../components/HomeGallery";
import Footer from "../components/Footer";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FooterLogo } from "../components/FooterLogo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      {/* Top bar */}
      <nav className="bg-gray-700 text-white flex flex-col md:flex-row justify-end items-start md:items-center px-4 py-2 md:py-4">
        <div className="flex space-x-4 mb-2 md:mb-0 md:mr-4">
          <a href="/" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="/" aria-label="Google" className="hover:text-blue-400">
            <FaGoogle />
          </a>
        </div>
        <div className="md:flex md:items-center">
          <h1 className="text-sm font-semibold mr-2">Give us a call today!</h1>
          <h1 className="text-sm font-semibold">(022) 106 6710</h1>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white text-black px-4 py-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/geroslogo4_zb5lwt.png"
          alt="Geros Logo"
          className="h-16 md:h-20 w-auto rounded-md mx-auto md:ml-20 mb-4 md:mb-0"
        />
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-lg text-blue-600">
          <span>Home</span>
          <span>|</span>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-800">
              <a href="/services">Services</a>
              <span className="ml-1">▾</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <a href="/services/residential" className="block px-4 py-2 hover:bg-blue-400">Residential Roofing</a>
              <a href="/services/maintenance" className="block px-4 py-2 hover:bg-blue-400">Maintenance</a>
              <a href="/services/commercial" className="block px-4 py-2 hover:bg-blue-400">Commercial</a>
              <div className="relative group/additional">
                <div className="flex items-center px-4 py-2 hover:bg-blue-400 cursor-pointer">
                  <a href="/services/additionalservices">Additional Services</a>
                  <span className="ml-2">▸</span>
                </div>
                <div className="absolute left-full top-0 w-48 bg-white text-black shadow-lg opacity-0 group-hover/additional:opacity-100 invisible group-hover/additional:visible transition-all duration-300 z-50">
                  <a href="/services/leakrepairs" className="block px-4 py-2 hover:bg-blue-400">Leak Repairs</a>
                  <a href="/services/gutters" className="block px-4 py-2 hover:bg-blue-400">Gutters</a>
                  <a href="/services/wallcladding" className="block px-4 py-2 hover:bg-blue-400">Wall Cladding</a>
                  <a href="/services/flashings" className="block px-4 py-2 hover:bg-blue-400">Flashings</a>
                </div>
              </div>
            </div>
          </div>
          <span>|</span>
          <a href="/gallery" className="hover:text-blue-800">Work Gallery</a>
          <span>|</span>
          <a href="/about" className="hover:text-blue-800">About</a>
          <span>|</span>
          <a href="/contact" className="hover:text-blue-800">Contact Us</a>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="home-content">
        <Contact />
      </div>

      {/* Divider & Title */}
      <div className="py-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <div data-aos="fade-up" className="w-20 h-px bg-gray-500"></div>
          <span data-aos="fade-up" className="mx-3 text-2xl md:text-4xl font-bold text-black">
            OUR SERVICES
          </span>
          <div data-aos="fade-up" className="w-20 h-px bg-gray-500"></div>
        </div>
        <p
          data-aos="fade-up"
          className="text-gray-700 text-sm md:text-base mx-4 sm:mx-10 md:mx-20 lg:mx-52 max-w-4xl mx-auto"
        >
          We provide expert roofing solutions for both residential and commercial properties...
        </p>
      </div>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {[
          {
            title: "Residential Roofing",
            text: "Comprehensive roofing solutions designed to safeguard your home...",
            link: "/services/residential",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747199457/residential1_q3kkkz.jpg",
          },
          {
            title: "Maintenance",
            text: "Proactive roof maintenance services that extend the life of your roofing system...",
            link: "/services/maintenance",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100739/maintenence1_hacydu.jpg",
          },
          {
            title: "Commercial Roofing",
            text: "High-performance roofing systems tailored to meet commercial demands...",
            link: "/services/commercial",
            img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100459/commercial1_jsdlbr.jpg",
          },
        ].map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="w-full max-w-sm text-center border rounded-lg shadow-lg p-4"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-blue-400"
            />
            <h2 className="text-lg font-semibold mt-3">{service.title}</h2>
            <p className="text-gray-700 text-sm mt-2">{service.text}</p>
            <a href={service.link} className="text-blue-600 underline hover:underline text-sm mt-2 inline-block">
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Other Sections */}
      <div data-aos="fade-up">
        <OtherServices />
        <About />
        <HomeGallery />
        <FooterLogo />
        <Footer />
      </div>

      {/* Footer Note */}
      <div className="w-full bg-black p-4 text-center text-white text-sm">
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

      {/* SEO */}
      <Helmet>
        <title>Home | Geros Roofing</title>
      </Helmet>
    </div>
  );
}
