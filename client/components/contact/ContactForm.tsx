import React from "react";
import "./Contact.css";

export const ContactForm = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending....")

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "2620a2b0-0e42-4390-8eab-f780c681e724")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json()

      if (data.success) {
        setResult("")
        event.target.reset()
      } else {
        console.log("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.log("Error:", error)
      setResult("Something went wrong. Please try again.")
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <span className="text-5xl font-bold text-white mb-4 block">
            Welcome to my Website!
          </span>
          <p>
            We offer decades of combined experience in the roofing industry.
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
    </section>
  )
}