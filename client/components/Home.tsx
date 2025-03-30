import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div>
      <nav style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'right', alignItems: 'right', padding: 10 }}>
        <h1 style={{ margin: 0, color: 'white' }}>Give us a call today! (022) 123 456</h1>
      </nav>

      <nav className="bg-white-600 text-black p-8 flex justify-between items-center h-20">
        <h1 className="text-4xl font-bold flex-grow ml-40">Geros</h1>
        <span className="mx-2 text-white-600 flex items-center">|</span>

        <div className="space-x-6 flex-shrink-0 flex items-center">
          <a href="/" className="text-l hover:text-blue-600 px-3">
            HOME
          </a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          <a href="/services" className="text-l hover:text-blue-600 px-3">
            SERVICES
          </a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          <a href="/projects" className="text-l hover:text-blue-600 px-3">
            PROJECTS
          </a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          <a href="/gallery" className="text-l hover:text-blue-600 px-3">
            WORK GALLERY
          </a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          <a href="/about" className="text-l hover:text-blue-600 px-3">
            ABOUT
          </a>
          <span className="mx-2 text-blue-600 flex items-center">|</span>

          <a href="/contact" className="text-l hover:text-blue-600 px-3">
            contact us
          </a>
        </div>
      </nav>

      <div className="home-content">
        <Contact />
      </div>

      <div className="additional-info" style={{ padding: '20px', textAlign: 'center' }}>
        <h1 className='text-white'>/</h1>
        <h1 className='text-white'>/</h1>


        <div className="flex items-center justify-center">
  <div className="w-[80px] h-[2px] bg-gray-500 "></div>
  <span className="mx-3 text-4xl font-bold text-black-500 ">Welcome to my Website!</span>
  <div className="w-[80px] h-[2px] bg-gray-500"></div>
</div>

<h1 className='text-white'>/</h1>

        <p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
      </div>
      <div className="photo-gallery flex justify-center gap-40 mt-8">

  <img src="/path/to/image2.jpg" alt="" className="w-[400px] h-[297px] object-cover rounded-lg shadow-lg"/>
  <img src="/path/to/image3.jpg" alt="" className="w-[400px] h-[297px] object-cover rounded-lg shadow-lg"/>
</div>

<p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
<p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>
<p>We are excited to assist you with all your needs. Feel free to contact us or browse our services and projects to learn more!</p>


    </div>

    
  );
}


