export const FooterLogo = () => {
  return (
    <div className="flex w-full bg-gray-700 p-4 justify-center">
      {/* Left section: Disney logo centered more to the middle */}
      <div className="flex justify-center w-auto pr-4 mr-24">
        <img src="/images/disney.png" alt="Geros Roofing" className="w-24 h-auto rounded-lg" />
      </div>

      {/* Right section: Other logos, centered with a gap between them */}
      <div className="flex justify-center gap-2 ml-12 translate-y-3">
        <img src="/images/sitesafe.png" alt="SiteSafe" className="w-24 h-auto rounded-lg" />
        </div>

        <div className="flex justify-center gap- ml-10">
        <img src="/images/kiwisteel.png" alt="KiwiSteel" className="w-24 h-auto rounded-lg" />
        </div>
        <div className="flex justify-center gap-2 ml-10">
        <img src="/images/lbp.png" alt="Licensed Building Practioner" className="w-24 h-auto rounded-lg" />
      </div>
    </div>
  );
}
