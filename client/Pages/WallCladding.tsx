import React from "react";
import "../components/contact/Contact.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { FooterLogo } from "../components/FooterLogo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, [])
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.info("Sending... Your message is being processed.", {
      autoClose: 3000,
      closeButton: true,
    });

    setResult("");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "2620a2b0-0e42-4390-8eab-f780c681e724");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        (event.target as HTMLFormElement).reset();
        toast.success("Message sent successfully!", {
          autoClose: 3000,
          closeButton: true,
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(data.message || "Something went wrong.", {
          autoClose: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.log("Error:", error);
      setResult("");
      toast.error("Something went wrong. Please try again later.", {
        autoClose: 3000,
        closeButton: true,
      });
    }
  };

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
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
      <nav className="bg-white-600 text-black p-8 flex justify-between items-center h-20" style={{ fontFamily: "Playfair Display, serif" }}>
        <h1 className="text-4xl font-bold flex-grow ml-40">Geros</h1>
        <div className="space-x-6 flex-shrink-0 flex items-center">
          <a href="/" className="text-lg hover:text-blue-600 px-3">Home</a>
          <span className="mx-2 text-blue-600">|</span>
          <div className="relative group">
          <button className="flex items-center text-lg hover:text-blue-600 px-3 focus:outline-none text-blue-600">
  <a href="/services" >
       Services </a>    <span className="ml-2">▾</span>
  </button>
            <div className="absolute left-0 mt-6 w-48 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
              <a href="/services/residential" className="block px-3 py-2 text-md hover:bg-blue-400 pl-8">Residential Roofing</a>
              <a href="/services/maintenance" className="block px-3 py-2 text-md hover:bg-blue-400 pl-8">Maintenance</a>
              <a href="/services/commercial" className="block px-3 py-2 text-md hover:bg-blue-400 pl-8">Commercial</a>
              <div className="relative group/additional">
                <div className="flex items-center px-3 py-2 text-md pl-8 hover:bg-blue-400 group-hover/additional:bg-blue-400 cursor-pointer text-blue-600">
                  <a href="/services/additionalservices">Additional Services</a>
                  <span className="ml-2">▸</span>
                </div>
                <div className="absolute left-full top-0 w-48 bg-white text-black shadow-lg opacity-0 group-hover/additional:opacity-100 invisible group-hover/additional:visible transition-all duration-300 ease-in-out z-50">
                  <a href="/services/leakrepairs" className="block px-4 py-2 text-md hover:bg-blue-400">Leak Repairs</a>
                  <a href="/services/gutters" className="block px-4 py-2 text-md hover:bg-blue-400">Gutters</a>
                  <span className=" block text-md  px-4 py-2 text-blue-600">Wall Cladding</span>
                  <a href="/services/flashings" className="block px-4 py-2 text-md hover:bg-blue-400">Flashings</a>
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
          <span className="mx-2 text-white">|</span>

        </div>
      </nav>

      {/* Contact Form Section */}
      <section className="contact">
        <div data-aos="fade-up" className="contact-container">
          <div data-aos="fade-up" className="contact-text">
            <span data-aos="fade-up" className="text-5xl font-bold text-white mb-4 block" style={{ fontFamily: "Playfair Display, serif" }}>
            Wall Cladding</span>
            <p data-aos="fade-up" className="mr-52">Durable and Aesthetic Wall Cladding Options to Enhance Your Building’s Look and Protection.

</p>
          </div>

          <form onSubmit={onSubmit}>
            <div className="input-box">
              <input type="text" className="field" placeholder="Name" name="name" required />
            </div>
            <div className="input-box">
              <input type="email" className="field" placeholder="Email" name="email" required />
            </div>
            <div className="input-box">
              <input type="text" className="field" placeholder="Phone" name="phone" required />
            </div>
            <div className="input-box">
              <input type="text" className="field" placeholder="Address" name="address" required />
            </div>
            <div className="input-box">
              <textarea name="message" className="field mess" placeholder="Tell us a bit about the job..." required />
            </div>
            <button type="submit">Get a Free Quote!</button>
          </form>

          {result && <p>{result}</p>}
        </div>
        <ToastContainer />
      </section>
      <h1 className="text-white">/</h1>
      <div className="additional-info" style={{ padding: '20px', textAlign: 'center' }}>
        <h1 className="text-white">/</h1>
        <div className="flex items-center justify-center">
          <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
          <span data-aos="fade-up" className="mx-3 text-4xl font-bold text-black-500">WALL CLADDING</span>
          <div data-aos="fade-up" className="w-[80px] h-[2px] bg-gray-500"></div>
        </div>
        <h1 className="text-white">/</h1>
        
        <div data-aos="fade-up" className=" text-md">
        <div>
  At <span className="text-blue-600 font-semibold text-lg">Geros Roofing</span>, we specialize in high-quality wall cladding services designed to enhance the appearance and protection of your home or business.
</div>
<div data-aos="fade-up" className="mt-2 mx-16">
  Whether you&apos;re looking for modern aesthetics or durable protection, our team of experts provides top-notch wall cladding solutions that are both stylish and functional. We work with a range of materials to suit your needs and budget.
</div>
<div data-aos="fade-up" className="mt-6 mx-16">
  Our wall cladding services include installation, repairs, and maintenance, ensuring that your property remains protected from the elements while also improving its curb appeal. We use premium materials that are built to last, providing long-term benefits.
</div>
<div data-aos="fade-up" className="mt-6 mx-16">
  From residential to commercial projects, we are committed to delivering exceptional craftsmanship and customer satisfaction. Let us help you transform your property with reliable and beautiful wall cladding solutions.
</div>

</div>
<h1 className="text-white">/</h1>

<a href="/contact" data-aos="fade-up" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
  Contact us to learn more!
</a>

<h1 className="text-white">/</h1>
<h1 className="text-white">/</h1>

<div data-aos="fade-up" className="px-24 mt-4 relative">

  <div className="grid grid-cols-3 gap-12">

    <img src="/images/maera4.jpeg" alt="Photo1" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo2" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo3" className="w-full rounded-md" />

    </div>
    </div>
    <h1 className="text-white">/</h1>
    <h1 className="text-white">/</h1>

<h1 className="text-white">/</h1>


  
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