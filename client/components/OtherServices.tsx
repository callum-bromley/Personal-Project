import "./contact/Contact.css"

export const OtherServices = () => {
  return (
    <div>
      <p>/</p>
      <p>/</p><p>/</p>
      <div className="flex items-center justify-center">
        <div className="w-[80px] h-[2px] bg-gray-500"></div>
        <span className="mx-3 text-4xl font-bold text-black-500">ADDITIONAL SERVICES</span>
        <div className="w-[80px] h-[2px] bg-gray-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
  <h1 className="text-white">/</h1>
  <p className="mx-52">Explore Our Wide Range of Specialized Roofing Solutions, From Leak Repairs and Gutters to Wall Cladding and Flashings. We Offer Custom Services Tailored to Meet Your Unique Property Needs, Ensuring Comprehensive Protection and Enhanced Comfort.</p>
</div>

      <div className="photo-gallery flex justify-center gap-40 mt-8">
      </div>

      <div className="photo-gallery flex justify-center gap-14 mb-8">
      <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
      <img
            src="/images/maera4.jpeg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="your-link-here" className="link">Leak Repairs</a>
          
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="/images/maera4.jpeg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="your-link-here" className="link">Gutters</a>
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="/images/maera4.jpeg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="google" className="link">Wall Cladding</a>
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="/images/maera4.jpeg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="your-link-here" className="link">Flashings</a>
          </div>
         
        
        </div>
      </div>
    </div>
  )
} 