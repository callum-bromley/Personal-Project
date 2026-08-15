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

  const maxPosition = team.length - 3;

  // Refresh AOS when this component loads
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((current) =>
        current >= maxPosition ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [maxPosition]);

  const previousMember = () => {
    setCurrentMember((current) =>
      current <= 0 ? maxPosition : current - 1
    );
  };

  const nextMember = () => {
    setCurrentMember((current) =>
      current >= maxPosition ? 0 : current + 1
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#c4161b] py-16">

      {/* Heading */}
      <div
        className="mb-8 ml-36 flex items-center gap-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img
          src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786750775/Screenshot_2026-08-15_at_11.39.23_AM_kt1vir.png"
          alt="MaiHealth"
          className="h-16 w-16 rounded-full object-contain"
        />

        <h2 className="text-4xl font-bold text-white">
          Meet Our Team
        </h2>
      </div>

      {/* Carousel */}
      <div className="mx-auto flex max-w-[1500px] items-center gap-4 px-8">

        {/* Left Arrow */}
        <button
          onClick={previousMember}
          className="mr-4 flex h-14 w-14 shrink-0 items-center justify-center text-5xl text-white transition hover:scale-110"
          aria-label="Previous team members"
        >
          ←
        </button>

        {/* Carousel Window */}
        <div className="min-w-0 flex-1 overflow-hidden">

          {/* Moving Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentMember * (100 / 3)}%)`,
            }}
          >
            {team.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="w-full shrink-0 px-3 md:w-1/3"
              >

                {/* Card */}
                <div className="flex h-[400px] flex-col items-center rounded-3xl bg-white p-10 text-center shadow-lg">

                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-52 w-52 rounded-full object-cover"
                  />

                  {/* Name */}
                  <h3 className="mt-6 flex h-16 w-full items-start justify-center text-2xl font-semibold leading-8 text-black">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-2 flex min-h-16 w-full items-start justify-center text-lg leading-7 text-gray-500">
                    {member.role}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextMember}
          className="ml-4 flex h-14 w-14 shrink-0 items-center justify-center text-5xl text-white transition hover:scale-110"
          aria-label="Next team members"
        >
          →
        </button>

      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: maxPosition + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMember(index)}
            aria-label={`Go to team position ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
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