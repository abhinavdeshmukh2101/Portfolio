import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Project from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Navbar from "../src/components/Navbar";

import stars from "../src/assets/video/stars_background.mp4";

// // experiment
// import SmallMenu from "./components/SmallMenu.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <video autoPlay loop muted class="video">
        <source src={stars} type="video/mp4" /> Your Browser Does not support
        video tag
      </video>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
