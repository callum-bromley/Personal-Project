import "./HomeGallery.css";

export const HomeGallery = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      
      {/* Decorative slashes */}
      <div className="flex flex-col items-center justify-center text-center space-y-2 mb-6">
        <h1 className="text-white">/</h1>
        <h1 className="text-white">/</h1>
        <h1 className="text-white">/</h1>
      </div>

      {/* Title with lines */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-0.5 bg-gray-500"></div>
        <span className="mx-4 text-3xl md:text-4xl font-bold text-gray-800">Work Gallery</span>
        <div className="w-20 h-0.5 bg-gray-500"></div>
      </div>

      {/* Subtitle */}
      <div className="flex flex-col items-center justify-center text-center mb-8 px-2 md:px-0">
        <h1 className="text-white">/</h1>
        <p className="max-w-xl text-gray-700">
          Take a Look at Some of Our Recent Roofing Projects and See the Quality Work We Do.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100456/maera2_bmhqjg.jpg"
            alt="Photo1"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747197468/commercial2_ansb8q.jpg"
            alt="Photo2"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747198586/gallery4_ftqhda.jpg"
            alt="Photo3"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
            alt="Photo4"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
            alt="Photo5"
            className="w-full h-auto rounded-md object-cover"
          />
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747197468/commercial1_gsckww.jpg"
            alt="Photo6"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Centered View More button */}
        <a
          href="/gallery"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition"
        >
          View More
        </a>
      </div>

      {/* More decorative slashes */}
      <div className="flex flex-col items-center justify-center text-center space-y-2 mt-10">
        <h1 className="text-white">/</h1>
        <h1 className="text-white">/</h1>
        <h1 className="text-white">/</h1>
      </div>
    </div>
  );
};
