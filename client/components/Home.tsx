import Contact from "../components/contact/Contact";
import { OtherServices } from "../components/OtherServices";
import { About } from "../components/About";
import "./contact/Contact.css";
import { HomeGallery } from "../components/HomeGallery";
import Footer from "../components/Footer";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FooterLogo } from "../components/FooterLogo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import MobileNavbar from "../components/MobileNavbar";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          (022) 106 6710
        </h1>
      </nav>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <nav
          className="bg-white-600 text-black p-8 flex justify-between items-center h-24"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/geroslogo4_zb5lwt.png"
            alt="Photo1"
            className="h-20 w-auto rounded-md ml-20"
          />
          <div className="space-x-6 flex-shrink-0 flex items-center">
            <span className="text-lg px-3 text-blue-600">Home</span>
            <span className="mx-2 text-blue-600 flex items-center">|</span>

            {/* Dropdown for Services */}
            <div className="relative group">
              <button className="flex items-center text-lg hover:text-blue-600 px-3 focus:outline-none">
                <a href="/services">Services</a>
                <span className="ml-2">▾</span>
              </button>
              <div className="absolute left-0 mt-6 w-48 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
                <a
                  href="/services/residential"
                  className="block px-3 py-2 text-md hover:bg-blue-400 pl-8"
                >
                  Residential Roofing
                </a>
                <a
                  href="/services/maintenance"
                  className="block px-3 py-2 text-md hover:bg-blue-400 pl-8"
                >
                  Maintenance
                </a>
                <a
                  href="/services/commercial"
                  className="block px-3 py-2 text-md hover:bg-blue-400 pl-8"
                >
                  Commercial
                </a>

                {/* Additional Services */}
                <div className="relative group/additional">
                  <div className="flex items-center px-3 py-2 text-md pl-8 hover:bg-blue-400 group-hover/additional:bg-blue-400 cursor-pointer">
                    <a href="/services/additionalservices">Additional Services</a>
                    <span className="ml-2">▸</span>
                  </div>
                  <div className="absolute left-full top-0 w-48 bg-white text-black shadow-lg opacity-0 group-hover/additional:opacity-100 invisible group-hover/additional:visible transition-all duration-300 ease-in-out z-50">
                    <a
                      href="/services/leakrepairs"
                      className="block px-4 py-2 text-md hover:bg-blue-400"
                    >
                      Leak Repairs
                    </a>
                    <a
                      href="/services/gutters"
                      className="block px-4 py-2 text-md hover:bg-blue-400"
                    >
                      Gutters
                    </a>
                    <a
                      href="/services/wallcladding"
                      className="block px-4 py-2 text-md hover:bg-blue-400"
                    >
                      Wall Cladding
                    </a>
                    <a
                      href="/services/flashings"
                      className="block px-4 py-2 text-md hover:bg-blue-400"
                    >
                      Flashings
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <span className="mx-2 text-blue-600 flex items-center">|</span>
            <a href="/gallery" className="text-lg hover:text-blue-600 px-3">
              Work Gallery
            </a>
            <span className="mx-2 text-blue-600 flex items-center">|</span>
            <a href="/about" className="text-lg hover:text-blue-600 px-3">
              About
            </a>
            <span className="mx-2 text-blue-600 flex items-center">|</span>
            <a href="/contact" className="text-lg hover:text-blue-600 px-3">
              Contact Us
            </a>
            <span className="mx-2 text-white flex items-center">|</span>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      {/* Main content wrapper to control padding/margins */}
      <main className="container mx-auto px-4 md:px-12 lg:px-20">
        {/* Contact Section */}
        <section className="home-content my-8 md:my-12">
          <Contact />
        </section>

        <h1 className="text-white">/</h1>

        <section
          className="additional-info text-center max-w-5xl mx-auto px-4"
          style={{ padding: '20px' }}
        >
          <h1 className="text-white">/</h1>
          <div className="flex items-center justify-center space-x-3">
            <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
            <span
              data-aos="fade-up"
              className="text-4xl font-bold text-gray-700"
            >
              OUR SERVICES
            </span>
            <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
          </div>
          <h1 className="text-white">/</h1>
          <p
            data-aos="fade-up"
            className="mx-auto max-w-4xl mt-4 text-gray-700 text-base md:text-lg leading-relaxed"
          >
            We provide expert roofing solutions for both residential and commercial
            properties, including installations, maintenance, and repairs. Our team is
            committed to quality craftsmanship, lasting materials, and dependable
            service—helping you protect what matters most.
          </p>
        </section>

        {/* Cards */}
        <section className="flex justify-center flex-wrap gap-10 mt-6">
          {/* Residential */}
          <div
            data-aos="fade-up"
            className="w-full max-w-sm text-center border rounded-lg shadow-lg p-4"
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747199457/residential1_q3kkkz.jpg"
              alt="Roofing Project"
              className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400"
            />
            <h2 className="text-lg font-semibold mt-3">Residential Roofing</h2>
            <p className="text-gray-700 text-sm mt-2">
              Comprehensive roofing solutions designed to safeguard your home, enhance
              curb appeal, and provide long-term protection against the elements.
            </p>
            <a
              href="/services/residential"
              className="text-blue-600 underline hover:underline text-sm mt-2 inline-block"
            >
              Learn More
            </a>
          </div>

          {/* Maintenance */}
          <div
            data-aos="fade-up"
            className="w-full max-w-sm text-center border rounded-lg shadow-lg p-4"
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100739/maintenence1_hacydu.jpg"
              alt="Maintenance"
              className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400"
            />
            <h2 className="text-lg font-semibold mt-3">Maintenance</h2>
            <p className="text-gray-700 text-sm mt-2">
              Proactive roof maintenance services that extend the life of your roofing
              system, prevent costly damage, and ensure year-round performance and
              safety.
            </p>
            <a
              href="/services/maintenance"
              className="text-blue-600 underline hover:underline text-sm mt-2 inline-block"
            >
              Learn More
            </a>
          </div>

          {/* Commercial */}
          <div
            data-aos="fade-up"
            className="w-full max-w-sm text-center border rounded-lg shadow-lg p-4"
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100459/commercial1_jsdlbr.jpg"
              alt="Commercial Roofing"
              className="w-full h-[200px] object-cover rounded-lg shadow-md border-2 border-blue-400"
            />
            <h2 className="text-lg font-semibold mt-3">Commercial Roofing</h2>
            <p className="text-gray-700 text-sm mt-2">
              High-performance roofing systems tailored to meet the structural and
              operational demands of commercial buildings, ensuring durability and
              minimal disruption.
            </p>
            <a
              href="/services/commercial"
              className="text-blue-600 underline hover:underline text-sm mt-2 inline-block"
            >
              Learn More
            </a>
          </div>
        </section>

        <h1 className="text-white">/</h1>

        {/* Other Sections */}
        <section data-aos="fade-up" className="services-content my-12">
          <OtherServices />
        </section>
        <section data-aos="fade-up" className="about-section my-12">
          <About />
        </section>
        <section data-aos="fade-up" className="about-section my-12">
          <HomeGallery />
        </section>
        <section className="about-section my-12">
          <FooterLogo />
        </section>
        <section className="about-section my-12">
          <Footer />
        </section>
      </main>

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

      <Helmet>
        <title>Home | Geros Roofing</title>
      </Helmet>
    </div>
  );
}
