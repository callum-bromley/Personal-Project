export const FooterLogo = () => {
  return (
    <div className="flex w-full bg-gray-700 p-4 justify-center">
      {/* Left section: Disney logo centered more to the middle */}
      <div className="flex justify-center w-auto pr-4 mr-24">
        <img src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100118/geroslogo5_nd0es2.png" alt="Geros Roofing" className="w-auto h-20 rounded-lg mt-4" />
      </div>

      {/* Right section: Other logos, centered with a gap between them */}
      <div className="flex justify-center gap-2 ml-12 translate-y-3">
        <img src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100452/sitesafe_jzkyyp.png" alt="SiteSafe" className="w-24 h-auto rounded-lg" />
        </div>

        <div className="flex justify-center gap- ml-10">
        <img src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100444/kiwisteel_bxnwtz.png" alt="KiwiSteel" className="w-24 h-auto rounded-lg" />
        </div>
        <div className="flex justify-center gap-2 ml-10">
        <img src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/lbp_okuauj.png" alt="Licensed Building Practioner" className="w-24 h-auto rounded-lg" />
      </div>
    </div>
  );
}
