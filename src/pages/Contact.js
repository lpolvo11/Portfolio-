import React, { useEffect } from "react";
import "../styles/Contact.css"; // Make sure to import the styles
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className="contact-container">
      <form className="form-section">
        <h2>Contact Me</h2>
        <input type="text" required placeholder="Name..." />
        <input type="email" required placeholder="Email..." />
        <textarea className="textarea" placeholder="Message..."></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
