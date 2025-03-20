import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <form>
        <div className="input-box">
          <label></label>
          <input type="text" className="field" placeholder="Name" required />
        </div>
        <div className="input-box">
          <label></label>
          <input type="email" className="field" placeholder="Email" required />
        </div>
        <div className="input-box">
          <label></label>
          <input type="text" className="field" placeholder="Phone" required />
        </div>
        <div className="input-box">
          <label></label>
          <input type="text" className="field" placeholder="Address" required />
        </div>
        <div className="input-box">
          <label></label>
          <textarea className="field mess" placeholder="Enter your message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
