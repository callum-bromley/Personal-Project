// components/MobileNavbar.tsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex items-center justify-between md:hidden shadow">
      <img
        src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/geroslogo4_zb5lwt.png"
        alt="Logo"
        className="h-12 w-auto"
      />

      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-md z-50 flex flex-col items-center">
          <a href="/" className="py-2 text-lg hover:text-blue-600">Home</a>
          <a href="/services" className="py-2 text-lg hover:text-blue-600">Services</a>
          <a href="/gallery" className="py-2 text-lg hover:text-blue-600">Work Gallery</a>
          <a href="/about" className="py-2 text-lg hover:text-blue-600">About</a>
          <a href="/contact" className="py-2 text-lg hover:text-blue-600">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
