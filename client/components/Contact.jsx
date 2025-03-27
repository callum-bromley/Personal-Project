import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h1>Auckland’s Roofing Experts</h1>
          <p>
            Aspect Roofing offers decades of combined experience in the roofing indus
          </p>
        </div>

        <form>
          <div className="input-box">
            <input type="text" className="field" placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="email" className="field" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="text" className="field" placeholder="Phone" required />
          </div>
          <div className="input-box">
            <input type="text" className="field" placeholder="Address" required />
          </div>
          <div className="input-box">
            <textarea className="field mess" placeholder="Enter your message" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
