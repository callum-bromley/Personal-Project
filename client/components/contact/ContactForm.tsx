import React from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.info("Sending... Your message is being processed.", {
      autoClose: 3000,
      closeButton: true,
    });

    setResult("");
    setIsSubmitting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "2620a2b0-0e42-4390-8eab-f780c681e724");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        (event.target as HTMLFormElement).reset();

        toast.success("Message sent successfully!", {
          autoClose: 3000,
          closeButton: true,
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(data.message || "Something went wrong.", {
          autoClose: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.log("Error:", error);
      setResult("");
      toast.error("Something went wrong. Please try again later.", {
        autoClose: 3000,
        closeButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact px-4 sm:px-6 md:px-8 lg:px-16 py-8 max-w-4xl mx-auto">
      <div data-aos="fade-up" className="contact-container flex flex-col md:flex-row md:space-x-12">
        {/* Left Text */}
        <div data-aos="fade-up" className="contact-text mb-10 md:mb-0 md:flex-1">
          <span data-aos="fade-up" className="classy-font block text-3xl sm:text-4xl font-serif leading-tight">
            Raising the Standard
          </span>
          <span data-aos="fade-up" className="classy-font block text-3xl sm:text-4xl font-serif leading-tight">
            of Roofing
          </span>
          <span data-aos="fade-up" className="classy-font block text-3xl sm:text-4xl font-serif leading-tight">
            in Auckland
          </span>

          <p data-aos="fade-up" className="mt-6 text-gray-700 leading-relaxed pr-0 md:pr-20">
            Focused on quality and dependability, we provide expert roofing services you can trust, with skilled craftsmanship that delivers lasting results.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex-1 space-y-6">
          <div className="input-box">
            <input
              type="text"
              className="field w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              className="field w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              className="field w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Phone"
              name="phone"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              className="field w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Address"
              name="address"
              required
            />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              className="field mess w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
              placeholder="Tell us a bit about the job..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Get a Free Quote!"}
          </button>
          {result && <p className="mt-4 text-red-600 font-medium">{result}</p>}
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};
