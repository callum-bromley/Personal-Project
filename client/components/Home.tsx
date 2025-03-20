import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import ContactForm from "./Contact.jsx";

export default function Home() {
  return (
    <div>
      <nav className="bg-red-600 text-black p-5 flex justify-between"></nav>
      <nav className="bg-blue-600 text-black p-8 flex justify-between items-center h-20">
        <h1 className="text-4xl font-bold flex-grow ml-40">Geros</h1>
        <div className="space-x-6 flex-shrink-0 flex items-center">
          <a href="/" className="text-l hover:text-blue-600 px-3">
            HOME
          </a>
          <span className="mx-2 text-white flex items-center">|</span>

          <a href="/services" className="text-l hover:text-blue-600 px-3">
            SERVICES
          </a>
          <span className="mx-2 text-white flex items-center">|</span>

          <a href="/projects" className="text-l hover:text-blue-600 px-3">
            PROJECTS
          </a>
          <span className="mx-2 text-white flex items-center">|</span>

          <a href="/gallery" className="text-l hover:text-blue-600 px-3">
            WORK GALLERY
          </a>
          <span className="mx-2 text-white flex items-center">|</span>

          <a href="/about" className="text-l hover:text-blue-600 px-3">
            ABOUT
          </a>
          <span className="mx-2 text-white flex items-center">|</span>

          <a href="/contact" className="text-l hover:text-blue-600 px-3">
            contact us
          </a>
        </div>
        
      </nav>
      <div className="home-content">
        <ContactForm /> 
      </div>
     
      </div>
    
  )}