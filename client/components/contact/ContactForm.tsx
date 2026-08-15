export const ContactForm = () => {
  return (
    <section className="relative m-0 min-h-[745px] w-full overflow-hidden p-0">

      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786692250/mai_health_background_bbvnva.webp"
        alt="Mai Health"
        className="absolute inset-0 m-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[650px] w-full items-center justify-center px-6">
        <div
          data-aos="fade-up"
          className="w-full max-w-5xl text-center text-white"
        >

          {/* Small heading */}
         
          {/* Main heading */}
          <h1 className="text-5xl font-medium leading-[1.05] tracking-tight mt-60 md:text-6xl lg:text-7xl">
            

            Healthcare{" "}

            {/* Across Aotearoa + curved underline */}
            <span className="relative inline-block" style={{ color: "#c4161b" }}>
              Across Aotearoa.

              <svg
                className="pointer-events-none absolute -bottom-11 -left-[3%] h-auto w-[108%] overflow-visible"
                viewBox="0 0 500 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 25 C130 15, 260 20, 380 20 C430 20, 465 24, 492 32"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength="1"
                  className="animate-draw-underline"
                />
              </svg>
            </span>
          </h1>

        

          {/* Link */}
          <div className="mt-16">
            <a
              href="/services"
              className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-all duration-200 hover:border-[#c4161b] hover:text-[#c4161b]"
            >
              Explore our services →
            </a>
          </div>

        </div>
      </div>

      {/* Underline animation */}
      <style>
        {`
          @keyframes drawUnderline {
            from {
              stroke-dasharray: 1;
              stroke-dashoffset: 1;
            }

            to {
              stroke-dasharray: 1;
              stroke-dashoffset: 0;
            }
          }

          .animate-draw-underline {
            animation: drawUnderline 0.6s ease-out 0.2s forwards;
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
          }
        `}
      </style>

    </section>
  );
};