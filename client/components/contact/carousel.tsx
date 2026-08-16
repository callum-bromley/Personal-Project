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
  const [cardsPerView, setCardsPerView] = useState(3);

  /*
    Used to restart the auto-scroll timer
    whenever the user clicks something.
  */
  const [resetTimer, setResetTimer] = useState(0);

  /*
    Responsive number of cards:

    Mobile  = 1
    Tablet  = 2
    Desktop = 3
  */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  /*
    Maximum carousel position
  */
  const maxPosition = Math.max(
    0,
    team.length - cardsPerView
  );

  /*
    Make sure the current position doesn't become invalid
    when changing screen size.
  */
  useEffect(() => {
    if (currentMember > maxPosition) {
      setCurrentMember(maxPosition);
    }
  }, [cardsPerView, currentMember, maxPosition]);

  /*
    Refresh AOS
  */
  useEffect(() => {
    AOS.refresh();
  }, []);

  /*
    Auto-scroll

    5000 milliseconds = 5 seconds.

    The resetTimer dependency means the timer
    starts again whenever Next, Previous or a dot
    is clicked.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((current) =>
        current >= maxPosition ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxPosition, resetTimer]);

  /*
    Restart the timer
  */
  const restartTimer = () => {
    setResetTimer((value) => value + 1);
  };

  /*
    Previous button
  */
  const previousMember = () => {
    setCurrentMember((current) =>
      current <= 0 ? maxPosition : current - 1
    );

    restartTimer();
  };

  /*
    Next button
  */
  const nextMember = () => {
    setCurrentMember((current) =>
      current >= maxPosition ? 0 : current + 1
    );

    restartTimer();
  };

  /*
    Dot navigation
  */
  const goToMember = (index: number) => {
    setCurrentMember(index);

    restartTimer();
  };

  return (
    <section className="w-full overflow-hidden bg-[#c4161b] py-12 sm:py-14 md:py-16">

      {/* =========================
          Heading
      ========================= */}
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 md:px-8">

        <div
          className="mb-8 flex items-center gap-3 sm:gap-4 md:ml-8 lg:ml-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786750775/Screenshot_2026-08-15_at_11.39.23_AM_kt1vir.png"
            alt="MaiHealth"
            className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Meet Our Team
          </h2>
        </div>
      </div>

      {/* =========================
          Carousel
      ========================= */}
      <div className="mx-auto flex w-full max-w-[1500px] items-center gap-2 px-2 sm:gap-4 sm:px-6 md:px-8">

        {/* =========================
            Left Arrow
        ========================= */}
        <button
          onClick={previousMember}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            text-3xl
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/10
            sm:h-12
            sm:w-12
            sm:text-4xl
            md:h-14
            md:w-14
            md:text-5xl
          "
          aria-label="Previous team members"
        >
          ←
        </button>

        {/* =========================
            Carousel Window
        ========================= */}
        <div className="min-w-0 flex-1 overflow-hidden">

          {/* Moving Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentMember * (100 / cardsPerView)
              }%)`,
            }}
          >
            {team.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className={`
                  w-full
                  shrink-0
                  px-1.5
                  sm:px-2
                  ${
                    cardsPerView === 1
                      ? "md:w-1/2 lg:w-1/3"
                      : cardsPerView === 2
                        ? "w-1/2 lg:w-1/3"
                        : "w-1/3"
                  }
                `}
              >

                {/* =========================
                    Card
                ========================= */}
                <div
                  className="
                    flex
                    h-[330px]
                    flex-col
                    items-center
                    rounded-2xl
                    bg-white
                    p-5
                    text-center
                    shadow-lg
                    sm:h-[360px]
                    sm:rounded-3xl
                    sm:p-7
                    md:h-[400px]
                    md:p-10
                  "
                >

                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      h-36
                      w-36
                      rounded-full
                      object-cover
                      sm:h-44
                      sm:w-44
                      md:h-52
                      md:w-52
                    "
                  />

                  {/* Name */}
                  <h3
                    className="
                      mt-4
                      flex
                      min-h-[56px]
                      w-full
                      items-start
                      justify-center
                      text-xl
                      font-semibold
                      leading-7
                      text-black
                      sm:mt-5
                      sm:min-h-[64px]
                      sm:text-2xl
                      sm:leading-8
                      md:mt-6
                      md:min-h-[64px]
                    "
                  >
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="
                      mt-1
                      flex
                      min-h-[48px]
                      w-full
                      items-start
                      justify-center
                      text-base
                      leading-6
                      text-gray-500
                      sm:mt-2
                      sm:min-h-[56px]
                      sm:text-lg
                      sm:leading-7
                    "
                  >
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
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            text-3xl
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/10
            sm:h-12
            sm:w-12
            sm:text-4xl
            md:h-14
            md:w-14
            md:text-5xl
          "
          aria-label="Next team members"
        >
          →
        </button>

      </div>

      {/* =========================
          Dots
      ========================= */}
      <div className="mt-7 flex justify-center gap-2 sm:mt-8 sm:gap-3">

        {Array.from({
          length: maxPosition + 1,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToMember(index)}
            aria-label={`Go to team position ${index + 1}`}
            className={`
              h-2.5
              w-2.5
              rounded-full
              transition-all
              duration-300
              sm:h-3
              sm:w-3
              ${
                currentMember === index
                  ? "scale-125 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}