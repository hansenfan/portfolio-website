import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="App">
      <nav className="navbar">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Hansen Fan</h2>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <button onClick={() => setActiveTab("experience")}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => setActiveTab("life")}>Life</button>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        {activeTab === "experience" && (
          <section className="hero">
            <div className="container">
              <h1>Hi, I'm Hansen Fan</h1>
              <p>CS, Math, and Finance Student at MIT</p>
              <p>Interested in AI, machine learning, and its applications</p>
              <p>
                In my free time, I like to play volleyball, travel, and play the
                cello.
              </p>
            </div>
          </section>
        )}
        {activeTab === "projects" && (
          <section className="hero">
            <div className="container">
              <h1>Projects</h1>
              <p>Here are some of my projects...</p>
            </div>
          </section>
        )}
        {activeTab === "life" && (
          <section className="hero">
            <div className="container">
              <img
                src="/Images/profile.PNG"
                alt="Hansen Fan"
                className="profile-picture"
              />
              <h1>Hi, I'm Hansen Fan</h1>
              <p>CS, Math, and Finance Student at MIT</p>
              <p>Interested in AI, machine learning, and its applications</p>
              <p>
                In my free time, I like to play volleyball, travel, and play the
                cello.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
