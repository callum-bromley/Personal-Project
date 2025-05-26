import "./contact/Contact.css";

export const OtherServices = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-7xl mx-auto">
      {/* Top slashes */}
      <div className="text-white text-center space-x-2 mb-6">
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </div>

      {/* Title with lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="w-20 h-0.5 bg-gray-500"></div>
        <span className="mx-4 text-2xl sm:text-3xl font-bold text-gray-700 uppercase">
          ADDITIONAL SERVICES
        </span>
        <div className="w-20 h-0.5 bg-gray-500"></div>
      </div>

      {/* Description text */}
      <div className="flex flex-col items-center justify-center text-center mb-10 px-4 sm:px-12 max-w-3xl mx-auto">
        <h1 className="text-white text-xl mb-2">/</h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Explore our wide range of specialized roofing solutions, from leak repairs and gutters to wall cladding and flashings. We offer custom services tailored to meet your unique property needs, ensuring comprehensive protection and enhanced comfort.
        </p>
      </div>

      {/* Photo gallery */}
      <div className="photo-gallery flex flex-wrap justify-center gap-8">
        {[
          { title: "Leak Repairs", img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg", link: "your-link-here" },
          { title: "Gutters", img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg", link: "your-link-here" },
          { title: "Wall Cladding", img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747197163/wallcladding3_rkkn2f.jpg", link: "google" },
          { title: "Flashings", img: "https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg", link: "your-link-here" },
        ].map(({ title, img, link }) => (
          <div
            key={title}
            className="w-full sm:w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden flex flex-col"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-[230px] object-cover border-b-4 border-blue-500"
            />
            <div className="p-4 text-center font-semibold flex-grow flex items-center justify-center">
              <a href={link} className="link text-blue-600 hover:underline">
                {title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
