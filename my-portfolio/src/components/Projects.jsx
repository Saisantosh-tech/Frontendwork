// components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A portfolio page using React ",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A backend API with MySQL integration.",
    github: "https://github.com/yourusername/project2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "2rem", backgroundColor: "#f9fafb" }}
    >
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github}>GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
