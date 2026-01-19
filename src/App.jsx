import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Hero />
    </div>
  );
}

export default App;
