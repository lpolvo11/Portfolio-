import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaReddit } from "react-icons/fa";
import "../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="hero-section">
        <h1 data-aos="flip-up" className="hero-info">
          Hi, I'm Outhman Bahmmou{" "}
          <span>A Junior Self Taught Full Stack Developer</span>
        </h1>
        <button data-aos="fade-up" className="hire-btn">
          Hire me
        </button>
        <button data-aos="fade-up" className="cv-btn">
          Download CV
        </button>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/outhman-bahmmou-b9b319264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/lpolvo11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.reddit.com/user/MajesticTax263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit size={30} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
