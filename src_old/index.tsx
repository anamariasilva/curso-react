import React from "react";
import ReactDOM from "react-dom";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Courses from "./screens/Courses";
import createGlobalStyle from "./styles/global";

const GlobalStyle = createGlobalStyle;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
