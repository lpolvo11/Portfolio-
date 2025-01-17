import React, { useEffect, useState } from "react";
import "../styles/Contact.css"; // Make sure to import the styles
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_vieus7i",
        "template_mtchilo",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "zINawo9pxnO1LlTYl"
      )
      .then(
        (result) => {
          alert("email sent with sucesss");
        },
        (error) => {
          console.error(`Email failed to send: ${error}`);
        }
      );
  };

  return (
    <div data-aos="fade-up" className="contact-container">
      <form onSubmit={handleSubmit} className="form-section">
        <h2>Contact Me</h2>
        <input
          onChange={handleChange}
          name="name"
          value={formData.name}
          type="text"
          placeholder="Name..."
          required
        />
        <input
          onChange={handleChange}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email..."
          required
        />
        <textarea
          onChange={handleChange}
          name="message"
          value={formData.message}
          className="textarea"
          placeholder="Message..."
          required
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
