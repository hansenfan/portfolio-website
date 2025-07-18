import React, { useState, useEffect } from "react";

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollTop < heroHeight * 0.8); // Hide when 80% down the hero
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="nav-link"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
