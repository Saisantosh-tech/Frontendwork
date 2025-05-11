// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{ padding: "1rem", backgroundColor: "#1f2937", color: "white" }}
    >
      <h1>MyPortfolio</h1>
      <div>
        <a href="#about">About</a>
        {" | "}
        <a href="#projects">Projects</a>
        {" | "}
        <a href="#skills">Skills</a>
        {" | "}
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
