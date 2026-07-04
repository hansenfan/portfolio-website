import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Notes from "./components/Notes";
import DailyRating from "./components/DailyRating";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/daily-rating" element={<DailyRating />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
