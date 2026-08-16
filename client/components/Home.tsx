import { Background } from "./contact/ContactForm";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MeetTheTeam from "./contact/carousel";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* =========================
          Main Navbar
      ========================= */}
      <nav className="fixed left-0 top-0 z-50 w-full bg-white text-black shadow-md">

        <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">

          {/* =========================
              Logo
          ========================= */}
          <Link
            to="/"
            className="shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786686495/502f887f5c5d67d1ed0a90fefcb996d5_tenjrr.jpg"
              alt="MaiHealth Logo"
              className="h-12 w-auto rounded-md transition-all duration-300 hover:scale-110 sm:h-14 md:h-16"
            />
          </Link>

          {/* =========================
              Desktop Navigation
          ========================= */}
          <div className="hidden items-center gap-2 md:flex lg:gap-4">

            {/* Home */}
            <Link
              to="/"
              className="rounded-full px-3 py-2 text-base text-red-600 transition-all duration-300 hover:scale-110 hover:text-[#c4161b] lg:text-lg"
            >
              Hommmme
            </Link>

            {/* Our Team */}
            <Link
              to="/team"
              className="rounded-full px-3 py-2 text-base text-black transition-all duration-300 hover:scale-110 hover:text-[#c4161b] lg:text-lg"
            >
              Our Team
            </Link>

            {/* Services */}
            <Link
              to="/services"
              className="rounded-full px-3 py-2 text-base text-black transition-all duration-300 hover:scale-110 hover:text-[#c4161b] lg:text-lg"
            >
              Services
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="rounded-full px-3 py-2 text-base text-black transition-all duration-300 hover:scale-110 hover:text-[#c4161b] lg:text-lg"
            >
              Contact
            </Link>

          </div>

          {/* =========================
              Mobile Hamburger
          ========================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mr-2 flex h-12 w-12 items-center justify-center rounded-full text-[#c4161b] transition-all duration-300 hover:scale-110 hover:bg-red-50 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">

              {/* Top line */}
              <span
                className={`block h-0.5 w-7 bg-[#c4161b] transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }`}
              />

              {/* Middle line */}
              <span
                className={`block h-0.5 w-7 bg-[#c4161b] transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : ""
                }`}
              />

              {/* Bottom line */}
              <span
                className={`block h-0.5 w-7 bg-[#c4161b] transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />

            </div>
          </button>

        </div>

        {/* =========================
            Mobile Menu
        ========================= */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white shadow-md transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="flex flex-col gap-2 px-6 py-4">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg text-red-600 transition-all duration-300 hover:bg-red-50"
            >
              Home
            </Link>

            {/* Our Team */}
            <Link
              to="/team"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg text-black transition-all duration-300 hover:bg-red-50 hover:text-[#c4161b]"
            >
              Our Team
            </Link>

            {/* Services */}
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg text-black transition-all duration-300 hover:bg-red-50 hover:text-[#c4161b]"
            >
              Services
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg text-black transition-all duration-300 hover:bg-red-50 hover:text-[#c4161b]"
            >
              Contact
            </Link>

          </div>
        </div>

      </nav>

      {/* =========================
          Page Content
          Padding prevents fixed
          navbar covering content
      ========================= */}
      <div className="pt-20">

        {/* =========================
            Hero / Contact Section
        ========================= */}
        <div className="home-content">
          <Background />
        </div>

        {/* =========================
            Information Section
        ========================= */}
        <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10">

          <h1 className="text-white">/</h1>

          <h2 className="text-3xl font-bold leading-tight text-[#c4161b] sm:text-4xl">
            Bringing change to your health experience.
          </h2>

          <p className="mt-6 max-w-[1200px] text-base leading-7 text-black sm:mt-8 sm:text-lg md:text-xl md:leading-8">
            At MaiHealth, we put you and whānau at the heart of healthcare.
            Providing a people-centred health service that builds trusted and
            genuine relationships. Helping you reconnect with your health,
            feel supported in your journey and become active in your own
            wellbeing. Our kaupapa is to walk alongside you and your whānau,
            supporting you to take charge of your hauora.
          </p>

          <p className="mt-6 max-w-[1200px] text-base leading-7 text-black sm:mt-8 sm:text-lg md:text-xl md:leading-8">
            Our goal is to provide access to a better healthcare system to all
            of Aotearoa, focusing on the communities that need it most.
          </p>

        </div>

        {/* =========================
            Values Section
        ========================= */}
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-10">

          {/* Box 1 */}
          <div className="rounded-3xl bg-[#c4161b] p-6 shadow-md sm:p-8">

            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706926/2ce937b80d20c109e0a0a618d088c0d8-removebg-preview_zw6m7r.png"
                alt="MaiHealth Logo"
                className="mt-2 h-28 w-auto rounded-md sm:mt-4 sm:h-32"
                data-aos="fade-down"
                data-aos-duration="1000"
              />
            </div>

            <div className="mt-4 text-left">
              <span className="text-lg font-thin text-white sm:text-xl">
                Our Values
              </span>
            </div>

            <div className="mt-2">
              <span className="text-2xl font-semibold text-white sm:text-3xl">
                Care
              </span>

              <span className="mx-2 text-2xl font-semibold text-white sm:text-3xl">
                ·
              </span>

              <span className="text-2xl font-semibold italic text-white sm:text-3xl">
                Manaaki
              </span>
            </div>

            <p className="mb-4 mt-6 leading-7 text-white/90 sm:mb-8">
              We care about the people we help and the time we give them. We
              are present and compassionate with our patients.
            </p>

          </div>

          {/* Box 2 */}
          <div className="rounded-3xl bg-[#c4161b] p-6 shadow-md sm:p-8">

            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706925/0c2efba7995055084826bf29da078284-removebg-preview_eh8hnt.png"
                alt="MaiHealth Logo"
                className="mt-2 h-28 w-auto rounded-md sm:mt-4 sm:h-32"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="200"
              />
            </div>

            <div className="mt-4 text-left">
              <span className="text-lg font-thin text-white sm:text-xl">
                Our Values
              </span>
            </div>

            <div className="mt-2">
              <span className="text-2xl font-semibold text-white sm:text-3xl">
                Partnership
              </span>

              <span className="mx-2 text-2xl font-semibold text-white sm:text-3xl">
                ·
              </span>

              <span className="text-2xl font-semibold italic text-white sm:text-3xl">
                Mahi Tahi
              </span>
            </div>

            <p className="mb-4 mt-6 leading-7 text-white/90 sm:mb-8">
              True partnerships require us to work together, to listen and
              communicate effectively to ensure we are always working towards
              a solution.
            </p>

          </div>

          {/* Box 3 */}
          <div className="rounded-3xl bg-[#c4161b] p-6 shadow-md sm:p-8 md:col-span-2 lg:col-span-1">

            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706925/bc1fcd5e5699303411814370217c9816-Photoroom_c4e2yi.png"
                alt="MaiHealth Logo"
                className="mt-2 h-28 w-auto rounded-md sm:mt-4 sm:h-32"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="400"
              />
            </div>

            <div className="mt-4 text-left">
              <span className="text-lg font-thin text-white sm:text-xl">
                Our Values
              </span>
            </div>

            <div className="mt-2">
              <span className="text-2xl font-semibold text-white sm:text-3xl">
                Respect
              </span>

              <span className="mx-2 text-2xl font-semibold text-white sm:text-3xl">
                ·
              </span>

              <span className="text-2xl font-semibold italic text-white sm:text-3xl">
                Whakaute
              </span>
            </div>

            <p className="mb-4 mt-6 leading-7 text-white/90 sm:mb-8">
              We are respectful of everyone’s differences, we are open minded
              and hold no judgement. We focus on enhancing mana.
            </p>

          </div>

        </div>

        {/* Spacing */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* =========================
            Model of Care
        ========================= */}
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-16 md:px-8 lg:grid-cols-3 lg:px-10">

          <div className="lg:col-span-2">

            <div
              className="flex items-center gap-3 sm:gap-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786751668/Screenshot_2026-08-15_at_11.54.19_AM_jnhpp2.png"
                alt="MaiHealth"
                className="h-14 w-14 rounded-full object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
              />

              <h2 className="text-3xl font-bold text-[#c4161b] sm:text-4xl">
                Model of Care
              </h2>
            </div>

            <p className="mt-6 text-lg font-extralight leading-8 text-black sm:mt-8 sm:text-xl md:text-2xl">
              Our model of care supplements and enhances the core primary
              services that exist but are frequently overwhelmed,
              inaccessible, and/or under-delivering to certain population
              groups.
            </p>

            <p className="mt-6 text-base leading-7 text-black sm:mt-8 sm:text-lg md:text-[19px] md:leading-8">
              Central to our model of care are Health Navigators who take over
              the burden of accessing and navigating health care systems for
              individuals and their whanau. Our Health Navigators aim to
              support an individual or their whanau to ensure their health and
              wellbeing needs are met in line with their expectations and
              values.
            </p>

            <p className="mt-6 text-base leading-7 text-black sm:mt-8 sm:text-lg md:text-[19px] md:leading-8">
              Māori, Pasifika, those with disabilities as well as other
              marginalized cultural people are often subjected to poor
              healthcare. This demographic is near to our heart and is a key
              motivator for us as a team. Our goal is to bring high quality
              and effective health care at the lowest possible cost to these
              marginalized groups. We want those that access our service and
              those that work in it feel a strong sense of respect that is
              given and received.
            </p>

          </div>

          <div className="flex justify-center">

            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786751755/Screenshot_2026-08-15_at_11.55.40_AM_dosxrc.png"
              alt="MaiHealth"
              className="h-auto w-full max-w-[500px] rounded-3xl object-cover lg:max-w-none"
            />

          </div>

        </div>

        {/* Spacing */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* =========================
            Meet The Team
        ========================= */}
        <MeetTheTeam />

        {/* Spacing */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* =========================
            Services
        ========================= */}
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-16 md:px-8 lg:grid-cols-5 lg:px-10">

          <div className="flex justify-center lg:col-span-2">

            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786752896/services_phbdlh.webp"
              alt="MaiHealth"
              className="w-full max-w-[500px] rounded-3xl object-contain lg:max-w-none"
            />

          </div>

          <div className="lg:col-span-3">

            <div
              className="flex items-center gap-3 sm:gap-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >

              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786752911/Screenshot_2026-08-15_at_12.15.01_PM_y4yeum.png"
                alt="MaiHealth"
                className="h-14 w-14 rounded-full object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
              />

              <h2 className="text-3xl font-bold text-[#c4161b] sm:text-4xl">
                Services
              </h2>

            </div>

            <p className="mt-6 text-base leading-7 text-black sm:mt-8 sm:text-lg md:text-[19px] md:leading-8">
              Our goal is to provide quality access to healthcare through our
              virtual healthcare service, designed to complement existing
              clinics who are seeking innovative ways to continue providing
              their patients with a timely, quality service particularly in
              regions where there are low levels of availability for clinical
              staff.
            </p>

            <p className="mt-4 text-base leading-7 text-black sm:text-lg md:text-[19px] md:leading-8">
              All our services are now offered virtually, by phone or an online
              forum.
            </p>

            <p className="mt-4 text-base italic leading-7 text-black sm:text-lg md:text-[19px] md:leading-8">
              Please note that we support contracted clinics only.
            </p>

          </div>

        </div>

        {/* Spacing */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* =========================
            Footer
        ========================= */}
        <footer className="w-full px-4 py-8 text-base text-black sm:px-6 sm:py-10 sm:text-lg md:px-8">

          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:flex-wrap md:gap-10 lg:gap-12">

            {/* Logo */}
            <div>
              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786686495/502f887f5c5d67d1ed0a90fefcb996d5_tenjrr.jpg"
                alt="MaiHealth Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">

              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754307/Screenshot_2026-08-15_at_12.34.11_PM_fapw6n.png"
                alt="Email"
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />

              <span>care@maihealth.nz</span>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">

              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754308/Screenshot_2026-08-15_at_12.34.30_PM_q8wttz.png"
                alt="Phone"
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />

              <span>021 360 320</span>

            </div>

            {/* Phone 2 */}
            <div className="flex items-center gap-3">

              <img
                src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754307/Screenshot_2026-08-15_at_12.34.16_PM_ereda2.png"
                alt="Phone"
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />

              <span>8700</span>

            </div>

          </div>

        </footer>

        {/* =========================
            Copyright
        ========================= */}
        <div className="flex w-full justify-center bg-[#c4161b] px-4 py-4 text-center text-xs text-white sm:text-sm">

          <p>
            Copyright © 2026 MaiHealth - Website by{" "}

            <a
              href="https://www.linkedin.com/in/callum-bromley-78bab3362/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Callum Bromley
            </a>

          </p>

        </div>

      </div>
    </div>
  );
}