import "./About.css";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8">
      
      {/* Text Section */}
      <div className="text-section flex-1 text-white space-y-4">
        <p className="text-white mt-2">/</p>

        <h2 className="text-3xl font-bold text-blue-700">Our Story</h2>

        <p className="text-white mt-2">/</p>

        <p className="text-gray-200 text-base leading-relaxed">
          At <span className="text-blue-700 font-semibold">Geros Roofing</span>, we are proud to be Auckland’s trusted roofing experts. With years of local experience, we offer reliable solutions for everything from repairs to full roof replacements. We understand the challenges of Auckland’s weather and use only quality materials designed to last.
        </p>

        <p className="text-white mt-2">/</p>

        <p className="text-gray-200 text-base leading-relaxed">
          Our commitment to clear communication and top-notch craftsmanship ensures that every job is completed to the highest standard. Whether you need urgent repairs or a new roof, we’re here to provide peace of mind and long-lasting results for your home or business.
        </p>

        <p className="text-white mt-2">/</p>
      </div>

      {/* Image Section */}
      <div className="image-section flex-1 max-w-md md:max-w-full">
        <div className="image-container rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera3_napiwd.jpg"
            alt="Modern house with roofing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
