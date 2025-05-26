export const FooterLogo = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center bg-gray-700 p-6 gap-8">
      {/* Main logo */}
      <div className="flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100118/geroslogo5_nd0es2.png"
          alt="Geros Roofing"
          className="h-20 rounded-lg"
        />
      </div>

      {/* Other logos */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100452/sitesafe_jzkyyp.png"
          alt="SiteSafe"
          className="w-24 h-auto rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100444/kiwisteel_bxnwtz.png"
          alt="KiwiSteel"
          className="w-24 h-auto rounded-lg"
        />
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/lbp_okuauj.png"
          alt="Licensed Building Practitioner"
          className="w-24 h-auto rounded-lg"
        />
      </div>
    </footer>
  );
};
