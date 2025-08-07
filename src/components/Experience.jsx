import React, { useEffect, useRef, useState } from "react";

function Experience() {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all experience items within the section and start their animations
            const experienceItems =
              entry.target.querySelectorAll(".experience-item");
            experienceItems.forEach((item) => {
              item.style.animationPlayState = "running";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    return () => observer.disconnect();
  }, []);
  // Data for your experiences - great for practicing JavaScript arrays and objects!
  const experiences = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "Central Bank of Armenia",
      duration: "June 2025 - Present",
      description:
        "Researching the impact of natural disasters on non-performing loans in Armenia",
      completed: true,
    },
    {
      id: 2,
      title: "Undergraduate Researcher",
      company: "MIT Sloan School of Management",
      duration: "June 2025- Present",
      description:
        "Building a graph neural network for modeling how market events affect assets and their relationships",
      completed: true,
    },
    {
      id: 3,
      title: "Undergraduate Researcher",
      company: "MIT Media Lab",
      duration: "January 2025 - February 2025",
      description:
        "Conducted machine learning fairness analysis on the Brixia COVID-19 X-ray dataset",
      completed: true,
    },
  ];

  return (
    <section className="experience" id="experience" ref={experienceRef}>
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-item">
              <div className="experience-checkbox">
                <span className="checkmark">✓</span>
              </div>
              <div className="experience-content">
                <h3>{experience.title}</h3>
                <p className="company">{experience.company}</p>
                <p className="duration">{experience.duration}</p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
