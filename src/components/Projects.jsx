import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all project cards within the section and start their animations
            const projectCards = entry.target.querySelectorAll(".project-card");
            projectCards.forEach((card) => {
              card.style.animationPlayState = "running";
            });
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Vite. Features responsive design and smooth scrolling navigation.",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "React Icons"],
      github: "https://github.com/hansenfan/portfolio-website",
      live: null,
    },
    {
      id: 2,
      title: "Boldly",
      description:
        "AI-powered challenge generator that creates personalized challenges using OpenAI API to push people out of their comfort zone.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "Tailwind CSS",
        "MongoDB",
      ],
      github:
        "https://github.com/weblab-class/jackwang1216-hansenfan-JerryLiu06",
      live: null,
    },
    {
      id: 3,
      title: "Data Analysis Projects",
      description:
        "Various data analysis and machine learning projects using Python, focusing on statistical modeling and predictive analytics.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/hansenfan/data-projects",
      live: null,
    },
    {
      id: 4,
      title: "Moda Studios Website",
      description:
        "Client website for Moda Studios built with React and Vite. Features modern design and responsive layout.",
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      github: "https://github.com/hansenfan/moda-studios",
      live: null,
    },
    {
      id: 5,
      title: "NBA ML Model",
      description:
        "Machine learning model for NBA game prediction and trade impact analysis using PyTorch and Spring Boot.",
      technologies: [
        "PyTorch",
        "Java",
        "Spring Boot",
        "Python",
        "Machine Learning",
      ],
      github: "https://github.com/hansenfan/nba-ml-model",
      live: null,
    },
    {
      id: 6,
      title: "Modelr",
      description:
        "Financial modeling platform that automates DCF analysis and financial modeling processes.",
      technologies: [
        "Python",
        "React",
        "Node.js",
        "Financial APIs",
        "Excel Integration",
      ],
      github: "https://github.com/hansenfan/modelr",
      live: null,
    },
  ];

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Move project-links outside of technologies and at the bottom */}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
