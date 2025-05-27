import React, { useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className="contact px-4 sm:px-6 md:px-8 lg:px-16 py-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-serif classy-font mb-2">
            Raising the Standard
          </h2>
          <h2 className="text-3xl sm:text-4xl font-serif classy-font mb-2">
            of Roofing
          </h2>
          <h2 className="text-3xl sm:text-4xl font-serif classy-font mb-6">
            in Auckland
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Focused on quality and dependability, we provide expert roofing
            services you can trust, with skilled craftsmanship that delivers
            lasting results.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={onSubmit}
          className="flex-1 space-y-5 w-full max-w-md mx-auto md:mx-0"
        >
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Phone"
            name="phone"
            required
          />
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Address"
            name="address"
            required
          />
          <textarea
            name="message"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
            placeholder="Tell us a bit about the job..."
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Get a Free Quote!"}
          </button>
          {result && <p className="text-red-600 mt-2">{result}</p>}
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};
