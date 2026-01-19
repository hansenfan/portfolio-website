import React from "react";

function Hero() {
  return (
    <main className="main">
      <img 
        src="/images/Media Day 2026.png" 
        alt="Hansen Fan"
        className="profile-image"
      />
      <h1>Hansen Fan</h1>
      <p className="bio">
        student-athlete @ <a href="https://mit.edu" target="_blank" rel="noopener noreferrer">MIT</a> studying CS and math. 
        i like to play <a href="https://mitathletics.com/sports/mens-volleyball/roster/hansen-fan/14082" target="_blank" rel="noopener noreferrer">volleyball</a>, try new foods, and practice the cello.
      </p>
      <div className="links">
        <a href="https://linkedin.com/in/hansenfan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/hansenfan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:hzfan@mit.edu">Email</a>
      </div>
    </main>
  );
}

export default Hero;
