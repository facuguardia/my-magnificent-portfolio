import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./page/Home";
import About from "./page/About";
import Resume from "./page/Resume";
import Portfolio from "./page/Portfolio";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
