import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hansen Fan</h1>
          <p>
            Hi! I'm a student-athlete at MIT planning to study computer science
            with minors in mathematics and finance. In my free time, I like to
            play volleyball, try new foods, and practice the cello.
          </p>
          <div className="hero-social-links">
            <a
              href="https://github.com/hansenfan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hansenfan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/Images/profile.PNG"
            alt="Hansen Fan"
            className="profile-picture"
          />
          <img
            src="/Images/profile.PNG"
            alt="Hansen Fan"
            className="profile-picture"
          />
          <img
            src="/Images/profile.PNG"
            alt="Hansen Fan"
            className="profile-picture"
          />
          <img
            src="/Images/profile.PNG"
            alt="Hansen Fan"
            className="profile-picture"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
