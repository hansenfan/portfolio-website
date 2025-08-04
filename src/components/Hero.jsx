import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hansen Fan</h1>
          <p>
            Hi! I'm a student-athlete at MIT studying computer science with
            minors in mathematics and finance. In my free time, I like to play
            volleyball, try new foods, and practice the cello.
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
        {/* Image Card Wrapper for better alignment and style */}
        <div className="hero-image-card">
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}images/MediaDay.png`}
              alt="Profile Picture"
              className="profile-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
