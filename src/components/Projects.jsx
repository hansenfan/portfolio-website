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
      title: "AI Chat Application",
      description:
        "Built a real-time chat application using React, Node.js, and OpenAI API. Features include message history, user authentication, and intelligent responses.",
      technologies: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
      github: "https://github.com/hansenfan/ai-chat",
      live: "https://ai-chat-demo.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with React and Vite. Features smooth animations, responsive design, and clean UI/UX.",
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      github: "https://github.com/hansenfan/portfolio",
      live: "https://hansenfan.dev",
    },
    {
      id: 3,
      title: "Machine Learning Model",
      description:
        "Developed a neural network for image classification using TensorFlow and Python. Achieved 95% accuracy on test dataset.",
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
      github: "https://github.com/hansenfan/ml-model",
      live: null,
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform with payment integration, user management, and admin dashboard.",
      technologies: ["React", "Express.js", "Stripe", "PostgreSQL", "Redux"],
      github: "https://github.com/hansenfan/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
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
