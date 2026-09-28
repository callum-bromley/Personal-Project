import { useEffect } from "react";
import AOS from "aos";

export const Background = () => {

  // Smooth, slower scroll to Services section
  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      const navbarHeight = 80;

      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      const targetPosition = sectionPosition - navbarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;

      // Slower scroll duration
      const duration = 1400;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(
          0,
          startPosition + distance * easedProgress
        );

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative m-0 min-h-[700px] w-full overflow-hidden p-0 sm:min-h-[750px] md:min-h-[850px] lg:min-h-[800px]">

      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786692250/mai_health_background_bbvnva.webp"
        alt="Mai Health"
        className="absolute inset-0 m-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[700px] w-full items-center justify-center px-6 sm:min-h-[650px] md:min-h-[750px] lg:min-h-[850px]">

        <div
          data-aos="fade-up"
          className="w-full max-w-5xl text-center text-white"
        >

          {/* Main heading */}
          <h1 className="mt-32 text-4xl font-medium leading-[1.05] tracking-tight sm:mt-40 md:mt-48 md:text-6xl lg:mt-52 lg:text-7xl">

            Healthcare{" "}

            {/* Across Aotearoa + curved underline */}
            <span
              className="relative inline-block"
              style={{ color: "#c4161b" }}
            >
              Across Aotearoa.

              <svg
                className="pointer-events-none absolute -bottom-8 -left-[3%] h-auto w-[108%] overflow-visible sm:-bottom-9 md:-bottom-10 lg:-bottom-11"
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
          <div className="mt-12 sm:mt-14 md:mt-16">
            <button
              onClick={scrollToServices}
              className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-all duration-200 hover:border-[#c4161b] hover:text-[#c4161b]"
            >
              Explore our services →
            </button>
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