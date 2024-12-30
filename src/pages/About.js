import { useEffect } from "react";
import React from "react";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
      className="about-content"
    >
      <h1>About Me</h1>
      <p className="about-info">
        Hello! I'm Outhman Bahmmou, an 18-year-old junior full-stack developer,
        Python learner, and web penetration testing researcher from Agadir,
        Morocco. I started my programming journey at the age of 16, and in just
        a year and a half, I've gained a strong passion for developing web
        applications and diving into the world of cybersecurity. Currently, I’m
        focused on honing my skills in both front-end and back-end technologies,
        with a special interest in React, JavaScript, Node.js, and Python.
        Alongside development, I’m also dedicated to learning the ins and outs
        of web penetration testing, where I explore security vulnerabilities in
        web applications and how to protect them. My goal is simple: to become
        the best in my field. I am constantly learning and improving, pushing
        myself to master new tools, languages, and concepts. Whether it’s
        building robust applications or enhancing the security of websites, I’m
        driven to be at the top of my game. As I continue my journey, I’m always
        eager to collaborate on projects, share knowledge, and contribute to the
        tech community. I believe that growth comes from challenges and that
        there’s always more to learn. Let’s connect and build something amazing
        together!
      </p>
      <div className="skills-section">
        <h1>My skills </h1>
        <ul className="skills">
          <li>Javascript</li>
          <li>Python</li>
          <li>Html, Css</li>
          <li>ReactJs</li>
          <li>Networking</li>
        </ul>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
}

export default About;
