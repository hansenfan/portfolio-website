import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="main">
      <h1>Hansen Fan</h1>
      <p className="bio">
        student-athlete @ MIT studying cs and math. i like to play{" "}
        <a
          href="https://mitathletics.com/sports/mens-volleyball/roster/hansen-fan/14082"
          target="_blank"
          rel="noopener noreferrer"
        >
          volleyball
        </a>
        , eat good food, and practice the cello.
      </p>
      <div className="links">
        <a
          href="https://linkedin.com/in/hansenfan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/hansenfan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:hzfan@mit.edu">Email</a>
        <Link to="/notes">Notes</Link>
      </div>
    </main>
  );
}

export default Hero;
