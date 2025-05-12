import React from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Show the sending toast notification
    toast.info("Sending... Your message is being processed.", {
      autoClose: 3000,
      closeButton: true,
    });

    setResult("");

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

        // Optionally show a success toast
        toast.success("Message sent successfully!", {
          autoClose: 3000,
          closeButton: true,
        });
      } else {
        console.log("Error", data);
        setResult(data.message);

        // Optionally show an error toast
        toast.error(data.message || "Something went wrong.", {
          autoClose: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.log("Error:", error);
      setResult("");

      // Optionally show an error toast
      toast.error("Something went wrong. Please try again later.", {
        autoClose: 3000,
        closeButton: true,
      });
    }
  };

  return (
    <section className="contact">
      <div data-aos="fade-up" className="contact-container">
        <div data-aos="fade-up" className="contact-text">
          <span data-aos="fade-up" className="classy-font">
          Raising the Standard 
</span>
<span data-aos="fade-up" className="classy-font">
        of Roofing 

</span>
<span data-aos="fade-up" className="classy-font">
 in Auckland
</span>

          <p data-aos="fade-up" className="mr-40 mb-32 ">
            Focused on quality and dependability, we provide expert roofing services you can trust, with skilled craftsmanship that delivers lasting results.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <input
              type="text"
              className="field"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              className="field"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              className="field"
              placeholder="Phone"
              name="phone"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              className="field"
              placeholder="Address"
              name="address"
              required
            />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              className="field mess"
              placeholder="Tell us a bit about the job..."
              required
            />
          </div>
          <button type="submit">Get a Free Quote!</button>
        </form>
        {result && <p>{result}</p>}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};
