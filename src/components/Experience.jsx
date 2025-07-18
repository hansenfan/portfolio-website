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
        "Built features for web applications using React and Node.js",
      completed: true,
    },
    {
      id: 2,
      title: "Undergraduate Researcher",
      company: "MIT Sloan School of Management",
      duration: "June 2025- Present",
      description: "Working on machine learning algorithms and data analysis",
      completed: true,
    },
    {
      id: 3,
      title: "Undergraduate Researcher",
      company: "MIT Media Lab",
      duration: "January 2025 - February 2025",
      description:
        "Pursuing degree in Computer Science, Mathematics, and Finance",
      completed: true,
    },
    {
      id: 4,
      title: "Finance Intern",
      company: "Shetland Advisors",
      duration: "June 2024 - August 2024",
      description: "Leading team practices and coordinating game strategies",
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
