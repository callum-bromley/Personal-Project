import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Lance O'Sullivan",
    role: "Doctor / Director",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Raylee Te Moananui",
    role: "Service Operations & Executive Coordinator",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Katherine Quinn",
    role: "Registered Nurse",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Paige Malaefono",
    role: "Registered Nurse",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Jodi Rangitaawa",
    role: "Registered Nurse",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Palu Tupou",
    role: "Health Navigator",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Te Wewini Karepa-Cowell",
    role: "Health Navigator",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
  {
    name: "Dylan Tautori",
    role: "Health Navigator",
    image:
      "https://res.cloudinary.com/dynrnpszg/image/upload/v1786749727/Portrait_Placeholder_w0vjb0.png",
  },
];

export default function MeetTheTeam() {
  const [currentMember, setCurrentMember] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState(3);

  /*
    Change how many people are visible depending
    on the screen width.
  */
  useEffect(() => {
    const updateVisibleMembers = () => {
      if (window.innerWidth < 768) {
        // Phone
        setVisibleMembers(1);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setVisibleMembers(2);
      } else {
        // Laptop / desktop / monitor
        setVisibleMembers(3);
      }
    };

    updateVisibleMembers();

    window.addEventListener("resize", updateVisibleMembers);

    return () => {
      window.removeEventListener("resize", updateVisibleMembers);
    };
  }, []);

  /*
    Maximum position changes depending on how many
    people are currently visible.
  */
  const maxPosition = Math.max(
    0,
    team.length - visibleMembers
  );

  /*
    Keep current position valid when changing
    between phone/tablet/desktop sizes.
  */
  useEffect(() => {
    if (currentMember > maxPosition) {
      setCurrentMember(maxPosition);
    }
  }, [visibleMembers, maxPosition, currentMember]);

  /*
    AOS
  */
  useEffect(() => {
    AOS.refresh();
  }, []);

  /*
    Auto-scroll every 5 seconds.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((current) =>
        current >= maxPosition ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxPosition]);

  /*
    Previous button
  */
  const previousMember = () => {
    setCurrentMember((current) =>
      current <= 0 ? maxPosition : current - 1
    );
  };

  /*
    Next button
  */
  const nextMember = () => {
    setCurrentMember((current) =>
      current >= maxPosition ? 0 : current + 1
    );
  };

  /*
    Each card takes up 1 / visibleMembers
    of the carousel.
  */
  const cardWidth = 100 / visibleMembers;

  return (
    <section className="w-full overflow-hidden bg-[#c4161b] py-10 sm:py-12 md:py-16">

      {/* =========================
          Heading
      ========================= */}
      <div className="mx-auto w-full max-w-[1450px] px-5 sm:px-8">

        <div
          className="mb-8 flex items-center gap-3 sm:gap-4 md:mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >

          {/* Heading Icon */}
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786750775/Screenshot_2026-08-15_at_11.39.23_AM_kt1vir.png"
            alt="MaiHealth"
            className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />

          {/* Heading */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-4xl">
            Meet Our Team
          </h2>

        </div>
      </div>

      {/* =========================
          Carousel
      ========================= */}
      <div className="mx-auto flex w-full max-w-[1500px] items-center gap-1 px-2 sm:gap-3 sm:px-5 md:gap-4 md:px-8">

        {/* =========================
            Left Arrow
        ========================= */}
        <button
          onClick={previousMember}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-3xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-white sm:h-12 sm:w-12 sm:text-4xl md:h-14 md:w-14 md:text-5xl"
          aria-label="Previous team members"
        >
          ←
        </button>

        {/* =========================
            Carousel Window
        ========================= */}
        <div className="min-w-0 flex-1 overflow-hidden">

          {/* =========================
              Moving Track
          ========================= */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentMember * cardWidth
              }%)`,
            }}
          >

            {team.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="shrink-0 px-2 sm:px-3"
                style={{
                  width: `${cardWidth}%`,
                }}
              >

                {/* =========================
                    Card
                ========================= */}
                <div className="flex min-h-[360px] w-full flex-col items-center rounded-3xl bg-white p-5 text-center shadow-lg sm:min-h-[380px] sm:p-7 md:h-[400px] md:p-10">

                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-36 w-36 shrink-0 rounded-full object-cover sm:h-44 sm:w-44 md:h-52 md:w-52"
                  />

                  {/* Name */}
                  <h3 className="mt-5 flex min-h-[64px] w-full items-start justify-center text-xl font-semibold leading-7 text-black sm:mt-6 sm:text-2xl sm:leading-8">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-2 flex min-h-[64px] w-full items-start justify-center text-base leading-6 text-gray-500 sm:text-lg sm:leading-7">
                    {member.role}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* =========================
            Right Arrow
        ========================= */}
        <button
          onClick={nextMember}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-3xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-white sm:h-12 sm:w-12 sm:text-4xl md:h-14 md:w-14 md:text-5xl"
          aria-label="Next team members"
        >
          →
        </button>

      </div>

      {/* =========================
          Dots
      ========================= */}
      <div className="mt-6 flex justify-center gap-2 sm:mt-8 sm:gap-3">

        {Array.from({
          length: maxPosition + 1,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMember(index)}
            aria-label={`Go to team position ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
              currentMember === index
                ? "scale-125 bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}

      </div>

    </section>
  );
}