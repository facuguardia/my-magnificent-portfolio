import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./container/Layout";
// Pages
import Home from "./page/Home";
import About from "./page/About";
import Resume from "./page/Resume";
import Projects from "./page/Projects";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 h-screen box-border overflow-scroll">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
