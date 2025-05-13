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
  <p className="mx-52">Explore our wide range of specialized roofing solutions, from leak repairs and gutters to wall cladding and flashings. We offer custom services tailored to meet your unique property needs, ensuring comprehensive protection and enhanced comfort.</p>
</div>

      <div className="photo-gallery flex justify-center gap-40 mt-8">
      </div>

      <div className="photo-gallery flex justify-center gap-14 mb-8">
      <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
      <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="your-link-here" className="link">Leak Repairs</a>
          
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="your-link-here" className="link">Gutters</a>
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
            alt="Windows & Doors"
            className="w-full h-[230px] object-cover border-4 border-blue-500"
          />
          <div className="p-4 text-center font-semibold">
          <a href="google" className="link">Wall Cladding</a>
          </div>
        </div>

        <div className="w-[320px] h-[295px] border rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1747100454/maera4_orb04n.jpg"
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