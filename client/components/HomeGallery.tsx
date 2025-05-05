import "./HomeGallery.css"

export const HomeGallery = () => {
  return (
    
    <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white">/</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white">/</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white">/</h1>
          </div>
      <div className="flex items-center justify-center">
        <div className="w-[80px] h-[2px] bg-gray-500"></div>
        <span className="mx-3 text-4xl font-bold text-black-500 mt-4">Work Gallery</span>
        <div className="w-[80px] h-[2px] bg-gray-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
  <h1 className="text-white">/</h1>
  <p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
</div>

<div className="px-44 mt-8 relative">

  <div className="grid grid-cols-3 gap-4">

    <img src="/images/maera4.jpeg" alt="Photo1" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo2" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo3" className="w-full rounded-md" />

    <img src="/images/maera4.jpeg" alt="Photo4" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo5" className="w-full rounded-md" />
    <img src="/images/maera4.jpeg" alt="Photo6" className="w-full rounded-md" />
  </div>

  <button className="view-more-btn absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
    View More
  </button>
</div>
<h1 className="text-white">/</h1>
<h1 className="text-white">/</h1>
<h1 className="text-white">/</h1>



    </div>
  )
}