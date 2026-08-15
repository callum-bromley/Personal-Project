import Contact from "../components/contact/Contact";
import "./contact/Contact.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MeetTheTeam from "./contact/carousel";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full">
      {/* =========================
          Main Navbar
      ========================= */}
      <nav className="sticky top-0 z-50 flex h-20 items-center bg-white text-black shadow-md">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-8">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786686495/502f887f5c5d67d1ed0a90fefcb996d5_tenjrr.jpg"
              alt="MaiHealth Logo"
              className="h-16 w-auto rounded-md transition-all duration-300 hover:scale-110"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Home */}
            <Link
              to="/"
              className="px-2 text-lg text-red-600 transition-all duration-500 hover:scale-110 hover:text-[#c4161b]"
            >
              Home
            </Link>

            {/* Our Team */}
            <Link
              to="/services"
              className="px-2 text-lg text-black transition-all duration-500 hover:scale-110 hover:text-[#c4161b]"
            >
              Our Team
            </Link>

            {/* Services */}
            <Link
              to="/services"
              className="px-2 text-lg text-black transition-all duration-500 hover:scale-110 hover:text-[#c4161b]"
            >
              Services
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="px-2 text-lg text-black transition-all duration-500 hover:scale-110 hover:text-[#c4161b]"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* =========================
          Hero / Contact Section
      ========================= */}
      <div className="home-content">
        <Contact />
      </div>

      {/* =========================
          Information Section
      ========================= */}
      <div className="mx-auto w-full max-w-[1400px] px-8 py-16">
        <h1 className="text-white">/</h1>

        {/* Main heading */}
        <h2 className="text-4xl font-bold text-[#c4161b]">
          Bringing change to your health experience.
        </h2>

        {/* Paragraph */}
        <p className="mt-8 max-w-[1200px] text-xl leading-8 text-black">
          At MaiHealth, we put you and whānau at the heart of healthcare.
          Providing a people-centred health service that builds trusted and
          genuine relationships. Helping you reconnect with your health, feel
          supported in your journey and become active in your own wellbeing.
          Our kaupapa is to walk alongside you and your whānau, supporting you
          to take charge of your hauora.
        </p>

        {/* Main paragraph */}
        <p className="mt-8 max-w-[1200px] text-xl leading-8 text-black">
          Our goal is to provide access to a better healthcare system to all of
          Aotearoa, focusing on the communities that need it most.
        </p>
      </div>

      {/* =========================
          Values Section
      ========================= */}
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 px-8 md:grid-cols-3">

        {/* Box 1 */}
        <div className="rounded-3xl bg-[#c4161b] p-8 shadow-md">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706926/2ce937b80d20c109e0a0a618d088c0d8-removebg-preview_zw6m7r.png"
              alt="MaiHealth Logo"
              className="mt-4 h-32 w-auto rounded-md"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>

          {/* Title */}
          <div className="mt-2 text-left">
            <span className="text-xl font-thin text-white">
              Our Values
            </span>
          </div>

          {/* Value */}
          <div className="mt-2">
            <span className="text-3xl font-semibold text-white">
              Care
            </span>

            <span className="mx-2 text-3xl font-semibold text-white">
              ·
            </span>

            <span className="text-3xl font-semibold italic text-white">
              Manaaki
            </span>
          </div>

          {/* Description */}
          <p className="mb-8 mt-6 leading-7 text-white/90">
            We care about the people we help and the time we give them. We are
            present and compassionate with our patients.
          </p>
        </div>

        {/* Box 2 */}
        <div className="rounded-3xl bg-[#c4161b] p-8 shadow-md">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706925/0c2efba7995055084826bf29da078284-removebg-preview_eh8hnt.png"
              alt="MaiHealth Logo"
              className="mt-4 h-32 w-auto rounded-md"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </div>

          {/* Title */}
          <div className="mt-2 text-left">
            <span className="text-xl font-thin text-white">
              Our Values
            </span>
          </div>

          {/* Value */}
          <div className="mt-2">
            <span className="text-3xl font-semibold text-white">
              Partnership
            </span>

            <span className="mx-2 text-3xl font-semibold text-white">
              ·
            </span>

            <span className="text-3xl font-semibold italic text-white">
              Mahi Tahi
            </span>
          </div>

          {/* Description */}
          <p className="mb-8 mt-6 leading-7 text-white/90">
            True partnerships require us to work together, to listen and
            communicate effectively to ensure we are always working towards a
            solution.
          </p>
        </div>

        {/* Box 3 */}
        <div className="rounded-3xl bg-[#c4161b] p-8 shadow-md">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786706925/bc1fcd5e5699303411814370217c9816-Photoroom_c4e2yi.png"
              alt="MaiHealth Logo"
              className="mt-4 h-32 w-auto rounded-md"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
          </div>

          {/* Title */}
          <div className="mt-2 text-left">
            <span className="text-xl font-thin text-white">
              Our Values
            </span>
          </div>

          {/* Value */}
          <div className="mt-2">
            <span className="text-3xl font-semibold text-white">
              Respect
            </span>

            <span className="mx-2 text-3xl font-semibold text-white">
              ·
            </span>

            <span className="text-3xl font-semibold italic text-white">
              Whakaute
            </span>
          </div>

          {/* Description */}
          <p className="mb-8 mt-6 leading-7 text-white/90">
            We are respectful of everyone’s differences, we are open minded
            and hold no judgement. We focus on enhancing mana.
          </p>
        </div>
      </div>

      <div className="h-32" />

      {/* =========================
          Model of Care Section
      ========================= */}
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-3">

        {/* Text */}
        <div className="md:col-span-2">
          {/* Heading */}
          <div
            className="flex items-center gap-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786751668/Screenshot_2026-08-15_at_11.54.19_AM_jnhpp2.png"
              alt="MaiHealth"
              className="h-20 w-20 rounded-full object-contain"
            />

            <h2 className="text-4xl font-bold text-[#c4161b]">
              Model of Care
            </h2>
          </div>

          <p className="mt-8 text-2xl font-extralight leading-8 text-black">
            Our model of care supplements and enhances the core primary
            services that exist but are frequently overwhelmed, inaccessible,
            and/or under-delivering to certain population groups.
          </p>

          <p className="mt-8 text-[19px] leading-8 text-black">
            Central to our model of care are Health Navigators who take over
            the burden of accessing and navigating health care systems for
            individuals and their whanau. Our Health Navigators aim to support
            an individual or their whanau to ensure their health and wellbeing
            needs are met in line with their expectations and values.
          </p>

          <p className="mt-8 text-[19px] leading-8 text-black">
            Māori, Pasifika, those with disabilities as well as other
            marginalized cultural people are often subjected to poor
            healthcare. This demographic is near to our heart and is a key
            motivator for us as a team. Our goal is to bring high quality and
            effective health care at the lowest possible cost to these
            marginalized groups. We want those that access our service and
            those that work in it feel a strong sense of respect that is given
            and received.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786751755/Screenshot_2026-08-15_at_11.55.40_AM_dosxrc.png"
            alt="MaiHealth"
            className="h-auto w-full translate-y-5 rounded-3xl object-cover"
          />
        </div>
      </div>

      <div className="h-32" />

      {/* =========================
          Meet the Team
      ========================= */}
      <MeetTheTeam />

      <div className="h-32" />

      {/* =========================
          Services Section
      ========================= */}
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-5">

        {/* Image - 2/5 */}
        <div className="flex justify-center md:col-span-2">
          <img
            src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786752896/services_phbdlh.webp"
            alt="MaiHealth"
            className="w-full rounded-3xl object-contain"
          />
        </div>

        {/* Text - 3/5 */}
        <div className="md:col-span-3">

          {/* Services Heading */}
          <div
            className="flex items-center gap-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786752911/Screenshot_2026-08-15_at_12.15.01_PM_y4yeum.png"
              alt="MaiHealth"
              className="h-20 w-20 rounded-full object-contain"
            />

            <h2 className="text-4xl font-bold text-[#c4161b]">
              Services
            </h2>
          </div>

          <p className="mt-8 text-[19px] leading-8 text-black">
            Our goal is to provide quality access to healthcare through our
            virtual healthcare service, designed to complement existing
            clinics who are seeking innovative ways to continue providing
            their patients with a timely, quality service particularly in
            regions where there are low levels of availability for clinical
            staff.
          </p>

          <p className="mt-4 text-[19px] leading-8 text-black">
            All our services are now offered virtually, by phone or an online
            forum.
          </p>

          <p className="mt-4 text-[19px] italic leading-8 text-black">
            Please note that we support contracted clinics only.
          </p>
        </div>
      </div>

      <div className="h-32" />

      {/* =========================
          Footer Contact
      ========================= */}
      <footer className="w-full px-8 py-10 text-lg text-black">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-12">

          {/* Logo */}
          <div>
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786686495/502f887f5c5d67d1ed0a90fefcb996d5_tenjrr.jpg"
              alt="MaiHealth Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 text-lg">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754307/Screenshot_2026-08-15_at_12.34.11_PM_fapw6n.png"
              alt="Email"
              className="h-10 w-10 object-contain"
            />

            <span>care@maihealth.nz</span>
          </div>

          {/* Phone 1 */}
          <div className="flex items-center gap-4 text-lg">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754308/Screenshot_2026-08-15_at_12.34.30_PM_q8wttz.png"
              alt="Phone"
              className="h-10 w-10 object-contain"
            />

            <span>021 360 320</span>
          </div>

          {/* Phone 2 */}
          <div className="flex items-center gap-4 text-lg">
            <img
              src="https://res.cloudinary.com/dynrnpszg/image/upload/v1786754307/Screenshot_2026-08-15_at_12.34.16_PM_ereda2.png"
              alt="Phone"
              className="h-10 w-10 object-contain"
            />

            <span>8700</span>
          </div>
        </div>
      </footer>

      {/* =========================
          Copyright
      ========================= */}
      <div className="flex w-full justify-center bg-[#c4161b] p-4 text-sm text-white">
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
  );
}